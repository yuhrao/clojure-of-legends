goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29542 = arguments.length;
switch (G__29542) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29547 = (function (f,blockable,meta29548){
this.f = f;
this.blockable = blockable;
this.meta29548 = meta29548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29549,meta29548__$1){
var self__ = this;
var _29549__$1 = this;
return (new cljs.core.async.t_cljs$core$async29547(self__.f,self__.blockable,meta29548__$1));
}));

(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29549){
var self__ = this;
var _29549__$1 = this;
return self__.meta29548;
}));

(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29548","meta29548",413365148,null)], null);
}));

(cljs.core.async.t_cljs$core$async29547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29547");

(cljs.core.async.t_cljs$core$async29547.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29547.
 */
cljs.core.async.__GT_t_cljs$core$async29547 = (function cljs$core$async$__GT_t_cljs$core$async29547(f__$1,blockable__$1,meta29548){
return (new cljs.core.async.t_cljs$core$async29547(f__$1,blockable__$1,meta29548));
});

}

return (new cljs.core.async.t_cljs$core$async29547(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29587 = arguments.length;
switch (G__29587) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29605 = arguments.length;
switch (G__29605) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29630 = arguments.length;
switch (G__29630) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33515 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33515) : fn1.call(null,val_33515));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33515) : fn1.call(null,val_33515));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___33524 = n;
var x_33525 = (0);
while(true){
if((x_33525 < n__5636__auto___33524)){
(a[x_33525] = x_33525);

var G__33526 = (x_33525 + (1));
x_33525 = G__33526;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29683 = (function (flag,meta29684){
this.flag = flag;
this.meta29684 = meta29684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29685,meta29684__$1){
var self__ = this;
var _29685__$1 = this;
return (new cljs.core.async.t_cljs$core$async29683(self__.flag,meta29684__$1));
}));

(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29685){
var self__ = this;
var _29685__$1 = this;
return self__.meta29684;
}));

(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29684","meta29684",1028294089,null)], null);
}));

(cljs.core.async.t_cljs$core$async29683.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29683");

(cljs.core.async.t_cljs$core$async29683.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29683");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29683.
 */
cljs.core.async.__GT_t_cljs$core$async29683 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29683(flag__$1,meta29684){
return (new cljs.core.async.t_cljs$core$async29683(flag__$1,meta29684));
});

}

return (new cljs.core.async.t_cljs$core$async29683(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29714 = (function (flag,cb,meta29715){
this.flag = flag;
this.cb = cb;
this.meta29715 = meta29715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29716,meta29715__$1){
var self__ = this;
var _29716__$1 = this;
return (new cljs.core.async.t_cljs$core$async29714(self__.flag,self__.cb,meta29715__$1));
}));

(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29716){
var self__ = this;
var _29716__$1 = this;
return self__.meta29715;
}));

(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29715","meta29715",-579081263,null)], null);
}));

(cljs.core.async.t_cljs$core$async29714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29714");

(cljs.core.async.t_cljs$core$async29714.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29714.
 */
cljs.core.async.__GT_t_cljs$core$async29714 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29714(flag__$1,cb__$1,meta29715){
return (new cljs.core.async.t_cljs$core$async29714(flag__$1,cb__$1,meta29715));
});

}

return (new cljs.core.async.t_cljs$core$async29714(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29725_SHARP_){
var G__29733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29725_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29733) : fret.call(null,G__29733));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29726_SHARP_){
var G__29734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29726_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29734) : fret.call(null,G__29734));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33551 = (i + (1));
i = G__33551;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33557 = arguments.length;
var i__5770__auto___33558 = (0);
while(true){
if((i__5770__auto___33558 < len__5769__auto___33557)){
args__5775__auto__.push((arguments[i__5770__auto___33558]));

var G__33561 = (i__5770__auto___33558 + (1));
i__5770__auto___33558 = G__33561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29758){
var map__29759 = p__29758;
var map__29759__$1 = cljs.core.__destructure_map(map__29759);
var opts = map__29759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29755){
var G__29756 = cljs.core.first(seq29755);
var seq29755__$1 = cljs.core.next(seq29755);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29756,seq29755__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29775 = arguments.length;
switch (G__29775) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29429__auto___33587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_29844){
var state_val_29846 = (state_29844[(1)]);
if((state_val_29846 === (7))){
var inst_29834 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29860_33589 = state_29844__$1;
(statearr_29860_33589[(2)] = inst_29834);

(statearr_29860_33589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (1))){
var state_29844__$1 = state_29844;
var statearr_29861_33592 = state_29844__$1;
(statearr_29861_33592[(2)] = null);

(statearr_29861_33592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (4))){
var inst_29797 = (state_29844[(7)]);
var inst_29797__$1 = (state_29844[(2)]);
var inst_29805 = (inst_29797__$1 == null);
var state_29844__$1 = (function (){var statearr_29863 = state_29844;
(statearr_29863[(7)] = inst_29797__$1);

return statearr_29863;
})();
if(cljs.core.truth_(inst_29805)){
var statearr_29864_33593 = state_29844__$1;
(statearr_29864_33593[(1)] = (5));

} else {
var statearr_29866_33594 = state_29844__$1;
(statearr_29866_33594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (13))){
var state_29844__$1 = state_29844;
var statearr_29871_33595 = state_29844__$1;
(statearr_29871_33595[(2)] = null);

(statearr_29871_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (6))){
var inst_29797 = (state_29844[(7)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29844__$1,(11),to,inst_29797);
} else {
if((state_val_29846 === (3))){
var inst_29836 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29844__$1,inst_29836);
} else {
if((state_val_29846 === (12))){
var state_29844__$1 = state_29844;
var statearr_29886_33600 = state_29844__$1;
(statearr_29886_33600[(2)] = null);

(statearr_29886_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (2))){
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29844__$1,(4),from);
} else {
if((state_val_29846 === (11))){
var inst_29819 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
if(cljs.core.truth_(inst_29819)){
var statearr_29887_33604 = state_29844__$1;
(statearr_29887_33604[(1)] = (12));

} else {
var statearr_29888_33606 = state_29844__$1;
(statearr_29888_33606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (9))){
var state_29844__$1 = state_29844;
var statearr_29891_33607 = state_29844__$1;
(statearr_29891_33607[(2)] = null);

(statearr_29891_33607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (5))){
var state_29844__$1 = state_29844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29896_33609 = state_29844__$1;
(statearr_29896_33609[(1)] = (8));

} else {
var statearr_29897_33613 = state_29844__$1;
(statearr_29897_33613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (14))){
var inst_29832 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29898_33615 = state_29844__$1;
(statearr_29898_33615[(2)] = inst_29832);

(statearr_29898_33615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (10))){
var inst_29816 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29899_33619 = state_29844__$1;
(statearr_29899_33619[(2)] = inst_29816);

(statearr_29899_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29846 === (8))){
var inst_29813 = cljs.core.async.close_BANG_(to);
var state_29844__$1 = state_29844;
var statearr_29908_33620 = state_29844__$1;
(statearr_29908_33620[(2)] = inst_29813);

(statearr_29908_33620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_29910 = [null,null,null,null,null,null,null,null];
(statearr_29910[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_29910[(1)] = (1));

return statearr_29910;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_29844){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_29844);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e29911){var ex__29057__auto__ = e29911;
var statearr_29915_33627 = state_29844;
(statearr_29915_33627[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_29844[(4)]))){
var statearr_29916_33628 = state_29844;
(statearr_29916_33628[(1)] = cljs.core.first((state_29844[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33633 = state_29844;
state_29844 = G__33633;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_29844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_29844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_29918 = f__29430__auto__();
(statearr_29918[(6)] = c__29429__auto___33587);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__29930){
var vec__29932 = p__29930;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(1),null);
var job = vec__29932;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29429__auto___33642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_29945){
var state_val_29946 = (state_29945[(1)]);
if((state_val_29946 === (1))){
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29945__$1,(2),res,v);
} else {
if((state_val_29946 === (2))){
var inst_29936 = (state_29945[(2)]);
var inst_29937 = cljs.core.async.close_BANG_(res);
var state_29945__$1 = (function (){var statearr_29949 = state_29945;
(statearr_29949[(7)] = inst_29936);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29945__$1,inst_29937);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null,null];
(statearr_29953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1 = (function (state_29945){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_29945);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e29955){var ex__29057__auto__ = e29955;
var statearr_29956_33650 = state_29945;
(statearr_29956_33650[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_29945[(4)]))){
var statearr_29957_33652 = state_29945;
(statearr_29957_33652[(1)] = cljs.core.first((state_29945[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33654 = state_29945;
state_29945 = G__33654;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = function(state_29945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1.call(this,state_29945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_29959 = f__29430__auto__();
(statearr_29959[(6)] = c__29429__auto___33642);

return statearr_29959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29960){
var vec__29961 = p__29960;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29961,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29961,(1),null);
var job = vec__29961;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___33661 = n;
var __33662 = (0);
while(true){
if((__33662 < n__5636__auto___33661)){
var G__29968_33665 = type;
var G__29968_33666__$1 = (((G__29968_33665 instanceof cljs.core.Keyword))?G__29968_33665.fqn:null);
switch (G__29968_33666__$1) {
case "compute":
var c__29429__auto___33668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33662,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = ((function (__33662,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function (state_29988){
var state_val_29991 = (state_29988[(1)]);
if((state_val_29991 === (1))){
var state_29988__$1 = state_29988;
var statearr_29997_33675 = state_29988__$1;
(statearr_29997_33675[(2)] = null);

(statearr_29997_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (2))){
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29988__$1,(4),jobs);
} else {
if((state_val_29991 === (3))){
var inst_29986 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29988__$1,inst_29986);
} else {
if((state_val_29991 === (4))){
var inst_29972 = (state_29988[(2)]);
var inst_29975 = process__$1(inst_29972);
var state_29988__$1 = state_29988;
if(cljs.core.truth_(inst_29975)){
var statearr_30003_33678 = state_29988__$1;
(statearr_30003_33678[(1)] = (5));

} else {
var statearr_30004_33679 = state_29988__$1;
(statearr_30004_33679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (5))){
var state_29988__$1 = state_29988;
var statearr_30016_33684 = state_29988__$1;
(statearr_30016_33684[(2)] = null);

(statearr_30016_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (6))){
var state_29988__$1 = state_29988;
var statearr_30028_33687 = state_29988__$1;
(statearr_30028_33687[(2)] = null);

(statearr_30028_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29991 === (7))){
var inst_29984 = (state_29988[(2)]);
var state_29988__$1 = state_29988;
var statearr_30046_33689 = state_29988__$1;
(statearr_30046_33689[(2)] = inst_29984);

(statearr_30046_33689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33662,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
;
return ((function (__33662,switch__29053__auto__,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_30055 = [null,null,null,null,null,null,null];
(statearr_30055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__);

(statearr_30055[(1)] = (1));

return statearr_30055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1 = (function (state_29988){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_29988);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30056){var ex__29057__auto__ = e30056;
var statearr_30060_33698 = state_29988;
(statearr_30060_33698[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_29988[(4)]))){
var statearr_30064_33699 = state_29988;
(statearr_30064_33699[(1)] = cljs.core.first((state_29988[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33700 = state_29988;
state_29988 = G__33700;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = function(state_29988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1.call(this,state_29988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__;
})()
;})(__33662,switch__29053__auto__,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
})();
var state__29431__auto__ = (function (){var statearr_30072 = f__29430__auto__();
(statearr_30072[(6)] = c__29429__auto___33668);

return statearr_30072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
});})(__33662,c__29429__auto___33668,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
);


break;
case "async":
var c__29429__auto___33705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33662,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = ((function (__33662,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function (state_30086){
var state_val_30087 = (state_30086[(1)]);
if((state_val_30087 === (1))){
var state_30086__$1 = state_30086;
var statearr_30088_33707 = state_30086__$1;
(statearr_30088_33707[(2)] = null);

(statearr_30088_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (2))){
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30086__$1,(4),jobs);
} else {
if((state_val_30087 === (3))){
var inst_30084 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30086__$1,inst_30084);
} else {
if((state_val_30087 === (4))){
var inst_30075 = (state_30086[(2)]);
var inst_30076 = async(inst_30075);
var state_30086__$1 = state_30086;
if(cljs.core.truth_(inst_30076)){
var statearr_30094_33711 = state_30086__$1;
(statearr_30094_33711[(1)] = (5));

} else {
var statearr_30095_33713 = state_30086__$1;
(statearr_30095_33713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (5))){
var state_30086__$1 = state_30086;
var statearr_30098_33714 = state_30086__$1;
(statearr_30098_33714[(2)] = null);

(statearr_30098_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (6))){
var state_30086__$1 = state_30086;
var statearr_30100_33719 = state_30086__$1;
(statearr_30100_33719[(2)] = null);

(statearr_30100_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30087 === (7))){
var inst_30081 = (state_30086[(2)]);
var state_30086__$1 = state_30086;
var statearr_30101_33722 = state_30086__$1;
(statearr_30101_33722[(2)] = inst_30081);

(statearr_30101_33722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33662,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
;
return ((function (__33662,switch__29053__auto__,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_30102 = [null,null,null,null,null,null,null];
(statearr_30102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__);

(statearr_30102[(1)] = (1));

return statearr_30102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1 = (function (state_30086){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30086);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30110){var ex__29057__auto__ = e30110;
var statearr_30111_33725 = state_30086;
(statearr_30111_33725[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30086[(4)]))){
var statearr_30112_33726 = state_30086;
(statearr_30112_33726[(1)] = cljs.core.first((state_30086[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33727 = state_30086;
state_30086 = G__33727;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = function(state_30086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1.call(this,state_30086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__;
})()
;})(__33662,switch__29053__auto__,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
})();
var state__29431__auto__ = (function (){var statearr_30113 = f__29430__auto__();
(statearr_30113[(6)] = c__29429__auto___33705);

return statearr_30113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
});})(__33662,c__29429__auto___33705,G__29968_33665,G__29968_33666__$1,n__5636__auto___33661,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29968_33666__$1)].join('')));

}

var G__33729 = (__33662 + (1));
__33662 = G__33729;
continue;
} else {
}
break;
}

var c__29429__auto___33730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (7))){
var inst_30135 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30144_33731 = state_30139__$1;
(statearr_30144_33731[(2)] = inst_30135);

(statearr_30144_33731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (1))){
var state_30139__$1 = state_30139;
var statearr_30146_33733 = state_30139__$1;
(statearr_30146_33733[(2)] = null);

(statearr_30146_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (4))){
var inst_30117 = (state_30139[(7)]);
var inst_30117__$1 = (state_30139[(2)]);
var inst_30118 = (inst_30117__$1 == null);
var state_30139__$1 = (function (){var statearr_30152 = state_30139;
(statearr_30152[(7)] = inst_30117__$1);

return statearr_30152;
})();
if(cljs.core.truth_(inst_30118)){
var statearr_30153_33742 = state_30139__$1;
(statearr_30153_33742[(1)] = (5));

} else {
var statearr_30154_33743 = state_30139__$1;
(statearr_30154_33743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (6))){
var inst_30122 = (state_30139[(8)]);
var inst_30117 = (state_30139[(7)]);
var inst_30122__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30124 = [inst_30117,inst_30122__$1];
var inst_30125 = (new cljs.core.PersistentVector(null,2,(5),inst_30123,inst_30124,null));
var state_30139__$1 = (function (){var statearr_30159 = state_30139;
(statearr_30159[(8)] = inst_30122__$1);

return statearr_30159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30139__$1,(8),jobs,inst_30125);
} else {
if((state_val_30140 === (3))){
var inst_30137 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30139__$1,inst_30137);
} else {
if((state_val_30140 === (2))){
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30139__$1,(4),from);
} else {
if((state_val_30140 === (9))){
var inst_30129 = (state_30139[(2)]);
var state_30139__$1 = (function (){var statearr_30166 = state_30139;
(statearr_30166[(9)] = inst_30129);

return statearr_30166;
})();
var statearr_30167_33745 = state_30139__$1;
(statearr_30167_33745[(2)] = null);

(statearr_30167_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (5))){
var inst_30120 = cljs.core.async.close_BANG_(jobs);
var state_30139__$1 = state_30139;
var statearr_30170_33746 = state_30139__$1;
(statearr_30170_33746[(2)] = inst_30120);

(statearr_30170_33746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (8))){
var inst_30122 = (state_30139[(8)]);
var inst_30127 = (state_30139[(2)]);
var state_30139__$1 = (function (){var statearr_30171 = state_30139;
(statearr_30171[(10)] = inst_30127);

return statearr_30171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30139__$1,(9),results,inst_30122);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_30173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__);

(statearr_30173[(1)] = (1));

return statearr_30173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1 = (function (state_30139){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30139);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30174){var ex__29057__auto__ = e30174;
var statearr_30181_33756 = state_30139;
(statearr_30181_33756[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30139[(4)]))){
var statearr_30182_33757 = state_30139;
(statearr_30182_33757[(1)] = cljs.core.first((state_30139[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_30139;
state_30139 = G__33758;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30186 = f__29430__auto__();
(statearr_30186[(6)] = c__29429__auto___33730);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


var c__29429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30241){
var state_val_30242 = (state_30241[(1)]);
if((state_val_30242 === (7))){
var inst_30237 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30243_33760 = state_30241__$1;
(statearr_30243_33760[(2)] = inst_30237);

(statearr_30243_33760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (20))){
var state_30241__$1 = state_30241;
var statearr_30244_33761 = state_30241__$1;
(statearr_30244_33761[(2)] = null);

(statearr_30244_33761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (1))){
var state_30241__$1 = state_30241;
var statearr_30245_33762 = state_30241__$1;
(statearr_30245_33762[(2)] = null);

(statearr_30245_33762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (4))){
var inst_30198 = (state_30241[(7)]);
var inst_30198__$1 = (state_30241[(2)]);
var inst_30205 = (inst_30198__$1 == null);
var state_30241__$1 = (function (){var statearr_30246 = state_30241;
(statearr_30246[(7)] = inst_30198__$1);

return statearr_30246;
})();
if(cljs.core.truth_(inst_30205)){
var statearr_30247_33766 = state_30241__$1;
(statearr_30247_33766[(1)] = (5));

} else {
var statearr_30248_33768 = state_30241__$1;
(statearr_30248_33768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (15))){
var inst_30218 = (state_30241[(8)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30241__$1,(18),to,inst_30218);
} else {
if((state_val_30242 === (21))){
var inst_30232 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30249_33769 = state_30241__$1;
(statearr_30249_33769[(2)] = inst_30232);

(statearr_30249_33769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (13))){
var inst_30234 = (state_30241[(2)]);
var state_30241__$1 = (function (){var statearr_30251 = state_30241;
(statearr_30251[(9)] = inst_30234);

return statearr_30251;
})();
var statearr_30252_33771 = state_30241__$1;
(statearr_30252_33771[(2)] = null);

(statearr_30252_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (6))){
var inst_30198 = (state_30241[(7)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30241__$1,(11),inst_30198);
} else {
if((state_val_30242 === (17))){
var inst_30227 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
if(cljs.core.truth_(inst_30227)){
var statearr_30254_33772 = state_30241__$1;
(statearr_30254_33772[(1)] = (19));

} else {
var statearr_30255_33773 = state_30241__$1;
(statearr_30255_33773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (3))){
var inst_30239 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30241__$1,inst_30239);
} else {
if((state_val_30242 === (12))){
var inst_30215 = (state_30241[(10)]);
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30241__$1,(14),inst_30215);
} else {
if((state_val_30242 === (2))){
var state_30241__$1 = state_30241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30241__$1,(4),results);
} else {
if((state_val_30242 === (19))){
var state_30241__$1 = state_30241;
var statearr_30256_33785 = state_30241__$1;
(statearr_30256_33785[(2)] = null);

(statearr_30256_33785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (11))){
var inst_30215 = (state_30241[(2)]);
var state_30241__$1 = (function (){var statearr_30257 = state_30241;
(statearr_30257[(10)] = inst_30215);

return statearr_30257;
})();
var statearr_30258_33790 = state_30241__$1;
(statearr_30258_33790[(2)] = null);

(statearr_30258_33790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (9))){
var state_30241__$1 = state_30241;
var statearr_30259_33795 = state_30241__$1;
(statearr_30259_33795[(2)] = null);

(statearr_30259_33795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (5))){
var state_30241__$1 = state_30241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30262_33796 = state_30241__$1;
(statearr_30262_33796[(1)] = (8));

} else {
var statearr_30267_33797 = state_30241__$1;
(statearr_30267_33797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (14))){
var inst_30218 = (state_30241[(8)]);
var inst_30221 = (state_30241[(11)]);
var inst_30218__$1 = (state_30241[(2)]);
var inst_30220 = (inst_30218__$1 == null);
var inst_30221__$1 = cljs.core.not(inst_30220);
var state_30241__$1 = (function (){var statearr_30274 = state_30241;
(statearr_30274[(8)] = inst_30218__$1);

(statearr_30274[(11)] = inst_30221__$1);

return statearr_30274;
})();
if(inst_30221__$1){
var statearr_30278_33799 = state_30241__$1;
(statearr_30278_33799[(1)] = (15));

} else {
var statearr_30279_33800 = state_30241__$1;
(statearr_30279_33800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (16))){
var inst_30221 = (state_30241[(11)]);
var state_30241__$1 = state_30241;
var statearr_30283_33801 = state_30241__$1;
(statearr_30283_33801[(2)] = inst_30221);

(statearr_30283_33801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (10))){
var inst_30212 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30284_33802 = state_30241__$1;
(statearr_30284_33802[(2)] = inst_30212);

(statearr_30284_33802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (18))){
var inst_30224 = (state_30241[(2)]);
var state_30241__$1 = state_30241;
var statearr_30288_33803 = state_30241__$1;
(statearr_30288_33803[(2)] = inst_30224);

(statearr_30288_33803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30242 === (8))){
var inst_30209 = cljs.core.async.close_BANG_(to);
var state_30241__$1 = state_30241;
var statearr_30295_33804 = state_30241__$1;
(statearr_30295_33804[(2)] = inst_30209);

(statearr_30295_33804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_30303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__);

(statearr_30303[(1)] = (1));

return statearr_30303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1 = (function (state_30241){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30241);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30304){var ex__29057__auto__ = e30304;
var statearr_30306_33805 = state_30241;
(statearr_30306_33805[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30241[(4)]))){
var statearr_30307_33806 = state_30241;
(statearr_30307_33806[(1)] = cljs.core.first((state_30241[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33807 = state_30241;
state_30241 = G__33807;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__ = function(state_30241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1.call(this,state_30241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30308 = f__29430__auto__();
(statearr_30308[(6)] = c__29429__auto__);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

return c__29429__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30314 = arguments.length;
switch (G__30314) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30342 = arguments.length;
switch (G__30342) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30360 = arguments.length;
switch (G__30360) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29429__auto___33819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30394){
var state_val_30395 = (state_30394[(1)]);
if((state_val_30395 === (7))){
var inst_30390 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
var statearr_30406_33820 = state_30394__$1;
(statearr_30406_33820[(2)] = inst_30390);

(statearr_30406_33820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (1))){
var state_30394__$1 = state_30394;
var statearr_30414_33821 = state_30394__$1;
(statearr_30414_33821[(2)] = null);

(statearr_30414_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (4))){
var inst_30369 = (state_30394[(7)]);
var inst_30369__$1 = (state_30394[(2)]);
var inst_30370 = (inst_30369__$1 == null);
var state_30394__$1 = (function (){var statearr_30420 = state_30394;
(statearr_30420[(7)] = inst_30369__$1);

return statearr_30420;
})();
if(cljs.core.truth_(inst_30370)){
var statearr_30421_33822 = state_30394__$1;
(statearr_30421_33822[(1)] = (5));

} else {
var statearr_30422_33823 = state_30394__$1;
(statearr_30422_33823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (13))){
var state_30394__$1 = state_30394;
var statearr_30425_33824 = state_30394__$1;
(statearr_30425_33824[(2)] = null);

(statearr_30425_33824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (6))){
var inst_30369 = (state_30394[(7)]);
var inst_30377 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30369) : p.call(null,inst_30369));
var state_30394__$1 = state_30394;
if(cljs.core.truth_(inst_30377)){
var statearr_30444_33828 = state_30394__$1;
(statearr_30444_33828[(1)] = (9));

} else {
var statearr_30454_33829 = state_30394__$1;
(statearr_30454_33829[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (3))){
var inst_30392 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30394__$1,inst_30392);
} else {
if((state_val_30395 === (12))){
var state_30394__$1 = state_30394;
var statearr_30461_33830 = state_30394__$1;
(statearr_30461_33830[(2)] = null);

(statearr_30461_33830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (2))){
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30394__$1,(4),ch);
} else {
if((state_val_30395 === (11))){
var inst_30369 = (state_30394[(7)]);
var inst_30381 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30394__$1,(8),inst_30381,inst_30369);
} else {
if((state_val_30395 === (9))){
var state_30394__$1 = state_30394;
var statearr_30484_33832 = state_30394__$1;
(statearr_30484_33832[(2)] = tc);

(statearr_30484_33832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (5))){
var inst_30372 = cljs.core.async.close_BANG_(tc);
var inst_30373 = cljs.core.async.close_BANG_(fc);
var state_30394__$1 = (function (){var statearr_30485 = state_30394;
(statearr_30485[(8)] = inst_30372);

return statearr_30485;
})();
var statearr_30486_33833 = state_30394__$1;
(statearr_30486_33833[(2)] = inst_30373);

(statearr_30486_33833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (14))){
var inst_30388 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
var statearr_30487_33834 = state_30394__$1;
(statearr_30487_33834[(2)] = inst_30388);

(statearr_30487_33834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (10))){
var state_30394__$1 = state_30394;
var statearr_30488_33835 = state_30394__$1;
(statearr_30488_33835[(2)] = fc);

(statearr_30488_33835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30395 === (8))){
var inst_30383 = (state_30394[(2)]);
var state_30394__$1 = state_30394;
if(cljs.core.truth_(inst_30383)){
var statearr_30493_33836 = state_30394__$1;
(statearr_30493_33836[(1)] = (12));

} else {
var statearr_30494_33837 = state_30394__$1;
(statearr_30494_33837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_30510 = [null,null,null,null,null,null,null,null,null];
(statearr_30510[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_30510[(1)] = (1));

return statearr_30510;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_30394){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30394);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30511){var ex__29057__auto__ = e30511;
var statearr_30512_33838 = state_30394;
(statearr_30512_33838[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30394[(4)]))){
var statearr_30513_33839 = state_30394;
(statearr_30513_33839[(1)] = cljs.core.first((state_30394[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33840 = state_30394;
state_30394 = G__33840;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_30394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_30394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30522 = f__29430__auto__();
(statearr_30522[(6)] = c__29429__auto___33819);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30564){
var state_val_30566 = (state_30564[(1)]);
if((state_val_30566 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30568_33841 = state_30564__$1;
(statearr_30568_33841[(2)] = inst_30560);

(statearr_30568_33841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (1))){
var inst_30542 = init;
var inst_30544 = inst_30542;
var state_30564__$1 = (function (){var statearr_30569 = state_30564;
(statearr_30569[(7)] = inst_30544);

return statearr_30569;
})();
var statearr_30570_33843 = state_30564__$1;
(statearr_30570_33843[(2)] = null);

(statearr_30570_33843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (4))){
var inst_30547 = (state_30564[(8)]);
var inst_30547__$1 = (state_30564[(2)]);
var inst_30548 = (inst_30547__$1 == null);
var state_30564__$1 = (function (){var statearr_30571 = state_30564;
(statearr_30571[(8)] = inst_30547__$1);

return statearr_30571;
})();
if(cljs.core.truth_(inst_30548)){
var statearr_30572_33844 = state_30564__$1;
(statearr_30572_33844[(1)] = (5));

} else {
var statearr_30573_33845 = state_30564__$1;
(statearr_30573_33845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (6))){
var inst_30551 = (state_30564[(9)]);
var inst_30547 = (state_30564[(8)]);
var inst_30544 = (state_30564[(7)]);
var inst_30551__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30544,inst_30547) : f.call(null,inst_30544,inst_30547));
var inst_30552 = cljs.core.reduced_QMARK_(inst_30551__$1);
var state_30564__$1 = (function (){var statearr_30574 = state_30564;
(statearr_30574[(9)] = inst_30551__$1);

return statearr_30574;
})();
if(inst_30552){
var statearr_30575_33847 = state_30564__$1;
(statearr_30575_33847[(1)] = (8));

} else {
var statearr_30576_33848 = state_30564__$1;
(statearr_30576_33848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30564__$1,inst_30562);
} else {
if((state_val_30566 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30564__$1,(4),ch);
} else {
if((state_val_30566 === (9))){
var inst_30551 = (state_30564[(9)]);
var inst_30544 = inst_30551;
var state_30564__$1 = (function (){var statearr_30577 = state_30564;
(statearr_30577[(7)] = inst_30544);

return statearr_30577;
})();
var statearr_30579_33849 = state_30564__$1;
(statearr_30579_33849[(2)] = null);

(statearr_30579_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (5))){
var inst_30544 = (state_30564[(7)]);
var state_30564__$1 = state_30564;
var statearr_30580_33857 = state_30564__$1;
(statearr_30580_33857[(2)] = inst_30544);

(statearr_30580_33857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (10))){
var inst_30558 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30581_33858 = state_30564__$1;
(statearr_30581_33858[(2)] = inst_30558);

(statearr_30581_33858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30566 === (8))){
var inst_30551 = (state_30564[(9)]);
var inst_30554 = cljs.core.deref(inst_30551);
var state_30564__$1 = state_30564;
var statearr_30583_33859 = state_30564__$1;
(statearr_30583_33859[(2)] = inst_30554);

(statearr_30583_33859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29054__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29054__auto____0 = (function (){
var statearr_30586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30586[(0)] = cljs$core$async$reduce_$_state_machine__29054__auto__);

(statearr_30586[(1)] = (1));

return statearr_30586;
});
var cljs$core$async$reduce_$_state_machine__29054__auto____1 = (function (state_30564){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30564);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30589){var ex__29057__auto__ = e30589;
var statearr_30591_33861 = state_30564;
(statearr_30591_33861[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30564[(4)]))){
var statearr_30592_33866 = state_30564;
(statearr_30592_33866[(1)] = cljs.core.first((state_30564[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33867 = state_30564;
state_30564 = G__33867;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29054__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29054__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29054__auto____0;
cljs$core$async$reduce_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29054__auto____1;
return cljs$core$async$reduce_$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30597 = f__29430__auto__();
(statearr_30597[(6)] = c__29429__auto__);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

return c__29429__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (1))){
var inst_30601 = cljs.core.async.reduce(f__$1,init,ch);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30606__$1,(2),inst_30601);
} else {
if((state_val_30607 === (2))){
var inst_30603 = (state_30606[(2)]);
var inst_30604 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30603) : f__$1.call(null,inst_30603));
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30606__$1,inst_30604);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29054__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29054__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null];
(statearr_30609[(0)] = cljs$core$async$transduce_$_state_machine__29054__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var cljs$core$async$transduce_$_state_machine__29054__auto____1 = (function (state_30606){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30606);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30610){var ex__29057__auto__ = e30610;
var statearr_30611_33868 = state_30606;
(statearr_30611_33868[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30606[(4)]))){
var statearr_30613_33871 = state_30606;
(statearr_30613_33871[(1)] = cljs.core.first((state_30606[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33872 = state_30606;
state_30606 = G__33872;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29054__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29054__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29054__auto____0;
cljs$core$async$transduce_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29054__auto____1;
return cljs$core$async$transduce_$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30624 = f__29430__auto__();
(statearr_30624[(6)] = c__29429__auto__);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

return c__29429__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30626 = arguments.length;
switch (G__30626) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30652){
var state_val_30653 = (state_30652[(1)]);
if((state_val_30653 === (7))){
var inst_30634 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30657_33876 = state_30652__$1;
(statearr_30657_33876[(2)] = inst_30634);

(statearr_30657_33876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (1))){
var inst_30627 = cljs.core.seq(coll);
var inst_30628 = inst_30627;
var state_30652__$1 = (function (){var statearr_30658 = state_30652;
(statearr_30658[(7)] = inst_30628);

return statearr_30658;
})();
var statearr_30660_33877 = state_30652__$1;
(statearr_30660_33877[(2)] = null);

(statearr_30660_33877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (4))){
var inst_30628 = (state_30652[(7)]);
var inst_30632 = cljs.core.first(inst_30628);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30652__$1,(7),ch,inst_30632);
} else {
if((state_val_30653 === (13))){
var inst_30646 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30665_33878 = state_30652__$1;
(statearr_30665_33878[(2)] = inst_30646);

(statearr_30665_33878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (6))){
var inst_30637 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30637)){
var statearr_30666_33879 = state_30652__$1;
(statearr_30666_33879[(1)] = (8));

} else {
var statearr_30668_33880 = state_30652__$1;
(statearr_30668_33880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (3))){
var inst_30650 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30652__$1,inst_30650);
} else {
if((state_val_30653 === (12))){
var state_30652__$1 = state_30652;
var statearr_30672_33881 = state_30652__$1;
(statearr_30672_33881[(2)] = null);

(statearr_30672_33881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (2))){
var inst_30628 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
if(cljs.core.truth_(inst_30628)){
var statearr_30673_33882 = state_30652__$1;
(statearr_30673_33882[(1)] = (4));

} else {
var statearr_30675_33884 = state_30652__$1;
(statearr_30675_33884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (11))){
var inst_30643 = cljs.core.async.close_BANG_(ch);
var state_30652__$1 = state_30652;
var statearr_30680_33885 = state_30652__$1;
(statearr_30680_33885[(2)] = inst_30643);

(statearr_30680_33885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (9))){
var state_30652__$1 = state_30652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30681_33886 = state_30652__$1;
(statearr_30681_33886[(1)] = (11));

} else {
var statearr_30682_33887 = state_30652__$1;
(statearr_30682_33887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (5))){
var inst_30628 = (state_30652[(7)]);
var state_30652__$1 = state_30652;
var statearr_30684_33888 = state_30652__$1;
(statearr_30684_33888[(2)] = inst_30628);

(statearr_30684_33888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (10))){
var inst_30648 = (state_30652[(2)]);
var state_30652__$1 = state_30652;
var statearr_30685_33890 = state_30652__$1;
(statearr_30685_33890[(2)] = inst_30648);

(statearr_30685_33890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30653 === (8))){
var inst_30628 = (state_30652[(7)]);
var inst_30639 = cljs.core.next(inst_30628);
var inst_30628__$1 = inst_30639;
var state_30652__$1 = (function (){var statearr_30686 = state_30652;
(statearr_30686[(7)] = inst_30628__$1);

return statearr_30686;
})();
var statearr_30689_33891 = state_30652__$1;
(statearr_30689_33891[(2)] = null);

(statearr_30689_33891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_30691 = [null,null,null,null,null,null,null,null];
(statearr_30691[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_30691[(1)] = (1));

return statearr_30691;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_30652){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30652);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e30692){var ex__29057__auto__ = e30692;
var statearr_30693_33892 = state_30652;
(statearr_30693_33892[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30652[(4)]))){
var statearr_30694_33894 = state_30652;
(statearr_30694_33894[(1)] = cljs.core.first((state_30652[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33895 = state_30652;
state_30652 = G__33895;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_30652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_30652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_30699 = f__29430__auto__();
(statearr_30699[(6)] = c__29429__auto__);

return statearr_30699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

return c__29429__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30706 = arguments.length;
switch (G__30706) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33898 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33898(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33899 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33899(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33900 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33900(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33905 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33905(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30750 = (function (ch,cs,meta30751){
this.ch = ch;
this.cs = cs;
this.meta30751 = meta30751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30752,meta30751__$1){
var self__ = this;
var _30752__$1 = this;
return (new cljs.core.async.t_cljs$core$async30750(self__.ch,self__.cs,meta30751__$1));
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30752){
var self__ = this;
var _30752__$1 = this;
return self__.meta30751;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30751","meta30751",-1968941736,null)], null);
}));

(cljs.core.async.t_cljs$core$async30750.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30750");

(cljs.core.async.t_cljs$core$async30750.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30750");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30750.
 */
cljs.core.async.__GT_t_cljs$core$async30750 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30750(ch__$1,cs__$1,meta30751){
return (new cljs.core.async.t_cljs$core$async30750(ch__$1,cs__$1,meta30751));
});

}

return (new cljs.core.async.t_cljs$core$async30750(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29429__auto___33923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_30944){
var state_val_30945 = (state_30944[(1)]);
if((state_val_30945 === (7))){
var inst_30933 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30948_33924 = state_30944__$1;
(statearr_30948_33924[(2)] = inst_30933);

(statearr_30948_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (20))){
var inst_30826 = (state_30944[(7)]);
var inst_30840 = cljs.core.first(inst_30826);
var inst_30841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30840,(0),null);
var inst_30842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30840,(1),null);
var state_30944__$1 = (function (){var statearr_30952 = state_30944;
(statearr_30952[(8)] = inst_30841);

return statearr_30952;
})();
if(cljs.core.truth_(inst_30842)){
var statearr_30953_33931 = state_30944__$1;
(statearr_30953_33931[(1)] = (22));

} else {
var statearr_30954_33932 = state_30944__$1;
(statearr_30954_33932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (27))){
var inst_30786 = (state_30944[(9)]);
var inst_30874 = (state_30944[(10)]);
var inst_30883 = (state_30944[(11)]);
var inst_30876 = (state_30944[(12)]);
var inst_30883__$1 = cljs.core._nth(inst_30874,inst_30876);
var inst_30884 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30883__$1,inst_30786,done);
var state_30944__$1 = (function (){var statearr_30961 = state_30944;
(statearr_30961[(11)] = inst_30883__$1);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30884)){
var statearr_30962_33933 = state_30944__$1;
(statearr_30962_33933[(1)] = (30));

} else {
var statearr_30963_33934 = state_30944__$1;
(statearr_30963_33934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (1))){
var state_30944__$1 = state_30944;
var statearr_30964_33936 = state_30944__$1;
(statearr_30964_33936[(2)] = null);

(statearr_30964_33936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (24))){
var inst_30826 = (state_30944[(7)]);
var inst_30847 = (state_30944[(2)]);
var inst_30848 = cljs.core.next(inst_30826);
var inst_30798 = inst_30848;
var inst_30799 = null;
var inst_30800 = (0);
var inst_30801 = (0);
var state_30944__$1 = (function (){var statearr_30974 = state_30944;
(statearr_30974[(13)] = inst_30799);

(statearr_30974[(14)] = inst_30800);

(statearr_30974[(15)] = inst_30847);

(statearr_30974[(16)] = inst_30801);

(statearr_30974[(17)] = inst_30798);

return statearr_30974;
})();
var statearr_30975_33941 = state_30944__$1;
(statearr_30975_33941[(2)] = null);

(statearr_30975_33941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (39))){
var state_30944__$1 = state_30944;
var statearr_30979_33944 = state_30944__$1;
(statearr_30979_33944[(2)] = null);

(statearr_30979_33944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (4))){
var inst_30786 = (state_30944[(9)]);
var inst_30786__$1 = (state_30944[(2)]);
var inst_30788 = (inst_30786__$1 == null);
var state_30944__$1 = (function (){var statearr_30980 = state_30944;
(statearr_30980[(9)] = inst_30786__$1);

return statearr_30980;
})();
if(cljs.core.truth_(inst_30788)){
var statearr_30981_33945 = state_30944__$1;
(statearr_30981_33945[(1)] = (5));

} else {
var statearr_30982_33946 = state_30944__$1;
(statearr_30982_33946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (15))){
var inst_30799 = (state_30944[(13)]);
var inst_30800 = (state_30944[(14)]);
var inst_30801 = (state_30944[(16)]);
var inst_30798 = (state_30944[(17)]);
var inst_30821 = (state_30944[(2)]);
var inst_30822 = (inst_30801 + (1));
var tmp30976 = inst_30799;
var tmp30977 = inst_30800;
var tmp30978 = inst_30798;
var inst_30798__$1 = tmp30978;
var inst_30799__$1 = tmp30976;
var inst_30800__$1 = tmp30977;
var inst_30801__$1 = inst_30822;
var state_30944__$1 = (function (){var statearr_30984 = state_30944;
(statearr_30984[(13)] = inst_30799__$1);

(statearr_30984[(14)] = inst_30800__$1);

(statearr_30984[(18)] = inst_30821);

(statearr_30984[(16)] = inst_30801__$1);

(statearr_30984[(17)] = inst_30798__$1);

return statearr_30984;
})();
var statearr_30985_33947 = state_30944__$1;
(statearr_30985_33947[(2)] = null);

(statearr_30985_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (21))){
var inst_30851 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_30989_33948 = state_30944__$1;
(statearr_30989_33948[(2)] = inst_30851);

(statearr_30989_33948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (31))){
var inst_30883 = (state_30944[(11)]);
var inst_30887 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30883);
var state_30944__$1 = state_30944;
var statearr_30990_33959 = state_30944__$1;
(statearr_30990_33959[(2)] = inst_30887);

(statearr_30990_33959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (32))){
var inst_30873 = (state_30944[(19)]);
var inst_30874 = (state_30944[(10)]);
var inst_30876 = (state_30944[(12)]);
var inst_30875 = (state_30944[(20)]);
var inst_30889 = (state_30944[(2)]);
var inst_30890 = (inst_30876 + (1));
var tmp30986 = inst_30873;
var tmp30987 = inst_30874;
var tmp30988 = inst_30875;
var inst_30873__$1 = tmp30986;
var inst_30874__$1 = tmp30987;
var inst_30875__$1 = tmp30988;
var inst_30876__$1 = inst_30890;
var state_30944__$1 = (function (){var statearr_30995 = state_30944;
(statearr_30995[(21)] = inst_30889);

(statearr_30995[(19)] = inst_30873__$1);

(statearr_30995[(10)] = inst_30874__$1);

(statearr_30995[(12)] = inst_30876__$1);

(statearr_30995[(20)] = inst_30875__$1);

return statearr_30995;
})();
var statearr_30998_33963 = state_30944__$1;
(statearr_30998_33963[(2)] = null);

(statearr_30998_33963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (40))){
var inst_30906 = (state_30944[(22)]);
var inst_30910 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30906);
var state_30944__$1 = state_30944;
var statearr_30999_33964 = state_30944__$1;
(statearr_30999_33964[(2)] = inst_30910);

(statearr_30999_33964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (33))){
var inst_30894 = (state_30944[(23)]);
var inst_30898 = cljs.core.chunked_seq_QMARK_(inst_30894);
var state_30944__$1 = state_30944;
if(inst_30898){
var statearr_31004_33965 = state_30944__$1;
(statearr_31004_33965[(1)] = (36));

} else {
var statearr_31005_33966 = state_30944__$1;
(statearr_31005_33966[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (13))){
var inst_30815 = (state_30944[(24)]);
var inst_30818 = cljs.core.async.close_BANG_(inst_30815);
var state_30944__$1 = state_30944;
var statearr_31008_33976 = state_30944__$1;
(statearr_31008_33976[(2)] = inst_30818);

(statearr_31008_33976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (22))){
var inst_30841 = (state_30944[(8)]);
var inst_30844 = cljs.core.async.close_BANG_(inst_30841);
var state_30944__$1 = state_30944;
var statearr_31011_33977 = state_30944__$1;
(statearr_31011_33977[(2)] = inst_30844);

(statearr_31011_33977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (36))){
var inst_30894 = (state_30944[(23)]);
var inst_30901 = cljs.core.chunk_first(inst_30894);
var inst_30902 = cljs.core.chunk_rest(inst_30894);
var inst_30903 = cljs.core.count(inst_30901);
var inst_30873 = inst_30902;
var inst_30874 = inst_30901;
var inst_30875 = inst_30903;
var inst_30876 = (0);
var state_30944__$1 = (function (){var statearr_31014 = state_30944;
(statearr_31014[(19)] = inst_30873);

(statearr_31014[(10)] = inst_30874);

(statearr_31014[(12)] = inst_30876);

(statearr_31014[(20)] = inst_30875);

return statearr_31014;
})();
var statearr_31015_33981 = state_30944__$1;
(statearr_31015_33981[(2)] = null);

(statearr_31015_33981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (41))){
var inst_30894 = (state_30944[(23)]);
var inst_30912 = (state_30944[(2)]);
var inst_30913 = cljs.core.next(inst_30894);
var inst_30873 = inst_30913;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_30944__$1 = (function (){var statearr_31022 = state_30944;
(statearr_31022[(19)] = inst_30873);

(statearr_31022[(10)] = inst_30874);

(statearr_31022[(25)] = inst_30912);

(statearr_31022[(12)] = inst_30876);

(statearr_31022[(20)] = inst_30875);

return statearr_31022;
})();
var statearr_31027_33982 = state_30944__$1;
(statearr_31027_33982[(2)] = null);

(statearr_31027_33982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (43))){
var state_30944__$1 = state_30944;
var statearr_31028_33983 = state_30944__$1;
(statearr_31028_33983[(2)] = null);

(statearr_31028_33983[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (29))){
var inst_30921 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31031_33985 = state_30944__$1;
(statearr_31031_33985[(2)] = inst_30921);

(statearr_31031_33985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (44))){
var inst_30930 = (state_30944[(2)]);
var state_30944__$1 = (function (){var statearr_31033 = state_30944;
(statearr_31033[(26)] = inst_30930);

return statearr_31033;
})();
var statearr_31036_33989 = state_30944__$1;
(statearr_31036_33989[(2)] = null);

(statearr_31036_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (6))){
var inst_30864 = (state_30944[(27)]);
var inst_30861 = cljs.core.deref(cs);
var inst_30864__$1 = cljs.core.keys(inst_30861);
var inst_30866 = cljs.core.count(inst_30864__$1);
var inst_30867 = cljs.core.reset_BANG_(dctr,inst_30866);
var inst_30872 = cljs.core.seq(inst_30864__$1);
var inst_30873 = inst_30872;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_30944__$1 = (function (){var statearr_31047 = state_30944;
(statearr_31047[(27)] = inst_30864__$1);

(statearr_31047[(19)] = inst_30873);

(statearr_31047[(10)] = inst_30874);

(statearr_31047[(28)] = inst_30867);

(statearr_31047[(12)] = inst_30876);

(statearr_31047[(20)] = inst_30875);

return statearr_31047;
})();
var statearr_31048_33991 = state_30944__$1;
(statearr_31048_33991[(2)] = null);

(statearr_31048_33991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (28))){
var inst_30873 = (state_30944[(19)]);
var inst_30894 = (state_30944[(23)]);
var inst_30894__$1 = cljs.core.seq(inst_30873);
var state_30944__$1 = (function (){var statearr_31049 = state_30944;
(statearr_31049[(23)] = inst_30894__$1);

return statearr_31049;
})();
if(inst_30894__$1){
var statearr_31050_33992 = state_30944__$1;
(statearr_31050_33992[(1)] = (33));

} else {
var statearr_31051_33993 = state_30944__$1;
(statearr_31051_33993[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (25))){
var inst_30876 = (state_30944[(12)]);
var inst_30875 = (state_30944[(20)]);
var inst_30879 = (inst_30876 < inst_30875);
var inst_30880 = inst_30879;
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30880)){
var statearr_31060_33994 = state_30944__$1;
(statearr_31060_33994[(1)] = (27));

} else {
var statearr_31061_33995 = state_30944__$1;
(statearr_31061_33995[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (34))){
var state_30944__$1 = state_30944;
var statearr_31068_33996 = state_30944__$1;
(statearr_31068_33996[(2)] = null);

(statearr_31068_33996[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (17))){
var state_30944__$1 = state_30944;
var statearr_31073_33998 = state_30944__$1;
(statearr_31073_33998[(2)] = null);

(statearr_31073_33998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (3))){
var inst_30935 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30944__$1,inst_30935);
} else {
if((state_val_30945 === (12))){
var inst_30856 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31074_33999 = state_30944__$1;
(statearr_31074_33999[(2)] = inst_30856);

(statearr_31074_33999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (2))){
var state_30944__$1 = state_30944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30944__$1,(4),ch);
} else {
if((state_val_30945 === (23))){
var state_30944__$1 = state_30944;
var statearr_31075_34000 = state_30944__$1;
(statearr_31075_34000[(2)] = null);

(statearr_31075_34000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (35))){
var inst_30919 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31077_34001 = state_30944__$1;
(statearr_31077_34001[(2)] = inst_30919);

(statearr_31077_34001[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (19))){
var inst_30826 = (state_30944[(7)]);
var inst_30830 = cljs.core.chunk_first(inst_30826);
var inst_30831 = cljs.core.chunk_rest(inst_30826);
var inst_30832 = cljs.core.count(inst_30830);
var inst_30798 = inst_30831;
var inst_30799 = inst_30830;
var inst_30800 = inst_30832;
var inst_30801 = (0);
var state_30944__$1 = (function (){var statearr_31082 = state_30944;
(statearr_31082[(13)] = inst_30799);

(statearr_31082[(14)] = inst_30800);

(statearr_31082[(16)] = inst_30801);

(statearr_31082[(17)] = inst_30798);

return statearr_31082;
})();
var statearr_31083_34007 = state_30944__$1;
(statearr_31083_34007[(2)] = null);

(statearr_31083_34007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (11))){
var inst_30826 = (state_30944[(7)]);
var inst_30798 = (state_30944[(17)]);
var inst_30826__$1 = cljs.core.seq(inst_30798);
var state_30944__$1 = (function (){var statearr_31084 = state_30944;
(statearr_31084[(7)] = inst_30826__$1);

return statearr_31084;
})();
if(inst_30826__$1){
var statearr_31085_34013 = state_30944__$1;
(statearr_31085_34013[(1)] = (16));

} else {
var statearr_31086_34014 = state_30944__$1;
(statearr_31086_34014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (9))){
var inst_30858 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31087_34015 = state_30944__$1;
(statearr_31087_34015[(2)] = inst_30858);

(statearr_31087_34015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (5))){
var inst_30796 = cljs.core.deref(cs);
var inst_30797 = cljs.core.seq(inst_30796);
var inst_30798 = inst_30797;
var inst_30799 = null;
var inst_30800 = (0);
var inst_30801 = (0);
var state_30944__$1 = (function (){var statearr_31092 = state_30944;
(statearr_31092[(13)] = inst_30799);

(statearr_31092[(14)] = inst_30800);

(statearr_31092[(16)] = inst_30801);

(statearr_31092[(17)] = inst_30798);

return statearr_31092;
})();
var statearr_31102_34016 = state_30944__$1;
(statearr_31102_34016[(2)] = null);

(statearr_31102_34016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (14))){
var state_30944__$1 = state_30944;
var statearr_31104_34017 = state_30944__$1;
(statearr_31104_34017[(2)] = null);

(statearr_31104_34017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (45))){
var inst_30927 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31113_34018 = state_30944__$1;
(statearr_31113_34018[(2)] = inst_30927);

(statearr_31113_34018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (26))){
var inst_30864 = (state_30944[(27)]);
var inst_30923 = (state_30944[(2)]);
var inst_30924 = cljs.core.seq(inst_30864);
var state_30944__$1 = (function (){var statearr_31115 = state_30944;
(statearr_31115[(29)] = inst_30923);

return statearr_31115;
})();
if(inst_30924){
var statearr_31116_34019 = state_30944__$1;
(statearr_31116_34019[(1)] = (42));

} else {
var statearr_31117_34020 = state_30944__$1;
(statearr_31117_34020[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (16))){
var inst_30826 = (state_30944[(7)]);
var inst_30828 = cljs.core.chunked_seq_QMARK_(inst_30826);
var state_30944__$1 = state_30944;
if(inst_30828){
var statearr_31119_34021 = state_30944__$1;
(statearr_31119_34021[(1)] = (19));

} else {
var statearr_31120_34022 = state_30944__$1;
(statearr_31120_34022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (38))){
var inst_30916 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31122_34024 = state_30944__$1;
(statearr_31122_34024[(2)] = inst_30916);

(statearr_31122_34024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (30))){
var state_30944__$1 = state_30944;
var statearr_31123_34025 = state_30944__$1;
(statearr_31123_34025[(2)] = null);

(statearr_31123_34025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (10))){
var inst_30799 = (state_30944[(13)]);
var inst_30801 = (state_30944[(16)]);
var inst_30814 = cljs.core._nth(inst_30799,inst_30801);
var inst_30815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30814,(0),null);
var inst_30816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30814,(1),null);
var state_30944__$1 = (function (){var statearr_31124 = state_30944;
(statearr_31124[(24)] = inst_30815);

return statearr_31124;
})();
if(cljs.core.truth_(inst_30816)){
var statearr_31125_34026 = state_30944__$1;
(statearr_31125_34026[(1)] = (13));

} else {
var statearr_31126_34028 = state_30944__$1;
(statearr_31126_34028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (18))){
var inst_30854 = (state_30944[(2)]);
var state_30944__$1 = state_30944;
var statearr_31127_34029 = state_30944__$1;
(statearr_31127_34029[(2)] = inst_30854);

(statearr_31127_34029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (42))){
var state_30944__$1 = state_30944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30944__$1,(45),dchan);
} else {
if((state_val_30945 === (37))){
var inst_30786 = (state_30944[(9)]);
var inst_30894 = (state_30944[(23)]);
var inst_30906 = (state_30944[(22)]);
var inst_30906__$1 = cljs.core.first(inst_30894);
var inst_30907 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30906__$1,inst_30786,done);
var state_30944__$1 = (function (){var statearr_31129 = state_30944;
(statearr_31129[(22)] = inst_30906__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_31130_34030 = state_30944__$1;
(statearr_31130_34030[(1)] = (39));

} else {
var statearr_31131_34031 = state_30944__$1;
(statearr_31131_34031[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30945 === (8))){
var inst_30800 = (state_30944[(14)]);
var inst_30801 = (state_30944[(16)]);
var inst_30804 = (inst_30801 < inst_30800);
var inst_30805 = inst_30804;
var state_30944__$1 = state_30944;
if(cljs.core.truth_(inst_30805)){
var statearr_31132_34037 = state_30944__$1;
(statearr_31132_34037[(1)] = (10));

} else {
var statearr_31133_34038 = state_30944__$1;
(statearr_31133_34038[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29054__auto__ = null;
var cljs$core$async$mult_$_state_machine__29054__auto____0 = (function (){
var statearr_31135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31135[(0)] = cljs$core$async$mult_$_state_machine__29054__auto__);

(statearr_31135[(1)] = (1));

return statearr_31135;
});
var cljs$core$async$mult_$_state_machine__29054__auto____1 = (function (state_30944){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_30944);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e31136){var ex__29057__auto__ = e31136;
var statearr_31137_34039 = state_30944;
(statearr_31137_34039[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_30944[(4)]))){
var statearr_31138_34040 = state_30944;
(statearr_31138_34040[(1)] = cljs.core.first((state_30944[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34041 = state_30944;
state_30944 = G__34041;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29054__auto__ = function(state_30944){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29054__auto____1.call(this,state_30944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29054__auto____0;
cljs$core$async$mult_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29054__auto____1;
return cljs$core$async$mult_$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_31142 = f__29430__auto__();
(statearr_31142[(6)] = c__29429__auto___33923);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31153 = arguments.length;
switch (G__31153) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34043 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34043(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34046 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34046(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34054 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34054(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34056 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34056(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34057 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34057(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34067 = arguments.length;
var i__5770__auto___34068 = (0);
while(true){
if((i__5770__auto___34068 < len__5769__auto___34067)){
args__5775__auto__.push((arguments[i__5770__auto___34068]));

var G__34069 = (i__5770__auto___34068 + (1));
i__5770__auto___34068 = G__34069;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31219){
var map__31221 = p__31219;
var map__31221__$1 = cljs.core.__destructure_map(map__31221);
var opts = map__31221__$1;
var statearr_31222_34073 = state;
(statearr_31222_34073[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31223_34074 = state;
(statearr_31223_34074[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31224_34075 = state;
(statearr_31224_34075[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31211){
var G__31212 = cljs.core.first(seq31211);
var seq31211__$1 = cljs.core.next(seq31211);
var G__31213 = cljs.core.first(seq31211__$1);
var seq31211__$2 = cljs.core.next(seq31211__$1);
var G__31214 = cljs.core.first(seq31211__$2);
var seq31211__$3 = cljs.core.next(seq31211__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31212,G__31213,G__31214,seq31211__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31252 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31253){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31253 = meta31253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31254,meta31253__$1){
var self__ = this;
var _31254__$1 = this;
return (new cljs.core.async.t_cljs$core$async31252(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31253__$1));
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31254){
var self__ = this;
var _31254__$1 = this;
return self__.meta31253;
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31252.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31253","meta31253",-1859478278,null)], null);
}));

(cljs.core.async.t_cljs$core$async31252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31252");

(cljs.core.async.t_cljs$core$async31252.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31252.
 */
cljs.core.async.__GT_t_cljs$core$async31252 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31253){
return (new cljs.core.async.t_cljs$core$async31252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31253));
});

}

return (new cljs.core.async.t_cljs$core$async31252(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29429__auto___34094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31309 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31309)){
var statearr_31354_34101 = state_31349__$1;
(statearr_31354_34101[(1)] = (8));

} else {
var statearr_31355_34102 = state_31349__$1;
(statearr_31355_34102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (20))){
var inst_31301 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31349__$1,(23),out,inst_31301);
} else {
if((state_val_31350 === (1))){
var inst_31283 = calc_state();
var inst_31284 = cljs.core.__destructure_map(inst_31283);
var inst_31285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31284,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31284,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31288 = inst_31283;
var state_31349__$1 = (function (){var statearr_31360 = state_31349;
(statearr_31360[(8)] = inst_31285);

(statearr_31360[(9)] = inst_31288);

(statearr_31360[(10)] = inst_31286);

(statearr_31360[(11)] = inst_31287);

return statearr_31360;
})();
var statearr_31361_34103 = state_31349__$1;
(statearr_31361_34103[(2)] = null);

(statearr_31361_34103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (24))){
var inst_31292 = (state_31349[(12)]);
var inst_31288 = inst_31292;
var state_31349__$1 = (function (){var statearr_31365 = state_31349;
(statearr_31365[(9)] = inst_31288);

return statearr_31365;
})();
var statearr_31366_34104 = state_31349__$1;
(statearr_31366_34104[(2)] = null);

(statearr_31366_34104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31301 = (state_31349[(7)]);
var inst_31304 = (state_31349[(13)]);
var inst_31300 = (state_31349[(2)]);
var inst_31301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31300,(0),null);
var inst_31302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31300,(1),null);
var inst_31304__$1 = (inst_31301__$1 == null);
var state_31349__$1 = (function (){var statearr_31369 = state_31349;
(statearr_31369[(14)] = inst_31302);

(statearr_31369[(7)] = inst_31301__$1);

(statearr_31369[(13)] = inst_31304__$1);

return statearr_31369;
})();
if(cljs.core.truth_(inst_31304__$1)){
var statearr_31371_34105 = state_31349__$1;
(statearr_31371_34105[(1)] = (5));

} else {
var statearr_31375_34106 = state_31349__$1;
(statearr_31375_34106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (15))){
var inst_31323 = (state_31349[(15)]);
var inst_31293 = (state_31349[(16)]);
var inst_31323__$1 = cljs.core.empty_QMARK_(inst_31293);
var state_31349__$1 = (function (){var statearr_31379 = state_31349;
(statearr_31379[(15)] = inst_31323__$1);

return statearr_31379;
})();
if(inst_31323__$1){
var statearr_31383_34107 = state_31349__$1;
(statearr_31383_34107[(1)] = (17));

} else {
var statearr_31384_34108 = state_31349__$1;
(statearr_31384_34108[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (21))){
var inst_31292 = (state_31349[(12)]);
var inst_31288 = inst_31292;
var state_31349__$1 = (function (){var statearr_31386 = state_31349;
(statearr_31386[(9)] = inst_31288);

return statearr_31386;
})();
var statearr_31387_34109 = state_31349__$1;
(statearr_31387_34109[(2)] = null);

(statearr_31387_34109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (13))){
var inst_31316 = (state_31349[(2)]);
var inst_31317 = calc_state();
var inst_31288 = inst_31317;
var state_31349__$1 = (function (){var statearr_31391 = state_31349;
(statearr_31391[(17)] = inst_31316);

(statearr_31391[(9)] = inst_31288);

return statearr_31391;
})();
var statearr_31392_34110 = state_31349__$1;
(statearr_31392_34110[(2)] = null);

(statearr_31392_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (22))){
var inst_31343 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31394_34111 = state_31349__$1;
(statearr_31394_34111[(2)] = inst_31343);

(statearr_31394_34111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31302 = (state_31349[(14)]);
var inst_31307 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31302,change);
var state_31349__$1 = state_31349;
var statearr_31401_34112 = state_31349__$1;
(statearr_31401_34112[(2)] = inst_31307);

(statearr_31401_34112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (25))){
var state_31349__$1 = state_31349;
var statearr_31403_34113 = state_31349__$1;
(statearr_31403_34113[(2)] = null);

(statearr_31403_34113[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (17))){
var inst_31302 = (state_31349[(14)]);
var inst_31294 = (state_31349[(18)]);
var inst_31325 = (inst_31294.cljs$core$IFn$_invoke$arity$1 ? inst_31294.cljs$core$IFn$_invoke$arity$1(inst_31302) : inst_31294.call(null,inst_31302));
var inst_31326 = cljs.core.not(inst_31325);
var state_31349__$1 = state_31349;
var statearr_31409_34114 = state_31349__$1;
(statearr_31409_34114[(2)] = inst_31326);

(statearr_31409_34114[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (12))){
var state_31349__$1 = state_31349;
var statearr_31417_34115 = state_31349__$1;
(statearr_31417_34115[(2)] = null);

(statearr_31417_34115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (2))){
var inst_31292 = (state_31349[(12)]);
var inst_31288 = (state_31349[(9)]);
var inst_31292__$1 = cljs.core.__destructure_map(inst_31288);
var inst_31293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31292__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31292__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31292__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31349__$1 = (function (){var statearr_31429 = state_31349;
(statearr_31429[(12)] = inst_31292__$1);

(statearr_31429[(18)] = inst_31294);

(statearr_31429[(16)] = inst_31293);

return statearr_31429;
})();
return cljs.core.async.ioc_alts_BANG_(state_31349__$1,(4),inst_31295);
} else {
if((state_val_31350 === (23))){
var inst_31334 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31334)){
var statearr_31431_34116 = state_31349__$1;
(statearr_31431_34116[(1)] = (24));

} else {
var statearr_31434_34117 = state_31349__$1;
(statearr_31434_34117[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (19))){
var inst_31329 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31439_34118 = state_31349__$1;
(statearr_31439_34118[(2)] = inst_31329);

(statearr_31439_34118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (11))){
var inst_31302 = (state_31349[(14)]);
var inst_31313 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31302);
var state_31349__$1 = state_31349;
var statearr_31444_34119 = state_31349__$1;
(statearr_31444_34119[(2)] = inst_31313);

(statearr_31444_34119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (9))){
var inst_31302 = (state_31349[(14)]);
var inst_31320 = (state_31349[(19)]);
var inst_31293 = (state_31349[(16)]);
var inst_31320__$1 = (inst_31293.cljs$core$IFn$_invoke$arity$1 ? inst_31293.cljs$core$IFn$_invoke$arity$1(inst_31302) : inst_31293.call(null,inst_31302));
var state_31349__$1 = (function (){var statearr_31457 = state_31349;
(statearr_31457[(19)] = inst_31320__$1);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31320__$1)){
var statearr_31459_34126 = state_31349__$1;
(statearr_31459_34126[(1)] = (14));

} else {
var statearr_31460_34127 = state_31349__$1;
(statearr_31460_34127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31304 = (state_31349[(13)]);
var state_31349__$1 = state_31349;
var statearr_31464_34128 = state_31349__$1;
(statearr_31464_34128[(2)] = inst_31304);

(statearr_31464_34128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (14))){
var inst_31320 = (state_31349[(19)]);
var state_31349__$1 = state_31349;
var statearr_31466_34129 = state_31349__$1;
(statearr_31466_34129[(2)] = inst_31320);

(statearr_31466_34129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (26))){
var inst_31339 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31467_34130 = state_31349__$1;
(statearr_31467_34130[(2)] = inst_31339);

(statearr_31467_34130[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (16))){
var inst_31331 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31331)){
var statearr_31471_34131 = state_31349__$1;
(statearr_31471_34131[(1)] = (20));

} else {
var statearr_31472_34132 = state_31349__$1;
(statearr_31472_34132[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31345 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31475_34133 = state_31349__$1;
(statearr_31475_34133[(2)] = inst_31345);

(statearr_31475_34133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (18))){
var inst_31323 = (state_31349[(15)]);
var state_31349__$1 = state_31349;
var statearr_31479_34134 = state_31349__$1;
(statearr_31479_34134[(2)] = inst_31323);

(statearr_31479_34134[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (8))){
var inst_31301 = (state_31349[(7)]);
var inst_31311 = (inst_31301 == null);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31311)){
var statearr_31481_34135 = state_31349__$1;
(statearr_31481_34135[(1)] = (11));

} else {
var statearr_31483_34136 = state_31349__$1;
(statearr_31483_34136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29054__auto__ = null;
var cljs$core$async$mix_$_state_machine__29054__auto____0 = (function (){
var statearr_31490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31490[(0)] = cljs$core$async$mix_$_state_machine__29054__auto__);

(statearr_31490[(1)] = (1));

return statearr_31490;
});
var cljs$core$async$mix_$_state_machine__29054__auto____1 = (function (state_31349){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_31349);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e31492){var ex__29057__auto__ = e31492;
var statearr_31494_34137 = state_31349;
(statearr_31494_34137[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_31349[(4)]))){
var statearr_31497_34138 = state_31349;
(statearr_31497_34138[(1)] = cljs.core.first((state_31349[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34139 = state_31349;
state_31349 = G__34139;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29054__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29054__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29054__auto____0;
cljs$core$async$mix_$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29054__auto____1;
return cljs$core$async$mix_$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_31509 = f__29430__auto__();
(statearr_31509[(6)] = c__29429__auto___34094);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34141 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34141(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34148 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34148(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34152 = (function() {
var G__34153 = null;
var G__34153__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34153__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34153 = function(p,v){
switch(arguments.length){
case 1:
return G__34153__1.call(this,p);
case 2:
return G__34153__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34153.cljs$core$IFn$_invoke$arity$1 = G__34153__1;
G__34153.cljs$core$IFn$_invoke$arity$2 = G__34153__2;
return G__34153;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31588 = arguments.length;
switch (G__31588) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34152(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34152(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31628 = arguments.length;
switch (G__31628) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31609_SHARP_){
if(cljs.core.truth_((p1__31609_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31609_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31609_SHARP_.call(null,topic)))){
return p1__31609_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31609_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31642 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31643){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31643 = meta31643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31644,meta31643__$1){
var self__ = this;
var _31644__$1 = this;
return (new cljs.core.async.t_cljs$core$async31642(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31643__$1));
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31644){
var self__ = this;
var _31644__$1 = this;
return self__.meta31643;
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31643","meta31643",-2091731544,null)], null);
}));

(cljs.core.async.t_cljs$core$async31642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31642");

(cljs.core.async.t_cljs$core$async31642.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31642.
 */
cljs.core.async.__GT_t_cljs$core$async31642 = (function cljs$core$async$__GT_t_cljs$core$async31642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31643){
return (new cljs.core.async.t_cljs$core$async31642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31643));
});

}

return (new cljs.core.async.t_cljs$core$async31642(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29429__auto___34165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_31792){
var state_val_31794 = (state_31792[(1)]);
if((state_val_31794 === (7))){
var inst_31782 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31810_34166 = state_31792__$1;
(statearr_31810_34166[(2)] = inst_31782);

(statearr_31810_34166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (20))){
var state_31792__$1 = state_31792;
var statearr_31811_34168 = state_31792__$1;
(statearr_31811_34168[(2)] = null);

(statearr_31811_34168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (1))){
var state_31792__$1 = state_31792;
var statearr_31815_34169 = state_31792__$1;
(statearr_31815_34169[(2)] = null);

(statearr_31815_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (24))){
var inst_31763 = (state_31792[(7)]);
var inst_31773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31763);
var state_31792__$1 = state_31792;
var statearr_31821_34170 = state_31792__$1;
(statearr_31821_34170[(2)] = inst_31773);

(statearr_31821_34170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (4))){
var inst_31708 = (state_31792[(8)]);
var inst_31708__$1 = (state_31792[(2)]);
var inst_31709 = (inst_31708__$1 == null);
var state_31792__$1 = (function (){var statearr_31864 = state_31792;
(statearr_31864[(8)] = inst_31708__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31866_34171 = state_31792__$1;
(statearr_31866_34171[(1)] = (5));

} else {
var statearr_31867_34172 = state_31792__$1;
(statearr_31867_34172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (15))){
var inst_31757 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31876_34173 = state_31792__$1;
(statearr_31876_34173[(2)] = inst_31757);

(statearr_31876_34173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (21))){
var inst_31779 = (state_31792[(2)]);
var state_31792__$1 = (function (){var statearr_31878 = state_31792;
(statearr_31878[(9)] = inst_31779);

return statearr_31878;
})();
var statearr_31879_34174 = state_31792__$1;
(statearr_31879_34174[(2)] = null);

(statearr_31879_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (13))){
var inst_31738 = (state_31792[(10)]);
var inst_31740 = cljs.core.chunked_seq_QMARK_(inst_31738);
var state_31792__$1 = state_31792;
if(inst_31740){
var statearr_31881_34179 = state_31792__$1;
(statearr_31881_34179[(1)] = (16));

} else {
var statearr_31882_34180 = state_31792__$1;
(statearr_31882_34180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (22))){
var inst_31770 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31770)){
var statearr_31889_34181 = state_31792__$1;
(statearr_31889_34181[(1)] = (23));

} else {
var statearr_31912_34182 = state_31792__$1;
(statearr_31912_34182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (6))){
var inst_31708 = (state_31792[(8)]);
var inst_31766 = (state_31792[(11)]);
var inst_31763 = (state_31792[(7)]);
var inst_31763__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31708) : topic_fn.call(null,inst_31708));
var inst_31764 = cljs.core.deref(mults);
var inst_31766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31764,inst_31763__$1);
var state_31792__$1 = (function (){var statearr_31938 = state_31792;
(statearr_31938[(11)] = inst_31766__$1);

(statearr_31938[(7)] = inst_31763__$1);

return statearr_31938;
})();
if(cljs.core.truth_(inst_31766__$1)){
var statearr_31940_34183 = state_31792__$1;
(statearr_31940_34183[(1)] = (19));

} else {
var statearr_31941_34184 = state_31792__$1;
(statearr_31941_34184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (25))){
var inst_31775 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31943_34185 = state_31792__$1;
(statearr_31943_34185[(2)] = inst_31775);

(statearr_31943_34185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (17))){
var inst_31738 = (state_31792[(10)]);
var inst_31748 = cljs.core.first(inst_31738);
var inst_31749 = cljs.core.async.muxch_STAR_(inst_31748);
var inst_31750 = cljs.core.async.close_BANG_(inst_31749);
var inst_31751 = cljs.core.next(inst_31738);
var inst_31719 = inst_31751;
var inst_31720 = null;
var inst_31721 = (0);
var inst_31722 = (0);
var state_31792__$1 = (function (){var statearr_31945 = state_31792;
(statearr_31945[(12)] = inst_31720);

(statearr_31945[(13)] = inst_31722);

(statearr_31945[(14)] = inst_31721);

(statearr_31945[(15)] = inst_31750);

(statearr_31945[(16)] = inst_31719);

return statearr_31945;
})();
var statearr_31946_34190 = state_31792__$1;
(statearr_31946_34190[(2)] = null);

(statearr_31946_34190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (3))){
var inst_31784 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31792__$1,inst_31784);
} else {
if((state_val_31794 === (12))){
var inst_31759 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31964_34191 = state_31792__$1;
(statearr_31964_34191[(2)] = inst_31759);

(statearr_31964_34191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (2))){
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31792__$1,(4),ch);
} else {
if((state_val_31794 === (23))){
var state_31792__$1 = state_31792;
var statearr_31966_34192 = state_31792__$1;
(statearr_31966_34192[(2)] = null);

(statearr_31966_34192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (19))){
var inst_31708 = (state_31792[(8)]);
var inst_31766 = (state_31792[(11)]);
var inst_31768 = cljs.core.async.muxch_STAR_(inst_31766);
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31792__$1,(22),inst_31768,inst_31708);
} else {
if((state_val_31794 === (11))){
var inst_31738 = (state_31792[(10)]);
var inst_31719 = (state_31792[(16)]);
var inst_31738__$1 = cljs.core.seq(inst_31719);
var state_31792__$1 = (function (){var statearr_31976 = state_31792;
(statearr_31976[(10)] = inst_31738__$1);

return statearr_31976;
})();
if(inst_31738__$1){
var statearr_31977_34194 = state_31792__$1;
(statearr_31977_34194[(1)] = (13));

} else {
var statearr_31979_34195 = state_31792__$1;
(statearr_31979_34195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (9))){
var inst_31761 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31981_34200 = state_31792__$1;
(statearr_31981_34200[(2)] = inst_31761);

(statearr_31981_34200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (5))){
var inst_31716 = cljs.core.deref(mults);
var inst_31717 = cljs.core.vals(inst_31716);
var inst_31718 = cljs.core.seq(inst_31717);
var inst_31719 = inst_31718;
var inst_31720 = null;
var inst_31721 = (0);
var inst_31722 = (0);
var state_31792__$1 = (function (){var statearr_31988 = state_31792;
(statearr_31988[(12)] = inst_31720);

(statearr_31988[(13)] = inst_31722);

(statearr_31988[(14)] = inst_31721);

(statearr_31988[(16)] = inst_31719);

return statearr_31988;
})();
var statearr_31990_34205 = state_31792__$1;
(statearr_31990_34205[(2)] = null);

(statearr_31990_34205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (14))){
var state_31792__$1 = state_31792;
var statearr_31995_34206 = state_31792__$1;
(statearr_31995_34206[(2)] = null);

(statearr_31995_34206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (16))){
var inst_31738 = (state_31792[(10)]);
var inst_31742 = cljs.core.chunk_first(inst_31738);
var inst_31743 = cljs.core.chunk_rest(inst_31738);
var inst_31744 = cljs.core.count(inst_31742);
var inst_31719 = inst_31743;
var inst_31720 = inst_31742;
var inst_31721 = inst_31744;
var inst_31722 = (0);
var state_31792__$1 = (function (){var statearr_32002 = state_31792;
(statearr_32002[(12)] = inst_31720);

(statearr_32002[(13)] = inst_31722);

(statearr_32002[(14)] = inst_31721);

(statearr_32002[(16)] = inst_31719);

return statearr_32002;
})();
var statearr_32003_34207 = state_31792__$1;
(statearr_32003_34207[(2)] = null);

(statearr_32003_34207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (10))){
var inst_31720 = (state_31792[(12)]);
var inst_31722 = (state_31792[(13)]);
var inst_31721 = (state_31792[(14)]);
var inst_31719 = (state_31792[(16)]);
var inst_31729 = cljs.core._nth(inst_31720,inst_31722);
var inst_31732 = cljs.core.async.muxch_STAR_(inst_31729);
var inst_31733 = cljs.core.async.close_BANG_(inst_31732);
var inst_31734 = (inst_31722 + (1));
var tmp31992 = inst_31720;
var tmp31993 = inst_31721;
var tmp31994 = inst_31719;
var inst_31719__$1 = tmp31994;
var inst_31720__$1 = tmp31992;
var inst_31721__$1 = tmp31993;
var inst_31722__$1 = inst_31734;
var state_31792__$1 = (function (){var statearr_32019 = state_31792;
(statearr_32019[(17)] = inst_31733);

(statearr_32019[(12)] = inst_31720__$1);

(statearr_32019[(13)] = inst_31722__$1);

(statearr_32019[(14)] = inst_31721__$1);

(statearr_32019[(16)] = inst_31719__$1);

return statearr_32019;
})();
var statearr_32025_34208 = state_31792__$1;
(statearr_32025_34208[(2)] = null);

(statearr_32025_34208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (18))){
var inst_31754 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_32031_34209 = state_31792__$1;
(statearr_32031_34209[(2)] = inst_31754);

(statearr_32031_34209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (8))){
var inst_31722 = (state_31792[(13)]);
var inst_31721 = (state_31792[(14)]);
var inst_31724 = (inst_31722 < inst_31721);
var inst_31725 = inst_31724;
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31725)){
var statearr_32035_34210 = state_31792__$1;
(statearr_32035_34210[(1)] = (10));

} else {
var statearr_32036_34212 = state_31792__$1;
(statearr_32036_34212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_32037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32037[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_32037[(1)] = (1));

return statearr_32037;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_31792){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_31792);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32038){var ex__29057__auto__ = e32038;
var statearr_32039_34214 = state_31792;
(statearr_32039_34214[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_31792[(4)]))){
var statearr_32040_34215 = state_31792;
(statearr_32040_34215[(1)] = cljs.core.first((state_31792[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34216 = state_31792;
state_31792 = G__34216;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_31792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_31792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_32050 = f__29430__auto__();
(statearr_32050[(6)] = c__29429__auto___34165);

return statearr_32050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32061 = arguments.length;
switch (G__32061) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32072 = arguments.length;
switch (G__32072) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32082 = arguments.length;
switch (G__32082) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29429__auto___34220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_32209){
var state_val_32210 = (state_32209[(1)]);
if((state_val_32210 === (7))){
var state_32209__$1 = state_32209;
var statearr_32217_34221 = state_32209__$1;
(statearr_32217_34221[(2)] = null);

(statearr_32217_34221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (1))){
var state_32209__$1 = state_32209;
var statearr_32221_34222 = state_32209__$1;
(statearr_32221_34222[(2)] = null);

(statearr_32221_34222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (4))){
var inst_32109 = (state_32209[(7)]);
var inst_32111 = (state_32209[(8)]);
var inst_32113 = (inst_32111 < inst_32109);
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32113)){
var statearr_32222_34223 = state_32209__$1;
(statearr_32222_34223[(1)] = (6));

} else {
var statearr_32223_34225 = state_32209__$1;
(statearr_32223_34225[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (15))){
var inst_32192 = (state_32209[(9)]);
var inst_32197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32192);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32209__$1,(17),out,inst_32197);
} else {
if((state_val_32210 === (13))){
var inst_32192 = (state_32209[(9)]);
var inst_32192__$1 = (state_32209[(2)]);
var inst_32193 = cljs.core.some(cljs.core.nil_QMARK_,inst_32192__$1);
var state_32209__$1 = (function (){var statearr_32227 = state_32209;
(statearr_32227[(9)] = inst_32192__$1);

return statearr_32227;
})();
if(cljs.core.truth_(inst_32193)){
var statearr_32229_34229 = state_32209__$1;
(statearr_32229_34229[(1)] = (14));

} else {
var statearr_32230_34230 = state_32209__$1;
(statearr_32230_34230[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (6))){
var state_32209__$1 = state_32209;
var statearr_32232_34231 = state_32209__$1;
(statearr_32232_34231[(2)] = null);

(statearr_32232_34231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (17))){
var inst_32199 = (state_32209[(2)]);
var state_32209__$1 = (function (){var statearr_32235 = state_32209;
(statearr_32235[(10)] = inst_32199);

return statearr_32235;
})();
var statearr_32237_34232 = state_32209__$1;
(statearr_32237_34232[(2)] = null);

(statearr_32237_34232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (3))){
var inst_32206 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32209__$1,inst_32206);
} else {
if((state_val_32210 === (12))){
var _ = (function (){var statearr_32239 = state_32209;
(statearr_32239[(4)] = cljs.core.rest((state_32209[(4)])));

return statearr_32239;
})();
var state_32209__$1 = state_32209;
var ex32233 = (state_32209__$1[(2)]);
var statearr_32241_34234 = state_32209__$1;
(statearr_32241_34234[(5)] = ex32233);


if((ex32233 instanceof Object)){
var statearr_32245_34236 = state_32209__$1;
(statearr_32245_34236[(1)] = (11));

(statearr_32245_34236[(5)] = null);

} else {
throw ex32233;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (2))){
var inst_32108 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32109 = cnt;
var inst_32111 = (0);
var state_32209__$1 = (function (){var statearr_32248 = state_32209;
(statearr_32248[(11)] = inst_32108);

(statearr_32248[(7)] = inst_32109);

(statearr_32248[(8)] = inst_32111);

return statearr_32248;
})();
var statearr_32252_34237 = state_32209__$1;
(statearr_32252_34237[(2)] = null);

(statearr_32252_34237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (11))){
var inst_32169 = (state_32209[(2)]);
var inst_32170 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32209__$1 = (function (){var statearr_32255 = state_32209;
(statearr_32255[(12)] = inst_32169);

return statearr_32255;
})();
var statearr_32256_34241 = state_32209__$1;
(statearr_32256_34241[(2)] = inst_32170);

(statearr_32256_34241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (9))){
var inst_32111 = (state_32209[(8)]);
var _ = (function (){var statearr_32261 = state_32209;
(statearr_32261[(4)] = cljs.core.cons((12),(state_32209[(4)])));

return statearr_32261;
})();
var inst_32178 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32111) : chs__$1.call(null,inst_32111));
var inst_32179 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32111) : done.call(null,inst_32111));
var inst_32180 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32178,inst_32179);
var ___$1 = (function (){var statearr_32262 = state_32209;
(statearr_32262[(4)] = cljs.core.rest((state_32209[(4)])));

return statearr_32262;
})();
var state_32209__$1 = state_32209;
var statearr_32263_34242 = state_32209__$1;
(statearr_32263_34242[(2)] = inst_32180);

(statearr_32263_34242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (5))){
var inst_32190 = (state_32209[(2)]);
var state_32209__$1 = (function (){var statearr_32264 = state_32209;
(statearr_32264[(13)] = inst_32190);

return statearr_32264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32209__$1,(13),dchan);
} else {
if((state_val_32210 === (14))){
var inst_32195 = cljs.core.async.close_BANG_(out);
var state_32209__$1 = state_32209;
var statearr_32267_34243 = state_32209__$1;
(statearr_32267_34243[(2)] = inst_32195);

(statearr_32267_34243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (16))){
var inst_32202 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32270_34244 = state_32209__$1;
(statearr_32270_34244[(2)] = inst_32202);

(statearr_32270_34244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (10))){
var inst_32111 = (state_32209[(8)]);
var inst_32183 = (state_32209[(2)]);
var inst_32184 = (inst_32111 + (1));
var inst_32111__$1 = inst_32184;
var state_32209__$1 = (function (){var statearr_32286 = state_32209;
(statearr_32286[(8)] = inst_32111__$1);

(statearr_32286[(14)] = inst_32183);

return statearr_32286;
})();
var statearr_32296_34245 = state_32209__$1;
(statearr_32296_34245[(2)] = null);

(statearr_32296_34245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (8))){
var inst_32188 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32299_34246 = state_32209__$1;
(statearr_32299_34246[(2)] = inst_32188);

(statearr_32299_34246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_32301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32301[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_32301[(1)] = (1));

return statearr_32301;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_32209){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_32209);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32303){var ex__29057__auto__ = e32303;
var statearr_32304_34247 = state_32209;
(statearr_32304_34247[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_32209[(4)]))){
var statearr_32309_34248 = state_32209;
(statearr_32309_34248[(1)] = cljs.core.first((state_32209[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_32209;
state_32209 = G__34249;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_32209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_32209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_32310 = f__29430__auto__();
(statearr_32310[(6)] = c__29429__auto___34220);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32321 = arguments.length;
switch (G__32321) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_32358){
var state_val_32359 = (state_32358[(1)]);
if((state_val_32359 === (7))){
var inst_32337 = (state_32358[(7)]);
var inst_32336 = (state_32358[(8)]);
var inst_32336__$1 = (state_32358[(2)]);
var inst_32337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32336__$1,(0),null);
var inst_32338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32336__$1,(1),null);
var inst_32339 = (inst_32337__$1 == null);
var state_32358__$1 = (function (){var statearr_32364 = state_32358;
(statearr_32364[(7)] = inst_32337__$1);

(statearr_32364[(8)] = inst_32336__$1);

(statearr_32364[(9)] = inst_32338);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32339)){
var statearr_32365_34252 = state_32358__$1;
(statearr_32365_34252[(1)] = (8));

} else {
var statearr_32366_34253 = state_32358__$1;
(statearr_32366_34253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (1))){
var inst_32325 = cljs.core.vec(chs);
var inst_32326 = inst_32325;
var state_32358__$1 = (function (){var statearr_32369 = state_32358;
(statearr_32369[(10)] = inst_32326);

return statearr_32369;
})();
var statearr_32370_34254 = state_32358__$1;
(statearr_32370_34254[(2)] = null);

(statearr_32370_34254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (4))){
var inst_32326 = (state_32358[(10)]);
var state_32358__$1 = state_32358;
return cljs.core.async.ioc_alts_BANG_(state_32358__$1,(7),inst_32326);
} else {
if((state_val_32359 === (6))){
var inst_32353 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32378_34255 = state_32358__$1;
(statearr_32378_34255[(2)] = inst_32353);

(statearr_32378_34255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (3))){
var inst_32355 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32358__$1,inst_32355);
} else {
if((state_val_32359 === (2))){
var inst_32326 = (state_32358[(10)]);
var inst_32328 = cljs.core.count(inst_32326);
var inst_32329 = (inst_32328 > (0));
var state_32358__$1 = state_32358;
if(cljs.core.truth_(inst_32329)){
var statearr_32398_34257 = state_32358__$1;
(statearr_32398_34257[(1)] = (4));

} else {
var statearr_32399_34258 = state_32358__$1;
(statearr_32399_34258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (11))){
var inst_32326 = (state_32358[(10)]);
var inst_32346 = (state_32358[(2)]);
var tmp32382 = inst_32326;
var inst_32326__$1 = tmp32382;
var state_32358__$1 = (function (){var statearr_32404 = state_32358;
(statearr_32404[(10)] = inst_32326__$1);

(statearr_32404[(11)] = inst_32346);

return statearr_32404;
})();
var statearr_32406_34259 = state_32358__$1;
(statearr_32406_34259[(2)] = null);

(statearr_32406_34259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (9))){
var inst_32337 = (state_32358[(7)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32358__$1,(11),out,inst_32337);
} else {
if((state_val_32359 === (5))){
var inst_32351 = cljs.core.async.close_BANG_(out);
var state_32358__$1 = state_32358;
var statearr_32414_34261 = state_32358__$1;
(statearr_32414_34261[(2)] = inst_32351);

(statearr_32414_34261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (10))){
var inst_32349 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32415_34262 = state_32358__$1;
(statearr_32415_34262[(2)] = inst_32349);

(statearr_32415_34262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (8))){
var inst_32337 = (state_32358[(7)]);
var inst_32326 = (state_32358[(10)]);
var inst_32336 = (state_32358[(8)]);
var inst_32338 = (state_32358[(9)]);
var inst_32341 = (function (){var cs = inst_32326;
var vec__32332 = inst_32336;
var v = inst_32337;
var c = inst_32338;
return (function (p1__32312_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32312_SHARP_);
});
})();
var inst_32342 = cljs.core.filterv(inst_32341,inst_32326);
var inst_32326__$1 = inst_32342;
var state_32358__$1 = (function (){var statearr_32418 = state_32358;
(statearr_32418[(10)] = inst_32326__$1);

return statearr_32418;
})();
var statearr_32422_34263 = state_32358__$1;
(statearr_32422_34263[(2)] = null);

(statearr_32422_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_32423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32423[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_32423[(1)] = (1));

return statearr_32423;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_32358){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_32358);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32424){var ex__29057__auto__ = e32424;
var statearr_32425_34268 = state_32358;
(statearr_32425_34268[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_32358[(4)]))){
var statearr_32426_34269 = state_32358;
(statearr_32426_34269[(1)] = cljs.core.first((state_32358[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_32358;
state_32358 = G__34270;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_32358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_32358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_32430 = f__29430__auto__();
(statearr_32430[(6)] = c__29429__auto___34251);

return statearr_32430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32465 = arguments.length;
switch (G__32465) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_32509){
var state_val_32510 = (state_32509[(1)]);
if((state_val_32510 === (7))){
var inst_32491 = (state_32509[(7)]);
var inst_32491__$1 = (state_32509[(2)]);
var inst_32492 = (inst_32491__$1 == null);
var inst_32493 = cljs.core.not(inst_32492);
var state_32509__$1 = (function (){var statearr_32518 = state_32509;
(statearr_32518[(7)] = inst_32491__$1);

return statearr_32518;
})();
if(inst_32493){
var statearr_32522_34276 = state_32509__$1;
(statearr_32522_34276[(1)] = (8));

} else {
var statearr_32523_34277 = state_32509__$1;
(statearr_32523_34277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (1))){
var inst_32483 = (0);
var state_32509__$1 = (function (){var statearr_32530 = state_32509;
(statearr_32530[(8)] = inst_32483);

return statearr_32530;
})();
var statearr_32533_34278 = state_32509__$1;
(statearr_32533_34278[(2)] = null);

(statearr_32533_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (4))){
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32509__$1,(7),ch);
} else {
if((state_val_32510 === (6))){
var inst_32504 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
var statearr_32536_34279 = state_32509__$1;
(statearr_32536_34279[(2)] = inst_32504);

(statearr_32536_34279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (3))){
var inst_32506 = (state_32509[(2)]);
var inst_32507 = cljs.core.async.close_BANG_(out);
var state_32509__$1 = (function (){var statearr_32540 = state_32509;
(statearr_32540[(9)] = inst_32506);

return statearr_32540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32509__$1,inst_32507);
} else {
if((state_val_32510 === (2))){
var inst_32483 = (state_32509[(8)]);
var inst_32485 = (inst_32483 < n);
var state_32509__$1 = state_32509;
if(cljs.core.truth_(inst_32485)){
var statearr_32541_34280 = state_32509__$1;
(statearr_32541_34280[(1)] = (4));

} else {
var statearr_32542_34281 = state_32509__$1;
(statearr_32542_34281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (11))){
var inst_32483 = (state_32509[(8)]);
var inst_32496 = (state_32509[(2)]);
var inst_32497 = (inst_32483 + (1));
var inst_32483__$1 = inst_32497;
var state_32509__$1 = (function (){var statearr_32549 = state_32509;
(statearr_32549[(8)] = inst_32483__$1);

(statearr_32549[(10)] = inst_32496);

return statearr_32549;
})();
var statearr_32554_34282 = state_32509__$1;
(statearr_32554_34282[(2)] = null);

(statearr_32554_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (9))){
var state_32509__$1 = state_32509;
var statearr_32555_34287 = state_32509__$1;
(statearr_32555_34287[(2)] = null);

(statearr_32555_34287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (5))){
var state_32509__$1 = state_32509;
var statearr_32559_34288 = state_32509__$1;
(statearr_32559_34288[(2)] = null);

(statearr_32559_34288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (10))){
var inst_32501 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
var statearr_32565_34292 = state_32509__$1;
(statearr_32565_34292[(2)] = inst_32501);

(statearr_32565_34292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (8))){
var inst_32491 = (state_32509[(7)]);
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32509__$1,(11),out,inst_32491);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_32509){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_32509);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32582){var ex__29057__auto__ = e32582;
var statearr_32587_34293 = state_32509;
(statearr_32587_34293[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_32509[(4)]))){
var statearr_32593_34294 = state_32509;
(statearr_32593_34294[(1)] = cljs.core.first((state_32509[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34295 = state_32509;
state_32509 = G__34295;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_32509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_32509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_32596 = f__29430__auto__();
(statearr_32596[(6)] = c__29429__auto___34275);

return statearr_32596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32602 = (function (f,ch,meta32603){
this.f = f;
this.ch = ch;
this.meta32603 = meta32603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32604,meta32603__$1){
var self__ = this;
var _32604__$1 = this;
return (new cljs.core.async.t_cljs$core$async32602(self__.f,self__.ch,meta32603__$1));
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32604){
var self__ = this;
var _32604__$1 = this;
return self__.meta32603;
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32609 = (function (f,ch,meta32603,_,fn1,meta32610){
this.f = f;
this.ch = ch;
this.meta32603 = meta32603;
this._ = _;
this.fn1 = fn1;
this.meta32610 = meta32610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32611,meta32610__$1){
var self__ = this;
var _32611__$1 = this;
return (new cljs.core.async.t_cljs$core$async32609(self__.f,self__.ch,self__.meta32603,self__._,self__.fn1,meta32610__$1));
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32611){
var self__ = this;
var _32611__$1 = this;
return self__.meta32610;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32601_SHARP_){
var G__32636 = (((p1__32601_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32601_SHARP_) : self__.f.call(null,p1__32601_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32636) : f1.call(null,G__32636));
});
}));

(cljs.core.async.t_cljs$core$async32609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32603","meta32603",1685938552,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32602","cljs.core.async/t_cljs$core$async32602",-1608514873,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32610","meta32610",-1148284560,null)], null);
}));

(cljs.core.async.t_cljs$core$async32609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32609");

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32609.
 */
cljs.core.async.__GT_t_cljs$core$async32609 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32609(f__$1,ch__$1,meta32603__$1,___$2,fn1__$1,meta32610){
return (new cljs.core.async.t_cljs$core$async32609(f__$1,ch__$1,meta32603__$1,___$2,fn1__$1,meta32610));
});

}

return (new cljs.core.async.t_cljs$core$async32609(self__.f,self__.ch,self__.meta32603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32644 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32644) : self__.f.call(null,G__32644));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32603","meta32603",1685938552,null)], null);
}));

(cljs.core.async.t_cljs$core$async32602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32602");

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32602.
 */
cljs.core.async.__GT_t_cljs$core$async32602 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32602(f__$1,ch__$1,meta32603){
return (new cljs.core.async.t_cljs$core$async32602(f__$1,ch__$1,meta32603));
});

}

return (new cljs.core.async.t_cljs$core$async32602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32658 = (function (f,ch,meta32659){
this.f = f;
this.ch = ch;
this.meta32659 = meta32659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32660,meta32659__$1){
var self__ = this;
var _32660__$1 = this;
return (new cljs.core.async.t_cljs$core$async32658(self__.f,self__.ch,meta32659__$1));
}));

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32660){
var self__ = this;
var _32660__$1 = this;
return self__.meta32659;
}));

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32659","meta32659",-1486481413,null)], null);
}));

(cljs.core.async.t_cljs$core$async32658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32658");

(cljs.core.async.t_cljs$core$async32658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32658.
 */
cljs.core.async.__GT_t_cljs$core$async32658 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32658(f__$1,ch__$1,meta32659){
return (new cljs.core.async.t_cljs$core$async32658(f__$1,ch__$1,meta32659));
});

}

return (new cljs.core.async.t_cljs$core$async32658(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32679 = (function (p,ch,meta32680){
this.p = p;
this.ch = ch;
this.meta32680 = meta32680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32681,meta32680__$1){
var self__ = this;
var _32681__$1 = this;
return (new cljs.core.async.t_cljs$core$async32679(self__.p,self__.ch,meta32680__$1));
}));

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32681){
var self__ = this;
var _32681__$1 = this;
return self__.meta32680;
}));

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32680","meta32680",-1801301463,null)], null);
}));

(cljs.core.async.t_cljs$core$async32679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32679");

(cljs.core.async.t_cljs$core$async32679.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32679.
 */
cljs.core.async.__GT_t_cljs$core$async32679 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32679(p__$1,ch__$1,meta32680){
return (new cljs.core.async.t_cljs$core$async32679(p__$1,ch__$1,meta32680));
});

}

return (new cljs.core.async.t_cljs$core$async32679(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32696 = arguments.length;
switch (G__32696) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_32721){
var state_val_32722 = (state_32721[(1)]);
if((state_val_32722 === (7))){
var inst_32717 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32729_34316 = state_32721__$1;
(statearr_32729_34316[(2)] = inst_32717);

(statearr_32729_34316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (1))){
var state_32721__$1 = state_32721;
var statearr_32732_34317 = state_32721__$1;
(statearr_32732_34317[(2)] = null);

(statearr_32732_34317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (4))){
var inst_32703 = (state_32721[(7)]);
var inst_32703__$1 = (state_32721[(2)]);
var inst_32704 = (inst_32703__$1 == null);
var state_32721__$1 = (function (){var statearr_32733 = state_32721;
(statearr_32733[(7)] = inst_32703__$1);

return statearr_32733;
})();
if(cljs.core.truth_(inst_32704)){
var statearr_32734_34318 = state_32721__$1;
(statearr_32734_34318[(1)] = (5));

} else {
var statearr_32735_34319 = state_32721__$1;
(statearr_32735_34319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (6))){
var inst_32703 = (state_32721[(7)]);
var inst_32708 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32703) : p.call(null,inst_32703));
var state_32721__$1 = state_32721;
if(cljs.core.truth_(inst_32708)){
var statearr_32736_34320 = state_32721__$1;
(statearr_32736_34320[(1)] = (8));

} else {
var statearr_32737_34321 = state_32721__$1;
(statearr_32737_34321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (3))){
var inst_32719 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32721__$1,inst_32719);
} else {
if((state_val_32722 === (2))){
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32721__$1,(4),ch);
} else {
if((state_val_32722 === (11))){
var inst_32711 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32745_34322 = state_32721__$1;
(statearr_32745_34322[(2)] = inst_32711);

(statearr_32745_34322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (9))){
var state_32721__$1 = state_32721;
var statearr_32749_34323 = state_32721__$1;
(statearr_32749_34323[(2)] = null);

(statearr_32749_34323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (5))){
var inst_32706 = cljs.core.async.close_BANG_(out);
var state_32721__$1 = state_32721;
var statearr_32750_34324 = state_32721__$1;
(statearr_32750_34324[(2)] = inst_32706);

(statearr_32750_34324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (10))){
var inst_32714 = (state_32721[(2)]);
var state_32721__$1 = (function (){var statearr_32760 = state_32721;
(statearr_32760[(8)] = inst_32714);

return statearr_32760;
})();
var statearr_32766_34325 = state_32721__$1;
(statearr_32766_34325[(2)] = null);

(statearr_32766_34325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (8))){
var inst_32703 = (state_32721[(7)]);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32721__$1,(11),out,inst_32703);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_32767 = [null,null,null,null,null,null,null,null,null];
(statearr_32767[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_32767[(1)] = (1));

return statearr_32767;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_32721){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_32721);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32769){var ex__29057__auto__ = e32769;
var statearr_32770_34326 = state_32721;
(statearr_32770_34326[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_32721[(4)]))){
var statearr_32771_34327 = state_32721;
(statearr_32771_34327[(1)] = cljs.core.first((state_32721[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34328 = state_32721;
state_32721 = G__34328;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_32721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_32721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_32774 = f__29430__auto__();
(statearr_32774[(6)] = c__29429__auto___34315);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32776 = arguments.length;
switch (G__32776) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_32847){
var state_val_32848 = (state_32847[(1)]);
if((state_val_32848 === (7))){
var inst_32842 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32849_34334 = state_32847__$1;
(statearr_32849_34334[(2)] = inst_32842);

(statearr_32849_34334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (20))){
var inst_32810 = (state_32847[(7)]);
var inst_32822 = (state_32847[(2)]);
var inst_32823 = cljs.core.next(inst_32810);
var inst_32795 = inst_32823;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32847__$1 = (function (){var statearr_32850 = state_32847;
(statearr_32850[(8)] = inst_32798);

(statearr_32850[(9)] = inst_32797);

(statearr_32850[(10)] = inst_32795);

(statearr_32850[(11)] = inst_32822);

(statearr_32850[(12)] = inst_32796);

return statearr_32850;
})();
var statearr_32853_34339 = state_32847__$1;
(statearr_32853_34339[(2)] = null);

(statearr_32853_34339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (1))){
var state_32847__$1 = state_32847;
var statearr_32855_34340 = state_32847__$1;
(statearr_32855_34340[(2)] = null);

(statearr_32855_34340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (4))){
var inst_32784 = (state_32847[(13)]);
var inst_32784__$1 = (state_32847[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var state_32847__$1 = (function (){var statearr_32856 = state_32847;
(statearr_32856[(13)] = inst_32784__$1);

return statearr_32856;
})();
if(cljs.core.truth_(inst_32785)){
var statearr_32857_34341 = state_32847__$1;
(statearr_32857_34341[(1)] = (5));

} else {
var statearr_32863_34342 = state_32847__$1;
(statearr_32863_34342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (15))){
var state_32847__$1 = state_32847;
var statearr_32870_34343 = state_32847__$1;
(statearr_32870_34343[(2)] = null);

(statearr_32870_34343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (21))){
var state_32847__$1 = state_32847;
var statearr_32871_34344 = state_32847__$1;
(statearr_32871_34344[(2)] = null);

(statearr_32871_34344[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (13))){
var inst_32798 = (state_32847[(8)]);
var inst_32797 = (state_32847[(9)]);
var inst_32795 = (state_32847[(10)]);
var inst_32796 = (state_32847[(12)]);
var inst_32806 = (state_32847[(2)]);
var inst_32807 = (inst_32798 + (1));
var tmp32866 = inst_32797;
var tmp32867 = inst_32795;
var tmp32868 = inst_32796;
var inst_32795__$1 = tmp32867;
var inst_32796__$1 = tmp32868;
var inst_32797__$1 = tmp32866;
var inst_32798__$1 = inst_32807;
var state_32847__$1 = (function (){var statearr_32900 = state_32847;
(statearr_32900[(14)] = inst_32806);

(statearr_32900[(8)] = inst_32798__$1);

(statearr_32900[(9)] = inst_32797__$1);

(statearr_32900[(10)] = inst_32795__$1);

(statearr_32900[(12)] = inst_32796__$1);

return statearr_32900;
})();
var statearr_32901_34351 = state_32847__$1;
(statearr_32901_34351[(2)] = null);

(statearr_32901_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (22))){
var state_32847__$1 = state_32847;
var statearr_32902_34354 = state_32847__$1;
(statearr_32902_34354[(2)] = null);

(statearr_32902_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (6))){
var inst_32784 = (state_32847[(13)]);
var inst_32793 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32784) : f.call(null,inst_32784));
var inst_32794 = cljs.core.seq(inst_32793);
var inst_32795 = inst_32794;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32847__$1 = (function (){var statearr_32905 = state_32847;
(statearr_32905[(8)] = inst_32798);

(statearr_32905[(9)] = inst_32797);

(statearr_32905[(10)] = inst_32795);

(statearr_32905[(12)] = inst_32796);

return statearr_32905;
})();
var statearr_32912_34355 = state_32847__$1;
(statearr_32912_34355[(2)] = null);

(statearr_32912_34355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (17))){
var inst_32810 = (state_32847[(7)]);
var inst_32815 = cljs.core.chunk_first(inst_32810);
var inst_32816 = cljs.core.chunk_rest(inst_32810);
var inst_32817 = cljs.core.count(inst_32815);
var inst_32795 = inst_32816;
var inst_32796 = inst_32815;
var inst_32797 = inst_32817;
var inst_32798 = (0);
var state_32847__$1 = (function (){var statearr_32914 = state_32847;
(statearr_32914[(8)] = inst_32798);

(statearr_32914[(9)] = inst_32797);

(statearr_32914[(10)] = inst_32795);

(statearr_32914[(12)] = inst_32796);

return statearr_32914;
})();
var statearr_32915_34357 = state_32847__$1;
(statearr_32915_34357[(2)] = null);

(statearr_32915_34357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (3))){
var inst_32844 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32847__$1,inst_32844);
} else {
if((state_val_32848 === (12))){
var inst_32831 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32918_34358 = state_32847__$1;
(statearr_32918_34358[(2)] = inst_32831);

(statearr_32918_34358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (2))){
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32847__$1,(4),in$);
} else {
if((state_val_32848 === (23))){
var inst_32840 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32920_34359 = state_32847__$1;
(statearr_32920_34359[(2)] = inst_32840);

(statearr_32920_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (19))){
var inst_32826 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32923_34360 = state_32847__$1;
(statearr_32923_34360[(2)] = inst_32826);

(statearr_32923_34360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (11))){
var inst_32810 = (state_32847[(7)]);
var inst_32795 = (state_32847[(10)]);
var inst_32810__$1 = cljs.core.seq(inst_32795);
var state_32847__$1 = (function (){var statearr_32928 = state_32847;
(statearr_32928[(7)] = inst_32810__$1);

return statearr_32928;
})();
if(inst_32810__$1){
var statearr_32929_34361 = state_32847__$1;
(statearr_32929_34361[(1)] = (14));

} else {
var statearr_32930_34362 = state_32847__$1;
(statearr_32930_34362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (9))){
var inst_32833 = (state_32847[(2)]);
var inst_32835 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32847__$1 = (function (){var statearr_32944 = state_32847;
(statearr_32944[(15)] = inst_32833);

return statearr_32944;
})();
if(cljs.core.truth_(inst_32835)){
var statearr_32953_34363 = state_32847__$1;
(statearr_32953_34363[(1)] = (21));

} else {
var statearr_32954_34364 = state_32847__$1;
(statearr_32954_34364[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (5))){
var inst_32787 = cljs.core.async.close_BANG_(out);
var state_32847__$1 = state_32847;
var statearr_32968_34366 = state_32847__$1;
(statearr_32968_34366[(2)] = inst_32787);

(statearr_32968_34366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (14))){
var inst_32810 = (state_32847[(7)]);
var inst_32813 = cljs.core.chunked_seq_QMARK_(inst_32810);
var state_32847__$1 = state_32847;
if(inst_32813){
var statearr_32981_34367 = state_32847__$1;
(statearr_32981_34367[(1)] = (17));

} else {
var statearr_32982_34368 = state_32847__$1;
(statearr_32982_34368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (16))){
var inst_32829 = (state_32847[(2)]);
var state_32847__$1 = state_32847;
var statearr_32985_34373 = state_32847__$1;
(statearr_32985_34373[(2)] = inst_32829);

(statearr_32985_34373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (10))){
var inst_32798 = (state_32847[(8)]);
var inst_32796 = (state_32847[(12)]);
var inst_32804 = cljs.core._nth(inst_32796,inst_32798);
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32847__$1,(13),out,inst_32804);
} else {
if((state_val_32848 === (18))){
var inst_32810 = (state_32847[(7)]);
var inst_32820 = cljs.core.first(inst_32810);
var state_32847__$1 = state_32847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32847__$1,(20),out,inst_32820);
} else {
if((state_val_32848 === (8))){
var inst_32798 = (state_32847[(8)]);
var inst_32797 = (state_32847[(9)]);
var inst_32801 = (inst_32798 < inst_32797);
var inst_32802 = inst_32801;
var state_32847__$1 = state_32847;
if(cljs.core.truth_(inst_32802)){
var statearr_32993_34374 = state_32847__$1;
(statearr_32993_34374[(1)] = (10));

} else {
var statearr_32994_34375 = state_32847__$1;
(statearr_32994_34375[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____0 = (function (){
var statearr_32998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32998[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__);

(statearr_32998[(1)] = (1));

return statearr_32998;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____1 = (function (state_32847){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_32847);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e32999){var ex__29057__auto__ = e32999;
var statearr_33000_34376 = state_32847;
(statearr_33000_34376[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_32847[(4)]))){
var statearr_33001_34377 = state_32847;
(statearr_33001_34377[(1)] = cljs.core.first((state_32847[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34378 = state_32847;
state_32847 = G__34378;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__ = function(state_32847){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____1.call(this,state_32847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29054__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_33010 = f__29430__auto__();
(statearr_33010[(6)] = c__29429__auto__);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));

return c__29429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33018 = arguments.length;
switch (G__33018) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33035 = arguments.length;
switch (G__33035) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33088 = arguments.length;
switch (G__33088) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_33118){
var state_val_33119 = (state_33118[(1)]);
if((state_val_33119 === (7))){
var inst_33113 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
var statearr_33120_34385 = state_33118__$1;
(statearr_33120_34385[(2)] = inst_33113);

(statearr_33120_34385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (1))){
var inst_33091 = null;
var state_33118__$1 = (function (){var statearr_33121 = state_33118;
(statearr_33121[(7)] = inst_33091);

return statearr_33121;
})();
var statearr_33122_34386 = state_33118__$1;
(statearr_33122_34386[(2)] = null);

(statearr_33122_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (4))){
var inst_33094 = (state_33118[(8)]);
var inst_33094__$1 = (state_33118[(2)]);
var inst_33096 = (inst_33094__$1 == null);
var inst_33097 = cljs.core.not(inst_33096);
var state_33118__$1 = (function (){var statearr_33124 = state_33118;
(statearr_33124[(8)] = inst_33094__$1);

return statearr_33124;
})();
if(inst_33097){
var statearr_33126_34387 = state_33118__$1;
(statearr_33126_34387[(1)] = (5));

} else {
var statearr_33127_34388 = state_33118__$1;
(statearr_33127_34388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (6))){
var state_33118__$1 = state_33118;
var statearr_33129_34389 = state_33118__$1;
(statearr_33129_34389[(2)] = null);

(statearr_33129_34389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (3))){
var inst_33115 = (state_33118[(2)]);
var inst_33116 = cljs.core.async.close_BANG_(out);
var state_33118__$1 = (function (){var statearr_33131 = state_33118;
(statearr_33131[(9)] = inst_33115);

return statearr_33131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33118__$1,inst_33116);
} else {
if((state_val_33119 === (2))){
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33118__$1,(4),ch);
} else {
if((state_val_33119 === (11))){
var inst_33094 = (state_33118[(8)]);
var inst_33107 = (state_33118[(2)]);
var inst_33091 = inst_33094;
var state_33118__$1 = (function (){var statearr_33133 = state_33118;
(statearr_33133[(10)] = inst_33107);

(statearr_33133[(7)] = inst_33091);

return statearr_33133;
})();
var statearr_33134_34390 = state_33118__$1;
(statearr_33134_34390[(2)] = null);

(statearr_33134_34390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (9))){
var inst_33094 = (state_33118[(8)]);
var state_33118__$1 = state_33118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33118__$1,(11),out,inst_33094);
} else {
if((state_val_33119 === (5))){
var inst_33091 = (state_33118[(7)]);
var inst_33094 = (state_33118[(8)]);
var inst_33099 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33094,inst_33091);
var state_33118__$1 = state_33118;
if(inst_33099){
var statearr_33138_34395 = state_33118__$1;
(statearr_33138_34395[(1)] = (8));

} else {
var statearr_33143_34396 = state_33118__$1;
(statearr_33143_34396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (10))){
var inst_33110 = (state_33118[(2)]);
var state_33118__$1 = state_33118;
var statearr_33145_34397 = state_33118__$1;
(statearr_33145_34397[(2)] = inst_33110);

(statearr_33145_34397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33119 === (8))){
var inst_33091 = (state_33118[(7)]);
var tmp33136 = inst_33091;
var inst_33091__$1 = tmp33136;
var state_33118__$1 = (function (){var statearr_33152 = state_33118;
(statearr_33152[(7)] = inst_33091__$1);

return statearr_33152;
})();
var statearr_33153_34398 = state_33118__$1;
(statearr_33153_34398[(2)] = null);

(statearr_33153_34398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_33118){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_33118);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e33156){var ex__29057__auto__ = e33156;
var statearr_33157_34399 = state_33118;
(statearr_33157_34399[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_33118[(4)]))){
var statearr_33162_34400 = state_33118;
(statearr_33162_34400[(1)] = cljs.core.first((state_33118[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34401 = state_33118;
state_33118 = G__34401;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_33118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_33118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_33163 = f__29430__auto__();
(statearr_33163[(6)] = c__29429__auto___34383);

return statearr_33163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33165 = arguments.length;
switch (G__33165) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_33214){
var state_val_33215 = (state_33214[(1)]);
if((state_val_33215 === (7))){
var inst_33210 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33216_34407 = state_33214__$1;
(statearr_33216_34407[(2)] = inst_33210);

(statearr_33216_34407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (1))){
var inst_33166 = (new Array(n));
var inst_33169 = inst_33166;
var inst_33170 = (0);
var state_33214__$1 = (function (){var statearr_33217 = state_33214;
(statearr_33217[(7)] = inst_33169);

(statearr_33217[(8)] = inst_33170);

return statearr_33217;
})();
var statearr_33218_34408 = state_33214__$1;
(statearr_33218_34408[(2)] = null);

(statearr_33218_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (4))){
var inst_33177 = (state_33214[(9)]);
var inst_33177__$1 = (state_33214[(2)]);
var inst_33180 = (inst_33177__$1 == null);
var inst_33181 = cljs.core.not(inst_33180);
var state_33214__$1 = (function (){var statearr_33219 = state_33214;
(statearr_33219[(9)] = inst_33177__$1);

return statearr_33219;
})();
if(inst_33181){
var statearr_33220_34413 = state_33214__$1;
(statearr_33220_34413[(1)] = (5));

} else {
var statearr_33221_34414 = state_33214__$1;
(statearr_33221_34414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (15))){
var inst_33204 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33222_34415 = state_33214__$1;
(statearr_33222_34415[(2)] = inst_33204);

(statearr_33222_34415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (13))){
var state_33214__$1 = state_33214;
var statearr_33223_34416 = state_33214__$1;
(statearr_33223_34416[(2)] = null);

(statearr_33223_34416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (6))){
var inst_33170 = (state_33214[(8)]);
var inst_33200 = (inst_33170 > (0));
var state_33214__$1 = state_33214;
if(cljs.core.truth_(inst_33200)){
var statearr_33224_34418 = state_33214__$1;
(statearr_33224_34418[(1)] = (12));

} else {
var statearr_33225_34419 = state_33214__$1;
(statearr_33225_34419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (3))){
var inst_33212 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33214__$1,inst_33212);
} else {
if((state_val_33215 === (12))){
var inst_33169 = (state_33214[(7)]);
var inst_33202 = cljs.core.vec(inst_33169);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33214__$1,(15),out,inst_33202);
} else {
if((state_val_33215 === (2))){
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33214__$1,(4),ch);
} else {
if((state_val_33215 === (11))){
var inst_33194 = (state_33214[(2)]);
var inst_33195 = (new Array(n));
var inst_33169 = inst_33195;
var inst_33170 = (0);
var state_33214__$1 = (function (){var statearr_33229 = state_33214;
(statearr_33229[(7)] = inst_33169);

(statearr_33229[(8)] = inst_33170);

(statearr_33229[(10)] = inst_33194);

return statearr_33229;
})();
var statearr_33230_34421 = state_33214__$1;
(statearr_33230_34421[(2)] = null);

(statearr_33230_34421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (9))){
var inst_33169 = (state_33214[(7)]);
var inst_33192 = cljs.core.vec(inst_33169);
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33214__$1,(11),out,inst_33192);
} else {
if((state_val_33215 === (5))){
var inst_33177 = (state_33214[(9)]);
var inst_33169 = (state_33214[(7)]);
var inst_33170 = (state_33214[(8)]);
var inst_33184 = (state_33214[(11)]);
var inst_33183 = (inst_33169[inst_33170] = inst_33177);
var inst_33184__$1 = (inst_33170 + (1));
var inst_33185 = (inst_33184__$1 < n);
var state_33214__$1 = (function (){var statearr_33239 = state_33214;
(statearr_33239[(12)] = inst_33183);

(statearr_33239[(11)] = inst_33184__$1);

return statearr_33239;
})();
if(cljs.core.truth_(inst_33185)){
var statearr_33240_34422 = state_33214__$1;
(statearr_33240_34422[(1)] = (8));

} else {
var statearr_33242_34424 = state_33214__$1;
(statearr_33242_34424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (14))){
var inst_33207 = (state_33214[(2)]);
var inst_33208 = cljs.core.async.close_BANG_(out);
var state_33214__$1 = (function (){var statearr_33244 = state_33214;
(statearr_33244[(13)] = inst_33207);

return statearr_33244;
})();
var statearr_33246_34425 = state_33214__$1;
(statearr_33246_34425[(2)] = inst_33208);

(statearr_33246_34425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (10))){
var inst_33198 = (state_33214[(2)]);
var state_33214__$1 = state_33214;
var statearr_33248_34430 = state_33214__$1;
(statearr_33248_34430[(2)] = inst_33198);

(statearr_33248_34430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33215 === (8))){
var inst_33169 = (state_33214[(7)]);
var inst_33184 = (state_33214[(11)]);
var tmp33243 = inst_33169;
var inst_33169__$1 = tmp33243;
var inst_33170 = inst_33184;
var state_33214__$1 = (function (){var statearr_33249 = state_33214;
(statearr_33249[(7)] = inst_33169__$1);

(statearr_33249[(8)] = inst_33170);

return statearr_33249;
})();
var statearr_33250_34436 = state_33214__$1;
(statearr_33250_34436[(2)] = null);

(statearr_33250_34436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_33253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33253[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_33253[(1)] = (1));

return statearr_33253;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_33214){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_33214);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e33254){var ex__29057__auto__ = e33254;
var statearr_33255_34437 = state_33214;
(statearr_33255_34437[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_33214[(4)]))){
var statearr_33256_34438 = state_33214;
(statearr_33256_34438[(1)] = cljs.core.first((state_33214[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_33214;
state_33214 = G__34439;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_33214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_33214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_33258 = f__29430__auto__();
(statearr_33258[(6)] = c__29429__auto___34404);

return statearr_33258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33261 = arguments.length;
switch (G__33261) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29429__auto___34441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29430__auto__ = (function (){var switch__29053__auto__ = (function (state_33306){
var state_val_33307 = (state_33306[(1)]);
if((state_val_33307 === (7))){
var inst_33302 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33308_34447 = state_33306__$1;
(statearr_33308_34447[(2)] = inst_33302);

(statearr_33308_34447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (1))){
var inst_33262 = [];
var inst_33263 = inst_33262;
var inst_33264 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33306__$1 = (function (){var statearr_33312 = state_33306;
(statearr_33312[(7)] = inst_33263);

(statearr_33312[(8)] = inst_33264);

return statearr_33312;
})();
var statearr_33313_34448 = state_33306__$1;
(statearr_33313_34448[(2)] = null);

(statearr_33313_34448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (4))){
var inst_33267 = (state_33306[(9)]);
var inst_33267__$1 = (state_33306[(2)]);
var inst_33268 = (inst_33267__$1 == null);
var inst_33269 = cljs.core.not(inst_33268);
var state_33306__$1 = (function (){var statearr_33314 = state_33306;
(statearr_33314[(9)] = inst_33267__$1);

return statearr_33314;
})();
if(inst_33269){
var statearr_33315_34449 = state_33306__$1;
(statearr_33315_34449[(1)] = (5));

} else {
var statearr_33316_34450 = state_33306__$1;
(statearr_33316_34450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (15))){
var inst_33263 = (state_33306[(7)]);
var inst_33294 = cljs.core.vec(inst_33263);
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33306__$1,(18),out,inst_33294);
} else {
if((state_val_33307 === (13))){
var inst_33289 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33317_34451 = state_33306__$1;
(statearr_33317_34451[(2)] = inst_33289);

(statearr_33317_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (6))){
var inst_33263 = (state_33306[(7)]);
var inst_33291 = inst_33263.length;
var inst_33292 = (inst_33291 > (0));
var state_33306__$1 = state_33306;
if(cljs.core.truth_(inst_33292)){
var statearr_33318_34453 = state_33306__$1;
(statearr_33318_34453[(1)] = (15));

} else {
var statearr_33319_34455 = state_33306__$1;
(statearr_33319_34455[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (17))){
var inst_33299 = (state_33306[(2)]);
var inst_33300 = cljs.core.async.close_BANG_(out);
var state_33306__$1 = (function (){var statearr_33320 = state_33306;
(statearr_33320[(10)] = inst_33299);

return statearr_33320;
})();
var statearr_33321_34461 = state_33306__$1;
(statearr_33321_34461[(2)] = inst_33300);

(statearr_33321_34461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (3))){
var inst_33304 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33306__$1,inst_33304);
} else {
if((state_val_33307 === (12))){
var inst_33263 = (state_33306[(7)]);
var inst_33282 = cljs.core.vec(inst_33263);
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33306__$1,(14),out,inst_33282);
} else {
if((state_val_33307 === (2))){
var state_33306__$1 = state_33306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33306__$1,(4),ch);
} else {
if((state_val_33307 === (11))){
var inst_33263 = (state_33306[(7)]);
var inst_33271 = (state_33306[(11)]);
var inst_33267 = (state_33306[(9)]);
var inst_33279 = inst_33263.push(inst_33267);
var tmp33325 = inst_33263;
var inst_33263__$1 = tmp33325;
var inst_33264 = inst_33271;
var state_33306__$1 = (function (){var statearr_33336 = state_33306;
(statearr_33336[(7)] = inst_33263__$1);

(statearr_33336[(8)] = inst_33264);

(statearr_33336[(12)] = inst_33279);

return statearr_33336;
})();
var statearr_33337_34466 = state_33306__$1;
(statearr_33337_34466[(2)] = null);

(statearr_33337_34466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (9))){
var inst_33264 = (state_33306[(8)]);
var inst_33275 = cljs.core.keyword_identical_QMARK_(inst_33264,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33306__$1 = state_33306;
var statearr_33338_34467 = state_33306__$1;
(statearr_33338_34467[(2)] = inst_33275);

(statearr_33338_34467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (5))){
var inst_33271 = (state_33306[(11)]);
var inst_33267 = (state_33306[(9)]);
var inst_33272 = (state_33306[(13)]);
var inst_33264 = (state_33306[(8)]);
var inst_33271__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33267) : f.call(null,inst_33267));
var inst_33272__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33271__$1,inst_33264);
var state_33306__$1 = (function (){var statearr_33344 = state_33306;
(statearr_33344[(11)] = inst_33271__$1);

(statearr_33344[(13)] = inst_33272__$1);

return statearr_33344;
})();
if(inst_33272__$1){
var statearr_33348_34473 = state_33306__$1;
(statearr_33348_34473[(1)] = (8));

} else {
var statearr_33349_34474 = state_33306__$1;
(statearr_33349_34474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (14))){
var inst_33271 = (state_33306[(11)]);
var inst_33267 = (state_33306[(9)]);
var inst_33284 = (state_33306[(2)]);
var inst_33285 = [];
var inst_33286 = inst_33285.push(inst_33267);
var inst_33263 = inst_33285;
var inst_33264 = inst_33271;
var state_33306__$1 = (function (){var statearr_33353 = state_33306;
(statearr_33353[(7)] = inst_33263);

(statearr_33353[(8)] = inst_33264);

(statearr_33353[(14)] = inst_33286);

(statearr_33353[(15)] = inst_33284);

return statearr_33353;
})();
var statearr_33354_34480 = state_33306__$1;
(statearr_33354_34480[(2)] = null);

(statearr_33354_34480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (16))){
var state_33306__$1 = state_33306;
var statearr_33355_34482 = state_33306__$1;
(statearr_33355_34482[(2)] = null);

(statearr_33355_34482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (10))){
var inst_33277 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
if(cljs.core.truth_(inst_33277)){
var statearr_33356_34483 = state_33306__$1;
(statearr_33356_34483[(1)] = (11));

} else {
var statearr_33357_34484 = state_33306__$1;
(statearr_33357_34484[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (18))){
var inst_33296 = (state_33306[(2)]);
var state_33306__$1 = state_33306;
var statearr_33361_34485 = state_33306__$1;
(statearr_33361_34485[(2)] = inst_33296);

(statearr_33361_34485[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33307 === (8))){
var inst_33272 = (state_33306[(13)]);
var state_33306__$1 = state_33306;
var statearr_33369_34486 = state_33306__$1;
(statearr_33369_34486[(2)] = inst_33272);

(statearr_33369_34486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29054__auto__ = null;
var cljs$core$async$state_machine__29054__auto____0 = (function (){
var statearr_33377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33377[(0)] = cljs$core$async$state_machine__29054__auto__);

(statearr_33377[(1)] = (1));

return statearr_33377;
});
var cljs$core$async$state_machine__29054__auto____1 = (function (state_33306){
while(true){
var ret_value__29055__auto__ = (function (){try{while(true){
var result__29056__auto__ = switch__29053__auto__(state_33306);
if(cljs.core.keyword_identical_QMARK_(result__29056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29056__auto__;
}
break;
}
}catch (e33380){var ex__29057__auto__ = e33380;
var statearr_33381_34487 = state_33306;
(statearr_33381_34487[(2)] = ex__29057__auto__);


if(cljs.core.seq((state_33306[(4)]))){
var statearr_33382_34489 = state_33306;
(statearr_33382_34489[(1)] = cljs.core.first((state_33306[(4)])));

} else {
throw ex__29057__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34490 = state_33306;
state_33306 = G__34490;
continue;
} else {
return ret_value__29055__auto__;
}
break;
}
});
cljs$core$async$state_machine__29054__auto__ = function(state_33306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29054__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29054__auto____1.call(this,state_33306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29054__auto____0;
cljs$core$async$state_machine__29054__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29054__auto____1;
return cljs$core$async$state_machine__29054__auto__;
})()
})();
var state__29431__auto__ = (function (){var statearr_33385 = f__29430__auto__();
(statearr_33385[(6)] = c__29429__auto___34441);

return statearr_33385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29431__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
