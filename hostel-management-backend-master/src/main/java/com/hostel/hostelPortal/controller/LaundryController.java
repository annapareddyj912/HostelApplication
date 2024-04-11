package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.LaundryPrices;
import com.hostel.hostelPortal.model.LaundryRequest;
import com.hostel.hostelPortal.service.LaundryService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laundry")
@CrossOrigin("*")
public class LaundryController {
    private static final Logger logger = LogManager.getLogger(LaundryController.class);
    @Autowired
    private LaundryService laundryService;
    //creating user
    @PostMapping("/") //for saving data use post
    //For fetching JSON data use @RequestBody
    public LaundryRequest createLaundryRequest(@RequestBody LaundryRequest laundryRequest) throws Exception {
        logger.info("POST create laundry request");
        return this.laundryService.createLaundryRequest(laundryRequest);
    }

    @PostMapping("/setLaundryPrices") //for saving data use post
    //For fetching JSON data use @RequestBody
    public LaundryPrices setLaundryPrices(@RequestBody LaundryPrices laundryPrices) {
        logger.info("POST set laundry prices: " + laundryPrices.getType()+" "+laundryPrices.getAmount());
        return this.laundryService.setLaundryPrices(laundryPrices);
    }
    @GetMapping("/getLaundryPrices")
    public List<LaundryPrices> getLaundryPrices() {
        logger.info("GET get laundry prices");
        return this.laundryService.getLaundryPrices();
    }
    //get pending laundry request based on Id for user dashboard
    @GetMapping("/pending-req/{userId}")
    public List<LaundryRequest> getPendingRequest(@PathVariable("userId") Long userId)
    {
        logger.info("GET get pending laundry requests");
        return this.laundryService.getPendingRequest(userId);
    }

    @GetMapping("/pending-req-by-id/{reqId}")
    public List<LaundryRequest> getPendingRequestById(@PathVariable("reqId") Long reqId)
    {
        logger.info("GET get pending request by id");
        return this.laundryService.getPendingRequestById(reqId);
    }

    //get all pending laundry requests for admin for student dashboard
    @GetMapping("/pending-req")
    public List<LaundryRequest> getAllPendingRequest()
    {
        logger.info("GET get all pending requests");
        return this.laundryService.getAllPendingRequest();
    }

    //get rejected laundry request based on Id for user dashboard
    @GetMapping("/rejected-req/{reqId}")
    public List<LaundryRequest> getRejectedRequest(@PathVariable("reqId") Long reqId)
    {
        logger.info("GET get rejected laundry requests");
        return this.laundryService.getRejectedRequest(reqId);
    }

    //get all rejected laundry requests for admin for student dashboard
    @GetMapping("/rejected-req")
    public List<LaundryRequest> getAllRejectedRequest()
    {
        logger.info("GET get all rejected requests");
        return this.laundryService.getAllRejectedRequest();
    }

    //get accepted laundry request based on Id for user dashboard
    @GetMapping("/accepted-req/{reqId}")
    public List<LaundryRequest> getAcceptedRequest(@PathVariable("reqId") Long reqId)
    {
        logger.info("GET get accepted laundry requests");
        return this.laundryService.getAcceptedRequest(reqId);
    }

    //get all accepted laundry requests for admin for student dashboard
    @GetMapping("/accepted-req")
    public List<LaundryRequest> getAllAcceptedRequest()
    {
        logger.info("GET get all accepted laundry requests");
        return this.laundryService.getAllAcceptedRequest();
    }

    //get pending laundry request based on Id for user dashboard
    @GetMapping("/completed-req/{reqId}")
    public List<LaundryRequest> getCompletedRequest(@PathVariable("reqId") Long reqId)
    {
        logger.info("GET get all completed laundry requests");
        return this.laundryService.getCompletedRequest(reqId);
    }

    //get all pending laundry requests for admin for student dashboard
    @GetMapping("/completed-req")
    public List<LaundryRequest> getAllCompletedRequest()
    {
        logger.info("GET get all completed laundry requests");
        return this.laundryService.getAllCompletedRequest();
    }

    //update user data
    @PutMapping("/update/{reqId}/{weight}/{dryCloths}/{numIronCloths}")
    public void updateWeight(@PathVariable("reqId") Long reqId,@PathVariable("weight") int weight,
        @PathVariable("dryCloths") boolean dryCloths,@PathVariable("numIronCloths") int numIronCloths) throws Exception {
        logger.info("PUT update pending laundry request: "+reqId+" "+weight+" "+dryCloths+" "+numIronCloths);
        this.laundryService.updateLaundryrequest(reqId,weight,dryCloths,numIronCloths);
    }

    @PutMapping("/accept-pending-req/{reqId}")
    public void acceptLaundryReqbyId(@PathVariable("reqId") Long reqId) throws Exception {
        logger.info("PUT admin accept laundry request id "+reqId);
        this.laundryService.acceptLaundryReqbyId(reqId);
    }

    @PutMapping("/reject-pending-req/{reqId}/{reason}")
    public void rejectLaundryReqbyId(@PathVariable("reqId") Long reqId,@PathVariable("reason") String reason) throws Exception {
        logger.info("PUT admin rejected laundry request id "+reqId);
        this.laundryService.rejectLaundryReqbyId(reqId,reason);
    }

    @PutMapping("/update-payment-status/{reqId}")
    public void updatePaymentStatusbyReqId(@PathVariable("reqId") Long reqId) throws Exception {
        logger.info("PUT admin updated payment status of reqid "+reqId);
        this.laundryService.updatePaymentStatusbyReqId(reqId);
    }

    @PutMapping("/complete-pending-req/{reqId}/{amount}")
    public void completeLaundryReqbyId(@PathVariable("reqId") Long reqId,@PathVariable("amount") double amount) throws Exception {
        logger.info("PUT laundry request_id "+reqId+ " completed");
        this.laundryService.completeLaundryReqbyId(reqId,amount);
    }

    //delete the user by id
    @DeleteMapping("/{reqId}")
    public void deleteLaundryRequest(@PathVariable("reqId") Long reqId)
    {
        logger.info("DELETE laundry request_id "+reqId);
        this.laundryService.deleteLaundryRequest(reqId);
    }


}
