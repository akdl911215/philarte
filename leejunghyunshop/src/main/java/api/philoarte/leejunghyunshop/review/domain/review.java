package api.philoarte.leejunghyunshop.review.domain;

import api.philoarte.leejunghyunshop.art.domain.Art;
import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.item.domain.Item;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long reviewId;
    @Column(name = "content")
    private String content;
    @Column(name = "comment")
    private String comment;

    // @ManyToOne
    // @JoinColumn(name = "funding_id")
    // private Funding funding;

//    @ManyToOne
//    @JoinColumn(name = "artist_id")
//    private Artist artist;
//
//    @ManyToOne
//    @JoinColumn(name = "art_id")
//    private Art art;

}