# webpack react 工程使用eslint 配置 airbnb 规则

## 1.首先从创建一个 react 工程 [地址](https://github.com/shenqil/webpack5-reactExp)

## 2.先安装airbnb基础规则 运行 `npx install-peerdeps --dev eslint-config-airbnb`
+ 等同于运行 `npm install eslint-config-airbnb@18.2.1 eslint@^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react@^7.21.5 eslint-plugin-react-hooks@^1.7.0 --save-dev`

## 3.安装airbnb-typescript规则 
+ 运行   `npm install eslint-config-airbnb-typescript  @typescript-eslint/eslint-plugin@^4.29.3  @typescript-eslint/parser@^4.29.3  --save-dev`

## 4.配置 `.eslintrc.json`
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.eslint.json"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks"
  ],
  "ignorePatterns": ["node_modules/", "build/", "dist/", "e2e/"]
}

```
[源码](https://github.com/shenqil/webpack5-reactExp/tree/eslint-airbnb)
