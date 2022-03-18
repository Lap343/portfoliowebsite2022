/// NPM imports
import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
    initial: { 
        scale: 1,
    },
    animate: {
        scale: [0, 1],
        scaleX: [-1, 1],
        transition: { duration: 2 }
    }
}

const pathVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}


const WebsiteName = () => {
    return(
        <motion.svg 
            width="205" 
            height="35" 
            viewBox="0 0 205 35" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial='initial'
            animate='animate'
        >
            <motion.text 
                variants={pathVariants} 
                id="Mypcand.me" 
                fill="white" 
                fontFamily="Roboto" 
                fontSize="36" 
                letterSpacing="0em"
            >
                <tspan x="-2" y="27.3047">Mypcand.me</tspan>
            </motion.text>
        </motion.svg>
    )
}

export default WebsiteName;