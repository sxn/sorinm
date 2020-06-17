#lang racket/base

(require "blog.rkt")

(provide
 (all-from-out "blog.rkt"))

(module+ setup
  (require racket/runtime-path)
  (provide (all-defined-out))

  (define-runtime-path blog-module "blog.rkt")
  (define compile-cache-active #f)
  (define render-cache-active #f)

  (define cache-watchlist (list blog-module)))
