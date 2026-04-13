FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .
# copy static files if needed
COPY --from=builder /app/static ./static
EXPOSE 8090
CMD ["./main"]
