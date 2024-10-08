package com.food_rescue_hub.food_rescue_hub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF protection (consider enabling if necessary)
            .authorizeHttpRequests(requests -> requests
                .requestMatchers("/signup", "/login", "/public/**").permitAll() // Allow access to signup/login pages
                .requestMatchers("/admin/**").hasRole("ADMIN") // Only ADMIN can access /admin/**
                .requestMatchers("/donor/**").hasRole("FOOD_DONOR") // Only FOOD_DONOR can access /donor/**
                .requestMatchers("/recipient/**").hasRole("RECIPIENT_ORG") // Only RECIPIENT_ORG can access /recipient/**
                .anyRequest().authenticated() // All other requests need authentication
            )
            .formLogin(form -> form
                .loginPage("/login").permitAll() // Custom login page
                .successHandler((request, response, authentication) -> {
                    String role = authentication.getAuthorities().toString();
                    if (role.contains("ROLE_ADMIN")) {
                        response.sendRedirect("/admin/dashboard");
                    } else if (role.contains("ROLE_FOOD_DONOR")) {
                        response.sendRedirect("/donor/home");
                    } else if (role.contains("ROLE_RECIPIENT_ORG")) {
                        response.sendRedirect("/recipient/home");
                    } else {
                        response.sendRedirect("/index"); // Default redirect
                    }
                })
                
            )
            .logout(logout -> logout.permitAll()); // Allow everyone to log out

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Password encoder for hashing passwords
    }
}
