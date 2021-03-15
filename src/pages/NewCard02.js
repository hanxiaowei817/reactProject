import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const NewsCard01 = () => (
    <Card className={'MuiNewsCard--01'}>
        <CardMedia
            className={'MuiCardMedia-root'}
            image={
                '//youimg1.c-ctrip.com/target/fd/tg/g3/M07/01/AD/CggYGVXdMjCAYC76AE_wQZoMows816_D_500_500_R5_Q80.jpg'
            }
        >
            <Typography className={'MuiTypography--category'}>云南</Typography>
        </CardMedia>
        <CardContent className={'MuiCardContent-root'}>
            <Typography
                className={'MuiTypography--overline'}
                variant={'overline'}
                gutterBottom
            >
                March 20 2019
      </Typography>
            <Typography
                className={'MuiTypography--heading'}
                // variant={'h5'}
                gutterBottom
            >
                建议出游5-8天
      </Typography>
            {/* <Typography className={'MuiTypography--subheading'} variant={'caption'}>
                Kayaks crowd Three Sisters Springs, where people and manatees maintain
                controversial coexistence.
      </Typography> */}
        </CardContent>
        {/* <CardActions className={'MuiCardActions-root'}>
            <Button color={'primary'} fullWidth>
                Find Out More <Icon>chevron_right_rounded</Icon>
            </Button>
        </CardActions> */}
    </Card>
);

export default NewsCard01;