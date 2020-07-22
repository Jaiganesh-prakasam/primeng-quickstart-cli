import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmpDetails } from '../sharedInterface/emp-details';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: 's/s',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 's',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '2015-06-06',
            toDate: '2018-03-31',
            experience: 3,
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '2018-04-01',
            toDate: '2020-04-01',
            experience: 2,
          },
        ],
      },
      {
        id: 2,
        empGeneral: {
          firstName: 'Vincent',
          lastName: 'Board',
          fullName: 'Vincent Board',
          dob: '1991-01-20',
          age: 28,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 3,
        empGeneral: {
          firstName: 'Rtosh',
          lastName: 'Tailor',
          fullName: 'Rtosh Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 4,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 5,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: 's/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 17,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 6,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 7,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 8,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 9,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 10,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 11,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 12,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '2015-06-15',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 13,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 14,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 15,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
      {
        id: 16,
        empGeneral: {
          firstName: 'John Doe',
          lastName: 'Tailor',
          fullName: 'John Doe Tailor',
          dob: '1991-01-20',
          age: 26,
        },
        empContact: {
          email: 'xyz@gmail.com',
          phone: '979-979-9797',
          socialInfo: [
            {
              url: '/john-doe',
              type: 'facebook',
            },
          ],
        },
        empSkill: [
          {
            skill: 'angular',
            rate: 7.5,
          },
          {
            skill: 'javascript',
            rate: 7,
          },
        ],
        empExperience: [
          {
            companyName: 'abc1',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc1.com',
            role: 'junior developer',
            fromDate: '26-06-2015',
            toDate: '31-03-2018',
            experience: '3',
          },
          {
            companyName: 'abc2',
            location: {
              city: 'chennai',
              country: 'india',
            },
            companyUrl: 'www.abc2.com',
            role: 'senior developer',
            fromDate: '01-04-2018',
            toDate: 'present',
            experience: '2',
          },
        ],
      },
    ];
    return { employees };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: EmpDetails[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
