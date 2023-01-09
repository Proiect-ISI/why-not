import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import {allRestaurants} from "./data";
import Sidebar from "./sidebar";
import useCreateMap from "./createMap";

const Map = () => {
    const [favorites, setFavorites] = useState(allRestaurants.slice(0, 2))
    const [specific, setSpecific] = useState('All')
    const [restaurants, setRestaurants] = useState(allRestaurants)

    useEffect(() => {
        /* todo */
        // RestaurantsService.getFavoriteRestaurants()
        //     .then(response => {
        //         setFavorites( response.data )
        //     }
        // );
    }, []);

    const mapRef = useRef(null);
    useCreateMap(mapRef, allRestaurants.filter(r => r.foodSpecific === specific || specific === "All"), favorites);

    return (
        <div className="container-wrap">
            <Sidebar
                favorites={favorites}
                setFavorites={setFavorites}
            />
            <div className="wrap">
                <select defaultValue="All" onChange={e => setSpecific(e.target.value)} style={{position: "absolute"}}>
                    <option value="All">All Specifics</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Italian">Italian</option>
                    <option value="French">French</option>
                </select>
                <div className="map-view" ref={mapRef}/>
            </div>
        </div>
    );
}

export default Map;