// minimal types from the models, for custom inputs to the seeds

export type CountryInput = {
  code: string;
  iso: string;
  name: string;
};

export type DepartmentInput = {
  name: string;
  code: string;
  country_id: string;
};

export type MunicipalityInput = {
  name: string;
  code: string;
  department_id: string;
};

export type DistrictInput = {
  name: string;
  code: string;
  municipality_id: string;
};

export type GenderInput = {
  name: string;
  code: string;
};

export type PersonInput = {
  name: string;
  middle_name?: string;
  last_name: string;
  middle_last_name?: string;
  document_id: string;
  email: string;
  cellphone: string;
  address?: string;
  rtn?: string;
  birthdate?: string;
  municipality_id: string;
  gender_id: string;
};

export type GradeInput = {
  name: string;
  code: string;
};

export type SignatureInput = {
  name: string;
  code: string;
};

export type LevelInput = {
  name: string;
  code: string;
};

export type LevelGradeInput = {
  level_id: string;
  grade_id: string;
};

export type LevelSignatureInput = {
  level_id: string;
  signature_id: string;
};

export type InstitutionInput = {
  name: string;
  code: string;
  rtn?: string;
  phone: string;
  address: string;
  district_id: string;
};

export type InstitutionLevelInput = {
  institution_id: string;
  level_id: string;
};
