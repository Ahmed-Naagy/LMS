(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jcJX:function(r,e,i){"use strict";i.r(e),i.d(e,"AccountModule",function(){return wr});var t=i("3Pt+"),s=i("ofXK"),n=i("tyNb"),o=i("fXoL"),c=i("J9tS");let b=(()=>{class r{constructor(r,e){this.router=r,this.accountService=e,this.accountService.accountValue&&this.router.navigate(["/"])}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(n.c),o.Mb(c.a))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-sm-12","col-md-12","offset-sm-1","offset-md-0"],[1,"card","mt-5"]],template:function(r,e){1&r&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Rb(2,"div",2),o.Rb(3,"div",3),o.Nb(4,"router-outlet"),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[n.g],encapsulation:2}),r})();var a=i("SxV6");function d(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email is required"),o.Qb())}function u(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email is invalid"),o.Qb())}function l(r,e){if(1&r&&(o.Rb(0,"div",19),o.rc(1,d,2,0,"div",20),o.rc(2,u,2,0,"div",20),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.email.errors.required),o.zb(1),o.gc("ngIf",r.f.email.errors.email)}}function f(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Password is required"),o.Qb())}function m(r,e){if(1&r&&(o.Rb(0,"div",19),o.rc(1,f,2,0,"div",20),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.password.errors.required)}}function g(r,e){1&r&&o.Nb(0,"span",21)}const v=function(r){return{"is-invalid":r}};let p=(()=>{class r{constructor(r,e,i,t,s){this.formBuilder=r,this.route=e,this.router=i,this.accountService=t,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[t.n.required,t.n.email]],password:["",t.n.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.login(this.f.email.value,this.f.password.value).pipe(Object(a.a)()).subscribe({next:()=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},error:r=>{this.alertService.error(r),this.loading=!1}}))}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(t.c),o.Mb(n.a),o.Mb(n.c),o.Mb(c.a),o.Mb(c.b))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:29,vars:11,consts:[[1,"Login"],[1,"Left-Login"],["src","assets/img/login_logo.jpg"],[1,"Right-Login"],[1,"text-center","mt-3"],[1,"card-body","mt-5"],[1,"row",3,"formGroup","ngSubmit"],[1,"row","col-sm-12","m-0"],[1,"form-group","col-sm-12"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"row","col-sm-12","m-0","mt-5","Login-button"],[1,"form-group","col-sm-6"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../register",1,"btn","btn-link"],[1,"form-group","col-sm-6","text-right"],["routerLink","../forgot-password",1,"btn","btn-link","pr-0"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Nb(2,"img",2),o.Qb(),o.Rb(3,"div",3),o.Rb(4,"h3",4),o.sc(5,"Login"),o.Qb(),o.Rb(6,"div",5),o.Rb(7,"form",6),o.Yb("ngSubmit",function(){return e.onSubmit()}),o.Rb(8,"div",7),o.Rb(9,"div",8),o.Rb(10,"label"),o.sc(11,"Email"),o.Qb(),o.Nb(12,"input",9),o.rc(13,l,3,2,"div",10),o.Qb(),o.Rb(14,"div",8),o.Rb(15,"label"),o.sc(16,"Password"),o.Qb(),o.Nb(17,"input",11),o.rc(18,m,2,1,"div",10),o.Qb(),o.Qb(),o.Rb(19,"div",12),o.Rb(20,"div",13),o.Rb(21,"button",14),o.rc(22,g,1,0,"span",15),o.sc(23," Login "),o.Qb(),o.Rb(24,"a",16),o.sc(25,"Register"),o.Qb(),o.Qb(),o.Rb(26,"div",17),o.Rb(27,"a",18),o.sc(28,"Forgot Password?"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&r&&(o.zb(7),o.gc("formGroup",e.form),o.zb(5),o.gc("ngClass",o.kc(7,v,e.submitted&&e.f.email.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.email.errors),o.zb(4),o.gc("ngClass",o.kc(9,v,e.submitted&&e.f.password.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.password.errors),o.zb(3),o.gc("disabled",e.loading),o.zb(1),o.gc("ngIf",e.loading))},directives:[t.p,t.j,t.g,t.b,t.i,t.e,s.i,s.k,n.e],encapsulation:2}),r})();var h=i("XgRA"),R=i("nPby");function Q(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"First Name is required"),o.Qb())}function w(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,Q,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Fname.errors.required)}}function I(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Middle Name is required"),o.Qb())}function z(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,I,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Mname.errors.required)}}function k(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Last Name is required"),o.Qb())}function C(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,k,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Lname.errors.required)}}function S(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email is required"),o.Qb())}function P(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email must be a valid email address"),o.Qb())}function y(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,S,2,0,"div",37),o.rc(2,P,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Email.errors.required),o.zb(1),o.gc("ngIf",r.f.Email.errors.email)}}function N(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Password is required"),o.Qb())}function q(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Password must be at least 6 characters"),o.Qb())}function L(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,N,2,0,"div",37),o.rc(2,q,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Password.errors.required),o.zb(1),o.gc("ngIf",r.f.Password.errors.minlength)}}function M(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Confirm Password is required"),o.Qb())}function T(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Passwords must match"),o.Qb())}function G(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,M,2,0,"div",37),o.rc(2,T,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.ConfirmPassword.errors.required),o.zb(1),o.gc("ngIf",r.f.ConfirmPassword.errors.mustMatch)}}function E(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Phone is required"),o.Qb())}function x(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,E,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Phone_1.errors.required)}}function D(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"National ID is required"),o.Qb())}function V(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,D,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.NationalID.errors.required)}}function j(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Gender is required"),o.Qb())}function F(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,j,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.Gender.errors.required)}}function O(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Title is required"),o.Qb())}function B(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,O,2,0,"div",37),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.role.errors.required)}}function A(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"License Name is required"),o.Qb())}function _(r,e){if(1&r&&(o.Rb(0,"div",36),o.rc(1,A,2,0,"div",37),o.Qb()),2&r){const r=o.bc(2);o.zb(1),o.gc("ngIf",r.f.LicenseID.errors.required)}}const J=function(r){return{"is-invalid":r}};function Y(r,e){if(1&r&&(o.Rb(0,"div",15),o.Rb(1,"label"),o.sc(2,"License ID"),o.Qb(),o.Nb(3,"input",38),o.rc(4,_,2,1,"div",10),o.Qb()),2&r){const r=o.bc();o.zb(3),o.gc("ngClass",o.kc(2,J,r.submitted&&r.f.LicenseID.errors)),o.zb(1),o.gc("ngIf",r.submitted&&r.f.LicenseID.errors)}}function U(r,e){1&r&&(o.Rb(0,"div",36),o.sc(1,"Accept Ts & Cs is required"),o.Qb())}function X(r,e){1&r&&o.Nb(0,"span",39)}let K=(()=>{class r{constructor(r,e,i,t,s){this.formBuilder=r,this.route=e,this.router=i,this.accountService=t,this.alertService=s,this.loading=!1,this.submitted=!1,this.driverLicense=!1}ngOnInit(){this.form=this.formBuilder.group({Fname:["",t.n.required],Mname:["",t.n.required],Lname:["",t.n.required],Email:["",[t.n.required,t.n.email]],Password:["",[t.n.required,t.n.minLength(6)]],ConfirmPassword:["",t.n.required],Phone_1:["",t.n.required],NationalID:["",t.n.required],Gender:["",t.n.required],role:["",t.n.required],LicenseID:[""],acceptTerms:[!1,t.n.requiredTrue]},{validator:Object(h.d)("Password","ConfirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||this.form.controls.role.value==R.c.Driver&&""==this.form.controls.LicenseID.value?this.form.controls.LicenseID.setErrors(t.n.required):(this.loading=!0,this.accountService.register(this.form.value).pipe(Object(a.a)()).subscribe({next:()=>{this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:r=>{this.alertService.error(r),this.loading=!1}}))}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(t.c),o.Mb(n.a),o.Mb(n.c),o.Mb(c.a),o.Mb(c.b))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:88,vars:48,consts:[[1,"Register"],[1,"Left-Register"],["src","assets/img/register_logo.jpg"],[1,"Right-Register"],[1,"text-center","mt-3"],[1,"card-body","mt-5"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-sm-12","col-md-4"],["type","text","formControlName","Fname",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","Mname",1,"form-control",3,"ngClass"],["type","text","formControlName","Lname",1,"form-control",3,"ngClass"],[1,"form-group"],["type","email","formControlName","Email","autocomplete","off",1,"form-control",3,"ngClass"],[1,"form-group","col-sm-12","col-md-6"],["type","password","formControlName","Password",1,"form-control",3,"ngClass"],["type","password","formControlName","ConfirmPassword",1,"form-control",3,"ngClass"],["type","text","formControlName","Phone_1",1,"form-control",3,"ngClass"],["type","text","formControlName","NationalID",1,"form-control",3,"ngClass"],["formControlName","Gender",1,"form-control",3,"ngClass"],["value",""],["value","male"],["value","female"],["formControlName","role",1,"form-control",3,"ngClass"],["value","Student"],["value","Teacher"],["value","Parent"],["value","Driver"],["class","form-group col-sm-12 col-md-6",4,"ngIf"],[1,"form-group","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","formControlName","LicenseID",1,"form-control",3,"ngClass"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Nb(2,"img",2),o.Qb(),o.Rb(3,"div",3),o.Rb(4,"h3",4),o.sc(5,"Register"),o.Qb(),o.Rb(6,"div",5),o.Rb(7,"form",6),o.Yb("ngSubmit",function(){return e.onSubmit()}),o.Rb(8,"div",7),o.Rb(9,"div",8),o.Rb(10,"label"),o.sc(11,"First Name"),o.Qb(),o.Nb(12,"input",9),o.rc(13,w,2,1,"div",10),o.Qb(),o.Rb(14,"div",8),o.Rb(15,"label"),o.sc(16,"Middle Name"),o.Qb(),o.Nb(17,"input",11),o.rc(18,z,2,1,"div",10),o.Qb(),o.Rb(19,"div",8),o.Rb(20,"label"),o.sc(21,"Last Name"),o.Qb(),o.Nb(22,"input",12),o.rc(23,C,2,1,"div",10),o.Qb(),o.Qb(),o.Rb(24,"div",13),o.Rb(25,"label"),o.sc(26,"Email"),o.Qb(),o.Nb(27,"input",14),o.rc(28,y,3,2,"div",10),o.Qb(),o.Rb(29,"div",7),o.Rb(30,"div",15),o.Rb(31,"label"),o.sc(32,"Password"),o.Qb(),o.Nb(33,"input",16),o.rc(34,L,3,2,"div",10),o.Qb(),o.Rb(35,"div",15),o.Rb(36,"label"),o.sc(37,"Confirm Password"),o.Qb(),o.Nb(38,"input",17),o.rc(39,G,3,2,"div",10),o.Qb(),o.Qb(),o.Rb(40,"div",7),o.Rb(41,"div",8),o.Rb(42,"label"),o.sc(43,"Phone"),o.Qb(),o.Nb(44,"input",18),o.rc(45,x,2,1,"div",10),o.Qb(),o.Rb(46,"div",8),o.Rb(47,"label"),o.sc(48,"National ID"),o.Qb(),o.Nb(49,"input",19),o.rc(50,V,2,1,"div",10),o.Qb(),o.Rb(51,"div",8),o.Rb(52,"label"),o.sc(53,"Gender"),o.Qb(),o.Rb(54,"select",20),o.Nb(55,"option",21),o.Rb(56,"option",22),o.sc(57,"Male"),o.Qb(),o.Rb(58,"option",23),o.sc(59,"Female"),o.Qb(),o.Qb(),o.rc(60,F,2,1,"div",10),o.Qb(),o.Qb(),o.Rb(61,"div",7),o.Rb(62,"div",15),o.Rb(63,"label"),o.sc(64,"Register as"),o.Qb(),o.Rb(65,"select",24),o.Nb(66,"option",21),o.Rb(67,"option",25),o.sc(68,"Student"),o.Qb(),o.Rb(69,"option",26),o.sc(70,"Teacher"),o.Qb(),o.Rb(71,"option",27),o.sc(72,"Parent"),o.Qb(),o.Rb(73,"option",28),o.sc(74,"Driver"),o.Qb(),o.Qb(),o.rc(75,B,2,1,"div",10),o.Qb(),o.rc(76,Y,5,4,"div",29),o.Qb(),o.Rb(77,"div",30),o.Nb(78,"input",31),o.Rb(79,"label",32),o.sc(80,"Accept Terms & Conditions"),o.Qb(),o.rc(81,U,2,0,"div",10),o.Qb(),o.Rb(82,"div",13),o.Rb(83,"button",33),o.rc(84,X,1,0,"span",34),o.sc(85," Register "),o.Qb(),o.Rb(86,"a",35),o.sc(87,"Cancel"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&r&&(o.zb(7),o.gc("formGroup",e.form),o.zb(5),o.gc("ngClass",o.kc(26,J,e.submitted&&e.f.Fname.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Fname.errors),o.zb(4),o.gc("ngClass",o.kc(28,J,e.submitted&&e.f.Mname.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Mname.errors),o.zb(4),o.gc("ngClass",o.kc(30,J,e.submitted&&e.f.Lname.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Lname.errors),o.zb(4),o.gc("ngClass",o.kc(32,J,e.submitted&&e.f.Email.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Email.errors),o.zb(5),o.gc("ngClass",o.kc(34,J,e.submitted&&e.f.Password.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Password.errors),o.zb(4),o.gc("ngClass",o.kc(36,J,e.submitted&&e.f.ConfirmPassword.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.ConfirmPassword.errors),o.zb(5),o.gc("ngClass",o.kc(38,J,e.submitted&&e.f.Phone_1.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.Phone_1.errors),o.zb(4),o.gc("ngClass",o.kc(40,J,e.submitted&&e.f.NationalID.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.NationalID.errors),o.zb(4),o.gc("ngClass",o.kc(42,J,e.submitted&&e.f.Gender.errors)),o.zb(6),o.gc("ngIf",e.submitted&&e.f.Gender.errors),o.zb(5),o.gc("ngClass",o.kc(44,J,e.submitted&&e.f.role.errors)),o.zb(10),o.gc("ngIf",e.submitted&&e.f.role.errors),o.zb(1),o.gc("ngIf",!e.f.role.errors&&"Driver"==e.f.role.value),o.zb(2),o.gc("ngClass",o.kc(46,J,e.submitted&&e.f.acceptTerms.errors)),o.zb(3),o.gc("ngIf",e.submitted&&e.f.acceptTerms.errors),o.zb(2),o.gc("disabled",e.loading),o.zb(1),o.gc("ngIf",e.loading))},directives:[t.p,t.j,t.g,t.b,t.i,t.e,s.i,s.k,t.m,t.k,t.o,t.a,n.e],encapsulation:2}),r})();function H(r,e){1&r&&(o.Rb(0,"div"),o.sc(1," Verifying... "),o.Qb())}function W(r,e){1&r&&(o.Rb(0,"div"),o.sc(1," Verification failed, you can also verify your account using the "),o.Rb(2,"a",3),o.sc(3,"forgot password"),o.Qb(),o.sc(4," page. "),o.Qb())}var Z=function(r){return r[r.Verifying=0]="Verifying",r[r.Failed=1]="Failed",r}({});let $=(()=>{class r{constructor(r,e,i,t){this.route=r,this.router=e,this.accountService=i,this.alertService=t,this.EmailStatus=Z,this.emailStatus=Z.Verifying}ngOnInit(){const r=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.verifyEmail(r).pipe(Object(a.a)()).subscribe({next:()=>{this.alertService.success("Verification successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:()=>{this.emailStatus=Z.Failed}})}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(n.a),o.Mb(n.c),o.Mb(c.a),o.Mb(c.b))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],["routerLink","forgot-password"]],template:function(r,e){1&r&&(o.Rb(0,"h3",0),o.sc(1,"Verify Email"),o.Qb(),o.Rb(2,"div",1),o.rc(3,H,2,0,"div",2),o.rc(4,W,5,0,"div",2),o.Qb()),2&r&&(o.zb(3),o.gc("ngIf",e.emailStatus==e.EmailStatus.Verifying),o.zb(1),o.gc("ngIf",e.emailStatus==e.EmailStatus.Failed))},directives:[s.k,n.e],encapsulation:2}),r})();var rr=i("nYR2");function er(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email is required"),o.Qb())}function ir(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Email is invalid"),o.Qb())}function tr(r,e){if(1&r&&(o.Rb(0,"div",9),o.rc(1,er,2,0,"div",10),o.rc(2,ir,2,0,"div",10),o.Qb()),2&r){const r=o.bc();o.zb(1),o.gc("ngIf",r.f.email.errors.required),o.zb(1),o.gc("ngIf",r.f.email.errors.email)}}function sr(r,e){1&r&&o.Nb(0,"span",11)}const nr=function(r){return{"is-invalid":r}};let or=(()=>{class r{constructor(r,e,i){this.formBuilder=r,this.accountService=e,this.alertService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",[t.n.required,t.n.email]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.alertService.clear(),this.accountService.forgotPassword(this.f.email.value).pipe(Object(a.a)()).pipe(Object(rr.a)(()=>this.loading=!1)).subscribe({next:()=>this.alertService.success("Please check your email for password reset instructions"),error:r=>this.alertService.error(r)}))}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(t.c),o.Mb(c.a),o.Mb(c.b))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:15,vars:7,consts:[[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Rb(0,"h3",0),o.sc(1,"Forgot Password"),o.Qb(),o.Rb(2,"div",1),o.Rb(3,"form",2),o.Yb("ngSubmit",function(){return e.onSubmit()}),o.Rb(4,"div",3),o.Rb(5,"label"),o.sc(6,"Email"),o.Qb(),o.Nb(7,"input",4),o.rc(8,tr,3,2,"div",5),o.Qb(),o.Rb(9,"div",3),o.Rb(10,"button",6),o.rc(11,sr,1,0,"span",7),o.sc(12," Submit "),o.Qb(),o.Rb(13,"a",8),o.sc(14,"Cancel"),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&r&&(o.zb(3),o.gc("formGroup",e.form),o.zb(4),o.gc("ngClass",o.kc(5,nr,e.submitted&&e.f.email.errors)),o.zb(1),o.gc("ngIf",e.submitted&&e.f.email.errors),o.zb(2),o.gc("disabled",e.loading),o.zb(1),o.gc("ngIf",e.loading))},directives:[t.p,t.j,t.g,t.b,t.i,t.e,s.i,s.k,n.e],encapsulation:2}),r})();function cr(r,e){1&r&&(o.Rb(0,"div"),o.sc(1," Validating token... "),o.Qb())}function br(r,e){1&r&&(o.Rb(0,"div"),o.sc(1," Token validation failed, if the token has expired you can get a new one at the "),o.Rb(2,"a",4),o.sc(3,"forgot password"),o.Qb(),o.sc(4," page. "),o.Qb())}function ar(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Password is required"),o.Qb())}function dr(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Password must be at least 6 characters"),o.Qb())}function ur(r,e){if(1&r&&(o.Rb(0,"div",13),o.rc(1,ar,2,0,"div",2),o.rc(2,dr,2,0,"div",2),o.Qb()),2&r){const r=o.bc(2);o.zb(1),o.gc("ngIf",r.f.password.errors.required),o.zb(1),o.gc("ngIf",r.f.password.errors.minlength)}}function lr(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Confirm Password is required"),o.Qb())}function fr(r,e){1&r&&(o.Rb(0,"div"),o.sc(1,"Passwords must match"),o.Qb())}function mr(r,e){if(1&r&&(o.Rb(0,"div",13),o.rc(1,lr,2,0,"div",2),o.rc(2,fr,2,0,"div",2),o.Qb()),2&r){const r=o.bc(2);o.zb(1),o.gc("ngIf",r.f.confirmPassword.errors.required),o.zb(1),o.gc("ngIf",r.f.confirmPassword.errors.mustMatch)}}function gr(r,e){1&r&&o.Nb(0,"span",14)}const vr=function(r){return{"is-invalid":r}};function pr(r,e){if(1&r){const r=o.Sb();o.Rb(0,"form",5),o.Yb("ngSubmit",function(){return o.nc(r),o.bc().onSubmit()}),o.Rb(1,"div",6),o.Rb(2,"label"),o.sc(3,"Password"),o.Qb(),o.Nb(4,"input",7),o.rc(5,ur,3,2,"div",8),o.Qb(),o.Rb(6,"div",6),o.Rb(7,"label"),o.sc(8,"Confirm Password"),o.Qb(),o.Nb(9,"input",9),o.rc(10,mr,3,2,"div",8),o.Qb(),o.Rb(11,"div",6),o.Rb(12,"button",10),o.rc(13,gr,1,0,"span",11),o.sc(14," Reset Password "),o.Qb(),o.Rb(15,"a",12),o.sc(16,"Cancel"),o.Qb(),o.Qb(),o.Qb()}if(2&r){const r=o.bc();o.gc("formGroup",r.form),o.zb(4),o.gc("ngClass",o.kc(7,vr,r.submitted&&r.f.password.errors)),o.zb(1),o.gc("ngIf",r.submitted&&r.f.password.errors),o.zb(4),o.gc("ngClass",o.kc(9,vr,r.submitted&&r.f.confirmPassword.errors)),o.zb(1),o.gc("ngIf",r.submitted&&r.f.confirmPassword.errors),o.zb(2),o.gc("disabled",r.loading),o.zb(1),o.gc("ngIf",r.loading)}}var hr=function(r){return r[r.Validating=0]="Validating",r[r.Valid=1]="Valid",r[r.Invalid=2]="Invalid",r}({});const Rr=[{path:"",component:b,children:[{path:"login",component:p},{path:"register",component:K},{path:"verify-email",component:$},{path:"forgot-password",component:or},{path:"reset-password",component:(()=>{class r{constructor(r,e,i,t,s){this.formBuilder=r,this.route=e,this.router=i,this.accountService=t,this.alertService=s,this.TokenStatus=hr,this.tokenStatus=hr.Validating,this.token=null,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({password:["",[t.n.required,t.n.minLength(6)]],confirmPassword:["",t.n.required]},{validator:Object(h.d)("password","confirmPassword")});const r=this.route.snapshot.queryParams.token;this.router.navigate([],{relativeTo:this.route,replaceUrl:!0}),this.accountService.validateResetToken(r).pipe(Object(a.a)()).subscribe({next:()=>{this.token=r,this.tokenStatus=hr.Valid},error:()=>{this.tokenStatus=hr.Invalid}})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.resetPassword(this.token,this.f.password.value,this.f.confirmPassword.value).pipe(Object(a.a)()).subscribe({next:()=>{this.alertService.success("Password reset successful, you can now login",{keepAfterRouteChange:!0}),this.router.navigate(["../login"],{relativeTo:this.route})},error:r=>{this.alertService.error(r),this.loading=!1}}))}}return r.\u0275fac=function(e){return new(e||r)(o.Mb(t.c),o.Mb(n.a),o.Mb(n.c),o.Mb(c.a),o.Mb(c.b))},r.\u0275cmp=o.Gb({type:r,selectors:[["ng-component"]],decls:6,vars:3,consts:[[1,"card-header"],[1,"card-body"],[4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],["routerLink","../forgot-password"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../login",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(o.Rb(0,"h3",0),o.sc(1,"Reset Password"),o.Qb(),o.Rb(2,"div",1),o.rc(3,cr,2,0,"div",2),o.rc(4,br,5,0,"div",2),o.rc(5,pr,17,11,"form",3),o.Qb()),2&r&&(o.zb(3),o.gc("ngIf",e.tokenStatus==e.TokenStatus.Validating),o.zb(1),o.gc("ngIf",e.tokenStatus==e.TokenStatus.Invalid),o.zb(1),o.gc("ngIf",e.tokenStatus==e.TokenStatus.Valid))},directives:[s.k,n.e,t.p,t.j,t.g,t.b,t.i,t.e,s.i],encapsulation:2}),r})()}]}];let Qr=(()=>{class r{}return r.\u0275mod=o.Kb({type:r}),r.\u0275inj=o.Jb({factory:function(e){return new(e||r)},imports:[[n.f.forChild(Rr)],n.f]}),r})(),wr=(()=>{class r{}return r.\u0275mod=o.Kb({type:r}),r.\u0275inj=o.Jb({factory:function(e){return new(e||r)},imports:[[s.c,t.l,Qr]]}),r})()}}]);