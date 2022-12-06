import{_ as n,o as s,c as a,f as e}from"./app.8b6d0242.js";const t={},p=e(`<h1 id="script-examples" tabindex="-1"><a class="header-anchor" href="#script-examples" aria-hidden="true">#</a> Script Examples</h1><h3 id="basic-component" tabindex="-1"><a class="header-anchor" href="#basic-component" aria-hidden="true">#</a> Basic component</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Object3D <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span>
    myObjectReference<span class="token operator">?</span><span class="token operator">:</span> Object3D<span class="token punctuation">;</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// called every frame</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>see <a href="scripting#lifecycle-methods">scripting</a> for all component events</p><h3 id="reference-an-object-from-unity" tabindex="-1"><a class="header-anchor" href="#reference-an-object-from-unity" aria-hidden="true">#</a> Reference an Object from Unity</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Object3D <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>
    <span class="token comment">// this will be a &quot;Transform&quot; field in Unity</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span> 
    myObjectReference<span class="token operator">:</span> Object3D <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reference-and-load-an-asset-from-unity-prefab-or-sceneasset" tabindex="-1"><a class="header-anchor" href="#reference-and-load-an-asset-from-unity-prefab-or-sceneasset" aria-hidden="true">#</a> Reference and load an asset from Unity (Prefab or SceneAsset)</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable<span class="token punctuation">,</span> AssetReference <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token comment">// if you export a prefab or scene as a reference from Unity you&#39;ll get a path to that asset</span>
    <span class="token comment">// which you can de-serialize to AssetReference for convenient loading</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>AssetReference<span class="token punctuation">)</span>
    myPrefab<span class="token operator">?</span><span class="token operator">:</span> AssetReference<span class="token punctuation">;</span>
    
    <span class="token keyword">async</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// directly instantiate</span>
      <span class="token keyword">const</span> myInstance <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myPrefab<span class="token operator">?.</span><span class="token function">instantiate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// you can also just load and instantiate later</span>
      <span class="token comment">// this.myPrefab.loadAssetAsync();</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-and-invoke-a-unityevent" tabindex="-1"><a class="header-anchor" href="#create-and-invoke-a-unityevent" aria-hidden="true">#</a> Create and invoke a UnityEvent</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable<span class="token punctuation">,</span> EventList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>EventList<span class="token punctuation">)</span>
    myEvent<span class="token operator">?</span> <span class="token operator">:</span> EventList<span class="token punctuation">;</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>myEvent<span class="token operator">?.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="declare-a-custom-event-type" tabindex="-1"><a class="header-anchor" href="#declare-a-custom-event-type" aria-hidden="true">#</a> Declare a custom event type</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> EventList<span class="token punctuation">,</span> GameObject<span class="token punctuation">,</span> serializeable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Documentation \u2192 https://docs.needle.tools/scripting</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CustomEventCaller</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token comment">// The next line is not just a comment, it defines </span>
    <span class="token comment">// a specific type for the component generator to use.</span>

    <span class="token comment">//@type UnityEngine.Events.UnityEvent&lt;string, UnityEngine.GameObject&gt;</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializeable</span></span><span class="token punctuation">(</span>EventList<span class="token punctuation">)</span>
    myEvent<span class="token operator">:</span> EventList<span class="token punctuation">;</span>

    <span class="token comment">// just for testing - could be when a button is clicked, etc.</span>
    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>myEvent<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CustomEventReceiver</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token function">logStringAndObject</span><span class="token punctuation">(</span>str <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> go <span class="token operator">:</span> GameObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;From Event: &quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> go<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Example use:</em><br><img src="https://user-images.githubusercontent.com/2693840/204370950-4c89b877-90d7-4e6f-8266-3352e6da16f4.png" alt="20221128-210735_Unity-needle"></p>`,13),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","scripting-examples.html.vue"]]);export{r as default};
