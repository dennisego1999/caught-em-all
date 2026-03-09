# caught-em-all

A Vue app which consumes the [PokéAPI](https://pokeapi.co/).

---

## Architecture

```
src/
└── js/
    └── Classes/
        ├── Clients/
        │   └── HttpClient.ts
        ├── Contracts/
        │   ├── IHttpClient.ts
        │   ├── IPokemonClient.ts
        │   └── IRepository.ts
        ├── Errors/
        │   ├── HttpError.ts
        └── Pokemon/
            ├── InvalidPokemonError.ts
            ├── IPokemon.ts
            ├── IPokemonRepository.ts
            ├── PokemonClient.ts
            ├── PokemonDTO.ts
            ├── PokemonRepository.ts
            └── PokemonService.ts
```

The app follows a `Service → Repository → Client` chain. Each layer has one responsibility and only talks to the layer directly below it through a contract.

This means:

- Swap `fetch` for `axios`? Only `HttpClient` changes
- Backend URL or endpoint changes? Only `PokemonClient` changes
- Business logic changes? Only the `Service` changes
- Components only ever call the `Service` — they have no knowledge of HTTP, endpoints or data mapping

The contracts (`IHttpClient`, `IRepository<T>`) know nothing about Pokémon business logic — they work for any API you add in the future.

---

### Classes

| Class               | Responsibility                          | Notes                                                                |
| ------------------- | --------------------------------------- | -------------------------------------------------------------------- |
| `HttpClient`        | Does HTTP requests                      | No knowledge of any specific API or URL                              |
| `PokemonClient`     | Owns all PokéAPI endpoints              | Extends `HttpClient`, implements `IPokemonClient`, defines all paths |
| `PokemonRepository` | Fetches and maps Pokémon data           | Calls named client methods — no knowledge of URL structure           |
| `PokemonDTO`        | Validates and maps the raw API response | Acts as the boundary of trust between the API and the app            |
| `PokemonService`    | Applies business logic                  | The only layer components ever interact with                         |

### Contracts

| Contract             | Responsibility                                         |
| -------------------- | ------------------------------------------------------ |
| `IHttpClient`        | Contract any HTTP client must implement                |
| `IPokemonClient`     | Contract for the PokéAPI client — defines its methods  |
| `IRepository<T>`     | Contract any repository must implement                 |
| `IPokemonRepository` | Extends `IRepository<T>` with Pokémon-specific queries |

---

## Requirements

Ensure you are using the correct Node.js version by running the following command in the root of the repository:

```sh
nvm use
```

---

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
