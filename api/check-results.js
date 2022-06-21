const fetch = require("node-fetch");

const ACCOUNT_ID = process.env.ACCOUNT_ID;
const API_KEY = process.env.API_KEY;
const API_URL =
  process.env.API_URL || "https://api.checklyhq.com/v1/check-results";

if (!API_KEY) {
  throw new Error("Mising env var API_KEY");
}

if (!ACCOUNT_ID) {
  throw new Error("Mising env var ACCOUNT_ID");
}

module.exports = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    throw new Error("Mising check id in query string");
  }

  console.log("Fething check results", id);

  const response = await fetch(`${API_URL}/${id}?limit=21`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "x-checkly-account": ACCOUNT_ID
    }
  });

  const json = await response.json();

  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res.status(200).send(json);
};
