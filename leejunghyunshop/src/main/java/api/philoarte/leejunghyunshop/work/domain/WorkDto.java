package api.philoarte.leejunghyunshop.work.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.category.domain.Category;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
public class WorkDto {
    private long workId;
    private String title;
    private String description;
    private String mainImg;
    private Date regDate;
    private Date editDate;
    Artist artist;
    Category category;
}
