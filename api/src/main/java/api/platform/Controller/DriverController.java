package api.platform.Controller;

import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import api.platform.Service.DriverService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("driver")
public class DriverController {

    private final DriverService driverService;

    public DriverController(DriverService driverService) {
        this.driverService = driverService;
    }

    @GetMapping("me")
    public TheDriver me() {
        return this.driverService.getCurrentLoginDriver();
    }
}
