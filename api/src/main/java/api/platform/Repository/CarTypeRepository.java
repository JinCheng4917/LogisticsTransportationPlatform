package api.platform.Repository;

import api.platform.Enyity.CatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CarTypeRepository extends PagingAndSortingRepository<CatType, Long>, JpaSpecificationExecutor {
}
