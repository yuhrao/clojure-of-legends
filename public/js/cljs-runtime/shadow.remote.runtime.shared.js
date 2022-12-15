goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31503,res){
var map__31506 = p__31503;
var map__31506__$1 = cljs.core.__destructure_map(map__31506);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31506__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31506__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31508 = res;
var G__31508__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31508,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31508);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31508__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31508__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31516 = arguments.length;
switch (G__31516) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31525,msg,handlers,timeout_after_ms){
var map__31527 = p__31525;
var map__31527__$1 = cljs.core.__destructure_map(map__31527);
var runtime = map__31527__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31527__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31913 = arguments.length;
var i__5770__auto___31914 = (0);
while(true){
if((i__5770__auto___31914 < len__5769__auto___31913)){
args__5775__auto__.push((arguments[i__5770__auto___31914]));

var G__31915 = (i__5770__auto___31914 + (1));
i__5770__auto___31914 = G__31915;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31543,ev,args){
var map__31545 = p__31543;
var map__31545__$1 = cljs.core.__destructure_map(map__31545);
var runtime = map__31545__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31545__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31549 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31552 = null;
var count__31553 = (0);
var i__31554 = (0);
while(true){
if((i__31554 < count__31553)){
var ext = chunk__31552.cljs$core$IIndexed$_nth$arity$2(null,i__31554);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31916 = seq__31549;
var G__31917 = chunk__31552;
var G__31918 = count__31553;
var G__31919 = (i__31554 + (1));
seq__31549 = G__31916;
chunk__31552 = G__31917;
count__31553 = G__31918;
i__31554 = G__31919;
continue;
} else {
var G__31921 = seq__31549;
var G__31922 = chunk__31552;
var G__31923 = count__31553;
var G__31924 = (i__31554 + (1));
seq__31549 = G__31921;
chunk__31552 = G__31922;
count__31553 = G__31923;
i__31554 = G__31924;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31549);
if(temp__5804__auto__){
var seq__31549__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31549__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31549__$1);
var G__31925 = cljs.core.chunk_rest(seq__31549__$1);
var G__31926 = c__5568__auto__;
var G__31927 = cljs.core.count(c__5568__auto__);
var G__31928 = (0);
seq__31549 = G__31925;
chunk__31552 = G__31926;
count__31553 = G__31927;
i__31554 = G__31928;
continue;
} else {
var ext = cljs.core.first(seq__31549__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31930 = cljs.core.next(seq__31549__$1);
var G__31931 = null;
var G__31932 = (0);
var G__31933 = (0);
seq__31549 = G__31930;
chunk__31552 = G__31931;
count__31553 = G__31932;
i__31554 = G__31933;
continue;
} else {
var G__31934 = cljs.core.next(seq__31549__$1);
var G__31935 = null;
var G__31936 = (0);
var G__31937 = (0);
seq__31549 = G__31934;
chunk__31552 = G__31935;
count__31553 = G__31936;
i__31554 = G__31937;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31535){
var G__31536 = cljs.core.first(seq31535);
var seq31535__$1 = cljs.core.next(seq31535);
var G__31537 = cljs.core.first(seq31535__$1);
var seq31535__$2 = cljs.core.next(seq31535__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31536,G__31537,seq31535__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31590,p__31591){
var map__31596 = p__31590;
var map__31596__$1 = cljs.core.__destructure_map(map__31596);
var runtime = map__31596__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31596__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31597 = p__31591;
var map__31597__$1 = cljs.core.__destructure_map(map__31597);
var msg = map__31597__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31597__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31603 = cljs.core.deref(state_ref);
var map__31603__$1 = cljs.core.__destructure_map(map__31603);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31603__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31603__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31610){
var map__31613 = p__31610;
var map__31613__$1 = cljs.core.__destructure_map(map__31613);
var runtime = map__31613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31634,msg){
var map__31635 = p__31634;
var map__31635__$1 = cljs.core.__destructure_map(map__31635);
var runtime = map__31635__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31656,key,p__31657){
var map__31660 = p__31656;
var map__31660__$1 = cljs.core.__destructure_map(map__31660);
var state = map__31660__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31662 = p__31657;
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var spec = map__31662__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31680,key,spec){
var map__31682 = p__31680;
var map__31682__$1 = cljs.core.__destructure_map(map__31682);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31687_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31687_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31688_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31688_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31689_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31689_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31690_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31690_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31691_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31691_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31730,key){
var map__31736 = p__31730;
var map__31736__$1 = cljs.core.__destructure_map(map__31736);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31736__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31800,msg){
var map__31802 = p__31800;
var map__31802__$1 = cljs.core.__destructure_map(map__31802);
var runtime = map__31802__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31802__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31816,p__31817){
var map__31819 = p__31816;
var map__31819__$1 = cljs.core.__destructure_map(map__31819);
var runtime = map__31819__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31819__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31820 = p__31817;
var map__31820__$1 = cljs.core.__destructure_map(map__31820);
var msg = map__31820__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31850 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31852 = null;
var count__31853 = (0);
var i__31854 = (0);
while(true){
if((i__31854 < count__31853)){
var map__31872 = chunk__31852.cljs$core$IIndexed$_nth$arity$2(null,i__31854);
var map__31872__$1 = cljs.core.__destructure_map(map__31872);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31872__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32004 = seq__31850;
var G__32005 = chunk__31852;
var G__32006 = count__31853;
var G__32007 = (i__31854 + (1));
seq__31850 = G__32004;
chunk__31852 = G__32005;
count__31853 = G__32006;
i__31854 = G__32007;
continue;
} else {
var G__32008 = seq__31850;
var G__32009 = chunk__31852;
var G__32010 = count__31853;
var G__32011 = (i__31854 + (1));
seq__31850 = G__32008;
chunk__31852 = G__32009;
count__31853 = G__32010;
i__31854 = G__32011;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31850);
if(temp__5804__auto__){
var seq__31850__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31850__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31850__$1);
var G__32015 = cljs.core.chunk_rest(seq__31850__$1);
var G__32016 = c__5568__auto__;
var G__32017 = cljs.core.count(c__5568__auto__);
var G__32018 = (0);
seq__31850 = G__32015;
chunk__31852 = G__32016;
count__31853 = G__32017;
i__31854 = G__32018;
continue;
} else {
var map__31880 = cljs.core.first(seq__31850__$1);
var map__31880__$1 = cljs.core.__destructure_map(map__31880);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31880__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32021 = cljs.core.next(seq__31850__$1);
var G__32022 = null;
var G__32023 = (0);
var G__32024 = (0);
seq__31850 = G__32021;
chunk__31852 = G__32022;
count__31853 = G__32023;
i__31854 = G__32024;
continue;
} else {
var G__32026 = cljs.core.next(seq__31850__$1);
var G__32027 = null;
var G__32028 = (0);
var G__32029 = (0);
seq__31850 = G__32026;
chunk__31852 = G__32027;
count__31853 = G__32028;
i__31854 = G__32029;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
