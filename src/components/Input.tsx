import React, { useState } from 'react'

interface Props {
    showDiv: boolean;
}

const Input: React.FC<Props> = ({showDiv}) => {
    const [searchWord, setSearchWord] = useState("");
    return (
        <div>
            <input
                type='text'
                data-testid='searchBar'
                placeholder='Search'
                onChange={(e) => {setSearchWord(e.target.value)}}
            />

            <h1 data-testid='displaySearch'>{searchWord}</h1>

            {showDiv && (
                <div data-testid='divWeWantToShow'>
                    Hello World
                </div>
            )}
        </div>
    )
}

export default Input;
