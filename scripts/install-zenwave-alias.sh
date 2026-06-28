#!/usr/bin/env bash
set -euo pipefail

alias_ref="${ZENWAVE_ALIAS:-release@zenwave360/zenwave-sdk}"

case "$alias_ref" in
  release@zenwave360/zenwave-sdk|snapshots@zenwave360/zenwave-sdk|next@zenwave360/zenwave-sdk)
    ;;
  *)
    echo "Unsupported ZENWAVE_ALIAS: $alias_ref" >&2
    echo "Allowed values: release@zenwave360/zenwave-sdk, snapshots@zenwave360/zenwave-sdk, next@zenwave360/zenwave-sdk" >&2
    exit 2
    ;;
esac

jbang alias add --fresh --force --name=zw "$alias_ref"

