package com.whynot.whynotbackend.repository;


import com.whynot.whynotbackend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRespository extends JpaRepository<Restaurant, Integer> {

    // custom query to search to blog post by title or content
    List<Restaurant> findByCountry(String country);
}
