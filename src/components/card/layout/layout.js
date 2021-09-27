import React from 'react';
import { useState } from 'react';
import Card from '../card';
const Layout = (props) => {

    return (
        <div className="d-flex">
            <div className="col-lg-9 m-5">
                <Card />
            </div>
            <div className="col-lg-3 mt-5">
                <h4>Salary: </h4>
                <p>Name: </p>
            </div>
        </div>
    );
};

export default Layout;