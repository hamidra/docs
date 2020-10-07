(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{157:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),o=(t(0),t(157)),i={title:"ss58 Formats"},s={unversionedId:"keyring/start/ss58",id:"keyring/start/ss58",isDocsHomePage:!1,title:"ss58 Formats",description:"In your previous examples, we explicitly passed the default ss58Format to the keyring. To understand the impact, we will use a real example of formatting using a known mnemonic.",source:"@site/docs/keyring/start/ss58.md",slug:"/keyring/start/ss58",permalink:"/docs/keyring/start/ss58",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/start/ss58.md",version:"current",sidebar:"reference",previous:{title:"Create",permalink:"/docs/keyring/start/create"},next:{title:"Sign & Verify",permalink:"/docs/keyring/start/sign-verify"}},c=[{value:"How is the encoding done?",id:"how-is-the-encoding-done",children:[]},{value:"Sign &amp; verify",id:"sign--verify",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In your previous examples, we explicitly passed the default ",Object(o.b)("inlineCode",{parentName:"p"},"ss58Format")," to the keyring. To understand the impact, we will use a real example of formatting using a known mnemonic."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"...\n// know mnemonic, well, now it is - don't use it for funds\nconst MNEMONIC = 'sample split bamboo west visual approve brain fox arch impact relief smile';\n\n// type: ed25519, ssFormat: 42 (all defaults)\nconst keyring = new Keyring();\nconst pair = keyring.createFromUri(MNEMONIC);\n\n// use the default as setup on init\n// 5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ\nconsole.log('Substrate generic', pair.address);\n\n// adjust the default ss58Format for Kusama\n// CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M\nkeyring.setSS58Format(2);\nconsole.log('Kusama', pair.address);\n\n// adjust the default ss58Format for Polkadot\n// 1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h\nkeyring.setSS58Format(0);\nconsole.log('Polkadot', pair.address);\n")),Object(o.b)("p",null,"While the pair has not changed at all since creation, each change of the ",Object(o.b)("inlineCode",{parentName:"p"},"ss58Format")," yields a different output. The human-readable format does not represent any difference in the underlying data, but the encoding is different."),Object(o.b)("h2",{id:"how-is-the-encoding-done"},"How is the encoding done?"),Object(o.b)("p",null,"To understand the above we will re-construct the actual encoding, based on the actual publicKey and using the underlying util-crypto libraries. First we will decode the addresses generated above."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(pair.publicKey);\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ'));\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M'));\n\n// 16,178,46,190,137,179,33,55,11,238,141,57,213,197,212,17,218,241,232,252,145,201,209,83,64,68,89,15,31,150,110,188\nconsole.log(keyring.decodeAddress('1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h'));\n")),Object(o.b)("p",null,"Here we used the ",Object(o.b)("inlineCode",{parentName:"p"},"decodeAddress")," exposed on the keyring, however we could also import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),". To understand what decode does, it takes the formatted address, verifies the checksums and then extracts the underlying ",Object(o.b)("inlineCode",{parentName:"p"},"publicKey"),". So the formatted address is a representation of the underlying ",Object(o.b)("inlineCode",{parentName:"p"},"AccountId"),", which on the default substrate chains maps to the ",Object(o.b)("inlineCode",{parentName:"p"},"publicKey")," for the pair."),Object(o.b)("p",null,"This also means we can encode from publicKey back to an address."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// 5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ\nconsole.log(keyring.encodeAddress(pair.publicKey, 42));\n\n// CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M\nconsole.log(keyring.encodeAddress(pair.publicKey, 2));\n\n// 1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Th7h\nconsole.log(keyring.encodeAddress(pair.publicKey, 0));\n")),Object(o.b)("p",null,"As per the previous example we used ",Object(o.b)("inlineCode",{parentName:"p"},"encodeAddress")," exposed on the keyring, however it could also be imported ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),"."),Object(o.b)("h2",{id:"sign--verify"},"Sign & verify"),Object(o.b)("p",null,"Now that we have an understanding of the keyring basics, time to expand our horizons and use the pairs to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/keyring/start/sign-verify"}),"sign and verify messaged"),"."))}d.isMDXComponent=!0}}]);