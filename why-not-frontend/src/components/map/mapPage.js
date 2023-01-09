import React, {useEffect, useRef, useState} from "react";
import {restaurants} from "./data";
import Sidebar from "./sidebar";
import useCreateMap from "./createMap";

const Map = () => {
    const [favorites, setFavorites] = useState(restaurants.slice(0, 2))

    useEffect(() => {
        /* todo */
        // RestaurantsService.getFavoriteRestaurants()
        //     .then(response => {
        //         setFavorites( response.data )
        //     }
        // );
    }, []);

    const mapRef = useRef(null);
    useCreateMap(mapRef, favorites);

    return (
        <div className="container-wrap">
            <Sidebar
                favorites={favorites}
                setFavorites={setFavorites}
            />
            <div className="wrap">
                <div className="map-view" ref={mapRef}/>
            </div>
        </div>
    );
}

export default Map;