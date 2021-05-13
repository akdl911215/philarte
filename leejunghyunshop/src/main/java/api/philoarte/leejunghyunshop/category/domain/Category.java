package api.philoarte.leejunghyunshop.category.domain;

import api.philoarte.leejunghyunshop.resume.domain.Resume;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue
    @Column(name = "category_id")
    private long categoryId;
    @Column
    private String name;
}