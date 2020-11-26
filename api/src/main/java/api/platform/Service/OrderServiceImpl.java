package api.platform.Service;

import api.platform.Enyity.Orders;
import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import api.platform.Enyity.User;
import api.platform.Repository.OrderRepository;
import com.mengyunzhi.core.service.YunzhiService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Driver;

@Service
public class OrderServiceImpl implements OrderService{
    private OrderRepository orderRepository;
    private DriverService driverService;
    private OwnerService ownerService;


    public OrderServiceImpl(OrderRepository orderRepository,
                            DriverService driverService,
                            OwnerService ownerService,
                            UserService userService) {
        this.orderRepository = orderRepository;
        this.driverService = driverService;
        this.ownerService = ownerService;
    }

    @Override
    public void add(Orders orders) {
        Owner owner = this.ownerService.getCurrentLoginOwner();
        orders.setOwner(owner);
        owner.getUser().setQuota(owner.getUser().getQuota() - orders.getFreight());
        orders.setStatus(Orders.NOT_COLLECTED);
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
    public Orders updateStatus(Long id, Integer status) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        oldOrders.setDriver(this.driverService.getCurrentLoginDriver());
        oldOrders.setStatus(status);
        return this.orderRepository.save(oldOrders);
    }

    @Override
    public Orders complete(Long id, Orders orders) {
        Orders oldOrders = this.orderRepository.findById(id).get();
        TheDriver theDriver = oldOrders.getDriver();
        theDriver.getUser().setQuota(theDriver.getUser().getQuota() + oldOrders.getFreight());
        long deleteTime = System.currentTimeMillis();
        oldOrders.setEndTime(String.valueOf(deleteTime));
        oldOrders.setStatus(3);
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

    @Override
    public Page<Orders> findAllById(Pageable pageable) {
        return this.orderRepository.findAllByOwner(this.ownerService.getCurrentLoginOwner(), pageable);
    }

    @Override
    public Page<Orders> findAllByStatus(int status, Pageable pageable) {
        return this.orderRepository.findAllByStatus(status, pageable);
    }

    @Override
    public Page<Orders> findAllByDriver(Pageable pageable) {
        return this.orderRepository.findAllByTheDriver(this.driverService.getCurrentLoginDriver(), pageable);
    }
}
