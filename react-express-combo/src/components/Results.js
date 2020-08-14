import React from 'react';
import Result from './Result';

function Results({resultsfromapi}) {
    return (
        <section className = 'results'>
         {
             resultsfromapi.map(result => {
            return <Result result={result} />
             })
         };
             

        </section>
    )
}

export default Results
