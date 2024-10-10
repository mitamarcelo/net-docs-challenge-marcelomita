# Game of Life

This project is an implementation of Conway's Game of Life using React, Redux, and TypeScript.

## Description

The Game of Life is a cellular automaton devised by mathematician John Conway. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The game is played on a 2D grid of cells, where each cell can be in one of two states: alive or dead.

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/marcelomita/net-docs-challenge-marcelomita.git
   ```

2. Navigate to the project directory:

   ```
   cd net-docs-challenge-marcelomita
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.

### `npm run lint` or `yarn lint`

Runs the linter to check for code style issues.

### `npm run preview` or `yarn preview`

Locally preview the production build.

### `npm test` or `yarn test`

Runs the test suite.

### `npm run test:watch` or `yarn test:watch`

Runs the test suite in watch mode.

### `npm run test:coverage` or `yarn test:coverage`

Runs the test suite and generates a coverage report.

## Testing

This project uses Vitest for unit testing. Test files are located in the `src/spec` directory. To run the tests, use the `npm test` or `yarn test` command.

## Project Structure

- `src/components`: React components
- `src/store`: Redux store setup, slices, and selectors
- `src/hooks`: Custom React hooks
- `src/spec`: Test files

## Test Coverage

The last test coverage report is available in the `coverage` directory. And it shows a coverage of

- 97.98% Statements
- 94.05% Branches
- 100% Functions
- 97.98% Lines

PS.: There are some files that are not being covered by the tests, like the styles, configuration files main.tsx. The complete list of excluded files can be found in the `vitest.config.ts` file.

## License

This project is licensed under the MIT License.
