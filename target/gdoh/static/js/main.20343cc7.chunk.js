(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a(269)},133:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},198:function(e,t,a){},213:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(23),r=a.n(i),s=(a(133),a(89)),o=a(16),c=a.n(o),d=a(24),u=a(10),m=a(11),p=a(13),h=a(12),E=a(14),v=a(49),f=a(115),g=a(282),b=a(124),S=a(123),y=a(52),C=a(116),O=a(56),N=(a(139),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"lander"},l.a.createElement("h1",null,"GDoH"),l.a.createElement("p",null,"A simple health care information app")))}}]),t}(n.Component)),A=(a(140),function(){return l.a.createElement("div",{className:"NotFound"},l.a.createElement("h3",null,"Sorry, page not found!"))}),R=a(118),L=a(272),D=a(273),P=a(274),j=a(283),x=a(69),w=a(271),k=a(121),I=(a(141),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,i=e.className,r=void 0===i?"":i,s=e.disabled,o=void 0!==s&&s,c=Object(x.a)(e,["isLoading","text","loadingText","className","disabled"]);return l.a.createElement(w.a,Object.assign({className:"LoaderButton ".concat(r),disabled:o||t},c),t&&l.a.createElement(k.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),F=a(62),H=a.n(F),K=(a(174),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(d.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({isLoading:!0});try{sessionStorage.setItem("loggedIn",!0),a.props.userHasAuthenticated(!0),a.props.history.push("/maintabview")}catch(n){alert(n.message),a.setState({isLoading:!1})}case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:""},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return l.a.createElement("div",{className:"Login"},l.a.createElement(L.a,{className:"center",src:H.a,responsive:!0}),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(D.a,{controlId:"email",bsSize:"large"},l.a.createElement(P.a,null,"Email"),l.a.createElement(j.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(D.a,{controlId:"password",bsSize:"large"},l.a.createElement(P.a,null,"Password"),l.a.createElement(j.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),l.a.createElement(I,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in\u2026"})))}}]),t}(n.Component)),T=a(25),B=a(275),M=a(63),V=a.n(M),z=(a(175),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(){var e=Object(d.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{a.props.history.push({pathname:"/patientsearchresults",state:{hospital:a.state.hospital,searchtype:a.getSearchType(),system:a.state.system,value:a.state.value}})}catch(n){alert(n.message),a.setState({isLoading:!1})}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChangeList=function(e){a.setState({hospital:a.inputRef.value})},a.onChangeListSystems=function(e){a.setState({system:e.target.value})},a.onSearchChangeSetPatient=function(e){a.setState({patientIdchecked:!0})},a.onSearchChangeSetID=function(e){a.setState({patientIdchecked:!1})},a.RenderPharmaView=function(){return l.a.createElement("div",{className:"pharmacy"},l.a.createElement(D.a,{controlId:"Id",bsSize:"large"},l.a.createElement(P.a,null,"Id Number"),l.a.createElement(j.a,{value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a)),type:"number"})))},a.RenderHISView=function(){return l.a.createElement("div",{className:"HIS"},l.a.createElement(D.a,{controlId:"formControlsSelect2",bsSize:"large"},l.a.createElement(P.a,null,"Hospital"),l.a.createElement(j.a,{componentClass:"select",placeholder:"All",inputRef:function(e){a.inputRef=e},onChange:a.onChangeList},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Bheki Mlangeni"},"Bheki Mlangeni"),l.a.createElement("option",{value:"Carletonville"},"Carletonville"),l.a.createElement("option",{value:"Charlotte Maxeke"},"Charlotte Maxeke"),l.a.createElement("option",{value:"Chris Hani Baragwanath"},"Chris Hani Baragwanath"),l.a.createElement("option",{value:"Cullinan"},"Cullinan"),l.a.createElement("option",{value:"Dr George Mukhari"},"Dr George Mukhari"),l.a.createElement("option",{value:"Edenvale"},"Edenvale"),l.a.createElement("option",{value:"Heidelberg"},"Heidelberg"),l.a.createElement("option",{value:"Helen Joseph"},"Helen Joseph"),l.a.createElement("option",{value:"Jubilee"},"Jubilee"),l.a.createElement("option",{value:"Fare East Rand"},"Fare East Rand"),l.a.createElement("option",{value:"Germiston"},"Germiston"),l.a.createElement("option",{value:"Kalafong"},"Kalafong"),l.a.createElement("option",{value:"Kopanong"},"Kopanong"),l.a.createElement("option",{value:"Leratong"},"Leratong"),l.a.createElement("option",{value:"Mamelodi"},"Mamelodi"),l.a.createElement("option",{value:"Medunsa"},"Medunsa"),l.a.createElement("option",{value:"Odi"},"Odi"),l.a.createElement("option",{value:"Oral Dental"},"Oral Dental"),l.a.createElement("option",{value:"Pholosong"},"Pholosong"),l.a.createElement("option",{value:"Pretoria West"},"Pretoria West"),l.a.createElement("option",{value:"Rahima Moosa"},"Rahima Moosa"),l.a.createElement("option",{value:"Sizwe"},"Sizwe"),l.a.createElement("option",{value:"South Rand"},"South Rand"),l.a.createElement("option",{value:"Sterkfontein"},"Sterkfontein"),l.a.createElement("option",{value:"Steve Biko"},"Steve Biko"),l.a.createElement("option",{value:"Tambo"},"Tambo"),l.a.createElement("option",{value:"Tara"},"Tara"),l.a.createElement("option",{value:"Tembisa"},"Tembisa"),l.a.createElement("option",{value:"Thelle Mogoerane"},"Thelle Mogoerane"),l.a.createElement("option",{value:"Tshwane"},"Tshwane"),l.a.createElement("option",{value:"Tshwane Rehab"},"Tshwane Rehab"),l.a.createElement("option",{value:"Weskoppies"},"Weskoppies"),l.a.createElement("option",{value:"Wits Oral"},"Wits Oral"),l.a.createElement("option",{value:"Yusuf Dadoo"},"Yusuf Dadoo"))),l.a.createElement(D.a,null,l.a.createElement(B.a,{name:"radioGroup",inline:!0,defaultChecked:!0,onClick:a.onSearchChangeSetPatient.bind(Object(T.a)(a))},"Patient Identifier")," ",l.a.createElement(B.a,{name:"radioGroup",inline:!0,onClick:a.onSearchChangeSetID.bind(Object(T.a)(a))},"Identity Number")," "),a.state.patientIdchecked?l.a.createElement(D.a,{controlId:"patientId",bsSize:"large"},l.a.createElement(P.a,null,"Patient ID"),l.a.createElement(j.a,{autoFocus:!0,type:"text",value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a))})):l.a.createElement(D.a,{controlId:"Id",bsSize:"large"},l.a.createElement(P.a,null,"Id Number"),l.a.createElement(j.a,{value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a)),type:"number"})))},a.RenderSANBS_DemographicsView=function(){return l.a.createElement("div",{className:"HIS"},l.a.createElement(D.a,{controlId:"formControlsSelect2",bsSize:"large"},l.a.createElement(P.a,null,"Hospital Code"),l.a.createElement(j.a,{componentClass:"select",placeholder:"select",inputRef:function(e){a.inputRef=e},onChange:a.onChangeList},l.a.createElement("option",{value:""},"--select--"),l.a.createElement("option",{value:"0540292"},"Bheki Mlangeni (0540292)"),l.a.createElement("option",{value:"5603021"},"Carletonville (5603021)"),l.a.createElement("option",{value:"5601398"},"Charlotte Maxeke (5601398)"),l.a.createElement("option",{value:"5601177"},"Chris Hani Baragwanath (5601177)"),l.a.createElement("option",{value:"5603323"},"Cullinan (5603323)"),l.a.createElement("option",{value:"5602408"},"Dr George Mukhari (5602408)"),l.a.createElement("option",{value:"5601290"},"Edenvale (5601290)"),l.a.createElement("option",{value:"5601274"},"Heidelberg (5601274)"),l.a.createElement("option",{value:"5601649"},"Helen Joseph (5601649)"),l.a.createElement("option",{value:"5604095"},"Jubilee (5604095)"),l.a.createElement("option",{value:"5601339"},"Fare East Rand (5601339)"),l.a.createElement("option",{value:"5601363"},"Germiston (5601363)"),l.a.createElement("option",{value:"5602653"},"Kalafong (5602653)"),l.a.createElement("option",{value:"5601711"},"Kopanong (5601711)"),l.a.createElement("option",{value:"5603285"},"Leratong (5603285)"),l.a.createElement("option",{value:"5604079"},"Mamelodi (5604079)"),l.a.createElement("option",{value:"0157643"},"Medunsa (0157643)"),l.a.createElement("option",{value:"5605032"},"Odi (5605032)"),l.a.createElement("option",{value:"0157651"},"Oral Dental (0157651)"),l.a.createElement("option",{value:"5605199"},"Pholosong (5605199)"),l.a.createElement("option",{value:"5603145"},"Pretoria West (5603145)"),l.a.createElement("option",{value:"5601258"},"Rahima Moosa (5601258)"),l.a.createElement("option",{value:"5602610"},"Sizwe (5602610)"),l.a.createElement("option",{value:"5601622"},"South Rand (5601622)"),l.a.createElement("option",{value:"5602955"},"Sterkfontein (5602955)"),l.a.createElement("option",{value:"5601738"},"Steve Biko (5601738)"),l.a.createElement("option",{value:"5601215"},"Tambo (5601215)"),l.a.createElement("option",{value:"5601665"},"Tara (5601665)"),l.a.createElement("option",{value:"5602793"},"Tembisa (5602793)"),l.a.createElement("option",{value:"0208957"},"Tshwane (0208957)"),l.a.createElement("option",{value:"0454842"},"Tshwane Rehab (0454842)"),l.a.createElement("option",{value:"5602882"},"Weskoppies (5602882)"),l.a.createElement("option",{value:"0157678"},"Wits Oral (0157678)"),l.a.createElement("option",{value:"5601460"},"Yusuf Dadoo (5601460)"))),l.a.createElement(D.a,{controlId:"patientId",bsSize:"large"},l.a.createElement(P.a,null,"Patient ID"),l.a.createElement(j.a,{autoFocus:!0,type:"text",value:a.state.value,onChange:a.handleChange.bind(Object(T.a)(a))})))},a.renderNotAvaiable=function(){return l.a.createElement("div",{className:"notAvailable"},l.a.createElement("h2",null,"View currently not available"))},a.renderInitView=function(){return"HIS"===a.state.system?a.RenderHISView():"Pharmacy"===a.state.system?a.RenderPharmaView():"SANBS"===a.state.system?a.RenderSANBS_DemographicsView():void a.renderNotAvaiable()},a.state={isLoading:!1,hospital:"All",system:"HIS",patientIdchecked:!0,value:void 0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"validateForm",value:function(){return!0}},{key:"getSearchType",value:function(){return this.state.patientIdchecked?"patient":"Id"}},{key:"render",value:function(){var e=this,t=this.renderInitView();return l.a.createElement("div",{className:"MainSearch"},l.a.createElement(L.a,{className:"center",src:V.a,responsive:!0}),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(D.a,{controlId:"formControlsSelect1",bsSize:"large"},l.a.createElement(P.a,null,"Systems"),l.a.createElement(j.a,{componentClass:"select",placeholder:"HIS",sysRef:function(t){e.sysRef=t},onChange:this.onChangeListSystems},l.a.createElement("option",{value:"HIS"},"HIS"),l.a.createElement("option",{value:"Pharmacy"},"Pharmacy"),l.a.createElement("option",{value:"HPRS"},"HPRS"),l.a.createElement("option",{value:"SANBS"},"SANBS"),l.a.createElement("option",{value:"NHLS"},"NHLS"),l.a.createElement("option",{value:"PACS"},"PACS"),l.a.createElement("option",{value:"Mental Health"},"Mental Health"))),t,l.a.createElement(I,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"find",loadingText:"searching\u2026"})))}}]),t}(n.Component)),G=Object(f.a)(z),W=(a(176),a(127)),J=a(278),q=a(279),Y=a(84),$=a.n(Y),Q=(a(198),a(277)),X=a(284),_=a(276),U=a(280),Z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).defaultValue=function(){return l.a.createElement("div",{className:"default center"},"No data to display")},a.getValues=function(){return l.a.createElement("div",{className:"persondetails"},l.a.createElement("dl",{className:"dl-horizontal"},l.a.createElement("dt",null,"Title"),l.a.createElement("dd",null,a.props.details.Title),l.a.createElement("dt",null,"FirstName"),l.a.createElement("dd",null,a.props.details.FirstName),l.a.createElement("dt",null,"LastName"),l.a.createElement("dd",null,a.props.details.LastName),l.a.createElement("dt",null,"MiddleName"),l.a.createElement("dd",null,a.props.details.MiddleName),l.a.createElement("dt",null,"RSA ID Number"),l.a.createElement("dd",null,a.props.details.ID),l.a.createElement("dt",null,"BirthDate"),l.a.createElement("dd",null,a.props.details.BirthDate),l.a.createElement("dt",null,"BloodType"),l.a.createElement("dd",null,a.props.details.BloodType),l.a.createElement("dt",null,"Age"),l.a.createElement("dd",null,a.props.details.Age),l.a.createElement("dt",null,"DeathDate"),l.a.createElement("dd",null,a.props.details.DeathDate),l.a.createElement("dt",null,"Race"),l.a.createElement("dd",null,a.props.details.Race),l.a.createElement("dt",null,"Gender"),l.a.createElement("dd",null,a.props.details.Gender),l.a.createElement("dt",null,"Religion"),l.a.createElement("dd",null,a.props.details.Religion),l.a.createElement("dt",null,"Language"),l.a.createElement("dd",null,a.props.details.Language),l.a.createElement("dt",null,"MaritalStatus"),l.a.createElement("dd",null,a.props.details.MaritalStatus),l.a.createElement("dt",null,"Nationality"),l.a.createElement("dd",null,a.props.details.Nationality)))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=""===this.props.details?this.defaultValue():this.getValues();return l.a.createElement("div",null,e)}}]),t}(n.Component),ee=a(281),te=a(285),ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).getResidentialAddress=function(e,t){return void 0===e?null:"patient"===t?l.a.createElement("div",{className:"addrdiv"},l.a.createElement("address",null,""===e.ResidentialAddress.Line1||void 0===e.ResidentialAddress.Line1?null:e.ResidentialAddress.Line1," ",""===e.ResidentialAddress.Line1||void 0===e.ResidentialAddress.Line1?null:l.a.createElement("br",null),""===e.ResidentialAddress.Line2||void 0===e.ResidentialAddress.Line2?null:e.ResidentialAddress.Line2," ",""===e.ResidentialAddress.Line2||void 0===e.ResidentialAddress.Line2?null:l.a.createElement("br",null),""===e.ResidentialAddress.line3||void 0===e.ResidentialAddress.Line3?null:e.ResidentialAddress.line3," ",""===e.ResidentialAddress.Line3||void 0===e.ResidentialAddress.Line3?null:l.a.createElement("br",null),""===e.ResidentialAddress.Line4||void 0===e.ResidentialAddress.Line4?null:e.ResidentialAddress.Line4," ",""===e.ResidentialAddress.Line4||void 0===e.ResidentialAddress.Line4?null:l.a.createElement("br",null),""===e.ResidentialAddress.PostalCode||void 0===e.ResidentialAddress.PostalCode?null:e.ResidentialAddress.PostalCode)):l.a.createElement("div",{className:"addrdiv"},l.a.createElement("dl",{className:"dl-horizontal"},""===e.NextOfKin.FirstName?null:l.a.createElement("div",null,l.a.createElement("dt",null,"Name:"),l.a.createElement("dd",null,e.NextOfKin.FirstName)),""===e.NextOfKin.Relationship?null:l.a.createElement("div",null,l.a.createElement("dt",null,"Relationship:"),l.a.createElement("dd",null,e.NextOfKin.Relationship)),""===e.NextOfKin.ContactDetails.TelephoneNumber?null:l.a.createElement("div",null,l.a.createElement("dt",null,"Telephone:"),l.a.createElement("dd",null,e.NextOfKin.ContactDetails.TelephoneNumber))),l.a.createElement(ee.a,null,l.a.createElement(ee.a.Heading,null,l.a.createElement(ee.a.Title,{componentClass:"h3"},"Residential Address")),l.a.createElement(ee.a.Body,null,l.a.createElement("address",null,""===e.NextOfKin.ContactDetails.ResidentialAddress.Line1||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line1?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line1," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line1||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line1?null:l.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line2||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line2?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line2," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line2||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line2?null:l.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line3||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line3?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line3," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line3||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line3?null:l.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.Line4||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line4?null:e.NextOfKin.ContactDetails.ResidentialAddress.Line4," ",""===e.NextOfKin.ContactDetails.ResidentialAddress.Line4||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.Line4?null:l.a.createElement("br",null),""===e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode||void 0===e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode?null:e.NextOfKin.ContactDetails.ResidentialAddress.PostalCode))))},a.getPatientNextOfKinName=function(){},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){console.log("testing the structure",this.props.details);var e=this.getResidentialAddress(this.props.details,"patient"),t=this.getResidentialAddress(this.props.details,"nok");return l.a.createElement("div",{className:"contactdetails"},void 0===this.props.details?l.a.createElement("div",null,"No Data to display"):l.a.createElement(te.a,{accordion:!0,id:"accordion"},l.a.createElement(ee.a,{eventKey:"1"},l.a.createElement(ee.a.Heading,null,l.a.createElement(ee.a.Title,{toggle:!0},"Residential Address")),l.a.createElement(ee.a.Body,{collapsible:!0},e)),l.a.createElement(ee.a,{eventKey:"2"},l.a.createElement(ee.a.Heading,null,l.a.createElement(ee.a.Title,{toggle:!0},"Next of Kin")),l.a.createElement(ee.a.Body,{collapsible:!0},t))))}}]),t}(n.Component),ne=(a(213),a(35)),le=a.n(ne),ie=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(d.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({data:a.props.details});case 1:case"end":return e.stop()}},e)})),a.handleShow=a.handleShow.bind(Object(T.a)(a)),a.handleClose=a.handleClose.bind(Object(T.a)(a)),a.state={data:[],show:!1,display:void 0,selected:""},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this,t={showExpandColumn:!0,renderer:function(t){return l.a.createElement("div",{className:"center"},l.a.createElement(_.a,null,l.a.createElement(w.a,{onClick:function(){e.setState({selected:t,show:!0,display:"personal"})},bsStyle:"info"},"Personal Details"),l.a.createElement(w.a,{onClick:function(){e.setState({selected:t,show:!0,display:"address"})},bsStyle:"info"},"Patient Address")))}},a="personal"===this.state.display?l.a.createElement(Z,{details:this.state.selected}):l.a.createElement(ae,{details:this.state.selected.ContactDetails});return l.a.createElement("div",{className:"phamDiv center"},l.a.createElement(U.a,{className:"center",show:this.state.show,onHide:this.handleClose},l.a.createElement(U.a.Header,{closeButton:!0},l.a.createElement(U.a.Title,null,"Details")),l.a.createElement(U.a.Body,null,a),l.a.createElement(U.a.Footer,null,l.a.createElement(w.a,{onClick:this.handleClose},"Close"))),l.a.createElement(le.a,{striped:!0,hover:!0,keyField:"hospital",data:this.state.data,columns:[{dataField:"FirstName",text:"FirstName"},{dataField:"LastName",text:"LastName",sort:!0},{dataField:"ID",text:"RSA ID Number"},{dataField:"hospital",text:"Hospital",sort:!0}],selectRow:{mode:"radio",clickToSelect:!0,clickToExpand:!0},expandRow:t}))}}]),t}(n.Component),re=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=Object(d.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==a.props.details.Prescriptions&&([],t=a.props.details.Prescriptions[0].PrescriptionDetail,a.setState({data:t}));case 1:case"end":return e.stop()}},e)})),a.state={data:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.details.Prescriptions){var t;t=e.details.Prescriptions[0].PrescriptionDetail,this.setState({data:t})}else this.setState({data:[]})}},{key:"render",value:function(){return l.a.createElement(le.a,{striped:!0,hover:!0,keyField:"PrescriptionNumber",data:this.state.data,columns:[{dataField:"DateOfBirth",text:"DateOfBirth"},{dataField:"Age",text:"Age"},{dataField:"Gender",text:"Gender",sort:!0},{dataField:"PatientFullNames",text:"PatientFullNames"},{dataField:"Language",text:"Language"},{dataField:"PersonRace",text:"PersonRace"},{dataField:"PrescriptionNumber",text:"PrescriptionNumber"},{dataField:"PrescriberName",text:"PrescriberName"},{dataField:"DispenserName",text:"DispenserName"},{dataField:"Medication",text:"Medication"},{dataField:"PackSizeValue",text:"PackSizeValue"},{dataField:"MedicationCost",text:"MedicationCost"},{dataField:"PrescriptionDate",text:"PrescriptionDate"},{dataField:"ClinicName",text:"ClinicName"},{dataField:"RepeatDate",text:"RepeatDate"},{dataField:"Repeats",text:"Repeats"},{dataField:"DemanderName",text:"DemanderName"},{dataField:"FrmAdministration",text:"FrmAdministration"},{dataField:"Hospital",text:"Hospital"}]})}}]),t}(n.Component),se=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.props),l.a.createElement(Q.a,{defaultActiveKey:1,id:"maintabview"},l.a.createElement(X.a,{eventKey:1,title:"Prescriptions"},l.a.createElement(re,{details:this.props.selected})),l.a.createElement(X.a,{eventKey:2,title:"Person Details"},l.a.createElement(ie,{details:this.props.demographics})))}}]),t}(n.Component),oe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"healthdiv"},l.a.createElement(te.a,{accordion:!0,id:"accordion"},l.a.createElement(ee.a,{eventKey:"1"},l.a.createElement(ee.a.Heading,null,l.a.createElement(ee.a.Title,{toggle:!0},"Hospital Info")),l.a.createElement(ee.a.Body,{collapsible:!0},l.a.createElement("div",null,l.a.createElement("dl",{className:"dl-horizontal"},l.a.createElement("dt",null,"Hospital :"),l.a.createElement("dd",null,this.props.details.hospital),l.a.createElement("dt",null,"Last Visit Date :"),l.a.createElement("dd",null,this.props.details.LastVisitDate),l.a.createElement("dt",null,"Last Visit Class :"),l.a.createElement("dd",null,this.props.details.LastVisitClassification))))),l.a.createElement(ee.a,{eventKey:"2"},l.a.createElement(ee.a.Heading,null,l.a.createElement(ee.a.Title,{toggle:!0},"Allergies")),l.a.createElement(ee.a.Body,{collapsible:!0},l.a.createElement("div",null,this.props.details.Allergies)))))}}]),t}(n.Component),ce=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(Q.a,{defaultActiveKey:1,id:"maintabview"},l.a.createElement(X.a,{eventKey:1,title:"Personal Details"},l.a.createElement(Z,{details:this.props.selected})),l.a.createElement(X.a,{eventKey:2,title:"Contact Details"},l.a.createElement(ae,{details:this.props.selected.ContactDetails})),l.a.createElement(X.a,{eventKey:3,title:"Health Info"},l.a.createElement(oe,{details:this.props.selected})))}}]),t}(n.Component),de=a(126),ue=a.n(de),me=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).queryForHIS=function(){var t=Object(d.a)(c.a.mark(function t(a,n,l){var i,r,s,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i="",i="SANBS"===e.props.datalist.system?"http://10.32.60.74:7004/PatientProfileSANBSRS/hospitalcodeIdentifier?Identifier=".concat(a,"&HospitalCode=").concat(n):"All"===n?"patient"===l?"http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIdentifierOnlyRS/patientidentifier?Identifier=".concat(a):"http://10.32.60.74:7004/gdoh-patient-profile-service/PSQueryByIDNumberOnlyRS/patientidentifier?ID=".concat(a):"patient"===l?"http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdentifierRS/patientidentifier?Identifier=".concat(a,"&Hospital=").concat(n):"http://10.32.60.74:7004/gdoh-patient-profile-service/PatientIdRS/patientidhospital?ID=".concat(a,"&Hospital=").concat(n),t.prev=2,t.next=5,fetch(i,{mode:"cors",method:"GET",headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Connection:"Keep-Alive"}});case 5:return r=t.sent,t.next=8,r.json();case 8:s=t.sent,200===r.status&&null!=s.PatientProfile?(o=s.PatientProfile.map(function(e){return{id:e.Identifier.$,ID:e.ID.$,Title:e.Title,FirstName:e.FirstName,LastName:e.LastName,MiddleName:e.MiddleName,Gender:e.Gender,BirthDate:e.BirthDate,BloodType:e.BloodType,Age:e.Age,Race:e.Race,MaritalStatus:e.MaritalStatus,Language:e.Language,Religion:e.Religion,Nationality:e.Nationality,Allergies:e.Allergies,hospital:e["@hospital"],LastVisitDate:e.LastVisitDate,LastVisitClassification:e.LastVisitClassification,ContactDetails:{ResidentialAddress:{Line1:e.ContactDetails.ResidentialAddress.Line1,Line2:e.ContactDetails.ResidentialAddress.Line2,line3:e.ContactDetails.ResidentialAddress.Line3,Line4:e.ContactDetails.ResidentialAddress.Line4,PostalCode:e.ContactDetails.ResidentialAddress.PostalCode},NextOfKin:e.NextOfKin},HealthInfo:{Allergies:e.Allergies}}}),"Pharmacy"===e.props.datalist.system?e.setState({demodata:o,isLoading:!1}):e.setState({data:o,isLoading:!1})):e.setState({isLoading:!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.setState({isLoading:!1});case 15:case"end":return t.stop()}},t,null,[[2,12]])}));return function(e,a,n){return t.apply(this,arguments)}}(),e.showBasedOnToggle=function(){e.state.checked?e.setState({data:e.state.adata.concat(e.state.ndata)}):e.setState({data:e.state.adata})},e.queryForPharmacy=function(){var t=Object(d.a)(c.a.mark(function t(a){var n,l,i,r,s,o,d;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),n="http://10.32.60.74:7004/ViewPharmacyPatientDetailsProvABCSImpl/RXRestService/RX?ID=".concat(a),t.prev=2,t.next=5,fetch(n,{mode:"cors",method:"GET",headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Connection:"Keep-Alive"}});case 5:return l=t.sent,t.next=8,l.json();case 8:i=t.sent,r=[],s=[],200===l.status&&null!=i.PatientProfile?(i.PatientProfile.map(function(e){return void 0!==e["@Pharmacy"]?"success"===e["@ResponseStatus"]?r.push(e):s.push(e):null}),o=r.map(function(e){return{ID:e.Prescriptions[0].PrescriptionDetail[0].PersonIDNumber,Pharmacy:e["@Pharmacy"],Prescriptions:e.Prescriptions}}),d=s.map(function(e){return{Pharmacy:e["@Pharmacy"],response:e["@ResponseStatus"]}}),e.setState({data:o,adata:o,ndata:d,isLoading:!1})):e.setState({isLoading:!1}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),e.setState({isLoading:!1});case 16:case"end":return t.stop()}},t,null,[[2,13]])}));return function(e){return t.apply(this,arguments)}}(),e.checkData=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"No data found"))},e.getColValues=function(){var t=e.props.datalist.system;return"HIS"===t||"SANBS"===t?[{dataField:"id",text:"Patient ID"},{dataField:"ID",text:"ID"},{dataField:"hospital",text:"Hospital",sort:!0}]:"Pharmacy"===t?[{dataField:"Pharmacy",text:"Pharmacy",sort:!0}]:null},e.getColValues2=function(){return[{dataField:"id",text:"Patient ID"},{dataField:"ID",text:"ID"},{dataField:"hospital",text:"Hospital",sort:!0}]},e.getSwitch=function(t){return"Pharmacy"===t?l.a.createElement("label",null,l.a.createElement("span",null," ",l.a.createElement("strong",null,"Show All")," "),l.a.createElement(ue.a,{onChange:e.handleChange,checked:e.state.checked})):null},e.renderViewForHIS=function(t,a){return e.state.isLoading?l.a.createElement($.a,{type:"Bars",color:"#00BFFF",height:"200",width:"200",className:"center"}):l.a.createElement(W.a,null,l.a.createElement(J.a,{className:"show-grid"},l.a.createElement(q.a,{md:6,mdPush:6},l.a.createElement("div",null,l.a.createElement("span",null),l.a.createElement(ce,{selected:e.state.isSelected}))),l.a.createElement(q.a,{md:6,mdPull:6},l.a.createElement(le.a,{striped:!0,hover:!0,selectRow:a,keyField:"hospital",data:e.state.data,columns:t}))))},e.onclickHospital=function(t){e.setState({isHospTab:!0})},e.renderViewForPharmacy=function(t,a,n){return e.state.isLoading?l.a.createElement($.a,{type:"Bars",color:"#00BFFF",height:"200",width:"200",className:"center"}):l.a.createElement(W.a,null,l.a.createElement(J.a,{className:"show-grid"},l.a.createElement(q.a,{md:6,mdPush:6},l.a.createElement("div",null,l.a.createElement("span",null),l.a.createElement(se,{selected:e.state.isSelected,demographics:e.state.demodata}))),l.a.createElement(q.a,{md:6,mdPull:6},a,l.a.createElement(le.a,{striped:!0,hover:!0,selectRow:n,keyField:"Pharmacy",data:e.state.data,columns:t}))))},e.state={data:[],adata:[],ndata:[],demodata:[],isLoading:!1,isSelected:"",isHospTab:!1,sortType:"hospital",checked:!1},e.handleChange=e.handleChange.bind(Object(T.a)(e)),e}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark(function e(){var t,a,n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),t=this.props.datalist.searchtype,a=this.props.datalist.value,n=this.props.datalist.hospital,"HIS"===(l=this.props.datalist.system)||"SANBS"===l?this.queryForHIS(a,n,t):"Pharmacy"===l&&(this.queryForPharmacy(a),this.queryForHIS(a,n,"ID"));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({checked:e}),this.showBasedOnToggle()}},{key:"render",value:function(){var e=this,t=this.getColValues(),a=this.getSwitch(this.props.datalist.system),n={mode:"radio",clickToSelect:!0,style:{backgroundColor:"#c8e6c9"},onSelect:function(t,a,n,l){e.setState({isSelected:t})},hideSelectColumn:!1},i="HIS"===this.props.datalist.system||"SANBS"===this.props.datalist.system?this.renderViewForHIS(t,n):this.renderViewForPharmacy(t,a,n);return l.a.createElement("div",{className:"maindiv"},i)}}]),t}(n.Component),pe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"patients"},l.a.createElement(L.a,{className:"imagesize center",src:V.a,responsive:!0}),l.a.createElement("h2",null,"Search Results"),l.a.createElement(me,{datalist:this.props.location.state}))}}]),t}(n.Component),he=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(Q.a,{defaultActiveKey:1,id:"maintabview"},l.a.createElement(X.a,{eventKey:1,title:"Phase 1"},l.a.createElement(G,null)),l.a.createElement(X.a,{eventKey:2,title:"Phase 2",disabled:!0},"Phase 2"),l.a.createElement(X.a,{eventKey:3,title:"Phase 3",disabled:!0},"Phase 3"))}}]),t}(n.Component),Ee=function(e){var t=e.component,a=e.props,n=Object(x.a)(e,["component","props"]);return l.a.createElement(O.a,Object.assign({},n,{render:function(e){return l.a.createElement(t,Object.assign({},e,a))}}))},ve=function(e){var t=e.childProps;return l.a.createElement(C.a,null,l.a.createElement(Ee,{path:"/",exact:!0,component:N,props:t}),l.a.createElement(Ee,{path:"/login",exact:!0,component:K,props:t}),l.a.createElement(Ee,{path:"/mainsearch",exact:!0,component:G,props:t}),l.a.createElement(Ee,{path:"/patientsearchresults",exact:!0,component:pe,props:t}),l.a.createElement(Ee,{path:"/maintabview",exact:!0,component:he,props:t}),l.a.createElement(O.a,{component:A}))},fe=(a(268),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(e){a.userHasAuthenticated(!1),a.props.history.push("/login"),sessionStorage.clear()},a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{"true"===sessionStorage.getItem("loggedIn")?this.userHasAuthenticated(!0):this.userHasAuthenticated(!1)}catch(t){"No current user"!==t&&alert(t)}this.setState({isAuthenticating:!1});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&l.a.createElement("div",{className:"App container"},l.a.createElement(g.a,{fluid:!0,collapseOnSelect:!0},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Brand,null,l.a.createElement(v.a,{to:"/"},l.a.createElement("img",{src:H.a,alt:"",style:{width:100,marginTop:-7}}),"Gauteng Department of Health")),l.a.createElement(g.a.Toggle,null)),l.a.createElement(g.a.Collapse,null,l.a.createElement(b.a,{pullRight:!0},this.state.isAuthenticated?l.a.createElement(n.Fragment,null,l.a.createElement(y.LinkContainer,{to:"/maintabview"},l.a.createElement(S.a,null,"Search")),l.a.createElement(y.LinkContainer,{to:"/login"},l.a.createElement(S.a,{onClick:this.handleLogout},"Sign Out"))):l.a.createElement(n.Fragment,null,l.a.createElement(y.LinkContainer,{to:"/signup"},l.a.createElement(S.a,null,"Signup")),l.a.createElement(y.LinkContainer,{to:"/login"},l.a.createElement(S.a,null,"Login")))))),l.a.createElement(ve,{childProps:e}))}}]),t}(n.Component)),ge=Object(f.a)(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,{basename:"/gdoh"},l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a.p+"static/media/GPG-Logo.278d9f24.png"},63:function(e,t,a){e.exports=a.p+"static/media/find.8b689b8f.png"}},[[128,1,2]]]);
//# sourceMappingURL=main.20343cc7.chunk.js.map