import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './map.css';

export const useCreateMap = (mapRef) => {
    useEffect( () => {
        let view;

        const initializeMap = async (mapRef) => {
            const modules = ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'];
            const [esriConfig, Map, MapView, FeatureLayer] = await loadModules(modules);

            esriConfig.apiKey = 'AAPK0f9c487846104193a10ac9d6b2686ff0XWurj85K4SlMxPkReEycQGDr64vb37mnsdQjipu4pryh-pyHnT46nXnHRcrUAsPl';

            const map = new Map({ basemap: 'arcgis-topographic' });
            view = new MapView({
                map: map,
                zoom: 13,
                container: mapRef.current,
                center: [26.1025, 44.4268]
            })

            const restaurantsLayer = new FeatureLayer(
                { url: "https://services7.arcgis.com/aKrx8QUdsi3Kzq2y/arcgis/rest/services/isi/FeatureServer/0" }
            );
            const sectorsLayer = new FeatureLayer(
                {
                    url: "https://services8.arcgis.com/M5nQGgOITP5Ckoyn/arcgis/rest/services/sectoare/FeatureServer",
                    opacity: 0.3
                }
            );

            map.add(restaurantsLayer, 1);
            map.add(sectorsLayer, 0);
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