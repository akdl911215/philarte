package api.philoarte.leejunghyunshop.artist.service.uploadService;

import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.artist.repository.picturesRepository.ArtistFileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Position;
import net.coobird.thumbnailator.geometry.Positions;
import org.springframework.beans.factory.annotation.Value;
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

@Log4j2
@Service
@RequiredArgsConstructor
public class ArtistFileServiceImpl implements ArtistFilerService {

    private final ArtistFileRepository artistFileRepository;

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
        artistFileRepository.artistFileDelete(artistFileId);
    }
}
