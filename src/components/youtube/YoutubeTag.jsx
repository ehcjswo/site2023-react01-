import React from 'react';

const info = [
    {
        id:"1",
        title: "코딩 애플"
    },{
        id:"2",
        title: "리액트"
    },{
        id:"3",
        title: "Next.js"
    },{
        id:"4",
        title: "javascript"
    },{
        id:"5",
        title: "뉴진스"
    }
]

const YoutubeTags = ({title}) => {
    return (
        <li>
            <a href="#">{title}</a>
        </li>
    )
}

const YoutubeTag = ({tag}) => {
    return (
        <div className="youtube__tag">
            <ul>
                {info.map((tag, index) => (
                    <YoutubeTags key={index} title={tag.title} />
                ))}
            </ul>
        </div>
    );
};

export default YoutubeTag;
