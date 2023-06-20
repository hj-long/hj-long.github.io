import{_ as s,o as n,c as a,O as l}from"./chunks/framework.95b9d657.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"others/ts.md","filePath":"others/ts.md"}'),p={name:"others/ts.md"},e=l(`<ol><li><p>通俗讲述什么是TS</p><p>ts是一门语言，这门语言和js有点类似</p><p>ts是js的“类型”超集</p></li><li><p>为什么要用TS</p><p>别把问题放在运行后，把问题放在开发时（在开发就能通过类型检测发现问题）</p><p>TS: 强类型语言</p></li><li><p>环境搭建</p><p><a href="https://www.xuexiluxian.cn/blog/detail/8b8e67922a714696820cd7cefc0526ab" target="_blank" rel="noreferrer">环境搭建教程</a></p></li><li><p>基本使用</p><p>编译：<code>tsc helloworld.ts</code>, 会在同一文件夹下生成对应的 js 文件</p><p>监听编译：<code>tsc -w helloworld.ts</code>， 实时生成 js</p><p>生成 ts.config.json 文件：<code>tsc --init</code></p></li><li><p>数组约束写法</p></li></ol><ul><li><p>2.1 数组每一个成员必须是xx类型</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr1: number[] = [1, 2, 3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let arr2: string[] = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let arr3:Array&lt;number&gt; = [2, 3,4];</span></span></code></pre></div></li><li><p>数组中可能存在多个类型</p><p>let arr4: (string | number)[] = [1，&#39;b&#39;]; //这个不看位置</p><p>let arr5: [number,string] = [1,&#39;b&#39;]; //这个是严格按照位置排序的</p></li></ul><ol start="6"><li><p>void : 函数无返回值</p></li><li><p>对象约束写法</p></li><li><p>函数约束写法</p></li></ol><ul><li><p>函数参数约束和返回值约束</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function add( a:number, b:number): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">add(1, 2)  // 3</span></span></code></pre></div><p>// 上面的函数 add 的参数限定为number类型，返回值限定为 number 类型，如果 是 void ,则表示没有返回值</p></li><li><p>可选参数，只需要在参数类型前面加个 ？ 即可，例如：<code>b?: number</code>，表示参数 b 可能不存在，不仅函数可以，其他如对象数组等也可以使用可选</p></li><li><p>默认值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function add( a:number, b:number = 10): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">add(1)  // 11</span></span></code></pre></div></li><li><p>箭头函数约束</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let func1: (p1:number, p2:string) =&gt; string = (a:number, b:string):string =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>其中，<code>(p1:number, p2:string) =&gt; string</code> 表示箭头函数约束，<code>(a:number, b:string):string</code>,表示该函数的参数、返回值约束，有点繁琐~</p></li></ul><ol start="9"><li><p>interface 接口</p><ul><li><p>自定义的一个数据结构</p></li><li><p>使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface Base {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj:Base = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;ss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul><p><em><strong>注意</strong></em></p><pre><code> 1. 首字母要大写，一般是 I 开头，如 Idata、Idemo

 2. 写完每个属性后面以;结尾
</code></pre><ul><li><p>继承 extends，相当于累加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface IBase {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Ichild extends IBase {</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        a: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">        b: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj:Ichild = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;ss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        b: &#39;s&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul></li><li><p>类</p></li></ol><ul><li>用法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">        age: number;</span></span>
<span class="line"><span style="color:#A6ACCD;">        constructor(name: string, age: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        sayName(): string {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return \`我是\${this.name},今年\${this.age}岁\`</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let ming = new Person(&#39;小明&#39;, 18)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(ming.sayName())</span></span></code></pre></div><p>在上面的 person 类中，name、age 是类本身的属性约束，在 constructor 中有参数的约束，方法 sayName 有返回值约束</p><ul><li><p>修饰符</p><p>readonly：只读</p><pre><code>  \`\`\`
  readonly name: string;

  \`\`\`

  只要在属性前面加上只读修饰符，那么这个属性就不能被修改
</code></pre><p>public：公开的，在任何地方都可以访问</p><p>protected：受保护的，只能在当前类和当前类的子类内部使用</p><pre><code>  就是说，只能通过当前类及继承此类的子类中的内部方法通过this.xx能够访问到，如果使用实例.xx是访问不了的，
</code></pre><p>private：私有的，当前类的内部使用</p><pre><code>  只能在当前类的内部通过 this.xx 使用
</code></pre></li><li><p>抽象类: abstract</p><ol><li><p>不完成具体的功能</p></li><li><p>抽象类不能new</p></li><li><p>抽象类可以继承，如果要继承，就必须实现该类的抽象方法</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    abstract sayName(): void;</span></span>
<span class="line"><span style="color:#A6ACCD;">    abstract run():void;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Child extends Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sayName(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;say name&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    run(): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;run&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ol start="4"><li>使用场景： 例如封装一个链接数据库的约束类，这个类不实现具体功能，但是需要链接每一款数据库和其中的函数操作</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">abstract class Db{</span></span>
<span class="line"><span style="color:#A6ACCD;">    abstract connection():void;</span></span>
<span class="line"><span style="color:#A6ACCD;">    abstract auth():void;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class mySql extends Db{</span></span>
<span class="line"><span style="color:#A6ACCD;">    connection(){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    auth(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new mySql();</span></span></code></pre></div></li><li><p>类的约束：implements, 可以累加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface Ip1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Ip2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sayName():string;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person implements Ip1, Ip2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    sayName(): string {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this.name</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul><ol start="11"><li><p>泛型</p><ul><li><p>功能跟形参差不多：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p></li><li><p>函数泛型(在使用的时候再去指定类型)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function fun1&lt;T&gt;( name:T ): T{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">fun1&lt;string&gt;(&#39;123&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">fun1&lt;number&gt;(123);</span></span></code></pre></div></li><li><p>使用多个泛型</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function func1&lt;T, U&gt;(a:T, b:U){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(a, b)</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func1&lt;number, string&gt;(1, &#39;2&#39;)</span></span></code></pre></div></li><li><p>结合 class</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class Person&lt;T&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    userName:T</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor( name:T ){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.userName = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let person = new Person&lt;string&gt;(&#39;张三&#39;);</span></span></code></pre></div></li></ul></li><li><p>xxx.d.ts 全局生命文件：里面写的 interface 可以在项目中某一个文件直接使用</p></li><li><p>ts 中的装饰器</p></li></ol><ul><li><p>装饰器:就是一个方法，可以注入到类、方法、属性参数上来“扩展&quot;类、属性、方法、参 数的功能。</p></li><li><p>类装饰器（无法传参数）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function demo1( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;类装饰器&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@demo1</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p = new Person()  // 输出：&quot;类装饰器&quot;</span></span></code></pre></div><p>装饰器函数的 target 参数为要装饰的类对象，可以通过 target.prototype.xx = &#39;xxxx&#39; 为类添加属性</p></li><li><p>装饰器工厂（可以传参数）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function demo2( option:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;装饰器参数：&#39;,option)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;装饰器 内部&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">@demo2(&#39;dd&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p = new Person()  //输出：&quot;装饰器参数：dd   装饰器 内部&quot;</span></span></code></pre></div><p>option 为传递的参数，在装饰器内部返回的函数为类装饰器函数，其中的target为被装饰的类对象</p></li><li><p>装饰器组合</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function demo1( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;装饰器1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function demo2( option:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;装饰器2&#39;,option)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;装饰器2 内部&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function demo3( option:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;装饰器3&#39;, option)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;装饰器3 内部&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function demo4( target:any ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;装饰器4&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@demo1</span></span>
<span class="line"><span style="color:#A6ACCD;">@demo2(&#39;参数2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">@demo3({name:&#39;参数3&#39;})</span></span>
<span class="line"><span style="color:#A6ACCD;">@demo4</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p = new Person()</span></span></code></pre></div><p>执行顺序为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">装饰器2 参数2</span></span>
<span class="line"><span style="color:#A6ACCD;">装饰器3 { name: &#39;参数3&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">装饰器4</span></span>
<span class="line"><span style="color:#A6ACCD;">装饰器3 内部</span></span>
<span class="line"><span style="color:#A6ACCD;">装饰器2 内部</span></span>
<span class="line"><span style="color:#A6ACCD;">装饰器1</span></span></code></pre></div><p><em><strong>注意</strong></em>：结合起来一起使用的时候, 会先 <code>从上至下</code> 的执行所有的 <code>装饰器工厂</code>, 拿到所有真正的装饰器, 然后再 <code>从下至上</code> 的执行所有的 <code>装饰器</code></p></li><li><p>属性装饰器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function attrDemo(target: any, attr: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    target[attr] = &#39;bb&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @attrDemo</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: string = &#39;jj&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(p.name); // 输出 &#39;bb&#39;</span></span></code></pre></div><p>target 是类本身，attr 是类的属性名</p></li><li><p>方法装饰器</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function test( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( &#39;执行方法&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    @test</span></span>
<span class="line"><span style="color:#A6ACCD;">    sayName() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log( &#39;say name...&#39; );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let p = new Person();</span></span>
<span class="line"><span style="color:#A6ACCD;">p.sayName();</span></span></code></pre></div><p>第一个参数target： 对于静态方法来说是类的构造函数，对于实例方法则是类的原型对象</p><p>第二个参数propertyKey： 是方法的名称</p><p>第三个参数descriptor： 是被装饰的方法的属性描述符，包含方法的属性值和方法的可枚举、可写、可配置等特性。</p></li></ul>`,11),o=[e];function c(t,i,r,C,A,y){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
