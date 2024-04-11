package com.hostel.hostelPortal.service.impl;

import com.hostel.hostelPortal.model.LaundryPrices;
import com.hostel.hostelPortal.model.LaundryRequest;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.repo.LaundryPricesRepository;
import com.hostel.hostelPortal.repo.LaundryRepository;
import com.hostel.hostelPortal.repo.UserRepository;
import com.hostel.hostelPortal.service.LaundryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class LaundryServiceImpl implements LaundryService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LaundryRepository laundryRepository;

    @Autowired
    private LaundryPricesRepository laundryPricesRepository;
    @Override
    public LaundryRequest createLaundryRequest(LaundryRequest laundryRequest) throws Exception {
        //to check if student id is already present in DB or not?
        LaundryRequest req;
        Optional<User> local= this.userRepository.findById(laundryRequest.getStudentId());
        if(local.isEmpty())
        {
            System.out.println("Student id not present!!");
            throw new Exception("Student id not present!!");
        }
        else
        {
            laundryRequest.setRequestTime(new Date());
             req = this.laundryRepository.save(laundryRequest);
        }
        return req;
    }

    @Override
    public LaundryRequest getLaundryRequest(Long reqId) {
        //getById=> get only a reference (a proxy) to the entity.
        // That means no DB access is actually made. Only when you call it's properties then it will query the DB
        //findByID =>'eagerly'/immediately when you call it, thus you have the actual entity fully populated.
        return this.laundryRepository.findById(reqId).get();
    }

    @Override
    public void updateLaundryrequest(Long reqId,int weight,boolean dryCloths,int numIronCloths) throws Exception {
        int rowsAffected=this.laundryRepository.updateLaundryrequest(reqId,weight,dryCloths,numIronCloths);
        if(rowsAffected==0)
            throw new Exception("Laundry Request ID is not present in DB");
    }

    @Override
    public void acceptLaundryReqbyId(Long reqId) throws Exception {
        System.out.println(reqId);
        int rowsAffected=this.laundryRepository.acceptLaundryrequest(reqId);
        if(rowsAffected==0)
            throw new Exception("Laundry Request ID is not present in DB");
    }

    @Override
    public void rejectLaundryReqbyId(Long reqId, String reason) throws Exception {
        int rowsAffected=this.laundryRepository.rejectLaundryrequest(reqId,reason);
        if(rowsAffected==0)
            throw new Exception("Laundry Request ID is not present in DB");
    }

    @Override
    public void completeLaundryReqbyId(Long reqId, double amount) throws Exception {
        int rowsAffected=this.laundryRepository.completeLaundryrequest(reqId,amount);
        if(rowsAffected==0)
            throw new Exception("Laundry Request ID is not present in DB");
    }

    @Override
    public void updatePaymentStatusbyReqId(Long reqId) throws Exception {
        int rowsAffected=this.laundryRepository.updatePaymentStatusbyReqId(reqId);
        if(rowsAffected==0)
            throw new Exception("Laundry Request ID is not present in DB");
    }

    @Override
    public LaundryPrices setLaundryPrices(LaundryPrices laundryPrices) {
        return this.laundryPricesRepository.save(laundryPrices);
    }

    @Override
    public List<LaundryPrices> getLaundryPrices() {
        return this.laundryPricesRepository.findAll();
    }



    @Override
    public void deleteLaundryRequest(Long reqId) {
        this.laundryRepository.deleteById(reqId);
    }

    @Override
    public List<LaundryRequest> getPendingRequest(Long userId) {
        return this.laundryRepository.findByUser_IdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(userId);
    }

    @Override
    public List<LaundryRequest> getPendingRequestById(Long reqId) {
        return this.laundryRepository.findByIdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(reqId);
    }

    @Override
    public List<LaundryRequest> getAllPendingRequest() {
        return this.laundryRepository.findByAcceptanceTimeIsNullAndRejectionTimeIsNull();
    }

    @Override
    public List<LaundryRequest> getRejectedRequest(Long reqId) {
        return this.laundryRepository.findByUser_IdAndRejectionTimeIsNotNull(reqId);
    }

    @Override
    public List<LaundryRequest> getAllRejectedRequest() {
        return this.laundryRepository.findByRejectionTimeIsNotNull();
    }

    @Override
    public List<LaundryRequest> getAcceptedRequest(Long reqId) {
        return this.laundryRepository.findByUser_IdAndAcceptanceTimeIsNotNullAndCompletionTimeIsNull(reqId);
    }

    @Override
    public List<LaundryRequest> getAllAcceptedRequest() {
        return this.laundryRepository.findByAcceptanceTimeIsNotNullAndCompletionTimeIsNull();
    }

    @Override
    public List<LaundryRequest> getCompletedRequest(Long reqId) {
        return this.laundryRepository.findByUser_IdAndCompletionTimeIsNotNull(reqId);
    }

    @Override
    public List<LaundryRequest> getAllCompletedRequest() {
        return this.laundryRepository.findByCompletionTimeIsNotNull();
    }
}
