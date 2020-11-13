package api.platform.Enyity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Owner {
    @Id
    private Long id;

    /**
     * 对应用户
     */
    @OneToOne
    private User user;


    private String address;

    @OneToOne
    private GoodsType goodsType;

    private String IDCard;

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public User getUser() {
        return user;
    }

    public GoodsType getGoodsType() {
        return goodsType;
    }

    public String getIDCard() {
        return IDCard;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setGoodsType(GoodsType goodsType) {
        this.goodsType = goodsType;
    }

    public void setIDCard(String IDCard) {
        this.IDCard = IDCard;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
