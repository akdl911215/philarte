package api.philoarte.leejunghyunshop.artist.controller;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistServiceImpl;
import api.philoarte.leejunghyunshop.common.domain.Home;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = "artists")
@RequiredArgsConstructor
@Log
@RequestMapping("/artists")
public class ArtistController {

    private final ArtistServiceImpl service;
    private final ModelMapper modelMapper;

    @PostMapping("/signup")
    @ApiOperation(value = "${ArtistController.signup}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
        @ApiResponse(code = 403, message = "Access Denied"),
        @ApiResponse(code = 422, message = "Artist - Username is alredy in use")})
    public ResponseEntity<String> signup
            (@ApiParam("Signup Artist") @RequestBody ArtistDto artist) throws IOException{
        log.info("회원가입 시작 +++++++++++++++++++++++++");
        return ResponseEntity.ok(service.signup(modelMapper.map(artist, Artist.class)));

    }


    @PostMapping("/signin")
    @ApiOperation(value = "${ArtistController.signin}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
        @ApiResponse(code = 422, message = "Invalid Artist-Username / Password supplied")})
    public ResponseEntity<ArtistDto> signin
            (@RequestBody ArtistDto artist) throws IOException {
        log.info("Artist Signin start :::::::::: " + artist);
        return ResponseEntity.ok(service.signin(modelMapper.map(artist, Artist.class)));
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Artist>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PutMapping("")
    public ResponseEntity<Long> update
            (@RequestBody Home home) {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("")
    public ResponseEntity<List<Home>> delete
            (@RequestBody Home home) {
        return ResponseEntity.ok(null);
    }


    @GetMapping("/all")
    public ResponseEntity<List<ArtistDto>> all() {
        log.info("로그인 하지 않은 사용자도 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }

    @PostMapping("/{username}")
    public ResponseEntity<?> auth(@PathVariable String username) {
        log.info("로그인한 사용자만 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }

    @PostMapping("/admin")
    public ResponseEntity<?> admin() {
        log.info("관리자만 접근 가능한 URI");
        return ResponseEntity.ok(null);
    }

}

