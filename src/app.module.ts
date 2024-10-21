import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Import TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',           // Change to 'postgres' if using PostgreSQL
      host: 'localhost',       // Database host
      port: 5432,              // Port for MySQL (use 5432 for PostgreSQL)
      username: 'postgres',        // Your database username
      password: 'password',    // Your database password
      database: 'booking_system', // Name of your database
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Path to entities
      synchronize: true,       // Auto-sync entity changes (disable in production)
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
