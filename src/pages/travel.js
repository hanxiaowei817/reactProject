import React, { useState } from 'react';
import './travel.css'
//搜索框
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//主题定制
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//轮播图
import { Carousel } from 'antd';
//本地游
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileDatas';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//搜索框
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
            width: '95%'
        },
    },
}));
//主题定制
const useStyless = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '95%',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        backgroundImage: 'url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3311134814,2684076793&fm=26&gp=0.jpg)',
        backgroundSize: '100%',
        color: 'white',
        fontSize: 18,
        fontWeight: 800
    },
    papers: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201604%2F23%2F20160423093322_ZGnFw.jpeg&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046174&t=b125bf973160064843a962f864f653f1)',
        backgroundSize: '100%',
        fontSize: 12,

    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdata.photo-ac.com%2Fdata%2Fthumbnails%2Fea%2Fea72199d78477d2314f2031e50bd12e5_t.jpeg&refer=http%3A%2F%2Fdata.photo-ac.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046222&t=6f16e4c7116d609d9480c0c2c3a41226)',
        backgroundSize: '100%',
        color: 'white',
        fontSize: 18,
        fontWeight: 800,
        marginBottom: 10,

    },
    paper2s: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb90e7bec54e736d1dc40355199504fc2d562691c.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046328&t=356b6a65241a99e55ddb6a94133f71e7)',
        backgroundSize: '100%',
        fontSize: 12,
    }
}));
//轮播图
const contentStyle1 = {
    height: '87px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg0y120008gjx8iy6616.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    margin: 'auto',
    width: '95%',
};
const contentStyle2 = {
    height: '87px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg5j120008g0tkrf3FAD.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    width: '95%',
    margin: 'auto'
};
const contentStyle3 = {
    height: '87px',
    backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0zg0y120008gil3voF767.jpg)',
    backgroundSize: '100%',
    textAlign: 'center',
    width: '95%',
    margin: 'auto'
};
//选项卡
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStylesss = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // width: 500,
        width: '98%'
    },
}));
//选项卡 内容1
const useStylessss = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList: {
        width: 500,
        height: 410,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
//选项卡 内容2
const useStylesssss = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '95%',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        // backgroundImage: 'url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3311134814,2684076793&fm=26&gp=0.jpg)',
        backgroundSize: '100%',
        fontSize: 13,
        fontWeight: 800
    },
    papers: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        // backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201604%2F23%2F20160423093322_ZGnFw.jpeg&refer=http%3A%2F%2Fimg3.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046174&t=b125bf973160064843a962f864f653f1)',
        backgroundSize: '100%',
        fontSize: 15,
        fontWeight: 800

    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        // backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdata.photo-ac.com%2Fdata%2Fthumbnails%2Fea%2Fea72199d78477d2314f2031e50bd12e5_t.jpeg&refer=http%3A%2F%2Fdata.photo-ac.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046222&t=6f16e4c7116d609d9480c0c2c3a41226)',
        backgroundSize: '100%',
        fontSize: 15,
        fontWeight: 800,
        marginBottom: 50,

    },
    paper2s: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 55,
        // backgroundImage: 'url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb90e7bec54e736d1dc40355199504fc2d562691c.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618046328&t=356b6a65241a99e55ddb6a94133f71e7)',
        backgroundSize: '100%',
        fontSize: 15,
        fontWeight: 800
    }
}));
export default function Travel() {
    const classes = useStyles();
    const classess = useStyless();
    const classesss = useStylesss();
    const classessss = useStylessss();
    const classesssss = useStylesssss();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    //
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div >
            {/* 搜索框 */}
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="目的地/关键词" />
            </form>
            {/* 主题定制 */}
            <div className={classess.root}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classess.paper}>跟团游</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.papers}>私家团</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.papers}>主题旅行</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.papers}>高端游</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classess.paper2}>自由行</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.paper2s}>定制旅行</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.paper2s}>门票.活动</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classess.paper2s}>一日游</Paper>
                    </Grid>
                </Grid>
            </div>
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
            </Carousel>
            {/* 本地游 */}
            <div className="local">
                <div className={classesss.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="精选" {...a11yProps(0)} />
                            <Tab label="周边" {...a11yProps(1)} />
                            <Tab label="滑雪好去处" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            {/* 图片 */}
                            <div className={classessss.root}>
                                <GridList cellHeight={180} className={classessss.gridList}>
                                    {tileData.map((tile) => (
                                        <GridListTile key={tile.img}>
                                            <img src={tile.img} alt={tile.title} />
                                            <GridListTileBar
                                                title={tile.title}
                                                // subtitle={<span>by: {tile.author}</span>}
                                                actionIcon={
                                                    <FavoriteBorderIcon style={{ color: 'red' }} />
                                                }
                                            />
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                            <div className={classesssss.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper}>西双版纳</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>成都</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>九寨沟</Paper>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2}>重庆</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>贵州</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>桂林</Paper>
                                    </Grid>

                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            {/* 图片 */}
                            <div className={classessss.root}>
                                <GridList cellHeight={180} className={classessss.gridList}>
                                    {tileData.map((tile) => (
                                        <GridListTile key={tile.img}>
                                            <img src={tile.img} alt={tile.title} />
                                            <GridListTileBar
                                                title={tile.title}
                                                // subtitle={<span>by: {tile.author}</span>}
                                                actionIcon={
                                                    <FavoriteBorderIcon style={{ color: 'red' }} />
                                                }
                                            />
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                            <div className={classesssss.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper}>西双版纳</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>成都</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>九寨沟</Paper>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2}>重庆</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>贵州</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>桂林</Paper>
                                    </Grid>

                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            {/* 图片 */}
                            <div className={classessss.root}>
                                <GridList cellHeight={180} className={classessss.gridList}>
                                    {tileData.map((tile) => (
                                        <GridListTile key={tile.img}>
                                            <img src={tile.img} alt={tile.title} />
                                            <GridListTileBar
                                                title={tile.title}
                                                // subtitle={<span>by: {tile.author}</span>}
                                                actionIcon={
                                                    <FavoriteBorderIcon style={{ color: 'red' }} />
                                                }
                                            />
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                            <div className={classesssss.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper}>西双版纳</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>成都</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.papers}>九寨沟</Paper>
                                    </Grid>

                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2}>重庆</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>贵州</Paper>
                                    </Grid>
                                    <Grid item xs>
                                        <Paper className={classesssss.paper2s}>桂林</Paper>
                                    </Grid>

                                </Grid>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
        </div>
    )
}
