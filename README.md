# Astro 个人网站

参照简洁个人博客的阅读体验制作。主页有文章列表与搜索，另有文章页、关于页和深色模式。三篇现有文章均为演示内容。

## 本地运行

安装 Node.js 22+ 和 pnpm，然后运行：

```sh
pnpm install
pnpm dev
```

打开终端显示的本地地址。正式构建运行 `pnpm build`。

## 改成你的网站

- 在 `src/site.ts` 修改网站名、首页介绍和关于页。
- 在 `src/content/posts/` 新增 Markdown 文件。复制现有文章的 YAML 头部，填写 `title`、`date`、`category`、`summary`，正文写在第二个 `---` 之后。
- 若暂时不想显示某篇文章，在头部添加 `draft: true`。
- 在 `style.css` 修改颜色和排版。

## 发布到 GitHub Pages

1. 在自己的 GitHub 账号下创建仓库。若仓库名为 `用户名.github.io`，网址就是 `https://用户名.github.io/`；其他仓库名会成为网址路径的一部分。
2. 将本项目源文件推送到 `main` 分支。不要上传 `node_modules`、`dist` 或 `.astro`。
3. 在仓库 **Settings → Pages → Build and deployment** 把 **Source** 设为 **GitHub Actions**。
4. `.github/workflows/deploy.yml` 会在每次推送到 `main` 后自动构建和发布。`astro.config.mjs` 会按 GitHub 仓库名自动设置网址路径。

工作流参照 [Astro 官方 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)。
