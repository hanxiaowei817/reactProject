import React, { useState } from 'react'
import { Grid } from 'antd-mobile';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//轮播图
import { Carousel } from 'antd';
//横条
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';
import './pagehome.css'
export default function Pagehome() {
    //轮播图
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#364d79',
    };
    const [ticket] = useState([
        { icon: '//gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp', text: '酒店' },
        { icon: '//gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp', text: '机票' },
        { icon: '//gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp', text: '火车票' },
        { icon: '//gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp', text: '汽车票' },
        { icon: '//gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp', text: '门票' }
    ])//购票入口数据
    const [other] = useState([
        { h: '出境游', p: '走遍全球' },
        { h: '旅游度假', p: '精选路线' },
        { h: '周边游', p: '乐享周末' },
        { h: '出境购', p: '免税预购' },
        { h: '签证/上网', p: '入境政策查询' },
        { h: '接送/租车', p: '一键预约' },
        { h: '邮轮游', p: '往海上堡垒' },
        { h: '全部', p: '推荐更多' },
    ])//其他数据
    //搜索框
    const useStyles = makeStyles((theme) => ({

        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '95%'
            },
        },
    }));
    //横向滚动条
    const useStyless = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            // marginBottom: 50,    

            height: 230
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }));
    const classes = useStyles();
    const classess = useStyless();

    const data = ticket.map((item, i) => ({
        icon: item.icon,
        text: item.text,
    }));
    const data1 = other.map((item) => ({
        text: item.h,
        texts: item.p
    }));
    return (
        <div>
            {/* 搜索框 */}
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField id="standard-basic" label="搜索你想去的地方" />
            </form>
            {/* 轮播图 */}
            <Carousel autoplay>
                <div style={contentStyle}><img alt="" style={{ height: 250 }} src={`https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1200h800%2F20180302%2F3ba6-fwnpcnt2199521.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617950484&t=0745958fbe597c1fa2983458a569ba06`} /></div>
                <div style={contentStyle}><img alt="" style={{ height: 250 }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1280h750%2F20180116%2F64f0-fyqrewi6675307.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617950839&t=2c2468d50ee3ab9469668141ed1256eb" /></div>
                <div style={contentStyle}><img alt="" style={{ height: 250 }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F40004728.gdyczl.com%2Fpictures%2FTrustSoft%2FLines%2F201781615243042.jpg&refer=http%3A%2F%2F40004728.gdyczl.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617952590&t=0c0012cd18c833bde21ed9decc51654e" /></div>
            </Carousel >
            <Grid data={data} hasLine={false} columnNum={5} />
            <Grid
                data={data1}
                columnNum={4}
                renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                        <div>
                            <h5 style={{ fontFamily: '仿宋体', color: '#ffff111', fontWeight: 800 }}>{dataItem.text}</h5>
                            <p style={{ fontSize: '12px', marginTop: '-10px', color: '#5B5B5B' }}>{dataItem.texts}</p>
                        </div>
                    </div>
                )}
            />
            <h3 style={{ marginLeft: 20 }}>当地旅行</h3>
            {/* 横向滚动条 */}
            <div className={classess.root}>
                <GridList className={classess.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classess.titleBar,
                                    title: classess.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon className={classess.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>

        </div >
    )
}
