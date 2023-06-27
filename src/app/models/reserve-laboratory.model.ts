export interface ReserveLaboratory {
uid: string;
  email: string;
  name: string;
  laboratory: string;
  division: string;
  applicationDate: Date;
  entryTime: Date;
  task?: string;

  departureTime?: Date;
  observations?: string;
  registrationDate?: Date;
}
