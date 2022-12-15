(ns app.main
  (:require
    ["axios" :as axios]
    [reagent.dom :as r.dom]
    [reagent.core :as r.core]
    [promesa.core :as promesa]
    [api.lol.metadata :as lol.metadata]
    [app.layout.header :as header]
    ["@mui/material/Typography" :default Typography]
    ["@mui/material/CssBaseline" :default CssBaseline]
    ["@mui/material/Stack" :default Stack]
    ["@mui/material/Container" :default Container]
    ["@mui/material/Box" :default Box]))


(def lol-client {:endpoints {:versions      "https://ddragon.leagueoflegends.com/api/versions.json"
                             :champions     "http://ddragon.leagueoflegends.com/cdn/{{version}}/data/{{language}}/champion.json"
                             :champion-icon "http://ddragon.leagueoflegends.com/cdn/{{version}}/img/champion/{{image}}"}})

(defonce base-data (r.core/atom
                     {:options   {:version  ""
                                  :language "pt_BR"}
                      :versions  []
                      :champions {}}))

(defn prepare-metadata []
  (-> (lol.metadata/get-versions lol-client)
      (promesa/then (fn [{:keys [data]}]
                      (swap! base-data assoc
                             :versions data)
                      (swap! base-data update :options
                             assoc :version (first data)))))
  (-> (lol.metadata/get-champions lol-client (:options @base-data))
      (promesa/then (fn [res]
                      (swap! base-data
                             assoc
                             :champions (:data res))))))

(defn init []
  (prepare-metadata)
  (r.dom/render [:<>
                 [:> CssBaseline]
                 [:> Box
                  {:sx                 {:max-height "1vh"}
                   :display            "grid"
                   :grid-template-rows "1fr 1fr 1fr"
                   :grid-template-areas
                   "'header'\n'main'\n'footer'"}
                  [header/header {:version  (-> @base-data
                                                :options
                                                :version)
                                  :language (-> @base-data
                                                :options
                                                :language)}]
                  [:> Container {:component "main"
                                 :sx        {:grid-area "main"}}
                   "Main"]
                  [:> Box {:component "footer"
                           :grid-area "footer"} "Footer"]]]
                (.getElementById js/document "app")))

(defn ^:dev/after-load hot-reload []
  (init))