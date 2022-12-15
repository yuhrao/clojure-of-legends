goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37738 = arguments.length;
var i__5770__auto___37739 = (0);
while(true){
if((i__5770__auto___37739 < len__5769__auto___37738)){
args__5775__auto__.push((arguments[i__5770__auto___37739]));

var G__37740 = (i__5770__auto___37739 + (1));
i__5770__auto___37739 = G__37740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36470){
var G__36471 = cljs.core.first(seq36470);
var seq36470__$1 = cljs.core.next(seq36470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36471,seq36470__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36487 = cljs.core.seq(sources);
var chunk__36488 = null;
var count__36489 = (0);
var i__36490 = (0);
while(true){
if((i__36490 < count__36489)){
var map__36506 = chunk__36488.cljs$core$IIndexed$_nth$arity$2(null,i__36490);
var map__36506__$1 = cljs.core.__destructure_map(map__36506);
var src = map__36506__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36506__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36506__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36506__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36506__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36507){var e_37745 = e36507;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37745);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37745.message)].join('')));
}

var G__37748 = seq__36487;
var G__37749 = chunk__36488;
var G__37750 = count__36489;
var G__37751 = (i__36490 + (1));
seq__36487 = G__37748;
chunk__36488 = G__37749;
count__36489 = G__37750;
i__36490 = G__37751;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36487);
if(temp__5804__auto__){
var seq__36487__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36487__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36487__$1);
var G__37752 = cljs.core.chunk_rest(seq__36487__$1);
var G__37753 = c__5568__auto__;
var G__37754 = cljs.core.count(c__5568__auto__);
var G__37755 = (0);
seq__36487 = G__37752;
chunk__36488 = G__37753;
count__36489 = G__37754;
i__36490 = G__37755;
continue;
} else {
var map__36510 = cljs.core.first(seq__36487__$1);
var map__36510__$1 = cljs.core.__destructure_map(map__36510);
var src = map__36510__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36512){var e_37757 = e36512;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37757);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37757.message)].join('')));
}

var G__37758 = cljs.core.next(seq__36487__$1);
var G__37759 = null;
var G__37760 = (0);
var G__37761 = (0);
seq__36487 = G__37758;
chunk__36488 = G__37759;
count__36489 = G__37760;
i__36490 = G__37761;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36549 = cljs.core.seq(js_requires);
var chunk__36550 = null;
var count__36551 = (0);
var i__36552 = (0);
while(true){
if((i__36552 < count__36551)){
var js_ns = chunk__36550.cljs$core$IIndexed$_nth$arity$2(null,i__36552);
var require_str_37763 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37763);


var G__37764 = seq__36549;
var G__37765 = chunk__36550;
var G__37766 = count__36551;
var G__37767 = (i__36552 + (1));
seq__36549 = G__37764;
chunk__36550 = G__37765;
count__36551 = G__37766;
i__36552 = G__37767;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36549);
if(temp__5804__auto__){
var seq__36549__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36549__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36549__$1);
var G__37768 = cljs.core.chunk_rest(seq__36549__$1);
var G__37769 = c__5568__auto__;
var G__37770 = cljs.core.count(c__5568__auto__);
var G__37771 = (0);
seq__36549 = G__37768;
chunk__36550 = G__37769;
count__36551 = G__37770;
i__36552 = G__37771;
continue;
} else {
var js_ns = cljs.core.first(seq__36549__$1);
var require_str_37772 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37772);


var G__37773 = cljs.core.next(seq__36549__$1);
var G__37774 = null;
var G__37775 = (0);
var G__37776 = (0);
seq__36549 = G__37773;
chunk__36550 = G__37774;
count__36551 = G__37775;
i__36552 = G__37776;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36583){
var map__36584 = p__36583;
var map__36584__$1 = cljs.core.__destructure_map(map__36584);
var msg = map__36584__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36584__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36584__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36586(s__36587){
return (new cljs.core.LazySeq(null,(function (){
var s__36587__$1 = s__36587;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36587__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36595 = cljs.core.first(xs__6360__auto__);
var map__36595__$1 = cljs.core.__destructure_map(map__36595);
var src = map__36595__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36595__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36595__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36587__$1,map__36595,map__36595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36584,map__36584__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36586_$_iter__36588(s__36589){
return (new cljs.core.LazySeq(null,((function (s__36587__$1,map__36595,map__36595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36584,map__36584__$1,msg,info,reload_info){
return (function (){
var s__36589__$1 = s__36589;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36589__$1);
if(temp__5804__auto____$1){
var s__36589__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36589__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36589__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36591 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36590 = (0);
while(true){
if((i__36590 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36590);
cljs.core.chunk_append(b__36591,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37782 = (i__36590 + (1));
i__36590 = G__37782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36591),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36586_$_iter__36588(cljs.core.chunk_rest(s__36589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36591),null);
}
} else {
var warning = cljs.core.first(s__36589__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36586_$_iter__36588(cljs.core.rest(s__36589__$2)));
}
} else {
return null;
}
break;
}
});})(s__36587__$1,map__36595,map__36595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36584,map__36584__$1,msg,info,reload_info))
,null,null));
});})(s__36587__$1,map__36595,map__36595__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36584,map__36584__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36586(cljs.core.rest(s__36587__$1)));
} else {
var G__37785 = cljs.core.rest(s__36587__$1);
s__36587__$1 = G__37785;
continue;
}
} else {
var G__37786 = cljs.core.rest(s__36587__$1);
s__36587__$1 = G__37786;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36604_37788 = cljs.core.seq(warnings);
var chunk__36605_37789 = null;
var count__36606_37790 = (0);
var i__36607_37791 = (0);
while(true){
if((i__36607_37791 < count__36606_37790)){
var map__36614_37792 = chunk__36605_37789.cljs$core$IIndexed$_nth$arity$2(null,i__36607_37791);
var map__36614_37793__$1 = cljs.core.__destructure_map(map__36614_37792);
var w_37794 = map__36614_37793__$1;
var msg_37795__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614_37793__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614_37793__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614_37793__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614_37793__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37798)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37796),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37797),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37795__$1)].join(''));


var G__37799 = seq__36604_37788;
var G__37800 = chunk__36605_37789;
var G__37801 = count__36606_37790;
var G__37802 = (i__36607_37791 + (1));
seq__36604_37788 = G__37799;
chunk__36605_37789 = G__37800;
count__36606_37790 = G__37801;
i__36607_37791 = G__37802;
continue;
} else {
var temp__5804__auto___37803 = cljs.core.seq(seq__36604_37788);
if(temp__5804__auto___37803){
var seq__36604_37804__$1 = temp__5804__auto___37803;
if(cljs.core.chunked_seq_QMARK_(seq__36604_37804__$1)){
var c__5568__auto___37805 = cljs.core.chunk_first(seq__36604_37804__$1);
var G__37806 = cljs.core.chunk_rest(seq__36604_37804__$1);
var G__37807 = c__5568__auto___37805;
var G__37808 = cljs.core.count(c__5568__auto___37805);
var G__37809 = (0);
seq__36604_37788 = G__37806;
chunk__36605_37789 = G__37807;
count__36606_37790 = G__37808;
i__36607_37791 = G__37809;
continue;
} else {
var map__36616_37810 = cljs.core.first(seq__36604_37804__$1);
var map__36616_37811__$1 = cljs.core.__destructure_map(map__36616_37810);
var w_37812 = map__36616_37811__$1;
var msg_37813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616_37811__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616_37811__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616_37811__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616_37811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37816)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37814),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37815),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37813__$1)].join(''));


var G__37818 = cljs.core.next(seq__36604_37804__$1);
var G__37819 = null;
var G__37820 = (0);
var G__37821 = (0);
seq__36604_37788 = G__37818;
chunk__36605_37789 = G__37819;
count__36606_37790 = G__37820;
i__36607_37791 = G__37821;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36579_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36579_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36632){
var map__36633 = p__36632;
var map__36633__$1 = cljs.core.__destructure_map(map__36633);
var msg = map__36633__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36633__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36633__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36634 = cljs.core.seq(updates);
var chunk__36636 = null;
var count__36637 = (0);
var i__36638 = (0);
while(true){
if((i__36638 < count__36637)){
var path = chunk__36636.cljs$core$IIndexed$_nth$arity$2(null,i__36638);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37120_37832 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37124_37833 = null;
var count__37125_37834 = (0);
var i__37126_37835 = (0);
while(true){
if((i__37126_37835 < count__37125_37834)){
var node_37837 = chunk__37124_37833.cljs$core$IIndexed$_nth$arity$2(null,i__37126_37835);
if(cljs.core.not(node_37837.shadow$old)){
var path_match_37838 = shadow.cljs.devtools.client.browser.match_paths(node_37837.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37838)){
var new_link_37839 = (function (){var G__37267 = node_37837.cloneNode(true);
G__37267.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37838),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37267;
})();
(node_37837.shadow$old = true);

(new_link_37839.onload = ((function (seq__37120_37832,chunk__37124_37833,count__37125_37834,i__37126_37835,seq__36634,chunk__36636,count__36637,i__36638,new_link_37839,path_match_37838,node_37837,path,map__36633,map__36633__$1,msg,updates,reload_info){
return (function (e){
var seq__37270_37843 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37272_37844 = null;
var count__37273_37845 = (0);
var i__37274_37846 = (0);
while(true){
if((i__37274_37846 < count__37273_37845)){
var map__37291_37847 = chunk__37272_37844.cljs$core$IIndexed$_nth$arity$2(null,i__37274_37846);
var map__37291_37848__$1 = cljs.core.__destructure_map(map__37291_37847);
var task_37849 = map__37291_37848__$1;
var fn_str_37850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291_37848__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37291_37848__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37852 = goog.getObjectByName(fn_str_37850,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37851)].join(''));

(fn_obj_37852.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37852.cljs$core$IFn$_invoke$arity$2(path,new_link_37839) : fn_obj_37852.call(null,path,new_link_37839));


var G__37854 = seq__37270_37843;
var G__37855 = chunk__37272_37844;
var G__37856 = count__37273_37845;
var G__37857 = (i__37274_37846 + (1));
seq__37270_37843 = G__37854;
chunk__37272_37844 = G__37855;
count__37273_37845 = G__37856;
i__37274_37846 = G__37857;
continue;
} else {
var temp__5804__auto___37858 = cljs.core.seq(seq__37270_37843);
if(temp__5804__auto___37858){
var seq__37270_37860__$1 = temp__5804__auto___37858;
if(cljs.core.chunked_seq_QMARK_(seq__37270_37860__$1)){
var c__5568__auto___37861 = cljs.core.chunk_first(seq__37270_37860__$1);
var G__37862 = cljs.core.chunk_rest(seq__37270_37860__$1);
var G__37863 = c__5568__auto___37861;
var G__37864 = cljs.core.count(c__5568__auto___37861);
var G__37865 = (0);
seq__37270_37843 = G__37862;
chunk__37272_37844 = G__37863;
count__37273_37845 = G__37864;
i__37274_37846 = G__37865;
continue;
} else {
var map__37300_37866 = cljs.core.first(seq__37270_37860__$1);
var map__37300_37867__$1 = cljs.core.__destructure_map(map__37300_37866);
var task_37868 = map__37300_37867__$1;
var fn_str_37869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300_37867__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300_37867__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37872 = goog.getObjectByName(fn_str_37869,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37870)].join(''));

(fn_obj_37872.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37872.cljs$core$IFn$_invoke$arity$2(path,new_link_37839) : fn_obj_37872.call(null,path,new_link_37839));


var G__37874 = cljs.core.next(seq__37270_37860__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37270_37843 = G__37874;
chunk__37272_37844 = G__37875;
count__37273_37845 = G__37876;
i__37274_37846 = G__37877;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37837);
});})(seq__37120_37832,chunk__37124_37833,count__37125_37834,i__37126_37835,seq__36634,chunk__36636,count__36637,i__36638,new_link_37839,path_match_37838,node_37837,path,map__36633,map__36633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37838], 0));

goog.dom.insertSiblingAfter(new_link_37839,node_37837);


var G__37879 = seq__37120_37832;
var G__37880 = chunk__37124_37833;
var G__37881 = count__37125_37834;
var G__37882 = (i__37126_37835 + (1));
seq__37120_37832 = G__37879;
chunk__37124_37833 = G__37880;
count__37125_37834 = G__37881;
i__37126_37835 = G__37882;
continue;
} else {
var G__37883 = seq__37120_37832;
var G__37884 = chunk__37124_37833;
var G__37885 = count__37125_37834;
var G__37886 = (i__37126_37835 + (1));
seq__37120_37832 = G__37883;
chunk__37124_37833 = G__37884;
count__37125_37834 = G__37885;
i__37126_37835 = G__37886;
continue;
}
} else {
var G__37887 = seq__37120_37832;
var G__37888 = chunk__37124_37833;
var G__37889 = count__37125_37834;
var G__37890 = (i__37126_37835 + (1));
seq__37120_37832 = G__37887;
chunk__37124_37833 = G__37888;
count__37125_37834 = G__37889;
i__37126_37835 = G__37890;
continue;
}
} else {
var temp__5804__auto___37891 = cljs.core.seq(seq__37120_37832);
if(temp__5804__auto___37891){
var seq__37120_37892__$1 = temp__5804__auto___37891;
if(cljs.core.chunked_seq_QMARK_(seq__37120_37892__$1)){
var c__5568__auto___37893 = cljs.core.chunk_first(seq__37120_37892__$1);
var G__37894 = cljs.core.chunk_rest(seq__37120_37892__$1);
var G__37895 = c__5568__auto___37893;
var G__37896 = cljs.core.count(c__5568__auto___37893);
var G__37897 = (0);
seq__37120_37832 = G__37894;
chunk__37124_37833 = G__37895;
count__37125_37834 = G__37896;
i__37126_37835 = G__37897;
continue;
} else {
var node_37898 = cljs.core.first(seq__37120_37892__$1);
if(cljs.core.not(node_37898.shadow$old)){
var path_match_37899 = shadow.cljs.devtools.client.browser.match_paths(node_37898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37899)){
var new_link_37901 = (function (){var G__37317 = node_37898.cloneNode(true);
G__37317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37899),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37317;
})();
(node_37898.shadow$old = true);

(new_link_37901.onload = ((function (seq__37120_37832,chunk__37124_37833,count__37125_37834,i__37126_37835,seq__36634,chunk__36636,count__36637,i__36638,new_link_37901,path_match_37899,node_37898,seq__37120_37892__$1,temp__5804__auto___37891,path,map__36633,map__36633__$1,msg,updates,reload_info){
return (function (e){
var seq__37322_37903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37324_37904 = null;
var count__37325_37905 = (0);
var i__37326_37906 = (0);
while(true){
if((i__37326_37906 < count__37325_37905)){
var map__37341_37907 = chunk__37324_37904.cljs$core$IIndexed$_nth$arity$2(null,i__37326_37906);
var map__37341_37908__$1 = cljs.core.__destructure_map(map__37341_37907);
var task_37909 = map__37341_37908__$1;
var fn_str_37910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341_37908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341_37908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37915 = goog.getObjectByName(fn_str_37910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37911)].join(''));

(fn_obj_37915.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37915.cljs$core$IFn$_invoke$arity$2(path,new_link_37901) : fn_obj_37915.call(null,path,new_link_37901));


var G__37916 = seq__37322_37903;
var G__37917 = chunk__37324_37904;
var G__37918 = count__37325_37905;
var G__37919 = (i__37326_37906 + (1));
seq__37322_37903 = G__37916;
chunk__37324_37904 = G__37917;
count__37325_37905 = G__37918;
i__37326_37906 = G__37919;
continue;
} else {
var temp__5804__auto___37920__$1 = cljs.core.seq(seq__37322_37903);
if(temp__5804__auto___37920__$1){
var seq__37322_37921__$1 = temp__5804__auto___37920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37322_37921__$1)){
var c__5568__auto___37922 = cljs.core.chunk_first(seq__37322_37921__$1);
var G__37923 = cljs.core.chunk_rest(seq__37322_37921__$1);
var G__37924 = c__5568__auto___37922;
var G__37925 = cljs.core.count(c__5568__auto___37922);
var G__37926 = (0);
seq__37322_37903 = G__37923;
chunk__37324_37904 = G__37924;
count__37325_37905 = G__37925;
i__37326_37906 = G__37926;
continue;
} else {
var map__37355_37927 = cljs.core.first(seq__37322_37921__$1);
var map__37355_37928__$1 = cljs.core.__destructure_map(map__37355_37927);
var task_37929 = map__37355_37928__$1;
var fn_str_37930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355_37928__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355_37928__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37934 = goog.getObjectByName(fn_str_37930,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37931)].join(''));

(fn_obj_37934.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37934.cljs$core$IFn$_invoke$arity$2(path,new_link_37901) : fn_obj_37934.call(null,path,new_link_37901));


var G__37935 = cljs.core.next(seq__37322_37921__$1);
var G__37936 = null;
var G__37937 = (0);
var G__37938 = (0);
seq__37322_37903 = G__37935;
chunk__37324_37904 = G__37936;
count__37325_37905 = G__37937;
i__37326_37906 = G__37938;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37898);
});})(seq__37120_37832,chunk__37124_37833,count__37125_37834,i__37126_37835,seq__36634,chunk__36636,count__36637,i__36638,new_link_37901,path_match_37899,node_37898,seq__37120_37892__$1,temp__5804__auto___37891,path,map__36633,map__36633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37899], 0));

goog.dom.insertSiblingAfter(new_link_37901,node_37898);


var G__37941 = cljs.core.next(seq__37120_37892__$1);
var G__37942 = null;
var G__37943 = (0);
var G__37944 = (0);
seq__37120_37832 = G__37941;
chunk__37124_37833 = G__37942;
count__37125_37834 = G__37943;
i__37126_37835 = G__37944;
continue;
} else {
var G__37946 = cljs.core.next(seq__37120_37892__$1);
var G__37947 = null;
var G__37948 = (0);
var G__37949 = (0);
seq__37120_37832 = G__37946;
chunk__37124_37833 = G__37947;
count__37125_37834 = G__37948;
i__37126_37835 = G__37949;
continue;
}
} else {
var G__37950 = cljs.core.next(seq__37120_37892__$1);
var G__37951 = null;
var G__37952 = (0);
var G__37953 = (0);
seq__37120_37832 = G__37950;
chunk__37124_37833 = G__37951;
count__37125_37834 = G__37952;
i__37126_37835 = G__37953;
continue;
}
}
} else {
}
}
break;
}


var G__37954 = seq__36634;
var G__37955 = chunk__36636;
var G__37956 = count__36637;
var G__37957 = (i__36638 + (1));
seq__36634 = G__37954;
chunk__36636 = G__37955;
count__36637 = G__37956;
i__36638 = G__37957;
continue;
} else {
var G__37958 = seq__36634;
var G__37959 = chunk__36636;
var G__37960 = count__36637;
var G__37961 = (i__36638 + (1));
seq__36634 = G__37958;
chunk__36636 = G__37959;
count__36637 = G__37960;
i__36638 = G__37961;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36634);
if(temp__5804__auto__){
var seq__36634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36634__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36634__$1);
var G__37962 = cljs.core.chunk_rest(seq__36634__$1);
var G__37963 = c__5568__auto__;
var G__37964 = cljs.core.count(c__5568__auto__);
var G__37965 = (0);
seq__36634 = G__37962;
chunk__36636 = G__37963;
count__36637 = G__37964;
i__36638 = G__37965;
continue;
} else {
var path = cljs.core.first(seq__36634__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37365_37966 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37369_37967 = null;
var count__37370_37968 = (0);
var i__37371_37969 = (0);
while(true){
if((i__37371_37969 < count__37370_37968)){
var node_37971 = chunk__37369_37967.cljs$core$IIndexed$_nth$arity$2(null,i__37371_37969);
if(cljs.core.not(node_37971.shadow$old)){
var path_match_37973 = shadow.cljs.devtools.client.browser.match_paths(node_37971.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37973)){
var new_link_37974 = (function (){var G__37466 = node_37971.cloneNode(true);
G__37466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37973),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37466;
})();
(node_37971.shadow$old = true);

(new_link_37974.onload = ((function (seq__37365_37966,chunk__37369_37967,count__37370_37968,i__37371_37969,seq__36634,chunk__36636,count__36637,i__36638,new_link_37974,path_match_37973,node_37971,path,seq__36634__$1,temp__5804__auto__,map__36633,map__36633__$1,msg,updates,reload_info){
return (function (e){
var seq__37469_37976 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37471_37977 = null;
var count__37472_37978 = (0);
var i__37473_37979 = (0);
while(true){
if((i__37473_37979 < count__37472_37978)){
var map__37490_37980 = chunk__37471_37977.cljs$core$IIndexed$_nth$arity$2(null,i__37473_37979);
var map__37490_37981__$1 = cljs.core.__destructure_map(map__37490_37980);
var task_37982 = map__37490_37981__$1;
var fn_str_37983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490_37981__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490_37981__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37985 = goog.getObjectByName(fn_str_37983,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37984)].join(''));

(fn_obj_37985.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37985.cljs$core$IFn$_invoke$arity$2(path,new_link_37974) : fn_obj_37985.call(null,path,new_link_37974));


var G__37986 = seq__37469_37976;
var G__37987 = chunk__37471_37977;
var G__37988 = count__37472_37978;
var G__37989 = (i__37473_37979 + (1));
seq__37469_37976 = G__37986;
chunk__37471_37977 = G__37987;
count__37472_37978 = G__37988;
i__37473_37979 = G__37989;
continue;
} else {
var temp__5804__auto___37990__$1 = cljs.core.seq(seq__37469_37976);
if(temp__5804__auto___37990__$1){
var seq__37469_37991__$1 = temp__5804__auto___37990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37469_37991__$1)){
var c__5568__auto___37993 = cljs.core.chunk_first(seq__37469_37991__$1);
var G__37994 = cljs.core.chunk_rest(seq__37469_37991__$1);
var G__37995 = c__5568__auto___37993;
var G__37996 = cljs.core.count(c__5568__auto___37993);
var G__37997 = (0);
seq__37469_37976 = G__37994;
chunk__37471_37977 = G__37995;
count__37472_37978 = G__37996;
i__37473_37979 = G__37997;
continue;
} else {
var map__37505_37998 = cljs.core.first(seq__37469_37991__$1);
var map__37505_37999__$1 = cljs.core.__destructure_map(map__37505_37998);
var task_38000 = map__37505_37999__$1;
var fn_str_38001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505_37999__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505_37999__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38003 = goog.getObjectByName(fn_str_38001,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38002)].join(''));

(fn_obj_38003.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38003.cljs$core$IFn$_invoke$arity$2(path,new_link_37974) : fn_obj_38003.call(null,path,new_link_37974));


var G__38004 = cljs.core.next(seq__37469_37991__$1);
var G__38005 = null;
var G__38006 = (0);
var G__38007 = (0);
seq__37469_37976 = G__38004;
chunk__37471_37977 = G__38005;
count__37472_37978 = G__38006;
i__37473_37979 = G__38007;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37971);
});})(seq__37365_37966,chunk__37369_37967,count__37370_37968,i__37371_37969,seq__36634,chunk__36636,count__36637,i__36638,new_link_37974,path_match_37973,node_37971,path,seq__36634__$1,temp__5804__auto__,map__36633,map__36633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37973], 0));

goog.dom.insertSiblingAfter(new_link_37974,node_37971);


var G__38008 = seq__37365_37966;
var G__38009 = chunk__37369_37967;
var G__38010 = count__37370_37968;
var G__38011 = (i__37371_37969 + (1));
seq__37365_37966 = G__38008;
chunk__37369_37967 = G__38009;
count__37370_37968 = G__38010;
i__37371_37969 = G__38011;
continue;
} else {
var G__38013 = seq__37365_37966;
var G__38014 = chunk__37369_37967;
var G__38015 = count__37370_37968;
var G__38016 = (i__37371_37969 + (1));
seq__37365_37966 = G__38013;
chunk__37369_37967 = G__38014;
count__37370_37968 = G__38015;
i__37371_37969 = G__38016;
continue;
}
} else {
var G__38017 = seq__37365_37966;
var G__38018 = chunk__37369_37967;
var G__38019 = count__37370_37968;
var G__38020 = (i__37371_37969 + (1));
seq__37365_37966 = G__38017;
chunk__37369_37967 = G__38018;
count__37370_37968 = G__38019;
i__37371_37969 = G__38020;
continue;
}
} else {
var temp__5804__auto___38022__$1 = cljs.core.seq(seq__37365_37966);
if(temp__5804__auto___38022__$1){
var seq__37365_38023__$1 = temp__5804__auto___38022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37365_38023__$1)){
var c__5568__auto___38025 = cljs.core.chunk_first(seq__37365_38023__$1);
var G__38026 = cljs.core.chunk_rest(seq__37365_38023__$1);
var G__38027 = c__5568__auto___38025;
var G__38028 = cljs.core.count(c__5568__auto___38025);
var G__38029 = (0);
seq__37365_37966 = G__38026;
chunk__37369_37967 = G__38027;
count__37370_37968 = G__38028;
i__37371_37969 = G__38029;
continue;
} else {
var node_38030 = cljs.core.first(seq__37365_38023__$1);
if(cljs.core.not(node_38030.shadow$old)){
var path_match_38031 = shadow.cljs.devtools.client.browser.match_paths(node_38030.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38031)){
var new_link_38032 = (function (){var G__37513 = node_38030.cloneNode(true);
G__37513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38031),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37513;
})();
(node_38030.shadow$old = true);

(new_link_38032.onload = ((function (seq__37365_37966,chunk__37369_37967,count__37370_37968,i__37371_37969,seq__36634,chunk__36636,count__36637,i__36638,new_link_38032,path_match_38031,node_38030,seq__37365_38023__$1,temp__5804__auto___38022__$1,path,seq__36634__$1,temp__5804__auto__,map__36633,map__36633__$1,msg,updates,reload_info){
return (function (e){
var seq__37516_38033 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37518_38034 = null;
var count__37519_38035 = (0);
var i__37520_38036 = (0);
while(true){
if((i__37520_38036 < count__37519_38035)){
var map__37535_38038 = chunk__37518_38034.cljs$core$IIndexed$_nth$arity$2(null,i__37520_38036);
var map__37535_38039__$1 = cljs.core.__destructure_map(map__37535_38038);
var task_38040 = map__37535_38039__$1;
var fn_str_38041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535_38039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535_38039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38043 = goog.getObjectByName(fn_str_38041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38042)].join(''));

(fn_obj_38043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38043.cljs$core$IFn$_invoke$arity$2(path,new_link_38032) : fn_obj_38043.call(null,path,new_link_38032));


var G__38045 = seq__37516_38033;
var G__38046 = chunk__37518_38034;
var G__38047 = count__37519_38035;
var G__38048 = (i__37520_38036 + (1));
seq__37516_38033 = G__38045;
chunk__37518_38034 = G__38046;
count__37519_38035 = G__38047;
i__37520_38036 = G__38048;
continue;
} else {
var temp__5804__auto___38049__$2 = cljs.core.seq(seq__37516_38033);
if(temp__5804__auto___38049__$2){
var seq__37516_38051__$1 = temp__5804__auto___38049__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37516_38051__$1)){
var c__5568__auto___38052 = cljs.core.chunk_first(seq__37516_38051__$1);
var G__38053 = cljs.core.chunk_rest(seq__37516_38051__$1);
var G__38054 = c__5568__auto___38052;
var G__38055 = cljs.core.count(c__5568__auto___38052);
var G__38056 = (0);
seq__37516_38033 = G__38053;
chunk__37518_38034 = G__38054;
count__37519_38035 = G__38055;
i__37520_38036 = G__38056;
continue;
} else {
var map__37540_38057 = cljs.core.first(seq__37516_38051__$1);
var map__37540_38058__$1 = cljs.core.__destructure_map(map__37540_38057);
var task_38059 = map__37540_38058__$1;
var fn_str_38060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540_38058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540_38058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38062 = goog.getObjectByName(fn_str_38060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38061)].join(''));

(fn_obj_38062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38062.cljs$core$IFn$_invoke$arity$2(path,new_link_38032) : fn_obj_38062.call(null,path,new_link_38032));


var G__38063 = cljs.core.next(seq__37516_38051__$1);
var G__38064 = null;
var G__38065 = (0);
var G__38066 = (0);
seq__37516_38033 = G__38063;
chunk__37518_38034 = G__38064;
count__37519_38035 = G__38065;
i__37520_38036 = G__38066;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38030);
});})(seq__37365_37966,chunk__37369_37967,count__37370_37968,i__37371_37969,seq__36634,chunk__36636,count__36637,i__36638,new_link_38032,path_match_38031,node_38030,seq__37365_38023__$1,temp__5804__auto___38022__$1,path,seq__36634__$1,temp__5804__auto__,map__36633,map__36633__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38031], 0));

goog.dom.insertSiblingAfter(new_link_38032,node_38030);


var G__38067 = cljs.core.next(seq__37365_38023__$1);
var G__38068 = null;
var G__38069 = (0);
var G__38070 = (0);
seq__37365_37966 = G__38067;
chunk__37369_37967 = G__38068;
count__37370_37968 = G__38069;
i__37371_37969 = G__38070;
continue;
} else {
var G__38071 = cljs.core.next(seq__37365_38023__$1);
var G__38072 = null;
var G__38073 = (0);
var G__38074 = (0);
seq__37365_37966 = G__38071;
chunk__37369_37967 = G__38072;
count__37370_37968 = G__38073;
i__37371_37969 = G__38074;
continue;
}
} else {
var G__38079 = cljs.core.next(seq__37365_38023__$1);
var G__38080 = null;
var G__38081 = (0);
var G__38082 = (0);
seq__37365_37966 = G__38079;
chunk__37369_37967 = G__38080;
count__37370_37968 = G__38081;
i__37371_37969 = G__38082;
continue;
}
}
} else {
}
}
break;
}


var G__38083 = cljs.core.next(seq__36634__$1);
var G__38084 = null;
var G__38085 = (0);
var G__38086 = (0);
seq__36634 = G__38083;
chunk__36636 = G__38084;
count__36637 = G__38085;
i__36638 = G__38086;
continue;
} else {
var G__38087 = cljs.core.next(seq__36634__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__36634 = G__38087;
chunk__36636 = G__38088;
count__36637 = G__38089;
i__36638 = G__38090;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37562){
var map__37564 = p__37562;
var map__37564__$1 = cljs.core.__destructure_map(map__37564);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37564__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37604){
var map__37605 = p__37604;
var map__37605__$1 = cljs.core.__destructure_map(map__37605);
var _ = map__37605__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37605__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37617,done,error){
var map__37621 = p__37617;
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37636,done,error){
var map__37637 = p__37636;
var map__37637__$1 = cljs.core.__destructure_map(map__37637);
var msg = map__37637__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37637__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37637__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37637__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37640){
var map__37641 = p__37640;
var map__37641__$1 = cljs.core.__destructure_map(map__37641);
var src = map__37641__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37653 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37653) : done.call(null,G__37653));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37658){
var map__37659 = p__37658;
var map__37659__$1 = cljs.core.__destructure_map(map__37659);
var msg__$1 = map__37659__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37661){var ex = e37661;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37671){
var map__37673 = p__37671;
var map__37673__$1 = cljs.core.__destructure_map(map__37673);
var env = map__37673__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37709){
var map__37712 = p__37709;
var map__37712__$1 = cljs.core.__destructure_map(map__37712);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37724){
var map__37725 = p__37724;
var map__37725__$1 = cljs.core.__destructure_map(map__37725);
var svc = map__37725__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
