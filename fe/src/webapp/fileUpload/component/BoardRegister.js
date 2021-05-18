import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import UploadInput from './fileupload/UploadInput';
import PerformanceInput from './fileupload/PerformanceInput';
import axios from 'axios';

const BoardRegister = ({ requestRefresh }) => {
    const childRef = useRef();
    let uploadedFiles = null;

    const sendTextForm = (title, content) => {
        console.log('title: ' + title);
        console.log('content: ' + content);
        childRef.current.send();
        console.log(uploadedFiles);

        const data = { title: title, content: content, pictures: uploadedFiles };

        axios.post('http://localhost:8080/performance', data).then((res) => {
            console.log(res.data);
            requestRefresh();
        });
    };

    const getUploadedFiles = (uplodedFilesResult) => {
        console.log('getUploadedFiles');
        uploadedFiles = uplodedFilesResult;
    };

    return (
        <div>
            <h2>Board Register</h2>

            <PerformanceInput sendTextForm={sendTextForm}></PerformanceInput>

            <UploadInput cref={childRef} getUploadedFiles={getUploadedFiles}></UploadInput>
        </div>
    );
};

export default BoardRegister;
