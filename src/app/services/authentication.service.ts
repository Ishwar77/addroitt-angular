import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform, AlertController } from '@ionic/angular';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { State } from '../pages/profile-form/state.model';
import { Router } from '@angular/router';


const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.loadToken();
  }

  private studentid;

  studId: string;

  private userid;
  public AuthStatusEmitter = new Subject<{ authstate: boolean, isAuthenticated: boolean }>();

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // login(credentials): Observable<any> {
  //   // return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
  //   return this.http.post(`http://localhost:3000/api/sdetails/login`, credentials).pipe(
  //     map((data: any) => data.token),
  //     switchMap(token => {
  //       return from(Storage.set({ key: TOKEN_KEY, value: token }));
  //     }),
  //     tap(_ => {
  //       this.isAuthenticated.next(true);
  //     })
  //   )
  // }

  login(email: string, password: string) {

    const authdata = {
      email: email,
      password: password,
    };

    this.http.post<{ token: string, expiresIn: number, userid: string }>(`http://localhost:3000/api/sdetails/login`, authdata)
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.token = result.token;
          this.userid = result.userid;
          const timervalue = result.expiresIn;

          this.setAuthotimer(timervalue);
          const current_date = new Date();
          const exp_date = new Date(current_date.getTime() + timervalue * 1000);

          this.saveAuthDataLocal(this.token, exp_date, this.userid);
          this.AuthStatusEmitter.next({
            authstate: true,
            isAuthenticated: true
          });
          this.isAuthenticated.next(true);
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        }
      },
        error => {
          this.AuthStatusEmitter.next({
            authstate: false,
            isAuthenticated: false
          });
          this.isAuthenticated.next(true);
        });
  }

  private saveAuthDataLocal(token: string, expiresInDate: Date, userid: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userid', userid);
    localStorage.setItem('expirationDate', expiresInDate.toISOString());
  }

  private setAuthotimer(duration: number) {
    setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  // register(credentials) {
  //   return this.http.post(`http://localhost:3000/api/sdetails`, credentials).pipe(
  //     catchError(e => {
  //       this.showAlert();
  //       throw new Error(e);
  //     })
  //   );
  // }


  getStudentId() {
    this.studId = window.localStorage.getItem('studentid');
    return this.studId;
  }

  register(credentials) {
    return this.http.post<{ studentid: string }>(`http://localhost:3000/api/sdetails/`, credentials)
      .subscribe((result) => {
        if (result) {
          this.studentid = result.studentid;
          this.saveStudentIdLocal(this.studentid);
        }
      },
        error => {
          this.showAlert();
        });
  }

  private saveStudentIdLocal(studentid: string) {
    localStorage.setItem('studentid', studentid);
  }

  resendOtp(idstudent_details: string, credentials) {
    return this.http.put<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/otp/` + idstudent_details, credentials);
  }

  getuser(idstudent_details: string) {
    return this.http.get<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/` + idstudent_details);

  }

  getStudentList() {
    return this.http.get<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/`);
  }

  getStateList() {
    return this.http.get<{ message: string, slist: State[] }>(`http://localhost:3000/api/state/`);
  }

  getCityList() {
    return this.http.get<{ message: string, slist: State[] }>(`http://localhost:3000/api/city/`);
  }

  getLanguageList() {
    return this.http.get<{ message: string, slist: State[] }>(`http://localhost:3000/api/lang/`);
  }


  setPassword(idstudent_details: string, myform) {
    return this.http.put<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/` + idstudent_details, myform);

  }

  setProfileFirst(idstudent_details: string, gender: any, DOB: any) {

    const myform = {
      gender: gender,
      DOB: DOB,
    };

    return this.http.put<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/profile/` + idstudent_details, myform);

  }

  setProfileSecond(myformSecond) {
    return this.http.post(`http://localhost:3000/api/saddress/`, myformSecond).pipe(
      catchError(e => {
        this.showAlert();
        throw new Error(e);
      })
    );
  }

  setProfileThird(idstudent_details: string, myformThird) {
    return this.http.put<{ message: string, cdata: any }>(`http://localhost:3000/api/sdetails/pthird/` + idstudent_details, myformThird);

  }

  showAlert() {
    let alert = this.alertController.create({
      header: 'registration failed',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }

}