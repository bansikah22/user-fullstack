package com.bansikah.social_login.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to the Bansikah's Social Media Platform!";
    }
    
    @GetMapping("secure")
    public String secure() {
        return "hello this is secure,This is the about page of the Bansikah's Social Media Platform!";
    }
}
