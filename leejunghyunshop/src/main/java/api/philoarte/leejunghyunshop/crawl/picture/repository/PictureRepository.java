package api.philoarte.leejunghyunshop.crawl.picture.repository;

import api.philoarte.leejunghyunshop.crawl.picture.domain.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {
}