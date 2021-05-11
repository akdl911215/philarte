package api.philoarte.leejunghyunshop.supporter.controller;

import api.philoarte.leejunghyunshop.common.domain.Home;
import api.philoarte.leejunghyunshop.supporter.domain.Supporter;
import api.philoarte.leejunghyunshop.supporter.domain.SupporterDto;
import api.philoarte.leejunghyunshop.supporter.service.SupporterServiceImpl;
import api.philoarte.leejunghyunshop.user.domain.UserDto;
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
@Api(tags = "supporters")
@RequiredArgsConstructor
@Log
@RequestMapping("/supporters")
public class SupporterController {

    private final SupporterServiceImpl service;
//    private final ModelMapper modelMapper;

    @PostMapping("/signup")
    @ApiOperation(value = "${SupporterController.signup}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Something went wrong"),
            @ApiResponse(code = 403, message = "Access Denied"),
            @ApiResponse(code = 422, message = "Support - Username is alredy in use")})
    public ResponseEntity<String> signup
            (@ApiParam("Signup Supporter") @RequestBody SupporterDto supporter) throws IOException {
        log.info("회원가입 시작 +++++++++++++++++++++++++");
//        return ResponseEntity.ok(service.signup(modelMapper.map(supporter, Supporter.class)));
        return ResponseEntity.ok(supporter.getName());
    }

    @PostMapping("/signin")
    @ApiOperation(value = "${SupporterController.signin}")
    @ApiResponses(value = {@ApiResponse(code = 400, message = "Somthing went wrong"),
            @ApiResponse(code = 422, message = "Invalid Support-Username / Password supplied")})
    public ResponseEntity<SupporterDto> signin
            (@RequestBody SupporterDto supporter) throws IOException {
        log.info("Artist Signin start :::::::::: " + supporter);
//        return ResponseEntity.ok(service.signin(modelMapper.map(supporter, Supporter.class)));
        return ResponseEntity.ok(supporter);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Supporter>> findAll() {
        return ResponseEntity.ok(service.findALl());
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
    public ResponseEntity<List<UserDto>> all() {
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