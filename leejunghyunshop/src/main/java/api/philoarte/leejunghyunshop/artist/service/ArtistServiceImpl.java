package api.philoarte.leejunghyunshop.artist.service;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import api.philoarte.leejunghyunshop.security.domain.SecurityProvider;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
@RequiredArgsConstructor
@Service
public class ArtistServiceImpl implements ArtistService {

    private final ArtistRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ModelMapper modelMapper;

    @Override
    public String signup(Artist artist) {
//        if(!repository.existsByArtistname(artist.getUsername())){
//            artist.setPassword(passwordEncoder.encode(artist.getPassword()));
//            List<Role> list = new ArrayList<>();
//            list.add(Role.USER);
//            artist.setRoles(list);
//            repository.save(artist);
//            return provider.createToken(artist.getUsername(), artist.getRoles());
//        } else {
//            throw new SecurityRuntimeException("Artist Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
//        }
        return artist.getUsername();
    }

    @Override
//    public Artist signin(Artist artist) {
    public Artist signin(Artist artist) {
        Artist artistDto = (Artist)repository.signin(artist.getUsername(), artist.getPassword());

//        try {
//            ArtistDto artistDto  = modelMapper.map(artist, ArtistDto.class);
//            artistDto.setToken(
//                    (passwordEncoder.matches(artist.getPassword(), repository.findByArtistname(artist.getUsername()).get().getPassword())
//            ) ?
//            provider.createToken(artist.getUsername(), repository.findByArtistname(artist.getUsername()).get().getRoles())
//            : "WRONG_PASSWORD");
//
//            return artistDto;
//        } catch (Exception e){
//            throw new SecurityRuntimeException("Invalid Artist-Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
//        }
        return (Artist)artistDto;
    }

    @Override
    public List<Artist> findAll() {
        return repository.findAll();
    }
}
