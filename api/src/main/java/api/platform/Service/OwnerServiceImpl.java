package api.platform.Service;

import api.platform.Enyity.Owner;
import api.platform.Enyity.User;
import api.platform.Repository.OwnerRepository;
import org.springframework.stereotype.Service;

@Service
public class OwnerServiceImpl implements OwnerService{
    private OwnerRepository ownerRepository;
    private UserService userService;

    public OwnerServiceImpl(OwnerRepository ownerRepository,
                            UserService userService){
        this.ownerRepository = ownerRepository;
        this.userService = userService;
    }

    @Override
    public Owner getCurrentLoginOwner() {
        User user = this.userService.getCurrentLoginUser();
        return this.ownerRepository.findByUser(user).get();
    }
}
