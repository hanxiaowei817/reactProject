import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './mine.css'
//删除Token
import { removeToken, getToken } from '../utils/auth'
//头像
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
//列表
import { List } from 'antd-mobile';
//退出登录
import Button from '@material-ui/core/Button';
import { Modal } from 'antd';
//进度条
import CircularProgress from '@material-ui/core/CircularProgress';
//头像
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            // margin: theme.spacing(1),
            margin: '-74px 0 0 30px'
        },
    },
}));
//列表
const Item = List.Item;
const Brief = Item.Brief;
//进度条
const useStyless = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        margin: '-188px 150px'
    },
}));
//组件
export default function Mine() {
    const history = useHistory()
    const classes = useStyles();
    const classess = useStyless();
    //退出登录
    const [isModalVisible, setIsModalVisible] = useState(false);
    //进度条
    const [display, setDisplay] = useState('none')

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        removeToken()
        setIsModalVisible(false);
        if (!getToken()) {
            setDisplay('block')
            setTimeout(() => {
                history.push('/login')
            }, 2000)
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div className="title">
                <div className="titleImg"></div>
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: 60, height: 60, }} />
                </div>
                <h1 className="name">任关蒙</h1>
            </div>
            <Item arrow="horizontal" multipleLine onClick={() => {
                history.push('/modifypassword')
            }}>
                修改密码
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {
                history.push('/money')
            }}>
                钱包
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {
                {
                    // console.log(localStorage.getItem('money'));
                    localStorage.setItem('money', 0)

                }

            }}>
                清空
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {
                history.push('/loves')
            }}>
                最近足迹
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => { }}>
                订单详情
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {
                history.push('/discuss')
            }}>
                讨论区
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => { }}>
                设置
            </Item>
            <Button
                variant="contained"
                color="secondary"
                style={{ margin: '10px 0 0 120px' }}
                onClick={showModal}>
                退出登录
            </Button>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>确定退出吗？</p>
            </Modal>
            <div className={classess.root} style={{ display: display }}>
                {/* <CircularProgress /> */}
                <CircularProgress color="secondary" />
            </div>
        </div>
    )
}
