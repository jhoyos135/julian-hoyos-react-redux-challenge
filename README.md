# Julian Notes

- The Get Api Route wasn't working for me so I used a different Api to fetch the lucky number, it has similar results; you get a random number every time the username input is added and the form is submitted. So it gets a random number from 1 to 1000, you can find it in the saga.js file
- I added basic validation using redux forms
- the state is passed via redux and I'm using redux saga middleware for async functions


# React Code Challenge

Welcome to the React code challenge! This project will test your knowledge of React, Redux, and a few other related libraries. The submission of this project can be used prior to or as a supplement to an interview. This challenge was designed to be tough! Don't worry if you can't figure it out totally. In an interview, talking intelligently about the areas you were stuck is just as important. Good luck!

## Beginning the challenge

There are a couple things you need before you can begin working on the challenge:

- Git
- npm
- The code!

### Git

Git is an open source version control system. Though not technically necessary, having Git installed locally will make your life a lot easier. Go ahead and grab a copy of Git [here](https://git-scm.com/downloads) if you don't already have it. The rest of this README will assume you have Git installed and accessible on the command line.

### npm

npm (short for **Node.js package manager**) is a tool used to install Node.js dependencies and execute the challenge projects. For more information on npm and how to install it, see the [Get npm!](https://www.npmjs.com/get-npm) page on the npmjs.com website.

### The code!

The code challenge project is hosted on a public GitHub repository, which is likely where you are reading this README! You will need to download a copy of the repository and link it to a new repository under your own GitHub profile. This will ensure that no updates will be posted to the challenge repository and your work will be in your own GitHub profile, safe from other candidate's plagiarizing eyes. You do not need to make a pull request for your copy of the challenge repository; simply push your changes to your personal copy and send us a link to it.

Alright, so first we need to clone the challenge repository. To do that, open up a command prompt, navigate to a directory you like, and execute [this command](https://help.github.com/articles/cloning-a-repository/):

```bash
git clone https://github.com/react-code-challenge/the-challenge.git
```

You should now be able to change directories into the newly cloned repository:

```bash
cd the-challenge
```

Next, we need to change the upstream repository from the offical code challenge repository to one under your own control! To do this, first ensure you have a new empty repository created in [GitHub](https://github.com/). I'll wait a minute while you [go do that](https://help.github.com/articles/creating-a-new-repository/). Make sure you set your repository to public so we can access it!

Ready? Alright! Now we need the URL to your repository. It can be easily found by clicking on the green "Clone or download" button in your GitHub repository profile. It should look something like `https://github.com/your-profile-name/your-repo-name.git`

Execute [this command](https://help.github.com/articles/changing-a-remote-s-url/) to update your upstream repository, using your repository URL where indicated:

```bash 
git remote set-url origin your-repository-URL
```

After that, go ahead and execute a `git push` to get things moving into your new repository! Now you're ready to get started!

## Executing the challenge projects

The React code challenge consists of two applications - a back-end service layer and a front-end user interface layer. Both layers need to first have their dependencies downloaded before they can run.

To do this, open your favorite flavor of command prompt and navigate to the directory where you cloned your repository. Then, run the following commands to install the dependencies for the service layer:

```bash
cd src/service
npm install
```

That's it! It may take a couple minutes to download and install all the dependencies. The service layer is based on the Sails framework, so it comes with a bit of baggage.

After that command completes, hopefully without any major errors, do the same for the user interface application:

```bash
cd ../ui
npm install
```

The UI application is based on a popular React/Redux boilerplate project, so it comes with even more baggage than Sails! Not to worry, you don't need to concern yourself with all that stuff.

Oh yeah, by the way, to execute either project, just run `npm start` in their directory. The service layer should start up fine right from the get-go, but the user interface layer needs a bit of work. That's where you come in...

## Challenge rules

The ultimate goal of the challenge is to display the user's full name, which is entered via form fields, and the user's lucky number, which is provided via a service call. A completed challenge should produce a screen that looks something like this:

![Image](https://i.imgur.com/D4ziZjA.jpg)

You will use the following libraries to accomplish this:

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Form](https://redux-form.com/7.4.2/)

[Tachyons](https://tachyons.io/) is also included for styling purposes, if you choose to use it.

Guidelines:
* The user should be prompted for their first name, last name, and username using Redux Form. Include validation where appropriate; we will try to break your application!
* The completion screen should display the user's full name (first name + last name) and their lucky number
* The lucky number must be obtained through a service call using Redux Saga
* Most of the areas needing work are indicated via TODO comments
* In general, do not modify or remove other code already in place. There may be errors in the existing code, which should be corrected, and there may be missing lines, which should be added.
* Do not modify the service layer project at all
* Bonus points for self-documenting code, comments on non-obvious sections, and correcting all ESLint errors and warnings

When you have completed the challenge (or completed as much as possible), ensure all your changes are pushed to your GitHub repository and notify your recruiter or program point of contact. Please include a link to your repository so that the recruitment team can take a look and see how you did! Good luck and have fun!

## Project walkthrough

The React code challenge is composed of two applications - a service layer and a user interface layer.

### Service layer

The service layer does not need to be modified as part of this challenge. The only available endpoint is formatted as follows:

```http
GET /lucky-number?username={username}
```

### User interface layer

The user interface project is laid out according to the [smart/dumb component design paradigm](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43). In this case, smart components are called **containers** and dumb components are simply **components**. You will find them organized into two sub-directories in `src/ui/app`. Dumb components, also called presentational or display components, get their props passed down from their parents: the containers.

#### Containers

App

*This container is the main entry point for the user interface application. It defines the different routes that React Router uses to choose what to render based on the URL. This container does not need to be modified in this challenge.*

> TODOs: 0

Welcome

*This container is initially displayed when the application is loaded. Its purpose is to collect user information (i.e., username, first name, and last name).*

> TODOs: 1

LuckyNumber

*This container is used to display the completed challenge. It should show the user's full name (first name + last name) and their lucky number.*

> TODOs: 1

NotFound

*This container is rendered whenever an unknown route is requested. It does not need to be modified in this challenge.*

> TODOs: 0

Redux files (actions, constants, reducer, and saga)

*These files are part of the Redux infrastructure and may need to be modified or added to in order to complete the challenge.*

> TODOs: 7

#### Components

WelcomeForm

*This display component contains the Redux Form to collect user data. It should display text inputs for the username, first name, and last name of the user. Include validation to ensure the user enters their information.*

> TODOs: 3

LuckyNumberDisplay

*This display component receives the props passed down from the LuckyNumber container and displays them.*

> TODOs: 3

RFTextField

*This display component is a wrapper around Material UI's TextField component. It is used in Redux Form's Field component. This component does not need to be modified in this challenge.*

> TODOs: 0

## License

[MIT](https://opensource.org/licenses/MIT)
