package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootTest
@Log4j2
public class ArtistRepositoryTests {

    @Autowired
    private ArtistRepository repository;

    @Test
    public void test() {
        log.info("-----------------------");
    }

//    @Transactional
//    @Commit
//    @Test
//    public void testUpdatePw() {
//
//        repository.updatePassword(8L, "87654321");
//
//
//    }
//
//    @Transactional
//    @Commit
//    @Test
//    public void testUpdate2() {
//
//        Artist artist =  repository.findById(8L).get();
//
//        artist.setPassword("11111");
//        artist.setEmail("aaa@naver.com");
//
//        repository.save(artist);
//
//    }
//
//
//    @Test
//    public void testFindAllOld() {
//
//        Pageable pageable = PageRequest.of(0,10);
//
//        repository.getAllDataPaging(pageable).get().forEach(artist -> {
//            log.info(artist);
//            log.info(artist.getRoles());
//            log.info("--------------------");
//        });

//    }


    @Test
    public void testFindAll() {

        List<Artist> result = repository.getAllData();

        for (Artist artist : result) {
            System.out.println(artist +": " + artist.getRoles());
        }


    }
}
