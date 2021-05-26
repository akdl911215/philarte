package api.philoarte.leejunghyunshop.artist.repository.search;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SearchBoardRepository {

    Artist search1();

    Page<Object[]> searchPage(String type, String keyword, Pageable pageable);
}
