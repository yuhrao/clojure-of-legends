goog.provide('promesa.util');
promesa.util.has_method_QMARK_ = (function promesa$util$has_method_QMARK_(klass,name){
var methods$ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (method){
return method.getName();
})),klass.getDeclaredMethods());
return cljs.core.contains_QMARK_(methods$,name);
});
promesa.util.maybe_deref = (function promesa$util$maybe_deref(o){
if(cljs.core.delay_QMARK_(o)){
return cljs.core.deref(o);
} else {
return o;
}
});
promesa.util.mutex = (function promesa$util$mutex(){
if((typeof promesa !== 'undefined') && (typeof promesa.util !== 'undefined') && (typeof promesa.util.t_promesa$util36340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.ILock}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.util.t_promesa$util36340 = (function (meta36341){
this.meta36341 = meta36341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.util.t_promesa$util36340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36342,meta36341__$1){
var self__ = this;
var _36342__$1 = this;
return (new promesa.util.t_promesa$util36340(meta36341__$1));
}));

(promesa.util.t_promesa$util36340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36342){
var self__ = this;
var _36342__$1 = this;
return self__.meta36341;
}));

(promesa.util.t_promesa$util36340.prototype.promesa$protocols$ILock$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.util.t_promesa$util36340.prototype.promesa$protocols$ILock$_lock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util36340.prototype.promesa$protocols$ILock$_unlock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util36340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null)], null);
}));

(promesa.util.t_promesa$util36340.cljs$lang$type = true);

(promesa.util.t_promesa$util36340.cljs$lang$ctorStr = "promesa.util/t_promesa$util36340");

(promesa.util.t_promesa$util36340.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"promesa.util/t_promesa$util36340");
}));

/**
 * Positional factory function for promesa.util/t_promesa$util36340.
 */
promesa.util.__GT_t_promesa$util36340 = (function promesa$util$mutex_$___GT_t_promesa$util36340(meta36341){
return (new promesa.util.t_promesa$util36340(meta36341));
});

}

return (new promesa.util.t_promesa$util36340(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=promesa.util.js.map
