goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35598__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35599__i = 0, G__35599__a = new Array(arguments.length -  0);
while (G__35599__i < G__35599__a.length) {G__35599__a[G__35599__i] = arguments[G__35599__i + 0]; ++G__35599__i;}
  args = new cljs.core.IndexedSeq(G__35599__a,0,null);
} 
return G__35598__delegate.call(this,args);};
G__35598.cljs$lang$maxFixedArity = 0;
G__35598.cljs$lang$applyTo = (function (arglist__35600){
var args = cljs.core.seq(arglist__35600);
return G__35598__delegate(args);
});
G__35598.cljs$core$IFn$_invoke$arity$variadic = G__35598__delegate;
return G__35598;
})()
);

(o.error = (function() { 
var G__35601__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35602__i = 0, G__35602__a = new Array(arguments.length -  0);
while (G__35602__i < G__35602__a.length) {G__35602__a[G__35602__i] = arguments[G__35602__i + 0]; ++G__35602__i;}
  args = new cljs.core.IndexedSeq(G__35602__a,0,null);
} 
return G__35601__delegate.call(this,args);};
G__35601.cljs$lang$maxFixedArity = 0;
G__35601.cljs$lang$applyTo = (function (arglist__35603){
var args = cljs.core.seq(arglist__35603);
return G__35601__delegate(args);
});
G__35601.cljs$core$IFn$_invoke$arity$variadic = G__35601__delegate;
return G__35601;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
