import React from 'react';

const info = [
    {
        id:"1",
        title: "코미디"
    },{
        id:"2",
        title: "러브"
    },{
        id:"3",
        title: "액션"
    },{
        id:"4",
        title: "공포"
    },{
        id:"5",
        title: "애니메이션"
    }
]

const MovieTags = ({title}) => {
    return (
        <li>
            <a href="#">{title}</a>
        </li>
    )
}

const MovieTag = ({tag}) => {
    return (
        <div className="movie__tag">
            <ul>
                {info.map((tag, index) => (
                    <MovieTags key={index} title={tag.title} />
                ))}
            </ul>
        </div>
    );
};

export default MovieTag;
