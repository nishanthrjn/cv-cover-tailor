# CareerForge

**CareerForge** is a modular job application management prototype built with NestJS and Next.js.  
It explores structured job tracking, AI-assisted document tailoring, and deterministic PDF generation using LaTeX.

This repository focuses on backend architecture, provider abstraction, and reproducible document workflows.

---

## Scope (MVP)

The current implementation includes:

- Job tracking (CRUD)
- Modular NestJS backend structure
- AI provider abstraction layer (strategy pattern)
- Tailored section generation via pluggable LLM providers
- LaTeX-based PDF document construction
- MongoDB persistence
- Next.js frontend for interaction

---

## What Is Not Yet Implemented

- Production-grade authentication
- Full search engine integration
- Advanced analytics or dashboards
- Scalable deployment infrastructure

This project is a system design and architectural exploration, not a production SaaS platform.


---

## 🧱 Architecture Overview

High-level architecture:

- **Frontend**
  - Next.js
  - TypeScript
  - React Query
  - Zod validation
  - Routes: `/jobs`, `/jobs/:id`

- **Backend**
  - NestJS (TypeScript)
  - Modular architecture 
  - Dependency Injection-first design
  - Modules: `jobs`, `ai`, `latex`
  - REST API

- **Persistence**
  - MongoDB
  - Mongoose schemas
  - Collections:
    - `JobApplication`
    - `TailoredSections`

- **AI Provider Layer**
  - Strategy pattern
  - Pluggable providers
  - No provider lock-in

AI logic is isolated behind an interface to allow provider switching without business logic changes.

- **Document Generation**
  - LaTeX template builder
  - Domain-to-template mapping
  - Deterministic output

---

## 🧠 AI Provider Abstraction

AI is intentionally isolated behind a provider interface.

```text
ILLMProvider
 ├─ OpenAIProvider
 ├─ GeminiProvider
 └─ DeepSeekProvider
```

---

## 🚀 Getting Started

You can run CareerForge either using **Docker** (recommended) or **Manually** via Node.js.

### Prerequisites
- Node.js (v18 or v20+)
- npm
- Docker and Docker Compose (If using Docker setup)
- MongoDB (If running manually)

### Option 1: Run with Docker Compose (Recommended)

This approach spins up the MongoDB database, the Next.js Frontend, and the NestJS Backend in isolated containers.

1. Navigate to the `infra` directory:
   ```
   cd infra
   ```
2. Start the services using Docker Compose:
   ```
   docker-compose up -d --build
   ```

**Services will be accessible at:**
- **Frontend App**: `http://localhost:3000`
- **Backend API**: `http://localhost:4000`
- **MongoDB**: `localhost:27017`

> *Note: By default, the `docker-compose.yml` uses the example `.env` files located in the `infra/env/` folder.*

### Option 2: Run Manually (Local Dev)

**1. Install Dependencies**
At the root of the project, run:
```
npm install
```

**2. Start MongoDB**
Ensure you have a MongoDB instance running locally on `mongodb://localhost:27017` or prepare your MongoDB URI. Create the appropriate `.env` files for the frontend and backend if necessary based on `infra/env/` examples.

**3. Start the Backend API (NestJS)**
```
cd apps/backend
npm run start:dev
```
*Runs on `http://localhost:4000`.*

**4. Start the Frontend App (Next.js)**
In a new terminal window:
```
cd apps/frontend
npm run dev
```
*Runs on `http://localhost:3000`.*



