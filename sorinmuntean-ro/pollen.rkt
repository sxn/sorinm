#lang racket/base

(require "home/home.rkt")

(provide (all-from-out "home/home.rkt"))

(module setup racket/base
  (require file/glob)
  (require pollen/setup)
  (require racket/runtime-path racket/path racket/set)

  (define rkt-files (glob "home/*.rkt"))
  (define cache-watchlist rkt-files))
