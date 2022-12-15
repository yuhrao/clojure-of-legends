goog.provide('app.main');
var module$node_modules$axios$index=shadow.js.require("module$node_modules$axios$index", {});
var module$node_modules$$mui$material$node$Typography$index=shadow.js.require("module$node_modules$$mui$material$node$Typography$index", {});
var module$node_modules$$mui$material$node$CssBaseline$index=shadow.js.require("module$node_modules$$mui$material$node$CssBaseline$index", {});
var module$node_modules$$mui$material$node$Stack$index=shadow.js.require("module$node_modules$$mui$material$node$Stack$index", {});
var module$node_modules$$mui$material$node$Container$index=shadow.js.require("module$node_modules$$mui$material$node$Container$index", {});
var module$node_modules$$mui$material$node$Box$index=shadow.js.require("module$node_modules$$mui$material$node$Box$index", {});
app.main.lol_client = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"versions","versions",536521978),"https://ddragon.leagueoflegends.com/api/versions.json",new cljs.core.Keyword(null,"champions","champions",-576064454),"http://ddragon.leagueoflegends.com/cdn/{{version}}/data/{{language}}/champion.json",new cljs.core.Keyword(null,"champion-icon","champion-icon",868337930),"http://ddragon.leagueoflegends.com/cdn/{{version}}/img/champion/{{image}}"], null)], null);
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.base_data !== 'undefined')){
} else {
app.main.base_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),"",new cljs.core.Keyword(null,"language","language",-1591107564),"pt_BR"], null),new cljs.core.Keyword(null,"versions","versions",536521978),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"champions","champions",-576064454),cljs.core.PersistentArrayMap.EMPTY], null));
}
app.main.prepare_metadata = (function app$main$prepare_metadata(){
promesa.core.then.cljs$core$IFn$_invoke$arity$2(api.lol.metadata.get_versions(app.main.lol_client),(function (p__28772){
var map__28773 = p__28772;
var map__28773__$1 = cljs.core.__destructure_map(map__28773);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28773__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.base_data,cljs.core.assoc,new cljs.core.Keyword(null,"versions","versions",536521978),data);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.base_data,cljs.core.update,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"version","version",425292698),cljs.core.first(data)], 0));
}));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(api.lol.metadata.get_champions(app.main.lol_client,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.base_data))),(function (res){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.base_data,cljs.core.assoc,new cljs.core.Keyword(null,"champions","champions",-576064454),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res));
}));
});
app.main.init = (function app$main$init(){
app.main.prepare_metadata();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$CssBaseline$index.default], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Box$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"1vh"], null),new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"1fr 1fr 1fr",new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),"'header'\n'main'\n'footer'"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.header.header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.base_data))),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.base_data)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Container$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"main",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"main"], null)], null),"Main"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Box$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"footer",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"footer"], null),"Footer"], null)], null)], null),document.getElementById("app"));
});
app.main.hot_reload = (function app$main$hot_reload(){
return app.main.init();
});

//# sourceMappingURL=app.main.js.map
