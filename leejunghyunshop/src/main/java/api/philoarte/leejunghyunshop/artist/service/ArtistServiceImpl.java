package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.*;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import api.philoarte.leejunghyunshop.artist.repository.picturesRepository.ArtistFileRepository;
import api.philoarte.leejunghyunshop.artist.service.uploadService.ArtistFilerService;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.common.service.AbstractService;
import api.philoarte.leejunghyunshop.security.domain.SecurityProvider;
import api.philoarte.leejunghyunshop.security.exception.SecurityRuntimeException;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;


@Transactional
@Log4j2
@RequiredArgsConstructor
@Service
public class ArtistServiceImpl extends AbstractService<Artist> implements ArtistService {

    private final ArtistRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ArtistFileRepository aritstFileRepository;

    @Transactional
    @Override // jpa save 사용시 insert가 아니고 update 뜨는 이유
    public String signup(ArtistDto artistDto) {
        log.info("ArtistServiceImpl 도착하니 1" );
        log.info("artistDto 값은 ? :::: " + artistDto);
        if(!repository.existsByUsername(artistDto.getUsername())){
            log.info("artistDto 여긴? " + artistDto);
            Map<String, Object> entityMap = dtoToEntity(artistDto);
            log.info("entityMap : " + entityMap);
            Artist entity = (Artist) entityMap.get("artist");
            log.info("entity : " + entity);
            List<ArtistFile> artistFileList = (List<ArtistFile>) entityMap.get("fileList");
            log.info("artistFileList : " + artistFileList);
            repository.saveAndFlush(entity); // save 안될시 saveAndFlush 변경하자
            log.info("ArtistServiceImpl 도착하니 2?");
            log.info("entity : " + entity);

            if (artistFileList != null && artistFileList.size() > 0) {
                log.info("사진이 저장됩니다" , (artistFileList != null && artistFileList.size() > 0));
                artistFileList.forEach(artistFile -> {
                    aritstFileRepository.save(artistFile);
                });
            }

            log.info("ArtistServiceImpl 도착하니 3 ?");
            ArtistDto entityDto = entityDto(entity);
            log.info("entityDto : " + entityDto);
            log.info("ArtistServiceImpl 도착하니 4?");
            entityDto.setPassword(passwordEncoder.encode(entityDto.getPassword()));
            log.info("ArtistServiceImpl 도착하니 5 ?");
            List<Role> list = new ArrayList<>();
            log.info("artistServiceImpl list : " + list);
            list.add(Role.USER_ROLES);
            entity.changeRoles(list);
            log.info("entity 포함 list : " + list);
            return provider.createToken(entityDto.getUsername(), entity.getRoles());
        } else {
            throw new SecurityRuntimeException("Artist Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public ArtistDto signin(ArtistDto artistDto) {
        try {
            Artist entity = dtoEntity(artistDto);
            repository.signin(entity.getUsername(), entity.getPassword());
            ArtistDto entityDto = entityDto(entity);

            Optional<Artist> comprehensiveInfomationArtist = repository.findByUsername(entity.getUsername());
            entityDto(comprehensiveInfomationArtist.get());
            entityDto = entityDto(comprehensiveInfomationArtist.get());
            String Token = provider.createToken(entity.getUsername(), repository.findByUsername(entity.getUsername()).get().getRoles());
            entityDto.setToken(Token);

            log.info("====================");
            log.info(entityDto);
            log.info("====================");
            log.info("Token; ::::::::: " + Token);
//            entityDto.setToken(
//                    (passwordEncoder.matches(entityDto.getPassword(), repository.findByUsername(entity.getUsername()).get().getPassword())
//            ) ?
//            provider.createToken(entity.getUsername(), repository.findByUsername(entity.getUsername()).get().getRoles())
//            : "WRONG_PASSWORD");

            return entityDto;
        } catch (Exception e){
            throw new SecurityRuntimeException("Invalid Artist-Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public List<Artist> getAllData() {
        return repository.getAllData();
    }

    @Override
    public void deleteById(Long artistId) {
        repository.deleteById(artistId);
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Optional<Artist> getOne(Long id) {
        return Optional.ofNullable(repository.getOne(id));
    }



    @Override
    public String delete(Artist artist) {
        repository.delete(artist);
        return repository.findById(artist.getArtistId()).orElse(null) == null ? "success" : "fail";
    }

    @Override
    public Boolean existsById(long id) {
        return repository.existsById(id);
    }

    @Override
    public Long save(Artist artist) {
        return (repository.save(artist) != null) ? 1L : 0L ;
    }

    @Override
    public Optional<Artist> findById(Long artistId) { return repository.findById(artistId); }

    @Override
    public List<Artist> findAll() {
        return repository.getAllData();
    }

    @Override
    public ArtistDto updateById(ArtistDto artistDto) {
        Artist entity = dtoEntity(artistDto);

        repository.save(entity);
        ArtistDto dtoEntity = entityDto(entity);
        return dtoEntity;
    }

    @Transactional
    @Override
    public ArtistDto updateMypage(ArtistDto artistDto) {
            log.info("====================");
            log.info("진입했나? :::::::: " + artistDto);
            log.info("====================");

            Artist artist = repository.getOne(artistDto.getArtistId());

            artist.changePassword(artistDto.getPassword());
            artist.changePhoneNumber(artistDto.getPhoneNumber());
            artist.changeEmail(artistDto.getEmail());
            artist.changeAddress(artistDto.getAddress());
            artist.changeSchool(artistDto.getSchool());
            artist.changeDepartment(artistDto.getDepartment());

            repository.save(artist);
            ArtistDto dtoEntity = entityDto(artist);
            log.info("dtoEntity :::::: " + dtoEntity);
            return dtoEntity;
    }

    @Override
    public Long register(ArtistDto artistDto) {
        log.info("DTO ===============");
        log.info(artistDto);
        Artist entity = dtoEntity(artistDto);
        log.info("entity ::::::::::::::");
        log.info(entity);
        repository.save(entity);
        return null;
    }

    private BooleanBuilder getSearch(PageRequestDto requestDto) {
        String type = requestDto.getType();
        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QArtist qArtist = QArtist.artist;
        String keyword = requestDto.getKeyword();
        BooleanExpression expression = qArtist.artistId.gt(0L); // artist > 0 조건만 생성
        booleanBuilder.and(expression);

        if(type == null || type.trim().length() == 0){ // 검색 조건이 없는 경우
            return booleanBuilder;
        }

        // 검색 조건 작성
        BooleanBuilder conditionBuilder = new BooleanBuilder();

        if(type.contains("u")){
            conditionBuilder.or(qArtist.username.contains(keyword));
        }
        if (type.contains("n")){
            conditionBuilder.or(qArtist.name.contains(keyword));
        }
        if (type.contains("e")){
            conditionBuilder.or(qArtist.email.contains(keyword));
        }
        if (type.contains("s")){
            conditionBuilder.or(qArtist.school.contains(keyword));
        }
        if (type.contains("d")){
            conditionBuilder.or(qArtist.department.contains(keyword));
        }

        // 모든 조건 통합
        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;
    }

    @Override
    public PageResultDto<ArtistDto, Artist> getPageList(PageRequestDto requestDto) {
        Pageable pageable = requestDto.getPageable(Sort.by("artistId").descending());

        BooleanBuilder booleanBuilder = getSearch(requestDto); // 검색 조건 처리

        Page<Artist> result = repository.findAll(booleanBuilder, pageable); //Querydsl 사용

        Function<Artist, ArtistDto> fn = (entity -> entityDto(entity));

        return new PageResultDto<>(result, fn);
    }
}

