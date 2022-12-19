package com.whynot.whynotbackend.controller;

import com.whynot.whynotbackend.model.User;
import com.whynot.whynotbackend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{id}")
    User findById(@PathVariable("id") Integer id) {
        User user = userRepository.findById(id).get();
        return user;
    }
}

