import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("El email es requerido"),
  password: Yup.string()
    .min(6, "El password tiene que contener más de 6 caracteres")
    .required("El password es requerido"),
});
