package api.philoarte.leejunghyunshop.supporter.domain;

import api.philoarte.leejunghyunshop.user.domain.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "supporters")
@NoArgsConstructor
@Data
public class Supporter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "supporter_id")
    private long supporterId;
    @Column(unique = true, nullable = false)
    private String username;
    @Size(min=8, message = "Minimum Passsword Length: 8 characters")
    private String password;
    @Column(unique = true, nullable = false)
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "address")
    private String address;
    @Column(name = "affiliation")
    private String affiliation;
    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;
}