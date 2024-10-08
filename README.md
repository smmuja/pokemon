# Pokemon App

## Features

### Desktop View

![Desktop View](src/assets//docs/desktop-view.png)

### Mobile View

![Mobile View](src/assets//docs/mobile-view.png)

### Search Function

![Seacrh Function](src/assets//docs/search-function.png)

### Load More

![Load More](src/assets//docs/load-more.png)

### Pokemon Detail Page

![Pokemon Detail](src/assets//docs/pokemon-detail.png)

## Resources

### API

- https://pokeapi.co/

### Design Inspiration

- https://www.pokemon.com
- https://id.portal-pokemon.com/

## Tools and Dependencies

- Yarn
- Vite
- React
- TypeScript
- React Router Dom
- Tailwind
- Axios
- React Query

## Run in Local

### Development

`yarn`  
`yarn dev`

### Production preview

`yarn build`  
`yarn preview`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
