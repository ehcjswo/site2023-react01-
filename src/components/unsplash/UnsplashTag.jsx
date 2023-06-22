import React from "react";
import { Link } from 'react-router-dom';

const info = [
    {
        id:"1",
        title: "night"
    },{
        id:"2",
        title: "star"
    },{
        id:"3",
        title: "city"
    },{
        id:"4",
        title: "flower"
    },{
        id:"5",
        title: "car"
    }
]

const UnsplashTagList = ({title}) => {
    return (
        <li>
            <Link to="/">{title}</Link>
        </li>
    )
}

const UnsplashTag = () => {
    return (
        <div className="unsplash__tag">
            <ul>
                {info.map((tag, index) => (
                    <UnsplashTagList key={index} title={tag.title} />
                ))}
            </ul>
        </div>
    );
};

export default UnsplashTag;
