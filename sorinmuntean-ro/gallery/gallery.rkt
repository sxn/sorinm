#lang racket/base

(require xml)

(provide base-href
         page-title
         make)

(define base-href "/gallery/")
(define page-title "sorinmuntean.ro | Photos")

(define (make)
  `(div "Hi!"))
