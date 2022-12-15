(ns user
  (:require [shadow.cljs.devtools.server.nrepl :as shadow.nrepl]
            [shadow.cljs.devtools.server :as shadow.server]
            [shadow.cljs.devtools.api :as shadow.api]))

(comment

  (shadow.server/stop!)

  (do

    (shadow.server/start!)
    (shadow.api/watch :app)

    (shadow.api/nrepl-select :app))

  )