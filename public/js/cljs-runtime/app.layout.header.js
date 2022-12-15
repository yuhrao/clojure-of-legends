goog.provide('app.layout.header');
var module$node_modules$$mui$material$node$Typography$index=shadow.js.require("module$node_modules$$mui$material$node$Typography$index", {});
var module$node_modules$$mui$material$node$Stack$index=shadow.js.require("module$node_modules$$mui$material$node$Stack$index", {});
var module$node_modules$$mui$material$node$AppBar$index=shadow.js.require("module$node_modules$$mui$material$node$AppBar$index", {});
var module$node_modules$$mui$material$node$Toolbar$index=shadow.js.require("module$node_modules$$mui$material$node$Toolbar$index", {});
var module$node_modules$$mui$material$node$InputBase$index=shadow.js.require("module$node_modules$$mui$material$node$InputBase$index", {});
var module$node_modules$$mui$material$node$Avatar$index=shadow.js.require("module$node_modules$$mui$material$node$Avatar$index", {});
var module$node_modules$$mui$material$node$Box$index=shadow.js.require("module$node_modules$$mui$material$node$Box$index", {});
var module$node_modules$$mui$material$node$Paper$index=shadow.js.require("module$node_modules$$mui$material$node$Paper$index", {});
var module$node_modules$$mui$material$node$IconButton$index=shadow.js.require("module$node_modules$$mui$material$node$IconButton$index", {});
var module$node_modules$$mui$icons_material$Search=shadow.js.require("module$node_modules$$mui$icons_material$Search", {});
app.layout.header.logo = (function app$layout$header$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Stack$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Clojure of",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Legends"], null)], null);
});
app.layout.header.search_summoner_form = (function app$layout$header$search_summoner_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return e.preventDefault();
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Paper$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$InputBase$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Nome de invocador"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$IconButton$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disable-focus-ripple","disable-focus-ripple",-1758010921),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Avatar$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"secondary.light"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$icons_material$Search.default], null)], null)], null)], null)], null);
});
app.layout.header.header = (function app$layout$header$header(p__28770){
var map__28771 = p__28770;
var map__28771__$1 = cljs.core.__destructure_map(map__28771);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword(null,"version","version",425292698));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$AppBar$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"component","component",1555936782),"header"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Toolbar$index.default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Box$index.default,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.header.logo], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Box$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.layout.header.search_summoner_form], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Stack$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(1),new cljs.core.Keyword(null,"align","align",1964212802),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Typography$index.default,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$mui$material$node$Typography$index.default,language], null)], null)], null)], null);
});

//# sourceMappingURL=app.layout.header.js.map
