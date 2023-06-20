import{_ as e,o as i,c as l,O as t}from"./chunks/framework.95b9d657.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"others/git.md","filePath":"others/git.md"}'),o={name:"others/git.md"},a=t(`<h2 id="git-相关" tabindex="-1">git 相关 <a class="header-anchor" href="#git-相关" aria-label="Permalink to &quot;git 相关&quot;">​</a></h2><p>git 是 版本控制工具</p><h2 id="一、下载安装" tabindex="-1">一、下载安装 <a class="header-anchor" href="#一、下载安装" aria-label="Permalink to &quot;一、下载安装&quot;">​</a></h2><ol><li><p>先下载安装 git</p></li><li><p>去 <a href="https://gitee.com/" target="_blank" rel="noreferrer">码云</a> 或者<a href="https://github.com/" target="_blank" rel="noreferrer">github</a> 注册账号</p></li><li><p>git 全局设置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name &#39;你的用户名&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email &#39;注册时使用的邮箱&#39;</span></span></code></pre></div></li></ol><h2 id="二、链接-本地仓库-和-远程仓库" tabindex="-1">二、链接 本地仓库 和 远程仓库 <a class="header-anchor" href="#二、链接-本地仓库-和-远程仓库" aria-label="Permalink to &quot;二、链接 本地仓库 和 远程仓库&quot;">​</a></h2><ol><li><p>本地设置和生成 公钥 ：<a href="https://help.gitee.com/base/account/SSH%E5%85%AC%E9%92%A5%E8%AE%BE%E7%BD%AE" target="_blank" rel="noreferrer">教程</a></p></li><li><p>复制生成的公钥到对应的网站上进行绑定配置：<a href="https://gitee.com/profile/sshkeys" target="_blank" rel="noreferrer">码云公钥</a>、<a href="https://github.com/settings/keys" target="_blank" rel="noreferrer">github公钥</a></p></li><li><p>完成上述步骤之后，就跟远程仓库做了一个链接了</p></li><li><p>上传代码：</p><ul><li><p>创建远程仓库，到码云或者github网站上创建一个仓库并完成初始化操作</p></li><li><p>下载仓库代码：<code>git clone https://xxname/仓库名字</code></p></li><li><p>写完代码之后，提交所有代码到本地暂存区： <code>git add .</code></p></li><li><p>提交所有代码到本地仓库：<code>git commit -m &#39;注释（写提交的说明）&#39;</code></p></li><li><p>上传本地仓库到网站：<code>git push</code></p></li></ul></li></ol><h2 id="三、git-本地仓库使用" tabindex="-1">三、git 本地仓库使用 <a class="header-anchor" href="#三、git-本地仓库使用" aria-label="Permalink to &quot;三、git 本地仓库使用&quot;">​</a></h2><h3 id="_3-1-操作命令" tabindex="-1">3.1. 操作命令 <a class="header-anchor" href="#_3-1-操作命令" aria-label="Permalink to &quot;3.1. 操作命令&quot;">​</a></h3><ol><li><p>初始化仓库：<code>git init</code></p></li><li><p>查看配置：<code>git config -l</code></p></li><li><p>查看暂存状态：<code>git status</code></p><ul><li><p>红色的文件：还没有被git管理的，处于未暂存状态</p></li><li><p>绿色的文件：存储在了 本地仓库暂存区</p></li></ul></li><li><p>添加所有文件到暂存区：<code>git add .</code>，添加指定文件：<code>git add ./xx</code></p></li><li><p>添加到分支中：<code>git commit -m &#39;注释说明&#39;</code></p></li><li><p>查看修改文件：</p><ul><li><p>查看所有文件修改内容：<code>git diff</code></p></li><li><p>查看某个文件的修改内容：<code>git diff xx.js</code></p></li></ul></li><li><p>查看修改历史(用户、时间、具体文件)：</p><ul><li><p>查看所有文件修改历史：<code>git log</code></p></li><li><p>查看某个文件的修改历史：<code>git log xx.js</code></p></li></ul></li><li><p>查看修改历史(简单形式)：</p><ul><li><p>简单查看所有文件修改历史：<code>git reflog</code></p></li><li><p>简单查看某个文件的修改历史：<code>git reflog xx.js</code></p></li></ul></li><li><p>回到之前的版本（每次 commit 都生成一个唯一版本号）：</p><ul><li><p>回到上一个版本： <code>git reset --hard HEAD^</code></p></li><li><p>回到指定的版本： <code>git reset --hard 版本号</code></p></li></ul></li></ol><h2 id="四、多人开发" tabindex="-1">四、多人开发 <a class="header-anchor" href="#四、多人开发" aria-label="Permalink to &quot;四、多人开发&quot;">​</a></h2><ol><li><p>克隆下载代码：<code>git clone xxx</code></p></li><li><p>配置（下面是局部配置，主要是用于标识代码提交者）：</p><p><code>git config user.name &#39;你的用户名&#39;</code></p><p><code>git config user.email &#39;邮箱&#39;</code></p></li><li><p>提交本地仓库：<code>git add .</code> 、 <code>git commit -m &#39;xxx&#39;</code></p></li><li><p>提交远程仓库：<code>git push</code>，但是可能会报错：</p><ul><li><p>因为已经有人更新了远程仓库的代码，因此不能直接 push</p></li><li><p>先下拉代码：<code>git pull</code>，然后再进行提交：<code>git push</code></p></li><li><p>如果下拉的代码有冲突，要先手动解决代码冲突问题，然后再 push</p></li></ul></li></ol><h2 id="五、分支操作" tabindex="-1">五、分支操作 <a class="header-anchor" href="#五、分支操作" aria-label="Permalink to &quot;五、分支操作&quot;">​</a></h2><p>默认主分支：master， 并且各分支之间是独立的，不会互相影响</p><p><em><strong>注意</strong></em>：在一个分支下创建一个新的分支，新的分支会继承旧分支的操作（commit提交记录等）</p><ol><li><p>查看分支：</p><ul><li><p>本地仓库：<code>git branch</code></p></li><li><p>远程仓库：<code>git branch -r</code></p></li></ul></li><li><p>新建分支：<code>git branch 分支名称</code></p></li><li><p>切换分支：<code>git checkout 分支名称</code></p><ul><li>创建新分支并切换到新分支：<code>git checkout -b 分支名称</code></li></ul></li><li><p>提交本地分支到 github\\gitee 网站：<code>git push --set-upstream origin 分支名称</code></p></li><li><p>删除分支：</p><ul><li><p>删除本地分支（先切换其他分支）：<code>git branch -d 分支名称</code></p></li><li><p>删除远程仓库分支：<code>git push origin --delete 分支名称 </code></p></li></ul></li><li><p>合并分支：<code>git merge 分支名称</code></p><ul><li><p>当前分支为 master，假如合并 dev 分支，就是：<code>git merge dev</code></p><p>相当于： master += dev</p></li><li><p>然后手动解决冲突问题</p></li></ul></li></ol><h2 id="六、gitflow-工作流" tabindex="-1">六、gitflow 工作流 <a class="header-anchor" href="#六、gitflow-工作流" aria-label="Permalink to &quot;六、gitflow 工作流&quot;">​</a></h2><ul><li><p>master 用于保存上线版本代码</p></li><li><p>develop 用于保存相对稳定版本的代码，该分支由 master 分支创建</p></li><li><p>feature 用于开发某几个功能，不同的功能可能会创建不同的分支，所有的feature都是由 dev 分支创建的</p></li><li><p>release 用于代码上线前的准备 (测试，bug修复) ，也是由 dev 分支创建</p></li><li><p>bugfix 用于修复不紧急 bug</p></li><li><p>hotfix 用于修复紧急 bug</p></li></ul><ol><li><p>领导（上级）创建项目，然后就有了 master 分支，然后再创建 dev 分支</p></li><li><p>根据开发需求，需要开发 a、b 功能，然后领导从 dev 分支中 创建了 feature/a、feature/b 两个分支</p></li><li><p>然后两个前端仔接到任务，分别 clone 项目到各自本地，然后使用 <code>git checkout -b feature/a、feature/b</code> 分支</p></li><li><p>两人分别进行开发、最后提交 <code>git push ----set-upstream origin feature/a（b同理）</code></p></li><li><p>领导 <code>git pull</code> 拉取代码，然后 <code>git merge origin/feature/b(a)</code> 进行代码合并，并且检查冲突问题，测试代码的时候，创建 release 分支</p></li><li><p>由测试同学 对测试分支 release 进行测试，如果有 bug，再创建 bugfix 或者 hotfix 分支进行修复 bug</p></li><li><p>改完 bug 之后，合并到 dev 分支，最后领导检查 dev 分支， 最后上线</p></li></ol>`,18),p=[a];function c(r,d,s,g,n,u){return i(),l("div",null,p)}const f=e(o,[["render",c]]);export{m as __pageData,f as default};
