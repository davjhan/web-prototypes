# David's Web Prototype Mono-repo

## Description

This is a mono-repo containing small scratch web projects.

### Dependencies

- **SvelteKit**
- **TailwindCSS**

## Local Development

1. Clone the repo

```shell
git clone https://github.com/davjhan/web-prototypes.git
```

2. Run in developer mode

From the root directory:

```shell
npm run dev
```

## Structure

### `packages/...`

Where all the sub packages are.

### `packages/sveltekit`

The Sveltekit project.

### `packages/app`

Just the high-level app configurations. `sveltekit` sources routes from `@davjhan/app/routes` for example.

### `packages/clients/*`

Where individual projects live. Each project has its own auto-generated code name.

## Creating a new prototype

1. Create a new project under `packages/clients/<project-name>`.
2. Add a route to expose it under `packages/app/routes`.