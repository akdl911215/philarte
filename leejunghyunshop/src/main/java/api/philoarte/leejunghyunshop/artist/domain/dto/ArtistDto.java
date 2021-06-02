package api.philoarte.leejunghyunshop.artist.domain.dto;

import api.philoarte.leejunghyunshop.artist.domain.Role;
import api.philoarte.leejunghyunshop.artist.domain.dto.ArtistFileDto;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
@Component
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
    private ArrayList<ArtistFileDto> pictures;
    @ApiModelProperty(position = 10)
    private List<Role> roles;
    @ApiModelProperty(position = 11)
    private String token;

    @Builder.Default
    private ArrayList<MultipartFile> files = new ArrayList<>();

    @Builder.Default
    private List<ArtistFileDto> artistFileDtoList = new ArrayList<>();

    public void addArtistFileDto(ArtistFileDto artistFileDto){
        artistFileDtoList.add(artistFileDto);
    }

    public void setArtistId(long artistId){
        this.artistId = artistId;
    }
    public long getArtistId(){
        return artistId;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getEmail(){
        return email;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public String getPhoneNumber(){
        return phoneNumber;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public String getAddress(){
        return address;
    }
    public void setSchool(String school){
        this.school = school;
    }
    public String getSchool(){
        return school;
    }
    public void setDepartment(String department){
        this.department = department;
    }
    public String getDepartment(){
        return department;
    }

}
