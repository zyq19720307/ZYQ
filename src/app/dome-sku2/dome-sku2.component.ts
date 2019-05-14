// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// // function phoneValidator(control: FormControl): { [s: string]:boolean,
// //  if (!control.value.match(/^131/)) {
// //    return { invalidphonenumber: true };
// //  }
// // }
// @Component({
//   selector: 'app-dome-sku2',
//   templateUrl: './dome-sku2.component.html',
//   styleUrls: ['./dome-sku2.component.css']
// })
// export class DomeSku2Component {
//   username: AbstractControl;
//   myForm: FormGroup;
//   password: AbstractControl;
//   yanzhengma: AbstractControl;
//   phonenumber: AbstractControl;
//   code: string;
//   loginFailed: boolean;
//   constructor(fb: FormBuilder, private httpclient: HttpClient) {
//     this.myForm = fb.group({
//       'username': ['', Validators.required],
//       'password': ['', Validators.required],
//       'yanzhengma': ['', Validators.compose([Validators.min(1000), Validators.max(9999)])],
//       'phonenumber': ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11)])]
//     });
//     this.username = this.myForm.controls['username'];
//     this.password = this.myForm.controls['password'];
//     this.yanzhengma = this.myForm.controls['yanzhengma'];
//     this.phonenumber = this.myForm.controls['phonenumber'];
//     this.loginFailed = false;
//   }
//   onSubmit(value: string): void {
//     // var inputCode = document.getElementById("inputCode").nodeValue;
//     // if (inputCode.toUpperCase() != this.code.toUpperCase()) {
//     //   alert("验证码输入有误！");
//     //   this.createCode();
//     // }
//     // else {
//     //   alert("验证码正确！");
//     // }
//     console.log(value);
//     this.httpclient.get('http://127.0.0.1:8086/login').subscribe(
//       (resp: any) => {
//         console.log(resp);
//         let u = resp[0];
//         let o = value;
//         if (u.username == o['username'] && u.password == o['password']) {
//           alert('登录成功');
//         } else {
//           alert('登录失败');
//         }

//       }
//     )
//   }
//   // validateCode() {

//   // }
//   // createCode() {
//   //   this.code = "";
//   //   var codeLength = 4; //验证码的长度
//   //   var checkCode = document.getElementById("checkCode");
//   //   var codeChars = new Array('Q', 'W', 'E', 'R'
//   //     , 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X',
//   //     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', 'V', 'B', 'N', 'M'); //所有候选组成验证码的字符，当然也可以用中文的
//   //   for (var i = 0; i < 4; i++) {
//   //     var charNum = Math.floor(Math.random() * 10);
//   //     this.code += codeChars[charNum];
//   //   }
//   //   if (checkCode) {
//   //     checkCode.className = "code";
//   //     checkCode.innerHTML = this.code;
//   //   }
//   // }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }
}

function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]+$/)) {
    return { invalidPhone: true };
  }
}

@Component({
  selector: 'app-dome-sku2',
  templateUrl: './dome-sku2.component.html',
  styleUrls: ['./dome-sku2.component.css']
})
export class DomeSku2Component implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  pin: AbstractControl;
  phone: AbstractControl;
  loginfalid: boolean;
  // static required(c: FormControl): StringMap<string, boolean> {
  //   return isBlank(c.value) || c.value == "" ? { "required": true } : null;
  // }
  constructor(fb: FormBuilder, private httpclient: HttpClient) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'password': ['', Validators.compose([])],
      'pin': ['', Validators.compose([Validators.min(1000), Validators.max(9999)])],
      'phone': ['13333333333', Validators.compose([Validators.minLength(11), Validators.maxLength(11), phoneValidator])]
    });
    // const control = new FormControl('1', Validators.pattern('[0-9]*'));

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.pin = this.myForm.controls['pin'];
    this.phone = this.myForm.controls['phone'];
    this.loginfalid = false;
    //  console.log(control.errors);
    // this.username.valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('用户名是:', value);
    //   });
    // this.myForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('form changed to:', form);
    //   });
  }

  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value:', value);
    // this.httpclient.get('http://127.0.0.1:8086/login').subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //     let u = resp[0];
    //     let o = value;
    //     if (u.username == o['username'] && u.password == o['password']) {
    //       alert('登陆成功');
    //       this.loginfalid = false;
    //     }
    //     else {
    //       alert('用户名密码错误');
    //       this.loginfalid = true;
    //     }
    //   }
    // )
    this.httpclient.post('http://127.0.0.1:8086/login', JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          alert("登录成功");
        }
        else {
          alert("登录失败");
        }
      }
    );
  }
}