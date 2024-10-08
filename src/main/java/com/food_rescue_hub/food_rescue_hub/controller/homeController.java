package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.stereotype.Controller;
@Controller
public class homeController {
    @GetMapping("/home")
    public String home() {
        return "home"; // Custom login page
    }
    
}
