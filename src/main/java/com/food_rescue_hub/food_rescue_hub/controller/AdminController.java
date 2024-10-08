package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "Welcome to the Admin Dashboard";
    }
}
