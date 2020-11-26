package api.platform.Repository;

import api.platform.Enyity.Orders;
import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.util.Assert;

import javax.validation.constraints.NotNull;

public interface OrderRepository extends PagingAndSortingRepository<Orders, Long>,JpaRepository<Orders, Long>, JpaSpecificationExecutor {

    Page<Orders> findAllByOwner(Owner owner, Pageable pageable);

    Page<Orders> findAllByStatus(int status, Pageable pageable);

    Page<Orders> findAllByTheDriver(TheDriver theDriver, Pageable pageable);
}
