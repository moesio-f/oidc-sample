all: down up

up:
	@docker compose up --build -d

down:
	@docker compose down

