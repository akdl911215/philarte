package api.philoarte.leejunghyunshop.user.service;

import api.philoarte.leejunghyunshop.user.domain.UserDto;
import api.philoarte.leejunghyunshop.user.domain.UserVo;

import java.util.List;

public interface UserService {
    String signup(UserVo user);
    UserDto signin(UserVo user);
    List<UserVo> findAll();
}
