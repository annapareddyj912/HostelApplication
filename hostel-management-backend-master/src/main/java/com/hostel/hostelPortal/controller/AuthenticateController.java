package com.hostel.hostelPortal.controller;


import com.hostel.hostelPortal.config.JwtUtil;
import com.hostel.hostelPortal.model.JwtRequest;
import com.hostel.hostelPortal.model.JwtResponse;
import com.hostel.hostelPortal.model.User;
import com.hostel.hostelPortal.repo.UserRepository;
import com.hostel.hostelPortal.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin("*")
//@CrossOrigin(origins="http://localhost:4200")
@RestController





public class AuthenticateController
{
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception
    {
        try{
            System.out.println(jwtRequest.getUsername() + "&&&&" + jwtRequest.getPassword());
            authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
            System.out.println("authenticate successfull............");
        }catch(UsernameNotFoundException e) {
            e.printStackTrace();
            throw new Exception("User not found");
        }

        /*------------user authenticated------------*/
        //userDetails useful for generate token
        UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("JWT token is "+token);
        return ResponseEntity.ok(new JwtResponse(token) );
    }

    private void authenticate(String username,String password) throws Exception
    {
        try{
            System.out.println(username + ";;;;" + password);
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
            System.out.println("done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        } catch(DisabledException e) {
            throw new Exception("User disabled " + e.getMessage());
        } catch(BadCredentialsException e) {
            throw new Exception("Invalid Credentials " + e.getMessage());
        } catch(Exception e)
        {
            throw new Exception("Exception occurred! " + e.getMessage());
        }
    }

    //returns the details    of the current user
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        return ((User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName()));
    }
}