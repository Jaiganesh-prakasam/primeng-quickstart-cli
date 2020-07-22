export interface EmpDetails {
  id: number;
  empGeneral: EmpGeneral;
  empContact: EmpContact;
  empSkill: EmpSkill[];
  empExperience: EmpExperience[];
}

export interface EmpGeneral {
  firstName: string;
  lastName: string;
  fullName: string;
  dob: string;
  age: number;
}

export interface EmpContact {
  email: string;
  phone: string;
  socialInfo: SocialInfo[];
}

export interface SocialInfo {
  url: string;
  type: string;
}
export interface EmpSkill {
  skill: string;
  rate: number;
}

export interface EmpExperience {
  companyName: string;
  location: {
    city: string;
    country: string;
  };
  companyUrl: string;
  role: string;
  fromDate: string;
  toDate: string;
  experience: number;
}
