import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//提示
import { Alert } from 'antd';
//确认
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            width: '25ch',
            margin: '100px 92px'
        },
    },
}));
const useStyless = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Money() {
    const classes = useStyles();
    const classess = useStyless();
    const history = useHistory()
    const add = () => {
        localStorage.setItem('money', 9999)
        if (localStorage.getItem('money')) {
            history.push('/mine')
        }
    }
    return (
        <div>
            <Alert message="请注意保护个人隐私" type="warning" showIcon closable />
            <form className={classes.root} noValidate autoComplete="off">
                {/* <TextField id="standard-basic" label="Standard" /> */}
                <TextField id="filled-basic" label="请充值（人民币）" variant="filled" />
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </form>
            <div className={classes.root}>
                <Button variant="outlined" color="secondary" onClick={add}>
                    确认充值
                </Button>
            </div>
        </div>
    )
}
