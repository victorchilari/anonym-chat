# Anonym Chat

Join here [Anonym Chat](https://victorchilari.github.io/anonym-chat/).

### To develop:

#### In progres

- [ ] Auto clear N-5 messages after N messages

#### Need to impliment

- [ ] Impruve rerender of messages
- [ ] Impruve rerender of Messages like component
- [ ] Add report of user by message
- [ ] Dark Theme
- [ ] Impruve message's style

#### About opyimization!!!

##### Impruve rerender of messages

Messages' logic of show is wrong. Now, there is a map which rerender messages every time when the array of it is changed on DB.
Need to change map, to push! It will improve performance, also UX, users will not lose all messages when somebody will creal DB, it will be just when will refrash page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Builds the app for github pages to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See here [Anonym Chat](https://victorchilari.github.io/anonym-chat/)

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
