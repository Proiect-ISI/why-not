package com.whynot.whynotbackend.controller;

import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.model.User;
import com.whynot.whynotbackend.model.UserFavoriteRestaurant;
import com.whynot.whynotbackend.repository.UserRepository;
import com.whynot.whynotbackend.service.RestaurantService;
import com.whynot.whynotbackend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    private final RestaurantService restaurantService;

    public UserController(UserRepository userRepository, UserService userService, RestaurantService restaurantService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.restaurantService = restaurantService;
    }

    @GetMapping("/{id}")
    User findById(@PathVariable("id") Integer id) {
        User user = userRepository.findById(id).get();
        return user;
    }

    @GetMapping("/favoriteRestaurants")
    List<Restaurant> getFavoriteRestaurants(@RequestBody User user) {
        return userService.findById(user.getId()).get().getFavoriteRestaurants().stream().map(ufv -> restaurantService.findById(ufv.getRestaurant().getId()).get())
                .collect(Collectors.toList());
    }

    @PutMapping("/activateUser")
    User activateUser(@RequestBody User user) {
        user = userService.findById(user.getId()).get();
        user.setActive(1);
        return userService.saveUser(user);
    }

    @PostMapping("/create")
    public User saveUser(@RequestBody User user) {
        if(user.getType().equals("Client"))
            user.setActive(1);
        else
            user.setActive(0);
        return userService.saveUser(user);
    }

    @GetMapping("/login")
    public User loginUser(@RequestBody User user) {
        String password = userService.findPasswordByEmail(user.getEmail());

        if(password != null && password.equals(user.getPassword())) {
            return userService.findByEmail(user.getEmail());
        } else {
            return null;
        }
    }


}

