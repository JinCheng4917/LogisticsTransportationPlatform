package api.platform.Repository;

import api.platform.Enyity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface UserRepository extends CrudRepository<User, Long>, JpaSpecificationExecutor<User>{
    /**
     * 根据用户名查询用户
     */
    @Transactional
    User findByUsername(String username);
}
