import BlogitemGrand from "../../../../components/blogItemGrand";
import style from "../ville.module.css";
import Link from "next/link";

export default function Index({ data }) {
	
    const filteredPosts = data.filter((e) => e.localisation === "Hiroshima");

    return (
        <div>
            <h1 className={style.titre}>Articles de la région de Hiroshima</h1>
            <div className={style.postContainer}>
                {filteredPosts.map((e, index) => (
                    <Link key={index} href={`/articles/fullArticle/${e.id}`}>
                        <a>
                            <BlogitemGrand
                                key={e.id}
                                name={e.name}
                                subtitle={e.subtitle}
                                img={e.img}
                                date={e.date}
                                title={e.title}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await import("../../../../data/dataJson");
    const data = res.posts;

    return {
        props: { data },
    };
}
