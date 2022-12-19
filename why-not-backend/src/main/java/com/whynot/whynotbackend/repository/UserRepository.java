package com.whynot.whynotbackend.repository;


import com.whynot.whynotbackend.model.Restaurant;
import com.whynot.whynotbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
