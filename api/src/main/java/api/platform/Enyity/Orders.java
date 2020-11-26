package api.platform.Enyity;

import com.mengyunzhi.core.entity.YunzhiEntity;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Orders implements YunzhiEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private TheDriver theDriver;

    private String goodsName;

    @OneToOne
    private GoodsType goods;

    @OneToOne
    private Owner owner;

    @CreationTimestamp
    private Timestamp startTime;

    @UpdateTimestamp
    private Timestamp updateTime;


    private String freight;

    private String endTime;

    private Long status;

    private String startPlace;

    private String endPlace;

    public Long getId() {
        return id;
    }

    public TheDriver getDirver() {
        return theDriver;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public GoodsType getGoods() {
        return goods;
    }

    public Long getStatus() {
        return status;
    }

    public Owner getOwner() {
        return owner;
    }

    public String getFreight() {
        return freight;
    }

    public String getEndPlace() {
        return endPlace;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getStartPlace() {
        return startPlace;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDirver(TheDriver theDriver) {
        this.theDriver = theDriver;
    }

    public void setFreight(String freight) {
        this.freight = freight;
    }

    public void setEndPlace(String endPlace) {
        this.endPlace = endPlace;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public void setStartPlace(String startPlace) {
        this.startPlace = startPlace;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public void setGoods(GoodsType goods) {
        this.goods = goods;
    }
}
