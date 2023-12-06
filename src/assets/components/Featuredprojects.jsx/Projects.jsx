import { useState, useEffect } from "react";
import repoImages from "./github.json";
import './Projects.css'

export const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/nnmuunn/repos");
                if (!response.ok) {
                    throw new Error("Network response was not ok" + response.statusText);
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:",
                    error
                );
            }
        };

        fetchRepos();
    }, []);

    return (
        <section>
            <h1>Featured Projects</h1>
            <ul>
                {repos.map((repo) => {
                    const repoImage = repoImages.find((img) => img.repoName === repo.name);
                    return (
                        <li key={repo.id}>
                            <img className="projectsImg" src={repoImage?.imageUrl} alt={repo.name} />
                            {repo.name} && {repo.description}
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}


// import { useState, useEffect } from "react";
// import repoImages from "./path-to-your-json-file.json";

// export const GithubRepos = () => {
//   const [repos, setRepos] = useState([]);
//   // ... (rest of the code will go here)

//   return <div>{/* Render your repositories and images here */}</div>;
// };

// ... (inside the GithubRepos component)

