# Arcadia Editions Event Catalog

Static EventCatalog site generated from the complete Arcadia Editions
architecture manifest with the ZenWave EventCatalog generator.

Published site:
<https://arcadia-editions.github.io/arcadia-event-catalog/>

## Design

The repository keeps three concerns separate:

- `event-catalog-content/` contains generated, versioned EventCatalog resources.
- `site/` contains the EventCatalog configuration, public assets, and custom
  components.
- `dist/` is the disposable static build published to the root of `gh-pages`.

ZenWave deliberately cleans its output directory while retaining `versioned/`
trees. Keeping the generated content isolated prevents generation from deleting
the EventCatalog application or its workflows. `pnpm build` combines the
generated content and site overlay under `.eventcatalog-build/catalog` before
running EventCatalog.

## Pinned toolchain

- Node.js `24.18.1`
- pnpm `10.34.5`, including its package-manager integrity hash
- EventCatalog `4.3.2`
- JBang `0.138.0` in CI
- Vitest `4.1.10`

EventCatalog `4.3.2` was selected on 31 July 2026. It was published on 23 July,
making it eight days old; newer `4.3.3` and `4.3.4` releases had not passed the
repository's seven-day release-age policy.

The release's `@astrojs/react@6.0.1` renderer imports the build-only
`astro:react:opts` virtual module from an entrypoint Astro leaves external
during static prerendering. Because this catalog invokes `react()` without
options, the reviewed patch in `patches/` replaces that unresolved import with
its equivalent empty object. pnpm records the patch hash in the lockfile; remove
the patch when an upgraded, seven-day-old Astro integration no longer needs it.

## Local development

Prerequisites are Node.js 24.18.1, Corepack, Java 21, JBang, and Git Bash.

```bash
corepack enable
corepack prepare pnpm@10.34.5 --activate
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm dev
```

To regenerate the complete catalog with the ZenWave release catalog:

```bash
ZENWAVE_ALIAS=release@zenwave360/zenwave-sdk pnpm run zenwave:setup
pnpm generate
```

To exercise an unpublished generator build, replace `release` with `snapshots`
or `next`. The workflow also exposes this as its `zenwave_alias` manual input
and accepts the repository variable `ZENWAVE_ALIAS`. The script rejects other
values.

The generation defaults match
`ArcadiaEditionsEventCatalogGeneratorTest.java`:

- architecture manifest:
  `https://raw.githubusercontent.com/arcadia-editions/arcadia-editions-architecture/main/zenwave-architecture.yml`
- `preferredSource=git`
- `allowFallback=false`
- `linkSource=git`

The initial complete generation reports malformed upstream OpenAPI input for
`payments-processing`, `fulfillment-shipping`, and `notifications-consumer`,
then continues with their other available sources. EventCatalog also warns
that several enum-like ZDL field types are referenced but are not emitted as
standalone Entity resources. These are source-model warnings, not build
failures; resolve them in the API specifications or ZenWave generator rather
than hand-editing generated catalog files.

## Automation

`update-catalog.yml` accepts:

- `repository_dispatch` with event type `api-updated`
- manual `workflow_dispatch`

It regenerates the complete catalog, verifies dependencies, runs tests, builds
the static site, pushes a temporary `catalog/update-*` branch, opens a pull
request, and merges through `main` branch protection using only the
repository-scoped `GITHUB_TOKEN`.

GitHub suppresses ordinary workflow recursion for writes made with
`GITHUB_TOKEN`. After the merge, the update workflow explicitly dispatches
`publish-pages.yml`; ordinary human or GitHub App merges also trigger it through
the `push` event.

The publishing workflow rebuilds `main`, replaces the root of `gh-pages` with
`dist/`, writes `.nojekyll`, and explicitly requests a Pages build. No
third-party deployment action or PAT is required.

An API repository can request regeneration with:

```bash
gh api \
  --method POST \
  repos/arcadia-editions/arcadia-event-catalog/dispatches \
  -f event_type=api-updated
```

Cross-repository dispatch requires a GitHub App installation token or another
fine-grained credential that can access this repository; a source repository's
`GITHUB_TOKEN` is scoped to the source repository. Once dispatched, all catalog
branch, PR, merge, and Pages operations use this repository's `GITHUB_TOKEN`.

## Required GitHub settings

After the local repository is pushed:

1. Protect `main` and require pull requests.
2. Give workflows read/write permissions and allow workflows to create and
   approve pull requests.
3. Configure Pages to deploy from `gh-pages` at `/(root)`.
4. Enable the dependency graph, Dependabot alerts, and dependency security
   updates.
5. Optionally set `ZENWAVE_ALIAS` to one of the three allowed alias references.

If PR checks are required, remember that GitHub places workflows triggered by a
`GITHUB_TOKEN`-created PR in an approval-required state. Either approve those
runs, exempt this trusted regeneration workflow in the ruleset, or use an
organization GitHub App. A PAT is not necessary.

## Dependency security

See [SECURITY.md](SECURITY.md). In addition to exact direct versions and the
lockfile, pnpm enforces a seven-day release delay, trust-level non-downgrade,
registry-only transitive dependencies, and an allowlist for install scripts.
GitHub Actions are pinned by complete commit SHA and maintained through
Dependabot pull requests. Exact transitive overrides close the advisories in
EventCatalog's release graph; `pnpm audit --audit-level moderate` currently
reports no known vulnerabilities.
