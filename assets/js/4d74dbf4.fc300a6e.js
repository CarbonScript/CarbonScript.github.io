"use strict";(self.webpackChunkdocs_carbonscript=self.webpackChunkdocs_carbonscript||[]).push([[6945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const l={},a=void 0,i={unversionedId:"Basics/Control Flow",id:"Basics/Control Flow",title:"Control Flow",description:"if-else Block",source:"@site/docs/Basics/Control Flow.md",sourceDirName:"Basics",slug:"/Basics/Control Flow",permalink:"/docs/Basics/Control Flow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Array and Dictionary",permalink:"/docs/Basics/Array and Dictionary"},next:{title:"Function",permalink:"/docs/Basics/Function"}},p={},s=[{value:"if-else Block",id:"if-else-block",level:2},{value:"switch-case Block",id:"switch-case-block",level:2},{value:"foreach loop",id:"foreach-loop",level:2},{value:"for loop",id:"for-loop",level:2},{value:"while loop",id:"while-loop",level:2},{value:"do-while loop",id:"do-while-loop",level:2},{value:"Jump",id:"jump",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"if-else-block"},"if-else Block"),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"if-else block")," is the same as in most other C-like programming languages."),(0,r.kt)("p",null,"Its form is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if (<expression-0>){\n\n}\nelse if (<expression-1>){\n\n}\n#......\nelse if (<expression-n>){\n\n}\nelse{\n\n}\n")),(0,r.kt)("p",null,"Its effect is to judge the expression of each block one by one. If the result of this ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," is true, the content in the ",(0,r.kt)("inlineCode",{parentName:"p"},"if block")," is executed immediately. Then the remaining ",(0,r.kt)("inlineCode",{parentName:"p"},"if blocks")," are no longer judged and executed."),(0,r.kt)("p",null,"In this example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"expression-0")," is determined to be true, the statement in this ",(0,r.kt)("inlineCode",{parentName:"p"},"if block")," will be executed, and the following ",(0,r.kt)("inlineCode",{parentName:"p"},"expressions-1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"expression-n")," will be skipped regardless of whether they are true or not."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"else block")," is not necessary. If ",(0,r.kt)("inlineCode",{parentName:"p"},"expression-0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"expression-n")," are not established, and the else block exists, the content in the else block is executed."),(0,r.kt)("h2",{id:"switch-case-block"},"switch-case Block"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"switch-case block")," is a jump table and behaves in the same way as other C-like languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"switch case (<expression>){\n\n    case <value-1>:\n        # body\n    break;\n\n    case <value-2>:\n        # body\n    break;\n\n    # ......\n\n    case <value-n>:\n        # ...\n    break;\n\n    default:\n        # ...\n    break;\n\n}\n")),(0,r.kt)("p",null,"It will be compared with the possible values value-0 to value-n from top to bottom according to the return value of expression. "),(0,r.kt)("p",null,"If there is a value obtained, the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"case block")," is executed."),(0,r.kt)("p",null,"The meaning of break here is to jump out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," block. If break is encountered, the following case block will no longer be compared, and jump out of ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," directly. Note that after jumping to the ",(0,r.kt)("inlineCode",{parentName:"p"},"case block"),", if there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),", it will continue to compare other value and jump to other blocks."),(0,r.kt)("h2",{id:"foreach-loop"},"foreach loop"),(0,r.kt)("p",null,"foreach is used to iterate over ",(0,r.kt)("inlineCode",{parentName:"p"},"iterable-container"),". Such as ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dictionary")," or other custom containers. Each loop will get one of the items in the current container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foreach(<item name> in <container name>){\n    # ...\n}\n")),(0,r.kt)("p",null,"For example, it will output every elements in the array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set arr[]:number = [1,2,3,4,5];\nforeach(num in arr){\n    print(num);\n}\n# output: 1,2,3,4,5\n")),(0,r.kt)("p",null,"Note that when working in ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach block"),", the items and the container itself become read-only within the scope of the block. That is, you cannot do anything other than read operations on elements and containers inside a foreach block."),(0,r.kt)("p",null,"For example, it will throw compiler error,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set arr[]:number = [1,2,3,4,5];\nforeach(num in arr){\n    num = num + 1;\n    # it changes the item's value.\n}\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set arr[]:number = [1,2,3,4,5];\nforeach(num in arr){\n    arr.push(num);\n    # it changes the container.\n}\n")),(0,r.kt)("h2",{id:"for-loop"},"for loop"),(0,r.kt)("p",null,"The format of the ",(0,r.kt)("inlineCode",{parentName:"p"},"for loop")," is as follows,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for(<statement-0>;<expression>;<statement-1>){\n    # body\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"statement-0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"statement-1")," can be arbitrary statements. And ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," is an expression that returns a boolean value."),(0,r.kt)("p",null,"Before each loop, the expression will be evaluated. If the return value of the expression is true, the loop will be executed, otherwise the loop will be jumped out."),(0,r.kt)("p",null,"It is often used for array traversal, numeric subscript traversal, and so on."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set arr[]:number = [1,2,3,4,5];\nfor(set i:number = 0; i < arr.length; i++){\n    print(arr[i]);\n}\n# output: 1,2,3,4,5\n")),(0,r.kt)("h2",{id:"while-loop"},"while loop"),(0,r.kt)("p",null,"The format of the ",(0,r.kt)("inlineCode",{parentName:"p"},"while loop")," is as follows,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"while(<expression>){\n    # body\n};\n")),(0,r.kt)("p",null,"Before each traversal, the ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," will be evaluated, if it is true, it will enter the loop, otherwise it will jump out of the loop."),(0,r.kt)("h2",{id:"do-while-loop"},"do-while loop"),(0,r.kt)("p",null,"The format of the ",(0,r.kt)("inlineCode",{parentName:"p"},"do-while loop")," is as follows,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"do{\n    # body\n}while(true);\n")),(0,r.kt)("p",null,"The difference between its effect and ",(0,r.kt)("inlineCode",{parentName:"p"},"while loop")," is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"expression")," will not be evaluated to verify true before the first loop, but will directly enter the first loop. Then subsequent loops will validate the ",(0,r.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,r.kt)("h2",{id:"jump"},"Jump"),(0,r.kt)("p",null,"To jump out of flow control, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," keyword.\nbreak only supports jumping out of the following control blocks:",(0,r.kt)("inlineCode",{parentName:"p"},"do-while"),",",(0,r.kt)("inlineCode",{parentName:"p"},"while"),",",(0,r.kt)("inlineCode",{parentName:"p"},"for"),",",(0,r.kt)("inlineCode",{parentName:"p"},"foreach"),",",(0,r.kt)("inlineCode",{parentName:"p"},"switch-case")),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," is encountered, it will only jump out of the current control block. For example, if the control block is nested"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for(set i = 0 ;i < 10; i++){        # loop-1\n    for(set j = 0 ;j < 10; j++){    # loop-2\n        break;\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," only jump out of loop 2. And loop-1 will not be effected."))}u.isMDXComponent=!0}}]);