package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;

import java.util.List;
import java.util.Optional;

public interface ArtistService {
    String signup(Artist artist);
    ArtistDto signin(Artist artist);
//    List<Artist> findAll();
    void deleteById(Long artistId);
//    Optional<Artist> findById(Long artistId);
    Artist updateById(Long artistId, String password, String name, String email, String phoneNumber, String address, String affiliation);
}
