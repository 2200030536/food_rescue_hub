package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipientController {

    @GetMapping("/recipient/dashboard")
    public String recipientDashboard() {
        return "Welcome to the Recipient Organization Dashboard";
    }
}
