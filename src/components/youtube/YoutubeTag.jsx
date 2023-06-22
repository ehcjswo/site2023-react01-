import React from 'react';

const youtubeTag = [
    {
        name: "한식"
    },{
        name: "중식"
    },{
        name: "일식"
    },{
        name: "양식"
    },{
        name: "뉴진스"
    }
]

const YoutubeTag = ({ onSearch }) => {
    function btnClick(e) {
        onSearch(e.target.innerText)
    }
    return (
        <div className="youtube__tag Nanum5">
            <div>
                {youtubeTag.map((tag, index) => (
                    <button onClick={btnClick} key={index}>
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default YoutubeTag;
