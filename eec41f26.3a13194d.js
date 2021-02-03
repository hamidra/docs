(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(167)),i={title:"Read storage"},s={unversionedId:"api/examples/promise/read-storage",id:"api/examples/promise/read-storage",isDocsHomePage:!1,title:"Read storage",description:"Many important variables are available through the storage API. This example shows how to call a few of those APIs.",source:"@site/docs/api/examples/promise/read-storage.md",slug:"/api/examples/promise/read-storage",permalink:"/docs/api/examples/promise/read-storage",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/read-storage.md",version:"current",sidebar:"reference",previous:{title:"Unsubscribe from listening to updates",permalink:"/docs/api/examples/promise/unsubscribe"},next:{title:"Read storage, at a specific blockhash",permalink:"/docs/api/examples/promise/read-storage-at"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Many important variables are available through the storage API. This example shows how to call a few of those APIs."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Our address for Alice on the dev chain\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\n\nasync function main () {\n  // Create our API with a default connection to the local node\n  const api = await ApiPromise.create();\n\n  // Make our basic chain state/storage queries, all in one go\n  const [{ nonce: accountNonce }, now, validators] = await Promise.all([\n    api.query.system.account(ALICE),\n    api.query.timestamp.now(),\n    api.query.session.validators()\n  ]);\n\n  console.log(`accountNonce(${ALICE}) ${accountNonce}`);\n  console.log(`last block timestamp ${now.toNumber()}`);\n\n  if (validators && validators.length > 0) {\n    // Retrieve the balances for all validators\n    const validatorBalances = await Promise.all(\n      validators.map((authorityId) =>\n        api.query.system.account(authorityId)\n      )\n    );\n\n    // Print out the authorityIds and balances of all validators\n    console.log('validators', validators.map((authorityId, index) => ({\n      address: authorityId.toString(),\n      balance: validatorBalances[index].data.free.toHuman(),\n      nonce: validatorBalances[index].nonce.toHuman()\n    })));\n  }\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);