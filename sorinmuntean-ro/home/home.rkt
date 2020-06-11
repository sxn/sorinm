#lang racket/base

(provide home-title
         make-home)

(define home-title "sorinmuntean.ro")

(define (make-home)
  `(div
    ,(welcome-page)
    ,(ki-labs-page)))

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
