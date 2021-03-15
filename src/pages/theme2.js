export default ({ spacing }) => ({
    MuiCard: {
        root: {
            '&.MuiRewardCard--01': {

                // borderRadius: spacing(2), // 16px
                transition: '0.3s',
                boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
                width: '100%',
                position: 'sticky',
                top: 0,
                maxWidth: 800,
                marginLeft: 'auto',
                overflow: 'initial',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 8,
                paddingRight: 8,
                background:
                    'linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)',
                '& .MuiCardMedia-root': {
                    flexShrink: 0,
                    width: '30%',
                    paddingTop: '30%',
                    marginLeft: 'auto',
                },
                '& .MuiCardContent-root': {
                    textAlign: 'left',
                    padding: spacing(2),
                },
                '& .MuiTypography--overline': {
                    lineHeight: 2,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    opacity: 0.7,
                },
                '& .MuiTypography--heading': {
                    fontWeight: '900',
                    color: '#ffffff',
                    letterSpacing: 0.5,
                },
                '& .MuiTypography--subheading': {
                    marginBottom: spacing(2),
                    color: '#ffffff',
                },
                '& .MuiButton--readMore': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 100,
                    paddingLeft: 48,
                    paddingRight: 48,
                    color: '#ffffff',
                    textTransform: 'none',
                },
            },
        },
    },
});