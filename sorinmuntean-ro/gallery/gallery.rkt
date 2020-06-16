#lang racket/base

(require xml)

(provide base-href
         page-title
         make)


(define-values
  (base-href page-title)
  (values "/gallery/" "sorinmuntean.ro | Photos"))

(define (make)
  `(div "Hi!"))
