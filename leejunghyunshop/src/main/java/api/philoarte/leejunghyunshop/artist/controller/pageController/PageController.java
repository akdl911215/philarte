package api.philoarte.leejunghyunshop.artist.controller.pageController;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import com.amazonaws.services.s3.transfer.AbortableTransfer;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@Log4j2
@RequiredArgsConstructor // 자동 주입을 위한 Annotation
@RequestMapping("/page")
public class PageController {

    private final ArtistService service;


    @GetMapping("/")
    public String index() {
        return "redirect:/page/list";
    }

    @GetMapping("/list")
    public ResponseEntity<PageResultDto<ArtistDto, Artist>> list(PageRequestDto page) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("page................." + page);
//        log.info("model................." + model);
//        model.addAttribute("result", service.getPageList(page));
//        return null;
        return new ResponseEntity<>(service.getPageList(page), HttpStatus.OK);
    }

    @PostMapping("/totalSearchBar")
    public ResponseEntity<PageResultDto> totalSearchBar
            (@RequestBody ArtistDto artistDto) throws IOException {
        log.info("==============================================");
        log.info("==============================================");
        log.info("Artist totalSearchBar(서치바) start :::::::::: " + artistDto);
        log.info("==============================================");
        log.info("==============================================");

//        service.getPageList(artistDto);
        //service.
        return null;
    }
}
