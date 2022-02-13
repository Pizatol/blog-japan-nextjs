import React from "react";
import scrollArrow from "/public/assets/arrowTop.svg";
import style from "./ScrollTop.module.css";
import Image from "next/image";

export default function () {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            
            <button className={style.btn} onClick={scrollTop}>
                <Image src={scrollArrow} width={30} height={30} />
                
            </button>
            
          
        </>
    );
}
