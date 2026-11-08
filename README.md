# fita-docs

Source of the [Fita](https://github.com/Fita-data/fita) documentation site, in English and Spanish.

Built with Astro Starlight from Markdown. The API and CLI reference pages are generated from the Fita repository, never written by hand.

## Layout

```
src/content/docs/
  en/
    getting-started/   from zero to a golden record in 15 minutes with the demo
    guides/            one task per page (connect Oracle, write rules for Spanish companies, prepare an SAP migration, connect an agent over MCP)
    concepts/          matching, survivorship, provenance, review, explained from scratch
    reference/         config, rule language, CLI and API (generated)
    operations/        install, sizing, backup, upgrade, security, troubleshooting
  es/                  same tree in Spanish
scripts/
  gen-reference.mjs    pulls OpenAPI and CLI help from a Fita build
docs/
  STYLE.md             writing rules for this site
  ROADMAP.md           planned pages
```

## Local preview

```sh
npm ci
npm run dev
```

## License

Apache License 2.0.
