// Renders the badge depending on which badge is chosen by the user
function renderLicenseBadge(license) {
  const badgeMIT = "![Static Badge](https://img.shields.io/badge/MIT%20License-blue)";
  const badgeISC = "![Static Badge](https://img.shields.io/badge/ISC%20License-yellow)";
  const badgeGPL = "![Static Badge](https://img.shields.io/badge/GPL%20License-green)"
  const badgeBSD = "![Static Badge](https://img.shields.io/badge/BSD%20License-orange)"
  
  if (license === "MIT") {
    return badgeMIT;
  } else if (license === "ISC") {
    return badgeISC;
  } else if (license === "GPL") {
    return badgeGPL;
  } else if (license === "BSD") {
    return badgeBSD;
  } else {
    return "";
  }
}

// Creates a link depending on which license is chosen for better understanding each license
function renderLicenseLink(license) {
  const linkMIT = "https://memgraph.com/blog/what-is-mit-license";
  const linkISC = "https://opensource.org/license/isc-license-txt";
  const linkGPL = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  const linkBSD = "https://opensource.org/license/bsd-3-clause";

  if (license === "MIT") {
    return linkMIT;
  } else if (license === "ISC") {
    return linkISC;
  } else if (license === "GPL") {
    return linkGPL;
  } else if (license === "BSD") {
    return linkBSD;
  } else {
    return "";
  }
}

// Creates the license section in the generated README.md file and adds the link
function renderLicenseSection(license) {
  const licenseMessage = `For more information about the ${license} license, use this link!\n ${renderLicenseLink(license)}`;
  if (license != "") {
    return licenseMessage;
  } else {
    return "";
  }
}

// Structures the markdown file with all information provided by the user
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

### Table of Contents
- [Description](#description)
- [How to Install](#how-to-install)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

---

## Description

${data.description}

---

## How to Install

${data.installation}

---

## Usage

${data.usage}

---

## License

${renderLicenseSection(data.license)}

---

## Contributors

${data.contributors}

---

## Tests

${data.tests}

---

## Questions

My Github: https://github.com/${data.username}

My Email Address: ${data.email}

You can contact me using my Github link or via Email if you have any questions about ${data.title}.

`;
}

// Makes generateMarkdown available to all files that import it
export default generateMarkdown;
