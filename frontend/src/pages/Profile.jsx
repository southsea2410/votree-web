import { Fragment, useState, useEffect } from 'react';
import { NavBar, SumProfile, UserPost, UpSellerDialog, EditProfileDialog, CartList } from '../components';
import { Box, Card, CardContent, CardHeader, Container, Divider } from '@mui/material';
import { colors } from '../styles';
import { content, contentLong } from '../assets/contents/content';
import { useNavigate, useParams } from 'react-router-dom';
import { useNavBarHeight } from '../hooks/useNavBarHeight';
import { Post_test, Product_test } from '../assets/images';

// Redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProfileInfo, updateProfileInfo } from '../redux/features/profile/profileInfoSlice';
import { selectStoreInfo, updateStoreInfo } from '../redux/features/profile/storeInfoSlice';
import { selectIsLoggedIn, updateIsLoggedIn } from '../redux/features/account/isLoggedInSlice';
import { updateNavBarState } from '../redux/features/common/navBarStateSlice';
import { addProduct, selectProducts } from '../redux/features/product/productsSlice';

// Constants
import { fieldNames, storeFieldNames } from '../constants';

// Utils
import { fetchUserInfo, fetchUserProducts } from '../utils/apiUtils';
import { updateIsSeller } from '../redux/features/account/isSellerSlice';

// Product Card
import { ProductCard } from '../components';
import AddProductDialog from '../components/profile/newProductDialog';
const salePostsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 388px)',
    gap: '30px',
    justifyContent: 'center',
    width: '100%'
};

function ProductsContainer({ ...props }) {

    const list = props.products.map((product) => {

        // Ở chỗ này nếu lấy từ Redux thì product sẽ có dạng product = {id: {thông tin trong này}}
        // Lấy từ fetch thì sẽ có dạng product = {thông tin trong này}
        // If ở dưới tạm để xử lý 2 case trên
        const temp = Object.values(product)
        if (temp.length < 2) product = Object.values(product)[0];

        return (
            <ProductCard
                key={product._id}
                variant={props.isYourProfile && props.isLoggedIn ? 'edit' : 'product'}
                {...product}
            />
        );
    });

    return <Box sx={salePostsContainer}>{list}</Box>;
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '15px',
    backgroundColor: colors.secondary,
    paddingBottom: '50px'
};

// 6577d9852aeaa934ac6173f4
// 6577d9852aeaa934ac6173f5

export default function UserProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(updateNavBarState(2)); // state 2 is profile

    const profileInfoFromRedux = useSelector(selectProfileInfo);
    const storeInfoFromRedux = useSelector(selectStoreInfo);
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector(selectIsLoggedIn));

    
    const [summary, setSummary] = useState({});
    
    const [profileInfo, setProfileInfo] = useState(profileInfoFromRedux);
    // console.log(products, profileInfo, 1);
    const [storeInfo, setStoreInfo] = useState(storeInfoFromRedux);
    
    const { id } = useParams();
    const isYourProfile = id === undefined || id === '';

    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        async function fetchProfileInfo() {
            if (isYourProfile) {

                // Fetch mỗi khi vào Profile
                // Redux chỉ dùng cho Navbar và Edit Product Info Dialog mà thôi
                const { profile, store } = await fetchUserInfo();
                if (profile) {
                    const { productsData } = await fetchUserProducts();
                    console.log("This user Product fetched", productsData);
                    for (let i = 0; i < productsData.length; ++i) {
                        dispatch(addProduct({ id: productsData[i]._id, product: productsData[i] }));
                    }
                    dispatch(updateProfileInfo(profile));
                    dispatch(updateIsLoggedIn(true));
                    setProducts(productsData);

                    setIsLoggedIn(true);
                    setSummary({ fullName: profile.fullName, role: profile.role.toLowerCase() });
                    setProfileInfo(profile);
                    if (store) {
                        setStoreInfo(store);
                        dispatch(updateStoreInfo(store));
                        dispatch(updateIsSeller(true));
                    }
                } else {
                    dispatch(updateNavBarState(0));
                    navigate('/');
                }
            } else {
                const data = await fetch('/api/v1/userInfo/' + id, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                const arr = await data.json();
                const info = arr?.userInfo;
                if (arr?.userInfo) {
                    const profile = {
                        role: info.role || '',
                        avatar: info.avatar || '',
                        fullName: info.fullName || '',
                        dateOfBirth: info.dateOfBirth || '',
                        gender: info.gender || '',
                        phoneNumber: info.phoneNumber || '',
                        email: info.email || '',
                        address: info.address || '',
                        interest: info.interest || ''
                    };
                    setProfileInfo(profile);
                    setSummary({ fullName: profile.fullName, role: profile.role.toLowerCase() });
                    if (profile.role.toLowerCase() === 'seller') {
                        const store = {
                            storeEmail: info.sellerDetails.storeEmail || '',
                            storeLocation: info.sellerDetails.storeLocation || '',
                            storeName: info.sellerDetails.storeName || '',
                            storePhoneNumber: info.sellerDetails.storePhoneNumber || ''
                        };
                        setStoreInfo(store);
                    }
                } else {
                    navigate('/profile');
                }

                // Nhân chưa xử lý lấy product từ 1 profile bất kỳ nha
                await fetchUserProducts(id).then(({ productsData }) => setProducts(productsData));
            }
        }
        fetchProfileInfo();
    }, []);

    // console.log(id);
    return (
        <div style={{ paddingTop: useNavBarHeight() }}>
            {/* Main container for page */}
            <Box className="navbar">
                <NavBar />
            </Box>
            <Container maxWidth="lg" fixed sx={containerStyle}>
                {/* Main container for body */}
                <Card variant="outlined" sx={{ width: '100%' }}>
                    {/* Profile card */}
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '20px'
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'
                            }}>
                            <div>{SumProfile({ fullName: summary.fullName, role: summary.role })}</div>
                            {summary.role === 'seller' ? (
                                <></>
                            ) : (
                                <UpSellerDialog variant="filled">Up Seller</UpSellerDialog>
                            )}
                        </Box>
                        <Divider variant="slighter"></Divider>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start'
                            }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '200px 400px',
                                    gridAutoRows: 'minmax(50px, auto)',
                                    rowGap: '10px',
                                    columnGap: '15px',
                                    alignItems: 'center'
                                }}>
                                {profileInfo &&
                                    Object.keys(profileInfo).map((key) => {
                                        if (
                                            profileInfo[key] === undefined ||
                                            profileInfo[key] === null ||
                                            key == '_id' ||
                                            key == 'id' ||
                                            key == 'role' ||
                                            key == 'password' ||
                                            key == 'products' ||
                                            key == '__v' ||
                                            key == 'userName' ||
                                            key == 'isLoggedIn' ||
                                            key == 'avatar'
                                        )
                                            return null;

                                        return (
                                            <Fragment key={key}>
                                                <p className="subtitle-semi-bold-20" style={{ color: colors.green4 }}>
                                                    {fieldNames[key]}
                                                </p>
                                                <p className="content-medium-20-25">{profileInfo[key]}</p>
                                            </Fragment>
                                        );
                                    })}
                            </Box>
                            {isYourProfile && <EditProfileDialog variant="filled">Edit Profile</EditProfileDialog>}
                        </Box>
                        <Divider variant="slighter"></Divider>
                        <Box>
                            {summary.role === 'seller' ? (
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: '200px 400px',
                                        gridAutoRows: 'minmax(50px, auto)',
                                        rowGap: '10px',
                                        columnGap: '15px',
                                        alignItems: 'center'
                                    }}>
                                    {Object.keys(storeInfo).map((key) => {
                                        if (
                                            storeInfo[key] === undefined ||
                                            storeInfo[key] === null ||
                                            key == '_id' ||
                                            key == 'id'
                                        )
                                            return null;

                                        return (
                                            <Fragment key={key}>
                                                <p className="subtitle-semi-bold-20" style={{ color: colors.green4 }}>
                                                    {storeFieldNames[key]}
                                                </p>
                                                <p className="content-medium-20-25">{storeInfo[key]}</p>
                                            </Fragment>
                                        );
                                    })}
                                </Box>
                            ) : (
                                <Box></Box>
                            )}
                        </Box>
                        {summary.role === 'seller' ? <Divider variant="slighter"></Divider> : <></>}
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ width: '100%' }}>
                    {
                        <CardHeader
                            disableTypography
                            title={
                                <Box
                                    className="subtitle-extra-bold"
                                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {isYourProfile && summary.role === 'seller' ? 'Your Products' : 'Their Products'}
                                    {isYourProfile && summary.role === 'seller' ? (
                                        <AddProductDialog sellerId={profileInfo._id}>Add new</AddProductDialog>
                                    ) : null}
                                </Box>
                            }
                        />
                    }
                    <CardContent>
                        {products != null &&
                            <ProductsContainer
                                id={id || profileInfo._id}
                                isYourProfile={isYourProfile}
                                isLoggedIn={isLoggedIn}
                                products={products}
                            />}
                        {isYourProfile &&<CartList />}
                    </CardContent>
                </Card>
                <Card sx={{ width: '100%' }}>
                    <CardHeader
                        disableTypography
                        title={
                            <span className="subtitle-extra-bold">
                                {' '}
                                {isYourProfile ? 'Your Posts' : 'Their Posts'}{' '}
                            </span>
                        }
                    />
                </Card>
                <UserPost content={content} fullName={summary.fullname} role={summary.role} image={Post_test} />
                <UserPost fullName={summary.fullname} role={summary.role} image={Product_test} />
                <UserPost fullName={summary.fullname} content={content} role={summary.role} />
                <UserPost content={contentLong} fullName={summary.fullname} role={summary.role} />
                <UserPost fullName={summary.fullname} content={contentLong} role={summary.role} />
            </Container>
        </div>
    );
}
