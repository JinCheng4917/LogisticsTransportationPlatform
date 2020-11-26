package api.platform.Repository;

import api.platform.Enyity.Owner;
import api.platform.Service.CacheService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface OwnerRepository extends PagingAndSortingRepository<Owner, Long>, JpaRepository<Owner, Long>, JpaSpecificationExecutor {
    Owner findOwnerByUserId(Long id);
}
