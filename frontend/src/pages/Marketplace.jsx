import NavBar from '../components/common/navBar';
import { Box, Container } from '@mui/material';
import { ProductCard, Footer, CartList } from '../components';
import { Divider } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { colors } from '../styles';
import { useNavBarHeight } from '../hooks/useNavBarHeight';
import { useState, useEffect } from 'react';
import { fetchUserInfo } from '../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateNavBarState } from '../redux/features/common/navBarStateSlice';
import { selectIsLoggedIn } from '../redux/features/account/isLoggedInSlice';
import { updateProfileInfo } from '../redux/features/profile/profileInfoSlice';
import { updateIsLoggedIn } from '../redux/features/account/isLoggedInSlice';
import { updateStoreInfo } from '../redux/features/profile/storeInfoSlice';
import { updateIsSeller } from '../redux/features/account/isSellerSlice';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 80px 100px'
};

const hotSalesContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 388px)',
    gap: '20px',
    justifyContent: 'center',
    width: '100%'
};

const salePostsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 388px)',
    gap: '20px',
    justifyContent: 'center',
    width: '100%'
};

export default function Marketplace() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(updateNavBarState(1)); // state 1 is marketplace
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector(selectIsLoggedIn));

    const [list, setList] = useState('');
    const [hotlist, setHotList] = useState('');

    useEffect(() => {
        async function fetchData() {
            // Fetch data
            if (!isLoggedIn) {
                const { profile, store } = await fetchUserInfo();
                if (profile) {
                    dispatch(updateProfileInfo(profile));
                    dispatch(updateIsLoggedIn(true));
                    setIsLoggedIn(true);
                    if (store) {
                        dispatch(updateStoreInfo(store));
                        dispatch(updateIsSeller(true));
                    }
                } else {
                    dispatch(updateNavBarState(0));
                    navigate('/');
                }
            }

            let res = await fetch('/api/v1/marketplace/products', {
                headers: { 'Content-Type': 'application/json' }
            });
            let data = await res.json();

            // Check data
            console.log(data);

            // Remove unnecessary data
            data = data.data?.products;

            // Create list of products
            const products = data.map((product) => {
                return <ProductCard key={product._id} {...product} />;
            });

            // Create list of hot
            const hotPick = data.map((product) => {
                if (product.isHotPick == true) return <ProductCard key={product._id} {...product} />;
                else return null;
            });

            setList(products);
            setHotList(hotPick);
        }
        fetchData();
    }, [JSON.stringify(list), JSON.stringify(hotlist)]);

    return (
        <div
            style={{
                paddingTop: useNavBarHeight()
            }}>
            <Box className="navbar">
                <NavBar />
            </Box>
            <Container disableGutters maxWidth="xl" sx={containerStyle}>
                <div style={{ paddingBottom: '22px' }}>
                    <WhatshotIcon color="pending" fontSize="medium" />
                    <span className="subtitle-extra-bold" style={{ color: colors.green5, paddingLeft: 10 }}>
                        Hot picks
                    </span>
                </div>
                <Box sx={hotSalesContainer}>{hotlist}</Box>

                <div style={{ padding: '31px' }}>
                    <Divider style={{ width: 658, height: 1 }} />
                </div>

                <Box sx={salePostsContainer}>{list}</Box>
            </Container>
            {list == '' || <CartList />}
            <div>
                <Footer className="footerStyle" />
            </div>
        </div>
    );
}
