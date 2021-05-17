package api.philoarte.leejunghyunshop.resume.domain;

import api.philoarte.leejunghyunshop.artist.domain.Artist;

import api.philoarte.leejunghyunshop.common.util.ModelMapperUtils;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "resumes")
@NoArgsConstructor
@Data
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "resume_id")
    private Long resumeId;
    @Column(name = "title")
    private String title;
    @Column(name = "detail")
    private String detail;
    @Column(name = "main_pic")
    private String mainPic;
    @Column(name = "main_pic_title")
    private String mainPicTitle;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public static Resume of(ResumeDto resumeDto) {
        Resume resume = ModelMapperUtils.getModelMapper().map(resumeDto, Resume.class);
        return resume;
    }

}
