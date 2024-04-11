package com.hostel.hostelPortal.service;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;

import java.util.List;

public interface SportMsgService {

    void addNewMsg(SportMsg sportMsg);

    List<SportMsg> getMsg();

    List<SportMsg> getStatusMsg();

    void updateStatus(Integer reqId);


    void updateStatus2(Integer reqId);
}
