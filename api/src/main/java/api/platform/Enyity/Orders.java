package api.platform.Enyity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Orders {
    @Id
    private Long id;

    @OneToOne
    private TheDriver theDriver;

    @OneToOne
    private Owner owner;

    private String startTime;

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

    public Long getStatus() {
        return status;
    }

    public Owner getOwner() {
        return owner;
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

    public String getStartTime() {
        return startTime;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDirver(TheDriver theDriver) {
        this.theDriver = theDriver;
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

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setStatus(Long status) {
        this.status = status;
    }
}
