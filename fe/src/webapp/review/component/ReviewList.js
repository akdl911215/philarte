import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';
import { ReviewRegister, ReviewSearch } from '..';

const ReviewList = () => {
    const pageResult = useSelector((state) => state.reviews.pageResult);
    const dispatch = useDispatch();

    const page = pageResult.page;
    const type = useSelector((state) => state.reviews.type);
    const keyword = useSelector((state) => state.reviews.keyword);
    const reviews = useSelector((state) => {
        return state.reviews.pageResult.dtoList;
    });
    const msg = useSelector((state) => {
        return state.reviews.msg;
    });

    const selectContent = (reviewId) => {
        dispatch(getReviewRead(reviewId));
    };

    useEffect(() => {
        const param = { page: page, type: type, keyword: keyword };
        dispatch(getReviewList(param));
    }, []);

    return (
        <>
            <h1>{msg}</h1>
            <h3 className="text-center" style={{ marginTop: '100px' }}>
                Review 목록
            </h3>
            <div className="container">
                <Link to="/">
                    <button className="btn btn-success">홈으로</button>
                </Link>
                <Link to="/reviews/review_register">
                    <button className="btn btn-success pull-right">리뷰 등록</button>
                </Link>
                <br></br>
                <br></br>
                <ReviewSearch></ReviewSearch>
                {reviews.map((review, reviewId) => {
                    return (
                        <ul className="comment-box">
                            <li className="post-comment" key={review.reviewId}>
                                <div className="comment-content">
                                    <div className="post-body">
                                        <div className="comment-header">
                                            <span className="writerName">{review.writerName}</span>
                                            <span className="pull-right">{review.regDate}</span>
                                        </div>
                                        <div className="post-message">{review.title}</div>
                                        <div className="comment-footer"></div>
                                    </div>
                                    <Link to={`/reviews/review_read/${review.reviewId}`}>
                                        <button onClick={() => selectContent(review.reviewId)} className="btn btn-success" style={{ marginLeft: '970px' }}>
                                            자세히 보기
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    );
                })}
            </div>
            <br />
        </>
    );
};

export default ReviewList;
