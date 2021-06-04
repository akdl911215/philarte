package api.philoarte.leejunghyunshop.artist.service.uploadService;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

public interface ArtistFilerService {

    ArrayList<ArtistFileDto> saveFile(List<MultipartFile> uploadFiles);
    void artistFileDelete(Long artistFileId);
    PageResultDto<ArtistDto, Artist> getPageList(PageRequestDto requestDto);

    default ArtistFile dtoToEntity(ArtistDto artistDto){
        ArtistFile artistFile = ModelMapperUtils.getModelMapper().map(artistDto, ArtistFile.class);

        return artistFile;
    }

    default ArtistFileDto entityToDto(ArtistFile artistFile){
        ArtistFileDto artistFileDto = ModelMapperUtils.getModelMapper().map(artistFile, ArtistFileDto.class);

        return artistFileDto;
    }

//    default ArtistFile dtoToEntityPictures(ArtistFileDto picturesDto) {
//        ArtistFile picture = ArtistFile.builder()
//                            .pnum(picturesDto.getPnum())
//                            .fname(picturesDto.getFname())
//                            .uuid(picturesDto.getUuid())
//                            .first(picturesDto.isFirst())
//                            .build();
//        return picture;
//    }

    default Artist dtoEntity(ArtistDto artistDto){
        Artist entity = Artist.builder()
                .artistId(artistDto.getArtistId())
                .username(artistDto.getUsername())
                .password(artistDto.getPassword())
                .name(artistDto.getName())
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
                .name(artist.getName())
                .email(artist.getEmail())
                .phoneNumber(artist.getPhoneNumber())
                .address(artist.getAddress())
                .school(artist.getSchool())
                .department(artist.getDepartment())
                .build();

        return entityDto;

    }
}
