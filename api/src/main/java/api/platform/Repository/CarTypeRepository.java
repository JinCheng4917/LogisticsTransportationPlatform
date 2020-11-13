package api.platform.Repository;

import api.platform.Enyity.CatType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarTypeRepository extends JpaRepository<CatType, Long> {
}
