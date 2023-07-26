import Chance from "chance";

const fetchData = () => {
  const chance = new Chance();
  return { id: chance.guid(), name: chance.name() };
};

export default fetchData;