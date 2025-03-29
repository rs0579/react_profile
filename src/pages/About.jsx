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
                <p className="about-text">Detail-oriented and technically skilled Junior Software Engineer with a strong foundation in full-stack web development, specializing in ReactJS, NodeJS, TypeScript, and databases (MongoDB, MySQL, Postgres, Sequelize, GraphQL). Adept at building scalable and user-friendly applications, integrating frontend and backend technologies to create seamless user experiences. Possessing strong problem-solving and analytical skills, Experienced in Agile development, collaboration, and version control (GitHub), ensuring high-quality code and efficient teamwork.
                </p>
            </section>
{/*             
            <section className="about-section">
                <p className="about-text"> Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !… noblesse, fortune, un rang, des places, tout cela rend si fier ! Qu’avez-vous fait pour tant de biens ? vous vous êtes donné la peine de naître, et rien de plus : du reste, homme assez ordinaire ! tandis que moi, morbleu, perdu dans la foule obscure, il m’a fallu déployer plus de science et de calculs pour subsister seulement, qu’on n’en a mis depuis cent ans à gouverner toutes les Espagnes ; et vous voulez jouter ! <span>-Pierre-Augustin Caron de Beaumarchais</span></p>
            </section> */}
            <section className="about-section">
                <p className="about-text">
                <span className="show">Tech-Savvy Professional with Global Experience in EdTech, Logistics, and E-Commerce</span>

                <p>Based between Paris and Dallas, I bring a unique international perspective to the tech industry. Having lived and worked across France—including Paris, Cannes, Nantes, and Tours—I have gained deep cross-cultural experience in both the American and French markets.</p>

                My background spans higher education, where I worked with leading universities in both countries, as well as hands-on experience in logistics with a major American e-commerce company. This combination has fueled my passion for leveraging technology to drive innovation in <span className="show">EdTech, logistics technology, and e-commerce solutions.</span>

                With a global outlook and a strong foundation in tech-driven industries, I’m eager to connect with forward-thinking teams shaping the future of software development in these spaces. Let’s build something impactful!
                </p>
            </section>
        </div>
    )
}

