import API from "./Rule_API";

export const getDeportistas = async () => {
  let url = "/api/deportistas";
  return await API.get(url)
    .then((response) => {
      console.log(response);
      return response.data; //ARRAY DE OBJS
    })
    .catch((error) => {
      /* console.log(error); */
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
