# tdimnet.github.io

My portfolio built with React, TypeScript, Vite, and Tailwind.


## Prerequisites

- Node (>=18.14)


## Setting Up

### Cloning the repo

- with ssh

```
git@github.com:tdimnet/tdimnet.github.io.git
```

- with https

```
https://github.com/tdimnet/tdimnet.github.io.git
```


### Installing the dependencies 

```
yarn
```


### Lauching the dev server

```
yarn dev
```


### Building for production

```
yarn build
```


### Previewing the build artifact

```
yarn preview
```

**Easy, right?**


## Workflow

This project uses GitHub Actions and has an automated deployment process.
The automated building process occurs only when something changes on `master`.

- The production branch is `master`.
- The dev (local devevelopment) branch is `dev`.
- Each branch starts from `dev`, then is merged to `dev`, and finally `dev` is
  merged to `master`.

## Architecture

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


