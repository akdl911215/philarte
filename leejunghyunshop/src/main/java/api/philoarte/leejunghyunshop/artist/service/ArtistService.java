package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


public interface ArtistService {

    String signup(ArtistDto artistDto);


    ArtistDto signin(ArtistDto artistDto);

//    Optional<Artist> finByusername(String username);

    List<Artist> getAllData();
    List<Artist> findAll();
    void deleteById(Long artistId);
//    Optional<Artist> findById(Long artistId);
    ArtistDto updateById(ArtistDto artistDto);


}
