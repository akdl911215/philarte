import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from 'webapp/artist/component/pageComponent/Posts';

const PageList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(async () => {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setPosts(response.data);
        setLoading(false);
    }, []);

    console.log(posts);

    return (
        <>
            <div className="PageList">
                <Posts posts={posts} loading={loading}></Posts>
            </div>
        </>
    );
};
export default PageList;
