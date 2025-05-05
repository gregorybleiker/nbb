(ns main
  (:require ["jsr:@hono/hono" :as h]
            ["jsr:@gregb/jsr-nbb-tryout/reagent.core" :as r]
            )
  )

;; (->
;;  (js/Promise.resolve
;;   (n/atom "(+ 1 4)"))
;;  (.then (fn [s] (prn s) ))
;;  )

;(prn (js/JSON.stringify atom))

(defonce state (r/atom 0))

(def  app  (new h/Hono))

(.get
 app
 "/"
 (fn [ctx]
   (.text ctx "Hello Hono!"))
 )

(js/Deno.serve app.fetch)
