package com.hostel.hostelPortal.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class stud_fees
{
    @Id
    Long id;
    float hostel_fees;
    float mess_fees;

    public stud_fees(Long id, float hostel_fees, float mess_fees)
    {
        this.id = id;
        this.hostel_fees = hostel_fees;
        this.mess_fees = mess_fees;
    }

    public stud_fees()
    {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getHostel_fees() {
        return hostel_fees;
    }

    public void setHostel_fees(float hostel_fees) {
        this.hostel_fees = hostel_fees;
    }

    public float getMess_fees() {
        return mess_fees;
    }

    public void setMess_fees(float mess_fees) {
        this.mess_fees = mess_fees;
    }
}
