(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"T/Yq":function(e,l,n){"use strict";n.r(l);var o=n("CcnG"),t=function(){return function(){}}(),i=n("pMnS"),u=n("R/X1"),r=n("3/HP"),a=n("FO+L"),s=n("nhM1"),c=n("BARL"),p=function(){function e(){}return e.prototype.getDataConf=function(){return[{prop:"type",name:"Permit Type"},{prop:"status",name:"Status"},{prop:"regDate",name:"Registered Date"},{prop:"surname",name:"Surname"},{prop:"name",name:"Given Name"},{prop:"passport",name:"Passport Number"},{prop:"expiry",name:"Passport Expiry"},{prop:"reference",name:"Reference No"}]},e.prototype.getAll=function(){return[{id:0,type:"Business Visa",status:"Approved",regDate:"04-Feb-2020",surname:"Joyce",name:"Watson",passport:"HN14643209",expiry:"31-Oct-2026",reference:"51603424998"},{id:1,type:"Visiter Visa",status:"Awaiting Payment",regDate:"23-Feb-2020",surname:"Joyce",name:"Watson",passport:"HN14643209",expiry:"31-Oct-2026",reference:"51603424998"},{id:2,type:"Restricted Employment Visa",status:"Approved",regDate:"25-Feb-2020",surname:"Joyce",name:"Watson",passport:"HN14643209",expiry:"31-Oct-2026",reference:"51603424998"}]},e.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new e},token:e,providedIn:"root"}),e}(),d=function(){function e(e){this.service=e,this.rows=[],this.columns=[]}return e.prototype.ngOnInit=function(){this.columns=this.service.getDataConf(),this.rows=this.service.getAll()},e}(),m=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,13,"div",[["class","page-layout overflow-hidden pb-8"]],null,null,null,null,null)),(e()(),o["\u0275eld"](1,0,null,null,0,"div",[["class","header-bg blue"]],null,null,null,null,null)),(e()(),o["\u0275eld"](2,0,null,null,11,"div",[["class","content"]],null,null,null,null,null)),(e()(),o["\u0275eld"](3,0,null,null,2,"div",[["class","content-header p-24"],["fxLayout","row wrap"],["fxLayoutAlign","start center"]],null,null,null,null,null)),(e()(),o["\u0275eld"](4,0,null,null,1,"h2",[["class","text-white m-0"]],null,null,null,null,null)),(e()(),o["\u0275ted"](-1,null,["Application List"])),(e()(),o["\u0275eld"](6,0,null,null,7,"div",[["class","content-body"]],null,null,null,null,null)),(e()(),o["\u0275eld"](7,0,null,null,6,"div",[["class","mat-box-shadow margin-333"]],null,null,null,null,null)),(e()(),o["\u0275eld"](8,0,null,null,5,"ngx-datatable",[["class","material bg-white ngx-datatable"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"virtualized",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[["window","resize"]],function(e,l,n){var t=!0;return"window:resize"===l&&(t=!1!==o["\u0275nov"](e,9).onWindowResize()&&t),t},u.b,u.a)),o["\u0275did"](9,5750784,null,4,r.DatatableComponent,[[1,a.ScrollbarHelper],[1,s.DimensionsHelper],o.ChangeDetectorRef,o.ElementRef,o.KeyValueDiffers,c.ColumnChangesService],{rows:[0,"rows"],columns:[1,"columns"],scrollbarH:[2,"scrollbarH"],rowHeight:[3,"rowHeight"],columnMode:[4,"columnMode"],headerHeight:[5,"headerHeight"],footerHeight:[6,"footerHeight"],limit:[7,"limit"]},null),o["\u0275qud"](603979776,1,{columnTemplates:1}),o["\u0275qud"](603979776,2,{rowDetail:0}),o["\u0275qud"](603979776,3,{groupHeader:0}),o["\u0275qud"](603979776,4,{footer:0})],function(e,l){var n=l.component;e(l,9,0,n.rows,n.columns,!0,50,"force",50,50,8)},function(e,l){e(l,8,1,[o["\u0275nov"](l,9).isFixedHeader,o["\u0275nov"](l,9).isFixedRow,o["\u0275nov"](l,9).isVertScroll,o["\u0275nov"](l,9).isVirtualized,o["\u0275nov"](l,9).isHorScroll,o["\u0275nov"](l,9).isSelectable,o["\u0275nov"](l,9).isCheckboxSelection,o["\u0275nov"](l,9).isCellSelection,o["\u0275nov"](l,9).isSingleSelection,o["\u0275nov"](l,9).isMultiSelection,o["\u0275nov"](l,9).isMultiClickSelection])})}function g(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"app-application-list",[],null,null,null,f,m)),o["\u0275did"](1,114688,null,0,d,[p],null,null)],function(e,l){e(l,1,0)},null)}var v=o["\u0275ccf"]("app-application-list",d,g,{},{},[]),h=n("Ip0R"),y=n("F8xH"),b=n("ZYCi");n.d(l,"ApplicationListModuleNgFactory",function(){return w});var w=o["\u0275cmf"](t,[],function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[o.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,a.ScrollbarHelper,a.ScrollbarHelper,[h.DOCUMENT]),o["\u0275mpd"](4608,s.DimensionsHelper,s.DimensionsHelper,[]),o["\u0275mpd"](4608,c.ColumnChangesService,c.ColumnChangesService,[]),o["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),o["\u0275mpd"](1073742336,y.NgxDatatableModule,y.NgxDatatableModule,[]),o["\u0275mpd"](1073742336,b.t,b.t,[[2,b.y],[2,b.p]]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,b.j,function(){return[[{path:"",component:d}]]},[])])})}}]);