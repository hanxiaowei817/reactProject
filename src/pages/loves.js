import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//提示框
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
    root: {
        maxWidth: 175,
        height: 280,
        float: 'left',
        margin: '10px 6px'
    },
    media: {
        height: 140,
    },
});
export default function Loves() {
    const history = useHistory()
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
    const classes = useStyles();
    //初始化卡片内容
    const [cardcontent, setCardcontent] = useState([])
    useEffect(() => {
        axios.get('https://gank.io/api/v2/data/category/Girl/type/Girl/page/1/count/10').then(res => [
            // console.log(res),
            setCardcontent([...res.data.data])
        ])
    }, [])

    //查看内容
    const look = () => {
        if (localStorage.getItem('money') == 9999) {
            history.push('/hhh')
        } else {
            setOpen(true)
        }

    }
    return (
        <div>
            {console.log(cardcontent)}
            {
                cardcontent.map(item => {
                    return (
                        <Card className={classes.root} onClick={look}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.images}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
            <Snackbar
                style={{ top: 200, width: 250, margin: 'auto' }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="请先充值"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}
