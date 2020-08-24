module.default = function (data){
  const {title, imageExample, repository, linkdin, user, description, tecnologyDescription, layoutDescription, documentationDescription, license} = data;
  return `
  <h1 align="center">
    <img alt="${title}" title="#${title}" src="${imageExample}" width="90%" />
</h1>

<h4 align="center"> 
	${title}
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/${repository}?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/${repository}">
	
  <a href="https://www.linkedin.com/in/${linkdin}/">
    <img alt="Made by ${user}" src="https://img.shields.io/badge/made%20by-${user}-%2304D361">
  </a>

  <a href="https://github.com/${repository}/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/${repository}">
  </a>

  <a href="https://github.com/${repository}/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/${repository}">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-project">Project</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-apidoc">Api Doc</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## 💻 Project

${description}

<h1 align="center">
    <img alt="Aplication example" title="Aplication" src=".github" width="500px" />
</h1>


## :rocket: Technologies

${tecnologyDescription}


## :art: Layout

${layoutDescription}

## :notebook: Documentation

${documentationDescription}

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/${repository}/issues).
- Make a fork;
- Create a branck with your feature: <code>git checkout -b my-feature</code>;
- Commit changes: <code>git commit -m 'feat: My new feature'</code>;
- Make a push to your branch: <code>git push origin my-feature</code>.

After merging your receipt request to done, you can delete a branch from yours.

## Show your support

Give a ⭐️ if this project helped you!

## :memo: License

This project is under the ${license} license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by ${user} :wave: [Get in touch!](https://www.linkedin.com/in/${linkdin}/)
  `
}