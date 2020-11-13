package api.platform.Repository;

import api.platform.Enyity.Orders;
import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders, Long> {
}
