import Link from "next/link";
import style from "../styles/Home.module.css";
import BlogItem from "../components/blogItem";

export default function Home({ data }) {
    return (
        <div className={style.homeContainer}>
            <h1 className={style.titre}>Bienvenue sur le blog ! </h1>

            <h3 className={style.subtitleIntro}>
                Bienvenues sur le blog des amateurs du Japon
            </h3>

            <p className={style.textIntro}>
                Vous découvrirez au fil de ces pages des endroits plus ou moins
                confidentiels, ainsi que des recette de cuisine japonaises,
                comme si vous étiez invités chez un hôte Japonais.{" "}
            </p>
            <p className={style.textIntro}>Laissez vous guider ...</p>

            {/* ARTICLES RECENTS */}

            <div className={style.latestArticles}>
                <h1 className={style.titrePresentation}> Derniers articles</h1>

                <div className={style.articlesCartContainer}>
                    <Link
                        href={`./articles/fullArticle/${
                            data[data.length - 1].id
                        }`}
                    >
                        <a>
                            <BlogItem
                                img={data[data.length - 1].img}
                                title={data[data.length - 1].title}
                                subtitle={data[data.length - 1].subtitle}
                                id={data[data.length - 1].id}
                                date={data[data.length - 1].date}
                            />
                        </a>
                    </Link>
                    <Link
                        href={`./articles/fullArticle/${
                            data[data.length - 2].id
                        }`}
                    >
                        <a>
                            <BlogItem
                                img={data[data.length - 2].img}
                                title={data[data.length - 2].title}
                                subtitle={data[data.length - 2].subtitle}
                                id={data[data.length - 2].id}
                                date={data[data.length - 2].date}
                            />
                        </a>
                    </Link>
                    <Link
                        href={`./articles/fullArticle/${
                            data[data.length - 3].id
                        }`}
                    >
                        <a>
                            <BlogItem
                                img={data[data.length - 3].img}
                                title={data[data.length - 3].title}
                                subtitle={data[data.length - 3].subtitle}
                                id={data[data.length - 3].id}
                                date={data[data.length - 3].date}
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await import("../data/dataJson.json");
    const data = res.posts;
    return {
        props: { data },
    };
}
