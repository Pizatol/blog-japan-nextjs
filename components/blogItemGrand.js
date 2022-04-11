import React from "react";
import style from "./BlogItemGrand.module.css";
import Image from "next/image";

export default function Blogitem(props) {


    return (
        <div className={style.itemContainer}>

            <div className={style.imgBlogitem}>
                <Image
                    className={style.imgBlogitem}
                    src={props.img}
                    width={1000}
                    height={1000}
                    layout="responsive"
                    alt={props.title}
                />
            </div>
            <div className={style.rightBlogitem}>
				
                <h3 className={style.titleBlogitem}>{props.title}</h3>
                <h4 className={style.subtitleBlogitem}>{props.subtitle}</h4>
                <p>Posté le : {props.date}</p>
            </div>
        </div>
    );
}
