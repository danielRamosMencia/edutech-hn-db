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
