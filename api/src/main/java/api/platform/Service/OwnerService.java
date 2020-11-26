package api.platform.Service;

import api.platform.Enyity.Owner;
import api.platform.Enyity.User;

public interface OwnerService {

    /**
     * 通过Id获取用户
     *
     * @param id 用户Id
     * @return User
     */
    Owner getOwnerByUserId(Long id);
}
