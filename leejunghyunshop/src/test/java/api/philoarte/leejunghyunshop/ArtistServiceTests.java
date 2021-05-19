package api.philoarte.leejunghyunshop;

import api.philoarte.leejunghyunshop.artist.domain.ArtistDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ArtistServiceTests {

    @Autowired
    private ArtistService sv;

    @Test
    public void testRegister() {
        ArtistDto artistDto = ArtistDto.builder()
                .artistId(1)
                .username("abcd")
                .password("1234")
                .artistName("Leejunghyun")
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
                .artistName("Leejunghyun")
                .address("seoul")
                .phoneNumber("010503902993")
                .school("bit")
                .department("comp")
                .build();

        System.out.println("=======================");
        System.out.println("변환작업 ===============");
        System.out.println("::::::::::::::" + sv.register(artistDto));
    }
}
