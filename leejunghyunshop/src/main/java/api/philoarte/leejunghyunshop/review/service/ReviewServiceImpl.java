package api.philoarte.leejunghyunshop.review.service;

import api.philoarte.leejunghyunshop.common.domain.pageDomainDto.PageResultDto;
import api.philoarte.leejunghyunshop.review.domain.Review;
import api.philoarte.leejunghyunshop.review.domain.ReviewFile;
import api.philoarte.leejunghyunshop.review.domain.dto.ReviewDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Log4j2
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

//    private final ReviewRepository reviewRepository;
//    private final ReviewFileRepository reviewFileRepository;
//    private final ReplyRepository replayRepository;

    @Override
    public Long save(ReviewDto reviewDto) {
        Map<String, Object> entityMap = dtoToEntity(reviewDto);
        Review review = (Review) entityMap.get("review");
        List<ReviewFile> reviewFileList = (List<ReviewFile>) entityMap.get("fileList");


        return null;
    }

    @Override
    public ReviewDto get(Long reviewId) {
        return null;
    }

    @Override
    public void modify(ReviewDto reviewDto) {

    }

    @Override
    public void removeWithReplies(Long reviewId) {

    }

    @Override
    public PageResultDto<ReviewDto, Object[]> getList(PageResultDto pageResultDto) {
        return null;
    }
}
