package api.philoarte.leejunghyunshop.artist.controller.pageController;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

        return new ResponseEntity<>(service.getPageList(page), HttpStatus.OK);
    }

}
