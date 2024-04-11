package com.hostel.hostelPortal.service;

import com.hostel.hostelPortal.model.*;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface UserService {
    // creating user
    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user by username
    User getUser(String username);

    //delete user by id
    void deleteUser(Long userId);

    //update user by id
    void updateUser(User user);

    List<User> getalluser();

    Long getroombyid(Long userId);


    void updateroom( long room, long student, Date start, Date end);

    void vacateroom(long userId);

    void create_room_stud(long room,long student,Date start,Date end );

    boolean Isoccupied(Long roomid);

    void initializeRoom(Long room_id);

    Long countofFreerooms();


    Long countofrooms();

    stud_fees showFees(Long id);


    room_stud ROOMDETAILS(long stud_id);

    String getEmailAddress(Long studId);
}
