import imageFive from "../assets/20190908_143633.jpg"
import imageTwo from "../assets/20240323_165529.jpg"
import imageSix from "../assets/20230914_180634.jpg"
import imageOne from "../assets/20240625_172535.jpg"
const Project = () => {
    const projects = [
        {
            id: "item-one",
            link: "https://github.com/rs0579/employee_tracker",
            // imgSrc: "https://picsum.photos/id/34/3872/2592",
            imgSrc: imageOne,
            altText: "Module 1",
            title: "Employee Tracker"
        },
        {
            id: "item-two",
            link: "https://github.com/rs0579/candidate_search",
            // imgSrc: "https://picsum.photos/id/82/1500/997",
            imgSrc: imageTwo,
            altText: "Module 2",
            title: "GitHub Candidate Search"
        },
        {
            id: "item-three",
            link: "https://github.com/rs0579/README_generator",
            imgSrc: "https://picsum.photos/id/163/2000/1333",
            altText: "Module 3",
            title: "ReadMe Generator"
        },
        {
            id: "item-four",
            link: "https://github.com/rs0579/vehicle-builder",
            imgSrc: "https://picsum.photos/id/171/2048/1536",
            altText: "Module 4",
            title: "Vehicle Builder"
        },
        {
            id: "item-five",
            link: "https://github.com/rs0579/frenchFootsteps",
            imgSrc: imageFive,
            altText: "Module 5",
            title: "French Footsteps"

        },
        {
            id: "item-six",
            link: "https://github.com/rs0579/social_media_api",
            // imgSrc: "https://picsum.photos/id/201/5000/3333",
            imgSrc: imageSix,
            altText: "Module 6",
            text: 'Social Media API'
        }
    ];

    const handleClick = (link) => {
        window.open(link, "_blank");
        //"_blank" opens new tab instead of opening it directly on the current page
    };

    return (
        <main className="portfolio-main">
            {projects.map(project => (
                <section className="portfolio-item" id={project.id} key={project.id}>
                    <button onClick={() => handleClick(project.link)}>
                        <img
                            src={project.imgSrc}
                            alt={project.altText}
                        />
                        <h2 className="overlay">{project.title}</h2>
                    </button>
                </section>
            ))}
        </main>
    )
}
export default Project