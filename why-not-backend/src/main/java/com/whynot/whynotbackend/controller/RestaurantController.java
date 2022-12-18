package com.whynot.whynotbackend.controller;

import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.service.RestaurantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/country/{country}")
    public List<Restaurant> findByCountry(@PathVariable("country") String country) {
        return restaurantService.getRestaurantsByCountry(country);
    }

    @PostMapping("/update")
    public Restaurant saveRestaurant(@RequestBody Restaurant restaurant) {

        Optional<Restaurant> restaurantDB = Optional.empty();
        if(restaurant.getId() != null)
            restaurantDB = restaurantService.findById(restaurant.getId());

        if(restaurantDB.isPresent()) {
            Restaurant toSaveRestaurant = restaurantDB.get();
            toSaveRestaurant.setCountry(restaurant.getCountry());
            toSaveRestaurant.setName(restaurant.getName());
            return restaurantService.saveRestaurant(toSaveRestaurant);
        }
        return restaurantService.saveRestaurant(restaurant);
    }
}

