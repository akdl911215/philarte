import './App.css';
import { HomeMainNavi, Home, HomeMainFooter, HomeMainHead } from 'webapp/common/index';
import { Login, SignUp, UserDetail, UserList } from '../src/webapp/user/index';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="./webapp/common/component/home-main-navi" component={HomeMainNavi}></Route>
            <Route exact path="./webapp/common/component/home-main-footer" component={HomeMainFooter}></Route>
            <Route exact path="./webapp/common/component/home-main-head" component={HomeMainHead}></Route>

            <Route exact path="./webapp/user/component/login" component={Login}></Route>
            <Route exact path="./webapp/user/component/sign-up" component={SignUp}></Route>
            <Route exact path="./webapp/user/component/user-detail" component={UserDetail}></Route>
            <Route exact path="./webapp/user/component/user-list" component={UserList}></Route>
        </div>
    );
};

export default App;
