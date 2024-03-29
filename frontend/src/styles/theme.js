import { createTheme } from '@mui/material';
import colors from './color';

const theme = createTheme({
    palette: {
        background: {
            default: colors.secondary
        },
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        },
        success: {
            main: colors.success
        },
        pending: {
            main: colors.pending
        },
        decline: {
            main: colors.decline
        },
        ratings: {
            main: colors.ratings
        }
    },
    typography: {
        fontFamily: '"Inter"'
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.green5,
                    '&.Mui-focused': {
                        color: colors.green5 // Color when the Select is focused
                    },
                    '&.Mui-error': {
                        color: colors.green5 // Color when an error occurs
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    width: '220px',
                    height: '56px',
                    borderRadius: '30px',
                    color: colors.green5,
                    '&.Mui-focused': {
                        color: colors.green5
                    }
                },
                select: {
                    color: colors.green5,
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '120%'
                },
                icon: {
                    color: colors.green5
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none'
                        },
                        '&:hover fieldset': {
                            border: 'none'
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none'
                        }
                    }
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'post' },
                    style: {
                        height: 75,
                        borderRadius: 45,
                        background: colors.green1,
                        color: colors.green6,
                        fontSize: '20.3px',
                        fontWeight: 600,
                        border: '0px',
                        '&:hover': {
                            background: colors.green1,
                            color: colors.green6
                        }
                    }
                },
                {
                    props: { variant: 'filled', color: 'primary' },
                    style: {
                        background: colors.secondary,
                        color: colors.green6,
                        fontSize: '20.3px',
                        fontWeight: 600,
                        '&:hover': {
                            background: colors.green1,
                            color: colors.green6
                        }
                    }
                },
                {
                    props: { variant: 'filled', color: 'facebook' },
                    style: {
                        background: colors.facebook,
                        color: colors.primary,
                        fontSize: '20.3px',
                        fontWeight: 600,
                        '&:hover': {
                            background: colors.green1,
                            color: colors.green6
                        }
                    }
                },
                {
                    props: { variant: 'filled', color: 'secondary' },
                    style: {
                        background: colors.green1,
                        color: colors.green4,
                        fontSize: '20.3px',
                        fontWeight: 600,
                        '&:hover': {
                            background: colors.secondary,
                            color: colors.green4
                        }
                    }
                },
                {
                    props: { variant: 'disable' },
                    style: {
                        background: colors.green1,
                        color: colors.primary,
                        '&:hover': {
                            background: colors.green1,
                            color: colors.primary
                        }
                    }
                },
                {
                    props: { variant: 'outline-success' },
                    style: {
                        background: colors.primary,
                        border: '3px solid',
                        borderColor: colors.success,
                        height: 54,
                        minWidth: 95,
                        color: colors.success,
                        '&:hover': {
                            background: colors.primary
                        }
                    }
                },
                {
                    props: { variant: 'outline-pending' },
                    style: {
                        background: colors.primary,
                        border: '3px solid',
                        borderColor: colors.pending,
                        height: 54,
                        minWidth: 95,
                        color: colors.pending,
                        '&:hover': {
                            background: colors.primary
                        }
                    }
                },
                {
                    props: { variant: 'outline-green6' },
                    style: {
                        background: colors.primary,
                        border: '3px solid',
                        borderColor: colors.green6,
                        height: 54,
                        minWidth: 179.881,
                        color: colors.green6,
                        '&:hover': {
                            background: colors.primary
                        }
                    }
                },
                {
                    props: { variant: 'outline-green1' },
                    style: {
                        background: colors.primary,
                        border: '3px solid',
                        borderColor: colors.green1,
                        height: 54,
                        minWidth: 179.881,
                        color: colors.green6,
                        '&:hover': {
                            background: colors.primary
                        }
                    }
                },
                {
                    props: { variant: 'cart' },
                    style: {
                        background: colors.green1,
                        color: colors.green4,
                        fontSize: '30px',
                        lineHeight: '40px',
                        minWidth: '45px',
                        minHeight: '45px',
                        borderRadius: 7,
                        fontWeight: 300,
                        '&:hover': {
                            fontSize: '30px',
                            background: colors.green1,
                            color: colors.green6,
                            fontWeight: 400
                        }
                    }
                }
            ],
            styleOverrides: {
                root: {
                    minWidth: '155px',
                    boxShadow: '0px 0px 1px 0px',
                    background: colors.green4,
                    textTransform: 'inherit',
                    fontSize: '20.3px',
                    fontWeight: 600,
                    color: colors.primary,
                    '&.Mui-disabled': {
                        background: colors.green1
                    },
                    '&:hover': {
                        background: colors.green3,
                        boxShadow: '0px 0px 1px 0px',
                        fontWeight: 600,
                        fontSize: '20.3px'
                    }
                }
            }
        },
        MuiAvatar: {
            variants: [
                {
                    props: { variant: 'big', color: 'green6' },
                    style: {
                        fontSize: 20.25,
                        fontWeight: '50px',
                        width: '80px',
                        height: '80px',
                        background: colors.green6
                    }
                },
                {
                    props: { variant: 'small-border' },
                    style: {
                        fontSize: 20.25,
                        fontWeight: '50px',
                        width: '50px',
                        height: '50px',
                        border: '3px solid',
                        borderColor: colors.green5
                    }
                },
                {
                    props: { variant: 'small' },
                    style: {
                        fontSize: 20.25,
                        fontWeight: '50px',
                        width: '50px',
                        height: '50px'
                    }
                },
                {
                    props: { variant: 'icon', color: 'secondary' },
                    style: {
                        width: '50px',
                        height: '50px',
                        background: colors.secondary
                    }
                },
                {
                    props: { variant: 'icon', color: 'green6' },
                    style: {
                        width: '50px',
                        height: '50px',
                        background: colors.green6
                    }
                },
                {
                    props: { variant: 'icon-clicked' },
                    style: {
                        width: '50px',
                        height: '50px',
                        background: colors.green2
                    }
                }
            ],
            styleOverrides: {
                root: {
                    backgroundColor: colors.green4,
                    color: colors.secondary,
                    fontSize: 28.83,
                    fontWeight: 500,
                    width: '68px',
                    height: '68px'
                }
            }
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.green1,
                    color: colors.green5,
                    width: '299px',
                    height: '71px'
                }
            }
        },
        MuiDivider: {
            variants: [
                {
                    props: { variant: 'white' },
                    style: {
                        backgroundColor: colors.primary
                    }
                },
                {
                    props: { variant: 'slighter' },
                    style: {
                        backgroundColor: colors.green5
                    }
                },
                {
                    props: { variant: 'slightest' },
                    style: {
                        backgroundColor: colors.green1
                    }
                }
            ],
            styleOverrides: {
                root: {
                    backgroundColor: colors.green6
                }
            }
        },
        MuiCard: {
            variants: [
                {
                    props: { variant: 'product' },
                    style: {
                        maxWidth: 388,
                        height: 353
                    }
                },
                {
                    props: { variant: 'edit' },
                    style: {
                        maxWidth: 388,
                        height: 353
                    }
                }
            ],
            styleOverrides: {
                root: {
                    backgroundColor: colors.primary,
                    borderRadius: '7px'
                }
            }
        },
        MuiCardMedia: {
            variants: [
                {
                    props: { variant: 'product' },
                    style: {
                        maxWidth: 388,
                        height: 236
                    }
                }
            ],
            styleOverrides: {
                root: {
                    backgroundColor: colors.primary
                }
            }
        }
    }
});

export default theme;
