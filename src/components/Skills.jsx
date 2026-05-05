
import React from 'react'
import { motion } from "framer-motion";

import HTML from "../assets/HTML.png"
import css from "../assets/CSS.png"
import js from "../assets/Javascript.svg"
import react from "../assets/React.png"
import Redux from "../assets/Redux.svg"
import Chart from "../assets/ChartJs.svg"
import node from "../assets/NodeJs.svg"
import express from "../assets/Express.png"
import MongoDB from "../assets/MongoDB.svg"
import cloudinary from "../assets/cloudinary.webp"
import Jwt from "../assets/jwt.png"
import tailwind from "../assets/Tailwind.png"
import Git from "../assets/Git.svg"
import Github from "../assets/Github.svg"
import MaterialUi from "../assets/MaterialUI.svg"
import Postman from "../assets/postman.svg"
import Bootstrap from "../assets/Bootstrap.svg"
import Vercel from "../assets/Vercel.svg"
import Aws from "../assets/aws.png"
export default function Techstack() {
    return (

        <div
            className="mt-8  bg-gradient-to-br relative from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
            <div className='w-full flex gap-x-8 gap-y-6 h-full  justify-center items-end flex-wrap'>
                <img src={HTML} loading='lazy' className='tech-icon' />
                <img src={css} loading='lazy' className='tech-icon' />
                <img src={js} loading='lazy' className='tech-icon' />
                <img src={Github} loading='lazy' className='tech-icon bg-white  rounded-full' />
                <img src={Bootstrap} loading='lazy' className='tech-icon' />
                <img src={tailwind} loading='lazy' className='tech-icon' />
                <img src={react} loading='lazy' className='tech-icon' />
                <img src={MaterialUi} loading='lazy' className='tech-icon' />
                <img src={Redux} loading='lazy' className='tech-icon' />
                <img src={Chart} loading='lazy' className='tech-icon' />
                <img src={node} loading='lazy' className='tech-icon' />
                <img src={express} loading='lazy' className='tech-icon' />
                <img src={MongoDB} loading='lazy' className='tech-icon' />
                <img src={cloudinary} loading='lazy' className='tech-icon' />
                <img src={Jwt} loading='lazy' className='tech-icon' />
                <img src={Aws} loading='lazy' className='tech-icon  rounded-full' />
                <img src={Git} loading='lazy' className='tech-icon' />
                <img src={Postman} loading='lazy' className='tech-icon  rounded-full' />
                <img src={Vercel} loading='lazy' className='tech-icon bg-white  rounded-full' />

            </div>
        </div>


    )
}
