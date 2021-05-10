package api.philoarte.leejunghyunshop.funding.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "fund_supplier")
public class FundSupplierVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fund_supplier_id")
    private long fundSupplierId;
}
