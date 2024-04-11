package com.hostel.hostelPortal.service.impl;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;
import com.hostel.hostelPortal.repo.SportsRepository;
import com.hostel.hostelPortal.service.SportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class SportsServiceImpl implements SportsService {

    @Autowired
    private SportsRepository sportsRepository;

    public List<Sports> getEquipments()
    {
        return sportsRepository.findAll();
    }

    public void addNewEquip(Sports sports){
        sportsRepository.save(sports);
    }

    @Transactional
    public void updateQuantity(int equipmentId, int quantity) {
        Sports sports = sportsRepository.findById(equipmentId).orElseThrow(() -> new IllegalStateException("Equipment does not exist"));
         int h = sports.getQuantity();
         h = h-quantity;
         sports.setQuantity(h);
        }

    @Transactional
    public void updateEquipQ(int equipmentId, int quantity) {
        Sports sports = sportsRepository.findById(equipmentId).orElseThrow(() -> new IllegalStateException("Equipment does not exist"));
        sports.setQuantity(quantity);
    }

}

