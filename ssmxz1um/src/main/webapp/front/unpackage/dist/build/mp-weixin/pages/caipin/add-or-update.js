(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipin/add-or-update"],{"30ec":function(e,n,t){},"422a":function(e,n,t){"use strict";(function(e){t("8274");i(t("66fd"));var n=i(t("b0d8"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"743a":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"67b0"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"7f48":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,c){try{var u=e[a](c),o=u.value}catch(s){return void t(s)}u.done?n(o):Promise.resolve(o).then(i,r)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var c=e.apply(n,t);function u(e){a(c,i,r,u,o,"next",e)}function o(e){a(c,i,r,u,o,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("67b0"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{caipinbianhao:this.getUUID(),caipinmingcheng:"",caipinfenlei:"",tupian:"",kouweipianhao:"",jianjie:"",price:""},caipinfenleiOptions:[],caipinfenleiIndex:0,user:{},ro:{caipinbianhao:!1,caipinmingcheng:!1,caipinfenlei:!1,tupian:!1,kouweipianhao:!1,jianjie:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return c(i.default.mark((function r(){var a,c,u,o;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:return c=r.sent,t.user=c.data,r.next=7,t.$api.option("caipinfenlei","caipinfenlei",{});case 7:if(c=r.sent,t.caipinfenleiOptions=c.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=17;break}return t.ruleForm.id=n.id,r.next=15,t.$api.info("caipin",t.ruleForm.id);case 15:c=r.sent,t.ruleForm=c.data;case 17:if(t.cross=n.cross,!n.cross){r.next=61;break}u=e.getStorageSync("crossObj"),r.t0=i.default.keys(u);case 21:if((r.t1=r.t0()).done){r.next=61;break}if(o=r.t1.value,"caipinbianhao"!=o){r.next=27;break}return t.ruleForm.caipinbianhao=u[o],t.ro.caipinbianhao=!0,r.abrupt("continue",21);case 27:if("caipinmingcheng"!=o){r.next=31;break}return t.ruleForm.caipinmingcheng=u[o],t.ro.caipinmingcheng=!0,r.abrupt("continue",21);case 31:if("caipinfenlei"!=o){r.next=35;break}return t.ruleForm.caipinfenlei=u[o],t.ro.caipinfenlei=!0,r.abrupt("continue",21);case 35:if("tupian"!=o){r.next=39;break}return t.ruleForm.tupian=u[o],t.ro.tupian=!0,r.abrupt("continue",21);case 39:if("kouweipianhao"!=o){r.next=43;break}return t.ruleForm.kouweipianhao=u[o],t.ro.kouweipianhao=!0,r.abrupt("continue",21);case 43:if("jianjie"!=o){r.next=47;break}return t.ruleForm.jianjie=u[o],t.ro.jianjie=!0,r.abrupt("continue",21);case 47:if("clicktime"!=o){r.next=51;break}return t.ruleForm.clicktime=u[o],t.ro.clicktime=!0,r.abrupt("continue",21);case 51:if("clicknum"!=o){r.next=55;break}return t.ruleForm.clicknum=u[o],t.ro.clicknum=!0,r.abrupt("continue",21);case 55:if("price"!=o){r.next=59;break}return t.ruleForm.price=u[o],t.ro.price=!0,r.abrupt("continue",21);case 59:r.next=21;break;case 61:t.styleChange();case 62:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},caipinfenleiChange:function(e){this.caipinfenleiIndex=e.target.value,this.ruleForm.caipinfenlei=this.caipinfenleiOptions[this.caipinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(i.default.mark((function t(){var r,a,c,u,o,s,l,f,p,d;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){t.next=3;break}return n.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 3:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){t.next=6;break}return n.$utils.msg("价格应输入数字"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=22;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=18;break}for(l in s)l==u&&(s[l]=o);return f=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(f),s);case 16:t.next=22;break;case 18:r=Number(e.getStorageSync("userid")),a=s["id"],c=e.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 22:if(!a||!r){t.next=44;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,p={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=28,n.$api.list("caipin",p);case 28:if(d=t.sent,!(d.data.total>=c)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("caipin",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("caipin",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("caipin",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("caipin",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},afb3:function(e,n,t){"use strict";var i=t("30ec"),r=t.n(i);r.a},b0d8:function(e,n,t){"use strict";t.r(n);var i=t("743a"),r=t("fa8f");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("afb3");var c,u=t("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"207f35ad",null,!1,i["a"],c);n["default"]=o.exports},fa8f:function(e,n,t){"use strict";t.r(n);var i=t("7f48"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a}},[["422a","common/runtime","common/vendor"]]]);