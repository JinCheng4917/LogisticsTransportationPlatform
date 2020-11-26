package api.platform.Repository;

import api.platform.Enyity.TheDriver;
import api.platform.Enyity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface DriverRepository extends PagingAndSortingRepository<TheDriver, Long>, JpaSpecificationExecutor {

    Optional<TheDriver> findByUser(User user);
}
