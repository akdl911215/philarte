package api.philoarte.leejunghyunshop.user.repository;

import api.philoarte.leejunghyunshop.user.domain.UserVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserVo, Long> {
    boolean existsByUsername(String username);
    UserVo findByUsername(String username);
    @Query(value = "select * from users where username=:username and password=:password", nativeQuery = true)
    UserVo signin(@Param("username") String username, @Param("password")String password);

    List<UserVo> findAll();
}
