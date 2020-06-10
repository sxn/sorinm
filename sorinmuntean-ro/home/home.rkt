#lang racket/base

(provide home-title
         make-welcome)

(define home-title "sorinmuntean.ro")

(define (make-welcome content)
  `(div ([class "welcome"])
        ,content))
