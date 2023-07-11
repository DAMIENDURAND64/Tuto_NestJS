import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ReportType } from './data';
import { AppService, ReportData } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: ReportType) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getReportById(@Param('type') type: ReportType, @Param('id') id: string) {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Body() { source, amount }: ReportData,
    @Param('type') type: ReportType,
  ) {
    return this.appService.createReport({ source, amount }, type);
  }

  @Put(':id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id') id: string,
    @Body() { source, amount }: ReportData,
  ) {
    return this.appService.updateReport({ source, amount }, type, id);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('type') type: ReportType, @Param('id') id: string) {
    return this.appService.deleteReport(type, id);
  }
}
