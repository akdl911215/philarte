package api.philoarte.leejunghyunshop.fundSupplier.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "funders")
@Data
@NoArgsConstructor
public class FunderVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "funder_id")
    private long funderID;
}
