package api.philoarte.leejunghyunshop.works.domain;

import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@RequiredArgsConstructor
@Table(name = "works")
public class WorksVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "works_id")
    private long worksId;
    @Column(unique = true, nullable = false)
    private long categoryId;
    @Column(table = "title")
    private String title;
    @Column(table = "description")
    private String description;
    @Column(table = "reg_date")
    private Date regDate;
    @Column(table = "edit_date")
    private Date editDate;
    @Column(table = "main_img")
    private String mainImg;
    @Column(unique = true, nullable = false)
    private long userId;
}
