const fs = require("node:fs");
const path = require("node:path");

const contentDirectory = path.join(__dirname, "..", "content");
const projects = fs.readFileSync(path.join(contentDirectory, "projects.md"), "utf8");

function projectContent(title) {
    const section = projects.split(`## ${title}\n`)[1].split("\n## ")[0].trim();
    const image = section.match(/!\[([^\]]+)\]\(([^)]+)\)/);
    const links = [...section.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)];
    const prose = section
        .replace(/!\[[^\]]+\]\([^)]+\)\n?/g, "")
        .replace(/\[[^\]]+\]\(https?:\/\/[^)]+\)\n?/g, "")
        .trim();

    return {
        prose,
        image: image ? image[2] : "",
        imageAlt: image ? image[1] : "",
        liveUrl: links.find(([match, label]) => label.toLowerCase().includes("live"))?.[2] || "",
        sourceUrl: links.find(([match, label]) => label.toLowerCase().includes("source"))?.[2] || ""
    };
}

module.exports = {
    profileIntro: fs.readFileSync(path.join(contentDirectory, "profile-intro.md"), "utf8"),
    education: fs.readFileSync(path.join(contentDirectory, "education.md"), "utf8"),
    lifting: fs.readFileSync(path.join(contentDirectory, "lifting.md"), "utf8"),
    philosophy: fs.readFileSync(path.join(contentDirectory, "philosophy.md"), "utf8"),
    experience: fs.readFileSync(path.join(contentDirectory, "experience.md"), "utf8"),
    projects: {
        seismic: projectContent("Seismic Dashboard"),
        personalSite: projectContent("This Site!")
    },
    skills: fs.readFileSync(path.join(contentDirectory, "skills.md"), "utf8")
};
