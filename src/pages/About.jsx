import selfImage from "../assets/selfImage.jpg"

export default function About() {


    return (
        <div className="about-div">
            <h2>About Me</h2>
            <img
                // className="about-img"
                 className="h-96 w-96 rounded-full object-cover object-center"
                src={selfImage}
                alt="Castellfollit de la Roca" />

<section className="about-section">
                <p className="about-text" id="about-section-one">
                <span className="show">Tech-Savvy Professional with Global Experience in EdTech, Logistics, and E-Commerce</span>

                <p><br />An American professional with a strong international footprint, I split my time between Paris, France, and Dallas, Texas, bringing a unique global perspective to the tech industry. Having lived and worked across France—including Paris, Cannes, Nantes, and Tours—I have developed deep cross-cultural experience in both the American and French markets. Fluent in French (near-native), Spanish, and Portuguese, I also have a strong command of Russian and Levantine Arabic, allowing me to collaborate effectively across diverse teams and global markets.</p>

                My background spans higher education, where I worked with leading universities in both countries, as well as hands-on experience in logistics with a major American e-commerce company.<br /> This combination has fueled my passion for leveraging technology to drive innovation in <span className="show">EdTech, logistics technology, and e-commerce solutions.</span>

                </p>
            </section>

            <section className="about-section">
                <p className="about-text" id="about-section-two">Detail-oriented and technically skilled Junior Software Engineer with a strong foundation in full-stack web development, specializing in ReactJS, NodeJS, TypeScript, and databases <span className="show">(MongoDB, MySQL, Postgres, Sequelize, GraphQL)</span>.<br /> Adept at building scalable and user-friendly applications, <span className="show">integrating frontend and backend technologies</span> to create seamless user experiences. Possessing strong problem-solving and analytical skills, Experienced in Agile development, collaboration, and version control (GitHub), ensuring high-quality code and efficient teamwork. <br />
                
                With a global outlook and a strong foundation in tech-driven industries, I’m eager to connect with forward-thinking teams shaping the future of software development in these spaces. Let’s build something impactful!
                </p>
            </section>
            
            {/* <section className="about-section">
                <p className="about-text"> Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !… noblesse, fortune, un rang, des places, tout cela rend si fier ! Qu’avez-vous fait pour tant de biens ? vous vous êtes donné la peine de naître, et rien de plus : du reste, homme assez ordinaire ! tandis que moi, morbleu, perdu dans la foule obscure, il m’a fallu déployer plus de science et de calculs pour subsister seulement, qu’on n’en a mis depuis cent ans à gouverner toutes les Espagnes ; et vous voulez jouter ! <span>-Pierre-Augustin Caron de Beaumarchais</span></p>
            </section>  */}
        </div>
    )
}