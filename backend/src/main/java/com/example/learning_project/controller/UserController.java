package com.example.learning_project.controller;

import com.example.learning_project.entity.User;
import com.example.learning_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
        private UserRepository userRepository;

    @PostMapping
    public User saveUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}

