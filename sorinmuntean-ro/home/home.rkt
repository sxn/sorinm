#lang racket/base

(provide home-title
         make-home)

(define home-title "sorinmuntean.ro")

(define (make-home)
  `(div
    ,(welcome-page)
    ,(ki-labs-page)
    ,(ottonova-page)
    ,(internations-page)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Welcome ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (welcome-page)
  '(div ([class "Page"] [style "color: #FFFFFF; background-color: #d42d38"])
    (div ([class "WelcomePage"])
      (p ([class "WelcomePage-LargeText"])
         "Hi!")
      (p ([class "WelcomePage-Text"])
         "My name's Sorin.")
      (p ([class "WelcomePage-Text"])
         "I live in Munich")
      (p ([class "WelcomePage-Text"])
         "I like programming"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; KI labs ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (ki-labs-page)
  (define color "#000000")
  (define background-color "#ffcc00")
  (define name "KI labs")
  (define url "https://ki-labs.com/")
  (define logo (ki-labs-logo color))
  (define title "Programmer")
  (define start-date "Feb. 2019")
  (define end-date "today")
  (define description
    '("KI labs is an IT consulting firm, part of KI group."
      "Since joining, I've worked on three products:"
      "- a vehicle data enrichment and online sale-readiness assessment platform (VueJS, TypeScript, Python w/ Flask)"
      "- an online marketplace for continuing professional development programs, aimed at professionals in the healthcare industry (VueJS, TypeScript)"
      "- a cloud computing services platform (ReactJS)"))

  (company-page #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description))

(define (ki-labs-logo color)
  `(svg
    ([class "KiLabsLogo"] [viewBox "0 0 150 150"])
    (g ([stroke "none"] [stroke-width "1"] [fill "none"])
       (g ([stroke ,color] [transform "translate(-297.000000, -3782.000000)"] [stroke-width "7"])
          (g ([transform "translate(-296.000000, -545.000000)"])
             (g ([transform "translate(202.000000, 3898.000000)"])
              (g ([transform "translate(104.000000, 0.000000)"])
                 (path ([d "M296.768629,438.768629 L328.143162,567.12714 L425.12714,470.143162 L296.768629,438.768629 Z"])))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ottonova ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (ottonova-page)
  (define color "#ffffff")
  (define background-color "#57c0dc")
  (define name "ottonova")
  (define url "https://ottonova.de/")
  (define logo (ottonova-logo color))
  (define title "Programmer")
  (define start-date "May 2017")
  (define end-date "Jan. 2019")
  (define description
    '("ottonova is the first completely digital health insurance in Germany."
      "Activity:"
      "- developing customer-facing and internal applications using Angular"
      "- building microservices using NodeJS & Express, deployed to Amazon ECS"
      "The technology stack primarily comprises TypeScript (Angular), NodeJS (Express), PHP (Symfony)"))

  (company-page #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description))

(define (ottonova-logo color)
  `(svg ([class "OttonovaLogo"] [viewBox "0 0 125.648 135.553"])
    (g
      (path ([stroke ,color] [fill ,color] [d "M62.823,10.072v24.853h0.003h0.004c1.152,0,2.298,0.055,3.425,0.155c0.233,0.026,0.473,0.052,0.719,0.081 c0.146,0.02,0.33,0.039,0.55,0.052c18.731,2.312,33.23,18.258,33.237,37.594h24.888c-0.052-34.658-28.157-62.734-62.822-62.734 H62.823z"]))
      (path ([stroke ,color] [fill ,color] [d "M100.054,65.555c0.456,2.35,0.706,4.771,0.706,7.251c0,20.923-16.979,37.889-37.935,37.889 c-20.951,0-37.928-16.966-37.928-37.889c0-20.922,16.977-37.882,37.928-37.882c1.159,0,2.299,0.052,3.429,0.162 c0.239,0.019,0.479,0.048,0.719,0.078c0.148,0.022,0.33,0.032,0.55,0.052c3.344,0.249,15.15,0.039,27.704-7.012 c2.457-1.379,4.594-2.985,6.449-4.704C112.245,13.723,113.86,0,113.86,0s-9.427,10.197-24.826,10.197 c-12.166,0-21.473-0.081-24.84-0.12c-0.459-0.01-0.906-0.01-1.369-0.01C28.132,10.068,0,38.151,0,72.806 c0,34.655,28.132,62.747,62.825,62.747c34.697,0,62.822-28.092,62.822-62.747c0-2.454-0.146-4.872-0.421-7.251H100.054z"])))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; InterNations ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (internations-page)
  (define color "#ffffff")
  (define background-color "#203049")
  (define name "InterNations GmbH")
  (define url "https://www.internations.org/")
  (define logo (internations-logo color))
  (define title "Programmer")
  (define start-date "Oct. 2013")
  (define end-date "Apr. 2016")
  (define description
    '("At InterNations I took part in the relaunch of their product, working in a distributed team located in Munich and Vilnius."
      "Notable contributions include:"
      "- relaunching the product's start, user profile, forum and settings pages"
      "- normalizing the user data model, developing tooling required to migrate the existing 1.5M users to the new model"
      "- designing and implementing the API used by the web & mobile apps"
      "The technology stack comprised PHP (Symfony2, Drupal and Magento), Backbone.js, Python, RabbitMQ, Apache Solr, MySQL & Redis."))

  (company-page #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description))

(define (internations-logo color)
  `(svg ([class "InterNationsLogo"] [viewBox "0 0 88.167 78"])
        (path ([d "M81.165,51.111c-2.68-1.148-6.316,0.191-8.997-0.766 c-2.68-0.957-2.68-2.105-3.828-2.105s-24.886,8.997-34.266,7.656c-9.571-1.34-8.806-4.594-19.718-4.594 C3.446,51.303,0.957,51.494,0,50.729c0.957,1.148,2.488,2.105,8.04,2.297C13.782,67.383,27.757,77.72,44.22,77.72 C61.448,77.912,76.189,66.617,81.165,51.111L81.165,51.111L81.165,51.111z M33.117,24.694 c5.551,8.614,7.274,14.166,7.274,14.166s-0.191-4.594-1.724-7.465c0,0,4.403-3.063,5.552-6.7 c1.148-3.446,1.723-5.168,4.595-7.466c2.871-2.297,5.359-4.403,5.934-4.211s1.531,2.297,3.063,6.892 c1.531,4.594,3.828,9.188-0.766,13.783c-4.403,4.786-6.126,6.509-6.892,7.466s-1.148,1.914,0.766,2.68 c1.914,0.958,5.743,2.681,8.423,2.872c3.828,0.383,9.954-3.063,13.208-3.063c3.255,0,4.595,1.915,5.552,4.021 c0,0,2.105,1.34,3.254,2.297c1.149-3.637,1.724-7.466,1.724-11.486C83.272,17.42,65.852,0,44.22,0 c-9.38,0-17.994,3.446-24.886,8.997C24.312,13.974,27.757,16.271,33.117,24.694L33.117,24.694z M6.509,47.857 c0.574,2.297,3.445,2.297,6.891,2.297c4.786-3.637,8.423-2.105,11.869-4.211c-0.957-0.191-6.509-1.531-8.423-8.232 c-1.723-6.508-6.7-23.546-5.36-30.628c0,0.191-0.191,0.383-0.191,0.574c-0.766,2.488-0.957,7.083-0.574,11.869 c-3.254,5.743-5.36,12.443-5.36,19.525C5.36,41.923,5.742,44.986,6.509,47.857L6.509,47.857z"]))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Containers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (company-page #:background-color background-color #:color color
                      #:name name #:logo logo #:url url #:title title
                      #:start-date start-date #:end-date end-date
                      #:description description)
  `(div ([class "Page"] [style ,(format "color: ~a; background-color: ~a" color background-color)])
        (div ([class "CompanyPage-LeftContainer"])
             (div ([class "CompanyPage-Company"])
                  (div ([class "CompanyPage-Logo"])
                       (a ([class "CompanyPage-LogoLink"] [href ,url] [target "_blank"] [rel "noopener noreferrer"])
                          ,logo))
                  (p ([class "CompanyPage-CompanyName"])
                     ,name)
                  (p ([class "CompanyPage-CompanyTitle"])
                     ,title)))

        (div ([class "Timeline"]
              [style ,(timeline-background color)])
             (div ([class "Timeline-DateContainer Timeline-Top"]
                   [style ,(format "color: ~a; background-color: ~a" background-color color)])
                  (p ([class "Timeline-Date"]) ,end-date))

             (div ([class "Timeline-DateContainer Timeline-Bottom"]
                   [style ,(format "color: ~a; background-color: ~a" background-color color)])
                  (p ([class "Timeline-Date"]) ,start-date)))

        (div ([class "CompanyPage-RightContainer"])
             (div ([class "CompanyPage-DescriptionContainer"])
                  ,@(for/list ([line description])
                      `(p ([class "CompanyPage-Description"])
                          ,line))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Helpers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define (timeline-background color)
  (format
   "background-image: linear-gradient(90deg, transparent calc(50% - 0.81px), ~a calc(50% - 0.8px), ~a calc(50% + 0.8px), transparent calc(50% + 0.81px), transparent 100%)"
   color
   color))
