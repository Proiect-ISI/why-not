package com.whynot.whynotbackend.model;

import jakarta.persistence.*;
import lombok.Builder;

import java.util.List;

@Entity
@Table(name = "users")
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private Integer active;

    @Column(name = "user_type")
    private String type;

    @OneToMany(mappedBy = "user")
    private List<UserFavoriteRestaurant> favoriteRestaurants;

    @OneToMany(mappedBy = "owner")
    private List<Restaurant> ownedRestaurants;

    public User(Integer id, String email, String password, Integer active, String type, List<UserFavoriteRestaurant> favoriteRestaurants, List<Restaurant> ownedRestaurants) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.active = active;
        this.type = type;
        this.favoriteRestaurants = favoriteRestaurants;
        this.ownedRestaurants = ownedRestaurants;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<UserFavoriteRestaurant> getFavoriteRestaurants() {
        return favoriteRestaurants;
    }

    public void setFavoriteRestaurants(List<UserFavoriteRestaurant> favoriteRestaurants) {
        this.favoriteRestaurants = favoriteRestaurants;
    }

    public List<Restaurant> getOwnedRestaurants() {
        return ownedRestaurants;
    }

    public void setOwnedRestaurants(List<Restaurant> ownedRestaurants) {
        this.ownedRestaurants = ownedRestaurants;
    }
}
