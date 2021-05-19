package api.philoarte.leejunghyunshop.artist.domain;


import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.common.domain.BaseEntity;
import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@EntityListeners(value = {AuditingEntityListener.class})
@Entity
@Table(name = "artists")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "roles")
public class Artist extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn(name = "artist_id")
    private long artistId;

    //, unique = true, nullable = false
    @Column(name = "username")
    private String username;

//    @Size(min = 8, message = "Minimum Password Length: 8 characters")
    //, columnDefinition="Number(10) default '12345678'"
    @Column(name = "password")
    private String password;

//    @Embedded
    @Column(name = "artist_name")
    private String artistName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "school")
    private String school;

    @Column(name = "department")
    private String department;

     @ElementCollection(fetch = FetchType.EAGER)
     List<Role> roles;

     public void changeRoles(List<Role> roles){
         this.roles = roles;
     }
//
//     public void changePassword(String password){
//         this.password = password;
//     }

//     @Builder
//    public Artist(long artistId, String username, String password, String name, String email,
//                  String phoneNumber, String address, String school, String department) {
//         super();
//         this.artistId = artistId;
//         this.username = username;
//         this.password = password;
//         this.name = name;
//         this.email = email;
//         this.phoneNumber = phoneNumber;
//         this.address = address;
//         this.school = school;
//         this.department = department;
//
//     }
//     public void saveAll(ArtistDto artistDto){
//         this.artistId = artistDto.getArtistId();
//         this.username = artistDto.getUsername();
//         this.password = artistDto.getPassword();
//         this.name = artistDto.getName();
//         this.email = artistDto.getEmail();
//         this.phoneNumber = artistDto.getPhoneNumber();
//         this.address = artistDto.getAddress();
//         this.school = artistDto.getSchool();
//         this.department = artistDto.getDepartment();
//     }
//     public static Artist of(ArtistDto artistDto){
//         Artist artist = ModelMapperUtils.getModelMapper().map(artistDto,Artist.class);
//         return artist;
//     }

}
