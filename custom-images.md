# Easy Guide to Add Custom Images to Your GitHub Repositories

Want to make your portfolio pop with custom images for your GitHub projects? While the GitHub API doesn’t let us add images directly to repositories, we can cleverly work around this. Below, we’ll walk through a simple method: we'll link each project to a custom image using a JSON file, and then display them in your portfolio using React. This easy-to-follow guide ensures your portfolio will be both eye-catching and informative. Let’s get started!

## 1. Create a JSON File:

Create a JSON file that contains an array of objects, each object representing an image and the corresponding repository name.

```json
[
  {
    "repoName": "example-repo-1",
    "imageUrl": "src/assets/repo-images/image1.png"
  },
  {
    "repoName": "example-repo-2",
    "imageUrl": "src/assets/repo-images/image2.png"
  }
  // ... more objects for other repositories
]
```

### 2. Fetch Repositories and Images:

#### A. Set up a react component and state

```js
import { useState, useEffect } from "react";
import repoImages from "./path-to-your-json-file.json";

export const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  // ... (rest of the code will go here)

  return <div>{/* Render your repositories and images here */}</div>;
};
```

#### B. Fetch Repositories using async Function

```js
// ... (inside the GithubRepos component)

useEffect(() => {
  const fetchRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/YourGithubProfile/repos");
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
```

### 2. Match and Render Repositories and Images:

Iterate through the fetched repositories, find the corresponding image URL from your JSON data, and render them.

```js
// ... (inside the GithubRepos component)

return (
  <div>
    <h1>GitHub Repositories</h1>
    <ul>
      {repos.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);
        return (
          <li key={repo.id}>
            <img src={repoImage?.imageUrl} alt={repo.name} />
            {repo.name}
          </li>
        );
      })}
    </ul>
  </div>
);
```

### 3. Notes

- Ensure your image file paths are correct and accessible from your component.
- The repoImage?.imageUrl syntax uses optional chaining, which will prevent errors if an image is not found for a particular repository. However, you might want to provide a default image or handle this case in a way that suits your UI/UX design.
