# Commenting Tool

[Open in CodeSandbox](https://codesandbox.io/s/github/sarimarton/commenting-tool)

This app contains 2 versions of the assignment, in a single app, side-by-side.

The first version was made for the sake of simplicity. It only uses plain React useState hooks.

The second version uses Redux with strongly typed hooks and middleware. It better scales in the long run IMO, with enough awareness on the selectors of course. I didn't want to be opinionated with other directions, but if I wanted a reactive state system, I'd choose Recoil, and if I faced more complex behaviors, I'd go with XState.

#### Stack:
- Snowpack
- React
- Redux
- Tailwind

#### Installation
  `npm install`

#### Run
  `npm start`

  It runs the app in the development mode. Open http://localhost:8080 to view it in the browser.

#### Build
  `npm run build`

Builds a static copy of the app to the `build/` folder.
