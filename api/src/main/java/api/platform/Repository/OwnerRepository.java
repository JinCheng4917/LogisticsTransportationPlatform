package api.platform.Repository;

import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import api.platform.Enyity.User;
import api.platform.Service.CacheService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.jws.Oneway;
import java.util.Optional;

public interface OwnerRepository extends PagingAndSortingRepository<Owner, Long>, JpaRepository<Owner, Long>, JpaSpecificationExecutor {
    Optional<Owner> findByUser(User user);
}
