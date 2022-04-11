import Link from "next/link";
import Image from "next/image";

import ScrollTop from "./ScrollTop";
import menu from "/public/assets/menu.svg";
import style from "./Navbar.module.css";

import header from '../public/assets/header.jpg'
import band from '../public/assets/band.jpg'

import { useState, useRef } from "react";

export default function Navbar({ children }) {
    const [toggle, setToggle] = useState(true);

    const toggleButton = () => {
        setToggle(!toggle);
    };

    return (
        <div className={style.containerGlobal}>
            <div className={style.headBand}>
                <Image
                    src={band}
                    width={2600}
                    height={900}
                    layout="fixed"
                    placeholder="blur"
                />
            </div>

            {/* ********** NAVBAR */}

            <div className={style.containerGlobal}>
            <button onClick={toggleButton} className={style.buttonMenu}>
                <Image src={menu} width={36} height={36} alt="menu button" />
            </button>

                <nav
                    className={
                        toggle
                            ? style.navContainer
                            : style.navContainerInvisible
                    }
                >
                    <Link href="/">
                        <a className={style.accueil}>Accueil</a>
                    </Link>

                    <div className={style.voyagerNav}>
                        <button className={style.accueil}>Voyager</button>
                        <ul>
                            <Link 
                            ville = "Tokyo"
                            href="/articles/postLieux/Tokyo">
                                <a className={style.link}>Tokyo</a>
                            </Link>
                            <Link href="/articles/postLieux/Kyoto">
                                <a className={style.link}>Kyoto</a>
                            </Link>
                            <Link href="/articles/postLieux/Hiroshima">
                                <a className={style.link}>Hiroshima</a>
                            </Link>
                            
                        </ul>
                    </div>
                    <div className={style.mangerNav}>
                        <button className={style.accueil}>Manger</button>
                        <ul>
                            <Link href="/articles/postRestaurants/Tokyo">
                                <a className={style.link}>Tokyo</a>
                            </Link>
                           
                        </ul>
                    </div>
                    <Link href={"/About"}>
                        <a className={style.accueil}>A propos</a>
                    </Link>
                    <Link href="/articles/allPosts">
                                <a className={style.accueil}>Tous les articles</a>
                            </Link>
                </nav>
            </div>
                <ScrollTop/>
            {children}
        </div>
    );
}
