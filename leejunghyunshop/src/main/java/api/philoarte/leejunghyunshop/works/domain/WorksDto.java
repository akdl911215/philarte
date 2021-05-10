package api.philoarte.leejunghyunshop.works.domain;

import lombok.Data;

import javax.persistence.Column;
import java.util.Date;

@Data
public class WorksDto {
    private long worksId;
    private long categoryId;
    private String title;
    private String description;
    private Date regDate;
    private Date editDate;
    private String mainImg;
    private long userId;
}
