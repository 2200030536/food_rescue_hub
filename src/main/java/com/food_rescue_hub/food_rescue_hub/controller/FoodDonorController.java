package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodDonorController {

    @GetMapping("/donor/dashboard")
    public String donorDashboard() {
        return "Welcome to the Food Donor Dashboard";
    }
}
