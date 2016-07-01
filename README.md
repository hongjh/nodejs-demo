# nodejs-learning

## 安装包

` npm install express `

或者

` npm i express `


### 调试工具
node-inspector




Node.js 在调用某个包时，会首先检查包中 package.json 文件的 main 字段，将其作为
包的接口模块，如果 package.json 或 main 字段不存在，
会尝试寻找 index.js 或 index.node 作为包的接口。



Node.js 适合 I/O 密集型的应用，而不是计算密集型的应用，
因为一个 Node.js 进程只有一个线程，因此在任何时刻都只有一个事件在执行。如果这个事
件占用大量的 CPU 时间，执行事件循环中的下一个事件就需要等待很久，因此 Node.js 的一
个编程原则就是尽量缩短每个事件的执行时间。


process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态
的对象，提供了一个与操作系统的简单接口。