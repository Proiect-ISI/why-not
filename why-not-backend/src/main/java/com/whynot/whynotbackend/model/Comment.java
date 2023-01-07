package com.whynot.whynotbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = User.class)
    @JsonIgnoreProperties(value = {"favoriteRestaurants", "ownedRestaurants"})
    private User user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Restaurant.class)
    @JsonIgnoreProperties({"owner"})
    private Restaurant restaurant;

    @Column(name = "comment")
    private String comment;
}
