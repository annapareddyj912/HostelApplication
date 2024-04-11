package com.hostel.hostelPortal;

import com.hostel.hostelPortal.service.UserService;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.hostel.hostelPortal.model.Role;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.model.UserRole;
@SpringBootApplication
public class hostelPortalApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(hostelPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("starting code");

//	*******************checking user CRUD****************************
	/*	User user = new User();
		user.setFirstName("Bhargav");
		user.setLastName("Mehta");
    	user.setUserName("bhargav029");
		user.setPassword("abc");
		user.setEmail("abc@gmail.com");

		Role role1=new Role();
		role1.setRoleId(44L);
		role1.setRoleName("ADMIN");

		UserRole userRole = new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);

		Set<UserRole> userRoleSet=new HashSet<>();
		userRoleSet.add(userRole);

		User user1=this.userService.createUser(user,userRoleSet);
		System.out.println(user1.getUserName());

 		//****************************checking mail********************
		System.out.println("preparing to send message ...");
		String message = "Hello , Dear, this is message for security check . ";
		String subject = "CodersArea : Confirmation";
		String to = "abc@iiitb.ac.in";
		String from = "hostel.iiitb1@gmail.com";
*/
		//sendEmail(message,subject,to,from);
		//sendAttach(message,subject,to,from);
	}
}
