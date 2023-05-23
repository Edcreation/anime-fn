import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Comments from './Comments/Comments';
import { Spinner } from '../../components';
import { useSingleMovie } from '../../hooks/fetchMovies';

type Id = {
    id: string
}

function SinglePage() {
    const { id } = useParams<Id>()
    const movie = useSingleMovie(id)
    if (movie.loading) {
        return <Spinner  />
    }
    else {
        return <SinglePageHolder
        data-testid="SinglePage" 
        image={movie.movie.images.jpg.image_url} 
        title={movie.movie.title} 
        type={movie.movie.type}  
        status={movie.movie.status}
        synopsis={movie.movie.synopsis}
        trailer={movie.movie.trailer}
        streaming={movie.movie.streaming}
        />
    }
}

type MOVIE = { 
    image: string, 
    title: string, 
    type: string, 
    status: string,
    synopsis: string, 
    trailer: {
        url: string,
        embed_url: string,
    }, 
    streaming : {
        name: string,
        url: string
    }[]
}

export function SinglePageHolder(movie: MOVIE) {
    const { image, title, type, synopsis, trailer, streaming, status  } = movie
    const [isExpanded, setIsExpanded] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        setText(synopsis.slice(0, 300));
    }, [synopsis]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
        isExpanded ?
        setText(synopsis.slice(0, 300)) :
        setText(synopsis)
    }

    return (
        <div className="w-full h-max bg-slate-300 text-slate-950 dark:bg-slate-900 p-5">
                <div className="w-full overflow-hidden">
                    <div style={{
                        backgroundImage:
                        `url(${movie.image})`,
                        filter: 'blur(8px)',
                        scale: '1.1'
                    }} className="w-full backdrop-blur-lg bg-cover bg-center h-96">
                    </div>
                    <div className="w-64 h-auto m-3 border border-slate-500 top-40 absolute z-10 text-gray-800 bg-slate-200 dark:bg-gray-800 dark:text-slate-200">
                        <img src={`${image}`} className="w-full" alt="" />
                        <p className="w-full text-xl p-2 text-center" >
                            {title}
                        </p>
                        <div className="w-full p-2 flex items-center justify-center flex-row">
                            <div className="w-1/2">{status}</div>
                            <div className=""><p className="p-1  rounded  bg-blue-700">{type}</p></div>
                        </div>
                    </div>
                </div>
                <div className="display flex flex-col md:justify-between md:flex-row border border-slate-700 mt-10 ">
                    <div className=" pt-36 p-5 md:pb-10 text-lg text-slate-900 dark:text-slate-200">
                        <h1  className="text-2xl underline m-3">Synopsis</h1>
                        <p data-testid='expand' id='artDesc' className="mb-10 max-w-md text-sm">{text} {isExpanded ? <button className="p-1  text-red-600" onClick={toggleExpansion}>...Read Less</button> : <button className="p-1  text-green-600" onClick={toggleExpansion}>...Read More</button>}</p>
                        <button  className="p-2 text-sm bg-green-600 mb-5 text-slate-200" disabled><i className="fa fa-film" aria-hidden="true"></i> Watch</button>
                        <div className="w-full grid grid-cols-2  gap-2">
                            {streaming.map((source: { url: string, name: string }) => <a href={`${source.url}`} key={source.url} className="p-2 text-xs md:mr-5 border flex items-center justify-center border-slate-600 bg-red-600 text-slate-200" target="_blank"><i className="fa fa-film mr-1" aria-hidden="true"></i>{source.name}</a>) }
                        </div>
                    </div>
                    <div className="w-full p-2 md:max-w-2xl">
                        <iframe className="w-full aspect-video" src={trailer.embed_url}></iframe>
                    </div>
                </div>
                <Comments />
            </div>
    )
}

export default SinglePage