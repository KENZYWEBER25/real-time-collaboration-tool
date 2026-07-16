# Real-time Collaboration Tool

Scalable insurance claims management platform with real-time updates.

## Features
- Real-time collaboration using SignalR
- Claims processing workflow
- Role-based access control
- High performance backend for 50k+ records/month

## Tech Stack
- **Backend**: .NET 8 (C#), MediatR (CQRS), Entity Framework Core
- **Frontend**: Angular 18 + NgRx + Angular Material
- **Real-time**: SignalR
- **Database**: PostgreSQL
- **Deployment**: Docker + CI/CD

## Key Technical Decisions
- Implemented CQRS pattern for clean architecture
- Used SignalR for live claim status updates
- Optimized performance with caching and efficient querying

## Project Scale
- Handled high-volume claims processing
- Focused on maintainability and scalability

## Setup
```bash
# Backend
cd backend
dotnet run

# Frontend
cd frontend
npm install
ng serve
