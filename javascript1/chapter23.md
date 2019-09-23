# React

### 组件生命周期

#### 装载组件触发 Mounting

* `getDefaultProps`
* `getInitialState`：初始化 this.state 的值，只在组件装载之前调用一次。
* `componentWillMount`：只会在装载之前调用一次，在 `render` 之前调用，可以在这个方法里面调用 `setState` 改变状态，并且不会导致额外调用一次 `render` 。
* `render`：渲染组件生成真实的 HTML 结构。
* `componentDidMount`：渲染组件的 HTML 结构之后被调用，可以获取到组件的 DOM 节点。

`componentDidMount` 不会在服务端被渲染的过程中调用。

#### 更新组件触发 Updating

* `componentWillReceiveProps`
* `shouldComponentUpdate`：在接收到新的 props 或者 state，将要渲染之前调用。默认情况下 `shouldComponentUpdate` 总会返回 true，如果确定新的 props 和 state 不会导致组件更新，则此处应该返回 false。如果 `shouldComponentUpdate` 返回 false，则 `render` 将不会执行，直到下一次 state 改变。
* `componentWillUpdate`：不能在此方法中使用 `this.setState()` 。
* `render`：渲染组件生成真实的 HTML 结构。
* `componentDidUpdate`：更新组件的 HTML 结构之后被调用，可以获取到组件的 DOM 节点。

这些方法不会在首次 `render` 组件的周期中调用

#### 卸载组件触发 Unmounting

* `componentWillUnmount`

