import React, { useEffect, useState } from 'react';
import './card.css'
import Layout from './layout/layout';
const Card = () => {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tahuruzzoha-tuhin/db/main/datadb.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, []);

    const [count, setCount] = useState(0);

    function handleCount(p) {
        const newCount = count + p;
        setCount(newCount);
    }

    return (
        <div className="card-layout">
            {

                person.map(x => <div
                    className="card"
                    style={{ width: '18rem' }}>
                    <img src={x.image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{x.name}</h5>
                        <p className="card-text">Designation: <i>{x.designation}</i></p>
                        <p className="card-text">Salary: <b>{x.salary}</b></p>
                        <a href="#" className="btn btn-success"><i class="fas fa-chart-bar"> Add Group</i></a>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;