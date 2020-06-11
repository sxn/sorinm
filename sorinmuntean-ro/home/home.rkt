#lang racket/base

(provide home-title
         make-home)

(define home-title "sorinmuntean.ro")

(define (make-home)
  `(div
    ,(welcome-page)
    ,(ki-labs-page)
    ,(ottonova-page)))

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
