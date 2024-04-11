package com.hostel.hostelPortal.repo;

import com.hostel.hostelPortal.model.Sports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportsRepository extends JpaRepository<Sports, Integer> {
    List<Sports> findByEquipmentId(Integer equipmentId);
}
