goog.provide('api.lol.metadata');
var module$node_modules$mustache$mustache=shadow.js.require("module$node_modules$mustache$mustache", {});
api.lol.metadata.get_versions = (function api$lol$metadata$get_versions(lol_client){
var req = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"versions","versions",536521978).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(lol_client))], null);
return utils.http.request(req);
});
api.lol.metadata.build_champion_icon_url = (function api$lol$metadata$build_champion_icon_url(lol_client,version,image_name){
return module$node_modules$mustache$mustache.render(new cljs.core.Keyword(null,"champion-icon","champion-icon",868337930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(lol_client)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"image","image",-58725096),image_name], null)));
});
api.lol.metadata.get_champions = (function api$lol$metadata$get_champions(lol_client,p__28785){
var map__28786 = p__28785;
var map__28786__$1 = cljs.core.__destructure_map(map__28786);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28786__$1,new cljs.core.Keyword(null,"version","version",425292698));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28786__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var req = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"url","url",276297046),module$node_modules$mustache$mustache.render(new cljs.core.Keyword(null,"champions","champions",-576064454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"endpoints","endpoints",274088209).cljs$core$IFn$_invoke$arity$1(lol_client)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"language","language",-1591107564),language], null)))], null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(utils.http.request(req),(function (res){
var normalize_champion = (function (champion){
var new_key = (new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(champion) | (0));
var image = api.lol.metadata.build_champion_icon_url(lol_client,version,new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(champion)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(champion,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"partype","partype",-167151486),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),new_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"image","image",-58725096),image], 0));
});
var new_data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28787){
var vec__28788 = p__28787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(0),null);
var champion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(1),null);
var c = normalize_champion(champion);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c),c], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"data","data",-232669377),new_data);
}));
});

//# sourceMappingURL=api.lol.metadata.js.map
