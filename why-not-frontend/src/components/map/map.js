import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './map.css';
import { restaurants } from "./data";

export const useCreateMap = (mapRef) => {
    const addRestaurants = (Graphic, graphicsLayer) => {
        const points = restaurants.map(restaurant => {
            return {
                type: "point",
                latitude: restaurant.latitude,
                longitude: restaurant.longitude
            }
        });

        const marker = {
            type: "simple-marker",
            color: [226, 119, 40],
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        }

        points.forEach( point => {
            const pointGraphic = new Graphic({
                geometry: point,
                symbol: marker
            })

            graphicsLayer.add(pointGraphic);
        } )
    }

    useEffect( () => {
        let view;

        const initializeMap = async (mapRef) => {
            const modules = ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/Graphic', 'esri/layers/GraphicsLayer'];
            const [esriConfig, Map, MapView, FeatureLayer, Graphic, GraphicsLayer] = await loadModules(modules);

            esriConfig.apiKey = 'AAPK0f9c487846104193a10ac9d6b2686ff0XWurj85K4SlMxPkReEycQGDr64vb37mnsdQjipu4pryh-pyHnT46nXnHRcrUAsPl';

            const map = new Map({ basemap: 'arcgis-topographic' });
            view = new MapView({
                map: map,
                zoom: 13,
                container: mapRef.current,
                center: [26.1025, 44.4268]
            })

            const graphicsLayer = new GraphicsLayer();
            addRestaurants(Graphic, graphicsLayer);

            const sectorsLayer = new FeatureLayer(
                {
                    url: "https://services8.arcgis.com/M5nQGgOITP5Ckoyn/arcgis/rest/services/sectoare/FeatureServer",
                    opacity: 0.3
                }
            );

            map.add(sectorsLayer, 0);
            map.add(graphicsLayer);
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