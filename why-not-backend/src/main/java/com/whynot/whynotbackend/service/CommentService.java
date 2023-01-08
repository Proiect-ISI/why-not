package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.Comment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentService {

    List<Comment> findByRestaurantId(Integer id);
}
