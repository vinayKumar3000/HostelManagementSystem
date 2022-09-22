import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hostel-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactHistory: any = [];
  replyMsgList: any = [];
  totalReplyMsg: number = 0;
  user = { role: '', username: '' };
  contactFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
}
