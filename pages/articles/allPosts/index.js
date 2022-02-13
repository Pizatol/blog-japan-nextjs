
import React from 'react';
import style from './allPosts.module.css'
import Link from 'next/link'
import Blogitem from '../../../components/blogItem';
import { useRouter } from 'next/router'

export default function allPosts({data}) {

const router = useRouter()



  return <div className={style.globalContainer}>

	<h1 className={style.titre} > Tous les articles :</h1>
			<div className={style.cardContainer} >

				{data.map((e, index) => (	
						
					<div  key={index}>
					<Link href={`../../articles/fullArticle/${e.id}`}>
					<a>
						<Blogitem 
							id = {e.id}
							img = {e.img}
							title = {e.title}
							subtitle = {e.subtitle}
							date = {e.date}
							body = {e.body}
							localisation = {e.localisation}
							tag = {e.tag}
						/>
					</a>
					</Link>
					</div>

				))  }
			</div>

				
				
  </div>;
}

export async function getStaticProps(){

	const res = await import("../../../data/dataJson")
	const data = res.posts

	return {
		props : {data} 
	}
}
