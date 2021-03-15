import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
//token判断
import { setToken, getToken, removeToken } from '../utils/auth'

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//密码
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//登录按钮
import Button from '@material-ui/core/Button';
import axios from 'axios';
//进度条
import CircularProgress from '@material-ui/core/CircularProgress';
//提示框
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
//密码框样式
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));
//顶部图片
const images = [
    {
        url: '//dimg03.c-ctrip.com/images/200w0u000000j2fb3D497_D_500_500_R5_Q80.jpg',
        title: '杭州',
        width: '40%',
    },
];
const useStyless = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        // minWidth: 300,
        // width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 200,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));
//进度条
const useStylesss = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        margin: '-208px 150px'
    },
}));
export default function Login() {
    const history = useHistory()
    const classes = useStyles();
    const classess = useStyless();
    const classesss = useStylesss();
    //提示框
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    //进度条
    const [display, setDisplay] = useState('none')
    //旧密码
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange1 = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //新密码
    const [newvalues, setNewvalues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange2 = (prop) => (event) => {
        setNewvalues({ ...newvalues, [prop]: event.target.value });
    };

    const handleClickShowNewPassword = () => {
        setNewvalues({ ...newvalues, showPassword: !newvalues.showPassword });

    };

    const handleMouseDownNewPassword = (event) => {
        event.preventDefault();
    };
    //修改密码
    const login = () => {
        console.log(getToken());
        //旧密码
        const oldPassword = values.password
        //新密码
        const password = newvalues.password
        console.log(oldPassword);
        console.log(password);
        axios.post(
            'http://localhost:3009/api/v1/users/change_pwd',
            { oldPassword, password },
            { headers: { authorization: 'Bearer ' + getToken() } }
        ).then(res => {
            console.log(res);
            console.log(res.data.code);
            if (res.data.code == 'success') {
                removeToken()
                setDisplay('block')
                setTimeout(() => {
                    history.push('/login')
                }, 2000)

            } else {
                setOpen(true)
            }
        })
    }
    return (
        <div className="login">
            <div className={classess.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classess.image}
                        focusVisibleClassName={classess.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                        <span
                            className={classess.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classess.imageBackdrop} />
                        <span className={classess.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classess.imageTitle}
                            >
                                {image.title}
                                <span className={classess.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
            <div className="logins">
                {/* 旧密码 */}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">密码</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange1('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {/* 新密码 */}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">新密码</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={newvalues.showPassword ? 'text' : 'password'}
                        value={newvalues.password}
                        onChange={handleChange2('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowNewPassword}
                                    onMouseDown={handleMouseDownNewPassword}
                                >
                                    {newvalues.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {/* 提交按钮 */}
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 15, marginRight: 15, marginTop: 10 }}
                    onClick={() => login()}
                >
                    确认修改
                </Button>
                <Button color="secondary" style={{ marginTop: 10 }} onClick={() => {
                    history.push('/mine')
                }}>取消</Button>

            </div>
            <div className={classesss.root} style={{ display: display }}>
                {/* <CircularProgress /> */}
                <CircularProgress color="secondary" />
            </div>
            <div>
                {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
                <Snackbar
                    style={{ top: 200, width: 250, margin: 'auto' }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="原始密码输入错误"
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </div>

    )
}
