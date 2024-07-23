// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeMIT = "![Static Badge](https://img.shields.io/badge/MIT%20License-blue)";
  const badgeISC = "![Static Badge](https://img.shields.io/badge/ISC%20License-yellow)";

  if (license === "MIT") {
    return badgeMIT;
  } else if (license === "ISC") {
    return badgeISC;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "") {
  
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license != "") {
  return `${renderLicenseBadge(license)}`
  
  // ${renderLicenseLink(license)}
} else {
  return "";
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

### Table of Contents
- [Description](#description)
- [How to Install](#how-to-install)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)


## Description

${data.description}

## How to Install

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

My Github: https://github.com/${data.username}

My Email Address: ${data.email}

You can contact me using the links above if you have any questions about ${data.title}.

`;
}

export default generateMarkdown;
