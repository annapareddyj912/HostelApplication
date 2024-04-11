package com.hostel.hostelPortal.repo;

import com.hostel.hostelPortal.model.room_stud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface roomstudRepository  extends JpaRepository<room_stud,Long>
{
    @Query("select count(room) from room_stud  where stud = -99")
    Long countofFreerooms();

    @Modifying
    @Query("UPDATE room_stud  SET stud=-99 WHERE room =:userId")
    void updateroomidusinguid(@Param("userId") Long userId);
}
