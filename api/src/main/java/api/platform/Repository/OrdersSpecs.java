package api.platform.Repository;

import api.platform.Enyity.Orders;
import api.platform.Enyity.Owner;
import api.platform.Enyity.TheDriver;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Expression;
import java.sql.Driver;

public class OrdersSpecs {
    public static Specification<Orders> containingStartPlace(String startPlace) {
        if (startPlace != null) {
            return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("startPlace").as(String.class), String.format("%%%s%%", startPlace));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<Orders> containingEndPlace(String endPlace) {
        if (endPlace == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("endPlace").as(String.class), String.format("%%%s%%", endPlace));
    }

    public static Specification<Orders> startWithOwner(Owner owner) {
        if (owner == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("owner").as(Owner.class),  owner);
    }

    public static Specification<Orders> startWithDriver(TheDriver theDriver) {
        if (theDriver == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("theDriver").as(TheDriver.class),  theDriver);
    }

    public static Specification<Orders> isStatus(Long status) {
        if (status == null) {
            return Specification.where(null);
        }
        return (Specification<Orders>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("status").as(Long.class),  status);
    }
}
