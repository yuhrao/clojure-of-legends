(ns utils.http
  (:require ["axios" :as axios]
            [promesa.core :as promesa]))

(defn request [req]
  (-> (.default axios (clj->js req))
      (promesa/then (fn [res]
                      (js->clj res :keywordize-keys true)))))