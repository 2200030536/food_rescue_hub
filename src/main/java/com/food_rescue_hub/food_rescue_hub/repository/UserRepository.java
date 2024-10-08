package com.food_rescue_hub.food_rescue_hub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.food_rescue_hub.food_rescue_hub.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
