import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const owner = repo[0];
const name = repo[1];
const isUserSite = owner && name?.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: name && !isUserSite ? `/${name}` : '/',
});
