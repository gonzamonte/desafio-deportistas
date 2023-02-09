import API from "./Rule_API";
/* import { useParams } from "react-router-dom";
const { idDeportista } = useParams(); */

export const getEstadisticas = async (id) => {
  let url = `/api/buscar/${id}`;
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
