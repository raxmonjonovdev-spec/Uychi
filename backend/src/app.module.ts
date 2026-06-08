import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { StartupsModule } from './modules/startups/startups.module';
import { PartnersModule } from './modules/partners/partners.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ContactModule } from './modules/contact/contact.module';
import { ApplicationsModule } from './modules/applications/applications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    StartupsModule,
    PartnersModule,
    ArticlesModule,
    JobsModule,
    ContactModule,
    ApplicationsModule,
  ],
})
export class AppModule {}
