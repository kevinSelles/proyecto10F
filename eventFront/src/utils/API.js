const url = "https://splish-splash-back.vercel.app/api/";

export const API = async ({ endpoint, method = "GET", body, isJSON = true }) => {
  try {
    const headers = {};
    isJSON ? headers["Content-Type"] = "application/json" : null;

    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(url + endpoint, { 
      method,
      headers,
      body: body ? (isJSON ? JSON.stringify(body) : body) : undefined
    });

    const response = await res.json();

    return response;
  } catch (error) {
    console.error("Fetch error", error);
    return null;
  };
  
};