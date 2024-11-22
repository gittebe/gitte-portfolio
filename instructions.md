# React Portfolio Project Brief

## Instructions

<img src="https://github.com/Technigo/project-portfolio/blob/main/portfolio-designs.png" alt="" />

We've created some [portfolio designs](https://www.figma.com/file/ZMIWBimuoSDHXp7CdtkrA3/Web-Dev-Portfolio-%7C-new-version?type=design&node-id=1862-60&mode=design&t=clNc4tmMHa8uA3GO-0) for you that you should follow. You are free to change:

- the colours (find inspiration on [ColorHunt](https://colorhunt.co/) or [Adobe](https://color.adobe.com/create/color-wheel/))
- the images
- and, of course, all the content

We want you to practise following a design strictly. This is normally how the workflow is for a Frontend Developer: to work together with a designer who provides a design file (in Figma) for you to translate into code.

If you work as a designer and really dislike our designs, you could pitch to us why you would do a better job and hand in your own design file for us to evaluate. But otherwise, these designs comes from an experienced designer in collaboration with the expertise of a recruiter who knows what recruiters look at.

## Content guide

### **Top section**

This is where you sell in your new self. You're happy to combine your previous experience with your new Frontend skills or use this area to describe yourself and how you see your future role. Either you do something like "Web dev + design" or more of a sentence like; "Web developer with a background in communications". Or if you don't see yourself as a Frontend Developer in the future, maybe you want to write something like; "Project manager with coding skills". It's your portfolio. Add a photo of yourself and summarise what you have been doing in the past and what you want to do in the future. This gives the reader an idea of who you are. Keep it short and personal. 

### **Tech section**

Give a short summary/name-dropping of all the technologies, tools, libraries and things you know and will learn during this course.

### **Featured projects**

Mention the projects you are most proud of here; feel free to add all of them! The more, the merrier at the beginning of your developer career. Make sure to mention all technologies, libraries or APIs you have used. Don't feel like you are repeating yourself. As a recruiter looking for a React developer – the more React is mentioned – the better. If you have other code projects unrelated to this course, feel free to add them too. For every project, add a link to the GitHub repo and a link to the deployed page, where the project can be viewed live. Add a thumbnail image that shows your project and a short summary of what the project is about.

### **My words**

Presenting yourself and your thoughts about programming, career change, remote work, and bootcamping can be extremely helpful for recruiters to gain insight into what you're up to. It can be a great way to show off your knowledge and skills - and that you reflect on it.

During the career program, you will be asked to post reflections on LinkedIn connected to the different topics covered in the bootcamp, this is an excellent opportunity to showcase your reflections to future employers. Include the reflections that you have posted on social media in this section.

### **Skills**

Place ALL your skills here. Feel free to add tech skills that are not in the course but things you have knowledge of from before. In the other columns, place everything that you think will be useful for a tech job. Softwares that you know, methodologies, leadership frameworks and basically whatever. 

### **Time to talk**

Make it super clear how a person can contact you. Again, add the social media links that *you* are using. 

## Tips on how to work with this project

- Begin with forking and cloning the repo as usual. Since there is no starter code this week, you must create it by utilising [Vite](https://www.notion.so/Vite-15cd27c673d14033a1aae2d63dd37b04?pvs=21) → `npm create vite@latest my-portfolio --template`
- Before starting the coding, consider what components you need and break the design up into reusable and manageable pieces. Has your team already created some components during the team session? Great — use them!
- Consider how you will get the data, e.g. the projects and articles. Do you want to go with JSON files all the way (see `projects.json` as an example), or do you want to go with the stretch goal that uses the GitHub API to get all projects?
- When picking colours, remember to consider accessibility so that the contrast is sufficient.
- Remember that your portfolio will continue to evolve and grow as you progress in your coding journey. Happy coding!

### A tip about the icons

To use the icons from the design, simply mark the icon you want to export and save it as an SVG or copy the code and make it into a component.

<img src="https://file.notion.so/f/f/5fa017c8-3fef-4115-8b2f-0177cad64ebc/454c9efe-8e85-4d1e-82d6-9e0192ddf7cb/ezgif.com-video-to-gif.gif?id=254d5f1b-7b4d-4be4-9b6c-5b4c58e34311&table=block&spaceId=5fa017c8-3fef-4115-8b2f-0177cad64ebc&expirationTimestamp=1711029600000&signature=oMN5Aa34q-2H8bPHYUxLiyG0ox4AwdT0bDz_hHoyjyg&downloadName=ezgif.com-video-to-gif.gif" alt="" />

## Requirements

- Your portfolio should have components and props
- Your portfolio should contain:
    - A picture of you.
    - A presentation of your tech skills.
    - A presentation of your projects linking to GitHub and Netlify.
    - A presentation of some thoughts that you have around code.
    - A clear way to get in contact with you.
- Your portfolio should follow the design as closely as possible
- Your portfolio should be responsive (it should look good on devices from 320px width up to 1600px)
- Your portfolio should be following accessibility guidelines to ensure your website is usable by a diverse range of users:
    - You should have a score of at least 95 in [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
    - All images should have alt attributes and proper sizes
    - All contrasts should be OK
- Follow the guidelines on how to write clean code

## Stretch goals

### Intermediate stretch goals

- Optimise your website for sharing on social media using og:tags.
- Implement animation on scroll as present in the design for enhanced user experience.
- Add a favicon

### Advanced stretch goals

- Give your portfolio a custom domain and connect to your deployed site. [Read more](https://docs.netlify.com/domains-https/custom-domains/).
- Utilise the GitHub API to fetch your public projects from your GitHub account, ensuring your portfolio stays up-to-date with your latest work.
    - Use the following URL link [**https://api.github.com/users/YourGitHubProfile/repos**] as an example. Replace "YourGitHubProfile" with your actual GitHub profile name to fetch your repository data. Example: [Technigo GitHub profile](https://api.github.com/users/Technigo/repos)
