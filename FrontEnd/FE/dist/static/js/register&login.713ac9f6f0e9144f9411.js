webpackJsonp([1],{WiIv:function(e,t){},kcGD:function(e,t){},t7Oc:function(e,t){},tvR6:function(e,t){},"v+5l":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("WiIv")},null,null).exports,o=n("/ocq"),a={name:"login",data:function(){return{phone:"",key:"",usertype:"admin",isValid:0}},methods:{check:function(){var e=this;this.axios.get("/user/login",{phone:this.phone,key:this.key}).then(function(t){console.log(t),e.usertype=t.usertype,e.isValid=t.status}).catch(function(e){console.log(e)}),400!==this.isValid?("admin"===this.usertype&&(window.location.href="index.html?usertype=admin"),"users"===this.usertype&&(window.location.href="index.html?usertype=user")):alert("用户名或密码错误")},toregister:function(){this.$router.push("/register/true")}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card-wrapper"},[n("div",{staticClass:"inner-wrapper"},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",[n("h1",[e._v("欢迎登陆")])]),e._v(" "),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}})],1),e._v(" "),n("el-form-item",[n("el-row",{attrs:{gutter:"5"}},[n("el-col",{attrs:{span:"12"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning"},on:{click:function(t){return e.check()}}},[e._v("登陆")])],1),e._v(" "),n("el-col",{attrs:{span:"12"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning"},on:{click:function(t){return e.toregister()}}},[e._v("\n            注册\n          ")])],1)],1)],1),e._v(" "),n("el-form-item",[n("router-link",{attrs:{to:"/register/false"}},[e._v("找回密码")])],1)],1)],1)])])},staticRenderFns:[]};var c=n("VU/8")(a,l,!1,function(e){n("t7Oc")},"data-v-dbd7c258",null).exports,u={name:"register",data:function(){return{user:"",key:"",phone:"",code:"",verification:"",btn_msg:"获取验证码",isloading:!1}},methods:{sanitycheck:function(){this.key!==this.verification&&""!==this.key?this.$message.error("两次密码输入不匹配"):this.$message({message:"两次密码输入匹配",type:"success"})},getcode:function(){""!==this.phone?(this.axios.post("/user/getCode",{phone:this.phone}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),this.btn_msg="验证码已发送"):alert("请先输入电话号码")},submit:function(){var e=this;"true"===this.$route.params.isregister?""===this.phone||""===this.code||""===this.key||""===this.user||this.key!==this.verification&&""!==this.key?alert("信息尚未填写完整"):(this.isloading=!0,this.axios.post("/user/register",{user:this.user,key:this.key,phone:this.phone,code:this.code}).then(function(t){console.log(t),400===t.status&&(alert("验证码错误"),e.btn_msg="获取验证码",e.isloading=!1),401===t.status?(alert("手机号已经被注册"),e.btn_msg="获取验证码",e.isloading=!1):(alert("注册成功"),e.btn_msg="获取验证码",e.isloading=!1,e.$router.back())}).catch(function(e){console.log(e)})):""===this.phone||""===this.code||""===this.key||this.key!==this.verification&&""!==this.key?alert("信息尚未填写完整"):this.axios.post("/user/retrievePassword",{key:this.key,phone:this.phone,code:this.code}).then(function(t){console.log(t),400===t.status&&(alert("验证码错误"),e.btn_msg="获取验证码",e.isloading=!1),401===t.status?(alert("用户不存在"),e.btn_msg="获取验证码",e.isloading=!1):(alert("重设密码成功"),e.btn_msg="获取验证码",e.isloading=!1,e.$router.back())}).catch(function(e){console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card-wrapper"},[n("div",{staticClass:"inner-wrapper"},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",["true"===this.$route.params.isregister?n("h3",[e._v("注册新用户")]):n("h3",[e._v("找回密码")])]),e._v(" "),"true"===this.$route.params.isregister?n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"手机号"}},[n("el-row",[n("el-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"设置密码"}},[n("el-row",[n("el-input",{attrs:{type:"password"},on:{blur:function(t){return e.sanitycheck()}},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"再次输入密码"}},[n("el-input",{attrs:{type:"password"},on:{blur:function(t){return e.sanitycheck()}},model:{value:e.verification,callback:function(t){e.verification=t},expression:"verification"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"验证码"}},[n("el-row",{attrs:{gutter:"5"}},[n("el-col",{attrs:{span:"10"}},[n("el-input",{model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),n("el-col",{attrs:{span:"5"}},[n("el-button",{attrs:{name:"the_btn",disabled:"验证码已发送"===e.btn_msg},on:{click:function(t){return e.getcode()}}},[e._v(e._s(e.btn_msg))])],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"warning",loading:e.isloading},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1)],1)])])},staticRenderFns:[]};var p=n("VU/8")(u,h,!1,function(e){n("kcGD")},"data-v-d3ef35ac",null).exports;s.default.use(o.a);var d=new o.a({routes:[{path:"/",name:"login",component:c},{path:"/register/:isregister",name:"register",component:p}]}),f=n("zL8q"),m=n.n(f),v=(n("tvR6"),n("mtWM")),g=n.n(v),k=n("Rf8U"),y=n.n(k);s.default.use(y.a,g.a),s.default.use(m.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:d,components:{App:r},template:"<App/>"})}},["v+5l"]);
//# sourceMappingURL=register&login.713ac9f6f0e9144f9411.js.map