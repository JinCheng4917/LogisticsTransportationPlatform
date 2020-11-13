package api.platform.Repository;

import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {
}
