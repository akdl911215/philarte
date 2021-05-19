package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


public interface ArtistService {

    ArtistDto signin(ArtistDto artistDto);
//    Optional<Artist> finByusername(String username);
    List<Artist> getAllData();
    List<Artist> findAll();
    void deleteById(Long artistId);
//    Optional<Artist> findById(Long artistId);
    ArtistDto updateById(ArtistDto artistDto);


    Long register(ArtistDto artistDto);
    String signup(ArtistDto artistDto);
    default Artist dtoEntity(ArtistDto artistDto){
        Artist entity = Artist.builder()
                .artistId(artistDto.getArtistId())
                .username(artistDto.getUsername())
                .password(artistDto.getPassword())
                .artistName(artistDto.getArtistName())
                .email(artistDto.getEmail())
                .phoneNumber(artistDto.getPhoneNumber())
                .address(artistDto.getAddress())
                .school(artistDto.getSchool())
                .department(artistDto.getDepartment())
                .build();

        return entity;

    }
    
    default ArtistDto entityDto(Artist artist) {
        ArtistDto entityDto = ArtistDto.builder()
                .artistId(artist.getArtistId())
                .username(artist.getUsername())
                .password(artist.getPassword())
                .artistName(artist.getArtistName())
                .email(artist.getEmail())
                .phoneNumber(artist.getPhoneNumber())
                .address(artist.getAddress())
                .school(artist.getSchool())
                .department(artist.getDepartment())
                .build();

        return entityDto;

    }
}
