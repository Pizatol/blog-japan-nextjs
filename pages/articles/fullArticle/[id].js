import FullArticle from "../../../components/FullArticle";

export default function id(props) {
    const data = props.data[0];

    return (
        <div>
            <FullArticle
                id={data.id}
                title={data.title}
                subtitle={data.subtitle}
                body={data.body}
                body2={data.body2}
                body3={data.body3}
                date={data.date}
                localisation={data.localisation}
                img={data.img}
                img2={data.img2}
                img3={data.img3}
            />
        </div>
    );
}

export async function getStaticProps(context) {
    const ID = context.params.id;
    const id = parseInt(ID);

    const param = context.params.localisation;
    console.log(param);

    const dataJson = await import(`../../../data/dataJson`);

    const data = dataJson.posts.filter((post) => post.id === id);

    return {
        props: { data },
    };
}

export async function getStaticPaths() {
    const res = await import(`../../../data/dataJson`);
    const data = res.posts;

    const paths = data.map((post) => {
        return {
            params: {
                id: `${post.id}`,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}
