.PHONY: network
network:
	docker network create sorinmunteanro || true

.PHONY: build
build:
	docker-compose build

.PHONY: up
up: network
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: logs
logs: up
	docker logs sorinmunteanro --follow

.PHONY: restart
restart:
	docker-compose restart

.PHONY: up-dev
up-dev: network
	docker-compose -f docker-compose.dev.yml up -d

.PHONY: down-dev
down-dev: network
	docker-compose -f docker-compose.dev.yml down
