import React from 'react';
import {
    Login,
    HomePage,
    Marketplace,
    Product,
    ResetPassword,
    UserProfile,
    OrderProducts,
    ChangePassword,
    ForgotPassword
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/scrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Login register={1} />} />
                    <Route path="marketplace">
                        <Route index element={<Marketplace />} />
                        <Route path="products">
                            <Route path=":productId" element={<Product />} />
                        </Route>
                    </Route>
                    <Route path="forgotpassword" element={<ForgotPassword />} />
                    <Route path="resetpassword" element={<ResetPassword />} />
                    <Route path="profile">
                        <Route index element={<UserProfile />} />
                        <Route path=":id" element={<UserProfile />} />
                    </Route>
                    <Route path="orderproducts" element={<OrderProducts />} />
                    <Route path="changepassword" element={<ChangePassword />} />
                    {/* <Route path='*' element={<Navigate replace to='/'/>}/> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
