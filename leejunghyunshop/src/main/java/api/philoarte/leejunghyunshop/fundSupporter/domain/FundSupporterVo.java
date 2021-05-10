package api.philoarte.leejunghyunshop.fundSupporter.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "fund_supporter")
@NoArgsConstructor
@Data
public class FundSupporterVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fund_supporter_id")
    private long fundSupporterId;
}
