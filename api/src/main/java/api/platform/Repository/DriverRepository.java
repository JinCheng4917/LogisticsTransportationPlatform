package api.platform.Repository;

import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DriverRepository extends PagingAndSortingRepository<TheDriver, Long>, JpaSpecificationExecutor {
}
