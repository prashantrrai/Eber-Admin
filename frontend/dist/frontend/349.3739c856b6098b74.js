"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[349],{8349:(F,y,p)=>{p.r(y),p.d(y,{CityModule:()=>A});var m=p(6814),c=p(6223),t=p(5879),C=p(9229),_=p(6993),f=p(9862),P=p(7682),h=p(6472);function M(a,g){if(1&a&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&a){const s=g.$implicit;t.Q6J("value",s._id),t.xp6(1),t.Oqu(s.countryName)}}function O(a,g){if(1&a){const s=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.checkZone_AddCity())}),t._uU(1,"Add City"),t.qZA()}}function b(a,g){if(1&a){const s=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.updateCity())}),t._uU(1,"Update City"),t.qZA()}}function v(a,g){if(1&a){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",30),t.NdJ("click",function(){const o=t.CHM(s).$implicit,i=t.oxw();return t.KtG(i.editbtn(o._id,o))}),t._UZ(7,"i",31),t.qZA()()()}if(2&a){const s=g.$implicit;t.xp6(2),t.Oqu(s.countryDetails.countryName),t.xp6(2),t.Oqu(s.city)}}const x=function(a,g,s){return{itemsPerPage:a,currentPage:g,totalItems:s}};let Z=(()=>{var a;class g{constructor(e,n,o,i,l){this.toastr=e,this._city=n,this.http=o,this.formBuilder=i,this.authService=l,this.addedCities=[],this.newCity="",this.isValidCity=!1,this.isDuplicateCity=!1,this.polygons=[],this.isInZone=!1,this.cordsArray=[],this.selectedCountry="",this.countryData=[],this.cityData=[],this.isaddbutton=!0,this.isupdatebutton=!1,this.isCountryDisabled=!1,this.page=1,this.citydata={countryname:"",cityname:""},this.totalPages=0,this.limit=5,this.currentPage=1,this.paginatedData=[],this.cityForm=this.formBuilder.group({countryname:["",c.kI.required],cityname:["",c.kI.required]})}ngOnInit(){this.cityForm=this.formBuilder.group({countryname:[""],cityname:[""]}),this.getCItyData(),this.getCountryNamefromDB(),this.initMap()}setLocation(e){e.geometry?e.geometry&&e.geometry.location&&(this.map.setCenter(e.geometry.location),this.map.setZoom(8),this.marker.setPosition(e.geometry.location),this.marker.setVisible(!0)):console.error("No geometry found for place:",e)}onPlaceChanged(){const e=this.autocomplete.getPlace();if(e.geometry&&e.geometry.location){const n=e.geometry.location.lat(),o=e.geometry.location.lng();console.log("Latitude:",n),console.log("Longitude:",o)}}initMap(){this.map=new google.maps.Map(document.getElementById("map"),{center:{lat:20.5937,lng:78.9629},zoom:4});const e=document.getElementById("inputCity");this.autocomplete=new google.maps.places.Autocomplete(e),this.autocomplete.addListener("place_changed",()=>{const n=this.autocomplete.getPlace();this.onPlaceChanged(),this.setLocation(n)}),this.marker=new google.maps.Marker({map:this.map,draggable:!0,animation:google.maps.Animation.DROP,anchorPoint:new google.maps.Point(0,-29)}),this.drawingManager=new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.POLYGON,drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.POLYGON]}}),this.drawingManager.setMap(this.map),google.maps.event.addListener(this.drawingManager,"overlaycomplete",n=>{n.type===google.maps.drawing.OverlayType.POLYGON&&(this.polygon&&this.polygon.setMap(null),this.polygon=n.overlay)}),google.maps.event.addListener(this.polygon,"dragend",n=>{const o=this.polygon.getPath().getArray().map(i=>({lat:i.lat(),lng:i.lng()}));console.log("Updated Coordinates:",o)})}getCountryNamefromDB(){this._city.getcountryData().subscribe({next:e=>{this.countryData=e.countrydata},error:e=>{console.log(e)}})}getCItyData(){this._city.getcity(this.currentPage,this.limit).subscribe({next:e=>{this.cityData=e.citydata,this.count=e.count,this.totalPages=e.totalPage},error:e=>{console.log(e)}})}onPageSizeChange(e){this.limit=parseInt(e.target.value),this.currentPage=1,this.updatePaginatedData(),this.getCItyData()}onPageChange(e){e>=1&&e<=this.totalPages&&(this.currentPage=e,this.updatePaginatedData(),this.getCItyData())}updatePaginatedData(){const e=(this.currentPage-1)*this.limit;this.paginatedData=this.cityData.slice(e,e+this.limit)}removePolygon(){this.polygonObj&&this.polygonObj.forEach(e=>{e.setMap(null)},this.polygonObj=[],this.polygons=[])}onSelected(e){this.removePolygon(),this.selectedCountry=e,console.log(e);const n=this.countryData.find(o=>o._id===e);n&&(this.selectedCountryName=n.countryName,console.log(this.selectedCountryName),this._city.getCityPolygons(e).subscribe({next:o=>{console.log(o),o.forEach(i=>{this.polygons.push(i.coordinates)}),this.polygonObj=this.polygons.map(i=>new google.maps.Polygon({paths:i,editable:!1,draggable:!1,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,map:this.map}))},error:o=>{console.log(o)}}),this.http.get(`https://restcountries.com/v3.1/name/${this.selectedCountryName}`).subscribe({next:o=>{let l=o.filter(d=>d.name.common==this.selectedCountryName)[0].cca2.toLowerCase();this.autocomplete.setTypes(["(cities)"]),this.autocomplete.setComponentRestrictions({country:[l]})},error:o=>{console.log("Country Selection Error: ",o.message),this.toastr.error(o.message)}}))}checkZone_AddCity(){if(""!=this.cityForm.value.countryname){const e=new google.maps.Geocoder,n=document.getElementById("inputCity");e.geocode({address:n.value},(o,i)=>{if("OK"===i)if(this.isInZone=google.maps.geometry.poly.containsLocation(o[0].geometry.location,this.polygon),1==this.isInZone){const d=this.polygon.getPath();this.coordinates=d.getArray().map(r=>({lat:r.lat(),lng:r.lng()})),console.log("Coordinates:",this.coordinates);const u={country_id:this.selectedCountry,city:n.value,coordinates:this.coordinates};console.log(u),this._city.addcity(u).subscribe({next:r=>{this.cityData.push(r.city),alert(r.message),this.getCItyData(),this.getCountryNamefromDB(),this.marker.setVisible(!1),this.marker.setPosition(null),this.polygon.setMap(null),this.cityForm.reset()},error:r=>{console.log(r.error.message),alert(r.error.message)}})}else alert("Location not Inside Zone");else alert("please choose city and create a zone")})}else alert("All Fields are Required")}editbtn(e,n){this.removePolygon(),console.log(n),this.id=e,this.inputValue=n.city,this.selectedCountryName=n.countryDetails.countryName,this.cityForm.get("countryname")?.disable(),this.cityForm.patchValue({countryname:n.countryDetails._id,cityname:n.city}),this.isaddbutton=!1,this.isupdatebutton=!0,console.log(n.coordinates),this.displayPolygon(n.coordinates)}displayPolygon(e){const n=e.map(i=>new google.maps.LatLng(i.lat,i.lng));this.polygon&&this.polygon.setMap(null),this.polygon=new google.maps.Polygon({paths:n,editable:!0,draggable:!0,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}),this.polygon.setMap(this.map);const o=new google.maps.LatLngBounds;e.forEach(i=>{o.extend(new google.maps.LatLng(i.lat,i.lng))}),this.map.fitBounds(o)}updateCity(){const e=new google.maps.Geocoder,n=document.getElementById("inputCity");e.geocode({address:n.value},(o,i)=>{if("OK"===i){const l=o[0].geometry.location;if(console.log(l),this.isInZone=google.maps.geometry.poly.containsLocation(l,this.polygon),1==this.isInZone&&""!=n.value){const d=this.polygon.getPath().getArray().map(r=>({lat:r.lat(),lng:r.lng()}));console.log(d);const u={city:n.value,coordinates:d};console.log(u),this._city.updateCity(this.id,u).subscribe({next:r=>{console.log(r),alert(r.message),this.cityData.push(r.city),this.isupdatebutton=!1,this.isaddbutton=!0,this.cityForm.get("countryname")?.enable(),this.getCItyData(),this.getCountryNamefromDB(),this.marker.setVisible(!1),this.marker.setPosition(null),this.polygon.setMap(null),this.cityForm.reset()},error:r=>{console.log(r.error.message),alert(r.error.message)}})}else alert("Location not Inside Zone")}else alert("please choose city and create a zone")})}resetTimer(){this.authService.resetInactivityTimer()}}return(a=g).\u0275fac=function(e){return new(e||a)(t.Y36(C._W),t.Y36(_.Z),t.Y36(f.eN),t.Y36(c.qu),t.Y36(P.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-city"]],decls:47,vars:15,consts:[[1,"parentFormContainer"],["id","formContainer"],[3,"formGroup"],["name","country","formControlName","countryname",3,"change"],["country",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","inputCity","placeholder","Enter city name","formControlName","cityname"],[3,"click",4,"ngIf"],[1,"p-4"],["id","map",1,"rounded"],[1,"d-flex","justify-content-center","align-items-center"],["for","pageSize"],[1,"custom-select"],["id","pageSize",1,"m-2",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","50"],["value","100"],[1,"parenttableContainer"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"maxSize","responsive","pageChange"],[3,"value"],[3,"click"],["id","updatebtn",3,"click"],[1,"fa-solid","fa-pen-to-square"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"select",3,4),t.NdJ("change",function(){t.CHM(o);const l=t.MAs(4);return t.KtG(n.onSelected(l.value))}),t.TgZ(5,"option",5),t._uU(6,"Select country "),t.qZA(),t.YNc(7,M,2,2,"option",6),t.qZA(),t._UZ(8,"input",7),t.YNc(9,O,2,0,"button",8),t.YNc(10,b,2,0,"button",8),t.qZA()()(),t.TgZ(11,"div",9),t._UZ(12,"div",10),t.qZA(),t.TgZ(13,"div",11)(14,"label",12),t._uU(15,"Show Data :"),t.qZA(),t.TgZ(16,"div",13)(17,"select",14),t.NdJ("ngModelChange",function(l){return n.limit=l})("change",function(l){return n.onPageSizeChange(l)}),t.TgZ(18,"option",15),t._uU(19,"Select Page"),t.qZA(),t.TgZ(20,"option",15),t._uU(21,"5"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"10"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"20"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"50"),t.qZA(),t.TgZ(28,"option",19),t._uU(29,"100"),t.qZA()()()(),t.TgZ(30,"div",20)(31,"div",21)(32,"div",22)(33,"table",23)(34,"thead",24)(35,"tr")(36,"th"),t._uU(37,"Country"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"City"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Action"),t.qZA()()(),t.TgZ(42,"tbody"),t.YNc(43,v,8,2,"tr",25),t.ALo(44,"paginate"),t.qZA()()()()(),t.TgZ(45,"div",26)(46,"pagination-controls",27),t.NdJ("pageChange",function(l){return n.onPageChange(l)}),t.qZA()()}2&e&&(t.xp6(2),t.Q6J("formGroup",n.cityForm),t.xp6(5),t.Q6J("ngForOf",n.countryData),t.xp6(2),t.Q6J("ngIf",n.isaddbutton),t.xp6(1),t.Q6J("ngIf",n.isupdatebutton),t.xp6(7),t.Q6J("ngModel",n.limit),t.xp6(26),t.Q6J("ngForOf",t.xi3(44,8,n.cityData,t.kEZ(11,x,n.limit,n.currentPage,n.count))),t.xp6(3),t.Q6J("maxSize",5)("responsive",!0))},dependencies:[m.sg,m.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,h.LS,h._s],styles:["#map[_ngcontent-%COMP%]{height:400px;width:100%;border:1px solid rgb(165,165,165);margin-top:20px}.parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-around;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}#formContainer[_ngcontent-%COMP%]{align-items:center;justify-content:center}#formContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #formContainer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:8px;width:300px;margin:10px}#formContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px;padding:8px 16px;background-color:#00bb06;color:#fff;border:none;cursor:pointer}#pageSize[_ngcontent-%COMP%]{padding:5px}#formContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#007806}@media screen and (max-width: 650px){#parentFormContainer[_ngcontent-%COMP%], #formContainer[_ngcontent-%COMP%]{display:block}#formContainer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #formContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:10px}#tableContainer[_ngcontent-%COMP%]{width:90%;background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #000;max-width:600px;padding:20px;margin:40px}}.parenttableContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#tableContainer[_ngcontent-%COMP%]{width:90%;background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #000;padding:20px;margin:40px}.updateContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin-top:5%}.container[_ngcontent-%COMP%]{border-radius:5px;box-shadow:2px 2px 6px #000;padding:20px;transition:all linear .3s}.container[_ngcontent-%COMP%]:hover{transform:scale(1);transition:all linear .3s;z-index:1;box-shadow:4px 4px 16px #00b3ff}.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}@media (max-width: 360px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:12px}}@media (max-width: 480px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:14px}}"]}),g})();var T=p(1896);const w=[{path:"",component:Z,pathMatch:"full"}];let A=(()=>{var a;class g{}return(a=g).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,T.Bz.forChild(w),c.u5,c.UX,h.JX]}),g})()}}]);