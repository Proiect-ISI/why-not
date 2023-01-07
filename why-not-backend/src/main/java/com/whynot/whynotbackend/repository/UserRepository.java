package com.whynot.whynotbackend.repository;


import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("Select u.password from User u where u.email = :email")
    String findPasswordByEmail(@Param("email") String email);
}
