const BASE_URL = "http://localhost:3000/api/v1";

export async function apiFetch(endpoint, { method = "GET", body, headers = {} } = {}) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
}