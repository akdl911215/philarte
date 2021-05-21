package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.repository.ArtistRepository;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

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
            System.out.println(artist + ": " + artist.getRoles());
        }
    }

    @Transactional
    @Commit
    @Test
    public void insertDummies(){
        IntStream.rangeClosed(1,300).forEach(i -> {
            Artist artist = Artist.builder()
                    .artistId(i)
                    .username("username " + i)
                    .password("password " + i)
                    .name("name " + i)
                    .email("email " + i)
                    .address("address " + i)
                    .phoneNumber("phoneNumber " + i)
                    .school("school " + i)
                    .department("department " + i)
                    .build();
            System.out.println("=====================");
            System.out.println(repository.save(artist));
        });
    }

    @Test
    @Transactional
    @Commit
    public void updateSchoolDepartment() {
        Optional<Artist> result = repository.findById(301L); // 존재하는 번호로 테스트함
        if(result.isPresent()){ // get 메소드를 사용하면 Optional 객체에 저장된 값에 접근할 수 있다.
                                //  get() 메소드를 호출 전에 isPresent() 메소드를 사용하여 Optional 개체에 저장된 값이 null 인지 아닌지 판단
            Artist artist = result.get();
            artist.changeSchool("ChangeBit");
            artist.changeDepartment("ChangeCamp");
            repository.save(artist);
        }
    }

    @Test
    @Transactional
    @Commit
    public void ArtistQueryTestOne() {
        Pageable pageable = PageRequest.of(0, 10, Sort.by("artistId").descending());

    }
}
