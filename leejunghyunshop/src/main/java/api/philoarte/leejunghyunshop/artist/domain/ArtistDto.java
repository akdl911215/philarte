package api.philoarte.leejunghyunshop.artist.domain;

import api.philoarte.leejunghyunshop.user.domain.Role;
import lombok.Data;

import javax.persistence.Column;
import java.util.List;

@Data
public class ArtistDto {
    //    @ApiModelProperty(position = 0)
    private long artistId;
    //    @ApiModelProperty(position = 1)
    private String artistname;
    //    @ApiModelProperty(position = 2)
    private String password;
    //    @ApiModelProperty(position = 3)
    private String name;
    //    @ApiModelProperty(position = 4)
    private String artistEmail;
    //    @ApiModelProperty(position = 5)
    private String artistPhoneNumber;
    //    @ApiModelProperty(position = 6)
    private String address;
    //    @ApiModelProperty(position = 7)
    private String affiliation;
    //    @ApiModelProperty(position = 8)
    private String token;
    //    @ApiModelProperty(position = 9)
    private List<Role> roles;
}
