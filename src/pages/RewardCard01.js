import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function RewardCard01() {
    const history = useHistory()
    return (
        < Card className={'MuiRewardCard--01'} >
            <CardContent className={'MuiCardContent-root'}>
                <Typography className={'MuiTypography--overline'} variant={'overline'}>
                    Welcome Discuss
        </Typography>
                <Typography
                    className={'MuiTypography--heading'}
                    variant={'h6'}
                    gutterBottom
                >
                    恭喜你发现了宝藏
        </Typography>
                <Button className={'MuiButton--readMore'} onClick={() => {
                    history.push('/mine')
                }}>返回</Button>
            </CardContent>
            <CardMedia
                className={'MuiCardMedia-root'}
                image={'https://jkkm.info/ui/images/awards/victory.png'}
            />
        </Card >
    )
}
