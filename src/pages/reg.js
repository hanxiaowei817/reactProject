import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';
import './login.css'

import { makeStyles } from '@material-ui/core/styles';
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
//注册按钮
import Button from '@material-ui/core/Button';
import axios from 'axios';
//注册成功跳转
import Slide from '@material-ui/core/Slide';
//进度条
import CircularProgress from '@material-ui/core/CircularProgress';

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
//注册成功
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
//
const images = [
    {
        url: '//dimg04.c-ctrip.com/images/0306e1200084vhqcgE7A0_D_450_600_R5_Q80.jpg',
        title: '全球户外.莫干山',
        width: '30%',
    },
];
const useStyless = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
export default function Reg() {
    const history = useHistory()
    const classes = useStyles();
    const classess = useStyless();
    const classesss = useStylesss();
    //注册成功
    const [open, setOpen] = React.useState(false);
    //进度条
    const [display, setDisplay] = useState('none')
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //账号
    const [valuesn, setValuesn] = useState({
        amount: '',
        name: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChangename = (prop) => (event) => {
        setValuesn({ ...valuesn, [prop]: event.target.value });
    };

    // const handleClickShowname = () => {
    //     setValuesn({ ...valuesn, showPassword: !valuesn.showPassword });

    // };

    // const handleMouseDownname = (event) => {
    //     event.preventDefault();
    // };
    //密码
    const [valuesp, setValuesp] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValuesp({ ...valuesp, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValuesp({ ...valuesp, showPassword: !valuesp.showPassword });

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //登录请求
    const reg = () => {
        console.log(valuesp.password);
        console.log(valuesn.name);
        const userName = valuesn.name
        const password = valuesp.password
        axios.post('http://localhost:3009/api/v1/auth/reg', { userName, password }).then(res => {
            console.log(res);
            if (res.data.token) {
                setDisplay('block')
                setTimeout(() => {
                    history.push('/login')
                }, 2000)
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
                {/* 账号 */}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">用户名</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={valuesn.showPassword ? 'text' : 'name'}
                        value={valuesn.password}
                        onChange={handleChangename('name')}
                    // endAdornment={
                    //     <InputAdornment position="end">
                    //         <IconButton
                    //             aria-label="toggle password visibility"
                    //             onClick={handleClickShowname}
                    //             onMouseDown={handleMouseDownname}
                    //         >
                    //             {valuesn.showPassword ? <Visibility /> : <VisibilityOff />}
                    //         </IconButton>
                    //     </InputAdornment>
                    // }
                    />
                </FormControl>
                {/* 密码 */}
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">密码</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={valuesp.showPassword ? 'text' : 'password'}
                        value={valuesp.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {valuesp.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: 15, marginRight: 15, marginTop: 10 }}
                    onClick={() => reg()}
                >
                    注册
                </Button>
            </div>
            <div className={classesss.root} style={{ display: display }}>
                {/* <CircularProgress /> */}
                <CircularProgress color="secondary" />
            </div>
        </div>

    )
}
