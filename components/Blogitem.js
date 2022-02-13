import React from "react";
import style from "./Blogitem.module.css";
import Image from "next/image";



export default function Blogitem(props) {

    return (
        <div className={style.itemContainer}>

            <div className={style.imgBlogitem}>
                <Image
                    className={style.imgBlogitem}
                    src={props.img}
                    width={350}
                    height={350}
                    layout="intrinsic"
                />
            </div>
            <div className={style.bottomBlogitem}>
            <h3 className={style.titleBlogitem}>{props.title}</h3>
            <h4 className={style.subtitleBlogitem} >{props.subtitle}</h4>
            <p>Posté le : {props.date}</p>
            </div>
        </div>
    );
}
