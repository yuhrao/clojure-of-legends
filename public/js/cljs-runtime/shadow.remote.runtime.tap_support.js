goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35209,p__35210){
var map__35211 = p__35209;
var map__35211__$1 = cljs.core.__destructure_map(map__35211);
var svc = map__35211__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35212 = p__35210;
var map__35212__$1 = cljs.core.__destructure_map(map__35212);
var msg = map__35212__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35212__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35221,p__35222){
var map__35223 = p__35221;
var map__35223__$1 = cljs.core.__destructure_map(map__35223);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35223__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35224 = p__35222;
var map__35224__$1 = cljs.core.__destructure_map(map__35224);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35224__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35255,p__35256){
var map__35257 = p__35255;
var map__35257__$1 = cljs.core.__destructure_map(map__35257);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35257__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35258 = p__35256;
var map__35258__$1 = cljs.core.__destructure_map(map__35258);
var msg = map__35258__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35258__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35263,tid){
var map__35264 = p__35263;
var map__35264__$1 = cljs.core.__destructure_map(map__35264);
var svc = map__35264__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35264__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35335 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35336 = null;
var count__35337 = (0);
var i__35338 = (0);
while(true){
if((i__35338 < count__35337)){
var vec__35389 = chunk__35336.cljs$core$IIndexed$_nth$arity$2(null,i__35338);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35389,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35416 = seq__35335;
var G__35417 = chunk__35336;
var G__35418 = count__35337;
var G__35419 = (i__35338 + (1));
seq__35335 = G__35416;
chunk__35336 = G__35417;
count__35337 = G__35418;
i__35338 = G__35419;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35335);
if(temp__5804__auto__){
var seq__35335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35335__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35335__$1);
var G__35420 = cljs.core.chunk_rest(seq__35335__$1);
var G__35421 = c__5568__auto__;
var G__35422 = cljs.core.count(c__5568__auto__);
var G__35423 = (0);
seq__35335 = G__35420;
chunk__35336 = G__35421;
count__35337 = G__35422;
i__35338 = G__35423;
continue;
} else {
var vec__35399 = cljs.core.first(seq__35335__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35424 = cljs.core.next(seq__35335__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35335 = G__35424;
chunk__35336 = G__35425;
count__35337 = G__35426;
i__35338 = G__35427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35278_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35278_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35294_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35294_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35296_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35296_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35297_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35297_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35406){
var map__35407 = p__35406;
var map__35407__$1 = cljs.core.__destructure_map(map__35407);
var svc = map__35407__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
