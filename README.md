[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

# SportSee : the app to improve your body

This project is hosted on netlify: https://sportsee-schaff.netlify.app/

## Technologies

- JS
- CSS / SCSS
- React
- TypeScript

## Front End made with vite JS : templare react-ts

### Lauching the project

You will need to clone the main repo that you see in this github project and follow the instruction below on how to use this project and the two respectives directories

#### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- YARN

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

##### 2.2 Launching the project

- Fork the repository [BACKEND](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

#### 3. Endpoints

The data are in the public folder in json files.

- public/user

The data are just mocks. I made a repertory for each user. Each user have 4 different json files.

##### 3.1 Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:5173/user/${userId}/mainData.json` - retrieves information from a user.
- `http://localhost:5173/user/${userId}/performance.json` - retrieves information from a user performance.
- `http://localhost:5173/user/${userId}/session.json` - retrieves information from a user session of the week.
- `http://localhost:5173/user/${userId}/activity.json` - retrieves information from a user activity of the week.

##### 3.2 Examples of queries

- `http://localhost:5173/user/18/mainData.json` - Retrieves the data of the user with id 18

## Available Scripts

In the project directory, you can run:

### `npm install`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [VITE JS](https://vitejs.dev/guide/#browser-support).

To learn React, check out the [React documentation](https://reactjs.org/).

## Authors

MATHIEU SCHAFF schaff.mathieu.pro@gmail.com

## Licensing

This project was built under the Creative Commons licence.
