module.exports = {
  //environments que vamos a usar
  env: {
    browser: true, //Variables globales del navegador.
    amd: true, //Define require()y define()como variables globales.
    node: true, //Variables globales de Node.js y alcance de Node.js.
    es6: true //Habilita todas las características de ECMAScript 6 excepto los módulos
  },
  //extender las configuraciones que hemos agregado como plugin
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  //agregar reglas
  rules: {
    semi: ['error', 'always'],
    'no-console': 'warn',
    'prettier/prettier': ['off'],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ]
  }
};
