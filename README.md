<p align="center">
  <strong># README for Salon Booking App</strong>
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
      <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
      <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
      <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
    </p>
</p>

---

## Project Overview

**Salon Booking App** is a web application designed for **salons** and **barbers** to manage and streamline the process of booking appointments online. The platform aims to provide a hassle-free experience for customers to book their preferred barber at their convenience. Additionally, the platform enables barbers to create a profile, manage bookings, and maintain a centralized schedule, simplifying the process of managing their appointments.

### Purpose:
The purpose of this app is to create a **centralized platform** for customers and barbers, where:
- Customers can **browse** through a list of available barbers and book appointments at their convenience.
- Barbers can **sign up**, create a profile, and start accepting bookings without any hassle.

### Key Features:
- **User-friendly Booking System**: Customers can easily browse available barbers and book appointments.
- **Centralized Barber Listings**: All barbers are listed in one place, making it easy for customers to find the right service.
- **Barber Profiles**: Barbers can sign up, create profiles, and display their services, availability, and pricing.
- **Booking Management**: Barbers can manage their schedule and view upcoming appointments.
- **Secure Authentication**: Secure user authentication for both customers and barbers.

---

## Getting Started

### Project Setup

To get started with the Salon Booking App, follow these steps:

\`\`\`bash
# Install dependencies
$ npm install
\`\`\`

### Running the Application

You can run the project in different modes:

\`\`\`bash
# development mode
$ npm run start

# watch mode (automatically restarts when files change)
$ npm run start:dev

# production mode
$ npm run start:prod
\`\`\`

### Environment Setup

Make sure to set up your environment variables in a `.env` file. This file should include:

\`\`\`bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
PORT=3000
\`\`\`

### Database Configuration

The application uses **PostgreSQL** as the database. The connection is configured in \`app.module.ts\` using TypeORM.

\`\`\`typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}),
\`\`\`

---

