import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = ({ links, img, title, description, source, date }) => (
    <>
        <>
            <NavLink to={links} className='underline-none' target='_blank'>
                <div className="card-header p-2 relative">
                    <figure>
                        {img ? (<img src={img} alt="img" className='h-52 aspect-video text-center mx-auto' loading='lazy' />) : <img src='https://etstatic.tnn.in/thumb/msid-108920349,width-1280,height-720,resizemode-75/108920349.jpg' alt="img" className='h-52 aspect-video' loading='lazy' />}
                    </figure>
                    <div className="absolute inline-flex items-center justify-center w-auto h-auto text-[10px] text-white bg-red-600 border-2 p-1 border-none font-openSans font-normal rounded-full -top-3.5 -left-0 dark:border-gray-900">
                        {source}
                    </div>
                </div>
                <hr className='border-b-1 border-gray-300 ' />
                <div className="card-body mx-4 py-3">
                    {/* date */}
                    <h5 className="text-gray-200 font-openSans text-sm font-bold">
                        {date}
                    </h5>
                    {/* title */}
                    {title.length > 90 ? (
                        <h4 className='font-openSans leading-5 font-bold text-gray-200 text-sm mt-2'>{title.slice(0, 100)}...</h4>
                    ) : title.length < 0 ? (
                        <h4 className='font-openSans leading-5 font-bold text-gray-200 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt omnis hic quasi quidem aliquid, illo ducimus delectus officia sint!</h4>
                    ) : (
                        <h4 className='font-openSans leading-5 font-bold text-gray-200 text-sm mt-2'>{title}</h4>
                    )}
                    {/* description */}
                    <div className="card-text pt-3">
                        {description && description.length > 200 ? (<>
                            <h4 className='font-openSans leading-5 font-normal text-[14px] text-gray-200 text-sm mt-2'>{description.slice(0, 200)}... <span className='underline'>click to read more</span> </h4>
                        </>) : description === null ? (
                            <h4 className='font-openSans leading-5 font-normal text-[14px] text-gray-200 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt omnis hic quasi quidem aliquid, illo ducimus delectus officia sint!</h4>
                        ) : (
                            <h4 className='font-openSans leading-5 font-normal text-[14px] text-gray-200 text-sm mt-2'>{description}</h4>
                        )}
                    </div>
                    {/* author */}
                </div>
            </NavLink>
        </>
    </>
)

export default Cards