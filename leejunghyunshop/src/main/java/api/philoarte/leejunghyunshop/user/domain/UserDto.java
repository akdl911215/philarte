package api.philoarte.leejunghyunshop.user.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {

//    @ApiModelProperty(position = 0)
    private Long userId;
//    @ApiModelProperty(position = 1)
    private String username;
//    @ApiModelProperty(position = 2)
    private String password;
//    @ApiModelProperty(position = 3)
    private String name;
//    @ApiModelProperty(position = 4)
    private String userEmail;
//    @ApiModelProperty(position = 5)
    private String token;
//    @ApiModelProperty(position = 6)
    private List<Role> roles;

}
