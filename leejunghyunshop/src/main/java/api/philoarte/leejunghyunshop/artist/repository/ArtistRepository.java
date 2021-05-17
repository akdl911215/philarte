package api.philoarte.leejunghyunshop.artist.repository;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    boolean existsByName(String name);
    Optional<Artist> findByName(String name);
    @Query(value = "select * from artists where username=:username and password=:password", nativeQuery = true)
    Artist signin(@Param("username") String username, @Param("password")String password);

//    List<Artist> findAll();
    void deleteById(Long artist);

    public Optional<Artist> findById(@Param("artistId") Long artistId);
    @Query(value = "update artists set artistId set password=?, email=?, phoneNumber=?, address=?, affiliation=? where artistId", nativeQuery = true)
    public Artist updateById(@Param("artistId") Long artistId, @Param("password") String password, @Param("email") String email,
                             @Param("phoneNumber") String phoneNumber, @Param("address") String address, @Param("affiliation") String affiliation);
}
