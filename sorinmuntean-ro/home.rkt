#lang racket/base

(require racket/contract
         xml)

(provide page-title
         make)

(define page-title "sorinmuntean.ro")

(define (make)
  (define screens
    (list (welcome-screen)
          (ki-labs-screen)
          (ottonova-screen)
          (internations-screen)
          (honeytracks-screen)
          (agilio-screen)
          (arobs-screen)
          (utcn-screen)
          (contact-screen)))


  `(div
    ;; (header
    ;;  ([class "Header"])
    ;;  (a ([href ""] [class "header-logo"])
    ;;     (span ([class "header-kicker"]) "hi, my name is")
    ;;     (span ([class "header-name"]) "Sorin Muntean"))
    ;;  (nav ([class "header-nav"] [role "navigation"])
    ;;       (ul ([class "header-nav-list"])
    ;;           (li ([class "header-nav-list-item"])
    ;;               (a ([href "#contact"]) "contact")))))


    (div ([class "Bullets"])
         ,@(for/list ([_ (in-list screens)])
             '(div ([class "Bullet"]))))

    (div ([id "BackToTop"])
         (i ([class "ArrowUp"])))

    ,@screens))

(define (welcome-screen)
  (define color "#ffffff")
  (define background-color "#d42d38")
  (define content
    (list`(div ([class "WelcomeScreen"])
               (p ([class "WelcomeScreen-LargeText"])
                  "Hi!")
               (h1 ([class "WelcomeScreen-Text"])
                  "My name's Sorin.")
               (p ([class "WelcomeScreen-Text"])
                  "I live in Munich.")
               (p ([class "WelcomeScreen-Text"])
                  "I like programming."))))

  (screen #:background-color background-color #:color color #:content content #:id "welcome"))

(define (ki-labs-screen)
  (define (ki-labs-logo color)
    `(svg ([class "KiLabsLogo"] [viewBox "0 0 150 150"])
          (g ([stroke "none"] [stroke-width "1"] [fill "none"])
             (g ([stroke ,color] [transform "translate(-297.000000, -3782.000000)"] [stroke-width "7"])
                (g ([transform "translate(-296.000000, -545.000000)"])
                   (g ([transform "translate(202.000000, 3898.000000)"])
                      (g ([transform "translate(104.000000, 0.000000)"])
                         (path ([d "M296.768629,438.768629 L328.143162,567.12714 L425.12714,470.143162 L296.768629,438.768629 Z"])))))))))

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

  (company-screen #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description #:id "ki-labs"))

(define (ottonova-screen)
  (define (ottonova-logo color)
    `(svg ([class "OttonovaLogo"] [viewBox "0 0 125.648 135.553"])
          (g
           (path ([stroke ,color] [fill ,color] [d "M62.823,10.072v24.853h0.003h0.004c1.152,0,2.298,0.055,3.425,0.155c0.233,0.026,0.473,0.052,0.719,0.081 c0.146,0.02,0.33,0.039,0.55,0.052c18.731,2.312,33.23,18.258,33.237,37.594h24.888c-0.052-34.658-28.157-62.734-62.822-62.734 H62.823z"]))
           (path ([stroke ,color] [fill ,color] [d "M100.054,65.555c0.456,2.35,0.706,4.771,0.706,7.251c0,20.923-16.979,37.889-37.935,37.889 c-20.951,0-37.928-16.966-37.928-37.889c0-20.922,16.977-37.882,37.928-37.882c1.159,0,2.299,0.052,3.429,0.162 c0.239,0.019,0.479,0.048,0.719,0.078c0.148,0.022,0.33,0.032,0.55,0.052c3.344,0.249,15.15,0.039,27.704-7.012 c2.457-1.379,4.594-2.985,6.449-4.704C112.245,13.723,113.86,0,113.86,0s-9.427,10.197-24.826,10.197 c-12.166,0-21.473-0.081-24.84-0.12c-0.459-0.01-0.906-0.01-1.369-0.01C28.132,10.068,0,38.151,0,72.806 c0,34.655,28.132,62.747,62.825,62.747c34.697,0,62.822-28.092,62.822-62.747c0-2.454-0.146-4.872-0.421-7.251H100.054z"])))))

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

  (company-screen #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description #:id "ottonova"))

(define (internations-screen)
  (define (internations-logo color)
    `(svg ([class "InterNationsLogo"] [viewBox "0 0 88.167 78"])
          (path ([d "M81.165,51.111c-2.68-1.148-6.316,0.191-8.997-0.766 c-2.68-0.957-2.68-2.105-3.828-2.105s-24.886,8.997-34.266,7.656c-9.571-1.34-8.806-4.594-19.718-4.594 C3.446,51.303,0.957,51.494,0,50.729c0.957,1.148,2.488,2.105,8.04,2.297C13.782,67.383,27.757,77.72,44.22,77.72 C61.448,77.912,76.189,66.617,81.165,51.111L81.165,51.111L81.165,51.111z M33.117,24.694 c5.551,8.614,7.274,14.166,7.274,14.166s-0.191-4.594-1.724-7.465c0,0,4.403-3.063,5.552-6.7 c1.148-3.446,1.723-5.168,4.595-7.466c2.871-2.297,5.359-4.403,5.934-4.211s1.531,2.297,3.063,6.892 c1.531,4.594,3.828,9.188-0.766,13.783c-4.403,4.786-6.126,6.509-6.892,7.466s-1.148,1.914,0.766,2.68 c1.914,0.958,5.743,2.681,8.423,2.872c3.828,0.383,9.954-3.063,13.208-3.063c3.255,0,4.595,1.915,5.552,4.021 c0,0,2.105,1.34,3.254,2.297c1.149-3.637,1.724-7.466,1.724-11.486C83.272,17.42,65.852,0,44.22,0 c-9.38,0-17.994,3.446-24.886,8.997C24.312,13.974,27.757,16.271,33.117,24.694L33.117,24.694z M6.509,47.857 c0.574,2.297,3.445,2.297,6.891,2.297c4.786-3.637,8.423-2.105,11.869-4.211c-0.957-0.191-6.509-1.531-8.423-8.232 c-1.723-6.508-6.7-23.546-5.36-30.628c0,0.191-0.191,0.383-0.191,0.574c-0.766,2.488-0.957,7.083-0.574,11.869 c-3.254,5.743-5.36,12.443-5.36,19.525C5.36,41.923,5.742,44.986,6.509,47.857L6.509,47.857z"]))))

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
      "- relaunching the product's start, user profile, forum and settings screens"
      "- normalizing the user data model, developing tooling required to migrate the existing 1.5M users to the new model"
      "- designing and implementing the API used by the web & mobile apps"
      "The technology stack comprised PHP (Symfony2, Drupal and Magento), Backbone.js, Python, RabbitMQ, Apache Solr, MySQL & Redis."))

  (company-screen #:background-color background-color #:color color
                #:name name #:logo logo #:url url #:title title
                #:start-date start-date #:end-date end-date
                #:description description #:id "internations"))

(define (honeytracks-screen)
  (define (honeytracks-logo color)
    `(svg ([class "HoneyTracksLogo"] [viewBox "0 0 142.73 143.656"] [fill ,color])
          (path ([d "M95.513,0c4.442,0.059,4.818,3.237,7.284,5.118c5.664,4.323,10.08,10.111,15.109,15.089c1.938,1.919,5.57,3.665,5.936,7.006c0.416,1.013-1.654,7.264-2.159,8.892c-2.723,8.772-4.674,17.761-7.015,26.405c-3.85,2.129-8.449,2.492-13.219,4.042c-4.561,1.48-9.94,2.879-14.57,4.311c-2.157,0.667-7.935,2.483-9.712,1.348c-2.42-0.848-4.619-4.337-6.206-6.197c-1.257-1.476-3.202-2.659-4.587-4.042c-3.056-3.053-5.835-6.389-8.902-9.43c-1.897-1.882-5.37-3.672-6.206-6.466c-0.571-1.914,0.901-4.61,1.349-5.929c1.514-4.457,2.402-9.233,3.778-13.471c1.383-4.265,2.027-8.615,3.237-12.664c0.602-2.014,0.358-3.85,1.888-4.851c1.445-0.945,3.665-0.726,5.397-1.348c6.25-2.241,13.731-3.664,19.964-5.657C89.581,1.29,93.351,1.522,95.513,0zM91.465,13.74c-1.927,1.291-4.896,1.115-7.284,1.886c-4.077,1.317-8.488,2.64-12.681,3.773c-2.822,4.551-3.407,10.975-5.127,16.706c-0.502,1.672-1.916,4.815-1.078,6.735c1.048,2.406,7.255,7.573,9.443,9.431c2.818,2.395,3.624,6.48,8.902,6.466c1.651-1.107,4.109-0.983,6.205-1.617c4.586-1.258,9.174-2.515,13.76-3.772c2.754-4.397,3.493-10.971,5.126-16.436c0.477-1.595,2.106-4.385,1.349-6.736c-0.825-2.565-7.099-7.63-9.172-9.701C98.378,17.949,96.36,13.795,91.465,13.74zM44.251,51.193c0.834-0.025,1.708-0.037,2.159,0.27c2.598,0.75,5.929,5.384,7.824,7.275c6.263,6.255,12.482,12.468,18.616,18.86c0.005,2.719-0.772,4.258-1.348,6.197c-0.18,1.348-0.36,2.695-0.54,4.041c-1.432,4.364-3.04,9.683-4.316,14.283c-0.962,3.464-1.193,8.958-2.968,11.584c-1.529,2.265-5.446,2.03-8.364,2.966c-5.761,1.843-11.973,2.902-18.077,4.849c-3.136,1.001-6.646,2.634-10.521,2.694c-9.64-8.106-17.95-17.679-26.71-26.674c-0.104-4.987,1.998-9.188,3.238-13.204c2.426-7.854,3.161-15.882,6.205-23.171c7.069-3.83,18.09-5.208,26.171-7.814C38.249,52.501,42.162,52.724,44.251,51.193zM40.204,65.206c-1.5,0.933-3.574,0.752-5.396,1.347c-2.994,0.976-6.59,1.949-9.712,2.963c-2.288,0.742-4.888,0.461-5.667,2.695c-1.622,2.128-1.582,6.106-2.427,8.891c-0.559,1.839-3.585,10.431-3.237,12.125c0.387,1.891,4.434,5.335,5.936,6.468c1.815,1.37,3.47,3.559,4.856,5.389c1.799,1.616,3.598,3.234,5.396,4.85c5.961,0.045,12.53-2.813,17.537-4.311c1.97-0.591,4.153-0.358,5.396-1.618c1.989-2.016,2.528-9.625,3.508-12.931c0.496-1.677,3.237-7.837,1.889-9.972c-0.784-2.397-3.189-3.563-4.856-5.118c-0.54-0.719-1.08-1.438-1.619-2.155c-3.308-2.516-6.189-5.743-9.172-8.623C41.823,65.206,41.015,65.206,40.204,65.206zM113.588,70.594c0.991-0.038,2.396-0.117,2.968,0.27c3.31,1.087,5.478,5.305,7.825,7.546c6.321,6.027,12.264,12.324,18.345,18.591c0.114,5.495-2.143,10.09-3.506,14.55c-2.256,7.371-2.825,15.015-5.667,21.824c-7.371,4.069-18.554,5.19-27.249,7.813c-1.723,0.52-7.372,2.81-9.173,2.426c-2.831-0.603-4.918-4.372-6.746-6.197c-4.856-4.85-9.709-9.702-14.57-14.55c-1.85-1.845-4.903-3.351-5.665-6.196c-0.678-2.534,1.79-8.563,2.428-10.509c2.739-8.352,4.511-17.202,6.744-25.598c3.157-1.71,6.846-1.96,10.793-3.233c4.623-1.492,10.174-2.793,14.839-4.312C107.784,72.098,111.495,72.278,113.588,70.594zM111.161,84.335c-1.955,1.294-4.775,1.174-7.284,1.887c-2.804,0.797-6.031,1.844-8.634,2.695c-2.346,0.765-4.866,0.43-5.665,2.692c-1.185,1.311-1.006,3.459-1.619,5.391c-1.046,3.295-2.209,7.259-3.237,10.507c-0.412,1.306-1.292,4.147-0.81,5.66c0.527,1.647,2.635,2.898,3.778,4.041c2.877,2.874,5.755,5.748,8.633,8.621c1.224,1.224,2.423,3.305,4.317,3.773c2.387,0.591,5.518-1.355,7.285-1.888c4.905-1.469,9.526-2.637,14.299-3.771c2.989-4.662,3.566-11.256,5.396-17.244c0.487-1.594,2.105-4.408,1.079-6.466c-1.361-2.729-5.893-5.618-8.094-7.814C118.064,89.884,115.398,84.919,111.161,84.335z"]))))

  (define color "#000000")
  (define background-color "#fea104")
  (define name "HoneyTracks GmbH")
  (define url "https://www.honeytracks.com/")
  (define logo (honeytracks-logo color))
  (define title "Programmer")
  (define start-date "Oct. 2012")
  (define end-date "Oct. 2013")
  (define description
    '("During my time at HoneyTracks I've worked on the company's real-time analytics solution and the various tools built around it."
      "Most notably:"
      "- improving the in-house PHP framework and its various drivers (Memcached, beanstalkd)"
      "- introducing data fetching workers so chart data can be fetched in parallel and ahead of time"
      "The technology stack comprised PHP, Backbone.js, Beanstalkd, RabbitMQ & MySQL."))

  (company-screen #:background-color background-color #:color color
                  #:name name #:logo logo #:url url #:title title
                  #:start-date start-date #:end-date end-date
                  #:description description #:id "honeytracks"))

(define (agilio-screen)
  (define (agilio-logo color)
    `(svg ([class "AgilioLogo"] [viewBox "0 0 215.835 210.097"] [fill ,color])
          (path ([d "M205.688,103.352c-26.166,18.491-45.588-16.308-54.956-29.639c-2.667-3.798-6.101-7.063-10.148-9.316c4.586-4.215,10.107-6.298,15.219-8.47c-9.619,4.087,35.833-19.33,56.651,11.858C219.918,78.966,213.837,97.595,205.688,103.352zM141.432,55.927c-25.939,17.42-42.368,46.117-71.022,60.976c-12.967,6.727-35.437,7.928-49.038,0.847C2.736,108.048-5.947,86.476,4.462,61.009c9.436-23.075,30.047-41.693,52.594-51.531c6.766-2.929,12.913-4.821,19.773-6.601c6.155-1.498,11.791-2.896,17.253-2.843c40.482-0.802,62.806,12.881,84.549,30.487c14.846,12.019,15.724,12.744,22.827,22.865C187.206,40.345,153.864,47.579,141.432,55.927zM61.109,177.031c-17.412,4.231-39.48-9.821-33.82-28.795c2.292-7.677,6.915-10.68,11.426-13.065c0,0,15.88-8.033,40.981,13.2c4.096,3.464,8.118,6.585,11.85,8.335C85.063,167.922,74.633,173.743,61.109,177.031zM143.12,115.209c3.043-1.283,8.097-2.896,11.95-3.282c20.344-1.241,40.559,20.736,34.675,41.61c-1.525,5.415-2.895,9.901-5.192,14.178c-9.091,16.916-26.097,31.644-45.66,38.109c-34.754,11.489-64.639-2.199-85.565-17.275c-4.18-3.013-8.413-6.235-12.036-10.331c1.136,0.669,4.193,1.873,5.735,2.295c2.579,0.71,17.777,4.8,31.525-5.452c18.72-13.963,30.965-36.682,49.35-50.536C132.304,121.208,137.955,117.388,143.12,115.209z"]))))

  (define color "#ffffff")
  (define background-color "#0176b0")
  (define name "Agilio Software")
  (define url "https://www.agilio.eu/")
  (define logo (agilio-logo color))
  (define title "Programmer")
  (define start-date "Sep. 2011")
  (define end-date "June 2012")
  (define description
    '("My main activity at Agilio (formerly Garessio) was developing web applications. The projects I have worked on were mostly based on the CodeIgniter and Symfony2 frameworks."
      "Projects involved in:"
      "- Stipz, a (now defunct) video website that allowed users to (for a fee) stream video, host or attend webinars. Payment was handled using an in-house PayPal integration. (CodeIgniter, jQuery, Flash Media Server, MySQL)"
      "- Nebo Learning, an enterprise e-learning platform. (Python, Oracle Database)"
      "- Building the company's homescreen. (jQuery)"))

  (company-screen #:background-color background-color #:color color
                  #:name name #:logo logo #:url url #:title title
                  #:start-date start-date #:end-date end-date
                  #:description description #:id "agilio"))

(define (arobs-screen)
  (define (arobs-logo color)
    `(svg ([class "ArobsLogo"] [viewBox "0 0 503.833 515.639"] [fill ,color])
          (path ([d "M256.689,0.074c72.518-1.463,116.026,18.953,156.719,48.524c6.89,5.008,12.242,12.47,18.656,17.917c12.607,10.702,33.41,30.965,38.061,48.523c-0.248,0-0.499,0-0.747,0c-5.427-8.088-14.351-13.972-20.149-21.649c-26.518-35.108-73.707-56.704-123.137-69.427c-31.211-8.034-80.237-3.476-106.718,5.227C149.151,52.265,97.656,96.876,76.087,168.79c-7.951,26.507-11.342,70.581-2.985,100.037c17.663,62.253,55.469,100.444,117.913,117.95c21.877,6.132,56.124,3.609,74.627-2.984c6.063-2.162,10.862-2.128,16.42-4.482c36.146-15.301,58.897-40.072,73.881-76.892c8.035-19.738,13.27-55.378,5.225-79.878c-4.931-15.011-11.266-30.353-19.401-42.552c-5.032-7.541-12.894-13.446-17.915-20.903c0.5,0,0.996,0,1.495,0c2.736,2.62,6.316,3.114,9.701,5.226c4.946,3.082,9.446,7.616,14.18,11.198c4.07,3.08,7.352,8.566,10.448,12.69c2.515,3.353,6.513,6.237,8.955,9.705c9.826,13.961,18.051,29.945,23.881,47.778c11.893,36.384,1.637,82.792-10.448,110.487c-24.571,56.312-66.388,84.004-129.853,101.528c-21.163,5.844-58.324,8.662-82.091,2.239c-30.248-8.176-52.443-20.273-75.375-35.086c-7.031-4.544-12.781-12.162-19.404-17.173c-28.846-21.809-48.762-55.9-63.434-91.822c-3.174-7.771-3.466-15.467-5.97-23.889c-5.661-19.035-8.454-57.514-2.986-79.879c3.678-15.043,5.667-30.354,11.195-44.045c20.628-51.094,51.836-91.55,94.777-120.192c24.85-16.574,54.272-28.421,85.822-38.072c14.284-4.37,29.724-4.753,44.778-8.212C244.664,0.386,252.648,2.611,256.689,0.074zM283.554,52.332c26.721-0.529,50.652,0.945,70.149,8.211c67.984,25.335,117.836,77.969,141.049,148.559c10.48,31.87,13.054,86.242,1.492,120.191c-10.641,31.243-23.219,58.94-41.048,82.864c-28.301,37.983-70.256,64.976-117.165,84.358c-15.726,6.5-31.393,7.779-49.254,12.69c-31.929,8.785-83.072,8.604-114.181-0.744c-28.816-8.66-50.841-21.257-73.136-35.835c-1.244-0.248-14.949-11.927-20.896-16.422c-15.178-11.483-27.083-26.085-38.06-41.806c-3.608-5.171-8.621-10.299-10.448-17.172c0.25,0,0.499,0,0.748,0c6.311,10.29,16.941,19.188,25.373,27.623c18.117,18.119,38.191,36.237,62.688,47.776c15.497,7.301,32.14,11.706,49.254,17.17c5.473,0.747,10.946,1.492,16.418,2.242c32.799,7.821,75.494,1.186,101.497-7.469c59.68-19.86,104.339-56.13,131.343-108.247c5.646-10.895,6.297-22.349,10.448-35.084c8.075-24.78,9.03-69.736,1.495-96.303c-16.922-59.628-54.579-98.828-114.185-115.712c-8.408-2.384-15.969-0.976-25.373-2.987c-13.915-2.975-32.903-0.036-44.03,2.987c-35.102,9.537-57.455,21.494-78.359,44.792c-9.01,10.042-13.526,22.512-19.404,35.834c-8.583,19.456-15.739,56.783-6.716,82.118c6.004,16.857,12.162,32.888,21.643,46.285c4.31,6.089,10.77,10.99,14.926,17.17c-0.498,0-0.996,0-1.492,0c-2.312-2.798-6.611-3.174-9.702-5.228c-3.73-2.474-7.589-6.038-11.194-8.955c-13.342-10.795-28.504-32.559-36.568-48.527c-5.582-11.052-8.781-24.535-11.94-37.325c-5.53-22.384-0.75-54.083,5.224-70.919c4.29-12.091,5.71-22.968,11.194-33.595c18.364-35.59,49.524-63.824,86.567-80.625c14.761-6.693,31.036-10.354,47.764-14.93C265.845,53.627,278.867,55.282,283.554,52.332z"]))))

  (define color "#ffffff")
  (define background-color "#6dbe5d")
  (define name "Arobs Transilvania Software")
  (define url "https://www.arobs.ro/")
  (define logo (arobs-logo color))
  (define title "Programmer (Intern)")
  (define start-date "July 2011")
  (define end-date "Sep. 2011")
  (define description
    '("In the course of this curricular internship I worked on implementing and customizing Interactive Responsive Technology systems for pharmaceutical studies, as specified by external clients."
      "The technology stack comprised .NET, ASP.NET Web Forms and Microsoft SQL Server 2008."))

  (company-screen #:background-color background-color #:color color
                  #:name name #:logo logo #:url url #:title title
                  #:start-date start-date #:end-date end-date
                  #:description description #:id "arobs"))

(define (utcn-screen)
  (define (utcn-logo color)
    `(svg ([class "UtcnLogo"] [viewBox "0 0 276.792 228.041"] [fill ,color])
          (path ([d "M0.002,0.813c30.388,0,60.785,0,91.172,0c11.477,0,29.103-2.153,35.874,2.991 c7.901,9.266,2.988,44.385,2.988,59.797c0,54.807,0,109.631,0,164.438c-17.461,0.143-29.609-5.548-43.346-8.968 c-5.032-15.261-1.493-41.625-1.493-59.796c0-42.851,0-85.712,0-128.563c-1.571-2.149-2.33-5.863-2.989-8.968 c-2.99-2.491-5.979-4.983-8.97-7.475c-24.41,0-48.826,0-73.236,0C0.002,9.783,0.002,5.298,0.002,0.813zM276.509,0.813 c0,4.486,0,8.971,0,13.456c-24.412-0.167-54.453-2.752-76.225,1.494c-10.099,16.072-7.474,39.633-7.474,65.777 c0,45.34,0,90.696,0,136.036c-14.722,3.634-27.02,9.969-46.335,10.463c0-48.329,0-96.674,0-145.004 c0-24.982-2.779-55.389,1.495-77.736c2.64-1.437,2.513-1.879,5.979-2.99c6.544-4.093,24.858-1.496,34.375-1.496 C217.718,0.813,247.12,0.813,276.509,0.813zM0.002,29.217c18.553-0.445,55.709-4.622,64.268,5.979 c6.416,8.509,2.991,34.017,2.991,47.838c0,41.353,0,82.721,0,124.077c-0.996,0-1.992,0-2.991,0 c-11.166-11.319-27.757-16.971-37.365-29.898C-1.004,139.662,0.016,95.054,0.002,29.217zM276.509,29.217 c1.121,76.625,0.749,119.057-37.364,156.964c-8.106,8.063-17.27,17.646-29.893,20.93c0-55.307,0-110.629,0-165.935 c1.651-2.069,2.231-4.295,2.989-7.475C227.084,26.937,254.903,29.095,276.509,29.217z"]))))

  (define color "#ffffff")
  (define background-color "#bc171d")
  (define name "Technical University of Cluj-Napoca")
  (define url "https://www.utcluj.ro/")
  (define logo (utcn-logo color))
  (define title "Bachelor in Computer Science")
  (define start-date "Sep. 2008")
  (define end-date "Oct. 2012")
  (define description
    '("The education provided by the Computer Science Department of the Technical University of Cluj-Napoca ensures engineering-specific training, balance between the general technical, domain fundamental and narrow specialization disciplines and the integration of both theoretical and practical aspects. This formative type of education allows graduates to easily integrate and adapt to the dynamic requests of the industry."
      "The curriculum is based on the ACM curriculum and syllabi guidelines for computer science and engineering."
      "Their bachelor's degree programmes are taught in either Romanian or English, folow the Bologna system and comprise 240 ECTS points, spread throughout 8 semesters."))

  (company-screen #:background-color background-color #:color color
                  #:name name #:logo logo #:url url #:title title
                  #:start-date start-date #:end-date end-date
                  #:description description #:id "degree"))

(define (contact-screen)
  (define mail-logo
    '(div ([class "MailLogo-Container"])
          (a ([class "MailLogo-Link"] [href "mailto:hello@sorinmuntean.ro?Subject=Hello"])
             (svg ([class "MailLogo"] [viewBox "2 4 20 16"])
                  (path ([d "M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"]))))))
  (define github-logo
    '(div ([class "GitHubLogo-Container"])
          (a ([class "GitHubLogo-Link"] [href "https://github.com/sxn"] [target "_blank"] [rel "noopener noreferrer"])
             (svg ([class "GitHubLogo"] [viewBox "0 0 120.775 117.793"])
                  (path ([d "M60.388,0C27.041,0,0,27.035,0,60.387 c0,26.682,17.303,49.316,41.297,57.303c3.018,0.559,4.126-1.311,4.126-2.906c0-1.439-0.056-6.197-0.082-11.242 c-16.8,3.652-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.479-3.748,0.413-3.672,0.413-3.672 c6.063,0.426,9.257,6.225,9.257,6.225c5.386,9.23,14.127,6.563,17.573,5.02c0.542-3.902,2.106-6.568,3.834-8.076 c-13.413-1.525-27.514-6.705-27.514-29.843c0-6.593,2.359-11.98,6.223-16.209c-0.627-1.521-2.694-7.663,0.585-15.981 c0,0,5.071-1.622,16.61,6.191c4.817-1.338,9.983-2.009,15.115-2.033c5.131,0.023,10.301,0.694,15.127,2.033 c11.527-7.813,16.59-6.191,16.59-6.191c3.287,8.318,1.221,14.46,0.594,15.981c3.871,4.229,6.215,9.616,6.215,16.209 c0,23.195-14.127,28.3-27.574,29.796c2.166,1.873,4.096,5.549,4.096,11.182c0,8.08-0.07,14.584-0.07,16.572 c0,1.607,1.088,3.49,4.148,2.898c23.98-7.994,41.262-30.623,41.262-57.295C120.775,27.035,93.738,0,60.388,0z"]))
                  (path ([d "M22.872,86.704c-0.133,0.301-0.605,0.391-1.035,0.184c-0.438-0.197-0.684-0.605-0.542-0.906 c0.13-0.309,0.603-0.395,1.04-0.189C22.773,85.989,23.023,86.403,22.872,86.704L22.872,86.704z M22.129,86.153"]))
                  (path ([d "M25.318,89.432c-0.288,0.266-0.852,0.143-1.233-0.279c-0.396-0.422-0.469-0.984-0.177-1.256 c0.297-0.266,0.843-0.141,1.238,0.279C25.542,88.602,25.619,89.161,25.318,89.432L25.318,89.432z M24.742,88.813"]))
                  (path ([d "M27.699,92.909c-0.37,0.258-0.976,0.018-1.35-0.52c-0.37-0.537-0.37-1.182,0.009-1.439 c0.374-0.258,0.971-0.025,1.35,0.506C28.077,92.002,28.077,92.647,27.699,92.909L27.699,92.909z M27.699,92.909"]))
                  (path ([d "M30.961,96.27c-0.331,0.365-1.036,0.266-1.552-0.232c-0.528-0.486-0.675-1.178-0.344-1.543 c0.336-0.365,1.045-0.262,1.564,0.232C31.154,95.213,31.313,95.909,30.961,96.27L30.961,96.27z M30.961,96.27"]))
                  (path ([d "M35.461,98.221c-0.146,0.473-0.825,0.688-1.509,0.486c-0.684-0.207-1.13-0.762-0.992-1.238 c0.142-0.477,0.824-0.701,1.513-0.486C35.155,97.19,35.603,97.739,35.461,98.221L35.461,98.221z M35.461,98.221"]))
                  (path ([d "M40.403,98.583c0.017,0.498-0.563,0.91-1.281,0.92c-0.722,0.016-1.307-0.387-1.314-0.877 c0-0.504,0.567-0.912,1.289-0.924C39.814,97.688,40.403,98.088,40.403,98.583L40.403,98.583z M40.403,98.583"]))
                  (path ([d "M45.002,97.799c0.086,0.486-0.413,0.984-1.126,1.117c-0.701,0.129-1.35-0.172-1.439-0.652 c-0.087-0.498,0.421-0.998,1.121-1.127C44.271,97.014,44.911,97.305,45.002,97.799L45.002,97.799z M45.002,97.799"]))))))
  (define linkedin-logo
    '(div ([class "LinkedInLogo-Container"])
          (a ([class "LinkedInLogo-Link"] [href "https://www.linkedin.com/in/sorinmuntean"] [target "_blank"] [rel "noopener noreferrer"])
             (svg ([class "LinkedInLogo"] [viewBox "224.73 14.583 53.385 51.028"])
                  (g ([transform "translate(-200.55198,-393.96227)"])
                     (g ([transform "matrix(1.018827,0,0,-1.018827,170.5996,498.03288)"])
                        (path ([d "M261.873,37.749v33.794H250.64V37.749H261.873zM256.257,76.157c3.917,0,6.355,2.595,6.355,5.838c-0.073,3.316-2.438,5.839-6.28,5.839c-3.844,0-6.355-2.523-6.355-5.839c0-3.243,2.437-5.838,6.207-5.838H256.257L256.257,76.157z"]))
                        (path ([d "M268.089,37.749h11.232V56.62c0,1.01,0.073,2.02,0.37,2.741c0.811,2.019,2.66,4.108,5.763,4.108c4.064,0,5.691-3.099,5.691-7.641v-18.08h11.231v19.377c0,10.38-5.541,15.21-12.931,15.21c-6.059,0-8.72-3.387-10.198-5.694h0.075v4.901h-11.232C268.236,68.372,268.089,37.749,268.089,37.749L268.089,37.749z"]))))))))

  (define color "#000000")
  (define background-color "#ffffff")

  (define content
    (list
     `(div ([class "ContactScreen-Container"])
           (div ([class "ContactScreen-LeftContainer"])
                (div ([class "ContactScreen-Picture"])))
           (div ([class "ContactScreen-RightContainer"])
                (div ([class "ContactScreen-Description"])
                     (p ([class "ContactScreen-Text"])
                        "If you want to get in touch, here's how:")
                     (div ([class "ContactScreen-Methods"])
                          ,mail-logo
                          ,github-logo
                          ,linkedin-logo))))))

  (screen #:background-color background-color #:color color #:content content #:id "contact"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Containers ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(define/contract (screen #:background-color background-color #:color color #:content content #:id id)
  (-> #:background-color string? #:color string? #:content (listof xexpr?) #:id string? xexpr?)

  `(div ([id ,id]
         [class "Screen"]
         [style ,(format "color: ~a; background-color: ~a" color background-color)]
         [data-color ,color])
        ,@content))

(define/contract (company-screen #:background-color background-color #:color color
                               #:name name #:logo logo #:url url #:title title
                               #:start-date start-date #:end-date end-date
                               #:description description
                               #:id id)
  (-> #:background-color string? #:color string?
      #:name string? #:logo xexpr? #:url string? #:title string?
      #:start-date string? #:end-date string?
      #:description (listof string?)
      #:id string?
      xexpr?)

  (define (timeline-background the-color)
    (format
     "background-image: linear-gradient(90deg, transparent calc(50% - 0.81px), ~a calc(50% - 0.8px), ~a calc(50% + 0.8px), transparent calc(50% + 0.81px), transparent 100%)"
     the-color
     the-color))

  (define content
    (list
     `(div ([class "CompanyScreen-LeftContainer"])
           (div ([class "CompanyScreen-Company"])
                (div ([class "CompanyScreen-Logo"])
                     (a ([class "CompanyScreen-LogoLink"] [href ,url] [target "_blank"] [rel "noopener noreferrer"])
                        ,logo))
                (p ([class "CompanyScreen-CompanyName"])
                   ,name)
                (p ([class "CompanyScreen-CompanyTitle"])
                   ,title)))

     `(div ([class "Timeline"] [style ,(timeline-background color)])
           (div ([class "Timeline-DateContainer Timeline-Top"]
                 [style ,(format "color: ~a; background-color: ~a" background-color color)])
                (p ([class "Timeline-Date"]) ,end-date))

           (div ([class "Timeline-DateContainer Timeline-Bottom"]
                 [style ,(format "color: ~a; background-color: ~a" background-color color)])
                (p ([class "Timeline-Date"]) ,start-date)))

     `(div ([class "CompanyScreen-RightContainer"])
           (div ([class "CompanyScreen-DescriptionContainer"])
                ,@(for/list ([line (in-list description)])
                    `(p ([class "CompanyScreen-Description"])
                        ,line))))))

  (screen #:color color
          #:background-color background-color
          #:content content
          #:id id))