package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.repository.RestaurantRespository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService{

    RestaurantRespository restaurantRespository;

    public RestaurantServiceImpl(RestaurantRespository restaurantRespository) {
        this.restaurantRespository = restaurantRespository;
    }

    @Override
    public List<Restaurant> getRestaurantsByCountry(String country) {
        return restaurantRespository.findByCountry(country);
    }

    @Override
    public Restaurant saveRestaurant(Restaurant restaurant) {
        return restaurantRespository.save(restaurant);
    }

    @Override
    public Optional<Restaurant> findById(int id) {
        return restaurantRespository.findById(id);
    }
}
