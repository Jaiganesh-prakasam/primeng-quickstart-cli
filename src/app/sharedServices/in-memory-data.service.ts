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
          dob: '1991-01-20'
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
          dob: '1991-01-20'
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
          dob: '1991-01-20'
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
          firstName: 'Rick',
          lastName: 'Morty',
          dob: '1991-01-20'
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
          firstName: 'Vicky',
          lastName: 'Raj',
          dob: '1996-01-20'
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
          firstName: 'Vincent',
          lastName: 'chase',
          dob: '1991-01-20'
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
          firstName: 'Chase',
          lastName: 'Tucker',
          dob: '1991-01-20'
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
          firstName: 'Naresh',
          lastName: 'Rama moorthy',
          dob: '1991-01-20'
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
          firstName: 'Robert',
          lastName: 'Baratheo',
          dob: '1991-05-20'
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
          firstName: 'Ned',
          lastName: 'Stark',
          dob: '1989-01-20'
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
          firstName: 'Tony',
          lastName: 'Stark',
          dob: '1996-01-20'
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
          firstName: 'Jason',
          lastName: 'Wicket',
          dob: '1991-07-20'
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
          firstName: 'John',
          lastName: 'Ruler',
          dob: '1991-01-20'
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
          firstName: 'Tony',
          lastName: 'Winner',
          dob: '1991-01-20'
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
          firstName: 'Darryl',
          lastName: 'Heathscot',
          dob: '1993-09-24'
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
          firstName: 'Sean',
          lastName: 'Paul',
          dob: '1995-07-30'
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
          firstName: 'John',
          lastName: 'Bridge',
          dob: '1991-01-20'
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
