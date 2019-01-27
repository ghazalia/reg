import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private location: Location
  ) { }


  id: string;
  password: string;

  ngOnInit() {
  }

  async login(pelajar: Student) {

    const result = await this.studentService.getStudent(pelajar.id, pelajar.password);
    console.log(result);

    if (result) {
      this.router.navigate(["user"]);
      return;
    }
    alert("Invalid");
  }
}

