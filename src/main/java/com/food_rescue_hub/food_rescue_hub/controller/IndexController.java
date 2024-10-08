package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/index")
    public String index() {
        return "index"; // Returns the index.html view
    }
}
