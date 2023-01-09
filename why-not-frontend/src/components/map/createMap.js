import {useEffect} from 'react';
import { loadModules } from 'esri-loader';
import './map.css';
import { restaurants } from "./data";

export const useCreateMap = (mapRef, favorites) => {

    useEffect( () => {
        let view;

        const addRestaurants = (Graphic, graphicsLayer) => {
            const marker = {
                type: "simple-marker",
                color: [226, 119, 40],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            }

            const favoriteMarker = {
                type: "simple-marker",
                style: "square",
                color: "yellow",
                size: "8px",
                outline: {
                    color: [255, 255, 0],
                    width: 3
                }
            }

            restaurants.forEach(restaurant => {
                const point = {
                    type: "point",
                    latitude: restaurant.latitude,
                    longitude: restaurant.longitude
                }

                const attributes = {
                    name: restaurant.name,
                    specific: restaurant.foodSpecific
                }

                graphicsLayer.add(new Graphic({
                    geometry: point,
                    symbol: favorites.includes(restaurant) ? favoriteMarker : marker,
                    attributes: attributes,
                    popupTemplate: { /* todo */
                        title: "{name}",
                        content: "{specific}"
                    }
                }));
            });
        }

        const initializeMap = async (mapRef) => {
            const modules = ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer', 'esri/Graphic', 'esri/layers/GraphicsLayer'];
            const [esriConfig, Map, MapView, FeatureLayer, Graphic, GraphicsLayer] = await loadModules(modules);

            esriConfig.apiKey = 'AAPK0f9c487846104193a10ac9d6b2686ff0XWurj85K4SlMxPkReEycQGDr64vb37mnsdQjipu4pryh-pyHnT46nXnHRcrUAsPl';

            const map = new Map({ basemap: 'arcgis-topographic' });
            view = new MapView({
                map: map,
                zoom: 12,
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
    }, [mapRef, favorites]);
}

export default useCreateMap;