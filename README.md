<div align="center">
	<h3>Mediporta - recruitment task</h1>
	<p>The user interface of the tag browser provided by the
		<a href="https://api.stackexchange.com/docs">StackOverflow API</a> using React.
	</p>
</div>

## Prerequisites

-   [Node.js 20+](https://nodejs.org/en)

## Getting started

```bash
git clone https://github.com/MASSHUU12/mediporta-recruitment-task.git
cd mediporta-recruitment-task
npm i
npm start
```

## Docs

[Usage of /tags](https://api.stackexchange.com/docs/tags)

[Material UI](https://mui.com/material-ui/getting-started/)

[Material Icons](https://mui.com/material-ui/material-icons/)

[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Env

Usage of `.env` is optional.

If you want to use this file **copy** the `.env.example` file and rename it to `.env`.

#### VITE_USE_API

Defaults to `true` when the variable does not exist.

When set to `false` it uses `stored test data`, at this point any configuration in the menu does **not** work except to change the sort order.
