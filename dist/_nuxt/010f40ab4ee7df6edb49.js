(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7b6314d6",content,!0,{sourceMap:!1})},191:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5e01d088",content,!0,{sourceMap:!1})},194:function(t,e,n){"use strict";var o=n(190);n.n(o).a},195:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".promo{text-align:center}.promo p{color:#999}",""])},196:function(t,e,n){"use strict";var o=n(191);n.n(o).a},197:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".contact{text-align:center;background-color:#4f68f4}.contact,.contact .title{color:#fff}.contact .contact-form{max-width:600px;margin:30px auto}.contact .controls{margin:30px 0}",""])},205:function(t,e,n){"use strict";n(36);var o={data:function(){return{message:null,user:{name:"",email:"",text:""}}},methods:{onSubmit:function(){this.message="Submited!",this.user.name="",this.user.email="",this.user.text=""}}},c=(n(196),n(2)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v(" Contact me! ")]),t._v(" "),t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[t._v(" Name: ")]),t._v(" "),n("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v(" Email: ")]),t._v(" "),n("AppTextArea",{model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}},[t._v(" Text: ")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",{attrs:{btnClass:"btnWhite"}},[t._v(" Submit! ")])],1)],1)],1)])},[],!1,null,null,null);e.a=component.exports},207:function(t,e,n){"use strict";n(194);var o=n(2),component=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"promo"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("My SSR Blog! With Nuxt.js")]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur consectetur quasi doloribus dolorem ab reiciendis pariatur quisquam voluptatibus, non laborum enim laboriosam, dolorum aliquam a natus accusantium nemo, architecto facere incidunt possimus. Accusamus, et voluptates debitis officia quae odio ipsam libero minus recusandae, perspiciatis neque magni dicta obcaecati esse.")])])])}],!1,null,null,null);e.a=component.exports},227:function(t,e,n){"use strict";n.r(e);var o=n(207),c=n(205),r={components:{promo:o.a,contacts:c.a},head:function(){var t="My SSR Blog! With Nuxt.js!";return{title:"My SSR Blog!",meta:[{hid:"og:title",name:"og:title",content:"My SSR Blog!"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}},computed:{postsLoaded:function(){return this.$store.getters.getPostsLoaded}}},l=n(2),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content wrapper-content--fixed"},[e("Intro",{attrs:{title:"My posts: "}}),this._v(" "),e("PostsList",{attrs:{posts:this.postsLoaded}})],1)},[],!1,null,null,null);e.default=component.exports}}]);