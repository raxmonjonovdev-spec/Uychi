import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StartupsService } from './startups.service';

@ApiTags('startups')
@Controller('api/startups')
export class StartupsController {
  constructor(private startupsService: StartupsService) {}

  @Get()
  async findAll() {
    return this.startupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.startupsService.findOne(id);
  }
}
