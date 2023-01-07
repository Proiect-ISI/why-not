package com.whynot.whynotbackend.service;

import com.whynot.whynotbackend.model.Comment;
import com.whynot.whynotbackend.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Comment> findByRestaurantId(Integer id) {
        return commentRepository.findByRestaurantId(id);
    }
}
