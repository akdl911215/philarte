package api.philoarte.leejunghyunshop.work.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "workss")
public class Work {

    @Id
    @GeneratedValue
    @Column(name = "work_id")
    private long workId;
    @Column
    private String title;
    @Column
    private String description;
    @Column(name = "main_img")
    private String mainImg;
    @Column(name = "reg_date")
    private Date regDate;
    @Column(name = "edit_date")
    private Date editDate;
    @ManyToOne
    @JoinColumn(name = "artist_id")
    Artist artist;
    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;
}
