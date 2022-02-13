import React from "react";
import style from "./AllBlogitem.module.css";

import Blogitem from "./blogitem";
import dataBlog from "../data/dataBlog";

export default function AllBlogitem() {




    return (
        <div className={style.allBlogContainer}>
	
		{dataBlog.map((e) => (
            <Blogitem 
            key = {e.id}
            name = {e.name}
            subtitle = {e.subtitle}
            body = {e.body}
            img = {e.img}
            />
        ))}

           
        </div>
    );
}
