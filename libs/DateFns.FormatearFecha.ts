import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

//formatear fecha
export const formatearFecha =(date:string)=>{
    const fechaAnterior = new Date(date);
  const resultado = formatDistanceToNow(fechaAnterior, {
    addSuffix: true,
    locale: es,
  });
  return resultado; 
}