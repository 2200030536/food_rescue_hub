package spr.food.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spr.food.model.Admin;
import spr.food.model.User;
import spr.food.service.AdminService;
import spr.food.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;


    @PostMapping("/user/login")
       public ResponseEntity<String> loginUser(@RequestBody User loginRequest) {
           String email = loginRequest.getEmail();
           String password = loginRequest.getPassword();

           User user = userService.getUserByEmail(email);
           if (user != null && user.getPassword().equals(password)) {
               return ResponseEntity.ok("User login successful for: " + email);
           }
           return ResponseEntity.status(401).body("Invalid email or password.");
       }


    
    @PostMapping("/admin/login")
    public ResponseEntity<String> loginAdmin(@RequestBody Admin loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        Optional<Admin> optionalAdmin = adminService.getAdminByUsername(username);

        if (optionalAdmin.isPresent()) {
            Admin admin = optionalAdmin.get();
            if (admin.getPassword().equals(password)) {
                return ResponseEntity.ok("Admin login successful for: " + username);
            }
        }
        return ResponseEntity.status(401).body("Invalid username or password.");
    }

    // User login
//    @PostMapping("/user/login")
//    public ResponseEntity<String> loginUser(@RequestParam String email, @RequestParam String password) {
//        User user = userService.getUserByEmail(email);
//        if (user != null && user.getPassword().equals(password)) {
//            return ResponseEntity.ok("User login successful for: " + email);
//        }
//        return ResponseEntity.status(401).body("Invalid email or password.");
//    }



    // Admin login
//    @PostMapping("/admin/login")
//    public ResponseEntity<String> loginAdmin(@RequestParam String username, @RequestParam String password) {
//        Optional<Admin> optionalAdmin = adminService.getAdminByUsername(username);
//
//        if (optionalAdmin.isPresent()) {
//            Admin admin = optionalAdmin.get();
//            if (admin.getPassword().equals(password)) {
//                return ResponseEntity.ok("Admin login successful for: " + username);
//            }
//        }
//        return ResponseEntity.status(401).body("Invalid username or password.");
//    }


    // User registration
    @PostMapping("/user/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
    	return ResponseEntity.ok(userService.createUser(user));
    }
    // Admin registration
    @PostMapping("/admin/register")
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok(adminService.createAdmin(admin));
    }
    
    
    
    
}
