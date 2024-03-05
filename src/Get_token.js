const orgId = `${process.env.REACT_ORG_KEY};`
const apiKey = `${process.env.REACT_API_KEY};`

const getToken = async () => {
  try {
    const response = await fetch("https://api.dyte.in/v1/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgId,
        apiKey,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error getting auth token: ${response.statusText}`);
    }

    const data = await response.json();
    const authToken = data.authToken;
    console.log("Auth token:", authToken);
    return authToken;
  } catch (error) {
    console.error(error);
  }
};

export const authToken = await getToken();