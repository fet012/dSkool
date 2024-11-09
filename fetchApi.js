const apiUrl = "http://localhost:1000/api/v1";
const fetchApi = async (endPoint, method, data) => {
  const url = `${apiUrl}${endPoint}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    console.log("Raw Response:", response); // Log the raw response
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export default fetchApi;
