import spotitabImage from "./Assets/spotitab.png";
import pacmanImage from "./Assets/pacman.png";
import pdfImage from "./Assets/pdf.png";
import ezcntImage from "./Assets/ezcnt.png";

export const info = [
    {
        title: "Spotitab",
        description:
            "Full stack web application, developed using React and Django",
        image: spotitabImage,
        bulletpoints: [
            "Utilizes spotify api using OAuth2.0 authentication  and web scraper to provide custom list of guitar tabs suited to someones spotify profile and level of proficiency at guitar.",
            "Implemented RESTful APIs to manage data exchange between the frontend and backend efficiently.",
        ],
        codelink: "https://github.com/Eoin728/spotitab",
        otherlink: "",
        otherlinkname: "View live demo",
    },
    {
        title: "Game Engine",
        description:
            "Custom Game engine for a unique 3d take on pacman, developed in C++",
        image: pacmanImage,
        bulletpoints: [
            "Classic Pacman game with a twist - it’s in 3D and he can fight back.",
            "Used bfs to create randomly generated maze and A* algorithm to implement ghost tracking.",
            "Created python exporter to export custom graphics from Blender wavefront file format to OpenGL friendly file format",
        ],
        codelink: "https://github.com/Eoin728/pacman",
        otherlink: "https://www.youtube.com/watch?v=R-KMkEZqaUQ",
        otherlinkname: "View demo",
    },
    {
        title: "PDF Page Remover",
        description:
            "Cli tool that can quickly remove pages from pdfs,developed in Python",
        image: pdfImage,
        bulletpoints: [
            "Developed a desktop application using Python that allows users to easily remove selected pages from PDF files, streamlining document management.",
            "Incorporated error handling and user feedback mechanisms to ensure a smooth user experience, reducing the likelihood of accidental data loss.",
        ],
        codelink: "https://github.com/Eoin728/defluffer",
        otherlink: null,
    },
    {
        title: "EZCNT",
        description: "App that tracks workouts, developed using React Native",
        image: ezcntImage,
        bulletpoints: [
            "Developed a versatile, cross-platform mobile application utilizing React Native, designed to help users effectively track and record their workouts. This app empowers users to monitor their progress over time, set personalized fitness goals, and stay motivated on their fitness journey.",
            "Engineered and integrated a robust SQL database to securely manage and store user data, including workout history, progress metrics, and personalized settings. The database architecture supports efficient handling of complex queries, ensuring quick access to relevant data and a seamless user experience.",
            "Designed and implemented an intuitive, user-friendly interface that enhances the overall user experience. Key features include real-time exercise logging, the ability to create and customize workout plans, and detailed progress tracking. The interface is optimized for both beginner and advanced users, providing a streamlined experience across different devices.",
        ],
        codelink: "https://github.com/Eoin728/EZCNT",
        otherlink: null,
    },
];
