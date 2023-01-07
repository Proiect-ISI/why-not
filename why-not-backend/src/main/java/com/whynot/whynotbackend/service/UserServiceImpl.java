package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.User;
import com.whynot.whynotbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> findById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public String findPasswordByEmail(String email) {
        return userRepository.findPasswordByEmail(email);
    }
}
