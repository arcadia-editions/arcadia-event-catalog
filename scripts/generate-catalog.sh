#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repository_root="$(cd -- "$script_dir/.." && pwd)"
architecture_url="${ARCHITECTURE_URL:-https://raw.githubusercontent.com/arcadia-editions/arcadia-editions-docs/main/zenwave-architecture.yml}"
output_directory="$repository_root/event-catalog-content"
input_directory="$repository_root/.eventcatalog-build/input"
architecture_file="$input_directory/zenwave-architecture.yml"

case "$architecture_url" in
  https://*)
    ;;
  *)
    echo "ARCHITECTURE_URL must use HTTPS: $architecture_url" >&2
    exit 2
    ;;
esac

if [[ ! -d "$input_directory" ]]; then
  mkdir -p "$input_directory"
fi

jbang zw \
  -p io.zenwave360.sdk.plugins.EventCatalogPlugin \
  inputFile="$architecture_url" \
  preferredSource=git \
  allowFallback=false \
  linkSource=git \
  outputFolder="$output_directory"
