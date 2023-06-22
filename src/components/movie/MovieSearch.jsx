import React, {useRef} from "react";

const MovieSearch = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch()
    }
    const onKeypress = (event) => {
        if(event.Key === "Enter"){
            handleSearch();
        }
    }
    return <div className="movie__search container">
        <h2 className="blind">검색하기</h2>
        <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeypress}
        placeholder="이미지를 검색하세요!" />
        <button type="submit" onClick={onClick} >검색하기</button>
    </div>;
};

export default MovieSearch;
