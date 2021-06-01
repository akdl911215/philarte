import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageList } from 'webapp/artist/index';
import 'webapp/artist/style/ArtistPageList2.css';
import { fetchPage } from 'webapp/artist/reducer/artist.reducer';

const ArtistPageList2 = () => {
    const dispatch = useDispatch();
    const pageResult = useSelector((state) => state.artists.pageResult);
    const type = useSelector((state) => state.artists.type);
    const keyword = useSelector((state) => state.artists.keyword);
    const page = pageResult.page;

    useEffect(() => {
        const param = { type: type, keyword: keyword, page: page };
        dispatch(fetchPage(param)); //페이지에 1페이지 뿌려주는 역할
    }, []);

    return (
        <>
            <div>
                <table className="table table-striped table-bordered">
                    <table>
                        <thead style={{ textAlign: 'center' }}>
                            <th>유저넘버 </th>
                            <th>아이디 </th>
                            <th>비밀번호 </th>
                            <th>이름 </th>
                            <th>E-mail </th>
                            <th>주소 </th>
                            <th>학교 </th>
                            <th>학과 </th>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {pageResult.dtoList.map((artist, id) => {
                                return (
                                    <>
                                        <tr key={id}>
                                            <td>{artist.artistId}</td>
                                            <td>{artist.username}</td>
                                            <td>{artist.password}</td>
                                            <td>{artist.name}</td>
                                            <td>{artist.email}</td>
                                            <td>{artist.address}</td>
                                            <td>{artist.school}</td>
                                            <td>{artist.department}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                    <PageList {...pageResult} type={type} keyword={keyword} />
                </table>
            </div>
        </>
    );
};
export default ArtistPageList2;
