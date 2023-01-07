package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.User;

import java.util.Optional;

public interface UserService {

    Optional<User> findById(Integer id);

    User saveUser(User user);

    String findPasswordByEmail(String email);

    User findByEmail(String email);
}
