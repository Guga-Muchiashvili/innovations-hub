export interface ExchangeProgram {
  id: string;
  name: string;
  age: string;
  financeType: string;
  moneyAmount: string;
  period: string;
  sendingOrganisation: string;
  hostingOrganisation: string;
  formDedline: string;
  sendDate: string;
  backDate: string;
  registrationForm: string;
  description: string;
  images: string[];
  country: string;
  criteriums: string;
  ScolarshipDescription: string;
  isNotSponsored: string;
  additionalInfo: string;
  location: { lat: number; lng: number };
}
