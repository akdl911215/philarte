package api.philoarte.leejunghyunshop.supporter.repository;

import api.philoarte.leejunghyunshop.supporter.domain.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Long> {
    boolean existsBySupportername(String supporter);
    Optional<Supporter> findBySupportername(String supportername);
    @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
    Supporter signin(@Param("username") String username, @Param("password")String password);
    List<Supporter> findAll();
}
