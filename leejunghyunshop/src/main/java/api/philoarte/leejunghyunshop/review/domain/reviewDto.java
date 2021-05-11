package api.philoarte.leejunghyunshop.review.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Data
public class reviewDto {
    private Long reviewId;
    private int parentItem;
    private String writer;
    private String parentReview;
    private String content;
    private Date regDate;
    private Date editDate;
    private int likeCnt;
    private int dislikeCnt;
    private int likeCheck;
}
