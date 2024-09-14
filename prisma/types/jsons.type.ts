// types for data readed from .json files

export type MunicipalityJson = {
  nombre: string;
  codigo: string;
  codigoDepartamento: string;
  nombreDepartamento: string;
};

export interface PersonJson {
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  genero: string;
  municipio: string;
  direccion: string;
  email: string;
  fechaNacimiento: string;
};

export type InstitutionJson = {
  nombre: string;
  codigo: string;
  telefono: string;
  direccion: string;
  distrito: string;
}
