export const restaurants = [
    {
        id: 1,
        name: "Ceaun",
        foodSpecific: "Romanian",
        latitude: 44.460359,
        longitude: 26.119623,
        owner: 1
    },
    {
        id: 2,
        name: "Baguette",
        foodSpecific: "French",
        latitude: 44.431448,
        longitude: 26.117257,
        owner: 2
    },
    {
        id: 3,
        name: "China",
        foodSpecific: "Chinese",
        latitude: 44.443395,
        longitude: 26.075566,
        owner: 2
    }
]

export const users = [
    {
        id: 1,
        email: "ionut.graure@gmail.com",
        password: null,
        active: 1,
        type: "Admin",
        favoriteRestaurants: [
            {
                id: 1,
                user: 1,
                restaurant: 1
            },
            {
                id: 2,
                user: 1,
                restaurant: 2
            }
        ],
        ownedRestaurants: [
            {
                id: 1,
                name: "Ceaun",
                foodSpecific: "Romanian",
                latitude: 44.460359,
                longitude: 26.119623,
                owner: 1
            }
        ]
    },
    {
        id: 2,
        email: "costin.poenaru@gmail.com",
        password: null,
        active: 1,
        type: "Admin",
        favoriteRestaurants: [
            {
                id: 3,
                user: 2,
                restaurant: 3
            },
            {
                id: 2,
                user: 2,
                restaurant: 2
            }
        ],
        ownedRestaurants: [
            {
                id: 2,
                name: "Baguette",
                foodSpecific: "French",
                latitude: 44.431448,
                longitude: 26.117257,
                owner: 2
            },
            {
                id: 3,
                name: "China",
                foodSpecific: "Chinese",
                latitude: 44.443395,
                longitude: 26.075566,
                owner: 2
            }
        ]
    }
]