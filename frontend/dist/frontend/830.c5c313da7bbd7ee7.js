"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[830],{4830:(V,m,s)=>{s.r(m),s.d(m,{DriverModule:()=>G});var g=s(6814),l=s(6223),_=s(4506),e=s(5879),x=s(9862);let b=(()=>{var i;class a{constructor(t){this.http=t,this.serverUrl=_.N.apiUrl}getcode(){return this.http.get(`${this.serverUrl}/countrydata`)}getCityData(){return this.http.get(`${this.serverUrl}/citydata`)}getVehicleData(){return this.http.get(`${this.serverUrl}/vehicledata`)}addDriver(t){return this.http.post(`${this.serverUrl}/adddriver`,t)}getDriver(t,n,o,c,d){return this.http.get(`${this.serverUrl}/driverdata`,{params:{search:t,page:n,limit:o,sortBy:c,sortOrder:d}})}getDriverdata(){return this.http.get(`${this.serverUrl}/driverdata`)}deleteDriver(t){return this.http.delete(`${this.serverUrl}/driverdata/${t}`)}updateDriver(t,n){return this.http.put(`${this.serverUrl}/updatedriver/${t}`,n)}}return(i=a).\u0275fac=function(t){return new(t||i)(e.LFG(x.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),a})();var M=s(7682),Z=s(9229),h=s(5596),v=s(6472),f=s(617),p=s(7988),C=s(2296);function y(i,a){1&i&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function P(i,a){if(1&i&&(e.TgZ(0,"div",50),e.YNc(1,y,2,0,"div",51),e.qZA()),2&i){const r=e.oxw(2);let t;e.xp6(1),e.Q6J("ngIf",null==(t=r.driverForm.get("drivername"))||null==t.errors?null:t.errors.required)}}function O(i,a){1&i&&(e.TgZ(0,"div"),e._uU(1,"Email is required."),e.qZA())}function D(i,a){1&i&&(e.TgZ(0,"div"),e._uU(1,"Please enter a valid email."),e.qZA())}function T(i,a){if(1&i&&(e.TgZ(0,"div",50),e.YNc(1,O,2,0,"div",51),e.YNc(2,D,2,0,"div",51),e.qZA()),2&i){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.driverForm.get("driveremail"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.driverForm.get("driveremail"))||null==n.errors?null:n.errors.email)}}function A(i,a){if(1&i&&(e.TgZ(0,"option",52),e._uU(1),e.qZA()),2&i){const r=a.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(r)}}function F(i,a){1&i&&(e.TgZ(0,"div"),e._uU(1,"Phone is required."),e.qZA())}function U(i,a){1&i&&(e.TgZ(0,"div"),e._uU(1,"Phone number must be 10 digits."),e.qZA())}function q(i,a){if(1&i&&(e.TgZ(0,"div",53),e.YNc(1,F,2,0,"div",51),e.YNc(2,U,2,0,"div",51),e.qZA()),2&i){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.driverForm.get("driverphone"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.driverForm.get("driverphone"))||null==n.errors?null:n.errors.minlength)}}function S(i,a){if(1&i&&(e.TgZ(0,"option",52),e._uU(1),e.qZA()),2&i){const r=a.$implicit;e.Q6J("value",r._id),e.xp6(1),e.Oqu(r.city)}}function k(i,a){if(1&i){const r=e.EpF();e.TgZ(0,"div",28)(1,"h2",29),e._uU(2,"Driver Registration"),e.qZA(),e.TgZ(3,"form",30),e.NdJ("ngSubmit",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.onSubmit())}),e.TgZ(4,"div",29)(5,"label",31),e._uU(6,"Driver Name"),e.qZA(),e._UZ(7,"input",32),e.YNc(8,P,2,1,"div",33),e.qZA(),e.TgZ(9,"div",29)(10,"label",31),e._uU(11,"Driver Email"),e.qZA(),e._UZ(12,"input",34),e.YNc(13,T,3,2,"div",33),e.qZA(),e.TgZ(14,"div",35)(15,"label",31),e._uU(16,"Phone Number"),e.qZA(),e.TgZ(17,"div",36)(18,"select",37,38),e.NdJ("change",function(){e.CHM(r);const n=e.MAs(19),o=e.oxw();return e.KtG(o.onSelectedCode(n.value))}),e.TgZ(20,"option",39),e._uU(21,"Select"),e.qZA(),e.YNc(22,A,2,2,"option",40),e.qZA(),e._UZ(23,"input",41),e.YNc(24,q,3,2,"div",42),e.qZA()(),e.TgZ(25,"div",29)(26,"label",31),e._uU(27,"Choose City"),e.qZA(),e.TgZ(28,"select",43,44),e.NdJ("change",function(){e.CHM(r);const n=e.MAs(29),o=e.oxw();return e.KtG(o.onSelectedCity(n.value))}),e.TgZ(30,"option",39),e._uU(31,"Select City"),e.qZA(),e.YNc(32,S,2,2,"option",40),e.qZA()(),e.TgZ(33,"div",29)(34,"label",31),e._uU(35,"Upload Profile"),e.qZA(),e.TgZ(36,"input",45),e.NdJ("change",function(n){e.CHM(r);const o=e.oxw();return e.KtG(o.onFileSelected(n))}),e.qZA()(),e.TgZ(37,"div",46)(38,"div",47)(39,"button",48),e._uU(40," Submit"),e.qZA(),e.TgZ(41,"button",49),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.CancelForm())}),e._uU(42," Cancel"),e.qZA()()()()()}if(2&i){const r=e.oxw();let t,n,o,c,d,u;e.xp6(3),e.Q6J("formGroup",r.driverForm),e.xp6(4),e.ekj("is-invalid",(null==(t=r.driverForm.get("drivername"))?null:t.invalid)&&((null==(t=r.driverForm.get("drivername"))?null:t.touched)||(null==(t=r.driverForm.get("drivername"))?null:t.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(n=r.driverForm.get("drivername"))?null:n.invalid)&&((null==(n=r.driverForm.get("drivername"))?null:n.touched)||(null==(n=r.driverForm.get("drivername"))?null:n.dirty))),e.xp6(4),e.ekj("is-invalid",(null==(o=r.driverForm.get("driveremail"))?null:o.invalid)&&((null==(o=r.driverForm.get("driveremail"))?null:o.touched)||(null==(o=r.driverForm.get("driveremail"))?null:o.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(c=r.driverForm.get("driveremail"))?null:c.invalid)&&((null==(c=r.driverForm.get("driveremail"))?null:c.touched)||(null==(c=r.driverForm.get("driveremail"))?null:c.dirty))),e.xp6(9),e.Q6J("ngForOf",r.countrycodeArray),e.xp6(1),e.ekj("is-invalid",(null==(d=r.driverForm.get("driverphone"))?null:d.invalid)&&((null==(d=r.driverForm.get("driverphone"))?null:d.touched)||(null==(d=r.driverForm.get("driverphone"))?null:d.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(u=r.driverForm.get("driverphone"))?null:u.invalid)&&((null==(u=r.driverForm.get("driverphone"))?null:u.touched)||(null==(u=r.driverForm.get("driverphone"))?null:u.dirty))),e.xp6(8),e.Q6J("ngForOf",r.citiesname)}}function w(i,a){if(1&i&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&i){const r=e.oxw().$implicit;e.xp6(1),e.Oqu(r.serviceDetails.vehicleName)}}function N(i,a){1&i&&(e.TgZ(0,"td"),e._uU(1,"No Service"),e.qZA())}const J=function(i,a){return{approved:i,declined:a}};function I(i,a){if(1&i){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",54),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"div",55)(13,"input",56),e.NdJ("click",function(){const o=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.driverStatus(o))}),e.qZA(),e._uU(14),e.qZA()(),e.YNc(15,w,2,1,"td",51),e.YNc(16,N,2,0,"td",51),e.TgZ(17,"td")(18,"button",57)(19,"mat-icon"),e._uU(20,"edit"),e.qZA()(),e.TgZ(21,"mat-menu",null,58)(23,"button",59),e.NdJ("click",function(){const o=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.editbtn(o))}),e.TgZ(24,"mat-icon"),e._uU(25,"update"),e.qZA(),e._uU(26,"Update"),e.qZA(),e.TgZ(27,"button",60),e.NdJ("click",function(){const o=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.deleteDriver(o._id))}),e.TgZ(28,"mat-icon"),e._uU(29,"delete_forever"),e.qZA(),e._uU(30,"Delete"),e.qZA(),e.TgZ(31,"button",61),e.NdJ("click",function(){const o=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.onserviceType(o))}),e.TgZ(32,"mat-icon"),e._uU(33,"drive_eta"),e.qZA(),e._uU(34,"Service Type"),e.qZA()()()()}if(2&i){const r=a.$implicit,t=e.MAs(22),n=e.oxw();e.xp6(2),e.Q6J("src",n.apiUrl+"/"+r.profile,e.LSH),e.xp6(2),e.Oqu(r.drivername),e.xp6(2),e.Oqu(r.driveremail),e.xp6(2),e.Oqu(r.countrycode+" "+r.driverphone),e.xp6(2),e.Oqu(r.cityDetails.city),e.xp6(3),e.Q6J("checked",r.status)("ngClass",e.WLB(11,J,r.status,!r.status)),e.xp6(1),e.hij(" ",1==r.status?"Approved":"Declined"," "),e.xp6(1),e.Q6J("ngIf",null!=r.servicetype),e.xp6(1),e.Q6J("ngIf",null==r.servicetype),e.xp6(2),e.Q6J("matMenuTriggerFor",t)}}function Q(i,a){if(1&i&&(e.TgZ(0,"option",52),e._uU(1),e.qZA()),2&i){const r=a.$implicit;e.Q6J("value",r._id),e.xp6(1),e.Oqu(r.vehicleName)}}function B(i,a){if(1&i){const r=e.EpF();e.TgZ(0,"div",62)(1,"form",30),e.NdJ("ngSubmit",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.updateService())}),e.TgZ(2,"h1"),e._uU(3,"Select Service Type"),e.qZA(),e.TgZ(4,"select",63,64),e.NdJ("change",function(){e.CHM(r);const n=e.MAs(5),o=e.oxw();return e.KtG(o.onSelectedVehicle(n.value))}),e.TgZ(6,"option",65),e._uU(7,"Select Service"),e.qZA(),e.YNc(8,Q,2,2,"option",40),e.qZA(),e.TgZ(9,"div",66)(10,"button",67),e._uU(11,"Add"),e.qZA(),e.TgZ(12,"button",68),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.closeModal())}),e._uU(13,"Close"),e.qZA()()()()}if(2&i){const r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.serviceForm),e.xp6(7),e.Q6J("ngForOf",r.vehiclesData)}}const Y=function(i,a,r){return{itemsPerPage:i,currentPage:a,totalItems:r}};let $=(()=>{var i;class a{constructor(t,n,o,c,d,u){this._driver=t,this.formBuilder=n,this.authService=o,this.toastr=c,this.socket=d,this._socket=u,this.apiUrl=_.N.apiUrl,this.driverFormButton=!1,this.countrycodeArray=[],this.isEditMode=!1,this.citiesname=[],this.driverArray=[],this.limit=5,this.currentPage=1,this.totalPages=0,this.paginatedDrivers=[],this.search="",this.serviceModal=!1,this.selectedSortBy="name",this.selectedSortOrder="desc"}ngOnInit(){this.getcountryCode(),this.getCityNamefromDB(),this.getDriverData(),this.getVehicleNamefromDB(),this.getDriverStatus(),this.getDriverService(),this.driverForm=this.formBuilder.group({profile:[""],drivername:["",[l.kI.required]],driveremail:["",[l.kI.required,l.kI.email]],countrycode:["",[l.kI.required]],driverphone:["",[l.kI.required,l.kI.minLength(10)]],city:["",[l.kI.required]],status:[""]}),this.serviceForm=this.formBuilder.group({servicetype:[""]})}getcountryCode(){this._driver.getcode().subscribe({next:t=>{t.countrydata.forEach(o=>{this.countrycodeArray.push(o.countryCode)}),this.countrycodeArray.sort()},error:t=>{console.log(t)}})}onSelectedCode(t){this.selectedcountrycode=t}getCityNamefromDB(){this._driver.getCityData().subscribe({next:t=>{this.citiesname=t.citydata},error:t=>{console.log(t.error.message)}})}onSelectedCity(t){this.selectedCity=t,console.log(t)}onFileSelected(t){this.file=t.target.files[0],console.log(this.file)}onSubmit(){this.isEditMode?this.updateDriver():this.AddDriver()}AddDriver(){console.log(this.driverForm.value);var n=new FormData;n.append("drivername",this.driverForm.value.drivername),n.append("driveremail",this.driverForm.value.driveremail),n.append("countrycode",this.selectedcountrycode),n.append("driverphone",this.driverForm.value.driverphone),n.append("city",this.selectedCity),n.append("profile",this.file),this.driverForm.valid?this._driver.addDriver(n).subscribe({next:o=>{console.log(o),this.getDriverData(),this.driverForm.reset(),this.driverFormButton=!1,this.file=null,this.toastr.success(o.message)},error:o=>{console.log(o.error.message),this.toastr.error(o.error.message)}}):this.toastr.warning("All Fields are Required")}getDriverData(){this._driver.getDriver(this.search,this.currentPage,this.limit,this.selectedSortBy,this.selectedSortOrder).subscribe({next:t=>{this.driverArray=t.driverdata,this.totalPages=t.totalPage,this.count=t.count,this.updatePaginatedDrivers()},error:t=>{console.log(t)}})}onPageSizeChange(t){this.limit=parseInt(t.target.value),this.currentPage=1,this.updatePaginatedDrivers(),this.getDriverData()}onPageChange(t){t>=1&&t<=this.totalPages&&(this.currentPage=t,this.updatePaginatedDrivers(),this.getDriverData())}getPagesArray(){return Array(this.totalPages).fill(0).map((t,n)=>n+1)}updatePaginatedDrivers(){const t=(this.currentPage-1)*this.limit;this.paginatedDrivers=this.driverArray.slice(t,t+this.limit)}deleteDriver(t){console.log(t),confirm("Are you sure you want to delete this Driver?")&&this._driver.deleteDriver(t).subscribe({next:o=>{console.log(o),this.getDriverData(),this.toastr.success(o.message)},error:o=>{console.log(o.error.message),this.toastr.error(o.error.message)}})}editbtn(t){this.isEditMode=!0,this.id=t._id,console.log(t),this.driverFormButton=!0,this.driverForm.patchValue({drivername:t.drivername,driveremail:t.driveremail,countrycode:t.countrycode,city:t.city,driverphone:t.driverphone,status:t.status})}updateCancel(){this.driverFormButton=!this.driverFormButton}updateDriver(){const t=this.driverForm.value;console.log(t);const n=new FormData;n.append("drivername",t.drivername),n.append("driveremail",t.driveremail),n.append("countrycode",t.countrycode),n.append("driverphone",t.driverphone),n.append("city",t.city),n.append("profile",this.file),this._driver.updateDriver(this.id,n).subscribe({next:o=>{console.log(o.updatedDriver),this.driverArray.push(o.updatedDriver),this.getDriverData(),this.driverForm.reset(),this.driverFormButton=!1,this.file=null,this.toastr.success(o.message)},error:o=>{console.log(o),this.toastr.error(o.error.message)}})}driverStatus(t){this.id=t._id,this._socket.updatedriverStatus(this.id,!t.status)}getDriverStatus(){this._socket.onUpdateStatusData().subscribe({next:t=>{this.driverArray=t,this.getDriverData(),this.toastr.success(t.message,"Success")},error:t=>{console.log(t),this.toastr.error(t.error.message)}})}getVehicleNamefromDB(){this._driver.getVehicleData().subscribe({next:t=>{this.vehiclesData=t.data},error:t=>{console.log(t.error.message)}})}onSelectedVehicle(t){this.selectedVehicle=t}onserviceType(t){this.driverFormButton=!1,this.serviceModal=!0,this.id=t._id,this.serviceForm.patchValue({servicetype:t.servicetype})}updateService(){const t=this.serviceForm.value.servicetype;console.log(t),this._socket.updatedriverService(this.id,t)}getDriverService(){this._socket.onUpdateServiceData().subscribe({next:t=>{this.getDriverData(),this.serviceModal=!1,this.serviceForm.reset(),this.toastr.success(t.message,"Success")},error:t=>{console.log(t),this.toastr.error(t.error.message)}})}toggleFormVisibility(){this.driverFormButton=!this.driverFormButton,this.isEditMode=!1,this.driverForm.reset(),this.driverForm.patchValue({countrycode:"",city:""})}closeModal(){this.serviceModal=!1,this.serviceForm.reset()}CancelForm(){this.driverFormButton=!1,this.isEditMode=!1,this.driverForm.reset(),this.driverForm.patchValue({countrycode:"",city:""})}resetTimer(){this.authService.resetInactivityTimer()}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(b),e.Y36(l.qu),e.Y36(M.e),e.Y36(Z._W),e.Y36(h.$),e.Y36(h.$))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-driver"]],decls:65,vars:16,consts:[[1,"container"],[1,"filter-section"],["id","showbtn",1,"",3,"click"],["aria-hidden","true",1,"fa","fa-user-plus"],["type","text","id","search-input","placeholder","Search by ID, Name, Email, Phone...",3,"ngModel","ngModelChange"],["id","searchbtn",3,"click"],["id","pageSize",1,"m-2",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","50"],["value","100"],["id","filter-dropdown",3,"ngModel","ngModelChange","change"],["value","name"],["value","email"],["value","phone"],["value","desc"],["value","asc"],[1,"parentFormContainer"],["id","formContainer",4,"ngIf"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-light","text-dark"],[4,"ngFor","ngForOf"],["class","modal-body",4,"ngIf"],[1,"d-flex","justify-content-center"],["previousLabel","","nextLabel","",3,"maxSize","responsive","pageChange"],["id","formContainer"],[1,"mb-3"],[1,"container",3,"formGroup","ngSubmit"],[1,"form-label","d-flex","justify-content-start"],["type","text","formControlName","drivername","placeholder","Enter Name",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","driveremail","placeholder","Enter Email",1,"form-control"],[1,"parent","mb-3"],[1,"phone-input","w-100"],["id","country-code","name","code","formControlName","countrycode",1,"form-control","w-25",3,"change"],["code",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","tel","id","phone-number","formControlName","driverphone","placeholder","Enter Phone","maxlength","10","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control"],["class","invalid-feedback text-danger",4,"ngIf"],["id","city-name","name","city","formControlName","city",1,"form-control","w-100",3,"change"],["city",""],["type","file","formControlName","profile","name","profile",1,"form-control",3,"change"],[1,"form-group","row","mt-3"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],[1,"invalid-feedback","text-danger"],["alt","driver-profile",3,"src"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckChecked",1,"form-check-input",3,"checked","ngClass","click"],["color","accent","mat-button","",3,"matMenuTriggerFor"],["lvl2master","matMenu"],["mat-menu-item","","id","updatebtn",3,"click"],["mat-menu-item","","id","deletebtn",3,"click"],["mat-menu-item","",3,"click"],[1,"modal-body"],["name","vehicle","formControlName","servicetype",1,"form-control","w-100",3,"change"],["vehicle",""],["value","null","disabled","","selected",""],[1,"p-2"],[1,"btn","btn-success","m-2"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.toggleFormVisibility()}),e._UZ(3,"i",3),e._uU(4,"\xa0Add Driver"),e.qZA(),e.TgZ(5,"input",4),e.NdJ("ngModelChange",function(c){return n.search=c}),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return n.getDriverData()}),e._uU(7,"Search"),e.qZA(),e.TgZ(8,"select",6),e.NdJ("ngModelChange",function(c){return n.limit=c})("change",function(c){return n.onPageSizeChange(c)}),e.TgZ(9,"option",7),e._uU(10,"Select Page"),e.qZA(),e.TgZ(11,"option",7),e._uU(12,"5"),e.qZA(),e.TgZ(13,"option",8),e._uU(14,"10"),e.qZA(),e.TgZ(15,"option",9),e._uU(16,"20"),e.qZA(),e.TgZ(17,"option",10),e._uU(18,"50"),e.qZA(),e.TgZ(19,"option",11),e._uU(20,"100"),e.qZA()(),e.TgZ(21,"select",12),e.NdJ("ngModelChange",function(c){return n.selectedSortBy=c})("change",function(){return n.getDriverData()}),e.TgZ(22,"option",13),e._uU(23,"Name"),e.qZA(),e.TgZ(24,"option",14),e._uU(25,"Email"),e.qZA(),e.TgZ(26,"option",15),e._uU(27,"Phone"),e.qZA()(),e.TgZ(28,"select",12),e.NdJ("ngModelChange",function(c){return n.selectedSortOrder=c})("change",function(){return n.getDriverData()}),e.TgZ(29,"option",16),e._uU(30,"Sorting Order"),e.qZA(),e.TgZ(31,"option",17),e._uU(32,"Ascending"),e.qZA(),e.TgZ(33,"option",16),e._uU(34,"Descending"),e.qZA()()()(),e.TgZ(35,"div",18),e.YNc(36,k,43,12,"div",19),e.qZA(),e.TgZ(37,"div",18)(38,"div",20)(39,"div",21)(40,"table",22)(41,"thead",23)(42,"tr")(43,"th"),e._uU(44,"Profile"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Name"),e.qZA(),e.TgZ(47,"th"),e._uU(48,"Email"),e.qZA(),e.TgZ(49,"th"),e._uU(50,"Phone"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"City"),e.qZA(),e.TgZ(53,"th"),e._uU(54,"Driver Status"),e.qZA(),e.TgZ(55,"th"),e._uU(56,"Service"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"Action"),e.qZA()()(),e.TgZ(59,"tbody"),e.YNc(60,I,35,14,"tr",24),e.ALo(61,"paginate"),e.qZA()()()()(),e.YNc(62,B,14,2,"div",25),e.TgZ(63,"div",26)(64,"pagination-controls",27),e.NdJ("pageChange",function(c){return n.onPageChange(c)}),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngModel",n.search),e.xp6(3),e.Q6J("ngModel",n.limit),e.xp6(13),e.Q6J("ngModel",n.selectedSortBy),e.xp6(7),e.Q6J("ngModel",n.selectedSortOrder),e.xp6(8),e.Q6J("ngIf",n.driverFormButton),e.xp6(24),e.Q6J("ngForOf",e.xi3(61,9,n.driverArray,e.kEZ(12,Y,n.limit,n.currentPage,n.count))),e.xp6(2),e.Q6J("ngIf",n.serviceModal),e.xp6(2),e.Q6J("maxSize",5)("responsive",!0))},dependencies:[g.mk,g.sg,g.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.nD,l.On,l.sg,l.u,v.LS,f.Hw,p.VK,p.OP,p.p6,C.lW,v._s],styles:[".sortorder[_ngcontent-%COMP%]{margin-left:20px;display:flex;justify-content:center;align-items:center}.sortorder[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#custom-input[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px}#search[_ngcontent-%COMP%]{width:25%}.parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #d0d0d0;width:40%;max-width:600px;padding:20px;margin:40px}.updateContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin-top:5%}.container[_ngcontent-%COMP%]{border-radius:5px;padding:20px;transition:all linear .3s}.container[_ngcontent-%COMP%]:hover{transform:scale(1);transition:all linear .3s;z-index:1}.parent[_ngcontent-%COMP%]{align-items:center;justify-content:center}.phone-input[_ngcontent-%COMP%]{width:40%;background-color:#fff;display:flex}.phone-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-right:10px}#pageSize[_ngcontent-%COMP%]{justify-content:center}label[_ngcontent-%COMP%]{font-size:large;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.container[_ngcontent-%COMP%]{margin:0 auto;padding:20px}.filter-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:20px}#filter-dropdown[_ngcontent-%COMP%], #pageSize[_ngcontent-%COMP%]{padding:5px}#search-input[_ngcontent-%COMP%]{flex-grow:1;padding:5px}#showbtn[_ngcontent-%COMP%]{padding:6px;background-color:#00b900;color:#fff;border:none;cursor:pointer;border-radius:3px}#searchbtn[_ngcontent-%COMP%]{padding:6px;background-color:#7200c4;color:#fff;border:none;cursor:pointer;border-radius:3px}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}tbody[_ngcontent-%COMP%]{color:#fff}img[_ngcontent-%COMP%]{height:40px}@media (max-width: 780px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:12px;color:#fff}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;max-width:600px;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{color:#000}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #d0d0d0;width:90%;max-width:600px;padding:20px;margin:40px}#button-search-div[_ngcontent-%COMP%]{display:block}.sortorder[_ngcontent-%COMP%]{margin-left:20px;display:block}.sortorder[_ngcontent-%COMP%], #custom-input[_ngcontent-%COMP%]{display:block}#search[_ngcontent-%COMP%]{width:100%}}@media (max-width: 480px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:14px}}#button-search-div[_ngcontent-%COMP%]{display:block}.card[_ngcontent-%COMP%]{border-radius:10px;border:1px solid #cccccc;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:300px;margin:10px;transition:all linear .2s}.card-img-top[_ngcontent-%COMP%]{height:50px;width:50px}@media screen and (max-width: 480px){#formContainer[_ngcontent-%COMP%]{width:90%;margin:20px}}@media screen and (max-width: 780px){#formContainer[_ngcontent-%COMP%]{width:80%;margin:20px}}@media screen and (max-width: 480px){.card[_ngcontent-%COMP%]{width:90%;height:auto}}.modal-body[_ngcontent-%COMP%]{background-color:#fff;width:30%;box-shadow:2px 2px 2px #666;position:fixed;z-index:9999;top:0;bottom:0;left:70%;background-color:#00000080;overflow:auto;transition:left 2s ease-in-out}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:3%}.card[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #cccccc;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:40%;margin:10px;transition:all linear .2s}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#000;color:#fff;border-radius:3px;width:80%}.approved[_ngcontent-%COMP%]{background-color:green}"]}),a})();var E=s(1896);const j=[{path:"",component:$,pathMatch:"full"}];let G=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,E.Bz.forChild(j),l.u5,l.UX,v.JX,f.Ps,p.Tx,C.ot]}),a})()}}]);