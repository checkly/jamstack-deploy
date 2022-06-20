import checkly from "@checkly/pulumi";
import { provdersList } from "../src/services/providers.mjs";

const locations = [
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "ca-central-1",
  "sa-east-1",
  "eu-west-1",
  "eu-central-1",
  "eu-west-2",
  "eu-west-3",
  "eu-north-1",
  "eu-south-1",
  "me-south-1",
  "ap-southeast-1",
  "ap-northeast-1",
  "ap-east-1",
  "ap-southeast-2",
  "ap-southeast-3",
  "ap-northeast-2",
  "ap-northeast-3",
  "ap-south-1",
  "af-south-1"
];

const group = new checkly.CheckGroup("jamstack-deploy-group", {
  name: "Jamstack Deploy",
  activated: true,
  concurrency: 1,
  apiCheckDefaults: {},
  locations,
  tags: ["jamstack-deploy"],
  useGlobalAlertSettings: true
});

Object.keys(provdersList).forEach(key => {
  const provider = provdersList[key];
  new checkly.Check(`${key}-check`, {
    name: provider.displayName,
    activated: true,
    groupId: group.id.apply(id => parseInt(id)),
    frequency: 5,
    type: "API",
    request: {
      method: "GET",
      url: provider.checkUrl || `https://${key}.jamstackdeploy.com`
    }
  });
});
