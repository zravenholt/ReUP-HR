# Project Title: ReUp

> News and social aggregator for your favorite video games.

## Team

  - __Product Owner__: Zane Ravenholt
  - __Scrum Master__: Kurt Hoefer
  - __Development Team Members__: David Zou, Daryll Cheng

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Uses mySQL and React. Database is used to keep track of favorite games, other data is retrieved via APIs of various sites. Designed to be a casual and easy way to keep track of games that you follow and are interested in.

## Requirements

    "axios": "^0.15.3",
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "mysql": "^2.13.0",
    "react-redux": "^5.0.3",
    "react-router-dom": "^4.0.0",
    "react-slick": "^0.14.7",
    "redux": "^3.6.0",
    "redux-promise": "^0.5.3",
    "request": "^2.81.0",
    "sequelize": "^3.30.2",
    "slick-carousel": "^1.6.0",
    "twitter": "^1.7.0"
devDependencies:
    "babel-core": "^6.23.1",
    "babel-loader": "^6.4.0",
    "babel-preset-env": "^1.2.1",
    "babel-preset-react": "^6.23.0",
    "nodemon": "^1.11.0",
    "path": "^0.12.7",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.1"



## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run create:db (this only needs to be ran once per host machine).
npm run build:watch
npm start
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

