package api.philoarte.leejunghyunshop.artist.controller.uploadController;

import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.PageRequestFileDto;
import api.philoarte.leejunghyunshop.artist.service.uploadService.ArtistFileServiceImpl;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewFileDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@Log4j2
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/artist_files" )
public class ArtistFileController {

    private final ArtistFileServiceImpl service;

    @Value("${leejunghyunshop.philoarte.upload.path}")
    private String uploadPath;

    @RequestMapping("/imgList/pages")
    public ResponseEntity<PageResultDto<ArtistDto, Object[]>> list(PageRequestFileDto page) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("imgList page................." + page);
//        log.info("model................." + model);
//        model.addAttribute("result", service.getPageList(page));
//        return null;
        log.info("result" + service.getPageList(page));
        return new ResponseEntity(service.getPageList(page), HttpStatus.OK);
//        return null;
    }

    @PostMapping("/uploadAjax")
    public ResponseEntity<List<ArtistFileDto>> uploadFile(List<MultipartFile> files) {
        log.info("찍힘? 1");
        System.out.println("files :: " + files);
        for (MultipartFile file : files) {
            System.out.println("file :: " + file);

            // 이미지 파일만 업로드 가능
            if (!file.getContentType().startsWith("image")){
                log.info("찍힘? 2");
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }
        return ResponseEntity.ok(service.saveFile(files));
    }

    @GetMapping("/display")
    public ResponseEntity<byte[]> getFile(String imgName) {
        ResponseEntity<byte[]> result = null;

        try {
            String srcFileName = URLDecoder.decode(imgName, "UTF-8");
            log.info("imgName : ", srcFileName);

            File file = new File(uploadPath + File.separator + srcFileName);
            log.info("file : ", file);

            HttpHeaders header = new HttpHeaders();

            // MIME타입 처리
            header.add("Content-Type", Files.probeContentType(file.toPath()));
            // 파일 데이터 처리
            result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), header, HttpStatus.OK);

        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return result;
    }

    @PutMapping("/update_file/{reviewFileId}")
    public ResponseEntity<ArrayList<ArtistFileDto>> updateFile(List<MultipartFile> files) {

        return ResponseEntity.ok(service.saveFile(files));
    }

    @DeleteMapping("/delete_file/{artistFileId}")
    public ResponseEntity<String> deleteFile(@PathVariable("aritstFileId") Long artistFileId){
        service.artistFileDelete(artistFileId);

        return ResponseEntity.ok("Delete Success");
    }
}
