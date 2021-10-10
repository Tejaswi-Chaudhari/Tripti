import React from 'react'
import './addfood.css'
import img1 from "../../media/img1.jpg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button, Form, Col, Image } from "react-bootstrap";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const points = () => {
    
}

const Addfood = () => {

    const l1 = localStorage.getItem('latitude')
    const l2 = localStorage.getItem('longitude')
    return (<>
        <MapContainer style={{ height: '75vh' }} center={[l1, l2]} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[l1, l2]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </>
        // <div className="main-container">
        //     <center>
        //     <Image src={img1} className="img1-el" alt="image here" />
        //     </center>
        //     <div id="form-id" className="about">
        //         <Form className="form-el form-1 about">
        //             <div className="addfood container">
        //                 <Form.Group className="address-el form" controlId="formGridAddress1">
        //                     <Form.Label>Address</Form.Label>
        //                     <Form.Control className="control-el" placeholder="1234 Main St ,Apartment, studio, or floor" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group as={Col} className="zipcode-el form" controlId="formGridZip">
        //                     <Form.Label>Zip Code</Form.Label>
        //                     <Form.Control className="control-el" placeholder="400000" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group className="whatfood-el form" controlId="exampleForm.ControlTextarea1">
        //                     <Form.Label>What type of food you will donate?</Form.Label>
        //                     <Form.Control as="textarea" className="control-el" rows={3} placeholder="Rice, cury, vegetable, chapati" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group as={Col} className="howMuchfoodel form" controlId="formGridZip">
        //                     <Form.Label>How much you will donate?(in kg)</Form.Label>
        //                     <Form.Control className="control-el" placeholder="" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group className="checkbox-el form" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="I assure you that food is fresh and edible" />
        //                 </Form.Group>
        //             </div>
        //             <div className="addfood container">
        //                 <Button className="button-el btn form" variant="primaryel" type="submit">
        //                     Submit
        //                 </Button>
        //             </div>
        //         </Form>
        //     </div>
        // </div>
    )
}

export default Addfood