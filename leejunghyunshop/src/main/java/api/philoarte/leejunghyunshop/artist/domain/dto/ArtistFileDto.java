package api.philoarte.leejunghyunshop.artist.domain.dto;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArtistFileDto {
    private Long artistFileId;
    private String uuid;
    private String imgName;
    private String path;
    private Artist artist;
}
