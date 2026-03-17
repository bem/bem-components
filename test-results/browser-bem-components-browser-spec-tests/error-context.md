# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]: "[plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension."
  - generic [ref=e6]: /Users/veged/Documents/bem-components/desktop.blocks/control/control.spec.js:1:0
  - generic [ref=e7]: 1 | import Control from 'bem:control'; | ^ 2 | import bemDom from 'bem:i-bem-dom'; 3 | import $ from 'bem:jquery';
  - generic [ref=e8]: at TransformPluginContext._formatLog (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:28999:43) at TransformPluginContext.error (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:28996:14) at TransformPluginContext.transform (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:27082:10) at async EnvironmentPluginContainer.transform (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:28797:14) at async loadAndTransform (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:22670:26) at async viteTransformMiddleware (file:///Users/veged/Documents/bem-components/node_modules/vite/dist/node/chunks/config.js:24542:20)
  - generic [ref=e9]:
    - text: Click outside, press Esc key, or fix the code to dismiss.
    - text: You can also disable this overlay by setting
    - code [ref=e10]: server.hmr.overlay
    - text: to
    - code [ref=e11]: "false"
    - text: in
    - code [ref=e12]: vite.test.config.js
    - text: .
```