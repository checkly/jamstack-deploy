<p align="center">
  <img width="400px" src="./public/images/logo.svg" alt="Jamstack Deploy" />
</p>

<p>
  <img height="128" src="https://www.checklyhq.com/images/footer-logo.svg" align="right" />
  <h1>Jamstack Deploy</h1>
</p>

![](https://api.checklyhq.com/v1/badges/groups/176115?style=flat-square)
![](https://api.checklyhq.com/v1/badges/groups/176115?responseTime=true&style=flat-square)
<br>

The process is quite simple. It starts creating a basic [Nuxt.js static web app](https://github.com/checkly/jamstack-deploy-demo-app) (it is the same app you get when you run the Nuxt.js starter tool).

We took exactly the same app and we deploy it to different Jamstack providers.

The last step is to use [Checkly](https://checklyhq.com) to analyze them. Checkly is the API & E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.

Each application has its own API check, where we can get some interesting stats (like DNS, response time and **TTFB**). The coolest thing is that those checks run in 22 (yes, 22 😱) [different locations around the world](https://www.checklyhq.com/docs/monitoring/global-locations/). This way, you can check which provider fits better with the countries you want to target.

Checkly has its own Public API that we can use to pull out all this useful information. Then, we mix it with a little bit of Vue.js and TailwindCSS to bring life to [jamstackdeploy.com](https://jamstackdeploy.com).

> ⚠️ Each check runs twice per day (in all 22 locations). The information you see for each provider is the average of the latest 5 checks. You can also get the latest 7 days performance in our [status dashboard](https://status.jamstackdeploy.com/).

<br>

### Providers
- [AWS Amplify](https://aws.amazon.com/amplify)
- [AWS CloudFront + S3](https://aws.amazon.com/cloudfront/)
- [Azure](https://azure.microsoft.com)
- [BIP](https://bip.sh)
- [Cloudflare](https://pages.cloudflare.com)
- [Digital Ocean](https://digitalocean.com)
- [Firebase](https://firebase.google.com)
- [GitHub Pages](https://pages.github.com)
- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [Hostman](https://hostman.com)
- [Netlify](https://netlify.com)
- [Render](https://render.com)
- [Surge](https://surge.sh)
- [Vercel](https://vercel.com)


## Questions
For questions and support please open a new  [discussion](https://github.com/checkly/jamstack-deploy/discussions). The issue list of this repo is exclusively for bug reports and feature/docs requests.

## Issues
Please make sure to respect issue requirements and choose the proper [issue template](https://github.com/checkly/jamstack-deploy/issues/new/choose) when opening an issue. Issues not conforming to the guidelines may be closed.

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/checkly/jamstack-deploy/blob/main/CONTRIBUTING.md) before making a pull request.

## License

[MIT](https://github.com/checkly/jamstack-deploy/blob/master/LICENSE)

<br>

<p align="center">
  <a href="https://checklyhq.com?utm_source=github&utm_medium=sponsor-logo-github&utm_campaign=headless-recorder" target="_blank">
  <img width="100px" src="https://www.checklyhq.com/images/text_racoon_logo.svg" alt="Checkly" />
  </a>
  <br />
  <i><sub>Delightful Active Monitoring for Developers</sub></i>
  <br>
  <b><sub>From Checkly with ♥️</sub></b>
<p>
