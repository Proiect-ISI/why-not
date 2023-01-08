package com.whynot.whynotbackend.repository;

import com.whynot.whynotbackend.model.UserFavoriteRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFavoriteRestaurantRepository extends JpaRepository<UserFavoriteRestaurant, Integer> {

}
