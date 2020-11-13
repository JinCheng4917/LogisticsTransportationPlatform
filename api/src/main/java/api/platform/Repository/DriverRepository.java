package api.platform.Repository;

import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<TheDriver, Long> {
}
