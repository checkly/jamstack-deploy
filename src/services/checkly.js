const API_URL = "https://jamstack-deploy.vercel.app/api/check-results?id=";

export async function getCheckResults(id) {
  const res = await fetch(API_URL + id + "", {
    method: "GET"
  });

  return await res.json();
}
