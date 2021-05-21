package api.philoarte.leejunghyunshop.crawl.picture.service;

import api.philoarte.leejunghyunshop.crawl.common.controller.Crawler;
import api.philoarte.leejunghyunshop.crawl.picture.domain.Picture;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface PictureService {

    List<Picture> saveAll(Crawler crawler) throws IOException;
    Page<Picture> findAll(final Pageable pageable);
}