#lang racket/base

(require "gallery/gallery.rkt"
         "home/home.rkt")

(provide
 (all-from-out "gallery/gallery.rkt")
 (all-from-out "home/home.rkt"))

(module+ setup
  (require racket/runtime-path)
  (provide (all-defined-out))

  (define-runtime-path home-module "home/home.rkt")
  (define-runtime-path gallery-module "gallery/gallery.rkt")
  (define compile-cache-active #f)
  (define render-cache-active #f)

  (define cache-watchlist (list home-module gallery-module)))
