webpackJsonp([1],{Fs8J:function(e,t,s){"use strict";(function(e){t.a={name:"Home",data:function(){return{imageUrl:"",apipath:"http://api.diasos.cc",checkCode:"点击获取",loginstatus:sessionStorage.loginstatus,infosheight:e(".cominfos").height(),isheight:"",listdata:Object,issub:sessionStorage.isssub,comanyinformation:"缔亚智软（DiasSoftware Inc.）致力于高新技术应用领域应用软件开发、企业网站开发、安卓/苹果App、微信小程序等企业信息化解决方案。长期专注于全行业信息化解决方案领域，凭借多年在应用软件开发以及信息安全服务的积累的经验，缔亚智软已经成为该领域内著名的应用系统解决方案提供商，期待与您合作......",activeName:"1",color:"rgba(255, 255, 255, 0.8)",data:["http://www.diasos.cc/templets/Dias/images/1.jpg","http://www.diasos.cc/templets/Dias/images/3.jpg","http://www.diasos.cc/templets/Dias/images/2.jpg"],formdata:{userid:sessionStorage.userid,apptype:"",clientname:sessionStorage.username,clientphone:sessionStorage.userphone,appdescriptions:""},infos:{title:"",description:"",img:"",content:""},htmltxt:"",htmltxtnews:"",isbool:!0,logindata:{loginphone:"",loginpassword:"",logincode:""},registerdata:{regphone:"",regname:"",regpass:"",regpassword:"",regcode:""},userinfos:{$userid:sessionStorage.userid,$userphone:sessionStorage.userphone,$username:sessionStorage.username,$userimg:sessionStorage.userimg,$usernum:sessionStorage.usernum,$usernetname:sessionStorage.usernetname,$userage:sessionStorage.userage,$usersex:sessionStorage.usersex,$userbirth:sessionStorage.userbirth,$userprovince:sessionStorage.userprovince,$usercity:sessionStorage.usercity,$usercounty:sessionStorage.usercounty,$useraddress:sessionStorage.useraddress,$useridcard:sessionStorage.useridcard,$userothers:sessionStorage.userothers,$userregtime:sessionStorage.userregtime}}},computed:{isLogin:function(){return!!(this.formdata.apptype&&this.formdata.clientname&&this.formdata.clientphone&&this.formdata.appdescriptions)},isloging:function(){this.logindata.loginphone&&this.logindata.loginpassword&&this.logindata.logincode},isreg:function(){this.registerdata.regphone&&this.registerdata.regname&&this.registerdata.regpass&&this.registerdata.regpassword&&this.registerdata.regcode}},mounted:function(){this.loadingarticle(),this.isheight=e(".cominfos").outerHeight(!0),console.log(this.isheight);var t=this;window.onresize=function(){return t.infosheight=e(".cominfos").height(),void e(".cominfosss").css("height",t.infosheight)}},watch:{screenWidth:function(e){if(!this.timer){this.infosheight=e,this.timer=!0;var t=this;setTimeout(function(){console.log(t.infosheight),t.init(),t.timer=!1},400)}}},methods:{loadingarticle:function(){var e=this;this.$https.get(this.apipath+"/index.php/API/InterFace/getarticle",{id:1}).then(function(t){console.log(t.data),e.listdata=t.data})},viewcominfos:function(){var t=this;this.$https.get(this.apipath+"/index.php/API/InterFace/index",{id:123}).then(function(e){console.log(e.data[0].content),t.htmltxt=e.data[0].content}),e(".dialogwin").addClass("animated zoomInDown diawinshow");var s=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){s.close()},1500)},closewin:function(){e(".dialogwin").removeClass("animated zoomInDown diawinshow")},closenewswin:function(){e(".dialogwinnews").removeClass("animated zoomInRight diawinshow")},userlogin:function(){e(".loginwin").addClass("animated zoomInRight diawinshow");var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){t.close()},1500)},userregister:function(){e(".registerwin").addClass("animated zoomInRight diawinshow");var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){t.close()},1500)},toregister:function(){e(".loginwin").removeClass("animated zoomInRight diawinshow"),e(".registerwin").addClass("animated zoomInRight diawinshow");var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){t.close()},1500)},loginexit:function(){e(".loginwin").removeClass("animated zoomInRight diawinshow")},registerexit:function(){e(".registerwin").removeClass("animated zoomInRight diawinshow")},submitform:function(){var e=this;if(this.issub)this.$message({showClose:!0,message:"您已经提交过数据，不需要重复提交数据！",type:"error"});else{var t=this.apipath+"/index.php/API/InterFace/getbusinesses";this.$https({method:"post",url:t,params:{userid:this.formdata.userid,apptype:this.formdata.apptype,clientname:this.formdata.clientname,clientphone:this.formdata.clientphone,appdescriptions:this.formdata.appdescriptions}}).then(function(t){e.$message({showClose:!0,message:t.data[0].msg,type:"success"}),e.formdata.userid="",e.formdata.apptype="",e.formdata.appdescriptions="",e.formdata.clientname=sessionStorage.username,e.formdata.clientphone=sessionStorage.userphone,sessionStorage.isssub=!0,e.issub=sessionStorage.isssub}).catch(function(t){console.log(t),e.$message({showClose:!0,message:"网络错误！请稍候重试！",type:"error"})})}},subreg:function(){var t=this;if(this.registerdata.regcode.toUpperCase()==this.checkCode.toUpperCase())if(this.registerdata.regpass!==this.registerdata.regpassword)this.$message({showClose:!0,message:"两次输入密码不相同",type:"error"});else{var s=this.apipath+"/index.php/API/InterFace/userreg";this.$https({method:"post",url:s,params:{userphone:this.registerdata.regphone,username:this.registerdata.regname,userpassword:this.registerdata.regpassword}}).then(function(s){console.log(s),"true"==s.data[0].status?(t.$message({showClose:!0,message:s.data[0].msg,type:"error"}),e(".registerwin").removeClass("animated zoomInRight diawinshow"),e(".loginwin").addClass("animated zoomInRight diawinshow"),t.registerdata.regphone="",t.registerdata.regname="",t.registerdata.regpass="",t.registerdata.regpassword="",t.registerdata.regcode=""):t.$message({showClose:!0,message:s.data[0].msg,type:"error"})}).catch(function(e){console.log(e),t.$message({showClose:!0,message:"网络错误！请稍候重试！",type:"error"})})}else this.$message({showClose:!0,message:"您输入的验证码不正确",type:"error"})},usercenter:function(){e(".usercenterbox").addClass("animated zoomInUp diawinshow")},usercenterexit:function(){e(".usercenterbox").removeClass("animated zoomInUp diawinshow")},userlogoff:function(){sessionStorage.userphone="",sessionStorage.username="",sessionStorage.userimg="",sessionStorage.usernum="",sessionStorage.usernetname="",sessionStorage.userage="",sessionStorage.usersex="",sessionStorage.userbirth="",sessionStorage.userprovince="",sessionStorage.usercity="",sessionStorage.usercounty="",sessionStorage.useraddress="",sessionStorage.useridcard="",sessionStorage.userothers="",sessionStorage.userregtime="",sessionStorage.userid="",sessionStorage.loginstatus="",this.formdata.userid=sessionStorage.userid,this.formdata.clientname=sessionStorage.username,this.formdata.clientphone=sessionStorage.userphone,this.loginstatus=sessionStorage.loginstatus},sublogin:function(){var t=this;if(this.logindata.logincode.toUpperCase()==this.checkCode.toUpperCase()){var s=this.apipath+"/index.php/API/InterFace/userlogin";this.$https({method:"post",url:s,params:{userphone:this.logindata.loginphone,userpassword:this.logindata.loginpassword}}).then(function(s){"false"==s.data.status?t.$message({showClose:!0,message:s.data.msg,type:"error"}):""!=s.data[0].user_numid&&(e(".loginwin").removeClass("animated zoomInRight diawinshow"),t.logindata.loginphone="",t.logindata.loginpassword="",t.logindata.logincode="",sessionStorage.userphone=s.data[0].user_phone,sessionStorage.username=s.data[0].user_name,sessionStorage.userimg=s.data[0].user_img,sessionStorage.usernum=s.data[0].user_numid,sessionStorage.usernetname=s.data[0].user_netname,sessionStorage.userage=s.data[0].user_age,sessionStorage.usersex=s.data[0].user_sex,sessionStorage.userbirth=s.data[0].user_birth,sessionStorage.userprovince=s.data[0].user_province,sessionStorage.usercity=s.data[0].user_city,sessionStorage.usercounty=s.data[0].user_county,sessionStorage.useraddress=s.data[0].user_address,sessionStorage.useridcard=s.data[0].user_idcard,sessionStorage.userothers=s.data[0].user_others,sessionStorage.userregtime=s.data[0].user_regtime,sessionStorage.userid=s.data[0].id,sessionStorage.loginstatus=!0,t.formdata.userid=sessionStorage.userid,t.formdata.clientname=sessionStorage.username,t.formdata.clientphone=sessionStorage.userphone,t.loginstatus=sessionStorage.loginstatus,t.userinfos.$userimg=sessionStorage.userimg,t.userinfos.$userphone=sessionStorage.userphone,t.userinfos.$username=sessionStorage.username,t.userinfos.$userimg=sessionStorage.userimg,t.userinfos.$usernum=sessionStorage.usernum,t.userinfos.$usernetname=sessionStorage.usernetname,t.userinfos.$userage=sessionStorage.userage,t.userinfos.$usersex=sessionStorage.usersex,t.userinfos.$userbirth=sessionStorage.userbirth,t.userinfos.$userprovince=sessionStorage.userprovince,t.userinfos.$usercity=sessionStorage.usercity,t.userinfos.$usercounty=sessionStorage.usercounty,t.userinfos.$useraddress=sessionStorage.useraddress,t.userinfos.$useridcard=sessionStorage.useridcard,t.userinfos.$userothers=sessionStorage.userothers,t.userinfos.$userregtime=sessionStorage.userregtime,t.$message({showClose:!0,message:"登录成功！",type:"success"}))}).catch(function(e){console.log(e),t.$message({showClose:!0,message:"网络错误！请稍候重试！",type:"error"})})}else this.$message({showClose:!0,message:"您输入的验证码不正确",type:"error"})},edituserbtn:function(){e(".edituserforms").addClass("animated zoomInUp diawinshow"),e(".usercenterbox").removeClass("animated zoomInUp diawinshow")},coloseeditpage:function(){e(".edituserforms").removeClass("animated zoomInUp diawinshow"),e(".usercenterbox").addClass("animated zoomInUp diawinshow")},viewnews:function(){this.isture()},isture:function(){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},viewnum:function(t){var s=this;this.$https.get(this.apipath+"/index.php/API/InterFace/getarticleinfos?id="+t,{id:1}).then(function(e){console.log(e),console.log(t),console.log(e.data[0].body),s.htmltxtnews=e.data[0].body}),e(".dialogwinnews").addClass("animated zoomInRight diawinshow");var i=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(function(){i.close()},1500)},createCode:function(){for(var e="",t=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),s=0;s<4;s++){e+=t[Math.floor(36*Math.random())]}this.checkCode=e},checkLpicma:function(){if(this.picLyanzhengma.toUpperCase(),""==this.picLyanzhengma)e(".login_content1 span:eq(2)").text("请输入验证码"),e(".login_content1 span:eq(2)").removeClass("disappear");else{if(this.picLyanzhengma.toUpperCase()==this.checkCode)return e(".login_content1 span:eq(2)").addClass("disappear"),e(".login_content1 span:eq(2)").text("请输入验证码"),!0;console.log(this.picLyanzhengma.toUpperCase()),e(".login_content1 span:eq(2)").text("验证码不正确"),e(".login_content1 span:eq(2)").removeClass("disappear"),this.createCode(),this.picLyanzhengma=""}},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,s=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&s}}},e(function(){e(".mainbox").addClass("animated zoomInLeft"),e(".cominfosss").css("height",e(".cominfos").height()),e("body").bind("contextmenu",function(){return!1})})}).call(t,s("7t+N"))},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},o,!1,function(e){s("TlkQ")},null,null).exports,n=s("/ocq"),r=s("Fs8J"),d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",{staticClass:"thebox"},[s("el-main",{staticClass:"bigbox"},[s("div",{staticClass:"mainbox"},[s("el-row",[s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"cominfos"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticClass:"cominfos-content"},[s("div",{staticClass:"cominfos-content-img"},[s("img",{staticClass:"animated rotateIn",attrs:{draggable:"false",src:"http://www.diasos.cc/images/logodias.png",width:"100%",height:"300"}})]),e._v(" "),s("div",{staticClass:"cominfos-contents-text"},[e._v("\n                      "+e._s(e.comanyinformation)+"\n                    ")]),e._v(" "),s("div",{staticClass:"infosbtn"},[s("el-button",{attrs:{size:"mini",plain:"",round:""},on:{click:e.viewcominfos}},[e._v("查看详细")])],1)])])],1)]),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"cominfoss"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticStyle:{padding:"10px"}},[s("div",{staticClass:"topicon"},[s("i",{staticClass:"animated rotateIn iconfont  icon-apple",staticStyle:{"font-size":"50px"}}),e._v(" "),s("i",{staticClass:"animated rotateIn iconfont  icon-linux",staticStyle:{"font-size":"50px",color:"MediumVioletRed"}}),e._v(" "),s("i",{staticClass:"animated rotateIn iconfont  icon-windowsos",staticStyle:{"font-size":"50px",color:"#00BFFF"}})]),e._v(" "),s("div",{staticClass:"line",staticStyle:{"margin-top":"30px","margin-bottom":"0"}}),e._v(" "),s("div",{staticClass:"inputbox",attrs:{model:e.formdata}},[s("div",{staticClass:"titlemain"},[e._v("\n                          支持多平台解决方案\n                        ")]),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入需求类型","prefix-icon":"el-icon-goods"},model:{value:e.formdata.apptype,callback:function(t){e.$set(e.formdata,"apptype",t)},expression:"formdata.apptype"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入姓名","prefix-icon":"el-icon-document"},model:{value:e.formdata.clientname,callback:function(t){e.$set(e.formdata,"clientname",t)},expression:"formdata.clientname"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入联系电话","prefix-icon":"el-icon-message"},model:{value:e.formdata.clientphone,callback:function(t){e.$set(e.formdata,"clientphone",t)},expression:"formdata.clientphone"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入需求描述","prefix-icon":"el-icon-loading"},model:{value:e.formdata.appdescriptions,callback:function(t){e.$set(e.formdata,"appdescriptions",t)},expression:"formdata.appdescriptions"}})],1),e._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"nomal",disabled:!(e.formdata.apptype&&e.formdata.appdescriptions&&e.formdata.clientname&&e.formdata.clientphone)},on:{click:e.submitform}},[e._v("提 交 需 求")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loginstatus,expression:"!loginstatus"}],staticStyle:{"margin-top":"10px"}},[s("el-button",{staticStyle:{color:"gray"},attrs:{type:"text",size:"mini"},on:{click:e.userlogin}},[e._v("会员登录")]),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("el-button",{staticStyle:{color:"gray"},attrs:{type:"text",size:"mini"},on:{click:e.userregister}},[e._v("现在注册")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loginstatus,expression:"loginstatus"}],staticStyle:{"margin-top":"20px"}},[s("i",{staticClass:"iconfont  icon-VIP",staticStyle:{"font-size":"13px"}}),e._v(" "),s("el-button",{staticStyle:{color:"gray"},attrs:{type:"text",size:"mini"},on:{click:e.usercenter}},[e._v("个人中心")]),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("el-button",{staticStyle:{color:"gray"},attrs:{type:"text",size:"mini"},on:{click:e.userlogoff}},[e._v("注销登录")])],1)])])])],1)]),e._v(" "),s("el-col",{attrs:{span:8,xs:24}},[s("div",{staticClass:"cominfosss"},[s("el-scrollbar",{staticClass:"page-component-scroll",staticStyle:{height:"100%"}},[s("div",{staticClass:"cominfoss-descritions"},e._l(e.listdata,function(t){return s("div",{key:t.id,staticClass:"cominfis-list"},[s("div",{staticClass:"cominfis-list-left"},[s("img",{staticClass:"animated rotateIn",attrs:{src:"http://www.diasos.cc"+t.litpic,width:"50",height:"50"}})]),e._v(" "),s("div",{staticClass:"cominfis-list-center"},[s("div",{staticClass:"cominfis-list-center-top"},[e._v(e._s(t.title.substring(0,6)+".."))]),e._v(" "),s("div",{staticClass:"cominfis-list-center-bottom"},[e._v(e._s(t.description.substring(0,6)+"......"))])]),e._v(" "),s("div",{staticClass:"cominfis-list-right"},[s("el-badge",{staticClass:"item",attrs:{value:t.click,max:999}},[s("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(s){e.viewnum(t.id)}}},[e._v("浏览")])],1)],1)])}))])],1)])],1)],1)]),e._v(" "),s("el-footer",[s("div",{staticClass:"copyright"},[s("i",{staticClass:"iconfont  icon-anquandunpai",staticStyle:{"font-size":"10px",color:"gray"}}),e._v("\n      Copyright © 2018.Diassoftware All rights reserved.中国·深圳·贵阳·缔亚智软(粤IPC-180015200)\n    ")])]),e._v(" "),s("div",{staticClass:"dialogwin"},[s("div",{staticClass:"diatitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.closewin}})]),e._v(" "),s("div",{staticClass:"diacontent"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticClass:"content-descrpition"},[s("div",{staticClass:"line"}),e._v(" "),s("div",{staticClass:"content-core",domProps:{innerHTML:e._s(e.htmltxt.replace("/uploads","http://www.diasos.cc/uploads"))}},[e._v("\n            "+e._s(e.htmltxt.replace("/uploads","http://www.diasos.cc/uploads"))+"\n          ")]),e._v(" "),s("div",{staticClass:"line"})])])],1)]),e._v(" "),s("div",{staticClass:"dialogwinnews"},[s("div",{staticClass:"diatitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.closenewswin}})]),e._v(" "),s("div",{staticClass:"diacontent"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticClass:"content-descrpition"},[s("div",{staticClass:"line"}),e._v(" "),s("div",{staticClass:"content-core",domProps:{innerHTML:e._s(e.htmltxtnews.replace(/\/uploads/g,"http://www.diasos.cc/uploads"))}},[e._v("\n            "+e._s(e.htmltxtnews.replace(/\/uploads/g,"http://www.diasos.cc/uploads"))+"\n          ")]),e._v(" "),s("div",{staticClass:"line"})])])],1)]),e._v(" "),s("div",{staticClass:"loginwin"},[s("div",{staticClass:"lrtitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.loginexit}})]),e._v(" "),s("div",{staticClass:"loginregister"},[s("div",{staticStyle:{height:"20%"}},[s("div",{staticClass:"loginregtitle"},[s("i",{staticClass:"iconfont  icon-denglu",staticStyle:{"font-size":"15px",color:"#BF3EFF"}}),e._v("\n          会员登录 | User Center\n          ")])]),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入手机号","prefix-icon":"el-icon-mobile-phone"},model:{value:e.logindata.loginphone,callback:function(t){e.$set(e.logindata,"loginphone",t)},expression:"logindata.loginphone"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{type:"password",placeholder:"请输入密码","prefix-icon":"el-icon-warning"},model:{value:e.logindata.loginpassword,callback:function(t){e.$set(e.logindata,"loginpassword",t)},expression:"logindata.loginpassword"}})],1),e._v(" "),s("div",[s("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"验证码","prefix-icon":"el-icon-refresh"},model:{value:e.logindata.logincode,callback:function(t){e.$set(e.logindata,"logincode",t)},expression:"logindata.logincode"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode,expression:"checkCode"}],staticClass:"verification",attrs:{type:"button",id:"code"},domProps:{value:e.checkCode},on:{click:e.createCode,input:function(t){t.target.composing||(e.checkCode=t.target.value)}}})],1),e._v(" "),s("div",[s("el-button",{staticStyle:{"margin-top":"30px",width:"25%"},attrs:{type:"info",size:"small",disabled:!e.logindata.loginphone||!e.logindata.loginpassword||!e.logindata.logincode,round:""},on:{click:e.sublogin}},[e._v("登 录")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:e.toregister}},[e._v("没有账号现在去注册")])],1)])]),e._v(" "),s("div",{staticClass:"registerwin"},[s("div",{staticClass:"lrtitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.registerexit}})]),e._v(" "),s("div",{staticClass:"loginregister"},[s("div",{staticStyle:{height:"10%"}},[s("div",{staticClass:"loginregtitle"},[s("i",{staticClass:"iconfont  icon-zhuce",staticStyle:{"font-size":"15px",color:"#BFEFFF"}}),e._v("\n          会员注册 | User Register\n        ")])]),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入联系电话","prefix-icon":"el-icon-mobile-phone"},model:{value:e.registerdata.regphone,callback:function(t){e.$set(e.registerdata,"regphone",t)},expression:"registerdata.regphone"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{placeholder:"请输入姓名","prefix-icon":"el-icon-tickets"},model:{value:e.registerdata.regname,callback:function(t){e.$set(e.registerdata,"regname",t)},expression:"registerdata.regname"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{type:"password",placeholder:"请输入密码","prefix-icon":"el-icon-warning"},model:{value:e.registerdata.regpass,callback:function(t){e.$set(e.registerdata,"regpass",t)},expression:"registerdata.regpass"}})],1),e._v(" "),s("div",[s("el-input",{attrs:{type:"password",placeholder:"确认密码","prefix-icon":"el-icon-warning"},model:{value:e.registerdata.regpassword,callback:function(t){e.$set(e.registerdata,"regpassword",t)},expression:"registerdata.regpassword"}})],1),e._v(" "),s("div",[s("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入验证码","prefix-icon":"el-icon-refresh"},model:{value:e.registerdata.regcode,callback:function(t){e.$set(e.registerdata,"regcode",t)},expression:"registerdata.regcode"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkCode,expression:"checkCode"}],staticClass:"verification",attrs:{type:"button",id:"code"},domProps:{value:e.checkCode},on:{click:e.createCode,input:function(t){t.target.composing||(e.checkCode=t.target.value)}}})],1),e._v(" "),s("div",[s("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"info",size:"small",disabled:!(e.registerdata.regphone&&e.registerdata.regname&&e.registerdata.regpass&&e.registerdata.regpassword&&e.registerdata.regcode),round:""},on:{click:e.subreg}},[e._v("提交注册")]),e._v(" "),s("el-button",{attrs:{type:"text"},on:{click:e.registerexit}},[e._v("暂时不注册")])],1)])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loginstatus,expression:"loginstatus"}],staticClass:"animated flip vipimg",on:{click:e.usercenter}},[s("img",{attrs:{draggable:"false",src:e.apipath+e.userinfos.$userimg,width:"100",height:"100"}})]),e._v(" "),s("div",{staticClass:"usercenterbox"},[s("div",{staticClass:"diatitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.usercenterexit}})]),e._v(" "),s("div",{staticClass:"usercenterinfos"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticClass:"usercenterscrollbox"},[s("div",{staticClass:"usercentercrollbox-top"},[s("img",{attrs:{src:e.apipath+e.userinfos.$userimg}}),e._v(" "),s("span",[e._v(e._s(e.userinfos.$usernetname))])]),e._v(" "),s("div",{staticClass:"usercenterscrollbox-content"},[s("span",[e._v("姓名："+e._s(e.userinfos.$username))]),e._v(" "),s("span",[e._v("手机："+e._s(e.userinfos.$userphone))]),e._v(" "),s("span",[e._v("性别："+e._s(e.userinfos.$usersex))]),e._v(" "),s("span",[e._v("生日："+e._s(e.userinfos.$userbirth))]),e._v(" "),s("span",[e._v("年龄："+e._s(e.userinfos.$userage))]),e._v(" "),s("span",[e._v("地址："+e._s(e.userinfos.$userprivince)+e._s(e.userinfos.$usercity)+e._s(e.userinfos.$usercounty)+e._s(e.userinfos.$useraddress))]),e._v(" "),s("span",[e._v("签名："+e._s(e.userinfos.$userothers))])]),e._v(" "),s("div",{staticClass:"editbtnbox"},[s("el-button",{attrs:{type:"primary",round:"",size:"small"},on:{click:e.edituserbtn}},[e._v("编辑信息")])],1)])])],1)]),e._v(" "),s("div",{staticClass:"edituserforms"},[s("div",{staticClass:"diatitle"},[s("button",{staticClass:"diawinclosebtn",on:{click:e.coloseeditpage}})]),e._v(" "),s("div",{staticClass:"edituserformslist"},[s("el-scrollbar",{staticClass:"page-component-scroll"},[s("div",{staticClass:"edituserformslist-box"},[s("div",{staticClass:"edituserformslist-box-list",staticStyle:{"margin-bottom":"30px"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!0,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?s("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),s("el-form",{ref:"userinfos",attrs:{model:e.userinfos,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"手机号："}},[s("el-input",{model:{value:e.userinfos.$userphone,callback:function(t){e.$set(e.userinfos,"$userphone",t)},expression:"userinfos.$userphone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"姓名："}},[s("el-input",{model:{value:e.userinfos.$username,callback:function(t){e.$set(e.userinfos,"$username",t)},expression:"userinfos.$username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别："}},[s("el-input",{model:{value:e.userinfos.$usersex,callback:function(t){e.$set(e.userinfos,"$usersex",t)},expression:"userinfos.$usersex"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"年龄："}},[s("el-input",{model:{value:e.userinfos.$userage,callback:function(t){e.$set(e.userinfos,"$userage",t)},expression:"userinfos.$userage"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"生日："}},[s("el-input",{model:{value:e.userinfos.$userbirth,callback:function(t){e.$set(e.userinfos,"$userbirth",t)},expression:"userinfos.$userbirth"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"省份："}},[s("el-input",{model:{value:e.userinfos.$userprovince,callback:function(t){e.$set(e.userinfos,"$userprovince",t)},expression:"userinfos.$userprovince"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"城市："}},[s("el-input",{model:{value:e.userinfos.$usercity,callback:function(t){e.$set(e.userinfos,"$usercity",t)},expression:"userinfos.$usercity"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"区/县："}},[s("el-input",{model:{value:e.userinfos.$usercounty,callback:function(t){e.$set(e.userinfos,"$usercounty",t)},expression:"userinfos.$usercounty"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"街道："}},[s("el-input",{model:{value:e.userinfos.$useraddress,callback:function(t){e.$set(e.userinfos,"$useraddress",t)},expression:"userinfos.$useraddress"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"签名："}},[s("el-input",{model:{value:e.userinfos.$userothers,callback:function(t){e.$set(e.userinfos,"$userothers",t)},expression:"userinfos.$userothers"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"身份证："}},[s("el-input",{model:{value:e.userinfos.$useridcard,callback:function(t){e.$set(e.userinfos,"$useridcard",t)},expression:"userinfos.$useridcard"}})],1)],1),e._v(" "),s("div",{staticClass:"edituserformslist-box-btn"},[s("el-button",{attrs:{type:"primary",round:"",size:"small"}},[e._v("保存信息")])],1)],1)])],1)])],1)},staticRenderFns:[]};var l=function(e){s("m+Cd"),s("s2dV")},c=s("VU/8")(r.a,d,!1,l,"data-v-27780284",null).exports;i.default.use(n.a);var p=new n.a({routes:[{path:"/",name:"Home",component:c}]}),g=s("zL8q"),u=s.n(g),h=(s("tvR6"),s("7t+N"),s("sfy8"),s("oPmM"),s("mtWM")),m=s.n(h);s("mw3O");i.default.prototype.$https=m.a,i.default.use(u.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:p,components:{App:a},template:"<App/>"})},TlkQ:function(e,t,s){var i=s("jLve");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("fc57c808",i,!0,{})},Zy8F:function(e,t,s){e.exports=s.p+"static/img/pcqq_bg.b956442.jpg"},jLve:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"body{margin:0}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#5c5c5c}",""])},"m+Cd":function(e,t,s){var i=s("vPKA");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("59e5286b",i,!0,{})},oPmM:function(e,t){},rmOL:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,".el-scrollbar__wrap{overflow-x:hidden}.el-scrollbar{overflow:hidden}.vipimg img{width:50px;height:50px;border:3px solid #fe0;border-radius:28px;cursor:pointer;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.verification{width:29%;height:40px;background:transparent;color:#fff;border:none;font-size:14px}.usercenterinfos{height:90%}.usercenterscrollbox{margin:20px}.usercenterscrollbox .usercentercrollbox-top{text-align:center;overflow:hidden;border-bottom:1px dashed #ccc}.usercenterscrollbox .usercentercrollbox-top img{width:80px;height:80px;border:3px solid #ccc;border-radius:43px}.usercenterscrollbox .usercentercrollbox-top span{display:block;height:40px;line-height:40px;font-size:12px;color:red}.usercenterscrollbox .usercenterscrollbox-content{padding-top:10px;overflow:hidden}.usercenterscrollbox .usercenterscrollbox-content span{display:block;text-align:left;height:30px;line-height:30px;font-size:12px}.usercenterscrollbox .editbtnbox{border-top:1px dashed #ccc;margin-top:20px;padding-top:20px}.usercenterscrollbox .editbtnbox button{width:80px}.edituserformslist{margin:20px auto;height:80%;overflow:hidden}.edituserformslist .edituserformslist-box{padding:10px}.edituserformslist .edituserformslist-box .edituserformslist-box-btn{margin-top:40px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:60px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}",""])},s2dV:function(e,t,s){var i=s("rmOL");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("79ff2fc3",i,!0,{})},sfy8:function(e,t){},tvR6:function(e,t){},vPKA:function(e,t,s){var i=s("kxFB");(e.exports=s("FZ+f")(!1)).push([e.i,".topicon[data-v-27780284]{height:50px;margin-top:10px}.topicon i[data-v-27780284]{margin-right:20px}@media only screen and (min-width:100px) and (max-width:980px){.mainbox[data-v-27780284]{width:100%;height:100%;margin:0 auto;overflow:hidden;background:transparent;border:1px solid #f0f0f0;border-radius:5px}.bigbox[data-v-27780284]{height:100%;margin-top:0}.cominfos-content-img[data-v-27780284]{width:120px;height:120px;border-radius:60px;margin:auto;border:5px solid #f0f0f0}.cominfos-content-img img[data-v-27780284]{width:120px;height:120px;border-radius:60px}.dialogwin[data-v-27780284],.dialogwinnews[data-v-27780284]{position:fixed;visibility:hidden;width:95%;height:95%;border:1px solid #f8f8f8;background:#fff;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.loginwin[data-v-27780284],.registerwin[data-v-27780284]{position:fixed;visibility:hidden;width:95%;height:95%;border:1px solid #f8f8f8;background:hsla(0,0%,42%,.99);border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.cominfoss-descritions[data-v-27780284]{border-top:1px dashed #f0f0f0;margin-top:50px}.loginregister[data-v-27780284]{width:95%;height:100%;text-align:center;margin:30px auto}.loginregtitle[data-v-27780284]{text-align:center;line-height:100%;color:#fff}.vipimg[data-v-27780284]{position:absolute;width:56px;height:56px;top:5%;right:25%;opacity:.8;cursor:pointer}.usercenterbox[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}.edituserforms[data-v-27780284],.usercenterbox[data-v-27780284]{position:fixed;visibility:hidden;width:95%;height:95%;border:1px solid #f8f8f8;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.edituserforms[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}}@media only screen and (min-width:980px) and (max-width:1440px){.mainbox[data-v-27780284]{width:70%;margin:0 auto;overflow:hidden;background:hsla(0,0%,100%,.99);border:1px solid #f0f0f0;border-radius:5px;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.cominfos-content-img[data-v-27780284]{width:200px;height:200px;border-radius:100px;margin:auto;border:5px solid #f0f0f0}.cominfos-content-img img[data-v-27780284]{width:200px;height:200px;border-radius:100px}.bigbox[data-v-27780284]{margin:0;margin-top:6%}.thebox[data-v-27780284]{background:url("+i(s("Zy8F"))+") no-repeat;height:100vh}.dialogwin[data-v-27780284],.dialogwinnews[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;background:hsla(0,0%,100%,.99);border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.loginwin[data-v-27780284],.registerwin[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;background:hsla(0,0%,42%,.99);border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.loginregister[data-v-27780284]{width:50%;height:100%;min-width:300px;text-align:center;margin:30px auto}.loginregtitle[data-v-27780284]{text-align:center;line-height:100%;color:#fff}.vipimg[data-v-27780284]{position:absolute;width:56px;height:56x;top:4%;left:27%;margin-left:-25px;margin-top:25px;cursor:pointer}.usercenterbox[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}.edituserforms[data-v-27780284],.usercenterbox[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.edituserforms[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}}@media only screen and (min-width:1440px) and (max-width:2560px){.mainbox[data-v-27780284]{width:60%;margin:6% auto 0;overflow:hidden;background:hsla(0,0%,100%,.9);border:1px solid #f0f0f0;border-radius:5px;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.cominfos-content-img[data-v-27780284]{width:200px;height:200px;border-radius:100px;margin:auto;border:5px solid #f0f0f0}.cominfos-content-img img[data-v-27780284]{width:200px;height:200px;border-radius:100px}.bigbox[data-v-27780284]{margin:0}.thebox[data-v-27780284]{background:url("+i(s("Zy8F"))+") no-repeat;height:100vh}.dialogwin[data-v-27780284],.dialogwinnews[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;background:#fff;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.loginwin[data-v-27780284],.registerwin[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;background:#6b6b6b;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.loginregister[data-v-27780284]{width:50%;height:100%;min-width:300px;text-align:center;margin:30px auto}.loginregtitle[data-v-27780284]{text-align:center;line-height:100%;color:#fff}.vipimg[data-v-27780284]{position:absolute;width:56px;height:56px;top:4%;left:27%;margin-left:-25px;margin-top:25px;cursor:pointer}.usercenterbox[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}.edituserforms[data-v-27780284],.usercenterbox[data-v-27780284]{position:fixed;visibility:hidden;width:70%;height:80%;border:1px solid #e4e4e4;border-radius:5px;position:absolute;text-align:center;left:0;right:0;top:0;bottom:0;margin:auto;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.edituserforms[data-v-27780284]{background:hsla(0,0%,100%,.99);background:url("+i(s("Zy8F"))+") fixed 50% no-repeat;background-size:cover}}.mainbox .cominfos[data-v-27780284]{background:hsla(0,0%,96%,.7);min-height:490px}.el-footer[data-v-27780284],.el-header[data-v-27780284],.el-main[data-v-27780284]{background:transparent!important}.page-component-scroll[data-v-27780284]{height:100%;overflow-x:hidden}.page-component-scroll .cominfos-content[data-v-27780284]{padding:10px}.cominfos-contents-text[data-v-27780284]{padding:10px;border-top:1px dashed #f1f1f1;border-bottom:1px dashed #f1f1f1;margin:20px;font-size:12px;text-align:left;text-indent:40px;letter-spacing:3px}.infosbtn[data-v-27780284]{padding-bottom:10px}.cominfoss-descritions[data-v-27780284]{padding:10px;border:none}.cominfoss-descriptions-list[data-v-27780284]{width:100%;height:90px}.line[data-v-27780284]{height:10px;overflow:hidden;border-top:1px dashed #f0f0f0}.inputbox[data-v-27780284]{padding:0 20px}.inputbox div[data-v-27780284]{padding-bottom:6px}.copyright[data-v-27780284]{color:#b9b9b9;font-size:12px;padding-top:20px}.item[data-v-27780284]{float:right}.el-button[data-v-27780284]{border-radius:22.5px}.cominfis-list[data-v-27780284]{border-bottom:1px dashed #ccc;margin-bottom:10px;padding:5px 0;overflow:hidden}.cominfis-list-left[data-v-27780284]{float:left;width:20%;height:50px;padding-top:5px}.cominfis-list-left img[data-v-27780284]{border-radius:25px;width:50px;height:50px}.cominfis-list-center[data-v-27780284]{float:left;padding-left:10px;width:41%}.cominfis-list-center .cominfis-list-center-bottom[data-v-27780284]{height:30px;text-align:left;font-size:12px;color:#ccc}.cominfis-list-center .cominfis-list-center-top[data-v-27780284]{height:30px;line-height:30px;text-align:left;font-size:14px;font-weight:700}.cominfis-list-right[data-v-27780284]{float:left;padding-left:10px;padding-top:15px;height:45px}.diawinshow[data-v-27780284]{position:fixed;visibility:visible}.diawinhide[data-v-27780284]{position:fixed;visibility:hidden}.diawinclosebtn[data-v-27780284]{height:12px;width:12px;-wibkit-width:12px;overflow:hidden;cursor:pointer;background:#0cff55;color:#fff;text-align:center;line-height:12px;border:none;border-radius:6px;float:right;margin-top:10px;margin-right:10px;-webkit-box-shadow:2px 2px 5px #333;box-shadow:2px 2px 5px #333}.diatitle[data-v-27780284]{height:6%;overflow:hidden}.diacontent[data-v-27780284]{overflow:hidden;height:94%}.content-descrpition[data-v-27780284]{padding:40px}.content-core[data-v-27780284]{text-indent:40px;text-align:left;font-size:14px;letter-spacing:3px;line-height:30px}.content-core img[data-v-27780284]{width:100%!important}.el-input__inner[data-v-27780284]{border-radius:22.5px!important}.titlemain[data-v-27780284]{height:40px;width:100%;line-height:40px;letter-spacing:3px;font-weight:thin}.lrtitle[data-v-27780284]{height:6%;overflow:hidden}.loginregister div[data-v-27780284]{margin-top:10px}.loginregister div .el-input[data-v-27780284]{width:80%;margin-top:10px}",""])}},["NHnr"]);
//# sourceMappingURL=app.0617fa552ae224af8336.js.map