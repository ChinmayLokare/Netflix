import React from 'react'
import CardSlider from './CardSlider';

export default React.memo(function Slider({ movies }) {
    const getMoviesFromRange = (from, to) => {
        console.log(movies);
        return movies?.slice(from, to);
    };

    const sliderTypes = [
        {
            title: "Trending Now",
            from: 0,
            to: 10,
        },
        {
            title: "New Releases",
            from: 10,
            to: 20,
        },
        {
            title: "Blockbuster Movies",
            from: 20,
            to: 30,
        },
        {
            title: "Popular On Netflix",
            from: 30,
            to: 40,
        },
        {
            title: "Action Movies",
            from: 40,
            to: 50,
        },
        {
            title: "Epics",
            from: 50,
            to: 60,
        },
    ];
    return (
        <div>
            {console.log(movies)}
            {sliderTypes?.map((t) => {
                return <CardSlider title={t.title} data={getMoviesFromRange(t.from, t.to)} />;
            })}
        </div>
    )
});

