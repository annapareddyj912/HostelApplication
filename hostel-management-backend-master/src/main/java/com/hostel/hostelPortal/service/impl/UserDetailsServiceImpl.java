package com.hostel.hostelPortal.service.impl;

import com.hostel.hostelPortal.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        com.hostel.hostelPortal.model.User user=this.userRepository.findByUserName(userName);
        if(user==null)
        {
            System.out.println("User not found");
            throw new UsernameNotFoundException("No user found!!");
        }
        return user;
    }
}
