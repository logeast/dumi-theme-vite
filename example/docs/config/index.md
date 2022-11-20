---
nav: 配置项
toc: content
---

# 框架配置

dumi 2 基于 Umi 4，除了自身特有的配置项以外，同样也支持 Umi 4 提供的基础配置项，两者均在 `.dumirc.ts` 中配置。

```ts
// .dumirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  ...
});
```

## 重点配置项

### resolve

用于配置 Markdown 解析相关的行为，包含如下子项。

#### docDirs

- 类型：`string[]`
- 默认值：`['docs']`

配置 Markdown 文档的解析目录，路径下的 Markdown 文档会根据目录结构解析为路由。
