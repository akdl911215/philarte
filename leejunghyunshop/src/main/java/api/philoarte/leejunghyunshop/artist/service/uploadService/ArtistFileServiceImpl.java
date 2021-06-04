package api.philoarte.leejunghyunshop.artist.service.uploadService;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistFile;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.artist.repository.picturesRepository.ArtistFileRepository;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import com.querydsl.core.BooleanBuilder;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Position;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import java.io.File;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Function;

@Transactional
@Log4j2
@Service
@RequiredArgsConstructor
public class ArtistFileServiceImpl implements ArtistFilerService {

    private final ArtistFileRepository aritstFileRepository;

    @Value("${leejunghyunshop.philoarte.upload.path}")
    private String uploadPath;

    @Transactional
    @Override
    public ArrayList<ArtistFileDto> saveFile(List<MultipartFile> uploadFiles) {
        ArrayList<ArtistFileDto> ArtistFileResultList = new ArrayList<>();

        log.info("===================================");
        log.info("uploadFiles : " + uploadFiles);
        log.info("===================================");
        for (MultipartFile uploadFile : uploadFiles) {
            log.info("uploadFile : "+ uploadFile);
            String ofName = uploadFile.getOriginalFilename();
            log.info("ofName : "+ ofName);
            int index = ofName.lastIndexOf(".");
            String ofHeader = ofName.substring(0, index);
            String ext = ofName.substring(index);
            String uuid = UUID.randomUUID().toString();
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append(uploadPath).append(File.separator).append(uuid).append("_").append(ofHeader).append(ext);
            String saveName = stringBuilder.toString();
            log.info("Artist File upload Name : "+ saveName);
            Path savePath = Paths.get(saveName);
            log.info("savePath : "+ savePath);

            try {
                log.info("ArtistFileServiceImpl Try");
                uploadFile.transferTo(savePath);
                String thumbnailSaveName = uploadPath + File.separator + "s_" + uuid + ofName;
                Thumbnails.of(new File(saveName)).size(100, 100).outputFormat("jpg").toFile(thumbnailSaveName);

                Thumbnails.of(new File(saveName)).scale(1)
                        .watermark(Positions.BOTTOM_CENTER, ImageIO.read(new File(uploadPath + File.separator + "warterMark.png")), 0.5f)
                        .toFile(new File(uploadPath + File.separator + "w+" + uuid + "_" + ofName));

                ArtistFileDto artistFileDto = ArtistFileDto.builder()
                                                .uuid(uuid)
                                                .imgName(ofName)
                                                .build();

//                ArtistFileDto artistFileDtoResult = ArtistFileDto.builder()
//                                                    .uuid(uuid)
//                                                    .imgName(ofName)
//                                                    .build();
                log.info("ArtistFileServiceImpl Try 끝부분");
                ArtistFileResultList.add(artistFileDto);
                log.info(ArtistFileResultList);
            }catch (Exception e) {
                e.printStackTrace();
            }

        }

        log.info("리턴 바로 직전");
        log.info("ArtistFileResultList : "+ ArtistFileResultList);
        return ArtistFileResultList;

    }

    @Override
    public void artistFileDelete(Long artistFileId) {
        aritstFileRepository.artistFileDelete(artistFileId);
    }

    @Override
    public PageResultDto<ArtistDto, Artist> getPageList(PageRequestDto requestDto) {
        log.info("Artist Page Image List 를 불러옵니다");
        log.info("requestDto :::: " + requestDto);

        Pageable pageable = requestDto.getPageable(Sort.by("artistId").descending());
        log.info("pageable ::: " + pageable);
        Function<Artist, ArtistDto> fn = (entity -> entityDto(entity));
        log.info("fn :::: " + fn);

        List<ArtistFile> imageList = aritstFileRepository.findAll();
        log.info("imageList ::: " + imageList);
        Page result = (Page) imageList;
        log.info("result :::::::::: " + result);


        ArtistDto artistDto = new ArtistDto();
        log.info("artistDto :::: " + artistDto);
        List<ArtistFileDto> fileDtoList = artistDto.getFileDto();
        log.info("fileDtoList :::: " + fileDtoList);

//        aritstFileRepository.findAll().get().getArtistFileId(ArtistFileDto.);
//        ArtistDto artistDto = new ArtistDto();
//        List<ArtistFileDto> fileDtoList = artistDto.getFileDto();
//        log.info("fileDtoList :::: " + fileDtoList);
//        log.info("artistDto :::: " + artistDto);
//
//        aritstFileRepository.findAll().get(artistDto.getImgName());

//        Map<String, Object> totalResultMap = new HashMap<>();
//        totalResultMap.put("result", result);
//        totalResultMap.put("imgResultList", imgResultList);
//        log.info("totalResultMap :::::: " + totalResultMap);

//        Map<String, String> resultMap = new HashMap<>();
//        resultMap.put("JwtToken", provider.createToken(entityDto.getUsername(), entity.getRoles()));
//
//        entityDto.getArtistFileDtoList().forEach(file -> {
//            resultMap.put("uuid", file.getUuid());
//            resultMap.put("imgName", file.getImgName());
//        });

        log.info("return result :::::: " + result);
        return new PageResultDto(result, fn);
//    return null;
    }
}
