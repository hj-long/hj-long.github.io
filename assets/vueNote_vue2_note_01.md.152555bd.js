import{_ as s,o as a,c as l,O as n}from"./chunks/framework.95b9d657.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vueNote/vue2/note_01.md","filePath":"vueNote/vue2/note_01.md"}'),e={name:"vueNote/vue2/note_01.md"},p=n(`<h2 id="一、路由" tabindex="-1">一、路由 <a class="header-anchor" href="#一、路由" aria-label="Permalink to &quot;一、路由&quot;">​</a></h2><h3 id="_1-vue-的路由" tabindex="-1">1. vue 的路由 <a class="header-anchor" href="#_1-vue-的路由" aria-label="Permalink to &quot;1. vue 的路由&quot;">​</a></h3><h4 id="_1-1-概念" tabindex="-1">1.1 概念 <a class="header-anchor" href="#_1-1-概念" aria-label="Permalink to &quot;1.1 概念&quot;">​</a></h4><p>路由 ---&gt; 用于跳转页面的...反正是和页面打交道的</p><p>vue 中的路由有官方库 Router，点击 <a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">官网</a> 查看更多内容</p><h4 id="vue-router是单页面应用-spa" tabindex="-1">vue + router是单页面应用(SPA) <a class="header-anchor" href="#vue-router是单页面应用-spa" aria-label="Permalink to &quot;vue + router是单页面应用(SPA)&quot;">​</a></h4><ol><li><p>单页面： 整个项目 ---&gt; 只有一个html文件</p></li><li><p>缺点：不适合做 SEO</p></li><li><p>目前来说: 后台管理系统非常适合Vue这个框架来做</p></li></ol><h4 id="_1-2-跳转页面" tabindex="-1">1.2 跳转页面 <a class="header-anchor" href="#_1-2-跳转页面" aria-label="Permalink to &quot;1.2 跳转页面&quot;">​</a></h4><ol><li><p>template写法: 使用 router库的组件 <code>&lt;router-link to=&quot;/about&quot;&gt;About&lt;/router-link&gt;</code> 最后会转化为一个 a 标签</p></li><li><p>js 写法：</p><ul><li><p>router.push ---&gt; 从 a 进入 b ，也可以从 b 进入 a</p><ul><li>this.$router.push(&#39;/about&#39;)</li></ul></li><li><p>router.replace ---&gt; 从 a 进入 b，但是不能返回了</p><ul><li>this.$router.replace(&#39;/about&#39;)</li></ul></li><li><p>router.go</p></li><li><p>router.back</p></li></ul></li></ol><h4 id="_1-3-路由模式" tabindex="-1">1.3 路由模式 <a class="header-anchor" href="#_1-3-路由模式" aria-label="Permalink to &quot;1.3 路由模式&quot;">​</a></h4><ol><li>history 模式</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">    mode: &#39;history&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    routes</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ol start="2"><li>hash 模式</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const router = new VueRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">    mode: &#39;hash&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    routes</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ol start="3"><li>它们的区别</li></ol><ul><li><p>找不到路由的情况</p><ul><li><p>hash：找不到路由信息，会打开一个空白页（一般设置重定向），也不会发送请求</p></li><li><p>history：找不到路由浏览器会额外发送一次这个路由的 get 请求</p></li></ul></li><li><p>展示形式不一样</p><ul><li><p>hash：浏览器的 url 显示会携带一个 /#/ 符号</p></li><li><p>history：比较简洁，美观，符合常规的 url 形式</p></li></ul></li></ul><h4 id="_1-4-router-link" tabindex="-1">1.4 router-link <a class="header-anchor" href="#_1-4-router-link" aria-label="Permalink to &quot;1.4 router-link&quot;">​</a></h4><ol><li><p>router-link 写在template部分的，用来跳转页面的</p><ul><li>写法: <code>&lt;router-link to=&#39;/跳转到对应的页面&#39;&gt;&lt;/router-link&gt;</code></li></ul></li><li><p>router-link的更多参数</p><ul><li><p>to ==&gt; 表示目标路由的链接(跳转到的页面)，可以通过path，也可以通过name</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;router-link to=&#39;/course&#39;&gt;&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;router-link :to=&#39;{path: &quot;/about&quot;}&#39;&gt;跳转到about页面&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;router-link :to=&#39;{name: &quot;about&quot;}&#39;&gt;跳转到about页面&lt;/router-link&gt;</span></span></code></pre></div></li></ul><p>tag ==&gt; 可以渲染成任意标签</p><pre><code> - 默认不配置时，则渲染成a链接
</code></pre><p>replace ==&gt; 不能返回上一页和this.$router.replace一样</p><pre><code> &lt;router-link to=&#39;/course&#39; replace&gt;&lt;/router-link&gt;
</code></pre></li></ol><h4 id="_1-5-router-view" tabindex="-1">1.5 router-view <a class="header-anchor" href="#_1-5-router-view" aria-label="Permalink to &quot;1.5 router-view&quot;">​</a></h4><ul><li><code>&lt;router-view /&gt;</code> 可以渲染路径匹配的视图组件</li></ul><h3 id="_2-路由懒加载分包" tabindex="-1">2. 路由懒加载分包 <a class="header-anchor" href="#_2-路由懒加载分包" aria-label="Permalink to &quot;2. 路由懒加载分包&quot;">​</a></h3><ol><li>使用一个箭头函数运行返回组件信息，就是懒加载，其中，/* webpackChunkName: &quot;about&quot; */ 添加了这个webpack配置注释之后，当我们打包代码时，webpack 会对路由信息进行分包，命名为 about_xxx.js，如果没有这个注释，js文件就会变成一堆数字</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/about&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;about&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: () =&gt; import(/* webpackChunkName: &quot;about&quot; */ &#39;../views/AboutView.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="_3-配置-404-页面" tabindex="-1">3. 配置 404 页面 <a class="header-anchor" href="#_3-配置-404-页面" aria-label="Permalink to &quot;3. 配置 404 页面&quot;">​</a></h3><ol><li>匹配404页面实现的方法有很多，其中可以使用通配符 *</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Error from &#39;@/views/Error.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: Error</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="_4-子路由-项目不一定需要-但是可以方便管理" tabindex="-1">4. 子路由（项目不一定需要，但是可以方便管理） <a class="header-anchor" href="#_4-子路由-项目不一定需要-但是可以方便管理" aria-label="Permalink to &quot;4. 子路由（项目不一定需要，但是可以方便管理）&quot;">​</a></h3><p>{ path: &#39;/about&#39;, name: &#39;about&#39;, component: () =&gt; import(/* webpackChunkName: &quot;about&quot; <em>/ &#39;../views/AboutView.vue&#39;) children: [ { path: &#39;/about/page1&#39;, name: &#39;page1&#39;, component: () =&gt; import(/</em> webpackChunkName: &quot;about&quot; */ &#39;../views/Page1.vue&#39;) } ], }</p><h3 id="_5-动态路由" tabindex="-1">5. 动态路由 <a class="header-anchor" href="#_5-动态路由" aria-label="Permalink to &quot;5. 动态路由&quot;">​</a></h3><ol><li>动态子路由</li></ol><ul><li>在 router/index.js 中配置路由，<code>/course/:id</code> 将url后面的字符串匹配名为 id 的路由参数</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/course/:id&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: () =&gt; import(/* webpackChunkName: &quot;about&quot; */ &#39;../components/PageNum.vue&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>然后在展示组件 PageNum.vue 中通过 <code>$route.params.xx</code> 拿到路由参数进行相应的渲染</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        这是页面 {{ $route.params.id  }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span></code></pre></div><h3 id="_6-路由守卫" tabindex="-1">6. 路由守卫 <a class="header-anchor" href="#_6-路由守卫" aria-label="Permalink to &quot;6. 路由守卫&quot;">​</a></h3><p>点击 <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html" target="_blank" rel="noreferrer">router官网</a> 查看详细内容</p><p>什么是路由守卫？</p><p>通俗解释: 就是保安大哥，ok的情况可以进入，不ok进入不了</p><p>场景: 进入某一个页面，前置性需要判断身份 (是否登录)。如果登录可以进入，如果没有登录不可以进入(跳转到登录页)</p><ol><li>路由独享守卫（写在router.js 的每一个路由信息配置内）</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const routes = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/users/:id&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: UserDetails,</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeEnter: (to, from) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // reject the navigation</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span></code></pre></div><p>各个参数含义：</p><ul><li><p>to: 即将要进入的目标</p></li><li><p>from: 当前导航正要离开的路由</p></li><li><p>可选的第三个参数：next(), 表示符合，允许跳转</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if( true ) { </span></span>
<span class="line"><span style="color:#A6ACCD;">        next() //符合条件，进行跳转</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        next(&#39;/login&#39;) //不符合条件，跳转到登录页</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ol start="2"><li>组件内的导航守卫（写在对应的组件内，但可能不好维护）</li></ol><p>路由导航的功能不仅仅在 router 中配置，也可以直接在对应的组件内进行设置，跟生命周期的写法是一样的，一共有三个钩子：</p><ul><li>beforeRouteEnter</li><li>beforeRouteUpdate</li><li>beforeRouteLeave</li></ul><ol start="3"><li>全局路由守卫（添加到 router.js 的路由实例的属性上）</li></ol><ul><li><p>全局前置守卫：<code>router.beforeEach((to, from)=&gt;{...})</code></p></li><li><p>全局解析守卫：<code>router.beforeResolve()</code></p></li><li><p>全局后置钩子：<code>router.afterEach((to, from) =&gt; {..})</code></p></li></ul><h2 id="二、vuex" tabindex="-1">二、Vuex <a class="header-anchor" href="#二、vuex" aria-label="Permalink to &quot;二、Vuex&quot;">​</a></h2><h4 id="什么是-vuex" tabindex="-1">什么是 Vuex ? <a class="header-anchor" href="#什么是-vuex" aria-label="Permalink to &quot;什么是 Vuex ?&quot;">​</a></h4><p>是一种状态管理模式, <a href="https://vuex.vuejs.org/zh/guide/" target="_blank" rel="noreferrer">vuex官网</a></p><p>通俗:集中式存储管理</p><p>存储的东西有哪些: 全局共享的属性、全局共享的方法.....</p><ol><li>vuex的使用场景(为什么要用?)</li></ol><ul><li><p>很多组件共同使用某一个值的时候 (组件传值有可能很繁琐所以直接用全局共享的属性比较方便)</p></li><li><p>数据统一管理好维护</p></li></ul><ol start="2"><li><p>vuex 中的属性</p><ul><li><p>state: 有点像组件的data，就是来存放共享数据的，并且是全局共享的</p><ul><li><p>使用方法1：组件里直接访问 <code>this.$store.state.xxx</code></p></li><li><p>使用方法2：通过 辅助函数mapState和computed 结合解构变量</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{ data1 }}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;javaScript&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { mapState } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...mapState([&#39;data1&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div></li><li><p>上面两个的区别是？</p><p>方式1: <code>this.$store.state.xx</code> 其实是在store本身里面找到的属性值</p><p>方式2: 辅助函数的形式：mapState会把state的某一值拷贝一份给vue当前组件的实例对象上</p></li></ul><p><em><strong>区别</strong></em></p><pre><code>  this.$store.state.xx 可以直接修改，相当于修改源头了

  this.xxx 不可以直接修改
</code></pre></li><li><p>getters: 有点像组件的computed，放计算state属性的</p><p>使用1: <code>this.$store.getters.xxx</code>，同上面state类似</p><p>使用2: 辅助函数的形式（mapGetter 和 computed）</p><p><em><strong>注意</strong></em>：因为Vuex是单线数据流，所以v-model绑定getters属性会报错，而且没有get和set的写法 (组件是有的，vuex是没有的)</p></li><li><p>mutations: 有点像组件的methods，放全局共享方法</p><p>定义方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        addNum (state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            state.num++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>使用方法1：<code>this.$store.commit(&#39;addNum&#39;)</code> 直接使用 commit 提交方法进行运行</p><p>使用方法2：辅助函数（mapMutations），这里是解构在 methods 里面,可以传递参数，但是只能传一个，可以用一个对象传递多个参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...mapMutations([&#39;addNum&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div></li><li><p>actions: 和 mutations 有点类似，也是存放方法的</p><p>写法有区别(主要是参数上)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        addNum ({commit, state}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            state.num++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>使用方法1：<code>this.$store.dispatch(&quot;addNum&quot;)</code></p><p>使用方法2：辅助函数（mapActions）</p></li><li><p>modules: 把整个状态管理再次细分</p><p>用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const store = createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">        modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            a: moduleA,</span></span>
<span class="line"><span style="color:#A6ACCD;">            b: moduleB</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">this.$store.state.a // -&gt; moduleA 的状态</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">this.$store.state.b // -&gt; moduleB 的状态</span></span></code></pre></div></li></ul></li></ol><p><em><strong>方法总结</strong></em>：</p><pre><code>mutations可以通过commit来提交
    
actions可以通过dispatch来提交
</code></pre><p><em><strong>区别</strong></em></p><ol><li><p>Action 提交的是 mutation，而不是直接变更状态。</p><ul><li>actions可以直接修改state属性值? 是可以的，但是不建议这样写</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    addNum (state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        state.num++</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getNum ({commit, state}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        commit(&#39;addNum&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><em><strong>建议是使用 mutations 的 commit 触发提交去修改 state 的状态</strong></em></p></li><li><p>同步/异步</p><ul><li><p>mutations是同步函数</p></li><li><p>actions 是可以包含异步的</p></li></ul></li></ol><h4 id="vuex-持久化存储" tabindex="-1">Vuex 持久化存储 <a class="header-anchor" href="#vuex-持久化存储" aria-label="Permalink to &quot;Vuex 持久化存储&quot;">​</a></h4><p>**注意: Vuex是一个集中式的状态管理工具，本身不是持久化存储，如果要实现持久化存储可以:</p><ol><li>自己写localStorage（麻烦）</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    num:  localStorage.getItem(&#39;num&#39;) || 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    add( store ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        store.num++;</span></span>
<span class="line"><span style="color:#A6ACCD;">        localStorage.setItem(&#39;num&#39;, store.num);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span></code></pre></div><ol start="2"><li><p>使用插件（方便）</p><ul><li><p>安装 <code>npm install vuex-persistedstate -s</code></p></li><li><p>引入并配置</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import persistedState from &#39;vuex-persistedstate&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let create_persistedstate = persistedState({ </span></span>
<span class="line"><span style="color:#A6ACCD;">    key:&#39;store&#39;, //用于存储持久状态的密钥。默认为vuex</span></span>
<span class="line"><span style="color:#A6ACCD;">    //代替（或结合）getState和setState。默认为localStorage。</span></span>
<span class="line"><span style="color:#A6ACCD;">    storege:window.loaclStorege</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugins: [create_persistedstate]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li></ol><p><em><strong>面试题</strong></em></p><p>面试题一: 当某一个组件使用了vuex的数据，比如把1修改成了2，刷新页面又到了1，该怎么办?</p><ol><li>Vuex是一个集中式的状态管理工具，本身不是持久化存储，如果要实现持久化存储可以通过 localStorage 或者 插件 来实现持久化的效果</li></ol><p>面试题二:在某个组件中可以直接修改Vuex的状态(数据) 吗?</p><ol><li><p>可以的情况：</p><ul><li><p>通过mutations方法来修改</p></li><li><p>组件内直接修改vuex数据源 <code>this.$store.state.shop.num = 200;</code></p></li></ul></li><li><p>不可以的情况</p><ul><li>直接使用辅助函数 <code>this.num=200</code> 这种情况是不可以修改的</li></ul></li></ol><p>面试题三: Vuex中的getters属性在组件中被v-model绑定会发生什么?</p><ol><li>绑定本身不会报错，如果修改了，会报错，因为Vuex是单向数据流。</li></ol><p>面试题四: Vuex是单向数据流还是双向数据流?</p><ol><li>Vuex是单向数据流。</li></ol><h2 id="三、插槽" tabindex="-1">三、插槽 <a class="header-anchor" href="#三、插槽" aria-label="Permalink to &quot;三、插槽&quot;">​</a></h2><p>插槽就是一个子组件在模板上预留了一个位置，当引用这个组件的父组件插入了dom时，子组件会将父组件的dom放在合适的地方进行展示</p><ol><li>匿名插槽</li></ol><ul><li><p>插槽没有名字</p><p>父组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Child&gt;</span></span></code></pre></div><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span></code></pre></div></li></ul><ol start="2"><li>具名插槽</li></ol><ul><li><p>插槽有名字，可以对应放到某一个位置上</p><p>父组件(要使用 template 包着)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;template #header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;template #footer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;456&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Child&gt;</span></span></code></pre></div><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&#39;header&#39;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    jjj</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&#39;footer&#39;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span></code></pre></div></li></ul><ol start="3"><li>作用域插槽</li></ol><ul><li><p>可以传值</p><p>父组件(要使用 template 包着)：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Child&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;template #header=&#39;{user}&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;123{{ user.name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Child&gt;</span></span></code></pre></div><p>子组件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;slot name=&#39;header&#39; :user=&#39;user&#39;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        user: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;xxx&#39;, age: 18</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul><h2 id="四、其他" tabindex="-1">四、其他 <a class="header-anchor" href="#四、其他" aria-label="Permalink to &quot;四、其他&quot;">​</a></h2><h3 id="查找父组件和子组件" tabindex="-1">查找父组件和子组件 <a class="header-anchor" href="#查找父组件和子组件" aria-label="Permalink to &quot;查找父组件和子组件&quot;">​</a></h3><ol><li><p>查找父组件</p><p><code>this.$parent</code> ---- 返回当前组件的父组件实例</p><p><code>this.$root</code> ---- 根组件(如果当前实例没有父实例，此实例将会是其自己)</p></li><li><p>查找子组件</p><p><code>this.$children</code> ---- 返回当前组件的所有子组件的实例数组（通过数组下标获取单个子组件实例）</p><pre><code> 可以通过 \`\`this.$children[0].xxx = &#39;xxxxx\`\` 去修改子组件的值！
</code></pre><p><em><strong>面试题</strong></em>: 父组件想要直接修改子组件的数据怎么办?</p><ul><li>this.$children[0].xxxx =aaaaa&#39;;</li><li>父组件使用 ref 获取子组件的 dom ，然后进行修改</li></ul></li></ol><h3 id="this-set" tabindex="-1">this.$set <a class="header-anchor" href="#this-set" aria-label="Permalink to &quot;this.$set&quot;">​</a></h3><ol><li><p>使用场景:</p><p>当修改一个响应式数据的时候，数据本身改变了但是视图没有进行更新使用$set来更新</p></li><li><p>语法:</p><pre><code> this.$set( 对象或者数组 ，修改的key或下标 ，修改后的值 );
</code></pre></li></ol><h3 id="依赖注入-provide-inject" tabindex="-1">依赖注入(provide/inject) <a class="header-anchor" href="#依赖注入-provide-inject" aria-label="Permalink to &quot;依赖注入(provide/inject)&quot;">​</a></h3><p>某组件可以直接让它下面的组件传值 (没有组件的父子限制)</p><ol><li><p>场景:顶层组件给后代组件传值</p></li><li><p>用法：</p><ul><li>父组件提供依赖 provide</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">provide () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        str: &#39;我是父组件里的数据&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>子组件注入使用 inject</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">inject: [&#39;str&#39;]</span></span></code></pre></div></li></ol><h3 id="混入-mixins" tabindex="-1">混入（mixins） <a class="header-anchor" href="#混入-mixins" aria-label="Permalink to &quot;混入（mixins）&quot;">​</a></h3><p>mixins 是一个 js 文件，作为 全局属性、全局方法， 只要导入了就能使用</p><p>1、创建 mixins.js 文件，导出一个变量，这个变量写法跟我们组件里的script写法一样</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">export const m = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            number: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, </span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        addNumber () {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.number++</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>2、导入 mixins 方法并使用，跟正常的 data、methods 属性一样使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { m } from &#39;../mixins.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mixins: [m],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>上面的 mixins 跟正常组件的js使用方法一样，但是这就带来了一些问题，就是 数据 和 方法 的源头不好追踪了，可能造成维护困难等情况</p><p>3、混入和vuex的区别</p><pre><code>- 混入功能:  有点像工具类，所以是全局的，可以导出全局属性和方法

- vuex功能: 状态管理==》vuex强调的是管理状态（state数据 ）
</code></pre><p>4、属性的区别:</p><pre><code>- 混入的属性他们是不互相影响的 (不共享)

- Vuex中的属性(state)是全局共享
</code></pre><p>5、方法的区别:</p><pre><code>- 混入的方法是可以return （直接执行一个方法，return 字符串等数据，可以展示到页面上）

- Vuex的方法是不可以return的（return 的数据无法展示到页面上）
</code></pre>`,104),t=[p];function o(i,c,r,u,C,d){return a(),l("div",null,t)}const m=s(e,[["render",o]]);export{h as __pageData,m as default};
