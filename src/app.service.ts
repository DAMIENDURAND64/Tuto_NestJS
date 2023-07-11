import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 } from 'uuid';

export interface ReportData {
  source: string;
  amount: number;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string) {
    return data.report.find(
      (report) => report.type === type && report.id === id,
    );
  }
  createReport({ amount, source }: ReportData, type: ReportType) {
    const newReport = {
      id: v4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport({ amount, source }: ReportData, type: ReportType, id: string) {
    const report = data.report.find(
      (report) => report.type === type && report.id === id,
    );
    if (!report) {
      return 'report not found';
    }
    report.source = source;
    report.amount = amount;
    report.updated_at = new Date();
    return report;
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
