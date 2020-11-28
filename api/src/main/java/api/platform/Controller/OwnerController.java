package api.platform.Controller;

import api.platform.Enyity.Owner;
import api.platform.Enyity.User;
import api.platform.Service.OwnerService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("owner")
public class OwnerController {
    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping("me")
    public Owner me() {
        return this.ownerService.getCurrentLoginOwner();
    }
}
