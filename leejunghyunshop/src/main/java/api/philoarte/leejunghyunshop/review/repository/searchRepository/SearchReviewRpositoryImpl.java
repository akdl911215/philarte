package api.philoarte.leejunghyunshop.review.repository.searchRepository;

import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import api.philoarte.leejunghyunshop.review.domain.QReview;
import api.philoarte.leejunghyunshop.review.domain.Review;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

@Log4j2
public class SearchReviewRpositoryImpl extends QuerydslRepositorySupport implements SearchReviewRepository {

    public SearchReviewRpositoryImpl() {
        super(Review.class);
    }

    @Override
    public Review search() {
        return null;
    }

    @Override
    public Page<Object[]> searchPage(String type, String keyword, Page pageable) {

        QReview review = QReview.review;
        QArtist artist = QArtist.artist;

        return null;
    }
}
