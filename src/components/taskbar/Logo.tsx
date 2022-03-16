/// NPM imports
import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    initial: { 
        rotate: -180,
    },
    animate: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    initial: {
        opacity: 0,
        pathLength: 0,
    },
    animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Logo = () => {
    return(
        <motion.svg 
            className='logo'
            width="500" 
            height="500" 
            viewBox="0 0 500 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial='initial'
            animate='animate'
            style={{originX: '50%', originY: '50%'}}
        >
            <g id="WebsiteIcon" clipPath="url(#clip0_2_4)">
                <circle id="background" cx="250" cy="250" r="242.5" fill="white" stroke="black" strokeWidth="16"/>
                <g id="person">
                    <motion.circle 
                        id="head" 
                        cx="216.011" 
                        cy="129.386" 
                        r="51.2044" 
                        fill="white" 
                        stroke="black" 
                        strokeWidth="14"
                        variants={pathVariants}
                    />
                    <motion.path 
                        id="arm" 
                        d="M138 195L216 292L315 292" 
                        stroke="black" 
                        strokeWidth="14" 
                        strokeLinecap="round"
                        variants={pathVariants}
                    />
                    <motion.path 
                        id="back" 
                        d="M182 171V171C71.8311 203.673 64.99 357.115 171.814 399.462L182 403.5" 
                        stroke="black" 
                        strokeWidth="14"
                        variants={pathVariants}
                    />
                    <motion.path 
                        id="leg" 
                        d="M387.5 403L296.5 345.5L181 403" 
                        stroke="black" stroke-width="14" stroke-linecap="round"
                        variants={pathVariants}
                    />
                    <motion.path 
                        id="laptop" 
                        d="M213.798 319.795L348.148 319.795L376.449 197.406" 
                        stroke="black" 
                        strokeWidth="14" 
                        strokeLinecap="round"
                        variants={pathVariants}
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_2_4">
                    <rect width="500" height="500" fill="white"/>
                </clipPath>
            </defs>
        </motion.svg>
    )
}

export default Logo;