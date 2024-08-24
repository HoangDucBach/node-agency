'use client';

// External imports
import React from "react";
import { motion } from "framer-motion";

export default function PosterArea() {
    return (
        <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="md:text-9xl text-6xl font-bold text-start text-primary-300 break-words"
            style={{
                textShadow: '0px 25px 50px rgba(0, 112, 243, 0.40)'
            }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-primary-500">NODE </span>
            Marketing Agency
        </motion.h1>
    )
}