import React from 'react';
import { Link } from 'react-router-dom';
// import 'common/style/Home.css';
import HomeMainHead from 'webapp/common/component/HomeMainHead';

const HomeMainNavi = () => {
    return (
        <>
            <HomeMainHead />
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            Me
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={'user/component/user-list'}>유저리스트</Link>
                            </li>
                            <li>
                                <Link to={'user/component/login'}>로그인</Link>
                            </li>
                            <li>
                                <Link to={'/user/component/sign-up'}>회원가입</Link>
                            </li>
                            <li>
                                <Link to={'#'}>장바구니</Link>
                            </li>
                            <li>
                                <Link to={'#'}>마이샵</Link>
                            </li>
                            <li>
                                <Link to={'#'}>커뮤니티</Link>
                            </li>
                            <li>
                                <Link to={'#'}>상품Q&A</Link>
                            </li>
                            <li>
                                <Link to={'/board/component/seoul-cctv'}>SuoulCCTV</Link>
                            </li>
                            <li>
                                <Link to={'/counter/component/counter'}>Counter</Link>
                            </li>
                            <li>
                                <Link to={'/counter/container/counter-container'}>Redux Counter</Link>
                            </li>
                            <li>
                                <Link to={'/reviewItem/container/review-item-app'}>ReviewItemApp</Link>
                            </li>
                            <li>
                                <Link to={'/todo/continer/todo-app'}>TodoApp</Link>
                            </li>
                            <li>
                                <Link to={'/todo/continer/without-redux1'}>withoutRedux1</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default HomeMainNavi;
