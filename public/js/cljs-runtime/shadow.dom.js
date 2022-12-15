goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34914 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34914(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34919 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34919(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33506 = coll;
var G__33507 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33506,G__33507) : shadow.dom.lazy_native_coll_seq.call(null,G__33506,G__33507));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33616 = arguments.length;
switch (G__33616) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33637 = arguments.length;
switch (G__33637) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33651 = arguments.length;
switch (G__33651) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33674 = arguments.length;
switch (G__33674) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33706 = arguments.length;
switch (G__33706) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33735 = arguments.length;
switch (G__33735) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33842){if((e33842 instanceof Object)){
var e = e33842;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33842;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33862 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33863 = null;
var count__33864 = (0);
var i__33865 = (0);
while(true){
if((i__33865 < count__33864)){
var el = chunk__33863.cljs$core$IIndexed$_nth$arity$2(null,i__33865);
var handler_34929__$1 = ((function (seq__33862,chunk__33863,count__33864,i__33865,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33862,chunk__33863,count__33864,i__33865,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34929__$1);


var G__34930 = seq__33862;
var G__34931 = chunk__33863;
var G__34932 = count__33864;
var G__34933 = (i__33865 + (1));
seq__33862 = G__34930;
chunk__33863 = G__34931;
count__33864 = G__34932;
i__33865 = G__34933;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33862);
if(temp__5804__auto__){
var seq__33862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33862__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33862__$1);
var G__34934 = cljs.core.chunk_rest(seq__33862__$1);
var G__34935 = c__5568__auto__;
var G__34936 = cljs.core.count(c__5568__auto__);
var G__34937 = (0);
seq__33862 = G__34934;
chunk__33863 = G__34935;
count__33864 = G__34936;
i__33865 = G__34937;
continue;
} else {
var el = cljs.core.first(seq__33862__$1);
var handler_34938__$1 = ((function (seq__33862,chunk__33863,count__33864,i__33865,el,seq__33862__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33862,chunk__33863,count__33864,i__33865,el,seq__33862__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34938__$1);


var G__34939 = cljs.core.next(seq__33862__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__33862 = G__34939;
chunk__33863 = G__34940;
count__33864 = G__34941;
i__33865 = G__34942;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33896 = arguments.length;
switch (G__33896) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33907 = cljs.core.seq(events);
var chunk__33908 = null;
var count__33909 = (0);
var i__33910 = (0);
while(true){
if((i__33910 < count__33909)){
var vec__33928 = chunk__33908.cljs$core$IIndexed$_nth$arity$2(null,i__33910);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33928,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34947 = seq__33907;
var G__34948 = chunk__33908;
var G__34949 = count__33909;
var G__34950 = (i__33910 + (1));
seq__33907 = G__34947;
chunk__33908 = G__34948;
count__33909 = G__34949;
i__33910 = G__34950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33907);
if(temp__5804__auto__){
var seq__33907__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33907__$1);
var G__34951 = cljs.core.chunk_rest(seq__33907__$1);
var G__34952 = c__5568__auto__;
var G__34953 = cljs.core.count(c__5568__auto__);
var G__34954 = (0);
seq__33907 = G__34951;
chunk__33908 = G__34952;
count__33909 = G__34953;
i__33910 = G__34954;
continue;
} else {
var vec__33940 = cljs.core.first(seq__33907__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34955 = cljs.core.next(seq__33907__$1);
var G__34956 = null;
var G__34957 = (0);
var G__34958 = (0);
seq__33907 = G__34955;
chunk__33908 = G__34956;
count__33909 = G__34957;
i__33910 = G__34958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33949 = cljs.core.seq(styles);
var chunk__33950 = null;
var count__33951 = (0);
var i__33952 = (0);
while(true){
if((i__33952 < count__33951)){
var vec__33978 = chunk__33950.cljs$core$IIndexed$_nth$arity$2(null,i__33952);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34959 = seq__33949;
var G__34960 = chunk__33950;
var G__34961 = count__33951;
var G__34962 = (i__33952 + (1));
seq__33949 = G__34959;
chunk__33950 = G__34960;
count__33951 = G__34961;
i__33952 = G__34962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33949);
if(temp__5804__auto__){
var seq__33949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33949__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33949__$1);
var G__34963 = cljs.core.chunk_rest(seq__33949__$1);
var G__34964 = c__5568__auto__;
var G__34965 = cljs.core.count(c__5568__auto__);
var G__34966 = (0);
seq__33949 = G__34963;
chunk__33950 = G__34964;
count__33951 = G__34965;
i__33952 = G__34966;
continue;
} else {
var vec__33986 = cljs.core.first(seq__33949__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34967 = cljs.core.next(seq__33949__$1);
var G__34968 = null;
var G__34969 = (0);
var G__34970 = (0);
seq__33949 = G__34967;
chunk__33950 = G__34968;
count__33951 = G__34969;
i__33952 = G__34970;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33997_34972 = key;
var G__33997_34973__$1 = (((G__33997_34972 instanceof cljs.core.Keyword))?G__33997_34972.fqn:null);
switch (G__33997_34973__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34980 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_34980,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_34980,"aria-");
}
})())){
el.setAttribute(ks_34980,value);
} else {
(el[ks_34980] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34044){
var map__34047 = p__34044;
var map__34047__$1 = cljs.core.__destructure_map(map__34047);
var props = map__34047__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34047__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34051 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34055 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34055,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34055;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34059 = arguments.length;
switch (G__34059) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34076){
var vec__34077 = p__34076;
var seq__34078 = cljs.core.seq(vec__34077);
var first__34079 = cljs.core.first(seq__34078);
var seq__34078__$1 = cljs.core.next(seq__34078);
var nn = first__34079;
var first__34079__$1 = cljs.core.first(seq__34078__$1);
var seq__34078__$2 = cljs.core.next(seq__34078__$1);
var np = first__34079__$1;
var nc = seq__34078__$2;
var node = vec__34077;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34083 = nn;
var G__34084 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34083,G__34084) : create_fn.call(null,G__34083,G__34084));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34085 = nn;
var G__34086 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34085,G__34086) : create_fn.call(null,G__34085,G__34086));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34087 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087,(1),null);
var seq__34090_34986 = cljs.core.seq(node_children);
var chunk__34091_34987 = null;
var count__34092_34988 = (0);
var i__34093_34989 = (0);
while(true){
if((i__34093_34989 < count__34092_34988)){
var child_struct_34990 = chunk__34091_34987.cljs$core$IIndexed$_nth$arity$2(null,i__34093_34989);
var children_34991 = shadow.dom.dom_node(child_struct_34990);
if(cljs.core.seq_QMARK_(children_34991)){
var seq__34142_34992 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34991));
var chunk__34144_34993 = null;
var count__34145_34994 = (0);
var i__34146_34995 = (0);
while(true){
if((i__34146_34995 < count__34145_34994)){
var child_34996 = chunk__34144_34993.cljs$core$IIndexed$_nth$arity$2(null,i__34146_34995);
if(cljs.core.truth_(child_34996)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34996);


var G__34998 = seq__34142_34992;
var G__34999 = chunk__34144_34993;
var G__35000 = count__34145_34994;
var G__35001 = (i__34146_34995 + (1));
seq__34142_34992 = G__34998;
chunk__34144_34993 = G__34999;
count__34145_34994 = G__35000;
i__34146_34995 = G__35001;
continue;
} else {
var G__35002 = seq__34142_34992;
var G__35003 = chunk__34144_34993;
var G__35004 = count__34145_34994;
var G__35005 = (i__34146_34995 + (1));
seq__34142_34992 = G__35002;
chunk__34144_34993 = G__35003;
count__34145_34994 = G__35004;
i__34146_34995 = G__35005;
continue;
}
} else {
var temp__5804__auto___35007 = cljs.core.seq(seq__34142_34992);
if(temp__5804__auto___35007){
var seq__34142_35008__$1 = temp__5804__auto___35007;
if(cljs.core.chunked_seq_QMARK_(seq__34142_35008__$1)){
var c__5568__auto___35009 = cljs.core.chunk_first(seq__34142_35008__$1);
var G__35010 = cljs.core.chunk_rest(seq__34142_35008__$1);
var G__35011 = c__5568__auto___35009;
var G__35012 = cljs.core.count(c__5568__auto___35009);
var G__35013 = (0);
seq__34142_34992 = G__35010;
chunk__34144_34993 = G__35011;
count__34145_34994 = G__35012;
i__34146_34995 = G__35013;
continue;
} else {
var child_35014 = cljs.core.first(seq__34142_35008__$1);
if(cljs.core.truth_(child_35014)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35014);


var G__35015 = cljs.core.next(seq__34142_35008__$1);
var G__35016 = null;
var G__35017 = (0);
var G__35018 = (0);
seq__34142_34992 = G__35015;
chunk__34144_34993 = G__35016;
count__34145_34994 = G__35017;
i__34146_34995 = G__35018;
continue;
} else {
var G__35019 = cljs.core.next(seq__34142_35008__$1);
var G__35020 = null;
var G__35021 = (0);
var G__35022 = (0);
seq__34142_34992 = G__35019;
chunk__34144_34993 = G__35020;
count__34145_34994 = G__35021;
i__34146_34995 = G__35022;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34991);
}


var G__35023 = seq__34090_34986;
var G__35025 = chunk__34091_34987;
var G__35026 = count__34092_34988;
var G__35027 = (i__34093_34989 + (1));
seq__34090_34986 = G__35023;
chunk__34091_34987 = G__35025;
count__34092_34988 = G__35026;
i__34093_34989 = G__35027;
continue;
} else {
var temp__5804__auto___35028 = cljs.core.seq(seq__34090_34986);
if(temp__5804__auto___35028){
var seq__34090_35029__$1 = temp__5804__auto___35028;
if(cljs.core.chunked_seq_QMARK_(seq__34090_35029__$1)){
var c__5568__auto___35030 = cljs.core.chunk_first(seq__34090_35029__$1);
var G__35032 = cljs.core.chunk_rest(seq__34090_35029__$1);
var G__35033 = c__5568__auto___35030;
var G__35034 = cljs.core.count(c__5568__auto___35030);
var G__35035 = (0);
seq__34090_34986 = G__35032;
chunk__34091_34987 = G__35033;
count__34092_34988 = G__35034;
i__34093_34989 = G__35035;
continue;
} else {
var child_struct_35038 = cljs.core.first(seq__34090_35029__$1);
var children_35039 = shadow.dom.dom_node(child_struct_35038);
if(cljs.core.seq_QMARK_(children_35039)){
var seq__34159_35040 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35039));
var chunk__34161_35041 = null;
var count__34162_35042 = (0);
var i__34163_35043 = (0);
while(true){
if((i__34163_35043 < count__34162_35042)){
var child_35044 = chunk__34161_35041.cljs$core$IIndexed$_nth$arity$2(null,i__34163_35043);
if(cljs.core.truth_(child_35044)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35044);


var G__35047 = seq__34159_35040;
var G__35048 = chunk__34161_35041;
var G__35049 = count__34162_35042;
var G__35050 = (i__34163_35043 + (1));
seq__34159_35040 = G__35047;
chunk__34161_35041 = G__35048;
count__34162_35042 = G__35049;
i__34163_35043 = G__35050;
continue;
} else {
var G__35051 = seq__34159_35040;
var G__35052 = chunk__34161_35041;
var G__35053 = count__34162_35042;
var G__35054 = (i__34163_35043 + (1));
seq__34159_35040 = G__35051;
chunk__34161_35041 = G__35052;
count__34162_35042 = G__35053;
i__34163_35043 = G__35054;
continue;
}
} else {
var temp__5804__auto___35055__$1 = cljs.core.seq(seq__34159_35040);
if(temp__5804__auto___35055__$1){
var seq__34159_35056__$1 = temp__5804__auto___35055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34159_35056__$1)){
var c__5568__auto___35057 = cljs.core.chunk_first(seq__34159_35056__$1);
var G__35058 = cljs.core.chunk_rest(seq__34159_35056__$1);
var G__35059 = c__5568__auto___35057;
var G__35060 = cljs.core.count(c__5568__auto___35057);
var G__35061 = (0);
seq__34159_35040 = G__35058;
chunk__34161_35041 = G__35059;
count__34162_35042 = G__35060;
i__34163_35043 = G__35061;
continue;
} else {
var child_35062 = cljs.core.first(seq__34159_35056__$1);
if(cljs.core.truth_(child_35062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35062);


var G__35063 = cljs.core.next(seq__34159_35056__$1);
var G__35064 = null;
var G__35065 = (0);
var G__35066 = (0);
seq__34159_35040 = G__35063;
chunk__34161_35041 = G__35064;
count__34162_35042 = G__35065;
i__34163_35043 = G__35066;
continue;
} else {
var G__35067 = cljs.core.next(seq__34159_35056__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__34159_35040 = G__35067;
chunk__34161_35041 = G__35068;
count__34162_35042 = G__35069;
i__34163_35043 = G__35070;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35039);
}


var G__35071 = cljs.core.next(seq__34090_35029__$1);
var G__35072 = null;
var G__35073 = (0);
var G__35074 = (0);
seq__34090_34986 = G__35071;
chunk__34091_34987 = G__35072;
count__34092_34988 = G__35073;
i__34093_34989 = G__35074;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34196 = cljs.core.seq(node);
var chunk__34197 = null;
var count__34198 = (0);
var i__34199 = (0);
while(true){
if((i__34199 < count__34198)){
var n = chunk__34197.cljs$core$IIndexed$_nth$arity$2(null,i__34199);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35077 = seq__34196;
var G__35078 = chunk__34197;
var G__35079 = count__34198;
var G__35080 = (i__34199 + (1));
seq__34196 = G__35077;
chunk__34197 = G__35078;
count__34198 = G__35079;
i__34199 = G__35080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34196);
if(temp__5804__auto__){
var seq__34196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34196__$1);
var G__35081 = cljs.core.chunk_rest(seq__34196__$1);
var G__35082 = c__5568__auto__;
var G__35083 = cljs.core.count(c__5568__auto__);
var G__35084 = (0);
seq__34196 = G__35081;
chunk__34197 = G__35082;
count__34198 = G__35083;
i__34199 = G__35084;
continue;
} else {
var n = cljs.core.first(seq__34196__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35085 = cljs.core.next(seq__34196__$1);
var G__35086 = null;
var G__35087 = (0);
var G__35088 = (0);
seq__34196 = G__35085;
chunk__34197 = G__35086;
count__34198 = G__35087;
i__34199 = G__35088;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34204 = arguments.length;
switch (G__34204) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34213 = arguments.length;
switch (G__34213) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34235 = arguments.length;
switch (G__34235) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35099 = arguments.length;
var i__5770__auto___35100 = (0);
while(true){
if((i__5770__auto___35100 < len__5769__auto___35099)){
args__5775__auto__.push((arguments[i__5770__auto___35100]));

var G__35103 = (i__5770__auto___35100 + (1));
i__5770__auto___35100 = G__35103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34264_35104 = cljs.core.seq(nodes);
var chunk__34265_35105 = null;
var count__34266_35106 = (0);
var i__34267_35107 = (0);
while(true){
if((i__34267_35107 < count__34266_35106)){
var node_35108 = chunk__34265_35105.cljs$core$IIndexed$_nth$arity$2(null,i__34267_35107);
fragment.appendChild(shadow.dom._to_dom(node_35108));


var G__35109 = seq__34264_35104;
var G__35110 = chunk__34265_35105;
var G__35111 = count__34266_35106;
var G__35112 = (i__34267_35107 + (1));
seq__34264_35104 = G__35109;
chunk__34265_35105 = G__35110;
count__34266_35106 = G__35111;
i__34267_35107 = G__35112;
continue;
} else {
var temp__5804__auto___35113 = cljs.core.seq(seq__34264_35104);
if(temp__5804__auto___35113){
var seq__34264_35114__$1 = temp__5804__auto___35113;
if(cljs.core.chunked_seq_QMARK_(seq__34264_35114__$1)){
var c__5568__auto___35116 = cljs.core.chunk_first(seq__34264_35114__$1);
var G__35117 = cljs.core.chunk_rest(seq__34264_35114__$1);
var G__35118 = c__5568__auto___35116;
var G__35119 = cljs.core.count(c__5568__auto___35116);
var G__35120 = (0);
seq__34264_35104 = G__35117;
chunk__34265_35105 = G__35118;
count__34266_35106 = G__35119;
i__34267_35107 = G__35120;
continue;
} else {
var node_35121 = cljs.core.first(seq__34264_35114__$1);
fragment.appendChild(shadow.dom._to_dom(node_35121));


var G__35122 = cljs.core.next(seq__34264_35114__$1);
var G__35123 = null;
var G__35124 = (0);
var G__35125 = (0);
seq__34264_35104 = G__35122;
chunk__34265_35105 = G__35123;
count__34266_35106 = G__35124;
i__34267_35107 = G__35125;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34260){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34260));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34283_35126 = cljs.core.seq(scripts);
var chunk__34284_35127 = null;
var count__34285_35128 = (0);
var i__34286_35129 = (0);
while(true){
if((i__34286_35129 < count__34285_35128)){
var vec__34299_35130 = chunk__34284_35127.cljs$core$IIndexed$_nth$arity$2(null,i__34286_35129);
var script_tag_35131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34299_35130,(0),null);
var script_body_35132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34299_35130,(1),null);
eval(script_body_35132);


var G__35134 = seq__34283_35126;
var G__35135 = chunk__34284_35127;
var G__35136 = count__34285_35128;
var G__35137 = (i__34286_35129 + (1));
seq__34283_35126 = G__35134;
chunk__34284_35127 = G__35135;
count__34285_35128 = G__35136;
i__34286_35129 = G__35137;
continue;
} else {
var temp__5804__auto___35138 = cljs.core.seq(seq__34283_35126);
if(temp__5804__auto___35138){
var seq__34283_35139__$1 = temp__5804__auto___35138;
if(cljs.core.chunked_seq_QMARK_(seq__34283_35139__$1)){
var c__5568__auto___35140 = cljs.core.chunk_first(seq__34283_35139__$1);
var G__35141 = cljs.core.chunk_rest(seq__34283_35139__$1);
var G__35142 = c__5568__auto___35140;
var G__35143 = cljs.core.count(c__5568__auto___35140);
var G__35144 = (0);
seq__34283_35126 = G__35141;
chunk__34284_35127 = G__35142;
count__34285_35128 = G__35143;
i__34286_35129 = G__35144;
continue;
} else {
var vec__34302_35146 = cljs.core.first(seq__34283_35139__$1);
var script_tag_35147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302_35146,(0),null);
var script_body_35148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302_35146,(1),null);
eval(script_body_35148);


var G__35149 = cljs.core.next(seq__34283_35139__$1);
var G__35150 = null;
var G__35151 = (0);
var G__35152 = (0);
seq__34283_35126 = G__35149;
chunk__34284_35127 = G__35150;
count__34285_35128 = G__35151;
i__34286_35129 = G__35152;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34305){
var vec__34306 = p__34305;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34306,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34306,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34313 = arguments.length;
switch (G__34313) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34329 = cljs.core.seq(style_keys);
var chunk__34330 = null;
var count__34331 = (0);
var i__34332 = (0);
while(true){
if((i__34332 < count__34331)){
var it = chunk__34330.cljs$core$IIndexed$_nth$arity$2(null,i__34332);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35161 = seq__34329;
var G__35162 = chunk__34330;
var G__35163 = count__34331;
var G__35164 = (i__34332 + (1));
seq__34329 = G__35161;
chunk__34330 = G__35162;
count__34331 = G__35163;
i__34332 = G__35164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34329);
if(temp__5804__auto__){
var seq__34329__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34329__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34329__$1);
var G__35166 = cljs.core.chunk_rest(seq__34329__$1);
var G__35167 = c__5568__auto__;
var G__35168 = cljs.core.count(c__5568__auto__);
var G__35169 = (0);
seq__34329 = G__35166;
chunk__34330 = G__35167;
count__34331 = G__35168;
i__34332 = G__35169;
continue;
} else {
var it = cljs.core.first(seq__34329__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35170 = cljs.core.next(seq__34329__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__34329 = G__35170;
chunk__34330 = G__35171;
count__34331 = G__35172;
i__34332 = G__35173;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34350,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34365 = k34350;
var G__34365__$1 = (((G__34365 instanceof cljs.core.Keyword))?G__34365.fqn:null);
switch (G__34365__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34350,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34369){
var vec__34370 = p__34369;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34370,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34370,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34349){
var self__ = this;
var G__34349__$1 = this;
return (new cljs.core.RecordIter((0),G__34349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34352,other34353){
var self__ = this;
var this34352__$1 = this;
return (((!((other34353 == null)))) && ((((this34352__$1.constructor === other34353.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34352__$1.x,other34353.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34352__$1.y,other34353.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34352__$1.__extmap,other34353.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34350){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34406 = k34350;
var G__34406__$1 = (((G__34406 instanceof cljs.core.Keyword))?G__34406.fqn:null);
switch (G__34406__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34350);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34349){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34410 = cljs.core.keyword_identical_QMARK_;
var expr__34411 = k__5352__auto__;
if(cljs.core.truth_((pred__34410.cljs$core$IFn$_invoke$arity$2 ? pred__34410.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34411) : pred__34410.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34411)))){
return (new shadow.dom.Coordinate(G__34349,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34410.cljs$core$IFn$_invoke$arity$2 ? pred__34410.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34411) : pred__34410.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34411)))){
return (new shadow.dom.Coordinate(self__.x,G__34349,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34349),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34349){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34349,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34356){
var extmap__5385__auto__ = (function (){var G__34446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34356,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34356)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34446);
} else {
return G__34446;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34356),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34356),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34469,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34488 = k34469;
var G__34488__$1 = (((G__34488 instanceof cljs.core.Keyword))?G__34488.fqn:null);
switch (G__34488__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34469,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34491){
var vec__34492 = p__34491;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34492,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34468){
var self__ = this;
var G__34468__$1 = this;
return (new cljs.core.RecordIter((0),G__34468__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34470,other34471){
var self__ = this;
var this34470__$1 = this;
return (((!((other34471 == null)))) && ((((this34470__$1.constructor === other34471.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34470__$1.w,other34471.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34470__$1.h,other34471.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34470__$1.__extmap,other34471.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34469){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34586 = k34469;
var G__34586__$1 = (((G__34586 instanceof cljs.core.Keyword))?G__34586.fqn:null);
switch (G__34586__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34469);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34468){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34594 = cljs.core.keyword_identical_QMARK_;
var expr__34595 = k__5352__auto__;
if(cljs.core.truth_((pred__34594.cljs$core$IFn$_invoke$arity$2 ? pred__34594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34595) : pred__34594.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34595)))){
return (new shadow.dom.Size(G__34468,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34594.cljs$core$IFn$_invoke$arity$2 ? pred__34594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34595) : pred__34594.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34595)))){
return (new shadow.dom.Size(self__.w,G__34468,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34468),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34468){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34468,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34475){
var extmap__5385__auto__ = (function (){var G__34613 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34475,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34475)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34613);
} else {
return G__34613;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34475),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34475),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__35205 = (i + (1));
var G__35206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35205;
ret = G__35206;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34643){
var vec__34644 = p__34643;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34657 = arguments.length;
switch (G__34657) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35213 = ps;
var G__35214 = (i + (1));
el__$1 = G__35213;
i = G__35214;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34769 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34769,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34769,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34769,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34772_35226 = cljs.core.seq(props);
var chunk__34773_35227 = null;
var count__34774_35228 = (0);
var i__34775_35229 = (0);
while(true){
if((i__34775_35229 < count__34774_35228)){
var vec__34785_35233 = chunk__34773_35227.cljs$core$IIndexed$_nth$arity$2(null,i__34775_35229);
var k_35234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35233,(0),null);
var v_35235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_35233,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35234);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35234),v_35235);


var G__35237 = seq__34772_35226;
var G__35238 = chunk__34773_35227;
var G__35239 = count__34774_35228;
var G__35240 = (i__34775_35229 + (1));
seq__34772_35226 = G__35237;
chunk__34773_35227 = G__35238;
count__34774_35228 = G__35239;
i__34775_35229 = G__35240;
continue;
} else {
var temp__5804__auto___35241 = cljs.core.seq(seq__34772_35226);
if(temp__5804__auto___35241){
var seq__34772_35242__$1 = temp__5804__auto___35241;
if(cljs.core.chunked_seq_QMARK_(seq__34772_35242__$1)){
var c__5568__auto___35243 = cljs.core.chunk_first(seq__34772_35242__$1);
var G__35244 = cljs.core.chunk_rest(seq__34772_35242__$1);
var G__35245 = c__5568__auto___35243;
var G__35246 = cljs.core.count(c__5568__auto___35243);
var G__35247 = (0);
seq__34772_35226 = G__35244;
chunk__34773_35227 = G__35245;
count__34774_35228 = G__35246;
i__34775_35229 = G__35247;
continue;
} else {
var vec__34789_35248 = cljs.core.first(seq__34772_35242__$1);
var k_35249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35248,(0),null);
var v_35250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35248,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35249);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35249),v_35250);


var G__35251 = cljs.core.next(seq__34772_35242__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__34772_35226 = G__35251;
chunk__34773_35227 = G__35252;
count__34774_35228 = G__35253;
i__34775_35229 = G__35254;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34807 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(1),null);
var seq__34811_35259 = cljs.core.seq(node_children);
var chunk__34813_35260 = null;
var count__34814_35261 = (0);
var i__34815_35262 = (0);
while(true){
if((i__34815_35262 < count__34814_35261)){
var child_struct_35265 = chunk__34813_35260.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35262);
if((!((child_struct_35265 == null)))){
if(typeof child_struct_35265 === 'string'){
var text_35266 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35266),child_struct_35265].join(''));
} else {
var children_35267 = shadow.dom.svg_node(child_struct_35265);
if(cljs.core.seq_QMARK_(children_35267)){
var seq__34842_35268 = cljs.core.seq(children_35267);
var chunk__34844_35269 = null;
var count__34845_35270 = (0);
var i__34846_35271 = (0);
while(true){
if((i__34846_35271 < count__34845_35270)){
var child_35272 = chunk__34844_35269.cljs$core$IIndexed$_nth$arity$2(null,i__34846_35271);
if(cljs.core.truth_(child_35272)){
node.appendChild(child_35272);


var G__35274 = seq__34842_35268;
var G__35275 = chunk__34844_35269;
var G__35276 = count__34845_35270;
var G__35277 = (i__34846_35271 + (1));
seq__34842_35268 = G__35274;
chunk__34844_35269 = G__35275;
count__34845_35270 = G__35276;
i__34846_35271 = G__35277;
continue;
} else {
var G__35279 = seq__34842_35268;
var G__35280 = chunk__34844_35269;
var G__35281 = count__34845_35270;
var G__35282 = (i__34846_35271 + (1));
seq__34842_35268 = G__35279;
chunk__34844_35269 = G__35280;
count__34845_35270 = G__35281;
i__34846_35271 = G__35282;
continue;
}
} else {
var temp__5804__auto___35283 = cljs.core.seq(seq__34842_35268);
if(temp__5804__auto___35283){
var seq__34842_35284__$1 = temp__5804__auto___35283;
if(cljs.core.chunked_seq_QMARK_(seq__34842_35284__$1)){
var c__5568__auto___35285 = cljs.core.chunk_first(seq__34842_35284__$1);
var G__35290 = cljs.core.chunk_rest(seq__34842_35284__$1);
var G__35291 = c__5568__auto___35285;
var G__35292 = cljs.core.count(c__5568__auto___35285);
var G__35293 = (0);
seq__34842_35268 = G__35290;
chunk__34844_35269 = G__35291;
count__34845_35270 = G__35292;
i__34846_35271 = G__35293;
continue;
} else {
var child_35295 = cljs.core.first(seq__34842_35284__$1);
if(cljs.core.truth_(child_35295)){
node.appendChild(child_35295);


var G__35299 = cljs.core.next(seq__34842_35284__$1);
var G__35300 = null;
var G__35301 = (0);
var G__35302 = (0);
seq__34842_35268 = G__35299;
chunk__34844_35269 = G__35300;
count__34845_35270 = G__35301;
i__34846_35271 = G__35302;
continue;
} else {
var G__35303 = cljs.core.next(seq__34842_35284__$1);
var G__35304 = null;
var G__35305 = (0);
var G__35306 = (0);
seq__34842_35268 = G__35303;
chunk__34844_35269 = G__35304;
count__34845_35270 = G__35305;
i__34846_35271 = G__35306;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35267);
}
}


var G__35307 = seq__34811_35259;
var G__35308 = chunk__34813_35260;
var G__35309 = count__34814_35261;
var G__35310 = (i__34815_35262 + (1));
seq__34811_35259 = G__35307;
chunk__34813_35260 = G__35308;
count__34814_35261 = G__35309;
i__34815_35262 = G__35310;
continue;
} else {
var G__35311 = seq__34811_35259;
var G__35312 = chunk__34813_35260;
var G__35313 = count__34814_35261;
var G__35314 = (i__34815_35262 + (1));
seq__34811_35259 = G__35311;
chunk__34813_35260 = G__35312;
count__34814_35261 = G__35313;
i__34815_35262 = G__35314;
continue;
}
} else {
var temp__5804__auto___35315 = cljs.core.seq(seq__34811_35259);
if(temp__5804__auto___35315){
var seq__34811_35317__$1 = temp__5804__auto___35315;
if(cljs.core.chunked_seq_QMARK_(seq__34811_35317__$1)){
var c__5568__auto___35318 = cljs.core.chunk_first(seq__34811_35317__$1);
var G__35319 = cljs.core.chunk_rest(seq__34811_35317__$1);
var G__35320 = c__5568__auto___35318;
var G__35321 = cljs.core.count(c__5568__auto___35318);
var G__35322 = (0);
seq__34811_35259 = G__35319;
chunk__34813_35260 = G__35320;
count__34814_35261 = G__35321;
i__34815_35262 = G__35322;
continue;
} else {
var child_struct_35323 = cljs.core.first(seq__34811_35317__$1);
if((!((child_struct_35323 == null)))){
if(typeof child_struct_35323 === 'string'){
var text_35324 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35324),child_struct_35323].join(''));
} else {
var children_35325 = shadow.dom.svg_node(child_struct_35323);
if(cljs.core.seq_QMARK_(children_35325)){
var seq__34852_35326 = cljs.core.seq(children_35325);
var chunk__34854_35327 = null;
var count__34855_35328 = (0);
var i__34856_35329 = (0);
while(true){
if((i__34856_35329 < count__34855_35328)){
var child_35330 = chunk__34854_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34856_35329);
if(cljs.core.truth_(child_35330)){
node.appendChild(child_35330);


var G__35331 = seq__34852_35326;
var G__35332 = chunk__34854_35327;
var G__35333 = count__34855_35328;
var G__35334 = (i__34856_35329 + (1));
seq__34852_35326 = G__35331;
chunk__34854_35327 = G__35332;
count__34855_35328 = G__35333;
i__34856_35329 = G__35334;
continue;
} else {
var G__35339 = seq__34852_35326;
var G__35340 = chunk__34854_35327;
var G__35341 = count__34855_35328;
var G__35342 = (i__34856_35329 + (1));
seq__34852_35326 = G__35339;
chunk__34854_35327 = G__35340;
count__34855_35328 = G__35341;
i__34856_35329 = G__35342;
continue;
}
} else {
var temp__5804__auto___35343__$1 = cljs.core.seq(seq__34852_35326);
if(temp__5804__auto___35343__$1){
var seq__34852_35344__$1 = temp__5804__auto___35343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34852_35344__$1)){
var c__5568__auto___35345 = cljs.core.chunk_first(seq__34852_35344__$1);
var G__35346 = cljs.core.chunk_rest(seq__34852_35344__$1);
var G__35347 = c__5568__auto___35345;
var G__35348 = cljs.core.count(c__5568__auto___35345);
var G__35349 = (0);
seq__34852_35326 = G__35346;
chunk__34854_35327 = G__35347;
count__34855_35328 = G__35348;
i__34856_35329 = G__35349;
continue;
} else {
var child_35353 = cljs.core.first(seq__34852_35344__$1);
if(cljs.core.truth_(child_35353)){
node.appendChild(child_35353);


var G__35354 = cljs.core.next(seq__34852_35344__$1);
var G__35355 = null;
var G__35356 = (0);
var G__35357 = (0);
seq__34852_35326 = G__35354;
chunk__34854_35327 = G__35355;
count__34855_35328 = G__35356;
i__34856_35329 = G__35357;
continue;
} else {
var G__35358 = cljs.core.next(seq__34852_35344__$1);
var G__35359 = null;
var G__35360 = (0);
var G__35361 = (0);
seq__34852_35326 = G__35358;
chunk__34854_35327 = G__35359;
count__34855_35328 = G__35360;
i__34856_35329 = G__35361;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35325);
}
}


var G__35362 = cljs.core.next(seq__34811_35317__$1);
var G__35363 = null;
var G__35364 = (0);
var G__35365 = (0);
seq__34811_35259 = G__35362;
chunk__34813_35260 = G__35363;
count__34814_35261 = G__35364;
i__34815_35262 = G__35365;
continue;
} else {
var G__35366 = cljs.core.next(seq__34811_35317__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__34811_35259 = G__35366;
chunk__34813_35260 = G__35367;
count__34814_35261 = G__35368;
i__34815_35262 = G__35369;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35381 = arguments.length;
var i__5770__auto___35383 = (0);
while(true){
if((i__5770__auto___35383 < len__5769__auto___35381)){
args__5775__auto__.push((arguments[i__5770__auto___35383]));

var G__35384 = (i__5770__auto___35383 + (1));
i__5770__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34871){
var G__34872 = cljs.core.first(seq34871);
var seq34871__$1 = cljs.core.next(seq34871);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34872,seq34871__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34880 = arguments.length;
switch (G__34880) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__29429__auto___35402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_34894){
var state_val_34895 = (state_34894[(1)]);
if((state_val_34895 === (1))){
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34894__$1,(2),once_or_cleanup);
} else {
if((state_val_34895 === (2))){
var inst_34891 = (state_34894[(2)]);
var inst_34892 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34894__$1 = (function (){var statearr_34896 = state_34894;
(statearr_34896[(7)] = inst_34891);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34894__$1,inst_34892);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29054__auto__ = null;
var shadow$dom$state_machine__29054__auto____0 = (function (){
var statearr_34897 = [null,null,null,null,null,null,null,null];
(statearr_34897[(0)] = shadow$dom$state_machine__29054__auto__);

(statearr_34897[(1)] = (1));

return statearr_34897;
});
var shadow$dom$state_machine__29054__auto____1 = (function (state_34894){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_34894);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e34900){var ex__29057__auto__ = e34900;
var statearr_34901_35403 = state_34894;
(statearr_34901_35403[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_34894[(4)]))){
var statearr_34902_35404 = state_34894;
(statearr_34902_35404[(1)] = cljs.core.first((state_34894[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35405 = state_34894;
state_34894 = G__35405;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
shadow$dom$state_machine__29054__auto__ = function(state_34894){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29054__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29054__auto____1.call(this,state_34894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29054__auto____0;
shadow$dom$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29054__auto____1;
return shadow$dom$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_34905 = f__29430__auto__();
(statearr_34905[(6)] = c__29429__auto___35402);

return statearr_34905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
