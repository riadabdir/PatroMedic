import React from 'react';

const Service = (props) => {
    const { key, name, img, description } = props.service;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} className="card-img-top img-fluid" width="100%" alt="Service Img" />
                <div className="card-body">
                    <h5>{key}</h5>
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success w-100">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;