package api.platform.Service;

import api.platform.Enyity.GoodsType;
import api.platform.Repository.GoodsTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsServiceImpl implements GoodsService {

    private final GoodsTypeRepository goodsTypeRepository;

    public GoodsServiceImpl(GoodsTypeRepository goodsTypeRepository) {
        this.goodsTypeRepository = goodsTypeRepository;
    }

    @Override
    public List<GoodsType> getAll() {
        return (List<GoodsType>) this.goodsTypeRepository.findAll();
    }
}
