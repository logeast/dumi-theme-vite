import type { IApi } from "dumi";
import { join } from "path";
import { crossSpawn, winPath } from "dumi/plugin-utils";

export default (api: IApi) => {
  api.describe({ key: `dumi-theme:${require("../../package.json").name}` });
  // TODO: add your plugin code here

  let tailwind: any = null;
  const outputPath = "tailwind.css";

  api.onBeforeCompiler(() => {
    const inputPath = join(api.cwd, "../", "tailwind.css");

    const generatedPath = join(api.paths.absTmpPath, outputPath);
    const binPath = join(api.cwd, "node_modules/.bin/tailwind");
    console.log("generatedPath", generatedPath, binPath);

    /** 透过子进程建立 tailwindcss 服务，将生成的 css 写入 generatedPath */
    tailwind = crossSpawn(
      `${binPath}`,
      [
        "-i",
        inputPath,
        "-o",
        generatedPath,
        api.env === "development" ? "--watch" : "",
      ],
      {
        stdio: "inherit",
      },
    );
    tailwind.on("error", (m: any) => {
      api.logger.error("tailwindcss service encounter an error: " + m);
    });
  });

  /** 将生成的 css 文件加入到 import 中 */
  api.addEntryImports(() => {
    const generatedPath = winPath(join(api.paths.absTmpPath, outputPath));
    return [{ source: generatedPath }];
  });
};
