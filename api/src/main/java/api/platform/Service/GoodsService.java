package api.platform.Service;

import api.platform.Enyity.GoodsType;

import java.util.List;

public interface GoodsService {
    /**
     * 获取所有货物类型
     * <p>
     * List<GoodsType>
     */
    List<GoodsType> getAll();

}
