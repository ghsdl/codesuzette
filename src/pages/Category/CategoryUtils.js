import { PRICES, LOCALES, CODING_LANGUAGES } from './CategoryConst';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

const resourcesFilteredByPrices = (resources, prices) => {
  const pricesName = prices.map((price) => price.name);
  return resources.filter((resource) => {
    if (pricesName.includes(resource.price)) {
      return resource;
    }
  });
};

const resourcesFilteredByLocales = (resources, locales) => {
  const localesName = locales.map((locale) => locale.name);
  return resources.filter((resource) => {
    if (localesName.includes(resource.locale)) {
      return resource;
    }
  });
};

const resourcesFilteredByCodingLanguages = (resources, codingLanguages) => {
  const codingLanguagesName = codingLanguages.map(
    (codingLanguage) => codingLanguage.name
  );
  return resources.filter((resource) => {
    const tagsName = get(resource, 'tagsName', []);
    if (tagsName.some((tag) => codingLanguagesName.includes(tag.name))) {
      return resource;
    }
  });
};

const getResourcesFiltered = (
  prices,
  locales,
  codingLanguages,
  resources,
  setResourcesFiltered
) => {
  let result = resources;
  if (isEmpty(prices) && isEmpty(locales) && isEmpty(codingLanguages)) {
    result = resources;
  } else if (isEmpty(prices) && isEmpty(locales)) {
    result = resourcesFilteredByCodingLanguages(resources, codingLanguages);
  } else if (isEmpty(prices) && isEmpty(codingLanguages)) {
    result = resourcesFilteredByLocales(resources, locales);
  } else if (isEmpty(locales) && isEmpty(codingLanguages)) {
    result = resourcesFilteredByPrices(resources, prices);
  } else if (isEmpty(prices)) {
    result = resourcesFilteredByLocales(resources, locales);
    result = resourcesFilteredByCodingLanguages(result, codingLanguages);
  } else if (isEmpty(locales)) {
    result = resourcesFilteredByPrices(resources, prices);
    result = resourcesFilteredByCodingLanguages(result, codingLanguages);
  } else if (isEmpty(codingLanguages)) {
    result = resourcesFilteredByPrices(resources, prices);
    result = resourcesFilteredByLocales(result, locales);
  } else {
    result = resourcesFilteredByPrices(resources, prices);
    result = resourcesFilteredByLocales(result, locales);
    result = resourcesFilteredByCodingLanguages(result, codingLanguages);
  }
  if (!isEmpty(prices)) {
    result = resourcesFilteredByPrices(resources, prices);
  }
  if (!isEmpty(locales)) {
    result = resourcesFilteredByLocales(result, locales);
  }
  if (!isEmpty(codingLanguages)) {
    result = resourcesFilteredByCodingLanguages(result, codingLanguages);
  }
  setResourcesFiltered(result);
  return result;
};

const getPrices = (resources) => {
  const prices = PRICES.filter(
    (PRICE) =>
      !isEmpty(resources.find((resource) => resource.price === PRICE.name))
  );
  return prices;
};

const getLocales = (resources) => {
  const locales = LOCALES.filter(
    (LOCALE) =>
      !isEmpty(resources.find((resource) => resource.locale === LOCALE.name))
  );
  return locales;
};

const getCodingLanguagesFiltered = (resources) => {
  return resources
    .map((resource) => {
      return get(resource, 'tagsName', []).map((tag) => tag.name);
    })
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
};

const getCodingLanguages = (resources) => {
  const codingLanguagesFiltered = getCodingLanguagesFiltered(resources);
  return CODING_LANGUAGES.filter((CODING_LANGUAGE) =>
    codingLanguagesFiltered.includes(CODING_LANGUAGE.name)
  );
};

const resetFilters = (setPrices, setLocales, setCodingLanguages) => {
  setPrices([]);
  setLocales([]);
  setCodingLanguages([]);
};

export {
  getResourcesFiltered,
  getPrices,
  getLocales,
  getCodingLanguages,
  resetFilters
};
