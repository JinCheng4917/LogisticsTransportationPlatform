package api.platform.Controller;

import api.platform.Enyity.Orders;
import api.platform.Repository.OrderRepository;
import api.platform.Service.OrderService;
import api.platform.Service.OwnerService;
import api.platform.Service.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Orders")
public class OrdersController {

    private OrderService orderService;

    public OrdersController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public void add(@RequestBody Orders orders) {
        this.orderService.add(orders);
    }
    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("{id}")
    public Orders update(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.update(id, orders);
    }

    @GetMapping("{id}")
    public Orders getOrderById(@PathVariable Long id) {
        return this.orderService.getOrderById(id);
    }

    @GetMapping("page")
    public Page<Orders> page(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAll(PageRequest.of(page, size));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.orderService.delete(id);
    }

}
