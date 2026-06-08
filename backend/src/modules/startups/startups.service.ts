import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StartupsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'Get all startups' };
  }

  async findOne(id: string) {
    return { message: 'Get startup by ID', id };
  }
}
