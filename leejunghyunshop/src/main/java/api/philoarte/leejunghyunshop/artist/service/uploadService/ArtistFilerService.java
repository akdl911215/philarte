package api.philoarte.leejunghyunshop.artist.service.uploadService;

import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

public interface ArtistFilerService {

    ArrayList<ArtistFileDto> saveFile(List<MultipartFile> uploadFiles);
    void artistFileDelete(Long artistFileId);

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
}
