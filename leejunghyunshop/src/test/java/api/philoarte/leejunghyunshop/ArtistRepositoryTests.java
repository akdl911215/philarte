package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ArtistRepositoryTests {

    @Autowired
    private ArtistRepository repository;

    @Test
    public void testFindAll() {

        List<Artist> result = repository.getAllData();

        for (Artist artist : result) {
            System.out.println(artist +": " + artist.getRoles());
        }


    }
}
