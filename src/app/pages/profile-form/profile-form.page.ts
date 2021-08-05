import { Component, OnInit } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { ImageCropperPage } from '../image-cropper/image-cropper.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CropPage } from '../crop/crop.page';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { State } from './state.model';
import { Subscription } from 'rxjs';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  step: any = 1;
  nextStep() {
    if (this.step < 4) {
      this.step = this.step + 1;
      console.log(this.step);
    }
  }
  location = false;
  language = false;

  imageDataUrl: any;
  croppedImage: any;
  selectedRadioGroup: string;

  public photos: Photo[] = [];

  myform: FormGroup;

  myformSecond: FormGroup;

  myformThird: FormGroup;

  user_list: any;

  student_list: any;

  city_list: any;

  lang_list: any;

  state_list: any;

  state_list_sub: Subscription;

  isItemAvailable = false;

  states: any[] = [];

  state: any[] = [];

  languages: any[] = [];

  lang: any[] = [];

  Studentid: string;

  Preffered_location_1: any;
  Preffered_location_2: any;
  Preffered_location_3: any;

  language_1: any;
  language_2: any;
  language_3: any;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Studentid = this.authService.getStudentId();
    console.log(this.Studentid);
    this.getStudentList();
    this.getUser(this.Studentid);
    this.getStates();
    this.getCity();
    this.getLanguage();

    this.myform = this.fb.group({
      'gender': ['M', [Validators.required]],
      'DOB': ['', [Validators.required]],
      'profile_image': this.croppedImage
    });

    this.myformSecond = this.fb.group({
      'permenant_address_1': ['', [Validators.required]],
      'permanant_address_2': ['', [Validators.required]],
      'idstate_cl': ['', [Validators.required]],
      'idcity_cl': ['', [Validators.required]],
      'pincode_permanant': ['', [Validators.required]],
      'idstudent_details': this.Studentid
    });

  }

  async openCameraOrGallery() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });

    const savedImageFile = await this.savePicture(image);
    this.photos.unshift(savedImageFile);

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: image.webPath

    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageDataUrl = image.webPath;
    this.imageDataUrl = imageDataUrl;
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ImageCropperPage,
      //  component: CropPage,
      cssClass: 'my-custom-class',
      componentProps: {
        image: this.imageDataUrl
      }

    });
    modal.onDidDismiss().then((data) => {
      this.croppedImage = data.data;
    });
    return await modal.present();
  }

  radioGroupChange(event) {
    console.log('radioGroupChange', event.detail.value);
    this.selectedRadioGroup = event.detail.value;
  }

  getUser(idstudent_details: any) {
    this.authService.getuser(idstudent_details)
      .subscribe((singleUser) => {
        this.user_list = singleUser;
      })
  }

  getStudentList() {
    this.authService.getStudentList()
      .subscribe((singleUser) => {
        this.student_list = singleUser;
      })
  }

  setProfileFirst(idstudent_details: any) {
    console.log("profile form");
    if (this.myform.invalid) {
      return;
    }
    this.authService.setProfileFirst(idstudent_details, this.myform.value.gender, this.myform.value.DOB.substring(0, 10)).subscribe();
    this.nextStep();
  }

  setProfileSecond() {
    if (this.myformSecond.invalid) {
      return;
    }
    this.authService.setProfileSecond(this.myformSecond.value).subscribe()
    console.log("profile created successfully");
    this.nextStep();
  }

  getStates() {
    this.state_list_sub = this.authService.getStateList()
      .subscribe((state_list) => {
        this.state_list = state_list;
      })
  }

  getCity() {
    this.authService.getCityList()
      .subscribe((city_list) => {
        this.city_list = city_list;
      })
  }

  getLanguage() {
    this.authService.getLanguageList()
      .subscribe((language_list) => {
        this.lang_list = language_list;
      })
  }

  setLocation() {
    this.location = true;
    this.language = false;
  }

  setLanguage() {
    this.language = true;
    this.location = false;
  }

  getIState($event) {
    let state = $event.target.value;
    this.state.push(state)
    let states = $event.target.value.state;
    this.states.push(states)
  }

  removeState(state: string): void {
    const index = this.states.indexOf(state);
    const stateindex = this.state.indexOf(state);

    if (index >= 0) {
      this.states.splice(index, 1);
      this.state.splice(stateindex, 1);
    }
  }


  getILanguage($event) {
    let lang = $event.target.value;
    this.lang.push(lang)
    let languages = $event.target.value.language;
    this.languages.push(languages)
  }

  removeLang(lang: string): void {
    const index = this.languages.indexOf(lang);
    const langindex = this.lang.indexOf(lang);

    if (index >= 0) {
      this.languages.splice(index, 1);
      this.lang.splice(langindex, 1);
    }
  }


  profileThird() {
    this.language_1 = this.lang[0].idlanguage;
    this.language_2 = this.lang[1].idlanguage;
    this.language_3 = this.lang[2].idlanguage;

    this.Preffered_location_1 = this.state[0].idstate;
    this.Preffered_location_2 = this.state[1].idstate;
    this.Preffered_location_3 = this.state[2].idstate;
  }

  profileSubmit(idstudent_details: any) {
    this.profileThird();

    this.myformThird = this.fb.group({
      Preffered_location_1: this.Preffered_location_1,
      Preffered_location_2: this.Preffered_location_2,
      Preffered_location_3: this.Preffered_location_3,
      language_1: this.language_1,
      language_2: this.language_2,
      language_3: this.language_3
    })

    if (this.myformThird.invalid) {
      return;
    }
    this.authService.setProfileThird(idstudent_details, this.myformThird.value).subscribe();
    console.log("profile submit sucessfull");
    this.router.navigate(['/login'])
  }






  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}

export interface Photo {
  filepath: string;
  webviewPath: string;
}
