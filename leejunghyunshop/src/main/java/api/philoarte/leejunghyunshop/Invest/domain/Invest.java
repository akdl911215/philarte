package api.philoarte.leejunghyunshop.Invest.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "investes")
public class Invest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invest_id")
    private long investId;
}
