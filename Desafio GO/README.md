# FullCycle - Desafio Docker GoLang

> Projeto Desafio Docker GoLang, apresentar a mensagem *Full Cycle Rocks!!* quando executar a imagem

## Execução

Para rodar o container na sua máquina, basta executar:

```
docker run --rm walternascimento/challenge-go
```

## Gerar imagem

```
docker build -t walternascimento/challenge-go .
```

## Publicar imagem

```
docker login
docker push walternascimento/challenge-go
```

