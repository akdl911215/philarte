package api.philoarte.leejunghyunshop.user.service;

import api.philoarte.leejunghyunshop.user.domain.UserDto;
import api.philoarte.leejunghyunshop.user.domain.User;

import java.util.List;

public interface UserService {
    String signup(User user);
    UserDto signin(User user);
    List<User> findAll();
}
