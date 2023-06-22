import React from 'react';

const YoutubeItem = ({ youtube }) => {
    return (
        <li>
            <a href={`https://youtube.com/watch?v=${youtube.id.videoId}`} target='_black' >
                <img src={youtube.snippet.thumbnails.medium.url} alt="youtube" />
            </a>
            <a href={`https://youtube.com/watch?v=${youtube.id.videoId}`} target='_black'>
                <span>{youtube.snippet.title}</span>
            </a>
        </li>
    );
};

const youtubeCont = ({ youtubes }) => {
    return (
        <div className="youtube__cont container">
            <ul>
                {youtubes.map((youtube, index) => (
                    <YoutubeItem key={index} youtube={youtube} />
                ))}
            </ul>
        </div>
    );
};

export default youtubeCont;
