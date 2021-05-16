package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;

import java.util.List;

public interface ArtistService {
    String signup(Artist artist);
    ArtistDto signin(Artist artist);
    List<Artist> findAll();
    void deleteById(Long artist);
}
