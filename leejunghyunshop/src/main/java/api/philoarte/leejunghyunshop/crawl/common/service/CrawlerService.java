package api.philoarte.leejunghyunshop.crawl.common.service;

import api.philoarte.leejunghyunshop.crawl.common.controller.Crawler;

import java.io.IOException;
import java.util.List;

public interface CrawlerService {
    List<?> scrapPicture(Crawler cralwer) throws IOException;
}