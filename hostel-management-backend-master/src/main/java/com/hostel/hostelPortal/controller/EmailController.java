package com.hostel.hostelPortal.controller;

import com.hostel.hostelPortal.model.EmailRequest;
import com.hostel.hostelPortal.model.EmailResponse;
import com.hostel.hostelPortal.service.EmailService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmailController {
    private static final Logger logger = LogManager.getLogger(EmailController.class);
    @Autowired
    private EmailService emailService;

    //api to send email
    @RequestMapping(value="/sendemail",method= RequestMethod.POST)
    //<?> means you don't want want mention type
    //@RequestBody helps in storing JSON data
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request)
    {
        boolean result=this.emailService.sendEmail(request.getMessage(), request.getSubject(), request.getTo());
        if(result)
        {
            System.out.println(request);
            logger.info("POST email successfully sent to "+request.getTo());
            return ResponseEntity.ok(new EmailResponse("Email sent successfully."));
        }
        else
        {
            logger.info("POST email not sent to "+request.getTo());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new EmailResponse("Email not sent..."));
        }

    }
}
