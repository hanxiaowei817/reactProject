import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import cx from 'clsx';
//轮播图
import { Carousel } from 'antd';
//导航
import { Grid } from 'antd-mobile';
//
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//卡片
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import NewsCard01 from './NewsCard01';
import NewsCard02 from './NewCard02';
import NewsCard03 from './NewCard03';
import NewsCard04 from './NewCard04';
import createOverrides from './theme';

const baseTheme = createMuiTheme();

//轮播图
const contentStyle1 = {
    height: '166px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg0n120008dfa8jp2231.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
};
const contentStyle2 = {
    height: '166px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg31120008g3mt7kC5FB.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    width: '100%',
    margin: 'auto'
};
const contentStyle3 = {
    height: '166px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg17120008d3dlfg7DA4.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    width: '100%',
    margin: 'auto'
};
const contentStyle4 = {
    height: '166px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg3f120008d3dd4p014C.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    width: '100%',
    margin: 'auto'
};
//

const images = [
    {
        url: '//dimg04.c-ctrip.com/images/300g1900000187tznAF68_D_500_500_R5_Q80.jpg',
        title: '贵州遵义',
        width: '30%',
    },
];
const useStyles = makeStyles((theme) => ({
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
export default function Love() {
    const history = useHistory()
    const classes = useStyles();
    //导航栏数据
    const [custom] = useState([
        { img: 'https://dimg04.c-ctrip.com/images/300i1a00000190qegC2DE.png', name: '热门' },
        { img: 'https://dimg04.c-ctrip.com/images/0305h1200089s884x5B56.png', name: '周边' },
        { img: 'https://dimg04.c-ctrip.com/images/0300u1200089sapac1E1A.png', name: '云南' },
        { img: 'https://dimg04.c-ctrip.com/images/0304g1200089sao0gFFC3.png', name: '海南' },
        { img: 'https://dimg04.c-ctrip.com/images/0305y120008cmkpmnC6CB.png', name: '东北' }
    ])
    //导航
    const data = custom.map((item) => ({
        icon: item.img,
        text: item.name,
    }));
    return (
        <div>
            {/* 轮播图 */}
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle1}></h3>
                </div>
                <div>
                    <h3 style={contentStyle2}></h3>
                </div>
                <div>
                    <h3 style={contentStyle3}></h3>
                </div>
                <div>
                    <h3 style={contentStyle4}></h3>
                </div>
            </Carousel>
            {/* 导航栏 */}
            <Grid columnNum={5} data={data} hasLine={false} onClick={() => [
                history.push('/loves')
            ]} />
            {/*  */}
            <div style={{ margin: '10px auto', width: '95%' }}>
                <h2 style={{ fontWeight: 800 }}>当季热门</h2>
                <div className={classes.root}>
                    {images.map((image) => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={classes.image}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    ))}
                </div>
            </div>
            {/* 卡片 */}
            <h2 style={{ fontWeight: 800, marginLeft: 15 }}>为你推荐</h2>
            <div style={{ margin: '10px auto', height: '200px', width: '95%', display: 'flex', justifyContent: 'space-between' }}>
                <ThemeProvider
                    theme={{
                        ...baseTheme,
                        overrides: createOverrides(baseTheme)
                    }}
                >

                    <NewsCard01 />

                </ThemeProvider>
                <ThemeProvider
                    theme={{
                        ...baseTheme,
                        overrides: createOverrides(baseTheme)
                    }}
                >

                    <NewsCard02 />

                </ThemeProvider>

            </div>
            <div style={{ margin: '10px auto', height: '200px', width: '95%', display: 'flex', justifyContent: 'space-between' }}>
                <ThemeProvider
                    theme={{
                        ...baseTheme,
                        overrides: createOverrides(baseTheme)
                    }}
                >

                    <NewsCard03 />

                </ThemeProvider>
                <ThemeProvider
                    theme={{
                        ...baseTheme,
                        overrides: createOverrides(baseTheme)
                    }}
                >

                    <NewsCard04 />

                </ThemeProvider>

            </div>
        </div>
    )
}
