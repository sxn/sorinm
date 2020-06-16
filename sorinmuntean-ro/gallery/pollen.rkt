#lang racket/base

(require "gallery.rkt")

(provide
 (all-from-out "gallery.rkt"))

(module+ setup
  (require racket/runtime-path)
  (provide (all-defined-out))

  (define-runtime-path gallery-module "gallery.rkt")
  (define compile-cache-active #f)
  (define render-cache-active #f)

  (define cache-watchlist (list gallery-module)))
