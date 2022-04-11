import React from "react";
import style from "./FullArticle.module.css";
import Image from "next/image";
import ScrollTop from "./ScrollTop";

export default function FullArticle(props) {
    const dataImg = [];
    dataImg.push(props.img, props.img2, props.img3);

    return (
        <>
            <div className={style.containerGlobal}>
                <div className={style.imgContainer}>
                    <Image
                        src={props.img}
                        width={1200}
                        height={1000}
                        layout="intrinsic"
                        alt=" image 1 "
                    />
                </div>

                <h1 className={style.title}>{props.title}</h1>
                <h3 className={style.subtitle}>{props.subtitle} </h3>

                <p className={style.body}>{props.body} </p>

                <div className={style.imgContainerMiddle}>
                    <Image
                        src={props.img2}
                        width={1200}
                        height={1000}
                        layout="intrinsic"
                        alt="image 3"
                    />
                </div>

                <p className={style.body}>{props.body2} </p>

                <div className={style.imgContainerMiddle}>
                    <Image
                        src={props.img3}
                        width={1200}
                        height={1200}
                        layout="intrinsic"
                        alt="image 3"
                    />
                </div>

                <p className={style.body}>{props.body3} </p>

                <p className={style.date}> posté le : {props.date} </p>

                <ScrollTop />
            </div>
        </>
    );
}
