package com.whynot.whynotbackend.controller;

import com.whynot.whynotbackend.model.UserFavoriteRestaurant;
import com.whynot.whynotbackend.repository.UserFavoriteRestaurantRepository;
import com.whynot.whynotbackend.service.UserFavoriteRestaurantService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userfavoriterestaurant")
public class UserFavoriteRestaurantController {

    private final UserFavoriteRestaurantService userFavoriteRestaurantService;
    private final UserFavoriteRestaurantRepository userFavoriteRestaurantRepository;


    public UserFavoriteRestaurantController(UserFavoriteRestaurantService userFavoriteRestaurantService,
                                            UserFavoriteRestaurantRepository userFavoriteRestaurantRepository) {
        this.userFavoriteRestaurantService = userFavoriteRestaurantService;
        this.userFavoriteRestaurantRepository = userFavoriteRestaurantRepository;
    }

    @DeleteMapping("/delete")
    void deleteUserFavoriteRestaurant(@RequestBody UserFavoriteRestaurant userFavoriteRestaurant) {
        userFavoriteRestaurantRepository.deleteById(userFavoriteRestaurant.getId());
    }

    @PostMapping("/add")
    UserFavoriteRestaurant addFavourite(UserFavoriteRestaurant userFavoriteRestaurant) {
        return userFavoriteRestaurantService.saveUserFavoriteRestaurant(userFavoriteRestaurant);
    }

}
