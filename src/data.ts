interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export const data: Data = {
  report: [
    {
      id: '1',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '2',
      source: 'Rent',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '3',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '4',
      source: 'Rent',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '5',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '6',
      source: 'Rent',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '7',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '8',
      source: 'Rent',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '9',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '10',
      source: 'Rent',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '11',
      source: 'Salary',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};
