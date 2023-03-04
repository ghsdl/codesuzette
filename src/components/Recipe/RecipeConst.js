const RECIPE_TYPE_CONST = {
  INGREDIENTS: { value: 'ingredients', label: 'Ingrédients' },
  INSTRUCTIONS: { value: 'instructions', label: 'Instructions' }
};

const RECIPE_INGREDIENTS_CONST = [
  [
    {
      title: 'Pâte à crêpes (environ 10)',
      className: 'paragraph--bold'
    },
    {
      label: '250 g de farine'
    },
    {
      label: '1 pincée de sel'
    },
    {
      label: '20 g de beurre fondu'
    },
    {
      label: '4 oeufs'
    },
    {
      label: '25 cl de lait + 25 cl de bière'
    },
    {
      label: `5 cl de fleur d'oranger`
    },
    {
      label: '(sucre optionnel selon votre goût)'
    }
  ],
  [
    {
      title: `Beurre d'orange et zestes`,
      className: 'paragraph--bold'
    },
    {
      label: '100 g de beurre pommade'
    },
    {
      label: '2 oranges (jus + zestes)'
    },
    {
      label: '5 cl de Grand Marnier'
    },
    {
      label: '15 g de sucre glace'
    }
  ]
];

const RECIPE_INSTRUCTIONS_CONST = [
  [
    {
      title: 'Préparez la pâte à crêpes',
      className: 'paragraph--bold'
    },
    {
      label:
        'Mélangez tous les ingédients sans faire de grumeau. Laissez reposer et faites le beurre suzette.',
      className: 'recipe__tab__row__paragraph'
    }
  ],
  [
    {
      title: 'Préparez le beurre suzette',
      className: 'paragraph--bold'
    },
    {
      label: `Dans un saladier, mettre le beurre pommade, versez le jus d'orange, mélangez, ajoutez les zestes, re-mélangez, ajoutez le sucre glace et le Grand Marnier.`,
      className: 'recipe__tab__row__paragraph'
    }
  ],
  [
    {
      title: 'Préparez les zestes confits (facultatif)',
      className: 'paragraph--bold'
    },
    {
      label: `Dans une casserole versez les zestes d'une orange avec de l'eau et portez à ébullition. Pesez et ajoutez le poids des zestes en sucre et un peu d'eau. Laissez cuire et réduire jusqu'à consistance sirupeuse.`,
      className: 'recipe__tab__row__paragraph'
    }
  ],
  [
    {
      title: 'Préparez les crêpes suzette',
      className: 'paragraph--bold'
    },
    {
      label: `Dans une crêpière chaude, faites vos crêpes. Pour une suzette, ajoutez le beurre suzette sur une face cuite (et les zestes confits si vous en avez). Pliez en 4 et réservez au four à 130°C (ou réchauffez vos crêpes pliées à la poêle) et laissez le beurre fondre. Dégustez.`,
      className: 'recipe__tab__row__paragraph'
    }
  ]
];

export {
  RECIPE_TYPE_CONST,
  RECIPE_INGREDIENTS_CONST,
  RECIPE_INSTRUCTIONS_CONST
};
