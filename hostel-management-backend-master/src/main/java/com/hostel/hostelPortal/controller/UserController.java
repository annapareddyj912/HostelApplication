package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.*;
import com.hostel.hostelPortal.pdfgenerator;
import com.hostel.hostelPortal.service.UserService;
import com.lowagie.text.DocumentException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    private static final Logger logger = LogManager.getLogger(UserController.class);

    //creating user
    @PostMapping("/") //for saving data use post
    //For fetching JSON data use @RequestBody
    public User createUser(@RequestBody User user) throws Exception {
        user.setProfile("default.png");
        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");

//        role.setRoleId(44L);
//        role.setRoleName("ADMIN");

        UserRole userRole = new UserRole();
        userRole.setRole(role);
        userRole.setUser(user);

        Set<UserRole> roles = new HashSet<>();
        roles.add(userRole);
        logger.info("POST create user " + user.getUserName());
        return this.userService.createUser(user, roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        logger.info("GET get user with username " + username);
        return this.userService.getUser(username);
    }

    //delete the user by id
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        logger.info("DELETE delete user with id " + userId);
        this.userService.deleteUser(userId);
    }

    //update user data
    @PutMapping("/update")
    public void updateUser(@RequestBody User user) {
        logger.info("PUT update user with id " + user.getId());
        this.userService.updateUser(user);
    }

    @GetMapping("/getALL")
    public List<User> getall() {
        logger.info("GET get all users");
        return this.userService.getalluser();
    }

    @GetMapping("/getroombyid/{userid}")
    public Long getRoombyid(@PathVariable("userid") Long userid) {
        logger.info("GET get room number using student id " + userid);
        return this.userService.getroombyid(userid);
    }

    @PutMapping("/updateroom/{room}/{student}/{start}/{end}")
    public void updateroom(@PathVariable("room") long room,@PathVariable("student") long student,@PathVariable("start")  String start,@PathVariable("end")  String end)throws Exception
    {
        Date Start=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(start);
        Date End=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(end);
        this.userService.updateroom(room,student,Start,End);
        logger.info("PUT updated room details room "+room+" student_id "+student+" start "+start+" end "+end);
    }

    @DeleteMapping("/vacateroom/{userId}")
    public void vacateroom(@PathVariable("userId") long userId)
    {
        logger.info("DELETE vacate room with id "+userId);
        this.userService.vacateroom(userId);
    }

    /* @PostMapping("/Assignroom")
     public void room_assign(@RequestBody  room_stud roomdetails) throws Exception
     {
         System.out.println(roomdetails);
         this.userService.create_room_stud(roomdetails);
     }*/
    @GetMapping("isoccupied/{roomid}")
    public  boolean isoccupied(@PathVariable("roomid") Long roomid)
    {
        logger.info("GET inside isoccupied room_id " + roomid);
        return this.userService.Isoccupied(roomid);
    }

    @PostMapping("/initialize_room/{roomid}")
    public void initializerooms(@PathVariable("roomid") Long room_id)
    {
        logger.info("POST create room with id " + room_id);
        this.userService.initializeRoom(room_id);
    }
    @GetMapping("/countoffreerooms")
    public Long counoffreerooms()
    {
        Long count=this.userService.countofFreerooms();
        logger.info("GET count of free rooms "+count);
        return  count;
    }

    @GetMapping("/countofrooms")
    public Long counofrooms()
    {
        Long count=this.userService.countofrooms();
        logger.info("GET count of rooms "+count);
        return count;
    }

    @GetMapping("/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException
    {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<User> listUsers = this.userService.getalluser();

        pdfgenerator exporter = new pdfgenerator(listUsers);
        exporter.export(response);
        logger.info("GET Inside export to pdf");
    }

    public static float hostel_fees=1000;
    public static float mess_fees=2000;
    @PostMapping("/setfees/{hostelfee}/{messfee}")
    public void setfees(@PathVariable("hostelfee") float hostelfee,@PathVariable("messfee") float messfee)
    {
        hostel_fees=hostelfee;
        mess_fees=messfee;
        System.out.println(hostel_fees);
        System.out.println(mess_fees);
        logger.info("hostelfee " + hostelfee + " messfee " + messfee);
    }

    @GetMapping("/Export/{userid}/Pdf")
    public void exportPDF(@PathVariable("userid") long userid, HttpServletResponse response) throws DocumentException, IOException
    {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";

        response.setHeader(headerKey, headerValue);
        pdfexporter exporter = new pdfexporter(userid,userService);
        exporter.export(response);
        logger.info("GET inside export to pdf");
    }

    @PostMapping("/Assignroom/{room}/{student}/{start}/{end}")
    public void room_assign(@PathVariable("room") long room,@PathVariable("student") long student,@PathVariable("start")  String start,@PathVariable("end")  String end) throws Exception
    {
        Date Start=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(start);
        Date End=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(end);
        this.userService.create_room_stud(room,student,Start,End);
        logger.info("Post Assign room "+room+" to student "+student+" start "+start+" end "+end);
    }
    /* @PostMapping("/Assignroom/{room}/{student}/{start}/{end}")
    public void room_assign(@PathVariable("room") long room,
                            @PathVariable("student") long student,
                            @PathVariable("start") String start,
                            @PathVariable("end") String end) throws Exception {
        if (end == null) {
            // Handle the case where 'end' date is null
            // For example, set a default end date
            // Date defaultEndDate = // set your default end date here
            // this.userService.create_room_stud(room, student, Start, defaultEndDate);

            // Or throw an exception
            throw new IllegalArgumentException("'end' date cannot be null");
        }

        // Parse the 'start' and 'end' dates
        Date Start = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(start);
        Date End = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(end);

        // Call the service method with the parsed dates
        this.userService.create_room_stud(room, student, Start, End);
        logger.info("Post Assign room " + room + " to student " + student + " start " + start + " end " + end);
    }*/


    @PutMapping("/updatefees/{hostelfee}/{messfee}")
    public void updatefees(@PathVariable("hostelfee") float hostelfee,@PathVariable("messfee") float messfee)
    {
        hostel_fees=hostelfee;
        mess_fees=messfee;
//        hostel_fees=fees_months.getHostel_fees();
//        mess_fees=fees_months.getMess_fees();
        logger.info("hostelfee " + hostelfee + " messfee " + messfee);
    }
    @GetMapping("/viewfees")
    public fees_month viewfees()
    {
        logger.info("Get hostelfee " + hostel_fees + " messfee " + mess_fees);
        return (new fees_month(hostel_fees,mess_fees));
    }

    @GetMapping("/showfees/{id}")
    public  stud_fees showfees(@PathVariable Long id)
    {
        logger.info("GET show fees of  student "+id);
        return   this.userService.showFees(id);
    }

    @GetMapping("/ROOMDETAILS/{stud_id}")
    public room_stud ROOMDETAILS(@PathVariable Long stud_id)
    {
        logger.info("GET room details of student" + stud_id);
        return this.userService.ROOMDETAILS(stud_id);
    }

    @GetMapping("/get-email-address/{studId}")
    public String getEmailAddressById(@PathVariable("studId") Long studId) {
        String str = this.userService.getEmailAddress(studId);
        logger.info("GET email id of student_id "+ studId+" is " +str);
        return str;
    }
}
