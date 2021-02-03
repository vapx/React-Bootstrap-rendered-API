import React  from 'react';

export default function Navheading(props) {
        return (
            <div className="m-5">
                <h1 style={{textAlign:'center', fontFamily: 'Big Shoulders Display',fontSize:'80px'}}>{props.heading}</h1>
            </div>
        )
}

