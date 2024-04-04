import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import Cards from '../Components/Cards';
import Loader from '../Components/Loader';
const Business = () => {
    const key = import.meta.env.VITE_API_SECRET_KEY;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    let pageSize = 8;
    document.title = 'Business';
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    // GET API RESULT FROM RANDOM COUNTRY
    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}&pageSize=${pageSize}&page=${page}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response && response.status === 200) {
                    const shuffledData = shuffle(response.data.articles);
                    setData(shuffledData);
                }
            } catch (err) {
                if (err.response && err.response.data && err.response.data.message) {
                    setError(err.response.data.message);
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        })()
    }, [])
    // error
    if (error) {
        return <h1>{error}</h1>
    }
    // loading
    if (loading) {
        return <Loader />
    }
    // handle next click
    const handleNextClick = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}&pageSize=${pageSize}&page=${page + 1}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response && response.status === 200) {
                const newData = response.data.articles;
                // If there are new articles fetched, update the data
                if (newData.length > 0) {
                    setData(newData);
                    setPage(page + 1);
                } else {
                    // No more articles available
                    console.log("No more articles available");
                }
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };
    // handle previous click
    const handlePrevClick = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}&pageSize=${pageSize}&page=${page - 1}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response && response.status === 200) {
                const newData = response.data.articles;
                // If there are new articles fetched, update the data
                setData(newData);
                setPage(page - 1);
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <main className='bg-black py-28 my-0'>
                <h1 className='text-center text-gray-100 font-openSans text-2xl font-bold leading-rela'>
                    NDTV &gt; <span className='text-red-600'>Business</span>
                </h1>
                <p className="text-gray-300 leading-relaxed md:w-3/4 w-auto mx-auto mt-6 text-justify md:text-center md:px-0 px-6 md:text-[18px] text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima natus tempora quas et maxime quibusdam similique esse, ut voluptatibus eum iste explicabo quasi earum enim, atque beatae odio non quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi nobis earum ea quis. Mollitia libero, ea totam, doloremque eum at eos amet dicta, corrupti quisquam cumque quae suscipit error.
                </p>
            </main>
            {/* sections */}
            <main className='bg-gray-100 p-0 my-0'>
                <section className="container py-10 md:px-20 px-3">
                    <h1 className='text-[40px] font-medium text-gray-800 text-center font-sans capitalize'>
                        Our <span className='text-red-600 font-semibold underline'>latest articles:</span>
                    </h1> <br /> <br />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-auto">
                        {data.map((item, i) => (
                            <div className='rounded-lg bg-gray-900 w-auto' key={i}>
                                <Cards
                                    links={item.url}
                                    img={item.urlToImage}
                                    date={item.publishedAt}
                                    title={item.title}
                                    description={item.description}
                                    source={item.source && item.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <div className="flex justify-center my-4">
                <button className={`px-3 py-1 mx-2 font-openSans rounded ${page <= 1 ? 'bg-gray-300 text-black cursor-not-allowed' : 'bg-red-600 text-white'}`} disabled={page <= 1} onClick={handlePrevClick}>Prev</button>
                <button className={`px-3 py-1 mx-2 rounded font-openSans ${data.length < pageSize ? 'bg-gray-300 text-black cursor-not-allowed' : 'bg-red-600 text-white '}`} disabled={data.length < pageSize} onClick={handleNextClick}>Next</button>
            </div>
        </>
    )
}

export default Business