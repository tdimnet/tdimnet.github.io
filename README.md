# tdimnet.github.io

My portfolio built with Astro, TypeScript, and Tailwind.


## 1. Prerequisites

- Node (>=20)


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


### 2.3. Launching the dev server

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


### 2.6. Type-checking

```
yarn typecheck
```

**Easy, right?**


## 3. Workflow

This project uses GitHub Actions and has an automated deployment process.
The automated building process occurs only when something changes on `master`.

- The production branch is `master`.
- The dev (local development) branch is `dev`.
- Each branch starts from `dev`, then is merged to `dev`, and finally `dev` is
  merged to `master`.
- I am using a GitHub flow approach. Each branch contains a theme: `core`,
  `feat`, `fix`.

The site is fully static. Astro builds it to the `dist/` folder, and the
GitHub Actions workflow uploads that folder to GitHub Pages.


## 4. Architecture

All the code belongs in the `src` folder, except static assets, which live in
`public/` (and are served from the site root, e.g. `/assets/...`).

From there, here are the rules I follow:

- `src/pages`: each `.astro` file is a route (file-based routing). `index.astro`
  is the home page.
- `src/layouts`: page shells and structural wrappers (e.g. `Layout.astro`,
  `BannerWrapper.astro`).
- `src/components`: reusable UI components (`Header`, `Footer`, `Heading`, …).
- `src/icons`: SVG icons as `.astro` components.
- `src/data`: typed data sources (projects, courses, articles, …).
- `src/utils`: helper functions.
- `src/styles`: global styles and Tailwind directives.
