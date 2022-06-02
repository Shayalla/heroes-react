import axios from "axios";

// const token = process.env.REACT_APP_TOKEN;

export const getAllCharacter = async () => {
  const { data } = await axios.get(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  console.log(data);
  return data;
};

