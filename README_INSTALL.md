# Build a Todo App usingReact + TypeScript + Firebase (real-time db)

```sh
npm i @material-ui/core
npm i @material-ui/icons
npm i firebase
```

## Deploy

```sh
npm install -g firebase-tools
firebase login
firebase init

  1. Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.

  ❯◯ Hosting: Configure and deploy Firebase Hosting sites

  2. Select a default Firebase project for this directory:
  my-app-name

  3. What do you want to use as your public directory?
  - build

  4. Configure as a single-page app (rewrite all urls to /index.html)?
  - Yes

  5. File public/index.html already exists. Overwrite?
  - No

  npm run build
  firebase deploy
```

## Githb workflow

Firebase CLI will detect .git

```sh
✔  Created service account github-action-123456789 with Firebase Hosting admin permissions.

✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_TODO_2_123D4.

i  You can manage your secrets at https://github.com/vast-coding/todo-2/settings/secrets.
```

```sh
  npm run build
  firebase deploy
```

delete `.firebase` folder every deploy
