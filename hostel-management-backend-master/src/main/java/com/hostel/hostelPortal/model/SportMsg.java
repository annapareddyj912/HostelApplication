package com.hostel.hostelPortal.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class SportMsg {
    @Id
    @SequenceGenerator(
            name = "sport_sequence",
            sequenceName = "sport_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "sport_sequence"
    )
    private Integer reqId;
    private Integer equipmentId;
    private String equipmentName;
    private Integer quantity;
    private LocalDate issueDate;
    private LocalDate returnDate;
    private String reqStatus;
    private Integer status;

    public SportMsg() {
    }

    public SportMsg(Integer equipmentId, String equipmentName, Integer quantity, LocalDate issueDate, LocalDate returnDate, Integer status) {
        this.reqId = reqId;
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.quantity = quantity;
        this.issueDate = issueDate;
        this.returnDate = returnDate;
        this.status = status;
    }


    public Integer getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Integer equipmentId) {
        this.equipmentId = equipmentId;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getReqId() {
        return reqId;
    }

    public void setReqId(Integer reqId) {
        this.reqId = reqId;
    }

    public String getReqStatus() {
        return reqStatus;
    }

    public void setReqStatus(String reqStatus) {
        this.reqStatus = reqStatus;
    }


    @Override
    public String toString() {
        return "SportMsg{" +
                "reqId=" + reqId +
                ", equipmentId=" + equipmentId +
                ", equipmentName='" + equipmentName + '\'' +
                ", quantity=" + quantity +
                ", issueDate=" + issueDate +
                ", returnDate=" + returnDate +
                ", reqStatus='" + reqStatus + '\'' +
                ", status=" + status +
                '}';
    }
}
