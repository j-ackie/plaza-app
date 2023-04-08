const API_URL = "http://localhost:8000/api"

const fetchData = (endpoint: string, method: string) => {
  return fetch(`${API_URL}${endpoint}`, {
    method: method
  });
};

export default fetchData;