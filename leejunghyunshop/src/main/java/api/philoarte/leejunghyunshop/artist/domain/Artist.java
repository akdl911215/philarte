package api.philoarte.leejunghyunshop.artist.domain;

import api.philoarte.leejunghyunshop.user.domain.Role;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "artists")
@Data
@NoArgsConstructor
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_id")
    private long artistId;
    @Column(unique = true, nullable = false)
    private String username;
    @Size(min = 8, message = "Minimum Password Length: 8 characters")
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
    // @ElementCollection(fetch = FetchType.EAGER)
    // List<Role> roles;
}
