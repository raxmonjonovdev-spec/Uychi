import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PartnersService } from './partners.service';

@ApiTags('partners')
@Controller('api/partners')
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Get()
  async findAll() {
    return this.partnersService.findAll();
  }
}
