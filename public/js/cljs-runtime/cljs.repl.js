goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34382){
var map__34384 = p__34382;
var map__34384__$1 = cljs.core.__destructure_map(map__34384);
var m = map__34384__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34384__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34391_34683 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34392_34684 = null;
var count__34393_34685 = (0);
var i__34394_34686 = (0);
while(true){
if((i__34394_34686 < count__34393_34685)){
var f_34687 = chunk__34392_34684.cljs$core$IIndexed$_nth$arity$2(null,i__34394_34686);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34687], 0));


var G__34688 = seq__34391_34683;
var G__34689 = chunk__34392_34684;
var G__34690 = count__34393_34685;
var G__34691 = (i__34394_34686 + (1));
seq__34391_34683 = G__34688;
chunk__34392_34684 = G__34689;
count__34393_34685 = G__34690;
i__34394_34686 = G__34691;
continue;
} else {
var temp__5804__auto___34692 = cljs.core.seq(seq__34391_34683);
if(temp__5804__auto___34692){
var seq__34391_34693__$1 = temp__5804__auto___34692;
if(cljs.core.chunked_seq_QMARK_(seq__34391_34693__$1)){
var c__5568__auto___34694 = cljs.core.chunk_first(seq__34391_34693__$1);
var G__34695 = cljs.core.chunk_rest(seq__34391_34693__$1);
var G__34696 = c__5568__auto___34694;
var G__34697 = cljs.core.count(c__5568__auto___34694);
var G__34698 = (0);
seq__34391_34683 = G__34695;
chunk__34392_34684 = G__34696;
count__34393_34685 = G__34697;
i__34394_34686 = G__34698;
continue;
} else {
var f_34699 = cljs.core.first(seq__34391_34693__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34699], 0));


var G__34704 = cljs.core.next(seq__34391_34693__$1);
var G__34705 = null;
var G__34706 = (0);
var G__34707 = (0);
seq__34391_34683 = G__34704;
chunk__34392_34684 = G__34705;
count__34393_34685 = G__34706;
i__34394_34686 = G__34707;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34708 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34708], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34708)))?cljs.core.second(arglists_34708):arglists_34708)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34426_34710 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34427_34711 = null;
var count__34428_34712 = (0);
var i__34429_34713 = (0);
while(true){
if((i__34429_34713 < count__34428_34712)){
var vec__34456_34714 = chunk__34427_34711.cljs$core$IIndexed$_nth$arity$2(null,i__34429_34713);
var name_34715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456_34714,(0),null);
var map__34459_34716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456_34714,(1),null);
var map__34459_34717__$1 = cljs.core.__destructure_map(map__34459_34716);
var doc_34718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459_34717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459_34717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34715], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34719], 0));

if(cljs.core.truth_(doc_34718)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34718], 0));
} else {
}


var G__34720 = seq__34426_34710;
var G__34721 = chunk__34427_34711;
var G__34722 = count__34428_34712;
var G__34723 = (i__34429_34713 + (1));
seq__34426_34710 = G__34720;
chunk__34427_34711 = G__34721;
count__34428_34712 = G__34722;
i__34429_34713 = G__34723;
continue;
} else {
var temp__5804__auto___34724 = cljs.core.seq(seq__34426_34710);
if(temp__5804__auto___34724){
var seq__34426_34725__$1 = temp__5804__auto___34724;
if(cljs.core.chunked_seq_QMARK_(seq__34426_34725__$1)){
var c__5568__auto___34726 = cljs.core.chunk_first(seq__34426_34725__$1);
var G__34727 = cljs.core.chunk_rest(seq__34426_34725__$1);
var G__34728 = c__5568__auto___34726;
var G__34729 = cljs.core.count(c__5568__auto___34726);
var G__34730 = (0);
seq__34426_34710 = G__34727;
chunk__34427_34711 = G__34728;
count__34428_34712 = G__34729;
i__34429_34713 = G__34730;
continue;
} else {
var vec__34462_34731 = cljs.core.first(seq__34426_34725__$1);
var name_34732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34462_34731,(0),null);
var map__34465_34733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34462_34731,(1),null);
var map__34465_34734__$1 = cljs.core.__destructure_map(map__34465_34733);
var doc_34735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465_34734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465_34734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34732], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34736], 0));

if(cljs.core.truth_(doc_34735)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34735], 0));
} else {
}


var G__34738 = cljs.core.next(seq__34426_34725__$1);
var G__34739 = null;
var G__34740 = (0);
var G__34741 = (0);
seq__34426_34710 = G__34738;
chunk__34427_34711 = G__34739;
count__34428_34712 = G__34740;
i__34429_34713 = G__34741;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34476 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34477 = null;
var count__34478 = (0);
var i__34479 = (0);
while(true){
if((i__34479 < count__34478)){
var role = chunk__34477.cljs$core$IIndexed$_nth$arity$2(null,i__34479);
var temp__5804__auto___34743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34743__$1)){
var spec_34744 = temp__5804__auto___34743__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34744)], 0));
} else {
}


var G__34745 = seq__34476;
var G__34746 = chunk__34477;
var G__34747 = count__34478;
var G__34748 = (i__34479 + (1));
seq__34476 = G__34745;
chunk__34477 = G__34746;
count__34478 = G__34747;
i__34479 = G__34748;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34476);
if(temp__5804__auto____$1){
var seq__34476__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34476__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34476__$1);
var G__34750 = cljs.core.chunk_rest(seq__34476__$1);
var G__34751 = c__5568__auto__;
var G__34752 = cljs.core.count(c__5568__auto__);
var G__34753 = (0);
seq__34476 = G__34750;
chunk__34477 = G__34751;
count__34478 = G__34752;
i__34479 = G__34753;
continue;
} else {
var role = cljs.core.first(seq__34476__$1);
var temp__5804__auto___34757__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34757__$2)){
var spec_34758 = temp__5804__auto___34757__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34758)], 0));
} else {
}


var G__34759 = cljs.core.next(seq__34476__$1);
var G__34760 = null;
var G__34761 = (0);
var G__34762 = (0);
seq__34476 = G__34759;
chunk__34477 = G__34760;
count__34478 = G__34761;
i__34479 = G__34762;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34766 = cljs.core.ex_cause(t);
via = G__34765;
t = G__34766;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34593 = datafied_throwable;
var map__34593__$1 = cljs.core.__destructure_map(map__34593);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34593__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34596 = cljs.core.last(via);
var map__34596__$1 = cljs.core.__destructure_map(map__34596);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34596__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34596__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34596__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34598 = data;
var map__34598__$1 = cljs.core.__destructure_map(map__34598);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34598__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34599 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34599__$1 = cljs.core.__destructure_map(map__34599);
var top_data = map__34599__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34602 = phase;
var G__34602__$1 = (((G__34602 instanceof cljs.core.Keyword))?G__34602.fqn:null);
switch (G__34602__$1) {
case "read-source":
var map__34603 = data;
var map__34603__$1 = cljs.core.__destructure_map(map__34603);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34603__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34604 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34604__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34604,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34604);
var G__34604__$2 = (cljs.core.truth_((function (){var fexpr__34605 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34605.cljs$core$IFn$_invoke$arity$1 ? fexpr__34605.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34605.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34604__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34604__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34604__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34606 = top_data;
var G__34606__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34606,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34606);
var G__34606__$2 = (cljs.core.truth_((function (){var fexpr__34608 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34608.cljs$core$IFn$_invoke$arity$1 ? fexpr__34608.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34608.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34606__$1);
var G__34606__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34606__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34606__$2);
var G__34606__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34606__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34606__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34606__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34606__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34609 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(3),null);
var G__34614 = top_data;
var G__34614__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34614,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34614);
var G__34614__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34614__$1);
var G__34614__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34614__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34614__$2);
var G__34614__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34614__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34614__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34614__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34614__$4;
}

break;
case "execution":
var vec__34616 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34592_SHARP_){
var or__5045__auto__ = (p1__34592_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34619.cljs$core$IFn$_invoke$arity$1 ? fexpr__34619.cljs$core$IFn$_invoke$arity$1(p1__34592_SHARP_) : fexpr__34619.call(null,p1__34592_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34621 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34621__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34621,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34621);
var G__34621__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34621__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34621__$1);
var G__34621__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34621__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34621__$2);
var G__34621__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34621__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34621__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34621__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34621__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34602__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34624){
var map__34625 = p__34624;
var map__34625__$1 = cljs.core.__destructure_map(map__34625);
var triage_data = map__34625__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34636 = phase;
var G__34636__$1 = (((G__34636 instanceof cljs.core.Keyword))?G__34636.fqn:null);
switch (G__34636__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34639 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34640 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34641 = loc;
var G__34642 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34647_34797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34648_34798 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34649_34799 = true;
var _STAR_print_fn_STAR__temp_val__34650_34800 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34649_34799);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34650_34800);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34622_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34622_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34648_34798);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34647_34797);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34639,G__34640,G__34641,G__34642) : format.call(null,G__34639,G__34640,G__34641,G__34642));

break;
case "macroexpansion":
var G__34652 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34653 = cause_type;
var G__34654 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34655 = loc;
var G__34656 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34652,G__34653,G__34654,G__34655,G__34656) : format.call(null,G__34652,G__34653,G__34654,G__34655,G__34656));

break;
case "compile-syntax-check":
var G__34658 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34659 = cause_type;
var G__34660 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34661 = loc;
var G__34662 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34658,G__34659,G__34660,G__34661,G__34662) : format.call(null,G__34658,G__34659,G__34660,G__34661,G__34662));

break;
case "compilation":
var G__34663 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34664 = cause_type;
var G__34665 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34666 = loc;
var G__34667 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34663,G__34664,G__34665,G__34666,G__34667) : format.call(null,G__34663,G__34664,G__34665,G__34666,G__34667));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34668 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34669 = symbol;
var G__34670 = loc;
var G__34671 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34672_34818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34673_34819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34675_34820 = true;
var _STAR_print_fn_STAR__temp_val__34676_34821 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34675_34820);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34676_34821);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34623_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34623_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34673_34819);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34672_34818);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34668,G__34669,G__34670,G__34671) : format.call(null,G__34668,G__34669,G__34670,G__34671));
} else {
var G__34677 = "Execution error%s at %s(%s).\n%s\n";
var G__34678 = cause_type;
var G__34679 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34680 = loc;
var G__34681 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34677,G__34678,G__34679,G__34680,G__34681) : format.call(null,G__34677,G__34678,G__34679,G__34680,G__34681));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34636__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
