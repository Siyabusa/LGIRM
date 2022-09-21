(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(242)},117:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},182:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(31),s=a.n(l),r=(a(117),a(77)),o=a(18),c=a.n(o),d=a(23),u=a(8),m=a(9),p=a(12),h=a(10),E=a(11),v=a(44),f=a(100),g=a(253),b=a(108),y=a(107),O=a(47),S=a(99),C=a(51),A=(a(123),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"lander"},i.a.createElement("h1",null,"GDoH"),i.a.createElement("p",null,"A simple health care information app")))}}]),t}(n.Component)),N=(a(124),function(){return i.a.createElement("div",{className:"NotFound"},i.a.createElement("h3",null,"Sorry, page not found!"))}),P=a(102),R=a(245),L=a(246),D=a(247),j=a(255),x=a(62),w=a(244),I=a(105),k=(a(125),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,l=e.className,s=void 0===l?"":l,r=e.disabled,o=void 0!==r&&r,c=Object(x.a)(e,["isLoading","text","loadingText","className","disabled"]);return i.a.createElement(w.a,Object.assign({className:"LoaderButton ".concat(s),disabled:o||t},c),t&&i.a.createElement(I.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),K=a(57),F=a.n(K),H=(a(158),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(d.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({isLoading:!0});try{sessionStorage.setItem("loggedIn",!0),a.props.userHasAuthenticated(!0),a.props.history.push("/maintabview")}catch(n){alert(n.message),a.setState({isLoading:!1})}case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:""},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return i.a.createElement("div",{className:"Login"},i.a.createElement(R.a,{className:"center",src:F.a,responsive:!0}),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(L.a,{controlId:"email",bsSize:"large"},i.a.createElement(D.a,null,"Email"),i.a.createElement(j.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),i.a.createElement(L.a,{controlId:"password",bsSize:"large"},i.a.createElement(D.a,null,"Password"),i.a.createElement(j.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),i.a.createElement(k,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in\u2026"})))}}]),t}(n.Component)),T=a(26),B=a(248),M=a(58),V=a.n(M),G=(a(159),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(){var e=Object(d.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{a.props.history.push({pathname:"/patientsearchresults",state:{hospital:a.state.hospital,searchtype:a.getSearchType(),system:a.state.system,value:a.state.value}})}catch(n){alert(n.message),a.setState({isLoading:!1})}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChangeList=function(e){a.setState({hospital:a.inputRef.value})},a.onChangeListSystems=function(e){a.setState({system:e.target.value})},a.onSearchChangeSetPatient=function(e){a.setState({patientIdchecked:!0})},a.onSearchChangeSetID=function(e){a.setState({patientIdchecked:!1})},a.RenderPharmaView=function(){return i.a.createElement("div",{className:"pharmacy"},i.a.createElement(L.a,{controlId:"Id",bsSize:"large"},i.a.createElement(D.a,null,"Id Number"),i.a.createElement(j.a,{value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a)),type:"number"})))},a.RenderHISView=function(){return i.a.createElement("div",{className:"HIS"},i.a.createElement(L.a,{controlId:"formControlsSelect2",bsSize:"large"},i.a.createElement(D.a,null,"Hospital"),i.a.createElement(j.a,{componentClass:"select",placeholder:"All",inputRef:function(e){a.inputRef=e},onChange:a.onChangeList},i.a.createElement("option",{value:"All"},"All"),i.a.createElement("option",{value:"Bheki Mlangeni"},"Bheki Mlangeni"),i.a.createElement("option",{value:"Carletonville"},"Carletonville"),i.a.createElement("option",{value:"Charlotte Maxeke"},"Charlotte Maxeke"),i.a.createElement("option",{value:"Chris Hani Baragwanath"},"Chris Hani Baragwanath"),i.a.createElement("option",{value:"Cullinan"},"Cullinan"),i.a.createElement("option",{value:"Dr George Mukhari"},"Dr George Mukhari"),i.a.createElement("option",{value:"Edenvale"},"Edenvale"),i.a.createElement("option",{value:"Heidelberg"},"Heidelberg"),i.a.createElement("option",{value:"Helen Joseph"},"Helen Joseph"),i.a.createElement("option",{value:"Jubilee"},"Jubilee"),i.a.createElement("option",{value:"Fare East Rand"},"Fare East Rand"),i.a.createElement("option",{value:"Germiston"},"Germiston"),i.a.createElement("option",{value:"Kalafong"},"Kalafong"),i.a.createElement("option",{value:"Kopanong"},"Kopanong"),i.a.createElement("option",{value:"Leratong"},"Leratong"),i.a.createElement("option",{value:"Mamelodi"},"Mamelodi"),i.a.createElement("option",{value:"Medunsa"},"Medunsa"),i.a.createElement("option",{value:"Odi"},"Odi"),i.a.createElement("option",{value:"Oral Dental"},"Oral Dental"),i.a.createElement("option",{value:"Pholosong"},"Pholosong"),i.a.createElement("option",{value:"Pretoria West"},"Pretoria West"),i.a.createElement("option",{value:"Rahima Moosa"},"Rahima Moosa"),i.a.createElement("option",{value:"Sizwe"},"Sizwe"),i.a.createElement("option",{value:"South Rand"},"South Rand"),i.a.createElement("option",{value:"Sterkfontein"},"Sterkfontein"),i.a.createElement("option",{value:"Steve Biko"},"Steve Biko"),i.a.createElement("option",{value:"Tambo"},"Tambo"),i.a.createElement("option",{value:"Tara"},"Tara"),i.a.createElement("option",{value:"Tembisa"},"Tembisa"),i.a.createElement("option",{value:"Thelle Mogoerane"},"Thelle Mogoerane"),i.a.createElement("option",{value:"Tshwane"},"Tshwane"),i.a.createElement("option",{value:"Tshwane Rehab"},"Tshwane Rehab"),i.a.createElement("option",{value:"Weskoppies"},"Weskoppies"),i.a.createElement("option",{value:"Wits Oral"},"Wits Oral"),i.a.createElement("option",{value:"Yusuf Dadoo"},"Yusuf Dadoo"))),i.a.createElement(L.a,null,i.a.createElement(B.a,{name:"radioGroup",inline:!0,defaultChecked:!0,onClick:a.onSearchChangeSetPatient.bind(Object(T.a)(a))},"Patient Identifier")," ",i.a.createElement(B.a,{name:"radioGroup",inline:!0,onClick:a.onSearchChangeSetID.bind(Object(T.a)(a))},"Identity Number")," "),a.state.patientIdchecked?i.a.createElement(L.a,{controlId:"patientId",bsSize:"large"},i.a.createElement(D.a,null,"Patient ID"),i.a.createElement(j.a,{autoFocus:!0,type:"text",value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a))})):i.a.createElement(L.a,{controlId:"Id",bsSize:"large"},i.a.createElement(D.a,null,"Id Number"),i.a.createElement(j.a,{value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a)),type:"number"})))},a.renderNotAvaiable=function(){return i.a.createElement("div",{className:"notAvailable"},i.a.createElement("h2",null,"View currently not available"))},a.renderInitView=function(){return"HIS"===a.state.system?a.RenderHISView():"Pharmacy"===a.state.system?a.RenderPharmaView():void a.renderNotAvaiable()},a.state={isLoading:!1,hospital:"All",system:"HIS",patientIdchecked:!0,value:void 0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return!0}},{key:"getSearchType",value:function(){return this.state.patientIdchecked?"patient":"Id"}},{key:"render",value:function(){var e=this,t=this.renderInitView();return i.a.createElement("div",{className:"MainSearch"},i.a.createElement(R.a,{className:"center",src:V.a,responsive:!0}),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(L.a,{controlId:"formControlsSelect1",bsSize:"large"},i.a.createElement(D.a,null,"Systems"),i.a.createElement(j.a,{componentClass:"select",placeholder:"HIS",sysRef:function(t){e.sysRef=t},onChange:this.onChangeListSystems},i.a.createElement("option",{value:"HIS"},"HIS"),i.a.createElement("option",{value:"Pharmacy"},"Pharmacy"),i.a.createElement("option",{value:"HPRS"},"HPRS"),i.a.createElement("option",{value:"SANBS"},"SANBS"),i.a.createElement("option",{value:"NHLS"},"NHLS"),i.a.createElement("option",{value:"PACS"},"PACS"),i.a.createElement("option",{value:"Mental Health"},"Mental Health"))),t,i.a.createElement(k,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"find",loadingText:"searching\u2026"})))}}]),t}(n.Component)),z=Object(f.a)(G),W=(a(160),a(111)),J=a(250),q=a(251),$=a(72),Q=a.n($),X=(a(182),a(249)),Y=a(254),U=a(46),Z=a.n(U),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(d.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==a.props.details.Prescriptions&&([],t=a.props.details.Prescriptions[0].PrescriptionDetail,a.setState({data:t}));case 1:case"end":return e.stop()}},e)})),a.state={data:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.details.Prescriptions){var t;t=e.details.Prescriptions[0].PrescriptionDetail,this.setState({data:t})}else this.setState({data:[]})}},{key:"render",value:function(){return i.a.createElement(Z.a,{striped:!0,hover:!0,keyField:"PersonReviewedDate",data:this.state.data,columns:[{dataField:"PersonReviewedDate",text:"Review Date"},{dataField:"PersonActive",text:"Active?"},{dataField:"PersonIDNumber",text:"ID",sort:!0},{dataField:"PersonDispenser",text:"Dispenser"},{dataField:"PersonOther",text:"Other"},{dataField:"SysLastEdited",text:"SysLastEdited"},{dataField:"PersonDateDeceased",text:"DateDeceased"},{dataField:"PersonStatus",text:"Status"},{dataField:"PersonPead",text:"PersonPead"},{dataField:"PersonDateJoined",text:"DateJoined"},{dataField:"PersonNaive",text:"PersonNaive"},{dataField:"PersonRegisteredInsys",text:"PersonRegisteredInsys"},{dataField:"PersonInstitution",text:"Institution"},{dataField:"PrescriberName",text:"Name"},{dataField:"PrescriptionCost",text:"PrescriptionCost"}]})}}]),t}(n.Component),ee=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(X.a,{defaultActiveKey:1,id:"maintabview"},i.a.createElement(Y.a,{eventKey:1,title:"Prescriptions"},i.a.createElement(_,{details:this.props.selected})),i.a.createElement(Y.a,{eventKey:2,title:"Summary"},i.a.createElement("div",{className:"summ"},i.a.createElement("h2",null,"summary here"))))}}]),t}(n.Component),te=a(252),ae=a(256),ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).getResidentialAddress=function(e,t){return void 0===e?null:"patient"===t?i.a.createElement("div",{className:"addrdiv"},i.a.createElement("address",null,""===e.ResidentialAddress.Line1||void 0===e.ResidentialAddress.Line1?null:e.ResidentialAddress.Line1," ",""===e.ResidentialAddress.Line1||void 0===e.ResidentialAddress.Line1?null:i.a.createElement("br",null),""===e.ResidentialAddress.Line2||void 0===e.ResidentialAddress.Line2?null:e.ResidentialAddress.Line2," ",""===e.ResidentialAddress.Line2||void 0===e.ResidentialAddress.Line2?null:i.a.createElement("br",null),""===e.ResidentialAddress.line3||void 0===e.ResidentialAddress.Line3?null:e.ResidentialAddress.line3," ",""===e.ResidentialAddress.Line3||void 0===e.ResidentialAddress.Line3?null:i.a.createElement("br",null),""===e.ResidentialAddress.Line4||void 0===e.ResidentialAddress.Line4?null:e.ResidentialAddress.Line4," ",""===e.ResidentialAddress.Line4||void 0===e.ResidentialAddress.Line4?null:i.a.createElement("br",null),""===e.ResidentialAddress.PostalCode||void 0===e.ResidentialAddress.PostalCode?null:e.ResidentialAddress.PostalCode)):i.a.createElement("div",{className:"addrdiv"},i.a.createElement("dl",{className:"dl-horizontal"},""===e.NextOfKin.FirstName?null:i.a.createElement("div",null,i.a.createElement("dt",null,"Name:"),i.a.createElement("dd",null,e.NextOfKin.FirstName)),""===e.NextOfKin.Relationship?null:i.a.createElement("div",null,i.a.createElement("dt",null,"Relationship:"),i.a.createElement("dd",null,e.NextOfKin.Relationship)),""===e.NextOfKin.ContactDetails.TelephoneNumber?null:i.a.createElement("div",null,i.a.createElement("dt",null,"Telephone:"),i.a.createElement("dd",null,e.NextOfKin.ContactDetails.TelephoneNumber))),i.a.createElement(te.a,null,i.a.createElement(te.a.Heading,null,i.a.createElement(te.a.Title,{componentClass:"h3"},"Residential Address")),i.a.createElement(te.a.Body,null,i.a.createElement("address",null,""===e.NextOfKin.ContactDetails.ResidentialAddress.Line1||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line1?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line1," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line1||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line1?null:i.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line2||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line2?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line2," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line2||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line2?null:i.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line3||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line3?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line3," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line3||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line3?null:i.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line4||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line4?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line4," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line4||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line4?null:i.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode?null:e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode))))},a.getPatientNextOfKinName=function(){},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.getResidentialAddress(this.props.details,"patient"),t=this.getResidentialAddress(this.props.details,"nok");return i.a.createElement("div",{className:"contactdetails"},void 0===this.props.details?i.a.createElement("div",null,"No Data to display"):i.a.createElement(ae.a,{accordion:!0,id:"accordion"},i.a.createElement(te.a,{eventKey:"1"},i.a.createElement(te.a.Heading,null,i.a.createElement(te.a.Title,{toggle:!0},"Residential Address")),i.a.createElement(te.a.Body,{collapsible:!0},e)),i.a.createElement(te.a,{eventKey:"2"},i.a.createElement(te.a.Heading,null,i.a.createElement(te.a.Title,{toggle:!0},"Next of Kin")),i.a.createElement(te.a.Body,{collapsible:!0},t))))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).defaultValue=function(){return i.a.createElement("div",{className:"default center"},"No data to display")},a.getValues=function(){return i.a.createElement("div",{className:"persondetails"},i.a.createElement("dl",{className:"dl-horizontal"},i.a.createElement("dt",null,"Title"),i.a.createElement("dd",null,a.props.details.Title),i.a.createElement("dt",null,"FirstName"),i.a.createElement("dd",null,a.props.details.FirstName),i.a.createElement("dt",null,"LastName"),i.a.createElement("dd",null,a.props.details.LastName),i.a.createElement("dt",null,"MiddleName"),i.a.createElement("dd",null,a.props.details.MiddleName),i.a.createElement("dt",null,"RSA ID Number"),i.a.createElement("dd",null,a.props.details.ID),i.a.createElement("dt",null,"BirthDate"),i.a.createElement("dd",null,a.props.details.BirthDate),i.a.createElement("dt",null,"BloodType"),i.a.createElement("dd",null,a.props.details.BloodType),i.a.createElement("dt",null,"Age"),i.a.createElement("dd",null,a.props.details.Age),i.a.createElement("dt",null,"DeathDate"),i.a.createElement("dd",null,a.props.details.DeathDate),i.a.createElement("dt",null,"Race"),i.a.createElement("dd",null,a.props.details.Race),i.a.createElement("dt",null,"Gender"),i.a.createElement("dd",null,a.props.details.Gender),i.a.createElement("dt",null,"Religion"),i.a.createElement("dd",null,a.props.details.Religion),i.a.createElement("dt",null,"Language"),i.a.createElement("dd",null,a.props.details.Language),i.a.createElement("dt",null,"MaritalStatus"),i.a.createElement("dd",null,a.props.details.MaritalStatus),i.a.createElement("dt",null,"Nationality"),i.a.createElement("dd",null,a.props.details.Nationality)))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=""===this.props.details?this.defaultValue():this.getValues();return i.a.createElement("div",null,e)}}]),t}(n.Component),le=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"healthdiv"},i.a.createElement(ae.a,{accordion:!0,id:"accordion"},i.a.createElement(te.a,{eventKey:"1"},i.a.createElement(te.a.Heading,null,i.a.createElement(te.a.Title,{toggle:!0},"Hospital Info")),i.a.createElement(te.a.Body,{collapsible:!0},i.a.createElement("div",null,i.a.createElement("dl",{className:"dl-horizontal"},i.a.createElement("dt",null,"Hospital :"),i.a.createElement("dd",null,this.props.details.hospital),i.a.createElement("dt",null,"Last Visit Date :"),i.a.createElement("dd",null,this.props.details.LastVisitDate),i.a.createElement("dt",null,"Last Visit Class :"),i.a.createElement("dd",null,this.props.details.LastVisitClassification))))),i.a.createElement(te.a,{eventKey:"2"},i.a.createElement(te.a.Heading,null,i.a.createElement(te.a.Title,{toggle:!0},"Allergies")),i.a.createElement(te.a.Body,{collapsible:!0},i.a.createElement("div",null,this.props.details.Allergies)))))}}]),t}(n.Component),se=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(X.a,{defaultActiveKey:1,id:"maintabview"},i.a.createElement(Y.a,{eventKey:1,title:"Personal Details"},i.a.createElement(ie,{details:this.props.selected})),i.a.createElement(Y.a,{eventKey:2,title:"Contact Details"},i.a.createElement(ne,{details:this.props.selected.ContactDetails})),i.a.createElement(Y.a,{eventKey:3,title:"Health Info"},i.a.createElement(le,{details:this.props.selected})))}}]),t}(n.Component),re=a(110),oe=a.n(re),ce=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).queryForHIS=function(){var t=Object(d.a)(c.a.mark(function t(a,n,i){var l,s,r,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l="",l="All"===n?"patient"===i?"http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIdentifierOnlyRS/patientidentifier?Identifier=".concat(a):"http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIDNumberOnlyRS/patientidentifier?ID=".concat(a):"patient"===i?"http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdentifierRS/patientidentifier?Identifier=".concat(a,"&Hospital=").concat(n):"http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdRS/patientidhospital?ID=".concat(a,"&Hospital=").concat(n),t.prev=2,t.next=5,fetch(l,{mode:"cors",method:"GET",headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Connection:"Keep-Alive"}});case 5:return s=t.sent,t.next=8,s.json();case 8:r=t.sent,200===s.status&&null!=r.PatientProfile?(o=r.PatientProfile.map(function(e){return{id:e.Identifier.$,ID:e.ID.$,Title:e.Title,FirstName:e.FirstName,LastName:e.LastName,MiddleName:e.MiddleName,Gender:e.Gender,BirthDate:e.BirthDate,BloodType:e.BloodType,Age:e.Age,Race:e.Race,MaritalStatus:e.MaritalStatus,Language:e.Language,Religion:e.Religion,Nationality:e.Nationality,Allergies:e.Allergies,hospital:e["@hospital"],LastVisitDate:e.LastVisitDate,LastVisitClassification:e.LastVisitClassification,ContactDetails:{ResidentialAddress:{Line1:e.ContactDetails.ResidentialAddress.Line1,Line2:e.ContactDetails.ResidentialAddress.Line2,line3:e.ContactDetails.ResidentialAddress.Line3,Line4:e.ContactDetails.ResidentialAddress.Line4,PostalCode:e.ContactDetails.ResidentialAddress.PostalCode},NextOfKin:e.NextOfKin},HealthInfo:{Allergies:e.Allergies}}}),e.setState({data:o,isLoading:!1})):e.setState({isLoading:!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.setState({isLoading:!1});case 15:case"end":return t.stop()}},t,null,[[2,12]])}));return function(e,a,n){return t.apply(this,arguments)}}(),e.showBasedOnToggle=function(){e.state.checked?e.setState({data:e.state.adata.concat(e.state.ndata)}):e.setState({data:e.state.adata})},e.queryForPharmacy=function(){var t=Object(d.a)(c.a.mark(function t(a){var n,i,l,s,r,o,d;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://10.32.60.74:7004/ViewPharmacyPatientDetailsProvABCSImpl/RXRestService/RX?ID=".concat(a),t.prev=1,t.next=4,fetch(n,{mode:"cors",method:"GET",headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Connection:"Keep-Alive"}});case 4:return i=t.sent,t.next=7,i.json();case 7:l=t.sent,s=[],r=[],200===i.status&&null!=l.PatientProfile?(l.PatientProfile.map(function(e){return void 0!==e["@Pharmacy"]?"success"===e["@ResponseStatus"]?s.push(e):r.push(e):null}),o=s.map(function(e){return{ID:e.Prescriptions[0].PrescriptionDetail[0].PersonIDNumber,Pharmacy:e["@Pharmacy"],Prescriptions:e.Prescriptions}}),d=r.map(function(e){return{Pharmacy:e["@Pharmacy"],response:e["@ResponseStatus"]}}),e.setState({data:o,adata:o,ndata:d,isLoading:!1})):e.setState({isLoading:!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e.setState({isLoading:!1});case 15:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e){return t.apply(this,arguments)}}(),e.checkData=function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"No data found"))},e.getColValues=function(){var t=e.props.datalist.system;return"HIS"===t?[{dataField:"id",text:"Patient ID"},{dataField:"ID",text:"ID"},{dataField:"hospital",text:"Hospital",sort:!0}]:"Pharmacy"===t?[{dataField:"Pharmacy",text:"Pharmacy",sort:!0}]:null},e.getDisplayTab=function(t){return"HIS"===t?i.a.createElement(se,{selected:e.state.isSelected}):"Pharmacy"===t?i.a.createElement(ee,{selected:e.state.isSelected}):void 0},e.getSwitch=function(t){return"Pharmacy"===t?i.a.createElement("label",null,i.a.createElement("span",null," ",i.a.createElement("strong",null,"Show All")," "),i.a.createElement(oe.a,{onChange:e.handleChange,checked:e.state.checked})):null},e.renderViewForHIS=function(t,a,n,l){return e.state.isLoading?i.a.createElement(Q.a,{type:"Bars",color:"#00BFFF",height:"200",width:"200",className:"center"}):i.a.createElement(W.a,null,i.a.createElement(J.a,{className:"show-grid"},i.a.createElement(q.a,{md:6,mdPush:6},i.a.createElement("div",null,i.a.createElement("span",null),n)),i.a.createElement(q.a,{md:6,mdPull:6},i.a.createElement(Z.a,{striped:!0,hover:!0,selectRow:l,keyField:"hospital",data:e.state.data,columns:t}))))},e.renderViewForPharmacy=function(t,a,n,l,s){return e.state.isLoading?i.a.createElement(Q.a,{type:"Bars",color:"#00BFFF",height:"200",width:"200",className:"center"}):i.a.createElement(W.a,null,i.a.createElement(J.a,{className:"show-grid"},i.a.createElement(q.a,{md:6,mdPush:6},i.a.createElement("div",null,i.a.createElement("span",null),i.a.createElement(ee,{selected:e.state.isSelected}))),i.a.createElement(q.a,{md:6,mdPull:6},n,i.a.createElement(Z.a,{striped:!0,hover:!0,selectRow:l,keyField:"Pharmacy",data:e.state.data,columns:t}))))},e.state={data:[],adata:[],ndata:[],isLoading:!1,isSelected:"",sortType:"hospital",checked:!1},e.handleChange=e.handleChange.bind(Object(T.a)(e)),e}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark(function e(){var t,a,n,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),t=this.props.datalist.searchtype,a=this.props.datalist.value,n=this.props.datalist.hospital,"HIS"===(i=this.props.datalist.system)?this.queryForHIS(a,n,t):"Pharmacy"===i&&this.queryForPharmacy(a);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({checked:e}),this.showBasedOnToggle()}},{key:"render",value:function(){var e=this,t=this.getColValues(),a="HIS"===this.props.datalist.system?"hospital":"Pharmacy",n=this.getDisplayTab(this.props.datalist.system),l=this.getSwitch(this.props.datalist.system),s={mode:"radio",clickToSelect:!0,style:{backgroundColor:"#c8e6c9"},onSelect:function(t,a,n,i){e.setState({isSelected:t})},hideSelectColumn:!1},r="HIS"===this.props.datalist.system?this.renderViewForHIS(t,a,n,s,a):this.renderViewForPharmacy(t,this.diplayTab,l,s);return i.a.createElement("div",{className:"maindiv"},r)}}]),t}(n.Component),de=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"patients"},i.a.createElement(R.a,{className:"imagesize center",src:V.a,responsive:!0}),i.a.createElement("h2",null,"Search Results"),i.a.createElement(ce,{datalist:this.props.location.state}))}}]),t}(n.Component),ue=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(X.a,{defaultActiveKey:1,id:"maintabview"},i.a.createElement(Y.a,{eventKey:1,title:"Phase 1"},i.a.createElement(z,null)),i.a.createElement(Y.a,{eventKey:2,title:"Phase 2",disabled:!0},"Phase 2"),i.a.createElement(Y.a,{eventKey:3,title:"Phase 3",disabled:!0},"Phase 3"))}}]),t}(n.Component),me=function(e){var t=e.component,a=e.props,n=Object(x.a)(e,["component","props"]);return i.a.createElement(C.a,Object.assign({},n,{render:function(e){return i.a.createElement(t,Object.assign({},e,a))}}))},pe=function(e){var t=e.childProps;return i.a.createElement(S.a,null,i.a.createElement(me,{path:"/",exact:!0,component:A,props:t}),i.a.createElement(me,{path:"/login",exact:!0,component:H,props:t}),i.a.createElement(me,{path:"/mainsearch",exact:!0,component:z,props:t}),i.a.createElement(me,{path:"/patientsearchresults",exact:!0,component:de,props:t}),i.a.createElement(me,{path:"/maintabview",exact:!0,component:ue,props:t}),i.a.createElement(C.a,{component:N}))},he=(a(241),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(e){a.userHasAuthenticated(!1),a.props.history.push("/login"),sessionStorage.clear()},a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{"true"===sessionStorage.getItem("loggedIn")?this.userHasAuthenticated(!0):this.userHasAuthenticated(!1)}catch(t){"No current user"!==t&&alert(t)}this.setState({isAuthenticating:!1});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&i.a.createElement("div",{className:"App container"},i.a.createElement(g.a,{fluid:!0,collapseOnSelect:!0},i.a.createElement(g.a.Header,null,i.a.createElement(g.a.Brand,null,i.a.createElement(v.a,{to:"/"},i.a.createElement("img",{src:F.a,alt:"",style:{width:100,marginTop:-7}}),"Gauteng Department of Health")),i.a.createElement(g.a.Toggle,null)),i.a.createElement(g.a.Collapse,null,i.a.createElement(b.a,{pullRight:!0},this.state.isAuthenticated?i.a.createElement(n.Fragment,null,i.a.createElement(O.LinkContainer,{to:"/maintabview"},i.a.createElement(y.a,null,"Search")),i.a.createElement(O.LinkContainer,{to:"/login"},i.a.createElement(y.a,{onClick:this.handleLogout},"Sign Out"))):i.a.createElement(n.Fragment,null,i.a.createElement(O.LinkContainer,{to:"/signup"},i.a.createElement(y.a,null,"Signup")),i.a.createElement(O.LinkContainer,{to:"/login"},i.a.createElement(y.a,null,"Login")))))),i.a.createElement(pe,{childProps:e}))}}]),t}(n.Component)),Ee=Object(f.a)(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(r.a,{basename:"/gdoh"},i.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a.p+"static/media/GPG-Logo.278d9f24.png"},58:function(e,t,a){e.exports=a.p+"static/media/find.8b689b8f.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.82511cd8.chunk.js.map