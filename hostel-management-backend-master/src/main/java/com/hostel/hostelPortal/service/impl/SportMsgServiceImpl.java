package com.hostel.hostelPortal.service.impl;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;
import com.hostel.hostelPortal.repo.SportMsgRepository;
import com.hostel.hostelPortal.repo.SportsRepository;
import com.hostel.hostelPortal.service.SportMsgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SportMsgServiceImpl implements SportMsgService {

    @Autowired
    private SportMsgRepository sportMsgRepository;

    public void addNewMsg(SportMsg sportMsg){
          sportMsgRepository.save(sportMsg);
    }

    public List<SportMsg> getMsg()
    {
        return sportMsgRepository.findByStatus(1);
    }

    public List<SportMsg> getStatusMsg()
    {
        return sportMsgRepository.findAll();
    }

    @Transactional
    public void updateStatus(Integer reqId) {
        SportMsg sportMsg = sportMsgRepository.findById(reqId).orElseThrow(() -> new IllegalStateException("ReqId does not exist"));
        sportMsg.setReqStatus("Granted");
        sportMsg.setStatus(0);
    }

    @Transactional
    public void updateStatus2(Integer reqId) {
        SportMsg sportMsg = sportMsgRepository.findById(reqId).orElseThrow(() -> new IllegalStateException("ReqId does not exist"));
        sportMsg.setReqStatus("Rejected");
        sportMsg.setStatus(0);
    }


}

