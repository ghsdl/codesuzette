import Checkboxes from '../Checkboxes/Checkboxes';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import size from 'lodash/size';
import './Filters.scss';

interface FiltersProps {
  resetFilters: () => void;
  codingLanguages: { name: string; label: string }[];
  prices: { name: string; label: string }[];
  locales: { name: string; label: string }[];
  setCodingLanguages: (
    codingLanguages: { name: string; label: string }[]
  ) => void;
  setPrices: (prices: { name: string; label: string }[]) => void;
  setLocales: (locales: { name: string; label: string }[]) => void;
  codingLanguagesCheckboxes: { name: string; label: string }[];
  pricesCheckboxes: { name: string; label: string }[];
  localesCheckboxes: { name: string; label: string }[];
}

const Filters = ({
  resetFilters,
  codingLanguages,
  prices,
  locales,
  setCodingLanguages,
  setPrices,
  setLocales,
  codingLanguagesCheckboxes,
  pricesCheckboxes,
  localesCheckboxes
}: FiltersProps) => {
  return (
    <div className="filters">
      <div className="filters__header">
        <Paragraph className="filters__title">Filtres</Paragraph>
        <Button
          type="button"
          onClick={resetFilters}
          className="filters__button"
        >
          Effacer
        </Button>
      </div>
      {size(codingLanguagesCheckboxes) > 1 && (
        <Checkboxes
          label="Technos"
          values={codingLanguages}
          checkboxes={codingLanguagesCheckboxes}
          onChange={(newCodingLanguages) =>
            setCodingLanguages(newCodingLanguages)
          }
        />
      )}
      {size(pricesCheckboxes) > 1 && (
        <Checkboxes
          label="Prix"
          values={prices}
          checkboxes={pricesCheckboxes}
          onChange={(newPrices) => setPrices(newPrices)}
        />
      )}
      {size(localesCheckboxes) > 1 && (
        <Checkboxes
          label="Langues"
          values={locales}
          checkboxes={localesCheckboxes}
          onChange={(newLocales) => setLocales(newLocales)}
        />
      )}
    </div>
  );
};

export default Filters;
