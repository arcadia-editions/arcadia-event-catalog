import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
// @ts-expect-error plain ESM script module
import { verifyCatalog } from '../scripts/lib/verify-catalog.mjs';

let directory: string;

async function resource(relative: string, id: string, version = '0.1.0') {
  const file = path.join(directory, 'domains', relative, 'index.mdx');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `---\nid: "${id}"\nname: "${id}"\nversion: "${version}"\n---\n`);
}

const manifest = {
  domains: {
    orders: {
      id: 'orders',
      subdomains: { checkout: { id: 'orders.checkout', services: { svc: { id: 'orders.checkout.svc', version: '0.1.0' } } } },
    },
  },
};

beforeEach(async () => {
  directory = await mkdtemp(path.join(tmpdir(), 'verify-catalog-'));
});
afterEach(async () => {
  await rm(directory, { recursive: true, force: true });
});

async function validCatalog() {
  await resource('orders', 'orders', '0.0.1');
  await resource('orders/subdomains/orders.checkout', 'orders.checkout', '0.0.1');
  await resource('orders/subdomains/orders.checkout/services/orders.checkout.svc', 'orders.checkout.svc');
}

describe('verifyCatalog', () => {
  it('accepts a catalog that matches the manifest', async () => {
    await validCatalog();
    expect(await verifyCatalog({ contentDirectory: directory, manifest })).toEqual([]);
  });

  it('fails an empty catalog', async () => {
    await mkdir(path.join(directory, 'domains'), { recursive: true });
    expect(await verifyCatalog({ contentDirectory: directory })).toEqual(['the generated catalog contains no resources']);
  });

  it('fails when a manifest service is missing', async () => {
    await resource('orders', 'orders', '0.0.1');
    const errors = await verifyCatalog({ contentDirectory: directory, manifest });
    expect(errors.join('\n')).toContain("'orders.checkout.svc' is in the manifest but missing");
  });

  it('fails when a service version differs from the manifest', async () => {
    await validCatalog();
    await resource('orders/subdomains/orders.checkout/services/orders.checkout.svc', 'orders.checkout.svc', '0.0.0');
    const errors = await verifyCatalog({ contentDirectory: directory, manifest });
    expect(errors.join('\n')).toContain('is 0.0.0 in the catalog but 0.1.0 in the manifest');
  });

  it('fails on a service left over from the manifest', async () => {
    await validCatalog();
    await resource('orders/subdomains/orders.checkout/services/orders.checkout.old', 'orders.checkout.old');
    const errors = await verifyCatalog({ contentDirectory: directory, manifest });
    expect(errors.join('\n')).toContain("'orders.checkout.old'");
  });

  it('ignores versioned history and checks structure only without a manifest', async () => {
    await validCatalog();
    await resource('orders/subdomains/orders.checkout/services/orders.checkout.svc/versioned/0.0.0', 'orders.checkout.svc', '0.0.0');
    expect(await verifyCatalog({ contentDirectory: directory })).toEqual([]);
  });

  it('fails on an invalid version', async () => {
    await resource('orders', 'orders', 'not-a-version');
    expect((await verifyCatalog({ contentDirectory: directory })).join('\n')).toContain("invalid version 'not-a-version'");
  });
});
