const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY || "d5e2beba50804531a79fb91a9ab45baf";
const API_URL =
  process.env.API_URL || "https://api.checklyhq.com/v1/check-results";

if (!API_KEY) {
  throw new Error("Mising env var API_KEY");
}

module.exports = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    throw new Error("Mising check id in query string");
  }

  console.log("Fething check results", id);

  const response = await fetch(`${API_URL}/${id}?limit=21`, {
    method: "GET",
    headers: { Authorization: "Bearer " + API_KEY }
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

  // return {
  //   statusCode: 200,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     "Access-Control-Allow-Headers":
  //       "Origin, X-Requested-With, Content-Type, Accept",
  //     "Content-Type": "application/json",
  //     "Access-Control-Max-Age": "2592000",
  //     "Access-Control-Allow-Credentials": "true"
  //   },
  //   body: JSON.stringify(json, null, 2)
  // };
};
