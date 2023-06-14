# tdimnet.github.io

My portfolio built with React, TypeScript, Vite, and Tailwind.


## 1. Prerequisites

- Node (>=18.14)


## 2. Setting Up

### 2.1. Cloning the repo

- with ssh

```
git@github.com:tdimnet/tdimnet.github.io.git
```

- with https

```
https://github.com/tdimnet/tdimnet.github.io.git
```


### 2.2. Installing the dependencies 

```
yarn
```


### 2.3. Lauching the dev server

```
yarn dev
```


### 2.4. Building for production

```
yarn build
```


### 2.5. Previewing the build artifact

```
yarn preview
```

**Easy, right?**


## 3. Workflow

This project uses GitHub Actions and has an automated deployment process.
The automated building process occurs only when something changes on `master`.

- The production branch is `master`.
- The dev (local devevelopment) branch is `dev`.
- Each branch starts from `dev`, then is merged to `dev`, and finally `dev` is
  merged to `master`.
- I am using a GitHub flow approach. Each branch contains a theme: `core`,
  `feat`, `fix`.

## 4. Architecture

All the code belongs in the `src` folder.

From there, here are the rules I follow:

- Each component lives inside its own folder. For example, the `Header`
  component is located inside `src/components/Header`.
- Each component is named `index`.
- Each component is exported as `default`.
- There are three different types of components at the moment:
    - `icon`: svg icons.
    - `page`: web pages
    - `component`: everything else. I didn't add folders for typography and
      layout, yet!


