package com.hostel.hostelPortal.repo;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportMsgRepository extends JpaRepository<SportMsg, Integer> {
    List<SportMsg> findByStatus(Integer status);
    List<SportMsg> findByReqId(Integer reqId);
}
