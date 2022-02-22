import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export interface IDialogProps{
  hideDialog:Function
}
export default class Dialog extends Component<IDialogProps> {
  node:HTMLElement;

  constructor(props:IDialogProps) {
    super(props);

    this.node = document.createElement('div');
    this.node.classList.add('sss');
  }

  componentDidMount() {
    document.body.appendChild(this.node);
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  render() {
    const { hideDialog, children } = this.props;
    return createPortal(
      <div>
        {children}
        {typeof hideDialog === 'function' && (
        <button onClick={() => hideDialog()} type="button">关闭窗口</button>
        )}
      </div>, this.node,
    );
  }
}
