package api.philoarte.leejunghyunshop.artist.controller;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistServiceImpl;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = "artists")
@RequiredArgsConstructor
@Log
@RequestMapping(value = "/artists", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
public class ArtistController {

    private final ArtistServiceImpl service;

    @GetMapping("/list/pages")
    public ResponseEntity<PageResultDto<ArtistDto, Artist>> list(PageRequestDto page) {
        log.info("=======================================");
        log.info("=======================================");
        log.info("page................." + page);
//        log.info("model................." + model);
//        model.addAttribute("result", service.getPageList(page));
//        return null;
        log.info("result" + service.getPageList(page));
        return new ResponseEntity(service.getPageList(page), HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ApiOperation(value = "${ArtistController.signup}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Artist - Username is alredy in use")})
    public ResponseEntity<String> signup
            (@ApiParam("Signup Artist") @RequestBody ArtistDto artistDto) throws IOException {
        return ResponseEntity.ok(service.signup(artistDto));
    }


    @PostMapping("/signin")
    @ApiOperation(value = "${ArtistController.signin}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
            @ApiResponse(code = 422, message = "Invalid Artist-Username / Password supplied")})
    public ResponseEntity<ArtistDto> signin
            (@ApiParam("Signin Artist") @RequestBody ArtistDto artistDto) throws IOException {
        log.info("==============================================");
        log.info("==============================================");
        log.info("Artist Signin(로그인) start :::::::::: " + artistDto);
        log.info("==============================================");
        log.info("==============================================");
        service.signin(artistDto);
        return ResponseEntity.ok(service.signin(artistDto));
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Artist>> findAll() {
        return ResponseEntity.ok(service.getAllData());
    }

//    @GetMapping("/list")
//    public void list(PageRequestDto pageRequestDto, Model model) {
//        log.info("list................." + pageRequestDto);
//        model.addAttribute("result", service.getPageList(pageRequestDto));
//    }

//    @GetMapping("/fetchOne/{artistId}")
//    public Optional<Artist> findById
//            (@PathVariable("artistId") Long artistId) {
//        System.out.println("회원정보 1개를 불러옵니다 ::::::::::");
//        return service.findById(artistId);
//    }

    @GetMapping("/fetchOne/{artistId}")
    public ResponseEntity<Optional<Artist>> findById
            (@PathVariable("artistId") Long artistId) {
        System.out.println("회원정보 1개를 불러옵니다 ::::::::::");
        return ResponseEntity.ok(service.findById(artistId));
    }

    @PutMapping("/update/{artistId}")
    public ResponseEntity<ArtistDto> updateById
            (@PathVariable("artistId") Long artistId,
             @RequestBody ArtistDto artist) {
        System.out.println("회원정보 1개를 수정합니다 :::::::::::");
        artist.setArtistId(artistId);
        return ResponseEntity.ok(service.updateById(artist));
    }

    @PutMapping("/mypage")
    public ResponseEntity<String> updateMypage
            (@RequestBody ArtistDto artistDto) {
        System.out.println("회원정보 1개를 수정합니다 :::::::::::");
        service.updateMypage(artistDto);
        return ResponseEntity.ok("Success Mypage");
    }

    @DeleteMapping("/delete")
    @ApiOperation(value = "${ArtistController.delete}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Username is alredy in use")})
    public void deleteById
            (@RequestBody ArtistDto artistDto) {
        System.out.println("삭제를 시작합니다 :::: ");
        System.out.println("artistDto :::::::: " + artistDto);
        Long artistId = artistDto.getArtistId();
        log.info("ArtistId ::::: " + artistId);
        service.deleteById(artistId);
    }

//    @GetMapping("/all")
//    public ResponseEntity<List<ArtistDto>> all() {
//        log.info("로그인 하지 않은 사용자도 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }
//
//
//    @PostMapping("/{username}")
//    public ResponseEntity<?> auth(@PathVariable String username) {
//        log.info("로그인한 사용자만 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }
//
//    @PostMapping("/admin")
//    public ResponseEntity<?> admin() {
//        log.info("관리자만 접근 가능한 URI");
//        return ResponseEntity.ok(null);
//    }

}

