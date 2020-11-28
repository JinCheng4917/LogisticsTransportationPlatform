package api.platform.Controller;

import api.platform.Enyity.GoodsType;
import api.platform.Service.GoodsService;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("goodsType")
public class GoodsController {
    private final GoodsService goodsService;
    public GoodsController(GoodsService  goodsService) {
        this.goodsService = goodsService;
    }

    @GetMapping
    public List<GoodsType> getAll() {
        return this.goodsService.getAll();
    }
}
