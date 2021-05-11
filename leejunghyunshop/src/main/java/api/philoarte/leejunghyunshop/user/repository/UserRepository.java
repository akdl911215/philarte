package api.philoarte.leejunghyunshop.user.repository;

import api.philoarte.leejunghyunshop.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Optional 은 get에 안건다
    boolean existsByUsername(String username); // userRepository에서 Username 존재여부를 검사합니다(existsByUsername)
    Optional<User> findByUsername(String username);
    @Query(value = "select * from users where username=:username and password=:password", nativeQuery = true)
    User signin(@Param("username") String username, @Param("password")String password);

    List<User> findAll();
}
