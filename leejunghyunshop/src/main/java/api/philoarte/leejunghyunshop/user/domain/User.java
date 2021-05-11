package api.philoarte.leejunghyunshop.user.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;
    @Column(unique = true, nullable = false)
    private String username;
    @Size(min=8, message = "Minimum Password Length: 8 characters")
    private String password;
    @Column(unique = true, nullable = false)
    private String name;
    @Column(name = "user_email")
    private String userEmail;
    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;
}
