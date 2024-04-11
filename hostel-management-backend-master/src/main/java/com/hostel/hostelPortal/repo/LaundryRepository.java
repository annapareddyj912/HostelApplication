package com.hostel.hostelPortal.repo;


import com.hostel.hostelPortal.model.LaundryRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LaundryRepository extends JpaRepository<LaundryRequest,Long> {
    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.weightOfCloths = :weight,lr.clothsDry=:dryCloths" +
            ",lr.numberOfIronedCloths=:numIronCloths where lr.id = :reqId")
    int updateLaundryrequest(@Param("reqId") Long id,@Param("weight") Integer new_weight,
                             @Param("dryCloths") Boolean dryCloths,@Param("numIronCloths") Integer numIronCloths);

    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.acceptanceTime=CURRENT_TIME where lr.id = :reqId")
    int acceptLaundryrequest(@Param("reqId") Long id);

    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.rejectionTime=CURRENT_TIME,lr.rejectionReason=:reason where lr.id = :reqId")
    int rejectLaundryrequest(@Param("reqId") Long id,@Param("reason") String reason);

    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.completionTime=CURRENT_TIME,lr.amount=:amount where lr.id = :reqId")
    int completeLaundryrequest(@Param("reqId") Long id,@Param("amount") double amount);

    @Modifying
    @Transactional
    @Query("update LaundryRequest lr set lr.payment=true where lr.id = :reqId")
    int updatePaymentStatusbyReqId(Long reqId);

    List<LaundryRequest> findByUser_IdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(@Param("reqId") Long id);

    List<LaundryRequest> findByAcceptanceTimeIsNullAndRejectionTimeIsNull();

    List<LaundryRequest> findByUser_IdAndAcceptanceTimeIsNotNullAndCompletionTimeIsNull(@Param("reqId") Long id);

    List<LaundryRequest> findByAcceptanceTimeIsNotNullAndCompletionTimeIsNull();

    List<LaundryRequest> findByUser_IdAndRejectionTimeIsNotNull(@Param("reqId") Long id);

    List<LaundryRequest> findByRejectionTimeIsNotNull();

    List<LaundryRequest> findByUser_IdAndCompletionTimeIsNotNull(@Param("reqId") Long id);

    List<LaundryRequest> findByCompletionTimeIsNotNull();

    List<LaundryRequest> findByIdAndAcceptanceTimeIsNullAndRejectionTimeIsNull(Long reqId);
}
