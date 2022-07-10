export const getItems = () => {
    const getItemsName = async () => {
      try {
        const url = "https://randomuser.me/api/?results=10";
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data.results);
        return data.results;
      } catch (error) {
        console.log(error);
      }
    };
    return getItemsName();
  };