(ns app.layout.header
  (:require
    ["@mui/material/Typography" :default Typography]
    ["@mui/material/Stack" :default Stack]
    ["@mui/material/AppBar" :default AppBar]
    ["@mui/material/Toolbar" :default Toolbar]
    ["@mui/material/InputBase" :default InputBase]
    ["@mui/material/Avatar" :default Avatar]
    ["@mui/material/Box" :default Box]
    ["@mui/material/Paper" :default Paper]
    ["@mui/material/IconButton" :default IconButton]
    ["@mui/icons-material/Search" :default SearchIcon]))

(defn logo []
  [:> Stack {:spacing 0}
   [:h3 "Clojure of" [:br] "Legends"]])

(defn search-summoner-form []
  [:form {:on-submit (fn [e]
                       (.preventDefault e))}
   [:> Paper {:sx {:px 2}}
    [:> InputBase {:sx          {:outline "none"}
                   :variant     "outlined"
                   :placeholder "Nome de invocador"}]
    [:> IconButton {:variant              "contained"
                    :color                "secondary"
                    :type                 "submit"
                    :disable-focus-ripple true}
     [:> Avatar {:sx {:background-color "secondary.light"}}
      [:> SearchIcon]]]]])

(defn header [{:keys [version language]}]
  [:> AppBar
   {:position  "relative"
    :component "header" }
   [:> Toolbar
    [:> Box [logo]]
    [:> Box {:sx {:flex-grow       1
                  :display         "flex"
                  :justify-content "center"}}
     [search-summoner-form]]
    [:> Stack {:spacing 1
               :align "center"}
     [:> Typography
      (str "v" version)]
     [:> Typography language]]]])