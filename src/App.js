import { useState, forwardRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Pagehome from './pages/pagehome'
import Travel from './pages/travel'
import Love from './pages/love'
import Mine from './pages/mine'
import Login from './pages/login';
import Reg from './pages/reg';
import { getToken } from './utils/auth'
//
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Loves from './pages/loves';
import Modifypassword from './pages/modifypassword';
import Discuss from './pages/discuss';
import Money from './pages/money';
import Hhh from './pages/hhh';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100
  },
});
//跳转登录页弹框
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function App() {
  //对话框
  const [open, setOpen] = useState(false);
  //显示隐藏底部导航
  const [display, setDisplay] = useState('block')
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' || pathname === '/travel' || pathname === '/love' || pathname === '/mine') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }, [pathname])
  const handleClose = () => {
    setOpen(false);
  };
  //

  console.log(useLocation());
  console.log(useHistory());
  console.log(pathname);
  const classes = useStyles();
  const [value, setValue] = useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ display: display }}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="首页" value='/' icon={<HomeIcon />} onClick={() => {
            history.push('/')
          }} />
          <BottomNavigationAction label='旅游' value="/travel" icon={<DirectionsCarIcon />} onClick={() => {
            history.push('/travel')
          }} />
          <BottomNavigationAction label="猜你喜欢" value='/love' icon={<FavoriteIcon />} onClick={() => {
            history.push('/love')
          }} />
          <BottomNavigationAction label="我的" value='/mine' icon={<AccountCircleIcon />} onClick={() => {
            if (getToken()) {
              history.push('/mine')
            } else {

              setOpen(true);

            }

          }} />
        </BottomNavigation>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            还未登录，请登录！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose, () => {
            history.push('/')
            setOpen(false);
          }} color="primary">
            取消
          </Button>
          <Button onClick={handleClose, () => {
            history.push('/login')
            setOpen(false);
          }} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>

      <Switch>
        <Route path="/" component={Pagehome} exact></Route>
        <Route path="/travel" component={Travel}></Route>
        <Route path="/love" component={Love} ></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/loves" component={Loves}></Route>
        <Route path="/modifypassword" component={Modifypassword}></Route>
        <Route path="/discuss" component={Discuss}></Route>
        <Route path="/money" component={Money}></Route>
        <Route path="/hhh" component={Hhh}></Route>
      </Switch>
    </div>
  );
}

export default App;
