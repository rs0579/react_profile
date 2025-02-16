export const Project = () => {
    const projects = [
        {
            id: "item-one",
            link: "https://github.com/rs0579/employee_tracker",
            imgSrc: "https://picsum.photos/id/34/3872/2592",
            altText: "Module 1"
        },
        {
            id: "item-two",
            link: "https://github.com/rs0579/Paper-Rock-Scissors",
            imgSrc: "https://picsum.photos/id/82/1500/997",
            altText: "Module 2"
        },
        {
            id: "item-three",
            link: "https://github.com/rs0579/README_generator",
            imgSrc: "https://picsum.photos/id/163/2000/1333",
            altText: "Module 3"
        },
        {
            id: "item-four",
            link: "https://github.com/rs0579/vehicle-builder",
            imgSrc: "https://picsum.photos/id/171/2048/1536",
            altText: "Module 4"
        },
        {
            id: "item-five",
            link: "https://github.com/rs0579/frenchFootsteps",
            imgSrc: "https://picsum.photos/id/192/2352/2352",
            altText: "Module 5"
        },
        {
            id: "item-six",
            link: "https://github.com/rs0579/medicine_tracker",
            imgSrc: "https://picsum.photos/id/201/5000/3333",
            altText: "Module 6"
        }
    ];

    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <main className="profile-main">
            {projects.map(project => (
                <section className="portfolio-item" id={project.id} key={project.id}>
                    <button onClick={() => handleClick(project.link)}>
                        <img
                            src={project.imgSrc}
                            alt={project.altText}
                        />
                    </button>
                </section>
            ))}
        </main>
    );
}






// export const Project = () => {
//     return (
//         <main>
//             <section className="portfolio-item" id="item-one">
//                 <a href="https://github.com/rs0579/employee_tracker">
//                     <img
//                         src="https://picsum.photos/id/34/3872/2592"
//                         alt="Module 1"
//                     />
//                     {/* TRANSFORM THIS TO A BUTTON, ADD AN ONCLICK LIKE ON LESSON 11 */}
//                 </a>
//             </section>
//             <section className="portfolio-item" id="item-two">
//                 <a href="https://github.com/rs0579/Paper-Rock-Scissors">
//                     <img
//                         src="https://picsum.photos/id/82/1500/997"
//                         alt="Module 2"
//                     />
//                 </a>
//             </section>
//             <section className="portfolio-item" id="item-three">
//                 <a href="https://github.com/rs0579/README_generator">
//                     <img
//                         src="https://picsum.photos/id/163/2000/1333"
//                         alt="Module 3"
//                     />
//                 </a>
//             </section>
//             <section className="portfolio-item" id="item-four">
//                 <a href="https://github.com/rs0579/vehicle-builder">
//                     <img
//                         src="https://picsum.photos/id/171/2048/1536"
//                         alt="Module 4"
//                     />
//                 </a>
//             </section>
//             <section className="portfolio-item" id="item-five">
//                 <a href="https://github.com/rs0579/frenchFootsteps">
//                     <img
//                         src="https://picsum.photos/id/192/2352/2352"
//                         alt="Module 5"
//                     />
//                 </a>
//             </section>
//             <section className="portfolio-item" id="item-six">
//                 <a href="https://github.com/rs0579/medicine_tracker">
//                     <img
//                         src="https://picsum.photos/id/201/5000/3333"
//                         alt="Module 6"
//                     />
//                 </a>
//             </section>
//         </main>
//     )
// }