'use client'
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {BannerImg} from "@/constants";

const ImageMotion = () => {
    return (
        <div
            className="relative h-full px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                }}>
                <Image
                    className="w-auto h-auto object-contain max-h-full"
                    src={BannerImg}
                    alt="BannerImg"
                />
            </motion.div>
        </div>
    )
}

export default ImageMotion;