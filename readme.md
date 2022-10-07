## Recoil
- Redux
    - 单一数据流，集中式状态管理
    - 学习成本高
    - 非官方
    - 会造成其他组件不必要的渲染，组件树高
- Recoil
    - 分散的状态管理，Atom 、Selector
    - 官方
    - Hooks语法
- 安装 `npm i recoil`
- 使用
    - 初始状态，RecoilRoot
    - 定义状态，atom、selector
    - 使用状态，Recoil Hooks
- 概念
    - atom原子状态
        - atom储存状态的最小单位
        - atomFamily允许传参
        > 唯一键、默认值、副作用(更新状态要使用其他逻辑)、是否取消Immutable
        > Immutable优势：降低Mutable的复杂度、节省内存空间、随意穿越（Undo/Redo，Copy/Paste）、函数式编程
    - selector衍生状态，计算状态
        - selector以其他状态（atom、selector）为参数的纯函数
        - selectorFamily允许传参
        - constSlector
        - errorSelector
        > 唯一值、get(获取atom状态、衍生状态)、set、是否取消Immutable、cachePolicy
