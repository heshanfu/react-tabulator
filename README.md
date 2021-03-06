# react-tabulator

[![Build Status](https://travis-ci.org/ngduc/react-tabulator.svg?branch=master)](https://travis-ci.org/ngduc/react-tabulator)

React Tabulator is based on [tabulator](https://github.com/olifolkerd/tabulator) - an advanced table library with many useful features.

- Live Demo: [Codesandbox](https://codesandbox.io/s/oxmj02v696)

[![Screenshot](screenshot.png)](https://codesandbox.io/s/oxmj02v696)

### 🌟 Features

Tabulator's features:
```
  Filters      Sorting      Formatting    Grouping      Ajax      Editing    Virtualization
  Pagination   Themes       A11y          I18n          Layouts   Frozen Cols/Rows
  Key Binding  Responsive   Persisting    History       Calc      Validation
  Clipboard    Nested Tables
```

Plus:
- React 16.5.x
  - For React 15.x - use [this branch](https://github.com/ngduc/react-tabulator/tree/use-react-15)
- Typescript 3.x
- Tslint
- Jest-puppeteer for testing
- React Cell Editors / Filters (TBD)

### 📦 Usage

```JS
$ npm install react-tabulator

import 'react-tabulator/lib/styles.css'; // default theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }

<ReactTabulator data={data} />
```

- Code Example: [/src/ReactTabulatorExample.tsx](/src/ReactTabulatorExample.tsx)
- Code Example (React 15.x): [Codesandbox](https://codesandbox.io/s/oxmj02v696)

### 🔧 Commands

Require: `NodeJS v8.12.0 +` and `yarn` (optional)

```
$ npm run dev      Launch DEV mode
$ npm run build    Make a build

$ yarn test        Run tests using jest-puppeteer (with headless Chrome)
```

### 📖 Documentation

[Change Log](/CHANGELOG.md)

### 🙌 Thanks

All contributions are welcome!

[Tabulator](https://github.com/olifolkerd/tabulator)

While you're here, also check out [ez-formik](https://github.com/ngduc/ez-formik) - an easy way to build Forms with React.