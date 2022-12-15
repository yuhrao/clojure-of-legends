(ns api.lol.metadata
  (:require [utils.http :as http]
            ["mustache" :as mustache]
            [promesa.core :as promesa]))

(defn get-versions [lol-client]
  (let [req {:method "get"
             :url    (-> lol-client
                         :endpoints
                         :versions)}]
    (http/request req)))

(defn- build-champion-icon-url [lol-client version image-name]
  (mustache/render (-> lol-client
                       :endpoints
                       :champion-icon)
                   (clj->js {:version version
                             :image   image-name})))


(defn get-champions [lol-client {:keys [version language]}]
  (let [req {:method "get"
             :url    (mustache/render (-> lol-client
                                          :endpoints
                                          :champions)
                                      (clj->js {:version  version
                                                :language language}))}]
    (-> (http/request req)
        (promesa/then
          (fn [res]
            (let [normalize-champion (fn [champion]
                                       (let [new-key (int (:key champion))
                                             image (build-champion-icon-url
                                                     lol-client
                                                     version
                                                     (-> champion
                                                         :image
                                                         :full))]
                                         (-> champion
                                             (select-keys
                                               [:id
                                                :tags
                                                :partype
                                                :name])
                                             (assoc :key new-key
                                                    :image image))))
                  new-data (->> res
                                :data
                                :data
                                (map (fn [[_ champion]]
                                       (let [c (normalize-champion champion)]
                                         [(:key c) c])))
                                (into {}))]
              (assoc res :data new-data)))))))


;; TODO: Get items and build their image URL
;; Get game modes & types
;; Get summoner spells and their images