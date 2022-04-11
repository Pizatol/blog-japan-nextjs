import React from "react";
import style from "./About.module.css";
import Image from "next/image";
import nous from "/public/imgNous/nous.jpg";

export default function About() {
    return (
        <>
            <div className={style.presentationContainer}>
                {/*  ************ TEXTE ************** */}
                <div className={style.presentationWrite}>
                    <h3 className={style.presentationSubtitle}>
                        Qui sommes nous ?
                    </h3>
                    <p className={style.presentationTxt}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sunt distinctio nesciunt aliquid a laudantium,
                        exercitationem doloribus accusantium iusto et fugit
                        necessitatibus impedit officiis ipsam ratione ad eos,
                        praesentium quia veniam numquam. Voluptatem provident
                        molestiae obcaecati in distinctio suscipit
                        necessitatibus mollitia cumque ullam sapiente, omnis
                        autem debitis illum velit libero enim at iusto quo
                        consequuntur labore, culpa aut tempora. Neque recusandae
                        facilis asperiores architecto veniam provident
                        distinctio vero ipsa ex reprehenderit qui, corporis odit
                        nihil officiis vel exercitationem excepturi molestiae
                        itaque! Dolorem exercitationem quisquam magni harum.
                        Tempore impedit, nulla amet illo eius consectetur
                        pariatur est accusamus ab facere cupiditate ea alias?
                        Sunt, laudantium libero quod, vero et animi natus optio
                        tenetur ullam dolorem, perferendis corporis maxime
                        numquam! Corporis, id. Deleniti atque ipsa quis, dolores
                        fugiat alias temporibus perspiciatis esse adipisci,
                        omnis maxime? Non perspiciatis temporibus odio error,
                        voluptates voluptatibus sunt saepe, tenetur accusantium
                        illo est magnam praesentium eos, in ut maxime.
                    </p>
                </div>

                {/*  ************ IMAGE ************** */}

                <div className={style.presentationImg}>
                    <Image
                        className={style.img}
                        src={nous}
                        width={1280}
                        height={960}
                        layout="responsive"
                        alt="image personnelle"
                    />
                </div>
            </div>
        </>
    );
}
