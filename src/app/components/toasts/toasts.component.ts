import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}
