import React from 'react'

function Result({result}) {
    const posterurl ='http://image.tmdb.org/t/p/w500';
    return (
        <div className='result'>
            <img src=  {(`${posterurl + result.poster_path}`)} />
            <h3>{result.title}</h3>
        </div>
    )
}

export default Result
