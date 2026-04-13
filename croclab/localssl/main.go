package main

import (
	"log"
	"net/http"
)

func main() {
	// 1. Create a file server to serve the "static" directory
	fs := http.FileServer(http.Dir("./static"))

	// 2. Handle all requests using the file server
	http.Handle("/", fs)

	port := ":8090"
	log.Printf("🚀 Server starting at https://localhost%s\n", port)

	// 3. Start HTTPS server
	// Parameters: address, certFile, keyFile, handler
	err := http.ListenAndServeTLS(port, "hpssl2026cert.pem", "hpssl2026key.pem", nil)

	if err != nil {
		log.Fatal("ListenAndServeTLS error: ", err)
	}
}
