import React, { useState } from "react";
import requests from "../request";

const Documentaries = () => {
  const [docs, setDocs] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchDocumentaries);

      setDoc(res.data.results);
      return res;
    }
    fetchData();
  }, []);
  console.log(docs);
  return (
    <div>
      <h1>{docs}</h1>
    </div>
  );
};

export default Documentaries;
