## [0.5.10] - 2018-10-14

### Added
- `__tests__/ui` - UI for tests.
- `src/css` - css files for themes.
- `use-react-15` branch for React 15.x and `src/React15Tabulator.tsx`
### Changed
- use getDerivedStateFromProps so we can set grid data from state. (updated Examples)
- switch to jest-puppeteer because enzyme couldn't render tabulator data. (got empty grid)

## [0.4.5] - 2018-10-11

### Added
- ConfigUtils.tsx to handle props and options.
- all Tabulator options can be set as React Tabulator props.
- example of editable table.
- "yarn test" using Jest, Enzyme.
- .travis.yml

## [0.3.4] - 2018-10-10

### Added
- first working version.