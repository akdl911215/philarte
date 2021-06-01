package api.philoarte.leejunghyunshop.review.repository.searchRepository;

import api.philoarte.leejunghyunshop.review.domain.Review;
import org.springframework.data.domain.Page;

public interface SearchReviewRepository {
    Review search();
    Page<Object[]> searchPage(String type, String keyword, Page pageable);
}
