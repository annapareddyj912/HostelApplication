package com.hostel.hostelPortal.service;

import com.hostel.hostelPortal.model.LaundryPrices;
import com.hostel.hostelPortal.model.LaundryRequest;

import java.util.List;

public interface LaundryService {
    // creating laundry request
    LaundryRequest createLaundryRequest(LaundryRequest laundryRequest) throws Exception;

    //get laundry request data
    LaundryRequest getLaundryRequest(Long reqId);

    //update Laundry request by id
    void updateLaundryrequest(Long reqId,int weight,boolean dryCloths,int numIronCloths) throws Exception;

    //delete Laundry request by id
    void deleteLaundryRequest(Long reqId);

    //get list of pending laundry requests
    List<LaundryRequest> getPendingRequest(Long reqId);

    List<LaundryRequest> getAllPendingRequest();

    List<LaundryRequest> getRejectedRequest(Long reqId);

    List<LaundryRequest> getAllRejectedRequest();

    List<LaundryRequest> getAcceptedRequest(Long reqId);

    List<LaundryRequest> getAllAcceptedRequest();

    List<LaundryRequest> getAllCompletedRequest();

    List<LaundryRequest> getCompletedRequest(Long reqId);

    List<LaundryRequest> getPendingRequestById(Long reqId);

    void acceptLaundryReqbyId(Long reqId) throws Exception;

    void rejectLaundryReqbyId(Long reqId, String reason) throws Exception;

    LaundryPrices setLaundryPrices(LaundryPrices laundryPrices);

    List<LaundryPrices> getLaundryPrices();

    void completeLaundryReqbyId(Long reqId, double amount) throws Exception;

    void updatePaymentStatusbyReqId(Long reqId) throws Exception;
}
