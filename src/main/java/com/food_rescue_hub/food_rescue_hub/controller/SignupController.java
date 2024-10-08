package com.food_rescue_hub.food_rescue_hub.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.food_rescue_hub.food_rescue_hub.entity.Role;
import com.food_rescue_hub.food_rescue_hub.entity.User;
import com.food_rescue_hub.food_rescue_hub.repository.RoleRepository;
import com.food_rescue_hub.food_rescue_hub.repository.UserRepository;

@Controller
public class SignupController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }

    @PostMapping("/signup")
    public String registerUser(@ModelAttribute User user, String role) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole;
        if (role.equals("donor")) {
            userRole = roleRepository.findByName("ROLE_FOOD_DONOR");
        } else if (role.equals("recipient")) {
            userRole = roleRepository.findByName("ROLE_RECIPIENT_ORG");
        } else {
            return "redirect:/signup?error";
        }
        user.getRoles().add(userRole);
        userRepository.save(user);

        return "redirect:/login";
    }
}
