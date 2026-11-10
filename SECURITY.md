# Security policy

## Dependency policy

- Direct npm dependencies, Node.js, pnpm, JBang, and GitHub Actions are pinned.
- `pnpm-lock.yaml` is committed and CI installs it with `--frozen-lockfile`.
- pnpm rejects packages published less than seven days ago, trust downgrades for
  recent packages, unreviewed lifecycle scripts, and exotic transitive sources.
- Only reviewed native build packages may execute install-time scripts.
- Dependency Review blocks new moderate-or-higher vulnerabilities.
- Dependabot proposes updates through pull requests; updates are never
  automatically merged.
- A scheduled `pnpm audit` checks the unchanged lockfile every week.

The release-age rule is not normally bypassed. Updating an exact dependency may
therefore require waiting until it has aged seven days. Known vulnerabilities
are resolved with narrow, exact transitive overrides after both compatibility
and the seven-day quarantine have been checked.

Temporary exception: the EventCatalog 5.8.0 upgrade (10 November 2026) was
approved by the repository owner to proceed before every dependency reached
seven days. `pnpm-workspace.yaml` therefore carries a clearly marked
`minimumReleaseAgeExclude` block for `@eventcatalog/core@5.8.0`, `astro@7.3.8`
and `@astrojs/*`. Remove that block, and re-resolve the lockfile, after
16 November 2026. `minimumReleaseAge` itself stays at seven days.

## AsyncAPI supply-chain incident

AsyncAPI reported malicious npm releases in the November 2025 Shai-Hulud
incident. Those versions were removed from npm. This project adds defense in
depth by preventing unreviewed install scripts, pinning the complete dependency
graph, enforcing a release-age delay, and rejecting known incident locators
during lockfile verification.

If a dependency compromise is suspected:

1. Stop catalog workflows.
2. Treat any runner or workstation that executed an affected lifecycle script
   as compromised.
3. Rotate credentials visible to that process.
4. Audit GitHub security logs and unexpected repositories or workflow changes.
5. Replace the dependency through a reviewed pull request and regenerate the
   lockfile under the configured pnpm policy.

## Reporting

Report suspected vulnerabilities privately to the Arcadia Editions repository
maintainers. Do not include secrets or exploit details in a public issue.
