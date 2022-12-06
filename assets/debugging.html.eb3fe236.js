import{_ as l,r as i,o as s,c as a,a as e,d as o,b as r,f as n}from"./app.8b6d0242.js";const d={},c=e("h2",{id:"\u{1F50D}-useful-resources-for-working-with-gltf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u{1F50D}-useful-resources-for-working-with-gltf","aria-hidden":"true"},"#"),o(" \u{1F50D} Useful resources for working with glTF")],-1),h=e("p",null,"To inspect glTF or glb files online:",-1),u={href:"https://gltf.report/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://modelviewer.dev/editor",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.khronos.org/glTF-Sample-Viewer-Release/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://sandbox.babylonjs.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.khronos.org/glTF-Validator/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"To inspect them locally:",-1),m={href:"https://apps.microsoft.com/store/detail/gltf-shell-extensions/9NPGVJ9N57MV?hl=en-us&gl=US",target:"_blank",rel:"noopener noreferrer"},v={href:"https://marketplace.visualstudio.com/items?itemName=cesium.gltf-vscode",target:"_blank",rel:"noopener noreferrer"},w=n('<h2 id="\u{1F516}-built-in-url-parameters" tabindex="-1"><a class="header-anchor" href="#\u{1F516}-built-in-url-parameters" aria-hidden="true">#</a> \u{1F516} Built-in URL parameters</h2><p>Debug Flags can be appended as URL query parameters.<br> Use <code>?help</code> to get a list of ALL parameters available.</p><p>Here are some of the most commonly used:</p><ul><li><code>help</code> print all available url parameter in the console</li><li><code>console</code> opens an on-screen dev console, useful for mobile debugging</li><li><code>printGltf</code> logs loaded gltf files to the console</li><li><code>debug</code> shows transform gizmos (if any)</li><li><code>debugavatar=&lt;avatarid&gt;</code> instantiates one debug avatar in center of world</li><li><code>debugphysics</code> shows physics colliders</li><li><code>gizmos</code> enables gizmo rendering (e.g. when using BoxCollider or AxesHelper components)</li><li>and a lot more: please use <code>help</code> to see them all</li></ul><h2 id="\u{1F343}-local-testing-of-release-builds" tabindex="-1"><a class="header-anchor" href="#\u{1F343}-local-testing-of-release-builds" aria-hidden="true">#</a> \u{1F343} Local Testing of release builds</h2>',5),y=n("<li>First, install http-server: <code>npm install -g http-server</code></li><li>make a build (development or production)</li><li>open the <em>dist</em> directory with a commandline tool</li><li>run <code>http-server -g</code> | <em><code>-g</code> enables gzip support</em></li>",4),k={href:"https://stackoverflow.com/a/35231213",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"http-server -g -S",-1),S=e("h2",{id:"\u{1F4F1}-mobile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u{1F4F1}-mobile","aria-hidden":"true"},"#"),o(" \u{1F4F1} Mobile")],-1),T=e("h3",{id:"android-debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android-debugging","aria-hidden":"true"},"#"),o(" Android Debugging")],-1),F=e("p",null,[o("For "),e("strong",null,"Android"),o(" debugging, you can attach Chrome Dev Tools to your device and see logs right from your PC. You have to switch your device into development mode and connect it via USB.")],-1),V={href:"https://developer.chrome.com/docs/devtools/remote-debugging/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://developer.android.com/studio/debug/dev-options",target:"_blank",rel:"noopener noreferrer"},L=e("li",null,"Connect your phone to your computer via USB",-1),U=e("li",null,[o("Open this url in your browser "),e("code",null,"chrome://inspect/#devices")],-1),R=e("li",null,"On your mobile device allow the USB connection to your computer",-1),A=e("li",null,[o("On your computer in chrome you should see a list of open tabs after a while (on "),e("code",null,"chrome://inspect/#devices"),o(")")],-1),C=e("li",null,[o("Click "),e("code",null,"Inspect"),o(" on the tab you want to debug")],-1),D=e("h3",{id:"ios-debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ios-debugging","aria-hidden":"true"},"#"),o(" iOS Debugging")],-1),N=e("p",null,[o("For easy iOS debugging add the "),e("code",null,"?console"),o(" URL parameter to get a useful on-screen JavaScript console.")],-1),z=e("p",null,"If you have a Mac, you can also attach to Safari (similar to the Android workflow above).",-1),M={href:"https://labs.mozilla.org/projects/webxr-viewer/",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"quest-debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quest-debugging","aria-hidden":"true"},"#"),o(" Quest Debugging")],-1),j=e("p",null,[o("Quest is just an Android device - see the "),e("a",{href:"#android-debugging"},"Android Debugging"),o(" section for steps.")],-1);function q(E,W){const t=i("ExternalLinkIcon");return s(),a("div",null,[c,h,e("ul",null,[e("li",null,[e("a",u,[o("gltf.report"),r(t)]),o(" - three.js based")]),e("li",null,[e("a",g,[o("modelviewer.dev/editor"),r(t)]),o(" - three.js based")]),e("li",null,[e("a",p,[o("Khronos glTF Sample Viewer"),r(t)])]),e("li",null,[e("a",b,[o("Babylon Sandbox"),r(t)])]),e("li",null,[e("a",_,[o("glTF Validator"),r(t)])])]),f,e("ul",null,[e("li",null,[o("use the "),e("a",m,[o("glTF Shell Extension for Windows"),r(t)]),o(" to convert between glTF and glb")]),e("li",null,[o("use the "),e("a",v,[o("glTF Tools VS Code Extension"),r(t)]),o(" to see validation errors and in-engine previews locally")])]),w,e("ul",null,[y,e("li",null,[o("optional: if you want to test WebXR, generate a "),e("a",k,[o("self-signed SSL certificate"),r(t)]),o(", then run "),x,o(" to enable https (required for WebXR).")])]),S,T,F,e("p",null,[o("See the official chrome documentation "),e("a",V,[o("here"),r(t)])]),e("ul",null,[e("li",null,[o("Make sure "),e("a",B,[o("Developer Mode"),r(t)]),o(" is enabled on your phone")]),L,U,R,A,C]),D,N,z,e("p",null,[o("WebXR usage and debugging on iOS requires using a third-party browser: "),e("a",M,[o("Mozilla WebXR Viewer"),r(t)]),o(".")]),O,j])}const X=l(d,[["render",q],["__file","debugging.html.vue"]]);export{X as default};
