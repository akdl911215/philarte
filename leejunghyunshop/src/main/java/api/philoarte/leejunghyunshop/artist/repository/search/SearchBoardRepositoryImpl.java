package api.philoarte.leejunghyunshop.artist.repository.search;

import api.philoarte.leejunghyunshop.artist.domain.Artist;
import api.philoarte.leejunghyunshop.artist.domain.QArtist;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Order;

import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.JPQLQuery;

import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
public class SearchBoardRepositoryImpl extends QuerydslRepositorySupport implements SearchBoardRepository {

    public SearchBoardRepositoryImpl() {
        super(Artist.class);
    }

    @Override
    public Artist search1() {

        log.info("search1 ::::::::::::::::: ");

        QArtist qArtist = QArtist.artist;

        JPQLQuery<Artist> jpqlQuery = from(qArtist);

        jpqlQuery.select(qArtist).where(qArtist.artistId.eq(1L));

        log.info("===========================");
        log.info(jpqlQuery);
        log.info("===========================");

        List<Artist> result = jpqlQuery.fetch();

        return null;
    }

    @Override
    public Page<Object[]> searchPage(String type, String keyword, Pageable pageable) {

        log.info("searchPage ................... ========= ");

        QArtist artist = QArtist.artist;
        log.info("작동1");

        JPQLQuery<Artist> jpqlQuery = from(artist);
        log.info("jpqlQuery :::::: " + jpqlQuery);
        log.info("작동2");

        jpqlQuery.select(artist);
        log.info("artist ::::::: " + artist);

        JPQLQuery<Tuple> tuple = jpqlQuery.select();
        log.info("tuple :::::: " + tuple);

        log.info("작동3");

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        BooleanExpression expression = artist.artistId.gt(0L);
        log.info("작동4");

        booleanBuilder.and(expression);
        log.info("작동5");

        if(type != null){
            log.info("작동6");
            String[] typeArr = type.split("");
            // 검색 조건을 작성하기
            BooleanBuilder conditionBuilder = new BooleanBuilder();

            for (String t:typeArr){
                switch(t) {
                    case "u":
                        conditionBuilder.or(artist.username.contains(keyword));
                        break;
                    case "n":
                        conditionBuilder.or(artist.name.contains(keyword));
                        break;
                    case "e":
                        conditionBuilder.or(artist.email.contains(keyword));
                        break;
                    case "p":
                        conditionBuilder.or(artist.phoneNumber.contains(keyword));
                        break;
                    case "a":
                        conditionBuilder.or(artist.address.contains(keyword));
                        break;
                    case "s":
                        conditionBuilder.or(artist.school.contains(keyword));
                        break;
                    case "d":
                        conditionBuilder.or(artist.department.contains(keyword));
                        break;
                }
            }
            log.info("작동6");
            booleanBuilder.and(conditionBuilder);
        }

        log.info("작동7");
        tuple.where(booleanBuilder);

        log.info("작동8");
        // order by
        Sort sort = pageable.getSort();

        // tuple.orderBy(board.bno.desc());

        log.info("작동9");
        sort.stream().forEach(order -> {
            Order direction = order.isAscending()? Order.ASC: Order.DESC;
            String prop = order.getProperty();

            PathBuilder orderByExpression = new PathBuilder(Artist.class, "artist");

            log.info("작동10");
            tuple.orderBy(new OrderSpecifier(direction, orderByExpression.get(prop)));
        });
        log.info("작동11");
        tuple.groupBy(artist);

        // page 처리
        log.info("작동12");
        tuple.offset(pageable.getOffset());
        log.info("작동12-1");
        tuple.limit(pageable.getPageSize());

        log.info("작동12-3");
        List<Tuple> result = tuple.fetch();

        log.info("result ==============");
        log.info(result);

        log.info("작동13");
        long count = tuple.fetchCount();
        log.info("COUNT ::::::: " + count);

        log.info("작동14");
        return new PageImpl<Object[]>(
                result.stream().map(t ->t.toArray()).collect(Collectors.toList()),
                pageable,
                count
        );
    }
}
