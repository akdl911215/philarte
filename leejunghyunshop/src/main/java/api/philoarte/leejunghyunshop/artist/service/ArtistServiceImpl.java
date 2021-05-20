package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.domain.Role;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.common.service.AbstractService;
import api.philoarte.leejunghyunshop.security.domain.SecurityProvider;
import api.philoarte.leejunghyunshop.security.exception.SecurityRuntimeException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Log4j2
@RequiredArgsConstructor
@Service
public class ArtistServiceImpl extends AbstractService<Artist> implements ArtistService {

    private final ArtistRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;

    @Override
    public String signup(ArtistDto artistDto) {

        if(!repository.existsByUsername(artistDto.getUsername())){
            Artist entity = dtoEntity(artistDto);
            repository.saveAndFlush(entity);
            ArtistDto entityDto = entityDto(entity);
            entityDto.setPassword(passwordEncoder.encode(entityDto.getPassword()));
            List<Role> list = new ArrayList<>();
            list.add(Role.USER_ROLES);
            entity.changeRoles(list);
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
            String Token = provider.createToken(entity.getUsername(), repository.findByUsername(entity.getUsername()).get().getRoles());
            entityDto.setToken(Token);
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
    public Long delete(Artist artist) {
        repository.delete(artist);
        return repository.findById(artist.getArtistId()).orElse(null) == null ? 1L : 0L;
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
    public Optional<Artist> findById(Long artistId) {
        return repository.findById(artistId);
    }

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
}

