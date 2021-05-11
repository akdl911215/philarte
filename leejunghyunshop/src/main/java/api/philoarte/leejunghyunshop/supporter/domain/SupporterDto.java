package api.philoarte.leejunghyunshop.supporter.domain;

import api.philoarte.leejunghyunshop.user.domain.Role;
import lombok.Data;

import java.util.List;

@Data
public class SupporterDto {
    //    @ApiModelProperty(position = 0)
    private long fundSupporterId;
    //    @ApiModelProperty(position = 1)
    private String username;
    //    @ApiModelProperty(position = 2)
    private String password;
    //    @ApiModelProperty(position = 3)
    private String name;
    //    @ApiModelProperty(position = 4)
    private String supporterEmail;
    //    @ApiModelProperty(position = 5)
    private String supporterPhoneNumber;
    //    @ApiModelProperty(position = 6)
    private String token;
    //    @ApiModelProperty(position = 7w)
    private List<Role> roles;
}
