import { useState } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import {
  RECIPE_TYPE_CONST,
  RECIPE_INGREDIENTS_CONST,
  RECIPE_INSTRUCTIONS_CONST
} from './RecipeConst';
import { Tabset, Tab } from 'react-rainbow-components';
import isEqual from 'lodash/isEqual';
import './Recipe.scss';

const Recipe = () => {
  const [selected, setSelected] = useState(RECIPE_TYPE_CONST.INGREDIENTS.value);

  const handleOnSelect = () => {
    setSelected(
      selected === RECIPE_TYPE_CONST.INGREDIENTS.value
        ? RECIPE_TYPE_CONST.INSTRUCTIONS.value
        : RECIPE_TYPE_CONST.INGREDIENTS.value
    );
  };

  return (
    <>
      <Tabset
        variant="line"
        fullWidth={true}
        onSelect={handleOnSelect}
        activeTabName={selected}
        className="recipe__tabset"
      >
        <Tab
          name={RECIPE_TYPE_CONST.INGREDIENTS.value}
          label={RECIPE_TYPE_CONST.INGREDIENTS.label}
        />
        <Tab
          name={RECIPE_TYPE_CONST.INSTRUCTIONS.value}
          label={RECIPE_TYPE_CONST.INSTRUCTIONS.label}
        />
      </Tabset>
      {isEqual(selected, RECIPE_TYPE_CONST.INGREDIENTS.value) ? (
        <div className="recipe__tab">
          {RECIPE_INGREDIENTS_CONST.map((RECIPE_INGREDIENT, index) => (
            <div key={index} className="recipe__tab__row">
              {RECIPE_INGREDIENT.map((recipe, index) => (
                <Paragraph
                  key={index}
                  className={recipe.className && recipe.className}
                >
                  {recipe.title ? recipe.title : recipe.label}
                </Paragraph>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="recipe__tab">
          {RECIPE_INSTRUCTIONS_CONST.map((RECIPE_INSTRUCTION, index) => (
            <div key={index} className="recipe__tab__row">
              {RECIPE_INSTRUCTION.map((recipe, index) => (
                <Paragraph
                  key={index}
                  className={recipe.className && recipe.className}
                >
                  {recipe.title ? recipe.title : recipe.label}
                </Paragraph>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Recipe;
