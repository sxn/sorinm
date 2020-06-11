#lang racket/base

(require "home/home.rkt")

(provide (all-from-out "home/home.rkt"))

(module+ setup
  (require racket/runtime-path)
  (provide (all-defined-out))

  (define-runtime-path home-module "home/home.rkt")
  (define compile-cache-active #f)
  (define render-cache-active #f)

  (define cache-watchlist (list home-module)))
