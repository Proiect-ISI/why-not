package com.whynot.whynotbackend.controller;

import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.repository.RestaurantRespository;
import com.whynot.whynotbackend.service.RestaurantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;
    private final RestaurantRespository restaurantRespository;

    public RestaurantController(RestaurantService restaurantService,
                                RestaurantRespository restaurantRespository) {
        this.restaurantService = restaurantService;
        this.restaurantRespository = restaurantRespository;
    }

    @GetMapping("/specific/{foodSpecific}")
    public List<Restaurant> findBySpecific(@PathVariable("foodSpecific") String foodSpecfic) {
        return restaurantService.getRestaurantsByFoodSpecific(foodSpecfic);
    }

    @PostMapping("/update")
    public Restaurant saveRestaurant(@RequestBody Restaurant restaurant) {

        Optional<Restaurant> restaurantDB = Optional.empty();
        if(restaurant.getId() != null)
            restaurantDB = restaurantService.findById(restaurant.getId());

        if(restaurantDB.isPresent()) {
            Restaurant toSaveRestaurant = restaurantDB.get();
            toSaveRestaurant.setFoodSpecific(restaurant.getFoodSpecific());
            toSaveRestaurant.setName(restaurant.getName());
            return restaurantService.saveRestaurant(toSaveRestaurant);
        }
        return restaurantService.saveRestaurant(restaurant);
    }
}

