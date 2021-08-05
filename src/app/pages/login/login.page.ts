import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    // this.credentials = this.fb.group({
    //   email : ['eve.holt@reqres.in', [Validators.required, Validators.email]],
    //   password : ['cityslicka', [Validators.required, Validators.minLength(6)]],

    this.credentials = this.fb.group({
      'email': this.fb.control('', [Validators.required]),
      'password': this.fb.control('hello', [Validators.required]),
    });
  }

  // async login() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();

  //   this.authService.login(this.credentials.value).subscribe(
  //     async (res) => {
  //       await loading.dismiss();
  //       this.router.navigateByUrl('/tabs', { replaceUrl: true });
  //     },
  //     async (res) => {
  //       await loading.dismiss();
  //       const alert = await this.alertController.create({
  //         header: 'Login Failed',
  //         message: res.error.error,
  //         buttons: ['OK'],
  //       });

  //       await alert.present();
  //     }
  //   )
  // }


  async login() {
    if (this.credentials.invalid) {
      return;
    }
    console.log(this.credentials.value);
    this.authService.login(this.credentials.value.email, this.credentials.value.password);
  }
}



// get email() {
//   return this.credentials.get('email');
// }

// get password() {
//   return this.credentials.get('password');
// }

// }
