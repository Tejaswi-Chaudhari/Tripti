import React from 'react'
import "./donate.css";
import girl from "../../media/donate.jpg"


function Donate() {
    return (
        <div className="container">
            <div className="leftside">
                <h1 className="topic">We need your help💖</h1>
                <h6 className="para">
                    As a nonprofit,we rely on donations to provide food and the kind of health care kids deserve:highky specialized,compassinate,family-centered and customized to the special health needs of children.
                </h6>
                <h5>🙌100% of your donation will be spent on the kids and families that are counting on you.
                </h5>
            </div>
            <div className="image-location">
                <img src={girl} />
            </div>
            <a href='https://rzp.io/l/dkqGdj0F'>
                <button type="button" className="btn btn-info">Donate Now</button>
                <button type="button" className="btn btn-info">$Bitcoin Donation</button>
            </a>
        </div >
    )
}

export default Donate
