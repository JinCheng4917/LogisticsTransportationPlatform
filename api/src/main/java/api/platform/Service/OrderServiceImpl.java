package api.platform.Service;

import api.platform.Enyity.Orders;
import api.platform.Repository.OrderRepository;
import com.mengyunzhi.core.service.YunzhiService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepository orderRepository;
    private UserService userService;
    private YunzhiService yunzhiService;
    private OwnerService ownerService;


    public OrderServiceImpl(OrderRepository orderRepository,
                            YunzhiService yunzhiService,
                            OwnerService ownerService,
                            UserService userService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.yunzhiService = yunzhiService;
        this.ownerService = ownerService;
    }

    @Override
    public void add(Orders orders) {
        this.orderRepository.save(orders);
    }

    @Override
    public Orders getOrderById(Long id) {
        return this.orderRepository.findById(id).get();
    }

    @Override
    public Orders update(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setGoods(orders.getGoods());
        oldOrders.setStartPlace(orders.getStartPlace());
        oldOrders.setEndPlace(orders.getEndPlace());
        oldOrders.setGoodsName(orders.getGoodsName());
        oldOrders.setFreight(orders.getFreight());
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public void delete(Long id) {
        this.orderRepository.deleteById(id);
    }

    @Override
    public Page<Orders> findAll(Pageable pageable) {
        return this.orderRepository.findAll(pageable);
    }
}
