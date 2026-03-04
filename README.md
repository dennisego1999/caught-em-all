# caught-em-all

A Vue app which consumes the [PokéAPI](https://pokeapi.co/).

## Architecture

```
src/
├── Contracts/
│   ├── IHttpClient.ts
│   └── IRepository.ts
├── Http/
│   └── HttpClient.ts
└── Pokemon/
    ├── IPokemon.ts
    ├── PokemonClient.ts
    ├── PokemonDTO.ts
    ├── PokemonRepository.ts
    └── PokemonService.ts
```

The app follows a `Service → Repository → Client` chain. Each layer has one responsibility.

- **HttpClient** — generic base class for HTTP requests. It is not tied to any specific API
- **PokemonClient** — extends `HttpClient`, provides the PokéAPI base URL
- **PokemonRepository** — fetches Pokémon-specific data, owns the endpoints. The only place that changes if an endpoint changes
- **PokemonDTO** — validates and maps the raw API response
- **PokemonService** — orchestrates repository calls and applies business logic such as formatting, filtering, and combining data. Never fetches directly

## Requirements

Ensure you are using the correct Node.js version by running the following command in the root of the repository:

```sh
nvm use
```

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
