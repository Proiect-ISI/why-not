package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.Restaurant;

import java.util.List;
import java.util.Optional;

public interface RestaurantService {

    List<Restaurant> getRestaurantsByFoodSpecific(String foodSpecific);

    Restaurant saveRestaurant(Restaurant restaurant);

    Optional<Restaurant> findById(Integer id);
}
