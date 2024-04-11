package com.hostel.hostelPortal.service.impl;

import com.hostel.hostelPortal.model.*;
import com.hostel.hostelPortal.repo.RoleRepository;
import com.hostel.hostelPortal.repo.UserRepository;
import com.hostel.hostelPortal.repo.roomstudRepository;
import com.hostel.hostelPortal.repo.stud_Room_Repository;
import com.hostel.hostelPortal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDate;
import java.time.Period;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static com.hostel.hostelPortal.controller.UserController.mess_fees;
import static com.hostel.hostelPortal.controller.UserController.hostel_fees;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private stud_Room_Repository stud_room_repository;

    @Autowired
    private com.hostel.hostelPortal.repo.roomstudRepository roomstudRepository;

    //creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception
    {

        User local = this.userRepository.findByUserName(user.getUserName());
        if (local != null)
        {
            System.out.println("User is already there !!");
            throw new Exception("User already present !!");
        } else
        {
            for (UserRole ur : userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);

            this.stud_room_repository.save(new stud_room(user.getId(),-99L));


        }
        return local;
    }

    //getting user by username
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUserName(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

    @Override
    public void updateUser(User user) {
        this.userRepository.save(user);
    }


    @Override
    public List<User> getalluser()
    {
        return this.userRepository.findAll();
    }

    @Override
    public Long getroombyid(Long userId)
    {
        return  this.stud_room_repository.findById(userId).orElseThrow().getRoom_no();
    }
    @Override
    public void updateroom( long room, long student, Date start, Date end)
    {
        room_stud local = this.roomstudRepository.findById(room).get();
        local.setStud(student);
        local.setStart(start);
        local.setEnd(end);
        this.roomstudRepository.save(local);


        stud_room local2= this.stud_room_repository.findById(student).get();
        local2.setRoom_no(room);
        this.stud_room_repository.save(local2);
    }
    @Override
    public void vacateroom(long userId)
    {
        this.roomstudRepository.deleteById(this.getroombyid(userId));
        this.stud_room_repository.deleteById(userId);

        //once you vacate a room both way mappping gets deleted
    }

   /* @Override
    public void create_room_stud(room_stud room_details)
    {
        System.out.println(room_details.getRoom());
        System.out.println(room_details.getStud());
        System.out.println(room_details.getStart());
        System.out.println(room_details.getEnd());



        room_stud local = this.roomstudRepository.findById(room_details.getRoom()).get();
        local.setStud(room_details.getStud());
        local.setStart(room_details.getStart());
        local.setEnd(room_details.getEnd());
        this.roomstudRepository.save(local);


        stud_room local2= this.stud_room_repository.findById(room_details.getStud()).get();
        local2.setRoom_no(room_details.getRoom());
        this.stud_room_repository.save(local2);





    }*/

    @Override
    public void create_room_stud(long room, long student, Date start, Date end)
    {






        room_stud local = this.roomstudRepository.findById(room).get();
        local.setStud(student);
        local.setStart(start);
        local.setEnd(end);
        this.roomstudRepository.save(local);


        stud_room local2= this.stud_room_repository.findById(student).get();
        local2.setRoom_no(room);
        this.stud_room_repository.save(local2);
    }





    @Override
    public boolean Isoccupied(Long roomid)
    {
        Long student_id= this.roomstudRepository.getById(roomid).getStud();
        if(student_id!=-99L)
            return true;
        else
            return false;
    }

    @Override
    public  void initializeRoom(Long room_id)
    {
        room_stud local=new room_stud(room_id,-99L,null,null);
        this.roomstudRepository.save(local);
    }

    @Override
    public   Long countofFreerooms()
    {
        return this.roomstudRepository.countofFreerooms();
    }

    @Override
    public Long countofrooms()
    {
        return this.roomstudRepository.count();
    }



    @Override
    public stud_fees showFees(Long id)
    {
        Long room_no=this.getroombyid(id);
        System.out.println("OK");

        Date start=this.roomstudRepository.findById(room_no).get().getStart();
        Date end =this.roomstudRepository.findById(room_no).get().getEnd();

        System.out.println(start);
        System.out.println(end);

        Long k=end.getTime()-start.getTime();
        System.out.println(k);

        long difference_In_Days
                = TimeUnit
                .MILLISECONDS
                .toDays(k);
        System.out.println(difference_In_Days);
        System.out.println(mess_fees);
        Float mess_Fee= (difference_In_Days/30)*mess_fees+((difference_In_Days%30)*mess_fees/30);
        System.out.println(mess_Fee);

        Float hostel_Fee= (difference_In_Days/30)*hostel_fees+((difference_In_Days%30)*hostel_fees/30);
        System.out.println(hostel_Fee);
        return new stud_fees(id,mess_Fee,hostel_Fee);

    }


    @Override
    public room_stud ROOMDETAILS(long stud_id)
    {
        long room_no=this.stud_room_repository.findById(stud_id).orElseThrow().getRoom_no();
        Date start= this.roomstudRepository.findById(room_no).get().getStart();
        Date end= this.roomstudRepository.findById(room_no).get().getEnd();


        return (new room_stud(room_no,stud_id,start,end));


    }

    @Override
    public String getEmailAddress(Long studId) {
        return this.userRepository.findById(studId).get().getEmail();
    }






}


