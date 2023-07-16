import { Injectable } from '@nestjs/common';
import { ReportType, data } from '../data';
import { v4 } from 'uuid';
import { ReportResponseDto } from '../dtos/report.dto';

export interface ReportData {
  source: string;
  amount: number;
}
export interface UpdateReportData {
  source?: string;
  amount?: number;
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }
  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report.find(
      (report) => report.type === type && report.id === id,
    );
    if (!report) return;
    return new ReportResponseDto(report);
  }
  createReport(
    { amount, source }: ReportData,
    type: ReportType,
  ): ReportResponseDto {
    const newReport = {
      id: v4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }
  updateReport(
    { amount, source }: UpdateReportData,
    type: ReportType,
    id: string,
  ): ReportResponseDto {
    const report = data.report.find(
      (report) => report.type === type && report.id === id,
    );
    if (!report) return;
    report.source = source;
    report.amount = amount;
    report.updated_at = new Date();
    return new ReportResponseDto(report);
  }
  deleteReport(type: ReportType, id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reportIndex = data.report.findIndex(
      (report) => report.type === reportType && report.id === id,
    );
    if (reportIndex === -1) {
      return 'report not found';
    }
    data.report.splice(reportIndex, 1);
    return 'report deleted';
  }
}
