"use strict";(self["webpackChunkphotolab"]=self["webpackChunkphotolab"]||[]).push([[535],{4596:function(e,t,s){s.r(t),s.d(t,{default:function(){return J}});var i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t("div",{attrs:{id:"content"}},[t("Log")],1)])},n=[],a=s(8271),o=s(3908),r=s(2062),l=s(6997),d=s(8867),u=s(9880),c=s(1096),h=s(7179),p=s(6072),m=s(4437),v=s(3974),f=s(4791),g=s(380),b=s(1050),x=s(4987),y=(0,x.Z)((0,f.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,g.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,b.z9)(this))}}),w=s(3422),k=s(7601),S=s(8914);const Z=(0,x.Z)(k.Z,S.Z,(0,g.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var _=Z.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(w.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,b.z9)(this,"default",{open:this.isActive}))])])))}}),C=s(1012),$=s(3176);const A=(0,x.Z)(S.Z,(0,g.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var B=A.extend().extend({name:"v-expansion-panel-header",directives:{ripple:$.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,b.z9)(this,"actions",{open:this.isActive})||[this.$createElement(C.Z,this.expandIcon)];return this.$createElement(w.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,b.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),I=s(2021),V=s(6596),P=I.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...I.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,V.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,V.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(i)}}}),D=s(6904),E=s(5251),N=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login"}},[t(c.Z,[t(P,{attrs:{mandatory:"",tile:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[t(v.Z,[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function({invalid:s}){return[t(m.Z,{attrs:{cols:"12"}},[t(y,{attrs:{value:"login"}},[t(B,[e._v("LOG IN ｜ 登入")]),t(_,[t("validation-observer",[t(D.Z,{on:{submit:function(t){return t.preventDefault(),e.onLoginSubmit.apply(null,arguments)}}},[t(v.Z,[t(m.Z,{attrs:{cols:"12"}},[t("validation-provider",{attrs:{name:"Account",rules:"required|max:20|min:4"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35",state:e.accountState,"error-messages":s,required:"","append-icon":"mdi-account",filled:"",rounded:"",label:"Account"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"Password",rules:"required|max:20|min:4"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35",state:e.passwordState,"error-messages":s,filled:"",rounded:"",label:"Password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("div",{attrs:{id:"div"}},[t(p.Z,{attrs:{color:"#000000",label:"Remember me"}}),t(h.Z,{attrs:{type:"submit",rounded:"",dark:""}},[e._v("登入")])],1)]}}],null,!0)})],1)],1)],1)],1)],1)],1)],1),t(m.Z,{attrs:{cols:"12"}},[t(y,{attrs:{value:"signup"}},[t(B,[e._v("SIGN UP ｜ 註冊")]),t(_,[t("validation-observer",[t(D.Z,{on:{submit:function(t){return t.preventDefault(),e.onSingupSubmit.apply(null,arguments)}}},[t(v.Z,[t(m.Z,{attrs:{cols:"12"}},[t("h5",[e._v("CREATE ACCOUNT ｜ 創建帳號")]),t("validation-provider",{attrs:{name:"Account",rules:"required|max:20|min:4"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35",state:e.accountState,"error-messages":s,required:"","append-icon":"mdi-account",filled:"",rounded:"",label:"Account"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"Password",rules:"required|max:20|min:4"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35",state:e.passwordState,"error-messages":s,required:"",filled:"",rounded:"",label:"Password","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("h5",[e._v("PERSONAL DATA ｜ 個人資料")])]}}],null,!0)}),t("validation-provider",{attrs:{name:"Nmae",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35","error-messages":s,label:"Name","append-icon":"mdi-account-details",filled:"",rounded:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(E.Z,{attrs:{color:"#677d35","error-messages":s,label:"E-mail",required:"","append-icon":"mdi-email",filled:"",rounded:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),t("validation-provider",{attrs:{name:"PhoneNumber",rules:"required|digits:10"},scopedSlots:e._u([{key:"default",fn:function({errors:i}){return[t(E.Z,{attrs:{color:"#677d35","error-messages":i,label:"Phone Number",counter:10,required:"","append-icon":"mdi-cellphone",filled:"",rounded:""},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),t("div",{attrs:{id:"div"}},[t("validation-provider",{attrs:{name:"checkbox",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:s}){return[t(p.Z,{attrs:{color:"#000000",type:"checkbox",value:"1",required:"",label:"Check your data"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})]}}],null,!0)}),t(h.Z,{attrs:{type:"submit",disabled:s,rounded:"",color:"#000000",dark:""}},[e._v("註冊")])],1)]}}],null,!0)})],1)],1)],1)],1)],1)],1)],1)]}}])})],1)],1)],1)],1)},O=[],q=(s(7658),s(4479)),z=s(2954);(0,z.UF)("eager"),(0,z.l7)("digits",{...q.nz,message:"{_field_} needs to be {length} digits."}),(0,z.l7)("required",{...q.C1,message:"{_field_} can not be empty"}),(0,z.l7)("max",{...q.Fp,message:"{_field_} may not be greater than {length} characters"}),(0,z.l7)("min",{...q.VV,message:"{_field_} at least {length} characters"}),(0,z.l7)("regex",{...q.Sz,message:"{_field_} must be valid"}),(0,z.l7)("email",{...q.Do,message:"{_field_} must be valid"});var L={name:"Log",data(){return{account:"",password:"",name:"",email:"",phoneNumber:"",show1:!1,featuresOpen:!0,model:""}},components:{ValidationProvider:z.d_,ValidationObserver:z._j},computed:{accountState(){return 0===this.account.length?null:this.account.length>=4&&this.account.length<=20},passwordState(){return 0===this.password.length?null:this.password.length>=4&&this.password.length<=20}},methods:{onSingupSubmit(){this.$refs.observer.validate(),this.accountState&&this.passwordState&&this.axios.post("https://gp-photolab.onrender.com/users/signup",this.$data).then((e=>{e.data.success?this.$swal({icon:"success",title:"註冊成功",showConfirmButton:!1,timer:1e3}).then((()=>{this.$router.push("/login"),this.model="login"})):this.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((e=>{this.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))},onLoginSubmit(){this.$refs.observer.validate(),this.accountState&&this.passwordState&&this.axios.post("https://gp-photolab.onrender.com/users/login",this.$data).then((e=>{e.data.success?(this.$store.commit("login",e.data.result),this.$swal({icon:"success",title:"登入成功",showConfirmButton:!1,timer:1e3}).then((()=>{this.$router.push("/home")}))):this.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((e=>{this.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))}}},R=L,M=s(1001),j=(0,M.Z)(R,N,O,!1,null,null,null),T=j.exports,F={name:"Login",components:{Menu:a.Z,ResBtn:o.Z,Word:r.Z,Footer:l.Z,NevBtn:d.Z,TopBtn:u.Z,Log:T}},H=F,K=(0,M.Z)(H,i,n,!1,null,null,null),J=K.exports},6072:function(e,t,s){s.d(t,{Z:function(){return o}});s(7393);var i=s(1012),n=s(3316),a=s(911),o=a.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},6904:function(e,t,s){s(7658);var i=s(4987),n=s(4609),a=s(380);t.Z=(0,i.Z)(n.Z,(0,a.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},4437:function(e,t,s){s(7658),s(1884);var i=s(144),n=s(2653),a=s(1050);const o=["sm","md","lg","xl"],r=(()=>o.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),l=(()=>o.reduce(((e,t)=>(e["offset"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>o.reduce(((e,t)=>(e["order"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(d)};function c(e,t,s){let i=e;if(null!=s&&!1!==s){if(t){const s=t.replace(e,"");i+=`-${s}`}return"col"!==e||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const h=new Map;t.Z=i["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:s,children:i,parent:a}){let o="";for(const n in t)o+=String(t[n]);let r=h.get(o);if(!r){let e;for(e in r=[],u)u[e].forEach((s=>{const i=t[s],n=c(e,s,i);n&&r.push(n)}));const s=r.some((e=>e.startsWith("col-")));r.push({col:!s||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(o,r)}return e(t.tag,(0,n.ZP)(s,{class:r}),i)}})},7601:function(e,t,s){var i=s(6596),n=s(144);t.Z=n["default"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},1734:function(e,t,s){s(7658);var i=s(3176),n=s(144);t.Z=n["default"].extend({name:"rippleable",directives:{ripple:i.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},911:function(e,t,s){s.d(t,{X:function(){return r}});s(7658);var i=s(3316),n=s(1734),a=s(564),o=s(4987);function r(e){e.preventDefault()}t.Z=(0,o.Z)(i.Z,n.Z,a.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=i.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:r},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},7393:function(){}}]);
//# sourceMappingURL=login.4d1e733c.js.map