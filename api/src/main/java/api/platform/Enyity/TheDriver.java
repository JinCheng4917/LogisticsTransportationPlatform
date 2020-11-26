package api.platform.Enyity;

import com.mengyunzhi.core.entity.YunzhiEntity;

import javax.persistence.*;

@Entity
public class TheDriver implements YunzhiEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private CatType catType;

    @OneToOne
    private GoodsType goodsType;

    @OneToOne
    private User user;

    private String licensePlateNumber;

    public Long getId() {
        return id;
    }

    public GoodsType getGoodsType() {
        return goodsType;
    }

    public CatType getCatType() {
        return catType;
    }

    public String getLicensePlateNumber() {
        return licensePlateNumber;
    }

    public User getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setGoodsType(GoodsType goodsType) {
        this.goodsType = goodsType;
    }

    public void setCatType(CatType catType) {
        this.catType = catType;
    }

    public void setLicensePlateNumber(String licensePlateNumber) {
        this.licensePlateNumber = licensePlateNumber;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
