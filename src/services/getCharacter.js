import axios from "axios";

const getAllCharacter = async () => {
  const { data } = await axios.get(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  console.log(data);
  return data;
};

export default getAllCharacter;
