package com.hostel.hostelPortal.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class LaundryRequest{
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // auto generated key, surrogate key
    private Long  id;

    @ManyToOne(optional = false,fetch = FetchType.EAGER)
    @JoinColumn(name="student_id",referencedColumnName="ID")
    private User user;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date requestTime;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date acceptanceTime;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date rejectionTime;

    @DateTimeFormat(pattern="dd/MM/yyyy hh:mm:ss")
    private Date completionTime;

    int weightOfCloths;

    Boolean clothsDry;

    int numberOfIronedCloths;

    double amount;

    Boolean payment=false;//true=>done, false=>not done

    String rejectionReason;

    public LaundryRequest() {
    }

    public LaundryRequest(Long id, User user, Date requestTime, Date acceptanceTime, Date rejectionTime, Date completionTime, int weightOfCloths, Boolean clothsDry, int numberOfIronedCloths, double amount, Boolean payment, String rejectionReason) {
        this.id = id;
        this.user = user;
        this.requestTime = requestTime;
        this.acceptanceTime = acceptanceTime;
        this.rejectionTime = rejectionTime;
        this.completionTime = completionTime;
        this.weightOfCloths = weightOfCloths;
        this.clothsDry = clothsDry;
        this.numberOfIronedCloths = numberOfIronedCloths;
        this.amount = amount;
        this.payment = payment;
        this.rejectionReason = rejectionReason;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getRequestTime() {
        return requestTime;
    }

    public void setRequestTime(Date requestTime) {
        this.requestTime = requestTime;
    }

    public Date getAcceptanceTime() {
        return acceptanceTime;
    }

    public void setAcceptanceTime(Date acceptanceTime) {
        this.acceptanceTime = acceptanceTime;
    }

    public Date getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(Date completionTime) {
        this.completionTime = completionTime;
    }

    public int getWeightOfCloths() {
        return weightOfCloths;
    }

    public void setWeightOfCloths(int weightOfCloths) {
        this.weightOfCloths = weightOfCloths;
    }

    public Boolean getClothsDry() {
        return clothsDry;
    }

    public void setClothsDry(Boolean clothsDry) {
        this.clothsDry = clothsDry;
    }

    public int getNumberOfIronedCloths() {
        return numberOfIronedCloths;
    }

    public void setNumberOfIronedCloths(int numberOfIronedCloths) {
        this.numberOfIronedCloths = numberOfIronedCloths;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Boolean getPayment() {
        return payment;
    }

    public void setPayment(Boolean payment) {
        this.payment = payment;
    }

    public String getRejectionReason() {
        return rejectionReason;
    }

    public void setRejectionReason(String rejectionReason) {
        this.rejectionReason = rejectionReason;
    }

    public Date getRejectionTime() {
        return rejectionTime;
    }

    public void setRejectionTime(Date rejectionTime) {
        this.rejectionTime = rejectionTime;
    }

    public Long getStudentId()
    {
        return this.getUser().getId();
    }

    @Override
    public String toString() {
        return "LaundryRequest{" +
                "id=" + id +
                ", user=" + user +
                ", requestTime=" + requestTime +
                ", acceptanceTime=" + acceptanceTime +
                ", rejectionTime=" + rejectionTime +
                ", completionTime=" + completionTime +
                ", weightOfCloths=" + weightOfCloths +
                ", clothsDry=" + clothsDry +
                ", numberOfIronedCloths=" + numberOfIronedCloths +
                ", amount=" + amount +
                ", payment=" + payment +
                ", rejectionReason='" + rejectionReason + '\'' +
                '}';
    }
}