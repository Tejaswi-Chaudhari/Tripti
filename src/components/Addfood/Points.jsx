import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { Card } from 'react-bootstrap'

const Points = ({lat, lon, add1, add2, city}) => {
        const a = lat;
        const a1 = Object.values(a);
        const a2 = parseFloat(a1);
        const b = lon;
        const b1 = Object.values(b);
        const b2 = parseFloat(b1);
        console.log(a2, b2, add1, add2, city)
    return (
        <Marker position={[a2, b2]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
            <Popup>
                <Card>
                    <Card.Body>
                    <Card.Title>Address :</Card.Title>
                    <Card.Text>{add1 + ', ' + add2 + ', ' + city}</Card.Text>
                    </Card.Body>
                </Card>
            </Popup>
        </Marker>
    )
}

export default Points