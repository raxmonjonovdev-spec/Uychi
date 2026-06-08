import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';

@ApiTags('applications')
@Controller('api/applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Post('investor')
  async createInvestor(@Body() body: any) {
    return this.applicationsService.createInvestorApplication(body);
  }

  @Post('startup')
  async createStartup(@Body() body: any) {
    return this.applicationsService.createStartupApplication(body);
  }
}
