# Welcome to TanStack.com!

This site is built with TanStack Router!

- [TanStack Router Docs](https://tanstack.com/router)

It's deployed as a Docker container on Railway.

- [Railway](https://railway.com/)

## Development

From your terminal:

```sh
bun install
bun dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Build and run

```sh
bun run build
bun run start
```

The build produces a self-contained Nitro server in `.output/`, started with Bun.

## Deploy to Railway (Docker)

The included `Dockerfile` builds the app and serves it with Bun.

1. Push this repo to GitHub.
2. Create a new project on Railway and deploy from the repo. Railway detects the
   `Dockerfile` and builds it automatically.
3. Railway injects `PORT`; the server listens on it (defaults to `3000`).

Build and run the container locally:

```sh
docker build -t garrett-post .
docker run -p 3000:3000 garrett-post
```

> Requires Bun >= 1.4. Older Bun releases cannot parse React DOM's production
> bundle in the Nitro server output.

## Editing and previewing the docs of TanStack projects locally

The documentations for all TanStack projects except for `React Charts` are hosted on [https://tanstack.com](https://tanstack.com), powered by this TanStack Router app.
In production, the markdown doc pages are fetched from the GitHub repos of the projects, but in development they are read from the local file system.

Follow these steps if you want to edit the doc pages of a project (in these steps we'll assume it's [`TanStack/form`](https://github.com/tanstack/form)) and preview them locally :

1. Create a new directory called `tanstack`.

```sh
mkdir tanstack
```

2. Enter the directory and clone this repo and the repo of the project there.

```sh
cd tanstack
git clone git@github.com:TanStack/tanstack.com.git
git clone git@github.com:TanStack/form.git
```

> [!NOTE]
> Your `tanstack` directory should look like this:
>
> ```
> tanstack/
>    |
>    +-- form/
>    |
>    +-- tanstack.com/
> ```

> [!WARNING]
> Make sure the name of the directory in your local file system matches the name of the project's repo. For example, `tanstack/form` must be cloned into `form` (this is the default) instead of `some-other-name`, because that way, the doc pages won't be found.

3. Enter the `tanstack/tanstack.com` directory, install the dependencies and run the app in dev mode:

```sh
cd tanstack.com
bun i
# The app will run on https://localhost:3000 by default
bun dev
```

4. Now you can visit http://localhost:3000/form/latest/docs/overview in the browser and see the changes you make in `tanstack/form/docs`.

> [!NOTE]
> The updated pages need to be manually reloaded in the browser.

> [!WARNING]
> You will need to update the `docs/config.json` file (in the project's repo) if you add a new doc page!
