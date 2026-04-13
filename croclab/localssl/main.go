package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	// 1. Create a file server to serve the "static" directory
	fs := http.FileServer(http.Dir("./static"))
	// run with `APP_ENV=production go run main.go` for production mode
	env := os.Getenv("APP_ENV")
	// 2. Handle all requests using the file server
	http.Handle("/", fs)

	port := ":8090"
	// 3. Start HTTPS server if local
	// Parameters: address, certFile, keyFile, handler
	if env == "production" {
		log.Printf("🚀 PROD MODE: Listening on HTTP port %s (SSL terminated at Load Balancer)\n", port)
		err := http.ListenAndServe(port, nil)
		if err != nil {
			log.Fatal("ListenAndServe error: ", err)
		}
	} else {
		log.Println("Running in development mode")
		log.Printf("🚀 Server starting at https://localhost%s\n", port)
		err := http.ListenAndServeTLS(port, "hpssl2026cert.pem", "hpssl2026key.pem", nil)

		if err != nil {
			log.Fatal("ListenAndServeTLS error: ", err)
		}
	}
}
