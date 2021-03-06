import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { key, name, img, description } = props.service;
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" width="100%" alt="Service Img" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/service/${key}`}>
                        <button className="btn btn-success w-100">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;