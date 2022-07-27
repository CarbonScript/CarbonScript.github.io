"use strict";(self.webpackChunkdocs_carbonscript=self.webpackChunkdocs_carbonscript||[]).push([[3991],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>v});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),v=l,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function v(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6609:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const r={sidebar_position:1},i=void 0,o={unversionedId:"Basics/Variable and Constant",id:"Basics/Variable and Constant",title:"Variable and Constant",description:"Declaration of Variable and Initial Value.",source:"@site/docs/Basics/Variable and Constant.md",sourceDirName:"Basics",slug:"/Basics/Variable and Constant",permalink:"/docs/Basics/Variable and Constant",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Statement and Expression",permalink:"/docs/Basics/Statement and Expression"},next:{title:"Keywords",permalink:"/docs/Basics/Keywords"}},s={},p=[{value:"Declaration of Variable and Initial Value.",id:"declaration-of-variable-and-initial-value",level:2},{value:"Declaration of single variable",id:"declaration-of-single-variable",level:3},{value:"Declaration of more variables:",id:"declaration-of-more-variables",level:3},{value:"Declaration of Constant.",id:"declaration-of-constant",level:2},{value:"Declaration of single variable",id:"declaration-of-single-variable-1",level:3},{value:"Declaration of more variables:",id:"declaration-of-more-variables-1",level:3}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"declaration-of-variable-and-initial-value"},"Declaration of Variable and Initial Value."),(0,l.kt)("p",null,"If you want to declare multiple variables at once, you can only declare multiple variables of the same data type, and it is not supported to declare variables of multiple mixed types at once."),(0,l.kt)("p",null,"For the naming of variables, only English letters or underscores can be used as the beginning, and keywords cannot be used."),(0,l.kt)("p",null,"Variables can be declared using the keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"set"),". This is a keyword dedicated to declaring variables."),(0,l.kt)("h3",{id:"declaration-of-single-variable"},"Declaration of single variable"),(0,l.kt)("p",null,"With initial value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set <variable name> : <datatype> = <value>;\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set example : string = "example value";\n')),(0,l.kt)("p",null,"Or without initial value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set <variable name> : <datatype>;\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set example : string;\n")),(0,l.kt)("p",null,"If the variable has no initial value, It will be automatically assigned the default value ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),";"),(0,l.kt)("h3",{id:"declaration-of-more-variables"},"Declaration of more variables:"),(0,l.kt)("p",null,"If you want to declare multiple variables of the same type at once, without initial values, you can do this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set <var1 ,var2, var3,...> : <datatype>;\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set a1,a2,a3 : string;\n")),(0,l.kt)("p",null,"In this way, we have created three variables ",(0,l.kt)("inlineCode",{parentName:"p"},"a1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a2"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a3"),", and their values are all ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"If you want to have an initial value, you can do this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set <var1 ,var2, var3,...> : <datatype> = <value1, value2, value3,...>;\n")),(0,l.kt)("p",null,"The initial values of the variables can be listed in order.In this way, the value of the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"var1")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"value1"),", and the value of the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"var2")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"value2"),", and so on."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set a1,a2,a3:string = "alice","bob","john";\n')),(0,l.kt)("p",null,"But there are exceptions. If you want in the above example, in addition to ",(0,l.kt)("inlineCode",{parentName:"p"},"a1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a3"),", these two variables have initial values, and ",(0,l.kt)("inlineCode",{parentName:"p"},"a2")," does not have initial values, then what should you do? In fact, it is very simple, just set the initial value of ",(0,l.kt)("inlineCode",{parentName:"p"},"a2")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If multiple variables are declared, and you want to give initial values for them, the count of initial values should be equal to variables. Otherwise, the rest of the variables will be set to null")),(0,l.kt)("p",null,"Such as this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set a1,a2,a3,a4:string = "alice","bob";\n')),(0,l.kt)("p",null,"The count of variables does not match values.\nSo the ",(0,l.kt)("inlineCode",{parentName:"p"},"a3"),",",(0,l.kt)("inlineCode",{parentName:"p"},"a4")," will be assigned ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("h2",{id:"declaration-of-constant"},"Declaration of Constant."),(0,l.kt)("p",null,"In contrast to variables, constants cannot be modified after they are declared. Also, constants must be assigned an initial value when they are declared, not null.\nAll constants must be determined at compile time or before compilation. An error occurs if the constant is found to be modified at runtime."),(0,l.kt)("p",null,"The naming convention for constants is the same as for variables."),(0,l.kt)("p",null,"Constants can be declared using ",(0,l.kt)("inlineCode",{parentName:"p"},"set const"),",very similar to the declaration of a variable. The only difference is that an initial value must be assigned."),(0,l.kt)("h3",{id:"declaration-of-single-variable-1"},"Declaration of single variable"),(0,l.kt)("p",null,"This is the right way to do"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set const <constant name>:<datatype> = <initial value>;\n")),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set const example : string = "This is a constant.";\n')),(0,l.kt)("p",null,"Of course, a declaration without an initial value throws an error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set const example : string; # WRONG EXAMPLE\n")),(0,l.kt)("h3",{id:"declaration-of-more-variables-1"},"Declaration of more variables:"),(0,l.kt)("p",null,"Similar to declaring multiple variables, the only difference is that these variables must be given initial values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set <var1 ,var2, var3,...> : <datatype> = <value1, value2, value3,...>;\n")),(0,l.kt)("p",null,"For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set const a1, a2, a3 : string = "constant 1", "constant 2", "constant 3";\n')),(0,l.kt)("p",null,"That is, the count of variables must be exactly equal to the count of initial values."),(0,l.kt)("p",null,"Otherwise, the remaining constants will be set to null, but an error will occur as constants cannot be null."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set const a1, a2, a3 : string = "constant 1", "constant 2", "constant 3";\n')),(0,l.kt)("p",null,"Like this,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'set const a1, a2, a3 : string = "constant 1", "constant 2";\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"a3")," has no corresponding initial value and will be automatically assigned to null, so an error will be reported."))}u.isMDXComponent=!0}}]);