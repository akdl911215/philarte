package api.philoarte.leejunghyunshop.review.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "reviews")
@Data
@NoArgsConstructor
public class review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;
    @Column(name = "parent_item") //리뷰를 달 게시글 번호
    private int parentItem;
    @Column(name = "writer")
    private String writer;
    @Column(name = "parent_review")
    private String parentReview;
    @Column(name = "content")
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "reg_date")
    private Date regDate;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "edit_date")
    private Date editDate;
    @Column(name = "like_Cnt")
    private int likeCnt;
    @Column(name = "dislike_Cnt")
    private int dislikeCnt;
    @Column(name = "like_check")
    private int likeCheck;
    //foreign key 유저 번호, 보드 번호
}
