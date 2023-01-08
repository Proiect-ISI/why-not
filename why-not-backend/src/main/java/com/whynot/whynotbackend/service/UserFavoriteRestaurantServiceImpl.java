package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.UserFavoriteRestaurant;
import com.whynot.whynotbackend.repository.UserFavoriteRestaurantRepository;
import org.springframework.stereotype.Service;

@Service
public class UserFavoriteRestaurantServiceImpl implements UserFavoriteRestaurantService{

    UserFavoriteRestaurantRepository userFavoriteRestaurantRepository;
    @Override
    public UserFavoriteRestaurant saveUserFavoriteRestaurant(UserFavoriteRestaurant userFavoriteRestaurant) {
        return userFavoriteRestaurantRepository.save(userFavoriteRestaurant);
    }
}
