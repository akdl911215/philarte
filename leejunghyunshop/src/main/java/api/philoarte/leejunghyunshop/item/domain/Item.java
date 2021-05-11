package api.philoarte.leejunghyunshop.item.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
@Table(name = "fund_item")
public class Item {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;
    @Column(name = "title")
    private String title;
    @Column(name = "writer")
    private String writer;
    @Column(name = "password")
    private String password;
    @Column(name = "content")
    private String content;
    @Column(name = "contact")
    private String contact;
    @Column(name = "view_cnt")
    private int viewCnt;
    @Column(name = "files")
    private String[] files;
    @Column(name = "file_cnt")
    private int fileCnt;
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
}
