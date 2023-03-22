import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { UserDetails } from '../models/user-details';

import { DataService } from './data.service';
import { userDetails } from './testing-data';

describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('fetchProfileDetails', ['get']);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set profile details', (done: DoneFn) => {
    const expectedUserDetails:any =  userDetails;
    httpClientSpy.get.and.returnValue(of(expectedUserDetails));
    service.fetchProfileDetails('freeCodeCamp')
    service.profileDetail$.subscribe({
      next:(userDetails)=>{
        if(userDetails){
          expect(userDetails)
          .withContext('expected user details')
          .toEqual(expectedUserDetails);
          done();
        }
      }
    })  
  });
});


