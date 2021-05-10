import React from 'react';
import userService, { getUserEdit, getUserDelete } from '../service/user.service';

const UserEdit = () => {
    const userEdit = (e) => {
        e.preventDefault();
        const del = window.confirm('정보를 수정하시겠습니까?');
        if (del) {
            userService.getUserEdit();
            //     .then((res) => {
            //         alert(`수정되었습니다.`)
            //         history.push('/profile/update-user')
            //         window.location.reload()
            // }).catch((err) => {
            //     alert(err)
            // })
        }
    };

    const userDelete = (e) => {
        e.preventDefault();
        const del = window.confirm('정말 탈퇴하시겠습니까?');
        if (del) {
            userService.getUserDelete();
            // .then((res) => {
            //     alert(`탈퇴되었습니다.`);
            //     localStorage.removeItem('cartuser');
            //     localStorage.removeItem('token');
            //     history.pushState('/');
            // })
            // .catch((err) => {
            //     alert(err);
            // });
        }
    };
    return <></>;
};
export default UserEdit;
