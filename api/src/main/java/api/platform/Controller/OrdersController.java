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

    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("update/{id}")
    public Orders update(@PathVariable Long id, @RequestBody Integer status) {
        return this.orderService.updateStatus(id, status);
    }


    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("default/{id}")
    public Orders defalut(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.defaultOrder(id, orders);
    }
    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("complete/{id}")
    public Orders complete(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.complete(id, orders);
    }

    /**
     * 保存订单
     * @param
     * @return
     */
    @PutMapping("confirm/{id}")
    public Orders confirm(@PathVariable Long id, @RequestBody Orders orders) {
        return this.orderService.confirm(id, orders);
    }

    @GetMapping("{id}")
    public Orders getOrderById(@PathVariable Long id) {
        return this.orderService.getOrderById(id);
    }

    @GetMapping("page")
    public Page<Orders> page(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAll(PageRequest.of(page, size));
    }

    @GetMapping("pageById")
    public Page<Orders> pageById(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllById(PageRequest.of(page, size));
    }

    @GetMapping("pageByStatus")
    public Page<Orders> pageByStatus(@RequestParam int status, @RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllByStatus( status, PageRequest.of(page, size));
    }

    @GetMapping("pageByDriver")
    public Page<Orders> pageByDriver(@RequestParam int page, @RequestParam int size) {
        return this.orderService.findAllByDriver(PageRequest.of(page, size));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.orderService.delete(id);
    }



    /**
     * 获取所有作业
     * @param pageable 分页信息
     * @return 所有作业
     */
    @GetMapping("queryPlace")
    public Page<Orders> findAll(
            @RequestParam(required = false) String startPlace,
            @RequestParam(required = false) String endPlace,
            Pageable pageable) {
        return this.orderService.quaryAll(
                startPlace,
                endPlace,
                pageable);
    }

    /**
     * 获取所有作业
     * @param pageable 分页信息
     * @return 所有作业
     */
    @GetMapping("driverPlace")
    public Page<Orders> driverFindAll(
            @RequestParam(required = false) String startPlace,
            @RequestParam(required = false) String endPlace,
            @RequestParam(required = false) Long status,
            Pageable pageable) {
        return this.orderService.driverQuaryAll(
                status,
                startPlace,
                endPlace,
                pageable);
    }

    /**
     * 获取所有作业
     * @param pageable 分页信息
     * @return 所有作业
     */
    @GetMapping("ownerPlace")
    public Page<Orders> ownerFindAll(
            @RequestParam(required = false) String startPlace,
            @RequestParam(required = false) String endPlace,
            @RequestParam(required = false) Long status,
            Pageable pageable) {
        return this.orderService.ownerQuaryAll(
                status,
                startPlace,
                endPlace,
                pageable);
    }
}
