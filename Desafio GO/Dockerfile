#Imagem go para efetuar a compilação
FROM golang:latest as builder
#diretório de trabalho
WORKDIR /app
#enviando o código-fonte
COPY src/main.go /app 
#compilando
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags "-w -s" -o server main.go 

#imagem para execução
FROM scratch
#diretório de trabalho
WORKDIR /app 
#copiando o binário compilado 
COPY --from=builder /app/server ./ 
#executando
CMD ["./server"]