import * as yup from "yup";

export const LocalPageFilter = yup.object().shape({
  age: yup.string(),
  organisation: yup.string(),
  budget: yup.string(),
  date: yup.boolean(),
  search: yup.boolean(),
});

export const ExchangePageFilter = yup.object().shape({
  country: yup.array().of(yup.string().required()),
  age: yup.string(),
  organisation: yup.string(),
  budget: yup.string(),
  date: yup.boolean(),
  search: yup.boolean(),
});

export const FilterSchema = (type: "Local" | "Exchange") => {
  if (type == "Local")
    return yup.object().shape({
      country: yup.array().of(yup.string().required()),
      age: yup.array().of(yup.string().required()),
      organisation: yup.array().of(yup.string().required()),
      budget: yup.array().of(yup.string().required()),
      date: yup.array().of(yup.string().required()),
      search: yup.string(),
    });
  else {
    return yup.object().shape({
      age: yup.array().of(yup.string().required()),
      organisation: yup.array().of(yup.string().required()),
      budget: yup.array().of(yup.string().required()),
      date: yup.array().of(yup.string().required()),
      search: yup.string(),
      country: yup.array().of(yup.string().required()),
    });
  }
};
