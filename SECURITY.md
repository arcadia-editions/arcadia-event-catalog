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
- The reviewed Astro renderer compatibility patch is hash-bound in the lockfile
  and verified as part of the dependency policy check.

The release-age rule is intentionally not bypassed for EventCatalog. Updating an
exact dependency may therefore require waiting until it has aged seven days.
Known vulnerabilities are resolved with narrow, exact transitive overrides
after both compatibility and the seven-day quarantine have been checked.

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
