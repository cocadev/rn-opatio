import { Dimensions } from "react-native";
import supercluster from "supercluster";

function getZoomLevel(longitudeDelta) {
    const angle = longitudeDelta;
    return Math.round(Math.log(360 / angle) / Math.LN2);
}

export function getCluster(places, region) {
    const cluster = supercluster({
        radius: 40,
        maxZoom: 16
    });

    let markers = [];

    try {
        const padding = 0;

        cluster.load(places);

        markers = cluster.getClusters(
            [
                region.longitude - region.longitudeDelta * (0.5 + padding),
                region.latitude - region.latitudeDelta * (0.5 + padding),
                region.longitude + region.longitudeDelta * (0.5 + padding),
                region.latitude + region.latitudeDelta * (0.5 + padding)
            ],
            getZoomLevel(region.longitudeDelta)
        );
    } catch (e) {
        console.debug("failed to create cluster", e);
    }

    return {
        markers,
        cluster
    };
}