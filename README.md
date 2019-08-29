[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) 

日本語のドキュメントは[ここ](https://qiita.com/motuo/items/3bd44058c79bbcba8e6b)にあります。

This project is based on [Create React App](https://github.com/facebook/create-react-app).
Available scripts are confirmed in this template. Please read [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) before using.
And this template contains [storybook](https://storybook.js.org/).
```sh
#To confirm components, access http://localhost:6006
npm run storybook
```

# Dependencies
This template mainly uses these libraries and tools.If you want to confirm all libraries,please show `package.json`.

1. [React](https://reactjs.org)
2. [Typescript](https://www.typescriptlang.org)
3. [material-ui](https://material-ui.com)
4. [react-redux](https://redux.js.org)
5. [typescript-fsa](https://github.com/aikoven/typescript-fsa)
6. [redux-saga](https://redux-saga.js.org)
7. [react-router](https://reacttraining.com/react-router)
8. [Storybook](https://storybook.js.org)

# How to use

```sh
# clone this repository
git clone https://github.com/joolen/react-project-template.git my-app
# change direcory you made
cd my-app
# install dependencies
npm install
# run project. you can access http://localhost:3000
npm start
```

# Directory structure

```sh
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .tsconfig.json
├── .storybook     # configurations for storybook
│   ├── addons.js
│   ├── config.js
│   └── webpack.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
│   ├── API        # Used for external communication
│   ├── components # Structure is based on atomic design
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   │   ├── pages
│   │   └── stories # Used for story book
│   └── containers  # Used for Redux connect
│   └── routes      # Used for React-router
│   │   └── index.tsx
│   ├── sagas        # Used for Redux-saga
│   │   └── index.ts # root saga
│   ├── modules      # Redux modules
│   ├── tests        # Used for Jest and Storyshots(Snapshot)
│   │   └── __snapshots__ # snapshot
│   │   │   └── storyshots.test.ts.snap
│   │   └── reducers      # test code for reducers
│   │   │   └── sample.test.ts
│   │   └── storyshots.test.ts # story shots
│   ├── App.css
│   ├── configureStore.ts # Used for Redux Store configurations
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   └── serviceWorker.ts
└─────
```