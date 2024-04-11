package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.SportMsg;
import com.hostel.hostelPortal.model.Sports;
import com.hostel.hostelPortal.service.SportMsgService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(path = "ap1/v1/Sports_m")
public class SportMsgController {


    private final SportMsgService sportMsgService;

    @Autowired
    public SportMsgController(SportMsgService sportMsgService) {
        this.sportMsgService = sportMsgService;
    }

    @PostMapping
    public void generateSportMsg(@RequestBody SportMsg sportMsg){
        sportMsgService.addNewMsg(sportMsg);
    }

    @CrossOrigin("*")
    @GetMapping
    public List<SportMsg> getSportMsg() {
        return (List<SportMsg>) sportMsgService.getMsg();
    }

    @CrossOrigin("*")
    @GetMapping("stat")
    public List<SportMsg> getStatMsg() {
        return (List<SportMsg>) sportMsgService.getStatusMsg();
    }

    @CrossOrigin("*")
    @PutMapping(path = "{reqId}")
    public void updateStatus(@PathVariable("reqId") Integer reqId) {
        sportMsgService.updateStatus(reqId);

    }

    @CrossOrigin("*")
    @PutMapping(path = "rej/{reqId}")
    public void updateStatus2(@PathVariable("reqId") Integer reqId) {
        sportMsgService.updateStatus2(reqId);

    }


}
