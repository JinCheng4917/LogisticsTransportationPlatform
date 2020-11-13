package api.platform.Enyity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class TheDriver {
    @Id
    private Long id;
    @OneToOne
    private CatType catType;

    @OneToOne
    private GoodsType goodsType;

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
}
