import React from "react";

const unsplashTags = [
    {
        name: "food"
    },{
        name: "chef"
    },{
        name: "beef"
    },{
        name: "cook"
    },{
        name: "cookie"
    }
]

const UnsplashTag = ({ onSearch }) => {
    function btnClick(e) {
        onSearch(e.target.innerText)
    }
    return (
        <div className="unsplash__tag Nanum5">
            <div>
                {unsplashTags.map((tag, index) => (
                    <button onClick={btnClick} key={index}>
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UnsplashTag;

