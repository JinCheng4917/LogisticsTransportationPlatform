package api.platform.Controller;

import api.platform.Enyity.Orders;
import api.platform.Repository.OrderRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Orders")
public class OrdersController {
    private OrderRepository orderRepository;

    public OrdersController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping
    public void add(@RequestBody Orders orders) {
        this.orderRepository.save(orders);
    }
}
