package com.hostel.hostelPortal.service;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;

import java.util.List;

public interface SportsService {
    List<Sports> getEquipments();

    void addNewEquip(Sports sports);

    void updateQuantity(int equipmentId, int quantity);

    void updateEquipQ(int equipmentId, int quantity);
}
