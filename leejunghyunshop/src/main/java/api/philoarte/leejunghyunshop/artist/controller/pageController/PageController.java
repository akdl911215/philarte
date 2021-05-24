package api.philoarte.leejunghyunshop.artist.controller.pageController;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import com.amazonaws.services.s3.transfer.AbortableTransfer;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

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

//    @GetMapping("/list")
//    public void list(PageRequestDto pageRequestDto, Model model) {
//        log.info("list................." + pageRequestDto);
//        model.addAttribute("result", service.getPageList(pageRequestDto));
//    }

    @GetMapping("/list")
    public ResponseEntity<ArtistDto> list(
            @ApiParam("PageList Artist") PageRequestDto pageRequestDto, Model model) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("list................." + pageRequestDto);
        log.info("model............ :::: " + model);
        model.addAttribute("result", service.getPageList(pageRequestDto));

        return null;
//        return ResponseEntity.ok(service.getPageList(PageRequestDto<ArtistDto, Artist >));
    }

//    @PostMapping("/signup")
//    @ApiOperation(value = "${ArtistController.signup}")
//    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
//            @ApiResponse(code = 403, message = "Access Denied"),
//            @ApiResponse(code = 422, message = "Artist - Username is alredy in use")})
//    public ResponseEntity<String> signup
//            (@ApiParam("Signup Artist") @RequestBody ArtistDto artistDto) throws IOException {
//        return ResponseEntity.ok(service.signup(artistDto));
//    }
}
