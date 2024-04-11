package com.hostel.hostelPortal.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LaundryPrices {
    @Id // primary key
    String type;
    int amount;

    public LaundryPrices() {
    }

    public LaundryPrices(Long id, String type, int amount) {
        this.type = type;
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "LaundryPrices{" +
                ", type='" + type + '\'' +
                ", amount=" + amount +
                '}';
    }
}
