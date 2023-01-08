package com.whynot.whynotbackend.model;


import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

@Entity
@Table(name = "restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "food_specific", nullable = false)
    private String foodSpecific;

    @Column(name = "latitude", nullable = false)
    private Float latitude;

    @Column(name = "longitude", nullable = false)
    private Float longitude;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = User.class)
    @JsonIgnoreProperties(value = {"favoriteRestaurants", "ownedRestaurants"})
    private User owner;

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Restaurant(Integer id, String name, String foodSpecific, Float latitude, Float longitude) {
        this.id = id;
        this.name = name;
        this.foodSpecific = foodSpecific;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Restaurant() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFoodSpecific() {
        return foodSpecific;
    }

    public void setFoodSpecific(String foodSpecific) {
        this.foodSpecific = foodSpecific;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }
}