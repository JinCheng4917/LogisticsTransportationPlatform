package api.platform.Enyity;


import api.platform.Service.BeanService;
import com.fasterxml.jackson.annotation.JsonView;
import com.mengyunzhi.core.entity.YunzhiEntity;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * 用户
 */

@Entity
public class User extends YunzhiBase implements YunzhiEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;


    /**
     * 姓名
     */
    private String name;

    /**
     * 密码
     */
    @Column(nullable = false)
    @JsonView(PasswordJsonView.class)
    private String password;

    /**
     * 角色
     */
    private Long role;

    /**
     * 电话
     */
    private String phone;

    /**
     * 性别
     * false: 男
     * true:  女
     */
    private Boolean sex = false;

    private String IDNumber;

    /**
     * 用户名
     */
    @Column(nullable = false)
    private String username;

    @CreationTimestamp
    private Timestamp startTime;

    private  Double quota = 0.00;


    /**
     * 校验密码
     *
     * @param password 密码
     * @return
     */
    public boolean verifyPassword(String password) {
        return BeanService.getPasswordEncoder().matches(password, this.password);
    }

    public Long getId() {
        return id;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public Boolean getSex() {
        return sex;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public Double getQuota() {
        return quota;
    }

    public String getIDNumber() {
        return IDNumber;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = BeanService.getPasswordEncoder().encode(password);
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRole(Long role) {
        this.role = role;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public void setQuota(Double quota) {
        this.quota = quota;
    }

    public void setIDNumber(String IDNumber) {
        this.IDNumber = IDNumber;
    }

    public void uncodePassword(String password) {this.password = password; }

    public Long getRole() {
        return role;
    }

    public interface RolesJsonView {
    }

    public interface PasswordJsonView {
    }
}
