# proxyServer

Simple setup instructions for local development.

## Prerequisites

- Node.js 20+ and npm
- .NET 10 SDK
- A local certificate file named `hpssl2026.pfx` in the repository root
- The certificate passphrase available as the `VITE_CERT_PASSPHRASE` environment variable

The frontend Vite server runs on `https://localhost:8888`.
The backend ASP.NET app runs on `https://localhost:7878` and proxies requests to the frontend.

## Frontend

Install dependencies:

```bash
cd frontend
npm install
```

Run the Vite dev server:

```bash
export VITE_CERT_PASSPHRASE="your-passphrase"
cd frontend
npm run dev
```

## Backend

Restore and run the API:

```bash
cd backend
dotnet restore
dotnet run
```

## Development Flow

Start both services in separate terminals:

1. Run the frontend with `npm run dev`.
2. Run the backend with `dotnet run`.
3. Open `https://localhost:7878`.

The backend uses YARP to forward app traffic to the frontend dev server on port `8888`.
