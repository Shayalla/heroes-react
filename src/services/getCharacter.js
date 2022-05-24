import axios from "axios";

const getAllCharacter = async () => {
  const { data } = await axios.get(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );
  const dc = data.filter(
    ({ biography: { publisher } }) =>
      publisher === "DC Comics" || publisher === "Superman Prime One-Million"
  );
  return dc;
};

export default getAllCharacter;
