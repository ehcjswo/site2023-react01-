import React from "react";

const movieTags = [
    {
        name: "코미디",
        url: "https://api.themoviedb.org/3/tv/latest"
    },{
        name: "러브",
        url: "https://api.themoviedb.org/3/tv/latest"
    },{
        name: "액션",
        url: "https://api.themoviedb.org/3/tv/latest"
    },{
        name: "공포",
        url: "https://api.themoviedb.org/3/tv/latest"
    },{
        name: "애니메이션",
        url: "https://api.themoviedb.org/3/tv/latest"
    }
]

const MovieTag = ({ onSearch }) => {
    function btnClick(e) {
        onSearch(e.target.innerText)
    }
    return (
        <div className="movie__tag Nanum5">
            <div>
                {movieTags.map((tag, index) => (
                    <button onClick={btnClick} key={index}>
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MovieTag;


