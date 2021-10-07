import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";
import axios from 'axios';

export default function Map() {
    let [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        width: 1200,
        height: 500,
        pitch: 60
    });

    const mapboxApiAccessToken =
        "pk.eyJ1IjoidHJpcHRpbmluamFzMSIsImEiOiJja3VlODJtdGgwNXc0MnpxZThwNjR2NWZ1In0.DKfQaXX71lzGlZE1eZ2BjQ";


    // Make a request for a user with a given ID
    axios.get(`https://api.mapbox.com/directions-matrix/v1/mapbox/cycling/-122.42,37.78;-122.45,37.91;-122.48,37.73?sources=0;2&destinations=all&access_token=${mapboxApiAccessToken}`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        //     <button onClick={getlocate}>Click</button>
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={
                "pk.eyJ1IjoidHJpcHRpbmluamFzMSIsImEiOiJja3VlODJtdGgwNXc0MnpxZThwNjR2NWZ1In0.DKfQaXX71lzGlZE1eZ2BjQ"
            }
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
        ></ReactMapGL>
    );
}
// https://api.mapbox.com/directions-matrix/v1/mapbox/cycling/-122.42,37.78;-122.45,37.91;-122.48,37.73?sources=0;2&destinations=all&access_token=pk.eyJ1IjoidHJpcHRpbmluamFzMSIsImEiOiJja3VlODJtdGgwNXc0MnpxZThwNjR2NWZ1In0.DKfQaXX71lzGlZE1eZ2BjQ