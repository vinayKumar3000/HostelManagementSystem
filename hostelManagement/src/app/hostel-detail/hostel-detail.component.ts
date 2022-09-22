import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-hostel-detail',
  templateUrl: './hostel-detail.component.html',
  styleUrls: ['./hostel-detail.component.css'],
})
export class HostelDetailComponent implements OnInit {
  prices = {
    standard: '',
    foodPackage: '',
    deluxe: '',
    superDeluxe: '',
    electricityBillPerUnit: '',
    securityDeposit: '',
  };
  room: any[];

  availability = {
    boysStandardRooms: 0, // 12
    boysDeluxeRooms: 0, // 15
    boysSuperDeluxeRooms: 0, // 10
    girlsStandardRooms: 0, // 13
    girlsDeluxeRooms: 0, // 15
    girlsSuperDeluxeRooms: 0, // 11
  };

  ngOnInit(): void {}
}
