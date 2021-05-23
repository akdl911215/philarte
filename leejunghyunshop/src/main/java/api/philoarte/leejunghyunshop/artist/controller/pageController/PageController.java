package api.philoarte.leejunghyunshop.artist.controller.pageController;

import api.philoarte.leejunghyunshop.artist.domain.pageDomain.PageRequestDto;
import api.philoarte.leejunghyunshop.artist.service.ArtistService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Log4j2
@RequiredArgsConstructor // 자동 주입을 위한 Annotation
@RequestMapping("/Page")
public class PageController {

    private final ArtistService service;

    @GetMapping("/")
    public String index() {
        return "redirect:/page/list";
    }

    @GetMapping("/list")
    public void list(PageRequestDto pageRequestDto, Model model) {
        log.info("list................." + pageRequestDto);
        model.addAttribute("result", service.getPageList(pageRequestDto));
    }
}
