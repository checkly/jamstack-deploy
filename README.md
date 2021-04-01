<p align="center">
  <img width="400px" src="./public/images/logo.svg" alt="Jamstack Deploy" />
</p>

> 🍯 Measure cloud providers and check which fits better for your Jamstack App.

## Overview
The process is quite simple. It starts creating a basic [Nuxt.js static web app](https://github.com/checkly/jamstack-deploy-demo-app) (it is the same app you get when you run the Nuxt.js starter tool).

We took exactly the same app and we deploy it to different Jamstack providers.

The last step is to use [Checkly](https://checklyhq.com) to analyze them. Checkly is the API & E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.

Each application has its own API check, where we can get some interesting stats (like DNS, response time and **TTFB**). The coolest thing is that those checks run in 21 (yes, 21 😱) [different locations around the world](https://www.checklyhq.com/docs/monitoring/global-locations/). This way, you can check which provider fits better with the countries you want to target.

Checkly has its own Public API that we can use to pull out all this useful information. Then, we mix it with a little bit of Vue.js and TailwindCSS to bring life to [jamstackdeploy.com](https://jamstackdeploy.com).

> ⚠️ Each check runs twice per day (in all 21 locations). The information you see for each provider is the average of the latest 5 checks. You can also get the latest 7 days performance in our [status dashboard](https://status.jamstackdeploy.com/).

## 📝 TODO
1. [ ] Add providers knowledge base
2. [ ] Implement more providers
   1. [x] AWS S3 + AWS Cloudfront
   2. [ ] Azure Static Sites
   3. [ ] AWS Amplify
   4. [ ] Stack Path
   5. [ ] Cloudflare
   6. [ ] Digital Ocean CDN
   7. [ ] BIP
3. [ ] Monthly performance reports
4. [ ] A vs. B view (compare providers)
5. [ ] Test, tests and more tests 😅

> Want to add something to the backlog? Create an issue [here](https://github.com/checkly/jamstack-deploy/issues).

## 🧑‍💻 Development
```bash
$ npm install
$ npm run serve
$ npm run lint
```

## 🚢 Build & Deploy

```bash
$ npm run deploy
```

## Supported Providers
<p align="center">
  <img align="top" width="130px" height="30px" src="./public/images/logos/vercel.svg" alt="Vercel" />
  <img align="top" width="140px" height="38px" src="./public/images/logos/netlify.png" alt="Netlify" />
  <img align="top" width="160px" height="45px" src="./public/images/logos/firebase.png" alt="Firebase" />
  <img align="top" width="160px" height="34px" src="./public/images/logos/render.svg" alt="Render" />
</p>
<p align="center">
  <img align="top" width="140px" height="57px" src="./public/images/logos/github.png" alt="GitHub" />
  <img align="top" width="64px" height="64px" src="./public/images/logos/surge.svg" alt="Surge" />
  <img align="top" width="80px" src="./public/images/logos/aws.png" alt="AWS" />
  <img align="top" width="200px" src="./public/images/logos/amplify.png" alt="AWS Amplify" />
</p>



## 📄 License

[MIT](https://github.com/checkly/jamstack-deploy/blob/master/LICENSE)

<h3 align="center">Supported by</h3>
<p align="center">
  <a href="https://checklyhq.com?utm_source=github&utm_medium=sponsor-logo-github&utm_campaign=headless-recorder" target="_blank">
  <img width="200px" src="./public/images/checkly.png" alt="Checkly" />
  </a>
  <br />
  <i><sub>Delightful Active Monitoring for Developers</sub></i>
<p>

