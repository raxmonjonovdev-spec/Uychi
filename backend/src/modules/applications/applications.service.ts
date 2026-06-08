import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  async createInvestorApplication(data: any) {
    return { message: 'Investor application submitted', data };
  }

  async createStartupApplication(data: any) {
    return { message: 'Startup application submitted', data };
  }
}
