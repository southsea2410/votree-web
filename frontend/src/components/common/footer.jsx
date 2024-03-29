import * as React from 'react';
import { colors } from '../../styles';
import { Divider } from '@mui/material';
import { LogoVoTree_secondary } from '../../assets/images';
import './../../index.css';
import { FacebookIcon, InstaIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

const fieldStyle = {
    cursor: 'pointer'
};

export default function Footer() {
    const navigate = useNavigate();

    const handleChangeToHomePage = () => {
        navigate('/');
    };

    const handleChangeToLogin = () => {
        navigate('/login');
    };

    return (
        <div
            className="content-medium-16"
            style={{
                background: colors.green5,
                width: '100%',
                height: 300,
                color: colors.primary,
                padding: '30px 0px'
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0px 100px'
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                        <div onClick={handleChangeToHomePage} style={fieldStyle}>
                            <img src={LogoVoTree_secondary} alt="" width="211" height="78" />
                        </div>
                    </div>
                    <div>
                        <h4 style={{ color: colors.green2 }}>SE_10 Group - VoTree Project</h4>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <LocationIcon color={colors.green2} />
                                <div style={{ marginLeft: 8 }}>227 Nguyen Van Cu, ward 10, district 5, HCM City</div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <PhoneIcon color={colors.green2} />
                                <div style={{ marginLeft: 8 }}>0901234567</div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <MailIcon color={colors.green2} />
                                <div style={{ marginLeft: 8 }}>se10votree@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 40,
                        justifyContent: 'center',
                        color: colors.green2
                    }}>
                    <div onClick={handleChangeToHomePage} style={fieldStyle}>
                        Main screen
                    </div>
                    <div onClick={handleChangeToLogin} style={fieldStyle}>
                        Sign in / Sign up
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '40px', marginBottom: '23px' }}>
                <Divider variant="white" />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0px 120px',
                    alignItems: 'center'
                }}>
                <div style={{ color: colors.primary }}>© 2023 SE_10 Group. All right reserved.</div>
                <div style={{ display: 'flex', gap: 20 }}>
                    <FacebookIcon />
                    <InstaIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </div>
    );
}
