package api.platform.Repository;

import api.platform.Enyity.GoodsType;
import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GoodsTypeRepository extends PagingAndSortingRepository<GoodsType, Long>, JpaSpecificationExecutor {
}
