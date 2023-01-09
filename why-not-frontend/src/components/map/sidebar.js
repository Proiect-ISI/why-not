import React from "react";
import './sidebar.css'
// import RestaurantsService from '../../services/restaurants'

const Sidebar = ({favorites, setFavorites}) => {
    const deleteRestaurant = restaurantId => {
        // RestaurantsService.removeFromFavorites(restaurantId)
        //     .then(() => {
        //         // check
        //         RestaurantsService.getFavoriteRestaurants()
        //             .then((data) => {
        //                 setFavorites(data);
        //             })
        //     })

        setFavorites(favorites.filter(r => r.id !== parseInt(restaurantId)));
    }

    return (
        <div className="sidebar">
            <div className="restaurant-list">
                <header>Your favorite restaurants right now</header>
            {favorites.map(r => {
                return (
                    <div className="restaurant" key={r.id} style={{display: 'flex', alignItems: 'center', paddingLeft: '10px'}}>
                        <div className="r-profile"></div>
                        <div className="r-data">
                            <span className="r-title">{r.name}</span>
                            <span className="r-type">{r.foodSpecific}</span>
                        </div>
                        <div className="r-actions">
                            <button className="delete" value={r.id} onClick={e => deleteRestaurant(e.target.value)}></button>
                        </div>
                    </div>
                )
            })}
            </div>

            <div className="footer">
                <span className="title">WhyNot</span> <span className="tm">TM</span>
            </div>
        </div>
    )
}

export default Sidebar;