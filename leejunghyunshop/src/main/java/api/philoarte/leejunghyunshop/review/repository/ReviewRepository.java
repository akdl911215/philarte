package api.philoarte.leejunghyunshop.review.repository;

import api.philoarte.leejunghyunshop.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long>  {
}
