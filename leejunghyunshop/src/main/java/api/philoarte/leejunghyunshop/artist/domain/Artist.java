package api.philoarte.leejunghyunshop.artist.domain;


import api.philoarte.leejunghyunshop.common.domain.BaseEntity;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
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
    //, unique = true , nullable = false
    @Column(name = "username")
    private String username;

    //, columnDefinition="Number(10) default '12345678'"
//    @Size(min = 8, message = "Minimum Password Length: 8 characters")
    @Column(name = "password")
    private String password;

//    @Embedded
    @Column(name = "name")
    private String name;

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

     public void changeSchool(String school){
         this.school = school;
     }

     public void changeDepartment(String department){
         this.department = department;
     }

     public void changePassword(String password){
        this.password = password;
     }

     public void changePhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
     }

     public void changeEmail(String email){
        this.email = email;
     }

     public void changeAddress(String address){
        this.address = address;
     }

}
