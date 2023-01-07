package com.whynot.whynotbackend.repository;

import com.whynot.whynotbackend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("Select c from Comment c where c.restaurant.id = :id")
    List<Comment> findByRestaurantId(@Param("id") Integer id);
}
