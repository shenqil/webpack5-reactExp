import React, { useState } from 'react';
import { render } from 'react-dom';
import { add } from './assets/js/test';
import './assets/font/iconfont.css';
import './assets/css/index.scss';

import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';

function App() {
  const [state, setState] = useState('CLICK ME');

  return (
    <div>
      <div className="box">
        <div className="content">
          德玛西亚，永不退缩
          <i className="iconfont icon-xiazai" />
          <img alt="" src={img1} />
          <img alt="" src={img2} />
        </div>
      </div>
      <button type="button" onClick={() => setState('CLICKED')}>{state}</button>
    </div>
  );
}

render(<App />, document.getElementById('root'));

add(1, 2)
  .then((res) => {
    console.log(res, 'add');
  });
