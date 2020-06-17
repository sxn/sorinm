#lang racket/base

(require xml)

(provide base-href
         page-title
         make)

(define-values
  (base-href page-title)
  (values "/blog/" "sorinmuntean.ro | Blog"))

(define (make)
  `(div "Hi!"))
