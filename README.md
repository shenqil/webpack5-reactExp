# webpack5-reactExp
webpack5 创建一个react项目


# webpack5 创建react工程
## 1.clone 一份 [webpack5 创建前端工程](https://github.com/fssqLove/webpack5-webExp)

## 2.安装babel 处理react代码
```js
npm install --save-dev babel-loader @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env core-js @babel/preset-typescript @babel/preset-react
```

## 3.创建一个新的ts配置文件 `tsconfig.json`
+ 3.1
```js
tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib
```
+ 3.2 修改配置文件
```
/**省略代码**/
    "jsx": "react",                           /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
/**省略代码**/
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
```

## 4.创建babel配置文件 `.babelrc`
```js
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "ie": "8"
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

## 5. 修改`webpack.common.js`的js处理
```
entry: './src/main.tsx',
module: {
    rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            ]
   }
```

## 6.修改 `main.ts` 为 `main.tsx`
```
import { add } from './assets/js/test';
import './assets/font/iconfont.css';
import './assets/css/index.scss';

import img1 from './assets/img/1.jpg'
import img2 from './assets/img/2.jpg'

import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [state, setState] = useState("CLICK ME");

  return <div>
    <div className="box">
      <div className="content">
        德玛西亚，永不退缩
            <i className="iconfont icon-xiazai"></i>
        <img src={img1} />
        <img src={img2} />
      </div>
    </div>
    <button onClick={() => setState("CLICKED")}>{state}</button>
  </div>;
}

render(<App />, document.getElementById("root"));

add(1, 2)
  .then((res) => {
    console.log(res, 'add');
  });

```

## 7. 安装 `react react-dom`
```
npm i react react-dom -S 
```
```
npm i @types/react @types/react-dom -D
```

## 8.修改`index.html`
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="root">
    </div>
</body>

</html>
```

## 9.增加声明文件`index.d.ts`
```
import img1 from './assets/img/1.jpg'
import img2 from './assets/img/2.jpg'
```

[源码](https://github.com/fssqLove/webpack5-reactExp)

