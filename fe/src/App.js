import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollIntoView from './webapp/common/helpers/ScrollIntoView';
import ScrollToTop from './webapp/common/helpers/ScrollToTop';

import { ResumeList, ResumeModify, ResumeRead, ResumeRegister } from 'webapp/resume/index';
import { FundingList, FundingModify, FundingRead, FundingRegister } from 'webapp/funding/index';
import { ItemList, ItemModify, ItemRead, ItemRegister } from 'webapp/item/index';
import { ReviewList, ReviewModify, ReviewRead, ReviewRegister } from 'webapp/review/index';
import { WorkList, WorkModify, WorkRead, WorkRegister } from 'webapp/work/index';
import { HomeVideoBg } from 'webapp/common/index';

import { ArtistList, Signup, Signin, ArtistRead, ArtistUpdate, Logout, MyPage, ArtistPageList, PageList, ArtistPageList2 } from 'webapp/artist/index';

// import ArtistRead from 'webapp/artist/component/ArtistRead';
// import ArtistUpdate from 'webapp/artist/component/ArtistUpdate';
// import ArtistList from 'webapp/artist/component/ArtistList';
// import Signin from 'webapp/artist/component/Signin';
// import Signup from 'webapp/artist/component/Signup';

const App = () => {
    return (
        <Router basename="/">
            <ScrollIntoView>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={`/`} component={HomeVideoBg} />
                        {/*Resume*/}
                        <Route exact path="/resume/resume-list" component={ResumeList} />
                        <Route exact path="/resume/resume-modify" component={ResumeModify} />
                        <Route exact path="/resume/resume-read" component={ResumeRead} />
                        <Route exact path="/resume/resume-register" component={ResumeRegister} />

                        {/*Funding*/}
                        <Route exact path="/funding/funding-list" component={FundingList} />
                        <Route exact path="/funding/funding-modify" component={FundingModify} />
                        <Route exact path="/funding/funding-read" component={FundingRead} />
                        <Route exact path="/funding/funding-register" component={FundingRegister} />

                        {/*Item*/}
                        <Route exact path="/item/item-list" component={ItemList} />
                        <Route exact path="/item/item-modify" component={ItemModify} />
                        <Route exact path="/item/item-read" component={ItemRead} />
                        <Route exact path="/item/item-register" component={ItemRegister} />

                        {/*Review*/}
                        <Route exact path="/review/review-list" component={ReviewList} />
                        <Route exact path="/review/review-modify" component={ReviewModify} />
                        <Route exact path="/review/review-read" component={ReviewRead} />
                        <Route exact path="/review/review-register" component={ReviewRegister} />

                        {/*Work*/}
                        <Route exact path="/work/work-list" component={WorkList} />
                        <Route exact path="/work/work-modify" component={WorkModify} />
                        <Route exact path="/work/work-read" component={WorkRead} />
                        <Route exact path="/work/work-register" component={WorkRegister} />

                        {/*Artist*/}
                        <Route exact path="/artist/artist-signin" component={Signin} />
                        <Route exact path="/artist/artist-signup" component={Signup} />
                        <Route exact path="/artist/artist-list" component={ArtistList} />
                        <Route exact path="/artist/artist-page-list" component={ArtistPageList} />
                        <Route exact path="/artist/artist-read/:id" component={ArtistRead} />
                        <Route exact path="/artist/artist-update/:id" component={ArtistUpdate} />
                        <Route exact path="/artist-page-list" component={ArtistPageList2} />

                        <Switch>
                            <privateRoute exact path="/" component={HomeVideoBg} />
                            <Route exact path="/artist/artist-logout" component={Logout} />
                            <Route exact path="/artist/artist-mypage" component={MyPage} />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </Switch>
                </ScrollToTop>
            </ScrollIntoView>
        </Router>
    );
};

export default App;
