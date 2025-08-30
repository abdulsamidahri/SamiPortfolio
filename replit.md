# Overview

This is a full-stack web application built with React and Express, designed as a professional portfolio website for Dr. Abdul Sami. The application showcases academic credentials, research interests, publications, and professional achievements in microbiology and biotechnology. The project follows a modern monorepo structure with separate client and server directories, utilizing TypeScript throughout and a comprehensive UI component library.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive component library based on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript using ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reloading with tsx and comprehensive error handling

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Schema**: Centralized schema definitions in shared directory with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production

## Design System
- **Component Library**: Custom UI components built on Radix UI primitives
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: System fonts with fallbacks for optimal performance
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Development Environment
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared utilities
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Build Process**: Vite for frontend bundling, esbuild for server bundling
- **Development Tools**: Replit-specific plugins for enhanced development experience

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support

## UI and Styling
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Feature-rich icon library
- **Embla Carousel**: Touch-friendly carousel component

## State Management and Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library

## Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment enhancements for Replit platform

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library

## Utilities and Helpers
- **clsx/tailwind-merge**: Conditional class name utilities
- **date-fns**: Date manipulation library
- **nanoid**: URL-safe unique ID generator