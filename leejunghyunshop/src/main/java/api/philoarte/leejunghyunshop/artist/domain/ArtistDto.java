package api.philoarte.leejunghyunshop.artist.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class ArtistDto {
    @ApiModelProperty(position = 0)
    private long artistId;
    @ApiModelProperty(position = 1)
    private String username;
    @ApiModelProperty(position = 2)
    private String password;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String email;
    @ApiModelProperty(position = 5)
    private String phoneNumber;
    @ApiModelProperty(position = 6)
    private String address;
    @ApiModelProperty(position = 7)
    private String school;
    @ApiModelProperty(position = 8)
    private String department;
    @ApiModelProperty(position = 9)
    private List<Role> roles;
    @ApiModelProperty(position = 10)
    private String token;
// 겟엔티티로 반환
    // 엔티티안에 디티오로 반환
    // 서비스에 디폴트메소드로 정의
}
