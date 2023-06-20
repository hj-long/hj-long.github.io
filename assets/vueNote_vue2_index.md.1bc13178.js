import{_ as s,o as a,c as l,O as n}from"./chunks/framework.95b9d657.js";const h=JSON.parse('{"title":"vue2","description":"","frontmatter":{},"headers":[],"relativePath":"vueNote/vue2/index.md","filePath":"vueNote/vue2/index.md"}'),e={name:"vueNote/vue2/index.md"},p=n(`<h1 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h1><h2 id="一、介绍" tabindex="-1">一、介绍 <a class="header-anchor" href="#一、介绍" aria-label="Permalink to &quot;一、介绍&quot;">​</a></h2><ol><li>vue 就是一个 js 文件: vue.js</li><li>官方叫法： 渐进式 javaScript 框架</li><li>为什么要设计成一个 渐进式的框架？ <ul><li>vue.js 是一个核心库（相当于毛坯房）</li><li>可以根据自己需要添加各种功能插件（安装下载）：都是依赖于vue.js</li><li>例如：vue.js + router.js + vuex.js + elementui + xx.js</li></ul></li></ol><p>也就是从 毛坯房 + 家具 + ...... 渐进式地搭建和完善项目</p><h2 id="二、脚手架-vue-cli" tabindex="-1">二、脚手架（vue-cli） <a class="header-anchor" href="#二、脚手架-vue-cli" aria-label="Permalink to &quot;二、脚手架（vue-cli）&quot;">​</a></h2><h3 id="_2-1-介绍" tabindex="-1">2.1 介绍 <a class="header-anchor" href="#_2-1-介绍" aria-label="Permalink to &quot;2.1 介绍&quot;">​</a></h3><ol><li><p>点击 <a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">官网</a> 进行下载安装等工作</p></li><li><p>测试 <code>vue -v</code> 有相关提示即表示安装成功</p></li><li><p>创建项目： <code>vue create project_name</code> 然后根据自己的需要选择创建项目</p></li><li><p>启动项目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd project_name</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run serve</span></span></code></pre></div></li></ol><h3 id="_2-2-脚手架目录结构" tabindex="-1">2.2 脚手架目录结构 <a class="header-anchor" href="#_2-2-脚手架目录结构" aria-label="Permalink to &quot;2.2 脚手架目录结构&quot;">​</a></h3><ol><li><p>vue.config.js： 配置文件</p><ul><li>可以用来配置脚手架的一些功能，具体看 <a href="https://cli.vuejs.org/zh/config/#vue-config-js" target="_blank" rel="noreferrer">官方文档</a></li></ul></li><li><p>README.md: 项目说明文件</p><ul><li>项目的介绍说明文档</li></ul></li><li><p>package.json: 项目的模块依赖和一些项目配置</p><ul><li><p>name、version: 项目名称、版本</p></li><li><p>scripts： 调试命令，将键名serve改成 aaa，然后就可以用 <code>npm run aaa</code> 实现 <code>npm run serve</code> 的效果，一样的，只是改了名称。</p></li></ul></li><li><p>node_modules目录: npm下载的模块包存放地</p><ul><li><p><code>npm install xx</code> 默认下载到当前项目的node_modules文件夹中，属于局部安装，跟跟--save一样</p></li><li><p><code>npm install xx -s</code> 其中 s 表示 --save，生产环境依赖，在项目中构建项目，是项目的一部分</p></li><li><p><code>npm install xx -d</code> 其中的 d 表示 --save-dev，开发环境依赖，用于打包、解析代码的，项目上线时并不需要使用到的</p></li><li><p><code>npm install xx -g</code> 加了 -g 就会放到系统的 node_modules文件夹，成为全局模块。</p></li></ul></li><li><p>src 目录：</p><p>- main.js: 全局js文件</p><p>- App.vue: 第一个入口的 vue 文件</p><p>- assets: 存放静态资源，如图片</p><p>- components: 存放组件文件</p></li><li><p>public 目录：</p><p>- favicon.ico: 网页图标</p><p>- index.html： 项目运行时 <a href="http://localhost:8080/" target="_blank" rel="noreferrer">http://localhost:8080/</a> 访问的页面文件，主要是 <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> 这个dom，通过webpack等一系列工具打包编译的js文件会自动加到这个html文件中，从而使vue项目运行起来</p><p><code>http://localhost:8080/</code> 访问的是： <code>http://localhost:8080/index.html</code>，也就是我们vue项目的 public 目录，因此我们可以在浏览器输入 <code>http://localhost:8080/favicon.ico</code> 访问到网页图标，但是一般不会这样使用，静态资源一般放服务器上，了解就好</p></li></ol><h2 id="vue-的开发模式" tabindex="-1">Vue 的开发模式 <a class="header-anchor" href="#vue-的开发模式" aria-label="Permalink to &quot;Vue 的开发模式&quot;">​</a></h2><ol><li><p>入口： public ==&gt; index.html(main.js) ==&gt; app.vue</p></li><li><p>旧的开发方式：一个页面有 html\\js\\css 等文件组成，而操作由js的getElementById等方法获取dom进行一系列的操作</p></li><li><p>Vue的开发方式：数据驱动模式（数据驱动dom）</p><ul><li>页面布局、js、css 都在 .vue文件去写</li></ul></li></ol><h2 id="vue-文件组成-三个部分" tabindex="-1">.vue 文件组成（三个部分） <a class="header-anchor" href="#vue-文件组成-三个部分" aria-label="Permalink to &quot;.vue 文件组成（三个部分）&quot;">​</a></h2><ol><li><p>template标签： 写dom盒子，在vue2中，template标签下只能存在一个父元素标签</p></li><li><p>script标签： 写代码逻辑</p></li><li><p>style标签： 写样式</p></li></ol><h2 id="vue基本使用" tabindex="-1">vue基本使用 <a class="header-anchor" href="#vue基本使用" aria-label="Permalink to &quot;vue基本使用&quot;">​</a></h2><ol><li>在 data函数 中定义数据：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            data1: &#39;第一个数据&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><ol start="2"><li>在 template 中使用数据</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;{{ data1 }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span></code></pre></div><ol start="3"><li>在 style 中定义布局样式</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#app {</span></span>
<span class="line"><span style="color:#A6ACCD;">  text-align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #2c3e50;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span></code></pre></div><h2 id="vue-部分指令" tabindex="-1">vue 部分指令 <a class="header-anchor" href="#vue-部分指令" aria-label="Permalink to &quot;vue 部分指令&quot;">​</a></h2><ol><li><p>v-for: 循环指令，一般配合 key 来使用，key值必须唯一</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v-for= &quot;item in data&quot; :key=&#39;item&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">v-for= &quot;(item, index) in data&quot; :key=&#39;index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">##其中，data可以是数组，也可以是对象。</span></span></code></pre></div></li><li><p>v-if、v-else-if 、v-else: 判断指令，为真则进行创建渲染，反之则删除</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v-if=&quot;false&quot;  条件假：直接把元素删除了，或者是没有创建这个元素</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    v-show=&quot;true&quot; 条件真：重新创建一个元素，并渲染页面上面来</span></span></code></pre></div></li><li><p>v-show: 显示和隐藏指令，原理是使用css的 display:none; 进行控制隐藏</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v-show=&quot;false&quot; 还存在页面上，但是是一个隐藏元素（标签style属性添加了display:none;）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    v-show=&quot;true&quot; 是一个正常显示元素（正常标签，没有添加style）</span></span></code></pre></div></li></ol><p><strong>面试题：</strong> v-show 和 v-if 的区别</p><ol><li><p>v-show 和 v-if 条件都是 false 的时候</p><ul><li><p>v-show 是隐藏（显示和隐藏元素）</p></li><li><p>v-if 是删除 （v-if是创建和删除盒子）</p></li></ul></li><li><p>在首次加载页面（开销问题）时</p><ul><li><p>v-show ==&gt; 就算设置了 false，元素也是存在的，只不过隐藏了</p></li><li><p>v-if ==&gt; false时是不存在的，当设置为 true 时才创建元素出来</p></li></ul></li><li><p>当频繁的切换时</p><ul><li><p>v-show css控制显示和隐藏，开销比较小</p></li><li><p>v-if 创建和删除，不断地创建和删除元素，开销会大很多</p></li></ul></li></ol><h2 id="vue-定义方法" tabindex="-1">vue 定义方法 <a class="header-anchor" href="#vue-定义方法" aria-label="Permalink to &quot;vue 定义方法&quot;">​</a></h2><ol><li><p>在 methods 中定义方法func， 在标签中使用 @事件名=&#39;func&#39; 进行事件的绑定</p><p>在 data函数 中定义数据，在 methods对象 中定义方法，可以使用 this.xx 操作 data 中 xx 数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;{{ data1 }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;func&quot;&gt;点击&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default{</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            data1: 1 </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        func() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.data1 += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;我是一个方法&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div></li></ol><h2 id="vue-数据流" tabindex="-1">vue 数据流 <a class="header-anchor" href="#vue-数据流" aria-label="Permalink to &quot;vue 数据流&quot;">​</a></h2><ol><li><p>data 函数返回的对象中的属性会成为当前组件的 Vue 实例的响应式数据：</p><ul><li><p>当 Vue 实例创建时，这些data中的属性会被添加到 Vue 实例上作为其属性，并且会在组件的生命周期中被使用</p></li><li><p>生命周期：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. beforeCreate: 组件实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2. created: 组件示例创建完成后立即调用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3. beforeMount: 在挂载开始之前被调用，相关的 render 函数首次被调用。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4. mounted: el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子函数。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5. beforeUpdate: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6. updated: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子函数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">7. beforeDestroy: 实例销毁之前调用，在这一步，实例仍然完全可用</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">8. destroy: 实例销毁后调用。此时，所有的事件监听器已被移除，所有的子实例也已经被销毁</span></span></code></pre></div></li></ul></li><li><p>data()、methods、computed等选项中定义的数据和方法，都会被转化为组件实例对象的属性和方法，可以在组件的模板和JavaScript代码中直接使用。</p></li><li><p>computed: 计算属性</p><ul><li>针对data数据的二次计算（直接在模板template里面也可以写运算逻辑，但是不建议，会很乱、难以维护，当计算逻辑复杂一点的时候很难写）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h1&gt;总价： {{ total }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        price: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    total() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.price * this.num</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>其中，total这个函数，最终会变成当前组件实例的一个属性，跟data里的变量一样，那么这里就有一个问题，如果我total函数是methods里面定义的，其实也可以实现一样的效果，只不过写到模板里面要加total()，运行一下得到返回值</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h1&gt;总价： {{ total() }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h1&gt;总价： {{ total() }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h1&gt;总价： {{ total() }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        price: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    total() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.price * this.num</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><strong>面试题：</strong> 注意，这里的最大区别是： computed有缓存， 如上面的代码，我total()写了三个，那么就会执行三次函数，每次都会重新计算，如果使用 computed 定义total，那么total的返回值只要不发生变化，就会一直使用缓存，不会重新计算，提高了性能</p><ul><li><p>前面说过，computed 属性里面的方法会转化为当前组件实例的属性，因此我们是可以通过 this.total 获取到这个计算属性 total 的，但是却不能直接进行修改，如在methods里的方法进行修改 <code>this.toal = &#39;520&#39;</code> 会报错</p></li><li><p>如果需要对计算属性进行修改赋值操作，需要把 total 写成对象写法，定义 get、set 属性方法，在set方法里面进行相应的处理</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        price: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">        num: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    total: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        get() {</span></span>
<span class="line"><span style="color:#A6ACCD;">           return this.price * this.num </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        set( val ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.price = val</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeTotal() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.total = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>注意，在上面的例子中，如果我要直接修改计算属性 total, 需要将total写成对象写法，定义 get，set 属性方法，set(val) 中的参数 val 就是要对total进行赋值的值，在 set(val) 里面，仍然不能 <code>this.total = val</code>，需要折中处理，它只是可以监听到修改操作，并获取修改的值val参数。可以data再定义一个变量进行存放，这里我不太明白这个set的应用场景。。。应该主要是起到监听操作的效果</li></ul></li></ol><h2 id="属性绑定" tabindex="-1">属性绑定 <a class="header-anchor" href="#属性绑定" aria-label="Permalink to &quot;属性绑定&quot;">​</a></h2><ol><li><p>单向数据流（v-bind）</p><ul><li><p>vue 是 MVVM 架构的，M(model)为 script 标签的js数据, V（view）为template模板视图， VM（viewModel）为vue框架</p></li><li><p>v-bind 简写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v-bind:value   ===&gt; :value</span></span>
<span class="line"><span style="color:#A6ACCD;">v-bind:src     ===&gt; :src</span></span>
<span class="line"><span style="color:#A6ACCD;">v-bind:class   ===&gt; :class</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一切属性都可以进行绑定。。。</span></span></code></pre></div></li><li><p>M(js数据)定义数据 --&gt; v(视图template)使用数据</p></li></ul></li></ol><p><strong>注意</strong> 如果是单向数据流，视图修改了值，M的值不变（不会更新M）</p><ol start="2"><li><p>双向数据流（响应式数据：v-model 简写为 @ ）</p><ul><li>M(js数据) 可以给 V(template) 使用，当 V修改数据的时候，会同时改变 M 中的数据；当 M 改变数据，V 中显示的数据也会响应式的变化。</li></ul></li><li><p>单向绑定和双向绑定的使用场景</p><ul><li><p>单向绑定：纯展示类的数据</p></li><li><p>双向绑定：有修改或者输入等交互行为的，如要进行登录，在输入的时候，输入数据的同时改变了js中的数据，以便获取到需要的参数值</p></li></ul></li></ol><p><strong>面试题：</strong></p><ul><li><p>双向绑定：v-model</p></li><li><p>vue中如何实现单向绑定呢？v-bind</p></li></ul><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><h4 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><p>生命周期是指一个对象从诞生到死亡的一个过程，在vue中就是指一个组件从实例化诞生，到实例销毁的过程，具体看<a href="https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram" target="_blank" rel="noreferrer">官网</a></p><ol><li><p>先是 new Vue 实例化</p></li><li><p>然后创建前后, 挂载前后，数据更新前后，组建销毁前后</p></li><li><p>生命周期的书写顺序可以随便写，不会影响执行顺序，因为 Vue 源码已经规定好了各个生命周期执行的顺序了。</p></li></ol><h4 id="什么情况下使用哪些生命周期" tabindex="-1">什么情况下使用哪些生命周期 <a class="header-anchor" href="#什么情况下使用哪些生命周期" aria-label="Permalink to &quot;什么情况下使用哪些生命周期&quot;">​</a></h4><ul><li><p>created ---&gt; 请求接口，初始化时</p></li><li><p>mounted ---&gt; dom操作的时候</p></li><li><p>updated ---&gt; 观测数据是否更新了</p></li><li><p>destroyed ---&gt; 关闭(没了)：</p><ul><li>当用户关闭页面，但是业务上要记录一些东西的时候</li><li>例如看视频网站时，当播放页播放的视频达到一定时长，用户关闭了播放页，这时候可以在这个生命周期中记录一下时长数据，当用户再次播放这条视频的时候，自动从上一次的时长开始播放。</li></ul></li></ul><p><em><strong>面试题</strong></em></p><p>this.$data ： 当前组件的data数据</p><p>this.$el : 当前组件的节点（dom，template模板下的dom）</p><ol><li><p>第一次进入时，执行几个生命周期？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">4个</span></span>
<span class="line"><span style="color:#A6ACCD;">创建前后:</span></span>
<span class="line"><span style="color:#A6ACCD;"> beforeCreate:   没有data, 没有el</span></span>
<span class="line"><span style="color:#A6ACCD;"> created:        data创建了,el为undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">挂载前后</span></span>
<span class="line"><span style="color:#A6ACCD;"> beforeMount:    data,el为undefined（其实已经在准备了）</span></span>
<span class="line"><span style="color:#A6ACCD;"> mounted:        data,el创建了</span></span></code></pre></div><p>因此，在涉及到dom操作的时候，要在 mounted 生命周期及之后进行</p></li></ol>`,44),t=[p];function o(i,c,r,C,A,d){return a(),l("div",null,t)}const y=s(e,[["render",o]]);export{h as __pageData,y as default};
