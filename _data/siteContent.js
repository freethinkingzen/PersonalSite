const fs = require("node:fs");
const path = require("node:path");

const contentDirectory = path.join(__dirname, "..", "content");
module.exports = {
    profile: fs.readFileSync(path.join(contentDirectory, "profile.md"), "utf8"),
    education: fs.readFileSync(path.join(contentDirectory, "education.md"), "utf8"),
    lifting: fs.readFileSync(path.join(contentDirectory, "lifting.md"), "utf8"),
    philosophy: fs.readFileSync(path.join(contentDirectory, "philosophy.md"), "utf8"),
    experience: fs.readFileSync(path.join(contentDirectory, "experience.md"), "utf8"),
    finalWord: fs.readFileSync(path.join(contentDirectory, "final-word.md"), "utf8"),
    technicalRange: fs.readFileSync(path.join(contentDirectory, "technical-range.md"), "utf8")
};
