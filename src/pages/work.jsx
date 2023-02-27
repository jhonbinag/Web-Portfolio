import React from 'react' 
import workOne from '../assets/Proj1.png';
import workTwo from '../assets/Proj2.png';
import workThree from '../assets/Proj3.png';
import workFour from '../assets/Proj4.png';
import workFive from '../assets/Proj5.png';
import workSix from '../assets/Proj6.png';

const work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        {/*Container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center sm:text-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className="py-6">Check out some of my recent works</p>
            </div>
            {/*Card Container*/}
            <div className="grid sm:grid-cols-3 md:grid-3 gap-4">
                {/*Card Item*/}
                <div style={{backgroundImage: `url(${workOne})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            WordPress Sales Page
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://readinggenius.com/sp/sales-page/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='/'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workTwo})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            Groove Funnel Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.thefourgets.com/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='/'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workThree})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            WordPress Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.lightchangescoaching.com/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='/'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workFour})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            React JS Travel Web Agency
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://travel-website-ruddy.vercel.app//' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='https://github.com/jhonbinag/travel-website.git' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workFive})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            React JS Dark Theme Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://dark-theme-dashboard-seven.vercel.app/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='https://github.com/jhonbinag/Dark-Theme-Dashboard.git' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${workSix})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='font-2xl font-bold text-white tracking-wider'>
                            Angara Shopify Store
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://angara-1.myshopify.com/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</buttons>
                            </a>
                            <a href='/' target='_blank'>
                                <buttons className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</buttons>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default work
