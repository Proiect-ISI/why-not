import React, { useEffect, useRef } from 'react';
import { loadModules } from "esri-loader";
import './map.css';

export const useCreateMap = (mapRef) => {
    useEffect( () => {
        let view;

        const initializeMap = async (mapRef) => {
            const modules = ['esri/Map', 'esri/views/MapView'];
            const [Map, MapView] = await loadModules(modules);

            const map = new Map({ basemap: "streets-relief-vector" });
            view = new MapView({
                map: map,
                zoom: 13,
                container: mapRef.current,
                center: [26.1025, 44.4268]
            })
        }

        initializeMap(mapRef);

        return () => view?.destroy();
    }, [mapRef]);
}

const Map = () => {
    const mapRef = useRef(null);
    useCreateMap(mapRef);

    return <div className="map-view" ref={mapRef}/>;
}

export default Map;