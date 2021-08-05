import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  credentials: FormGroup;

  myform: FormGroup;

  firstStep = true;
  otpsent = false;
  verification = false;
  passwordSet = false;

  otp = "";

  user_list: any;

  student_list: any;

  Studentid: string;


  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getStudentList();
    this.generateOTP();
    this.firstStep = true;

    this.credentials = this.fb.group({
      student_name: ['', [Validators.required]],
      mobile_1: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      termsAndCondition: ['', [Validators.required]],
      otp: this.otp
    });

    this.myform = this.fb.group({
      password: ['******', [Validators.required]]
    });

  }

  generateOTP() {
    var digits = '0123456789';
    for (let i = 0; i < 4; i++) {
      this.otp += digits[Math.floor(Math.random() * 10)];
      console.log(this.otp);
    }
    return this.otp;
  }

  sendOtp() {
    this.firstStep = false;
    this.otpsent = true;
  }

  reGenerateOtp() {
    var digits = '0123456789';
    for (let i = 0; i < 0; i++) {
      this.otp += digits[Math.floor(Math.random() * 10)];
      console.log(this.otp);
    }
    return this.otp;
  }

  resendOtp(idstudent_details: any) {
    this.reGenerateOtp();
    this.credentials = this.fb.group({
      otp: this.otp
    })
    this.authService.resendOtp(idstudent_details, this.credentials.value).subscribe()
    console.log(this.otp);
    this.getUser('1');
  }

  getStudentLocat() {
    this.Studentid = this.authService.getStudentId();
    console.log(this.Studentid);
    this.getUser(this.Studentid);
  }

  verifyOtp() {
    this.getStudentLocat();
    let enteredOtp = ((document.getElementById("otp") as HTMLInputElement).value);
    console.log(enteredOtp);
    let dbOtp = this.user_list[0].otp;
    console.log(dbOtp);
    if (enteredOtp == dbOtp) {
      this.otpsent = false;
      this.verification = true;
    } else {
      console.log("wrong otp");
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertController.create({
      header: 'verification failed',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  password() {
    this.verification = false;
    this.passwordSet = true;

  }

  // register() {
  // if (this.credentials.invalid) {
  //   return;
  // }
  //   this.authService.register(this.credentials.value).subscribe()
  //   console.log("registered successfully");
  //   this.sendOtp();
  //   this.getUser('1');
  // }

  register() {
    if (this.credentials.invalid) {
      return;
    }
    this.authService.register(this.credentials.value);
    // this.Studentid = this.authService.getStudentId();
    // console.log(this.Studentid);
    console.log("registered successfully");
    this.sendOtp();
    // this.getUser('1');
  }

  getUser(idstudent_details: any) {
    this.authService.getuser(idstudent_details)
      .subscribe((singleUser) => {
        this.user_list = singleUser;
        console.log(this.user_list[0].otp);
      })
  }

  getStudentList() {
    this.authService.getStudentList()
      .subscribe((singleUser) => {
        this.student_list = singleUser;
        console.log(this.student_list);
      })
  }

  setPassword(idstudent_details: any) {
    let password = ((document.getElementById("password") as HTMLInputElement).value);
    let cpassword = ((document.getElementById("cpassword") as HTMLInputElement).value);
    if (password == cpassword) {
      console.log("password set successfully");
      this.password();

      this.authService.setPassword(idstudent_details, this.myform.value).subscribe();
    } else {
      this.passwordAlert();
    }

  }

  passwordAlert() {
    let alert = this.alertController.create({
      header: 'password does not match confirm password',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }


}
