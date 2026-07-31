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
curl \
  --fail \
  --location \
  --proto '=https' \
  --retry 3 \
  --retry-all-errors \
  --show-error \
  --silent \
  --tlsv1.2 \
  --output "$architecture_file" \
  "$architecture_url"

jbang zw \
  -p io.zenwave360.sdk.plugins.EventCatalogPlugin \
  inputFile="$architecture_file" \
  preferredSource=git \
  EventCatalogAsyncApiProcessor.allowFallback=false \
  EventCatalogOpenApiProcessor.allowFallback=false \
  EventCatalogZdlProcessor.allowFallback=false \
  EventCatalogGenerator.allowFallback=false \
  linkSource=git \
  outputFolder="$output_directory"
