https://tetr-js.herokuapp.com/

## Description

A tetris clone built using React.js, with a Ruby on Rails backend for handling high scores and leaderboard. Built by K. Montgomery and D. Jordan for the Flatiron School curriculum. It mostly follows the earlier rules of tetris, without kickoffs of walls or holds. It is built for keyboard; touch screen is outside of the scope of the project.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

If cloning the project, to prepare and run:

```sh
bundle install
rails db:create
npm install --prefix client
rails s
npm start --prefix client
```
Run this command to start the Postgres service:

```sh
sudo service postgresql start
```
