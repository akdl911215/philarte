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

//    @GetMapping("/list")
//    public void list(PageRequestDto pageRequestDto, Model model) {
//        log.info("list................." + pageRequestDto);
//        model.addAttribute("result", service.getPageList(pageRequestDto));
//    }

    @GetMapping("/list")
    public ResponseEntity<PageResultDto<ArtistDto, Artist>> list(
            PageRequestDto page) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("page................." + page);
        page.getKeyword();
        log.info("page.getKeyword() :::::::::: "+ page.getKeyword());
        page.getType();
        log.info("page.getType() ::::::::: " + page.getType());
        page.getSize();
        log.info("page.getSize() ::::::::::: " + page.getSize());
        page.getPage();
        log.info("page.getPage() ::::::::: " + page.getPage());
        page.getUsername();
        log.info("page.getUsername() :::::::::: " + page.getUsername());
        page.getName();
        log.info("page.getName() ::::::: " + page.getName());
        page.getEmail();
        log.info("page.getEmail() ::::::: " + page.getEmail());
        page.getAddress();
        log.info("age.getAddress() :::::::: " + page.getAddress());
        page.getSchool();
        log.info("page.getSchool() ::::::::: " + page.getSchool());
        page.getDepartment();
        log.info("page.getDepartment() :::::::::: " + page.getDepartment());
//        return null;
        return new ResponseEntity<>(service.getPageList(page), HttpStatus.OK);
    }

//    @GetMapping("/list/search")
//    public String search(@RequestParam(value="{keyword}") String keyword, Model model){
//        log.info("=======================================");
//        log.info("=======================================");
//        List<ArtistDto> artistDtoList = service.searchPosts(keyword);
//        model.addAttribute("artistDtoList", artistDtoList);
//        return null;
//    }

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
