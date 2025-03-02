import selfImage from "../assets/selfImage.jpg"

export default function About() {


    return (
        <div className="about-div">
            <h2>About Me</h2>
            <img
                className="about-img"
                src={selfImage}
                alt="Castellfollit de la Roca" />

            <section className="about-section">
                <p className="about-text"> Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !… noblesse, fortune, un rang, des places, tout cela rend si fier ! Qu’avez-vous fait pour tant de biens ? vous vous êtes donné la peine de naître, et rien de plus : du reste, homme assez ordinaire ! tandis que moi, morbleu, perdu dans la foule obscure, il m’a fallu déployer plus de science et de calculs pour subsister seulement, qu’on n’en a mis depuis cent ans à gouverner toutes les Espagnes ; et vous voulez jouter ! <span>-Pierre-Augustin Caron de Beaumarchais</span></p>
            </section>
            <section className="about-section">
                <p className="about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas corporis impedit optio accusamus doloremque quod repellat deleniti labore, incidunt officiis dicta natus aut tenetur, aliquam dolorem adipisci assumenda nisi.
                </p>
            </section>
        </div>
    )
}