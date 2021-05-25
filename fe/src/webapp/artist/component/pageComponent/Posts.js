import React from 'react';

const Posts = ({ posts, loading }) => {
    // loading && 은 데이터가 아직 로딩되지 않았을 경우 다음의 것을 표시
    return (
        <>
            {loading && <div> loading... </div>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};
export default Posts;
