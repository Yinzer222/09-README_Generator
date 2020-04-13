function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}
function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  return ''
}




function generateMarkdown(data) {
  console.log(data);
  return `
  ## Project Title
# ${data.responses.title}
${renderLicenseBadge(data.responses.license, data.responses.gitHubUser, data.responses.title)}
## GitHub Username
# ${data.responses.gitHubUser}
## Developer e-mail
# ${data.responses.eMail}
## Tests
# ${data.responses.test}
${renderLicenseSection(data.responses.license)}
`;
}

module.exports = generateMarkdown;
