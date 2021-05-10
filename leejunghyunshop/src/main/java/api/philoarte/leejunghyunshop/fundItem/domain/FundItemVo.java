package api.philoarte.leejunghyunshop.fundItem.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Data
@Table(name = "fund_items")
public class FundItemVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fund_item_id")
    private long fundItemId;
}
