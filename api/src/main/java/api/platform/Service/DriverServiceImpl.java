package api.platform.Service;

import api.platform.Enyity.TheDriver;
import api.platform.Enyity.User;
import api.platform.Repository.DriverRepository;
import org.springframework.stereotype.Service;

@Service
public class DriverServiceImpl implements DriverService{
    private UserService userService;
    private DriverRepository driverRepository;

    public DriverServiceImpl(UserService userService,
                             DriverRepository driverRepository){
        this.userService = userService;
        this.driverRepository = driverRepository;
    }

    @Override
    public TheDriver getCurrentLoginDriver() {
        User user = this.userService.getCurrentLoginUser();
        return this.driverRepository.findByUser(user).get();
    }
}
