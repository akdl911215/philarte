package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageResultDto;
import api.philoarte.leejunghyunshop.artist.service.pageService.PageRequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

@SpringBootTest
public class ArtistServiceTests {

    @Autowired
    private ArtistService sv;
    private PageRequestService pageRequestService;

    @Test
    public void testRegister() {
        ArtistDto artistDto = ArtistDto.builder()
                .artistId(1)
                .username("abcd")
                .password("1234")
                .name("Leejunghyun")
                .address("seoul")
                .phoneNumber("010503902993")
                .school("bit")
                .department("comp")
                .build();

        System.out.println("=======================");
        System.out.println("변환작업 ===============");
        System.out.println("::::::::::::::" + sv.register(artistDto));
    }

    @Test
    public void signup() {
        ArtistDto artistDto = ArtistDto.builder()
                .artistId(1)
                .username("abcd")
                .password("1234")
                .name("Leejunghyun")
                .address("seoul")
                .phoneNumber("010503902993")
                .school("bit")
                .department("comp")
                .build();

        System.out.println("=======================");
        System.out.println("변환작업 ===============");
        System.out.println("::::::::::::::" + sv.register(artistDto));
    }

    @Transactional
    @Commit
    @Test
    public void testList(){
        PageRequestDto pageRequestDto = PageRequestDto
                                        .builder()
                                        .page(1)
                                        .size(10)
                                        .build();

        PageResultDto<ArtistDto, Artist> resultDto = sv.getPageList(pageRequestDto);

        for (ArtistDto artistDto : resultDto.getDtoList()) {
            System.out.println(artistDto);
        }
    }
}
