import React, { useState } from 'react';
import BoardRegister from '../components/BoardRegister';
import BoardList from '../components/BoardList';
import { Route } from 'react-router-dom';

const BoardPage = () => {
    const [result, setResult] = useState(false);

    const requestRefresh = (result) => {
        console.log('REQUEST REFRESH');

        setResult(!result);
    };

    return (
        <div>
            <h1>BoardPage</h1>

            <Route path={'/board/register'} component={BoardRegister}></Route>
            <Route path={'/board/list'} component={BoardList}></Route>
        </div>
    );
};

export default BoardPage;
