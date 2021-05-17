package api.philoarte.leejunghyunshop.artist.repository;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
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

    @Query("select u from UserVO u where u.username= :username and u.password= :password")
    ArtistDto login(@Param("username") String username, @Param("password") String password);
}


//    List<Artist> findAll();
//    void deleteById(Long artist);
//
//    public Optional<Artist> findById(@Param("artistId") Long artistId);
//    @Query(value = "update artists set password=#{password}, email=#{email}, phoneNumber=#{phoneNumber}, address=#{address}, " +
//                            "school=#{school}, department=#{department} where artistId = #{artistId} ", nativeQuery = true)
//    public Artist updateById(@Param("ArtistId") String username, String password);


}
