import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.page.html',
  styleUrls: ['./image-cropper.page.scss'],
})
export class ImageCropperPage implements OnInit {
  @Input() image: string;
  myImage: any;
  croppedImageBase64: any;

  croppedImage: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.myImage = this.image;
  }

  imageCropped(ev: ImageCroppedEvent) {
    this.croppedImageBase64 = ev.base64;
  }
  dismissModal() {
    this.modalController.dismiss(this.croppedImageBase64);
  }

  imageLoaded(image: HTMLImageElement) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
