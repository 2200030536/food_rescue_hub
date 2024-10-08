package com.food_rescue_hub.food_rescue_hub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food_rescue_hub.food_rescue_hub.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
