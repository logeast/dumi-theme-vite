---
group: 开发
---

# API

:::warning
dumi 提供的所有 API 均依赖 dumi 框架提供的编译时及运行时环境，所以这些 API 只能用于主题包开发或本地主题定制，请勿在项目源码（例如组件）中使用这些 API，将会导致项目发布后功能异常！
:::

dumi 2 基于 Umi 4，除了自身特有的 API 以外，同样也支持 Umi 4 提供的基础 API，两者均从 `dumi` 包名中引入。

```ts
import { useLocale, useAppData } from 'dumi';

// 其他逻辑
```

## 重点配置项

### openCodeSandbox

- 作用：在 CodeSandbox 中打开传入的 demo
- 场景：自定义 demo 预览器按钮 `PreviewerActions` 时可能需要用到
- 用法：

假设在项目中创建 `.dumi/theme/slots/PreviewerActions.tsx` 用于覆盖默认的预览器按钮：

```tsx | pure
import { openCodeSandbox } from 'dumi';
import DumiPreviewerActions from 'dumi/theme-default/slots/PreviewerActions';
import React from 'react';

const PreviewerActions: typeof DumiPreviewerActions = (props) => (
  <button type="button" onClick={() => openCodeSandbox(props)}>
    点我在 CodeSandbox 里打开 demo
  </button>
);
```
