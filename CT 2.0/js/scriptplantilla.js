function myOnload(){ 

  validacionExam()
  validdosarray()
  mmo()
  arrayUS()
  arrayMMO()
  arrayXRAY()
  arrayPET()
  aop()
  arraySP()
  validdosarrayNM()
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
  edge: 'left',
  draggable: true,
  inDuration: 250,
  outDuration: 200,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null,
  preventScrolling: true});
});

$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "CT CHEST HIGH RES": null, "CT CHEST": null, "CT ABDOMEN": null, "CT KNEE RT": null, "CT KNEE LF": null, "CT KNEE BL": null, "CT SHOULDER RT": null, 
      "CT SHOULDER LF": null, "CT SHOULDER BL": null, "CT ELBOW RT": null, "CT ELBOW LF": null, "CT ELBOW BL": null, "CT HAND RT": null, "CT HAND LF": null, 
      "CT HAND BL": null, "CT WRIST RT": null, "CT WRIST LF": null, "CT WRIST BL": null, "CT FOOT RT": null, "CT FOOT LF": null, "CT FOOT BL": null, "CT ABD/PELVIS": null, 
      "CT ABD/ADRENALS": null, "CT ABD/PELVIS RENAL PROTOCOL": null, "CT PELVIS": null, "CT BRAIN": null, "CT LUMBAR SPINE": null, "CT CERVICAL SPINE": null, 
      "CT THORACIC SPINE": null, "CT NECK SOFT TISSUE": null, "CT COCCYS AND SACRUM": null, "CT TMJ": null, "CT ORBITS": null, "CT IAC": null, "CT PITUITARY GLAND": null, 
      "CT UPPER EXT RT": null, "CT UPPER EXT LF": null, "CT LOWER EXT RT": null, "CT LOWER EXT LF": null, "CT PARANASAL SINUS": null, "CT MAXILLOFACIAL": null, "CT MASTOID": null, 
      "CT ENTEROGRAPHY": null, "CT TEMPORAL BONES": null, "CT UROGRAM": null, "CTA ABDOMENT": null, "CTA HEAD": null, "CTA CHEST": null, "CTA PELVIS": null, "CTA UPPER EXT": null, 
      "CTA LOWER EXT": null, "CTA RUNOFF (CTA ABD/PEL/LOWER EXT)": null, "CTA NECK": null, "CT DENTA SCAN": null, "CT CALCIUM SCORING": null, "CT CHEST LOW DOSE": null
    }
  });
});

$(document).ready(function(){
  $('input.autocomplete-xray').autocomplete({
    data: {

        'XRAY ABDOMINAL SERIES': null, 'XRAY ANKLE': null, 'XRAY ANKLE BILATERAL': null, 'XRAY BONE SURVEY': null, 'XRAY BONEAGE': null, 'XRAY CALCANEUS': null, 'XRAY CHEST': null, 'XRAY CLAVICLE': null, 
        'XRAY COCCYX': null, 'XRAY C-SPINE': null, 'XRAY C-SPINE 4-5 VIEWS': null, 'XRAY C-SPINE COMPLETE': null,'XRAY ELBOW': null, 'XRAY FACIAL BONES': null, 'XRAY FEMUR': null, 'XRAY FINGER': null, 'XRAY FOOT': null, 'XRAY FOOT BILATERAL': null, 
        'XRAY FOREARM': null, 'XRAY HAND': null, 'XRAY HAND BILATERAL': null, 'XRAY HIP': null, 'XRAY HIP BILATERAL': null, 'XRAY HUMERUS': null, 'XRAY IVP': null, 'XRAY KNEE': null, 'XRAY KNEE BILATERAL': null, 'XRAY KUB': null
        , 'XRAY L-SPINE': null, 'XRAY L-SPINE COMPLETE': null, 'XRAY MANDIBULA COMPLETE': null, 'XRAY NASAL BONES': null, 'XRAY NECK SOFT TISSUE': null, 'XRAY OF SMALL BOWEL': null, 'XRAY ORBIT COMPLETE': null
        , 'XRAY PARANASAL SINUSES': null, 'XRAY PELVIS': null, 'XRAY RIB BILATERAL': null, 'XRAY RIBS UNILATERAL': null, 'XRAY SACROILIAC': null, 'XRAY SACRUM': null, 'XRAY SCOLIOSIS SERIES': null
        , 'XRAY SHOULDER 1 VIEW': null, 'XRAY SHOULDER COMPLETE': null, 'XRAY SHOULDER ARTHROGRAPHY': null, 'XRAY SHOULDER BILATERAL': null, 'XRAY SKULL COMPLETE': null, 'XRAY STERNUM': null, 'XRAY TIBIA/FIBULA': null
        , 'XRAY TMJ': null, 'XRAY T-SPINE': null, 'XRAY T-SPINE 2 VIEWS': null, 'XRAY UPPER GI W/KUB': null, 'XRAY WRIST 2 VIEWA': null, 'XRAY WRIST COMPLETE (MIN 3 VIEWS)': null, '24 HR HOLTER': null, 'EKG': null, 'ECHO W/ COLOR FLOW': null, 'BONE DENSITY': null
    }
  });
});


$(document).ready(function(){
  $('input.autocomplete-nm').autocomplete({
    data: {

        'NM BONE & OR JOINT IMAG.SINGLE AREA': null, 'NM BONE SCAN': null, 'NM BONE SCAN MULTIP AREAS': null, 'NM BONE SCAN SCAN TRIPLE-PHASE': null, 'NM GALLIUM SCAN': null, 'NM HEPATOBILIARY SCAN (CCK)': null,
        'NM I-131 IODINE THERAPY': null,'NM NM LIVER & SPLEEN IMAGE/FLOW': null,'NM MUGA SCAN': null,'NM PARATHYROID SCAN': null,'NM PIPIDA W/EJECT PRACT': null,'NM PIPIDA/ HIDA SCAN': null,'NM RENAL SCAN': null,
        'NM RENAL SCAN W/CAPTOPRIL': null,'NM STRESSTEST DOBUTAMINE OR PERSANTINE': null, 'NM THALLIUM-TREADMILL': null,'NM THYROGEN DOSE': null,'NM STRESS TEST': null,
        'NM THYROGEN TOTAL BODY SCAN': null,'NM THYROID IMAGIN': null,'NM THYROID UPTAKE & SCAN (DAY 1)': null,'NM THYROID UPTAKE & SCAN (DAY 2)': null, 'PET CT BRAIN': null,'PET CT SKULL BASE TO MID THIGH': null,'PET CT WHOLE BODY': null
      
      }
  });
});


$(document).ready(function(){
  $('input.autocomplete-slp').autocomplete({
    data: {

        'SLEEP STUDY (BASELINE)': null, 'CPAP': null, 'BIPAP': null
      
      }
  });
});




$(document).ready(function(){
  $('input.autocomplete-ncv').autocomplete({
    data: {

        'EMG': null, 'NCV LOWER EXTREMITIES BILATERAL (9-10 NERVES)': null, 'NCV UPPER EXTREMITIES BILATERAL (11-12 NERVES)': null, 'NCV UPPER & LOWER EXTREMITIES (+ 13 NERVES)': null
      
      }
  });
});




$(document).ready(function(){
  $('input.autocomplete-mri').autocomplete({
    data: {

        'MRI ENTEROGRAPHY': null, 'MRI UROGRAM': null, 'MRI ACHILLES TENDON': null, 'MRI THYROID': null, 'MRI PARATHYROID': null, 'MRI KIDNEY': null, 'MRI ADRENAL GLAMD': null, 'MRA ABDOMEN (RENAL/ABD/AORTA)': null, 
        'MRA CHEST': null, 'MRA HEAD': null, 'MRA IAC': null, 'MRA LOWER EXT (RUN OFF)': null, 'MRA LOWER EXT': null, 'MRA NECK': null, 'MRA PELVIS': null, 'MRCP': null, 'MRI ABDOMEN': null, 'MRI ANKLE LT': null, 
        'MRI ANKLE RT': null, 'MRI ANKLE BL': null, 'MRI BRANCHIAL PLEXUS': null, 'MRI BRAIN': null, 'MRI BREAST BIL': null, 'MRI BREAST UNILT': null, 'MRI CERVICAL SPINE': null, 'MRI CHEST': null, 
        'MRI COCCYX': null, 'MRI COCCYX & SACRUM': null, 'MRI ELBOW LT': null, 'MRI ELBOW RT': null, 'MRI ELBOW BIL': null, 'MRI FACE': null, 'MRI FINGER': null, 'MRI FOOT LT': null, 'MRI FOOT RT': null, 
        'MRI FOOT BIL': null, 'MRI HAND LT': null, 'MRI HAND RT': null, 'MRI HAND BIL': null, 'MRI HIP LT': null, 'MRI HIP RT': null, 'MRI HIP BIL': null, 'MRI IAC': null, 'MRI KNEE LT': null, 'MRI KNEE RT': null, 
        'MRI KNEE BIL': null, 'MRI LOWER EXT LT (JOINT)': null, 'MRI LOWER EXT LT (NON-JOINT)': null, 'MRI LOWER EXT RT (JOINT)': null, 'MRI LOWER EXT RT (NON-JOINT)': null, 
        'MRI LOWER EXT BIL (JOINT)': null, 'MRI LOWER EXT BIL (NON-JOINT)': null, 'MRI LUMBAR PLEXUS': null, 'MRI LUMBAR SPINE': null, 'MRI LUMBARSACRAL': null, 'MRI MANDIBLE': null, 
        'MRI NECK SOFT TISSUE': null, 'MRI ORBITS': null, 'MRI PARANASAL SINUS': null, 'MRI PELVIS': null, 'MRI PITUITARY': null, 'MRI PROSTATE': null, 'MRI SACRO ILIAC JOINT': null, 
        'MRI SACRUM': null, 'MRI SHOULDER LT': null, 'MRI SHOULDER RT': null, 'MRI SHOULDER BIL': null, 'MRI TESTICULAR': null, 'MRI THORACIC SPINE': null, 'MRI TMJ': null, 'MRI TRIGEMINAL NERVE': null, 
        'MRI UPPER EXT LT (JOINT)': null, 'MRI UPPER EXT LT (NON-JOINT)': null, 'MRI UPPER EXT RT (JOINT)': null, 'MRI UPPER EXT RT (NON-JOINT)': null, 
        'MRI UPPER EXT BIL (JOINT)': null, 'MRI UPPER EXT BIL (NON-JOINT)': null, 'MRI WRIST LT': null, 'MRI WRIST RT': null, 'MRI WRIST BIL': null, 'MRV ABDOMEN': null, 'MRV HEAD': null, 'MRV NECK': null, 'MRV PELVIS': null

    }
  });
});
$(document).ready(function(){
  $('input.autocomplete-mmo').autocomplete({
    data: {

      "MMO SCREENING": null, "MMO SCREENING 3D TOMOSYNTHESIS": null, "MMO DIAGNOSTIC": null, "MMO DIAGNOSTIC 3D TOMOSYNTHESIS": null,
      "MMO SPOT": null, "MMO SPOT 3D TOMOSYNTHESIS": null
        
    }
  });
});

$(document).ready(function(){
  $('input.autocomplete-us').autocomplete({
    data: {

        "US ILIAC VEIN": null, "US ABDOMEN AORTA W/DOPPLER": null, "US ABDOMEN COMPLETE": null, "US ABDOMEN W/DOPPLER": null, "US ABDOMINAL WALL": null, 
        "US ARTERIAL PVR UPPER EXT": null, "US ARTERIAL PVR LOWER EXT": null, "US ARTERIAL ARM LT": null, "US ARTERIAL ARM RT": null, 
        "US ARTERIAL BIL LOWER EXT": null, "US ARTERIAL UPPER/LOWER EXT W/ABI INDEX": null, "US ARTERIAL BIL UPPER EXT": null, 
        "US ARTERIAL LT LEG": null, "US ARTERIAL RT LEG": null, "US BLADDER": null, "US BREAST BIL": null, "US BREAST LT": null, "US BREAST RT": null,
        "US CAROTID ARTERY DOPPLER": null, "US CHEST": null, "US ELASTOGRAPHY": null, "US GALLBLADDER": null, "US GALLBLADDER/LIVER": null, "US ILIAC ARTERY": null, 
        "US LIVER": null, "US LLQ": null, "US LUQ": null, "US NECK": null, "US OB": null, "US PANCREAS": null, "US PARATHYROID": null, "US PELVIC/TRANSVAGINAL": null, 
        "US PELVIS": null, "US TRANSVAGINAL/PELVIC": null, "US PROSTATE(PELVIS)": null, "US PROSTATE(TRANSRECTAL)": null, "US RENAL": null, "US RENAL ARTERY DOPPLER": null, "US RLQ": null, "US RUQ": null, 
        "US SCROTUM": null, "US SOFT TISSUE": null, "US SPLEEN": null, "US STRESS ECHO": null, "US SUBMANDIBULAR": null, "US TESTICULAR": null, "US THYROID": null, "US TRANSRECTAL": null, 
        "US TRANSVAGINAL ONLY": null, "US UPPER ABDOMINAL": null, "US VENOUS ARM LT": null, "US VENOUS ARM RT": null, "US VENOUS BIL LOWER EXT": null, 
        "US VENOUS BIL UPPER EXT": null, "US VENOUS LT LEG": null, "US VENOUS RT LEG": null
        
    }
  });
});



$(function() {
  $('#autocomplete-doc').bind("change", function(){
    var divotherdoc = document.getElementById('divotherdoc');
    var $input = $(this);
    //console.log($input);
    if($input.val() == 'ANTUN RAFAEL' || $input.val() == 'HERNANDEZ OTNIEL' || $input.val() == 'SANCHEZ MIREL' || $input.val() == 'TOLMOS RAYMOND'){
      document.getElementById('docstatus').innerHTML = "WE BILL";
      document.getElementById('docstatus1').innerHTML = "WE BILL";
      //divotherdoc.setAttribute("class", "hide1");
   }
     else if($input.val() == "MOLINA ROLANDO (RUTH rfuentes@southfloridaent.com)" || $input.val() == "HILLMAN EDWARD (RUTH rfuentes@southfloridaent.com)" ||
        $input.val() == "GROBMAN LAWRENCE (RUTH rfuentes@southfloridaent.com)" || $input.val() ==  "FLETCHER STEVEN (RUTH rfuentes@southfloridaent.com)" ||
        $input.val() == "DOUGHERTY BRIAN (FRANCES framos@southfloridaent.com)" || $input.val() == "VIVERO RICHARD (FRANCES framos@southfloridaent.com)" ||
        $input.val() == "KRONBERG FRANK (FRANCES framos@southfloridaent.com)" || $input.val() == "PERNAS FRANCISCO (LEYDI   lblanco@southfloridaent.com)" ||
        $input.val() == "RIVERA EUGENE (LEYDI lblanco@southfloridaent.com)" || $input.val() == "OWENS MICHAEL (LEYDI   lblanco@southfloridaent.com)" ||
        $input.val() == "RIVERA ANDREW (LEYDI lblanco@southfloridaent.com)" || $input.val() == "FERNANDEZ ALBERTO D. (ERICKA epena@southfloridaent.com)" ||
        $input.val() == "PAREKH ANISH Y (ERICKA epena@southfloridaent.com)" || $input.val() == "ARRIETA AGUSTIN (CARMEN cortiz1@southfloridaent.com )" ||
        $input.val() == "SCHELL ANDREW (CARMEN cortiz1@southfloridaent.com )" || $input.val() == "BROWN WILLIAM (CARMEN cortiz1@southfloridaent.com )" ||
        $input.val() == "VOLSKY PETER (ADDIS aamador@southfloridaent.com)" || $input.val() == "FOSTER PAUL KEVIN (ADDIS  aamador@southfloridaent.com)" ||
        $input.val() == "HELO JORGE (ADDIS  aamador@southfloridaent.com)" || $input.val() == "OTHER OFFICE OR DOCTOR" ){

        document.getElementById('docstatus').innerHTML = "DON'T SEND FAXES AND FREE LABS IF IS NEEDED, PLEASE SEND EMAIL FOR ANY REQUEST ";
        document.getElementById('docstatus1').innerHTML = "DON'T SEND FAXES AND FREE LABS IF IS NEEDED, PLEASE SEND EMAIL FOR ANY REQUEST";
        //divotherdoc.setAttribute("class", "hide1");
      }
       else if($input.val() == 'LAZARO MIGUEL GARCIA'){
          document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES";
        }

       else if($input.val() == 'JORGE SANCHEZ-MASIQUES' || $input.val() == 'ORLANDO SILVA'){
          document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY PETS EXAMS  -  ≤ TO 10 MILES";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY PETS EXAMS  -  ≤ TO 10 MILES";
        }

       else if($input.val() == 'ILUMINA MEDICAL' || $input.val() == 'ALMA MEDICAL CENTER'){
          document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
          //divotherdoc.setAttribute("class", "hide1");
        }
       else if($input.val() == 'CONVIVA/CAC CONTINUCARE'){
          document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
          //divotherdoc.setAttribute("class", "hide1");
        }
        else if($input.val() == 'ULTIMATE MEDICAL CENTER'){
          document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS  -  ≤ TO 10 MILES ";
          //divotherdoc.setAttribute("class", "hide1");
        }
       else if($input.val() == 'OTHER OFFICE OR DOCTOR'){
          $input.addClass('backin4');
          document.getElementById('docstatus').innerHTML = " ";
          document.getElementById('docstatus1').innerHTML = " ";
          //divotherdoc.removeAttribute("class", "hide1");

        }
      else if($input.val() == 'COMFORT/CANO ALL EXAMS' || $input.val() == 'VIDA MEDICAL CENTER' || $input.val() == 'VIDAMAX' || $input.val() == 'BELEN MEDICAL CENTER' || 
        $input.val() == 'LA COLONIA' || $input.val() == 'TONY ABBASSI'){
        document.getElementById('docstatus').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS -  ≤ TO 10 MILES ";
        document.getElementById('docstatus1').innerHTML = "TRANSPORTATION IS AVAILABLE ALL WEEKS DAYS  MONDAY TO FRIDAY FROM : 8:30 AM TO 2:15 PM FOR ONLY HIGHS EXAMS -  ≤ TO 10 MILES";
        //divotherdoc.setAttribute("class", "hide1");
      }

      else {
        document.getElementById('docstatus').innerHTML = " ";
        document.getElementById('docstatus1').innerHTML = " ";
        //divotherdoc.setAttribute("class", "hide1");
      }

      
});
});


    $(document).on('focus', '#idLocalNames',
    function(){
        var list = ["BELEN MEDICAL CENTER", "ALMA MEDICAL CENTER", "ULTIMATE MEDICAL CENTER",
                    "COMFORT/CANO ALL EXAMS", "CONVIVA/CAC CONTINUCARE", "VIDAMAX", "VIDA MEDICAL CENTER", "ILUMINA MEDICAL",
                    "JORGE SANCHEZ-MASIQUES", "LA COLONIA", "LAZARO MIGUEL GARCIA","ORLANDO SILVA", "TONY ABBASSI",
                    "ANTUN RAFAEL", "HERNANDEZ OTNIEL", "SANCHEZ MIREL", "TOLMOS RAYMOND", "MOLINA ROLANDO (RUTH rfuentes@southfloridaent.com)",
                    "HILLMAN EDWARD (RUTH rfuentes@southfloridaent.com)", "GROBMAN LAWRENCE (RUTH rfuentes@southfloridaent.com)",
                    "FLETCHER STEVEN (RUTH rfuentes@southfloridaent.com)", "DOUGHERTY BRIAN (FRANCES framos@southfloridaent.com)",
                    "VIVERO RICHARD (FRANCES framos@southfloridaent.com)", "KRONBERG FRANK (FRANCES framos@southfloridaent.com)",
                    "PERNAS FRANCISCO (LEYDI   lblanco@southfloridaent.com)", "RIVERA EUGENE (LEYDI lblanco@southfloridaent.com)",
                    "OWENS MICHAEL (LEYDI   lblanco@southfloridaent.com)", "RIVERA ANDREW (LEYDI lblanco@southfloridaent.com)",
                    "FERNANDEZ ALBERTO D. (ERICKA epena@southfloridaent.com)", "PAREKH ANISH Y (ERICKA epena@southfloridaent.com)",
                    "ARRIETA AGUSTIN (CARMEN cortiz1@southfloridaent.com )", "SCHELL ANDREW (CARMEN cortiz1@southfloridaent.com )",
                    "BROWN WILLIAM (CARMEN cortiz1@southfloridaent.com )", "VOLSKY PETER (ADDIS aamador@southfloridaent.com)",
                    "FOSTER PAUL KEVIN (ADDIS  aamador@southfloridaent.com)", "HELO JORGE (ADDIS  aamador@southfloridaent.com)",
                    "OTHER OFFICE OR DOCTOR"];
  $(this).autocomplete({
      source: list,
      minLength: 1
      });

  });

$(document).ready(function(){
    $('select').formSelect();
});

/*$(document).ready(function () {

    var jsonArray  = [
        {
            "id" : "1" ,
            "name" : "WITH CONTRAST",
            "description" : "item 1 description"
        },
        {
            "id" : "2" ,
            "name" : "WITHOUT CONTRAST",
            "description" : "item 2 description"
        },
        {
            "id":"3" ,
            "name" : "WITH AND WITHOUT CONTRAST",
            "description":"item 3 description"
        }
    ];
    $.each(jsonArray , (key , value)=>{
      console.log(value.name)
      var option = new Option(value.name  , value.id)
      $('#subcategory-contrast').append(option) 
      }) 
        $('select').formSelect();

            ***para tomar el value****
            $("select").change(function() {
            console.log($('select').val());
            });  
        
    });*/


$(window).on("load", function()
      {
         var phones = [{ "mask": "###/###-####"}];
         //var phones = [{ "mask": " ###/###-####"}, { "mask": " ###/###-##############"}];
          $('#boxtel').inputmask({ 
              mask: phones, 
              greedy: false, 
              definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
      });
   

     

 $(document).ready(function(){
    $('#autoinsu').autocomplete({
      data: {
        "PREFERED CARE PARTNERS": null, "PREFERED CARE PARTNERS NETWORK": null, "SIMPLY MEDICARE (EL ID TIENE UNA W ENTRE LOS NUMEROS)": null, "SIMPLY MEDICAID (ID SOLO NUMEROS)": null, "MEDICAID": null, " DOCTORS HEALTHCARE ": null, 
        "MEDICARE (SI ES EL SEGURO PRIMARIO)": null, "DEVOTED": null, "WELLCARE": null, "FREEDOM": null, 
        "UHC (ID EMPIEZA CON 00)": null, "TRICARE": null, "SUNSHINE CON MEDICAID (ID SOLO NUMEROS)": null,"AVMED H":null, "AVMED JACKSON FIRST(GROUP)":null, "HEALTHSUN":null, "SOLIS":null, "AMERIHEALTH CARITAS ":null, "HUMANA":null, "AETNA BH":null, "AETNA HC":null, "AETNA MA":null, "ALL SAVERS":null, "AMERIGROUP":null
        , "BCBS FEDERAL":null, "BCBS FLORIDA B":null, "BCBS NAT":null, "CIGNA":null, "FLORIDA HS":null, "FLORIDA PACE":null, "GEHA":null, "GOLDEN RULE":null, "HEALTHSUN":null, "HUMANA (HMO)":null, "HUMANA (PPO)":null, "CAREPLUS":null, "MAESTRO HEALTH":null
        , "MEDPLAN":null, "MERITAIN":null, "MIAMI CHILDREN'S":null, "MMM":null, "MOLINA":null, "NHP":null, "ORANGE MP":null, "OSCAR":null, "OXFORD":null, "PHCS":null, "SOLIS":null, "STAYWELL":null, "SUN HEALTH":null, "SUNSHINE":null
        , "UMR":null, "WELLMED":null, "AETNA UNIVERSITY OF MIAMI FOR HIGHS": null, "AETNA UNITED AIRLINES PLAN": null, "BCBS OF PENNSYLVANIA": null, "UHC FLONEX": null,
        "UHC SPECTERA VISION": null, "AMERIHEALTH CARITAS OF FLORIDA NEXT": null, "MEDICARE HPMP / FLORIDA COMPLETE CARE": null, "MEDICAID LIMITED TO FAMILY PLANNING SERVICES": null,
        "MEDICAID LIMITED TO OUTPATIENT, INPATIENT, ER, ETC SERVICES": null, "CHILDREN'S MEDICAID PLAN FOR HIGHS": null, "COMMUNITY CARE WITH MEDICAID": null, "FIRST HEALTH NETWORK": null,
        "ALLIANCE (ONLY)": null, "MAGELLAN": null, "GLOBAL EXCELL (ONLY)": null, "GERBER INSURANCE": null, "INDEPENDENCE NETWORK": null, "POSITIVE HEALTHCARE": null, "BRIGHT HEALTH": null,
        "COVENTRY": null, "PMP": null, "PREVENTIVE MEDICAL PROGRAM": null, "MASS HEALTH": null, "EMBLEM HEALTH": null, "UNIVISTA": null, "HUSKY": null 
      }
    });
  });

  $(document).ready(function(){
    $('#center').autocomplete({
      data: {
        "KENDALL": null, "HIALEAH": null, "HOMESTEAD": null, "CORAL WAY": null, "DORAL": null, " NORTH MIAMI": null
      }
    });
  });

  $(document).ready(function(){
    $('#vitwork').autocomplete({
      data: {
        "DAVID CLAVIJO 3321 /SCH": null, "EDISON MARTINEZ 3378 /SCH": null, "SOFIA ENRIQUEZ 3313/ VERIF": null, "JUAN DAVID LOSADA 3264/SCANNING": null, "JENNIFER CASTRO 3220 /CLINICALS": null, "IVAN BEDOYA 3237 / CLINICALS ": null, 
        "NATHALIA CAMAYO 3310 /CLINICALS": null, "MELISSA DELGADO 3312 /CLINICALS": null, "CAMILO MONTAÑO 3229 /CLINICALS": null, "NICOLAS HURTADO 3309 /CALL OUT": null, 
        "LUIS CORTES 3221 /CALL OUT": null, "DAMIAN CALZADA 3244 /CALL OUT": null, "CAMILO BETANCOURT 3393 /CALL OUT": null,"MARIA ALEJANDRA ROJAS 3324 /CALL OUT":null, "JOHAN SANCHEZ 3325 /CALL OUT":null, "DIEGO CHIMACHANA 3242 /CALLOUT":null, "LIZETH ARCOS 3256 /CLINICALS":null, "SAHIAN CAVIEDES 3291 /CLINICALS ":null, "JAVIER JIMENEZ 3377 /CLINICALS":null, "SOFIA BOLAÑOS 3404 /CLINICALS":null, "AETNA HC":null, "AETNA MA":null, "ALL SAVERS":null, "AMERIGROUP":null
        , "RUBEN ZUÑIGA 3270 /VERIF":null, "RICHAR SANCHEZ 3286 /VERIF":null, "DANIEL LOPEZ 3379 /VERIF":null, "JEREMY SOTO 3380 /VERIF":null, "ANDRU NIETO 3204 /VERIF":null, "VICTOR RODRIGUEZ 3364 /VERIF":null, "ANDRES MOYA 3249 /ADMIN":null, "SONIA QUIÑONEZ 3259 /ADMIN":null, "BEATRIZ SERNA 235 /CEO MIAMI":null, "STEPHANY GAVIRIA 3329 /MEDICAL RECORDS":null, "JULIAN GARCIA 3218 /MEDICAL RECORDS":null, "ANDRES RIZO 3263 /MEDICAL RECORDS":null, "VALENTINA GONZALEZ 3265 /MEDICAL RECORDS":null
        , "NATALY REYES 3350 /MEDICAL RECORDS":null, "MARIA JOSE BURITICA 3219 /MEDICAL RECORDS":null, "KAREN GONZALEZ 3214 /MEDICAL RECORDS":null, "WILMER VILLANUEVA 306 /MARKETING":null, "FERNANDO QUINTERO 3337 /LABS":null, "MARIANA PINZON 3320 /LABS":null, "JOHAN PEREIRA 3311 /LABS":null, "MICHELLE ABREO 3217 /LABS":null, "CHRISTIAN OSORIO 3262 /LABS":null, "JUAN CONTRERAS 3328 /AUTH":null, "DANIEL TORRES 3224 /AUTH":null, "JUAN JOSE RODRIGUEZ 3267 /AUTH":null, "MICHAEL LASSO 3271 /AUTH":null, "CHRISTIAN MOSQUERA 3402 /AUTH":null
        , "DANIEL CASTRO 3374 /AUTH":null, "JUAN SEBASTIAN CARDONA 3388 /AUTH":null, "CALEB CARVAJAL 3257 /AUTH": null, "JULIAN ANDRES CARVAJAL 3239 /AUTH": null, "NICOLAS HOYOS 3236 /AUTH": null, "JUAN P MONCAYO 3272 /AUTH": null,
        "RUBEN DARIO VAZQUES 3406 /AUTH": null, "ALEJANDRA SANCHEZ 3403 /AUTH-SLEEPS": null, "ISIS RAMIREZ 3349 /CONF": null, "ALEJANDRO GUTIERREZ 3340 /CONF": null,
        "EMANUEL GARCIA 3266 /CONF": null, "SEBASTIAN JIMENEZ 3361 /CONF": null, "OSCAR PEREZ 3314 /CONF": null, "VALENTINA OVIEDO 3216 /CONF": null,
        "LIZA GAVIRIA 3228 /CONF": null, "MARIA CAMILA RIOS 3327 /CONF": null, "MIGUEL MANCILLA 3269 /CONF": null, "DAVID CARDONA 3407 /CONF": null, "CRISTIAN ZAZA 3326 /CONF": null, "MARIA ISABELA BOLAÑOS 3285 /SCH SUPERVISOR": null, "GLADYS MARTINEZ 3381 /SCH COACHING": null,
        "SANDRA ARANGO 3297 /SCH SUNDAYS": null, "LAURA SOFIA DIAZ 3323 /SCH": null, "BRIGITTE ARCOS 3294 /SCH": null, "VALENTINA MARTINEZ 3382 /SCH": null, "MARIA CAMILA CARDENAS 3248 /SCH": null, "JAYCEE OSPINA 3290 /SCH": null, "JONATHAN ESTEBAN LOPEZ 3296 /SCH": null, "TATIANA ESTRADA 3392 /SCH CHAT ONLINE": null, "EFRALY BRIZUELA 3369 /SCH": null, "ANGIE OBANDO 3339 /SCH": null, "STEPHANIA SANCHEZ 3240 /SCH": null, "DONOVAN CARMONA RUIZ 3322 /SCH": null, "EXTIVINSON ZAPATA 3351 /SCH": null, "CAMILO ACOSTA 3279 /SCH": null
        , "DANIELA QUINTERO 3338 /SCH": null, "ALEJANDRO LONDOÑO 3386 /SCH": null, "NATALIA MEZA 3315 /SCH": null, "DIEGO RODRIGUEZ 3332 /SCH": null, "SAMUEL ALCALDE 3238 /SCH": null, "JHON OCAMPO 3319 /SCH": null, "VALERIA ZAPATA 3375 /SCH": null
        , "CARLOS BERON 3376 /SCH": null, "JHON BRANDON SANCHEZ 3355 /SCH": null, "JHON JAMES DORADO 3391 /SCH": null, "JUAN FELIPE MEDINA 3331 /SCH": null, "CATALINA BALLESTEROS 3385 /SCH": null, "MARVIN CASTRO 3390 /SCH": null
        , "HAROLD SANCHEZ 3318 /SCH": null, "SANTIAGO RENTERIA RUA 3292 /SCH": null, "BILLY TORRES 3316 /SCH": null, "JUAN CAMILO MONTAÑO 3330 /SCH": null, "GABRIELA ARGEL 3387 /SCH": null, "MELANY DELGADO 3408 /SCH": null
        , "JULIAN BASTIDAS 3399 /SCH": null, "KAROL VELASCO 3261 /SCH": null, "MONICA FERNANDEZ 301 /ADMIN KENDALL": null, "YVETTE VAZQUEZ 207 /ADMIN KENDALL": null, "VALERIA CARDENAS 212 /ADMIN KENDALL": null, "CONNIE SERNA 211 /ADMIN KENDALL": null
        , "SONIA PEREZ 298 /ADMIN KENDALL": null, "ANGELA ROCHE 220 /OP DEPT": null, "AMANDA ISABEL GONZALEZ SANCHEZ 273 /OP DEPT": null, "CLARA FERNANDEZ 237 /OP DEPT": null, "ELISANDRA VILLAMIL 300 /OP DEPT": null, "MARIANA ACOSTA 233 /OP DEPT": null
        , "YANITSA BUENO 278 /OPT DEPT NUCLEAR MEDICINE": null, "MANNY TOLEDO 280 /IT DEPT": null, "RODNEY MARTINEZ 280 /IT DEPT": null, "DEREK SOSIAS 3201 /ANNEX BILLING": null, "CATHERINE FERNANDEZ 308 /SUITE 109": null
        , "JHON OCAMPO 3319 /SCH": null, "NEISHA TORRES 305 /SUITE 109 TECH PET KENDALL": null, "FIORELLA CHIARUZZI 309 /SUITE 109 TECH STRESS KENDALL": null, "YAQUELINES MARTINEZ 3346 /SUITE 109 TECH US KENDALL": null
        , "MERCEDES SINGLER 310 /SUITE 109 TECH ECHO/EKG KENDALL": null, "ARMANDO MEDEROS 304 /SUITE 109 MEDICAL RECORDS KENDALL": null, "JHON OCAMPO 3319 /SCH": null, "ANA SEGOVIA 223 /MEDICAL RECORDS KENDALL": null, "ARMANDO CALAS 221 /MEDICAL RECORDS KENDALL": null
        , "CARLOS BOZA 215 /MEDICAL RECORDS KENDALL": null, "DERLY LOBO 222 /MEDICAL RECORDS KENDALL": null, "CAROLINA PUIG 313-303 /MEDICAL RECORDS KENDALL": null, "ELITTE REYES 228 /BILLING": null
        , "NEYDIS CABALLERO 3372 /BILLING KENDALL": null, "MARIA B CASTRO 208 /BILLING KENDALL": null, "KATHY APARICIO 267 /BILLING KENDALL": null, "DULCIMA ESPINOZA 216 /BILLING KENDALL": null, "CAROLINA GOMEZ 297 /BILLING KENDALL": null
        , "LAURA GONZALEZ 274 /BILLING KENDALL": null, "LAURA GONZALEZ 274 /BILLING KENDALL": null, "LEYDI MORALES 232 /BILLING KENDALL": null, "MABEL DOMINGUEZ 257 /BILLING KENDALL": null
        , "XENIA PRIETO 206 /SUITE 108 TECH KENDALL": null, "GENAT FERNANDEZ 3357 /SUITE 108 TECH US4 KENDALL": null, "KIMBERLY MORALES 259 /SUITE 108 TECH US2 KENDALL": null, "GUADALUPE BOZA 258 /SUITE 108 TECH MAMMO1 KENDALL": null
        , "MARIA CEPERO 3358 /SUITE 108 TECH MAMMO2 KENDALL": null, "MARTA VASCOCELLO 209 /SUITE 108 TECH MAMMO3 KENDALL": null, "LIDIA SIBILA 272 /SUITE 108 TECH DEXA KENDALL": null
        , "SANDRA VARELA 277 /SUITE 108 KENDALL": null, "JOSEFINA DIEZ 240 /SUITE 108 KENDALL": null, "JULIE FRANCIS 3335-201 /SUITE 106 FRONT DESK KENDALL": null, "HENRY SERNA 268 /SUITE 106 FRONT DESK KENDALL": null, "YAHIMA ANDRADE 202 /SUITE 106 FRONT DESK KENDALL": null
        , "ROXANA ARGUETA 271 /SUITE 106 FRONT DESK KENDALL": null, "ANDREA MEDINA 224 /SUITE 106 FRONT DESK KENDALL": null, "YOANKA PEREZ 3336 /SUITE 106 FRONT DESK KENDALL": null
        , "ROBERTO MASS 204 /SUITE 106 TECH MR1 KENDALL": null, "AILEN PROBEDO 312 /SUITE 106 TECH MRI2 KENDALL": null, "DAYNA PRCEIRO PEREZ 3284 /SUITE 106 TECH MRI3 KENDALL": null
        , "PEDRO SANCHEZ 205 /SUITE 106 TECH CT1 KENDALL": null, "YULET FORCELLEDO 234 /SUITE 106 TECH CT2 KENDALL": null, "ANA BARROSO 276 /SUITE 106 TECH XRAY1 KENDALL": null, "ESTRELLA LEON 3215 /SUITE 106 TECH XRAY2 KENDALL": null
        , "JOSE HERRA SORIA 226 /SUITE 106 TECH IV KENDALL": null, "MILAGROS TOLEDO 239 /SUITE 106 TECH NUCLEAR KENDALL": null, "DAIVIS JACOMINO 203 /SUITE 106 TECH US1 KENDALL": null
        , "MICHEL CRUZ 231 /SUITE 106 TECH US3 KENDALL": null, "YAQUELINES MARTINEZ 3346 /SUITE 106 TECH US5 KENDALL": null, "TANIA LOPEZ 3395 /SUPERVISOR HOMESTEAD": null, "ABEL SOTOMAYOR 3231 /MRI TECH HOMESTEAD": null, "VANIA MEDINA 3231 /MRI TECH SATURDAY HOMESTEAD": null
        , "YANSIS MARTINEZ 3251 /US TECH HOMESTEAD": null, "ANNET ROCHE 3234 /US TECH HOMESTEAD": null, "MARVEL TORRES 3347 /US TECH HOMESTEAD": null, "LENI MODESTI 3397 /US TECH HOMESTEAD": null, "AMALIA SANCHEZ 3308 /FRONT DESK HOMESTEAD": null, "MADAY ORTIZ 3232 /FRONT DESK HOMESTEAD": null, "KARINA MENDOZA 3307 /FRONT DESK HOMESTEAD": null, "MARIELE GUTIERREZ 3394 /FRONT DESK HOMESTEAD": null, "ALIANNY MARTINEZ 3233 /FRONT DESK HOMESTEAD": null
        , "JOALY ROJAS 3247 /PHLEBOTOMIST HOMESTEAD": null, "LISANDRA ANGUILA & DANIEL DIAZ 3280 /XRAY TECH-DEXA TECH HOMESTEAD": null, "ARIAM AGUILA 3230 /CT TECH HOMESTEAD": null, "PEDRO GARCIA 3230 /XRAY TECH - CT SATURDAY": null, "SOFIA ROQUE - MARIA I POLA 3235 /MAMMO TECH HOMESTEAD": null
        , "DAILET GARCIA 3356 /MAMMO TECH HOMESTEAD": null, "ISMARY LANTARON 3235 /MAMMO TECH SATURDAY": null, "JOANNA OCASIO 3273 /SUPERVISOR CORAL WAY": null,  "ALIANNY MARTINEZ 3274 /FRONT DESK CORAL WAY": null
        , "LUZ LEON 3277 /XRAY TECH CORAL WAY": null, "DR KAMBIZ ZADEH 3278 /RADIOLOGIST HOMESTEAD": null, "DR TWINKLE DHAWAN 3241 /RADIOLOGIST CORAL WAY": null, "SUSY FERNANDEZ 3207 /FRONT DESK (MAMMO) CORAL WAY": null, "MARIA PEREZ 3362 /FRONT DESK (MAMMO) CORAL WAY": null, "MIRIAM CARDOZA 3360 /FRONT DESK (MAMMO) CORAL WAY": null
        , "MARI ESTHER 3255 /US TECH HOMESTEAD": null, "SARAH ACOSTA 3250 /US TECH HOMESTEAD": null, "IVETTE DEL SOL 3298 /US TECH HOMESTEAD": null, "ELIZABET OLIVARES 3276 /CT TECH CORAL WAY": null, "IDELIN PEREZ 3275 /MRI TECH CORAL WAY": null, "WALKIRIS VASQUEZ 3253 /MAMMO TECH CORAL WAY": null, "TERESA AGUERO 3348 /MAMMO TECH CORAL WAY": null
        , "ELAYNE RODRIGUEZ 3288 /PHLEBOTOMIST CORAL WAY": null, "MARTA E HERNANDEZ 3302 /SUPERVISOR DORAL": null, "WALESKA MARTINEZ 3304 /US TECH DORAL": null, "INGRID GONZALEZ 3305 /US TECH DORAL": null, "MERCEDES MORALES 3341 /US TECH DORAL": null, "ANTONIO DIAZ 3334 /CT TECH DORAL": null, "LORENA RUIZ 3344 /FRONT DESK DORAL": null, "JORGE TASSE 3343 /FRONT DESK DORAL": null
        , "MAYRA GUERRA 3371 /FRONT DESK DORAL": null, "CLAUDIA RODRIGUEZ 3301 /FRONT DESK DORAL": null, "PEDRO LABORDE 3317 /DEXA TECH DORAL": null, "MARIA BONILLA 3353 /PET TECH DORAL": null, "DANIBIS RIVERA 3303 /MAMMO TECH DORAL": null, "GLORIA GECHOFF 3342 /MAMMO TECH DORAL": null, "PEDRO LABORDE 3306 /XRAY TECH DORAL": null
        , "YENISLEIDYS TAMAYO /PHLEBOTOMIST DORAL": null, "JENNIFER SUAREZ 3345 /MRI TECH DORAL": null, "THIAGO OSIAS 3409 /FRONT DESK NORTH MIAMI": null, "VANIA MEDINA 3411 /MRI TECH NORTH MIAMI": null, "GERVASIO GONZALEZ 3412 /PET - CT TECH NORTH MIAMI": null
        , "ODEIMYS RODRIGUEZ GONZALEZ 3423 /PHLEBOTOMY NORTH MIAMI": null, "CARINE PIERRE LOUIS 3413 /FRONT DESK NORTH MIAMI": null, "ESTHER COHEN 3415 / US TECH NORTH MIAMI": null, "CLAUDIA CASILLAS 3416 /MAMMO TECH NORTH MIAMI": null
        , "RAFAEL LA O VASQUEZ 3421 - 3422 /XRAY & DEXA TECH NORTH MIAMI": null, "KEVIN JOHAN ABADIA 3412 /SCH": null, "MIRTA MARTINEZ 3211 /FRONT DESK HIALEAH": null, "ANGELA PEREZ 3202 /FRONT DESK HIALEAH": null
        , "JOSE PEDROSO /MEDICAL RECORDS HIALEAH": null, "ANGELICA GARCIA 3210 /FRONT DESK HIALEAH": null, "TANIA DE JUAN 3227 /FRONT DESK HIALEAH": null, "MILENA AGUILERA 3227 /FRONT DESK HIALEAH": null, "ANA BARBARA PEREZ 3227 /FRONT DESK HIALEAH": null, "JULIA GUTIERREZ 3227 /FRONT DESK HIALEAH": null
        , "ANGELA PEREZ 3202 /SATURDAY FRONT DESK HIALEAH": null, "ANGELICA GARCIA 3210 /SATURDAY FRONT DESK HIALEAH": null, "MARIA MEJIA 3205 /US TECH HIALEAH": null, "SONIA CICIRELLO 3295 /US TECH HIALEAH": null, "DAVID JACOMINO 3359 /US TECH HIALEAH": null
        , "RODELAY GONZALEZ 3212 /MRI TECH HIALEAH": null, "ERIC ARANGO 3203 /CT TECH HIALEAH": null, "ELIVIS CEPERO 3243 /XRAY TECH HIALEAH": null, "WENDY RODRIGUEZ 3287 /XRAY TECH HIALEAH": null
        , "CARLOS RIVERO 3203 /CT TECH SATURDAY HIALEAH": null, "ERIC ARANGO 3212 /MRI TECH SATURDAY HIALEAH": null, "LOANIA CRUZ 3205 /XRAY TECH SATURDAY HIALEAH": null, "MIGUEL FAYAD 3287 /XRAY TECH SATURDAY HIALEAH": null
        , "CIRIA PEREZ /PHLEBOTOMIST HIALEAH": null, "MAYLIN GRAU 3246 /FRONT DESK HIALEAH": null, "AMY MARTINEZ 3252 /FRONT DESK HIALEAH": null, "MARIANELA CUBAS 3246 /FRONT DESK HIALEAH": null, "ANA BARBARA PEREZ 3252 /FRONT DESK HIALEAH": null
        , "YENNY SUAREZ 3260 /US TECH HIALEAH": null, "KIMBERLY MORALES 3254 /US TECH HIALEAH": null, "MILDRED WEISS 3226 /MMO TECH HIALEAH": null, "RUTH MARRERO 3209 /MMO TECH HIALEAH": null, "ANNIA VILLEGAS 3206 /MMO TECH HIALEAH": null
        , "LUISA SUAREZ  /DXA TECH HIALEAH": null, "LAURA PEREZ LOZANO 3260 /US TECH SATURDAY HIALEAH": null, "GRACIELA MARINO 3226 /MMO TECH SATURDAY HIALEAH": null, "LIDALI PEREZ 3209 /MMO TECH SATURDAY HIALEAH": null, "ANAYDA CECILIA ANGEZ 3206 /MMO TECH SATURDAY HIALEAH": null
        , "DR REINOSO ALIDA 3212 /HIALEAH CENTER": null, "YAERILYN ORTIZ /SCANNING": null, "JUAN CAMILO BOLAÑOS /SCANNING": null, "MIGUEL GOMEZ /SCANNING": null, "CARLOS CELORIO /SCANNING": null
        , "KEVIN DAVID TORRES /SCANNING": null, "JHONY ARIAS /SCANNING": null, "SANTIAGO REA /SCANNING": null, "NELAIDA CALLEJAS 3362 /FRONT DESK (CT) CORAL WAY": null, "VIVIANA CASTRILLON 260 /MARKETING": null


      }
    });
  });


  $(document).ready(function(){
    $('#autocomplete-doc').autocomplete({
      data: {
        "BELEN MEDICAL CENTER": null, "ALMA MEDICAL CENTER": null, "ULTIMATE MEDICAL CENTER": null,
        "COMFORT/CANO ALL EXAMS": null, "CONVIVA/CAC CONTINUCARE": null, "VIDAMAX": null, "VIDA MEDICAL CENTER": null, "ILUMINA MEDICAL": null,
        "JORGE SANCHEZ-MASIQUES": null, "LA COLONIA": null, "LAZARO MIGUEL GARCIA": null,"ORLANDO SILVA": null, "TONY ABBASSI": null,
        "ANTUN RAFAEL": null, "HERNANDEZ OTNIEL": null, "SANCHEZ MIREL": null, "TOLMOS RAYMOND": null, "MOLINA ROLANDO (RUTH rfuentes@southfloridaent.com)": null,
        "HILLMAN EDWARD (RUTH rfuentes@southfloridaent.com)": null, "GROBMAN LAWRENCE (RUTH rfuentes@southfloridaent.com)": null,
        "FLETCHER STEVEN (RUTH rfuentes@southfloridaent.com)": null, "DOUGHERTY BRIAN (FRANCES framos@southfloridaent.com)": null,
        "VIVERO RICHARD (FRANCES framos@southfloridaent.com)": null, "KRONBERG FRANK (FRANCES framos@southfloridaent.com)": null,
        "PERNAS FRANCISCO (LEYDI   lblanco@southfloridaent.com)": null, "RIVERA EUGENE (LEYDI lblanco@southfloridaent.com)": null,
        "OWENS MICHAEL (LEYDI   lblanco@southfloridaent.com)": null, "RIVERA ANDREW (LEYDI lblanco@southfloridaent.com)": null,
        "FERNANDEZ ALBERTO D. (ERICKA epena@southfloridaent.com)": null, "PAREKH ANISH Y (ERICKA epena@southfloridaent.com)": null,
        "ARRIETA AGUSTIN (CARMEN cortiz1@southfloridaent.com )": null, "SCHELL ANDREW (CARMEN cortiz1@southfloridaent.com )": null,
        "BROWN WILLIAM (CARMEN cortiz1@southfloridaent.com )": null, "VOLSKY PETER (ADDIS aamador@southfloridaent.com)": null,
        "FOSTER PAUL KEVIN (ADDIS  aamador@southfloridaent.com)": null, "HELO JORGE (ADDIS  aamador@southfloridaent.com)": null,
        "OTHER OFFICE OR DOCTOR": null
      }
    });
  });
/************** CT ***************/
  function addtext(){
    document.addEventListener('click',
      function(){

        var radio1 = document.getElementById('r1');
        var radio2 = document.getElementById('r2');
        var radio3 = document.getElementById('r3');
        var radio4 = document.getElementById('r4');
        var radio5 = document.getElementById('r5');
        var radio6 = document.getElementById('r6');
        var radio7 = document.getElementById('r7');
        var radio8 = document.getElementById('r8');
        var radio9 = document.getElementById('r9');
        var radio10 = document.getElementById('r10');
        var radio11 = document.getElementById('r11');
        var radio12 = document.getElementById('r12');
        var radio13 = document.getElementById('r13');
        var radio14 = document.getElementById('r14');
        var radio15 = document.getElementById('r15');
        var radio16 = document.getElementById('r16');
        var radio17 = document.getElementById('r17');
        var radio18 = document.getElementById('r18');
        var radio19 = document.getElementById('r19');
        var radio20 = document.getElementById('r20');
        /*var radio21 = document.getElementById('r21');*/
        var radio22 = document.getElementById('r22');
        var radio23 = document.getElementById('r23');
        var radio24 = document.getElementById('r24');
        var radio25 = document.getElementById('r25');


        if(radio1.checked){
          document.getElementById('label1').innerHTML = radio1.value;
          document.getElementById('mmyt').innerHTML = "PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTOR'S OFFICE TO REQUEST AN ALLERGY PROTOCOL, OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI.";
          document.getElementById('mmyt1').innerHTML = " ";
          document.getElementById('mmyt2').innerHTML = " ";
        }
        if(radio2.checked){
          document.getElementById('label1').innerHTML = radio2.value;
          document.getElementById('mmyt').innerHTML = " ";
        }
        if(radio3.checked){
          document.getElementById('label2').innerHTML = radio3.value;
          document.getElementById('mmyt1').innerHTML = "PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTOR'S OFFICE TO REQUEST AN ALLERGY PROTOCOL, OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI.";
          document.getElementById('mmyt').innerHTML = " ";
          document.getElementById('mmyt2').innerHTML = " ";
        }
        if(radio4.checked){
          document.getElementById('label2').innerHTML = radio4.value;
          document.getElementById('mmyt1').innerHTML = " ";
        
        }
        if(radio5.checked){
          document.getElementById('label3').innerHTML = radio5.value;
          document.getElementById('mmyt2').innerHTML = "PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTOR'S OFFICE TO REQUEST AN ALLERGY PROTOCOL, OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI.";
          document.getElementById('mmyt').innerHTML = " ";
          document.getElementById('mmyt1').innerHTML = " ";
        }
        if(radio6.checked){
          document.getElementById('label3').innerHTML = radio6.value;
          document.getElementById('mmyt2').innerHTML = " ";
        }
        if(radio7.checked){
          document.getElementById('label4').innerHTML = radio7.value;
        }
        if(radio8.checked){
          document.getElementById('label4').innerHTML = radio8.value;
        }
        if(radio9.checked){
          document.getElementById('label5').innerHTML = radio9.value;
        }
        if(radio10.checked){
          document.getElementById('label5').innerHTML = radio10.value;
        }
        if(radio11.checked){
          document.getElementById('label6').innerHTML = radio11.value;
        }
        if(radio12.checked){
          document.getElementById('label6').innerHTML = radio12.value;
        }
        if(radio13.checked){
          document.getElementById('label7').innerHTML = radio13.value;
        }
        if(radio14.checked){
          document.getElementById('label7').innerHTML = radio14.value;
        }
        if(radio15.checked){
          document.getElementById('label8').innerHTML = radio15.value;
        }
        if(radio16.checked){
          document.getElementById('label8').innerHTML = radio16.value;
        }
        if(radio17.checked){
          document.getElementById('label8').innerHTML = radio17.value;
        }
        if(radio18.checked){
          document.getElementById('label9').innerHTML = radio18.value;
          hiifacc.removeAttribute('class', 'hide');
        }
        if(radio19.checked){
          document.getElementById('label9').innerHTML = radio19.value;
        }
        if(radio20.checked){
          document.getElementById('label10').innerHTML = radio20.value;
          hiifacc.setAttribute('class', 'hide');
          document.getElementById('label18').innerHTML = ' ';
          document.getElementById('label9').innerHTML = ' ';
        }
        /*if(radio21.checked){
          document.getElementById('label10').innerHTML = radio21.value;
        }*/
        if(radio22.checked){
          document.getElementById('label11').innerHTML = radio22.value;
        }
        if(radio23.checked){
          document.getElementById('label11').innerHTML = radio23.value;
        }
        if(radio24.checked){
          document.getElementById('label12').innerHTML = radio24.value;
          divpthasene.removeAttribute("class", "hide");
        }
        if(radio25.checked){
          document.getElementById('label12').innerHTML = radio25.value;
          divpthasene.setAttribute("class", "hide");
        }
      });
    }

    function validdosarray(){
      document.addEventListener('change',
        function(){

          var exaptMRI = document.getElementById('autocomplete-input-mri').value;
          var conpt = document.getElementById('subcategory-contrast').value;
          var classpre = document.getElementById('classpre');
          var classpre1 = document.getElementById('classpre1');
          var classpre2 = document.getElementById('classpre2');
          var classpre3 = document.getElementById('classpre3');
          var classpre4 = document.getElementById('classpre4');
          //var conpt = document.getElementById('contrast').value;
          var examstat = 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING';
          var examstat2 = 'SCHEDULE SINCE FIRST TIME IN THE MORNING TO LAST HOUR';
            
              if(exaptMRI == 'MRI ACHILLES TENDON' && conpt == 'WITH CONTRAST'){
                  document.getElementById('alert1A').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert1B').innerHTML= examstat;
                  document.getElementById('alert1').innerHTML = ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide');
                  classpre2.removeAttribute('class', 'hide');
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
    
                  }else if(exaptMRI == 'MRI ACHILLES TENDON' && conpt == 'WITHOUT CONTRAST'){
                  document.getElementById('alert1A').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert1B').innerHTML= examstat2;
                  document.getElementById('alert1').innerHTML = ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide');
                  classpre2.setAttribute('class', 'hide');
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
                  
                  }else if(exaptMRI == 'MRI ACHILLES TENDON' && conpt == 'WITH AND WITHOUT CONTRAST'){
                  document.getElementById('alert1A').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert').innerHTML= 'SCHEDULE MRI ANKLE';
                  document.getElementById('alert1B').innerHTML= examstat;
                  document.getElementById('alert1').innerHTML = ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide');
                  classpre2.removeAttribute('class', 'hide');
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
                  
                  }else if(exaptMRI == 'MRI ENTEROGRAPHY' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS DONE W AND W/O CONTRAST';
                    document.getElementById('alert1B').innerHTML= ' ';
                  }else if(exaptMRI == 'MRI ENTEROGRAPHY' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS DONE W AND W/O CONTRAST';
                    document.getElementById('alert1B').innerHTML= ' ';
                  }else if(exaptMRI == 'MRI ENTEROGRAPHY' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.removeAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = ' ';//ALWAYS DONE W AND W/O CONTRAST
                    document.getElementById('alert1').innerHTML = 'SCHEDULE 1 HOUR AFTER CENTER OPENING' + '<br>' + '';
                    document.getElementById('alert1B').innerHTML= ' ';           
                  }else if(exaptMRI == 'MRI PROSTATE' && conpt == 'WITH CONTRAST'){
                    classpre3.removeAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'THIS EXAM IS NOT DONE IN HOMESTEAD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE 1 HOUR AFTER CENTER OPENING';
                    document.getElementById('alert1E').innerHTML = 'IF MRI PROSTATE IS WITH CONTRAST SCHEDULE MRI HIFU T3 MULTIPARAMETRIC ALSO MEANS HIFU';
                    document.getElementById('alert1B').innerHTML= ' ';
                  }else if(exaptMRI == 'MRI PROSTATE' && conpt == 'WITHOUT CONTRAST'){
                    classpre3.removeAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'THIS EXAM IS NOT DONE IN HOMESTEAD ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1').innerHTML = ' '; 
                    document.getElementById('alert1E').innerHTML = ' ';
                  }else if(exaptMRI == 'MRI PROSTATE' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre3.removeAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'THIS EXAM IS NOT DONE IN HOMESTEAD';
                    document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = ' '; 
                    document.getElementById('alert1B').innerHTML= examstat;
                  }else if(exaptMRI == 'MRA LOWER EXT (RUN OFF)' && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS DONE W AND W/O CONTRAST';
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre2.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRA LOWER EXT (RUN OFF)' && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS DONE W AND W/O CONTRAST';
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre2.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRA LOWER EXT (RUN OFF)' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS DONE W AND W/O CONTRAST';
                    document.getElementById('alert1').innerHTML= 'SCHEDULE 1 HOUR AFTER CENTER OPENING' + '<br>' +  'SCHEDULE: ALL CENTERS';
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre2.removeAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre4.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRI UROGRAM'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH CONTRAST.' + '<br>' + 'DRINK WATER.';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE 1 HOUR AFTER CENTER OPENING' + '<br>' + 'SCHEDULE IN MIAMI(KENDALL) AND CORAL WAY'; 
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre4.removeAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRI UROGRAM'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH CONTRAST.';
                    document.getElementById('alert1').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre4.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI UROGRAM'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH CONTRAST.';
                    document.getElementById('alert1').innerHTML = ' '; 
                    document.getElementById('alert1B').innerHTML= ' ';
                    classpre4.setAttribute('class', 'hide');
                    classpre2.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRI BREAST BIL'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';//examstat
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH, OR W AND W/O CONTRAST.';
                    document.getElementById('alert1').innerHTML = ' ';//PT MUST BRING PRIORS, ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES. 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI BREAST BIL'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                   document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = 'ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES.'; 
                    classpre2.rAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI BREAST BIL'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH, OR W AND W/O CONTRAST.';
                    document.getElementById('alert1').innerHTML = 'PT MUST BRING PRIORS, ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES.'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI BREAST UNILT'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH, OR W AND W/O CONTRAST.';
                    document.getElementById('alert1').innerHTML = 'PT MUST BRING PRIORS, ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES.'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI BREAST UNILT'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = 'ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES.'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRI BREAST UNILT'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'ALWAYS WITH, OR W AND W/O CONTRAST.';
                    document.getElementById('alert1').innerHTML = 'PT MUST BRING PRIORS, ONLY MIAMI' + '<br>' + 'ONLY PLAIN WHEN THE PATIENT HAS IMPLANTS RUPTURE OR RESEARCH STUDIES.'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRA HEAD'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';
                    document.getElementById('alert1E').innerHTML = 'ONLY PLAIN. IF RX SAYS WITH CONTRAST, CHANGE THE RX FOR PLAIN. BECAUSE IT IS OUR PROTOCOL.';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRA HEAD'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'ONLY PLAIN. IF RX SAYS WITH CONTRAST, CHANGE THE RX FOR PLAIN. BECAUSE IT IS OUR PROTOCOL.';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRA HEAD'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';
                    document.getElementById('alert1E').innerHTML = 'ONLY PLAIN. IF RX SAYS WITH CONTRAST, CHANGE THE RX FOR PLAIN. BECAUSE IT IS OUR PROTOCOL.';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI THYROID'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI THYROID'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRI THYROID'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI PARATHYROID'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI PARATHYROID'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI PARATHYROID'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML=  'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE NECK SOFT TISSUE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI NECK SOFT TISSUE'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI NECK SOFT TISSUE'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI NECK SOFT TISSUE'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI THORACIC SPINE'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'THE SAME DORSAL SPINE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI THORACIC SPINE'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'THE SAME DORSAL SPINE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI THORACIC SPINE'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'THE SAME DORSAL SPINE';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI CHEST'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'THE SAME MRI THORAX';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI CHEST'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'THE SAME MRI THORAX';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI CHEST'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'THE SAME MRI THORAX';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI KIDNEY'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRI KIDNEY'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI KIDNEY'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI ABDOMEN'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI ABDOMEN'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI ABDOMEN'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI PELVIS'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRI PELVIS'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide');
                  }else if(exaptMRI == 'MRI PELVIS'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'IF THE MRI IS ABD AND PELVIS THEY ARE SCHEDULED SEPARATELY ON DIFFERENTS DAYS';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide');    
                  }else if(exaptMRI == 'MRI ADRENAL GLAMD'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                    classpre1.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRI ADRENAL GLAMD'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRI ADRENAL GLAMD'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1B').innerHTML= examstat;
                    document.getElementById('alert1E').innerHTML = 'SCHEDULE MRI ABD';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre2.removeAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide');
                    classpre1.setAttribute('class', 'hide');  
                  }else if(exaptMRI == 'MRCP'  && conpt == 'WITH CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';
                    document.getElementById('alert1E').innerHTML = 'ONLY PLAIN';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS';
                    classpre1.setAttribute('class', 'hide'); 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRCP'  && conpt == 'WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= examstat2;
                    document.getElementById('alert1E').innerHTML = 'MRI ABDOMEN REGION  (liver, pancreas, biliary tree, gallblader).  ONLY PLAIN';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre1.removeAttribute('class', 'hide'); 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                  }else if(exaptMRI == 'MRCP'  && conpt == 'WITH AND WITHOUT CONTRAST'){
                    document.getElementById('alert').innerHTML= ' ';
                    document.getElementById('alert1A').innerHTML = ' ';
                    document.getElementById('alert1B').innerHTML= ' ';
                    document.getElementById('alert1E').innerHTML = 'ONLY PLAIN';
                    document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS'; 
                    classpre1.setAttribute('class', 'hide'); 
                    classpre2.setAttribute('class', 'hide'); 
                    classpre4.setAttribute('class', 'hide');
                    classpre3.setAttribute('class', 'hide');
                    classpre.setAttribute('class', 'hide'); 
                  }else if((exaptMRI == 'MRA ABDOMEN (RENAL/ABD/AORTA)' || exaptMRI == 'MRA IAC' || exaptMRI == 'MRA LOWER EXT' || exaptMRI == 'MRA NECK' || exaptMRI == 'MRA PELVIS' || exaptMRI == 'MRI ANKLE LT' || 
                   exaptMRI == 'MRI ANKLE RT' || exaptMRI == 'MRI ANKLE BL' || exaptMRI == 'MRI BRANCHIAL PLEXUS' || exaptMRI == 'MRI BRAIN' || exaptMRI == 'MRI CERVICAL SPINE' || exaptMRI == 'MRI COCCYX' || 
                   exaptMRI == 'MRI COCCYX & SACRUM' || exaptMRI == 'MRI ELBOW LT' || exaptMRI == 'MRI ELBOW RT' || exaptMRI == 'MRI ELBOW BIL' || exaptMRI == 'MRI FACE' || exaptMRI == 'MRI FINGER' || 
                   exaptMRI == 'MRI FOOT LT' || exaptMRI == 'MRI FOOT RT' || exaptMRI == 'MRI FOOT BIL' || exaptMRI == 'MRI HAND LT' || exaptMRI == 'MRI HAND RT' || exaptMRI == 'MRI HAND BIL' || 
                   exaptMRI == 'MRI HIP LT' || exaptMRI == 'MRI HIP RT' || exaptMRI == 'MRI HIP BIL' || exaptMRI == 'MRI IAC' || exaptMRI == 'MRI KNEE LT' || exaptMRI == 'MRI KNEE RT' || 
                   exaptMRI == 'MRI KNEE BIL' || exaptMRI == 'MRI LOWER EXT LT (JOINT)' || exaptMRI == 'MRI LOWER EXT LT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT RT (JOINT)' || 
                   exaptMRI == 'MRI LOWER EXT RT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI LUMBAR PLEXUS' || 
                   exaptMRI == 'MRI LUMBAR SPINE' || exaptMRI == 'MRI LUMBARSACRAL' || exaptMRI == 'MRI MANDIBLE' || exaptMRI == 'MRI ORBITS' || exaptMRI == 'MRI PARANASAL SINUS' || exaptMRI == 'MRI PAROTID' || 
                   exaptMRI == 'MRI PITUITARY' || exaptMRI == 'MRI SACRO ILIAC JOINT' || exaptMRI == 'MRI SACRUM' || exaptMRI == 'MRI SHOULDER LT' || 'MRI SHOULDER RT' || 
                   exaptMRI == 'MRI SHOULDER BIL' || exaptMRI == 'MRI TESTICULAR' || exaptMRI == 'MRI TMJ' || exaptMRI == 'MRI TRIGEMINAL NERVE' || exaptMRI == 'MRI UPPER EXT LT (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT LT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT RT (JOINT)' || exaptMRI == 'MRI UPPER EXT RT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT BIL (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI WRIST LT' || exaptMRI == 'MRI WRIST RT' || exaptMRI == 'MRI WRIST BIL' || exaptMRI == 'MRV ABDOMEN' || exaptMRI == 'MRV HEAD' || 
                   exaptMRI == 'MRV NECK' || exaptMRI == 'MRV PELVIS') && conpt == 'WITH CONTRAST'){
    
                  document.getElementById('alert').innerHTML= ' ';
                  document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS';
                  document.getElementById('alert1B').innerHTML= examstat;
                  document.getElementById('alert1A').innerHTML= ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre2.removeAttribute('class', 'hide');
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide'); 
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
    
                  }else if((exaptMRI == 'MRA ABDOMEN (RENAL/ABD/AORTA)' || exaptMRI == 'MRA IAC' || exaptMRI == 'MRA LOWER EXT' || exaptMRI == 'MRA NECK' || exaptMRI == 'MRA PELVIS' || exaptMRI == 'MRI ANKLE LT' || 
                   exaptMRI == 'MRI ANKLE RT' || exaptMRI == 'MRI ANKLE BL' || exaptMRI == 'MRI BRANCHIAL PLEXUS' || exaptMRI == 'MRI BRAIN' || exaptMRI == 'MRI CERVICAL SPINE' || exaptMRI == 'MRI COCCYX' || 
                   exaptMRI == 'MRI COCCYX & SACRUM' || exaptMRI == 'MRI ELBOW LT' || exaptMRI == 'MRI ELBOW RT' || exaptMRI == 'MRI ELBOW BIL' || exaptMRI == 'MRI FACE' || exaptMRI == 'MRI FINGER' || 
                   exaptMRI == 'MRI FOOT LT' || exaptMRI == 'MRI FOOT RT' || exaptMRI == 'MRI FOOT BIL' || exaptMRI == 'MRI HAND LT' || exaptMRI == 'MRI HAND RT' || exaptMRI == 'MRI HAND BIL' || 
                   exaptMRI == 'MRI HIP LT' || exaptMRI == 'MRI HIP RT' || exaptMRI == 'MRI HIP BIL' || exaptMRI == 'MRI IAC' || exaptMRI == 'MRI KNEE LT' || exaptMRI == 'MRI KNEE RT' || 
                   exaptMRI == 'MRI KNEE BIL' || exaptMRI == 'MRI LOWER EXT LT (JOINT)' || exaptMRI == 'MRI LOWER EXT LT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT RT (JOINT)' || 
                   exaptMRI == 'MRI LOWER EXT RT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI LUMBAR PLEXUS' || 
                   exaptMRI == 'MRI LUMBAR SPINE' || exaptMRI == 'MRI LUMBARSACRAL' || exaptMRI == 'MRI MANDIBLE' || exaptMRI == 'MRI ORBITS' || exaptMRI == 'MRI PARANASAL SINUS' || exaptMRI == 'MRI PAROTID' || 
                   exaptMRI == 'MRI PELVIS' || exaptMRI == 'MRI PITUITARY' || exaptMRI == 'MRI SACRO ILIAC JOINT' || exaptMRI == 'MRI SACRUM' || exaptMRI == 'MRI SHOULDER LT' || 'MRI SHOULDER RT' || 
                   exaptMRI == 'MRI SHOULDER BIL' || exaptMRI == 'MRI TESTICULAR' || exaptMRI == 'MRI TMJ' || exaptMRI == 'MRI TRIGEMINAL NERVE' || exaptMRI == 'MRI UPPER EXT LT (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT LT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT RT (JOINT)' || exaptMRI == 'MRI UPPER EXT RT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT BIL (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI WRIST LT' || exaptMRI == 'MRI WRIST RT' || exaptMRI == 'MRI WRIST BIL' || exaptMRI == 'MRV ABDOMEN' || exaptMRI == 'MRV HEAD' || 
                   exaptMRI == 'MRV NECK' || exaptMRI == 'MRV PELVIS') && conpt == 'WITHOUT CONTRAST'){
    
                    document.getElementById('alert').innerHTML= ' ';
                  document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS';
                  document.getElementById('alert1B').innerHTML= 'SCHEDULE SINCE FIRST TIME IN THE MORNING TO LAST HOUR';
                  document.getElementById('alert1A').innerHTML= ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre2.setAttribute('class', 'hide');
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide'); 
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
    
                  }else if((exaptMRI == 'MRA ABDOMEN (RENAL/ABD/AORTA)' || exaptMRI == 'MRA IAC' || exaptMRI == 'MRA LOWER EXT' || exaptMRI == 'MRA NECK' || exaptMRI == 'MRA PELVIS' || exaptMRI == 'MRI ANKLE LT' || 
                   exaptMRI == 'MRI ANKLE RT' || exaptMRI == 'MRI ANKLE BL' || exaptMRI == 'MRI BRANCHIAL PLEXUS' || exaptMRI == 'MRI BRAIN' || exaptMRI == 'MRI CERVICAL SPINE' || exaptMRI == 'MRI COCCYX' || 
                   exaptMRI == 'MRI COCCYX & SACRUM' || exaptMRI == 'MRI ELBOW LT' || exaptMRI == 'MRI ELBOW RT' || exaptMRI == 'MRI ELBOW BIL' || exaptMRI == 'MRI FACE' || exaptMRI == 'MRI FINGER' || 
                   exaptMRI == 'MRI FOOT LT' || exaptMRI == 'MRI FOOT RT' || exaptMRI == 'MRI FOOT BIL' || exaptMRI == 'MRI HAND LT' || exaptMRI == 'MRI HAND RT' || exaptMRI == 'MRI HAND BIL' || 
                   exaptMRI == 'MRI HIP LT' || exaptMRI == 'MRI HIP RT' || exaptMRI == 'MRI HIP BIL' || exaptMRI == 'MRI IAC' || exaptMRI == 'MRI KNEE LT' || exaptMRI == 'MRI KNEE RT' || 
                   exaptMRI == 'MRI KNEE BIL' || exaptMRI == 'MRI LOWER EXT LT (JOINT)' || exaptMRI == 'MRI LOWER EXT LT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT RT (JOINT)' || 
                   exaptMRI == 'MRI LOWER EXT RT (NON-JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (JOINT)' || exaptMRI == 'MRI LOWER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI LUMBAR PLEXUS' || 
                   exaptMRI == 'MRI LUMBAR SPINE' || exaptMRI == 'MRI LUMBARSACRAL' || exaptMRI == 'MRI MANDIBLE' || exaptMRI == 'MRI ORBITS' || exaptMRI == 'MRI PARANASAL SINUS' || exaptMRI == 'MRI PAROTID' || 
                   exaptMRI == 'MRI PELVIS' || exaptMRI == 'MRI PITUITARY' || exaptMRI == 'MRI SACRO ILIAC JOINT' || exaptMRI == 'MRI SACRUM' || exaptMRI == 'MRI SHOULDER LT' || 'MRI SHOULDER RT' || 
                   exaptMRI == 'MRI SHOULDER BIL' || exaptMRI == 'MRI TESTICULAR' || exaptMRI == 'MRI TMJ' || exaptMRI == 'MRI TRIGEMINAL NERVE' || exaptMRI == 'MRI UPPER EXT LT (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT LT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT RT (JOINT)' || exaptMRI == 'MRI UPPER EXT RT (NON-JOINT)' || exaptMRI == 'MRI UPPER EXT BIL (JOINT)' || 
                   exaptMRI == 'MRI UPPER EXT BIL (NON-JOINT)' || exaptMRI == 'MRI WRIST LT' || exaptMRI == 'MRI WRIST RT' || exaptMRI == 'MRI WRIST BIL' || exaptMRI == 'MRV ABDOMEN' || exaptMRI == 'MRV HEAD' || 
                   exaptMRI == 'MRV NECK' || exaptMRI == 'MRV PELVIS') && conpt == 'WITH AND WITHOUT CONTRAST'){
    
                  document.getElementById('alert').innerHTML= ' ';
                  document.getElementById('alert1').innerHTML = 'SCHEDULE ALL CENTERS';
                  document.getElementById('alert1B').innerHTML= examstat;
                  document.getElementById('alert1A').innerHTML= ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
                  classpre2.removeAttribute('class', 'hide');
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide'); 
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
    
                  }else{
    
                  classpre.setAttribute('class', 'hide');
                  classpre1.setAttribute('class', 'hide'); 
                  classpre2.setAttribute('class', 'hide');
                  classpre3.setAttribute('class', 'hide');
                  classpre4.setAttribute('class', 'hide');
                  document.getElementById('alert').innerHTML= ' ';
                  document.getElementById('alert1').innerHTML = ' ';
                  document.getElementById('alert1A').innerHTML= ' ';
                  document.getElementById('alert1B').innerHTML= ' ';
                  document.getElementById('alert1E').innerHTML = ' ';
              }
    
          });
    }    
    function addOptions(domElement, arrayd) {
          var select = document.getElementsByName(domElement)[0];
    
          for (value in arrayd) {
          var option = document.createElement("option");
          option.text = arrayd[value];
          select.add(option);
      }
    }
    
    function edad(){
      var Q4A = "PT IS ";
      var Q5A = " YEARS OLD "
      var text1 = "LABS NEEDED";
      var text2 = " ";
      document.addEventListener('change',
        function(){
           var Bdate = document.getElementById('dob').value;
           var contrast = document.getElementById('contrast').value
              var Bday = +new Date(Bdate);
              var op = ~~((Date.now() - Bday) / (31557600000));
        document.getElementById('edadpt').innerHTML = Q4A + op + Q5A;
        document.getElementById('edadpt2').innerHTML= Q4A + op + Q5A;
                if((contrast == 'WITH CONTRAST' || contrast == 'WITH AND WITHOUT CONTRAST') && op >= 60){
                  //alert('LABS NEEDED');
                  document.getElementById('edadptLB').innerHTML = text1;
                }else{
                  document.getElementById('edadptLB').innerHTML = text2;
                }
        });
}

function validacionExam(){
    var classpre = document.getElementById('classpre');
    var classpre1 = document.getElementById('classpre1');
    var classpre2 = document.getElementById('classpre2');
    var classpre3 = document.getElementById('classpre3');
    document.addEventListener('change',

        function(){
          var exapt = document.getElementById('autocomplete-input-ct').value;
          var conpt = document.getElementById('subcategory-contrast').value;
          var examstat = 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING'+'<br>'+'';
          var examstat2 = 'SCHEDULE SINCE FIRST TIME IN THE MORNING TO LAST HOUR';
       
                  if(exapt == 'CTA RUNOFF (CTA ABD/PEL/LOWER EXT)' && conpt == 'WITH CONTRAST') {
                      document.getElementById('alert').innerHTML= 'CTA RUNOFF (CTA ABD/PEL/LOWER EXT): LOCATIONS: ALL CENTERS'+'<br>'+'CTA RUNOFF: CTA ABD/PELVIS/LOWER EXT' ;
                      classpre3.removeAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      document.getElementById('alert4').innerHTML = 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING. DO NOT SCHEDULE AFTER 1 PM IN HIALEAH AND CORAL WAY. ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert').innerHTML = ' ';
                    }else if(exapt == 'CT ABD/PELVIS' && conpt == 'WITHOUT CONTRAST') {
                      document.getElementById('alert1').innerHTML= 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert').innerHTML = ' ';
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.removeAttribute("class", "hide");
                    }else if(exapt == 'CT ABD/PELVIS' && conpt == 'WITH CONTRAST'){
                      document.getElementById('alert1').innerHTML= 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert').innerHTML = ' ';
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.removeAttribute("class", "hide");
                    }else if(exapt == 'CT ABD/PELVIS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                      document.getElementById('alert1').innerHTML= 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert').innerHTML = ' ';
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.removeAttribute("class", "hide");
                    }else if(exapt == 'CTA RUNOFF (CTA ABD/PEL/LOWER EXT)' && conpt == 'WITHOUT CONTRAST'){
                      classpre3.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML= ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                    }else if(exapt == 'CTA RUNOFF (CTA ABD/PEL/LOWER EXT)' && conpt == 'WITH AND WITHOUT CONTRAST'){ 
                      classpre3.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML= ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                    }else if(exapt == 'CT CHEST HIGH RES'){
                      classpre3.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML='CT CHEST HIGH RES IS NEVER W/CON'+'<br>'+'IF THE RX SAID: CT CHEST HR W/CON == CHANGE RX';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                    }else if(exapt == 'CT DENTA SCAN'){
                      classpre3.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML = 'WE DO SCAN ONLY. NO INTERPRETATION'+'<br>'+'ONLY SELF PAY. INSURANCE DONT COVER ESTHETIC EXAMS.';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                    }else if(exapt == 'CT CALCIUM SCORING'){
                      classpre3.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      stencalcium.removeAttribute("class", "hide");
                      document.getElementById('alert').innerHTML =''
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = 'ONLY MIAMI AND HIALEAH'+'<br>'+'<br>' + 'DO NOT DRINK COFFEINE BEVERAGES OR SMOKE THE DAY BEFORE THE EXAM TO PREVENT THE HEART RATE FROM GOING UP TO MORE THAN 80 BEATS PER MINUTE OTHERWISE THE PATIENTS PROBLEM CANNOT BE OBSERVED IN THE EXAM.'+'<br>'+ 'IF THE PT HEART RATE IS GREATER OR MINOR, THE PROCEDURE MUST BE CHANGED FOR CT CHEST PLAIN.'+'<br>' +'<br>'+'IF THE INSURANCE DOES NOT COVER THE CT CALCIUM SCORING, IT MUST BE DONE SELFPAY. WHEN A PATIENT HAS A STENT IN THE HEART, A CT CALCIUM SCORING CANNOT BE PERFORMED.'+'<br>'+'<br>'+ 'WE DO NOT DO CTA CALCIUM SCORING.';;
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                    }else if(exapt == 'CT ENTEROGRAPHY' && conpt == 'WITH AND WITHOUT CONTRAST'){
                      classpre.removeAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML= ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = '<i class="small check_circle"></i>' + 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING.'+ '<br>' + '<i class="small check_circle"></i>' ;
                    }else if(exapt == 'CT ENTEROGRAPHY' && conpt == 'WITH CONTRAST'){
                      classpre.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert4').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert5').innerHTML = ' ';
                    }else if(exapt == 'CT ENTEROGRAPHY' && conpt == 'WITHOUT CONTRAST'){
                      classpre.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert4').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert5').innerHTML = ' ';
                  }else if(exapt == 'CT UROGRAM' && conpt == 'WITH AND WITHOUT CONTRAST') {
                      classpre2.removeAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert4').innerHTML = 'SCHEDULE 1 HOUR AFTER THE CENTER OPENING.' ;
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                  }else if(exapt == 'CT UROGRAM' && conpt == 'WITH CONTRAST'){
                      classpre2.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert4').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert2').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                  }else if(exapt == 'CT UROGRAM' && conpt == 'WITHOUT CONTRAST'){
                      classpre2.setAttribute("class", "hide");
                      classpre.setAttribute("class", "hide");
                      classpre3.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert4').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert2').innerHTML = 'ALWAYS DONE WITH AND WITHOUT CONTRAST';
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                  }else{
                      classpre.setAttribute("class", "hide");
                      classpre2.setAttribute("class", "hide");
                      classpre1.setAttribute("class", "hide");
                      document.getElementById('alert').innerHTML = ' ';
                      document.getElementById('alert1').innerHTML= ' ';
                      document.getElementById('alert2').innerHTML = ' ';
                      document.getElementById('alert4').innerHTML = ' ';
                      document.getElementById('alert5').innerHTML = ' ';
                      classpre3.setAttribute("class", "hide");
                    }

                  if(exapt == 'CT CHEST' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT CHEST' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT CHEST' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ABDOMEN' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ABDOMEN' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ABDOMEN' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT KNEE RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT KNEE RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT KNEE RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat
                  }
                  if(exapt == 'CT KNEE LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT KNEE LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT KNEE LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT KNEE BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT KNEE BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT KNEE BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat;

                  }
                  if(exapt == 'CT SHOULDER RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat;
                  }
                  if(exapt == 'CT SHOULDER RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT SHOULDER RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT SHOULDER LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT SHOULDER LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT SHOULDER LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT SHOULDER BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT SHOULDER BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT SHOULDER BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat;
                  }
                  if(exapt == 'CT ELBOW RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat;
                  }
                  if(exapt == 'CT ELBOW RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ELBOW RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat ;
                  }
                  if(exapt == 'CT ELBOW LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ELBOW LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ELBOW LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ELBOW BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT ELBOW BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ELBOW BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT HAND RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT HAND LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT HAND BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT HAND BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT WRIST RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT WRIST RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT WRIST RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT WRIST LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT WRIST LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT WRIST LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT WRIST BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT WRIST BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT WRIST BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT FOOT RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT FOOT LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT BL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT FOOT BL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT FOOT BL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ABDOMENT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT ABDOMENT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ABDOMENT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT ABD/ADRENALS' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                    document.getElementById('alert5').innerHTML = 'SCHEDULE ABDOMEN';
                    //SCHEDULE ABDOMEN
                  }
                  if(exapt == 'CT ABD/ADRENALS' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ABD/ADRENALS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT ABD/PELVIS RENAL PROTOCOL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ALWAYS WITHOUT ';
                    document.getElementById('alert2').innerHTML = 'DO NOT EAT 4 HOURS BEFORE THE EXAM ';
                    document.getElementById('alert5').innerHTML = ' ';

                  }
                  if(exapt == 'CT ABD/PELVIS RENAL PROTOCOL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = 'DO NOT EAT 4 HOURS BEFORE THE EXAM ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ABD/PELVIS RENAL PROTOCOL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ALWAYS WITHOUT ';
                    document.getElementById('alert2').innerHTML = 'DO NOT EAT 4 HOURS BEFORE THE EXAM ';
                    document.getElementById('alert5').innerHTML = ' ';
                  }
                  if(exapt == 'CT PELVIS' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT PELVIS' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT PELVIS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT BRAIN' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT BRAIN' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT BRAIN' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT LUMBAR SPINE' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT LUMBAR SPINE' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT LUMBAR SPINE' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT CERVICAL SPINE' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT CERVICAL SPINE' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT CERVICAL SPINE' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT THORACIC SPINE' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT THORACIC SPINE' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT THORACIC SPINE' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT NECK SOFT TISSUE' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT NECK SOFT TISSUE' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT NECK SOFT TISSUE' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT COCCYS AND SACRUM' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT COCCYS AND SACRUM' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT COCCYS AND SACRUM' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT TMJ' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT TMJ' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT TMJ' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT ORBITS' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT ORBITS' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT ORBITS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT IAC' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT IAC' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT IAC' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT PITUITARY GLAND' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT PITUITARY GLAND' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT PITUITARY GLAND' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT UPPER EXT RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT UPPER EXT RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT UPPER EXT RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT UPPER EXT LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT UPPER EXT LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT UPPER EXT LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT LOWER EXT RT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT LOWER EXT RT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT LOWER EXT RT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT LOWER EXT LF' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT LOWER EXT LF' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT LOWER EXT LF' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT PARANASAL SINUS' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT PARANASAL SINUS' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT PARANASAL SINUS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT MAXILLOFACIAL' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT MAXILLOFACIAL' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT MAXILLOFACIAL' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT MASTOID' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CT MASTOID' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT MASTOID' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT TEMPORAL BONES' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CT TEMPORAL BONES' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CT TEMPORAL BONES' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA ABDOMEN' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA ABDOMEN' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA ABDOMEN' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA HEAD' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA HEAD' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA HEAD' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "" + "<br>" + "";
                  }
                  if(exapt == 'CTA CHEST' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA CHEST' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA CHEST' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA PELVIS' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA PELVIS' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA PELVIS' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA UPPER EXT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA UPPER EXT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA UPPER EXT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA LOWER EXT' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA LOWER EXT' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA LOWER EXT' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + " ";
                  }
                  if(exapt == 'CTA NECK' && conpt == 'WITH CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  if(exapt == 'CTA NECK' && conpt == 'WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat2;
                  }
                  if(exapt == 'CTA NECK' && conpt == 'WITH AND WITHOUT CONTRAST'){
                    classpre.setAttribute("class", "hide");
                    classpre2.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                    document.getElementById('alert4').innerHTML = examstat + "<br>" + "";
                  }
                  else if(exapt == 'CT CHEST LOW DOSE' && conpt == 'WITH AND WITHOUT CONTRAST') {
                    classpre2.removeAttribute("class", "hide");
                    classpre.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert4').innerHTML = 'ALWAYS WITHOUT';
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert2').innerHTML = ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                }else if(exapt == 'CT CHEST LOW DOSE' && conpt == 'WITH CONTRAST'){
                    classpre2.setAttribute("class", "hide");
                    classpre.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert4').innerHTML = 'ALWAYS WITHOUT';
                    document.getElementById('alert2').innerHTML = '';
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                }else if(exapt == 'CT CHEST LOW DOSE' && conpt == 'WITHOUT CONTRAST'){
                    classpre2.setAttribute("class", "hide");
                    classpre.setAttribute("class", "hide");
                    classpre3.setAttribute("class", "hide");
                    classpre1.setAttribute("class", "hide");
                    document.getElementById('alert4').innerHTML = 'CAN BE TAKEN AS A LUNG CANCER SCREENING FOR PTS IN THE AGE RANGE OF 50 TO 80 YEARS FOR STATE INSURANCE AND BETWEEN 50 TO 77 YEARS FOR COMMERCIAL INSURANCE. THE DIAGNOSIS FOR A LOW DOSE CT SHOULD BE SMOKER, PASSIVE SMOKER OR SMOKER COUGH. IF THE RX SAYS CT CHEST PLAIN WITH ANY OF THE ALREADY MENTIONED DIAGNOSES, THE RX SHOULD BE CHANGED TO CT CHEST LOW DOSE IN PATIENTS 50 YEARS OF AGE AND OLDER. IT SHOULD BE NOTED THAT IF THE PATIENT IS YOUNGER THAN 50 YEARS OLD OR OLDER THAN 80 YEARS OLD, IN ALL CASES IT WILL BE CT CHEST PLAIN.';
                    document.getElementById('alert2').innerHTML = '';
                    document.getElementById('alert').innerHTML = ' ';
                    document.getElementById('alert1').innerHTML= ' ';
                    document.getElementById('alert5').innerHTML = ' ';
                }

        });
  }



/************** CT FINAL ***************/

/**************MRI ********************/
function addtextMRI(){
  document.addEventListener('click',
    function(){

      var radio31 = document.getElementById('r31');
      var radio32 = document.getElementById('r32');
      var radio33 = document.getElementById('r33');
      var radio34 = document.getElementById('r34');
      var nar7 = document.getElementById('nar7');
      var radio35 = document.getElementById('r35');
      var radio36 = document.getElementById('r36');
      var nar8 = document.getElementById('nar8');
      var radio37 = document.getElementById('r37');
      var radio38 = document.getElementById('r38');
      /*var nar9 = document.getElementById('nar9');*/
      var radio39 = document.getElementById('r39');
      var radio40 = document.getElementById('r40');
      var nar10 = document.getElementById('nar10');
      var radio41 = document.getElementById('r41');
      var radio42 = document.getElementById('r42');
      var nar11 = document.getElementById('nar11');
      var radio43 = document.getElementById('r43');
      var radio44 = document.getElementById('r44');
      var nar12 = document.getElementById('nar12');
      var radio45 = document.getElementById('r45');
      var radio46 = document.getElementById('r46');
      var nar13 = document.getElementById('nar13');
      /*var radio47 = document.getElementById('r47');
      var radio48 = document.getElementById('r48');
      var nar14 = document.getElementById('nar14');
      var radio49 = document.getElementById('r49');*/
      var radio50 = document.getElementById('r50');
      var nar16 = document.getElementById('nar16');
      var radio51 = document.getElementById('r51');
      var radio52 = document.getElementById('r52');
      var nar17 = document.getElementById('nar17');
      var radio53 = document.getElementById('r53');
      var radio54 = document.getElementById('r54');
      var nar18 = document.getElementById('nar18');
      var radio55 = document.getElementById('r55');
      var radio57 = document.getElementById('r57');
      var nar19 = document.getElementById('nar19');
      var radio58 = document.getElementById('r58');
      var radio59 = document.getElementById('r59');
      var radio60 = document.getElementById('r60');
      var radio61 = document.getElementById('r61');
      var radio62 = document.getElementById('r62');
      var radio63 = document.getElementById('r63');
      var radio64 = document.getElementById('r64');
      var radio65 = document.getElementById('r65');
      var radio66 = document.getElementById('r66');
      var radio67 = document.getElementById('r67');
      var radio68 = document.getElementById('r68');
      var radio69 = document.getElementById('r69');
      var radio70 = document.getElementById('r70');

      var rclph = document.getElementById('rclph');
      var rclph1= document.getElementById('rclph1');
      var narclph = document.getElementById('narclph');

      var ptneeds1 = document.getElementById('ptneeds1');
      var ptneeds2 = document.getElementById('ptneeds2');
      var ptneeds3 = document.getElementById('ptneeds3');
      var ptneeds4 = document.getElementById('ptneeds4');
      var ptneeds5 = document.getElementById('ptneeds5');
      var ptneeds6 = document.getElementById('ptneeds6');
      var ptneeds7 = document.getElementById('ptneeds7'); 
      var ptneeds8 = document.getElementById('ptneeds8'); 

      if(rclph.checked){
        document.getElementById('label50').innerHTML = rclph.value;
      }
      if(rclph1.checked){
        document.getElementById('label50').innerHTML = rclph1.value;
      }
      if(narclph.checked){
        document.getElementById('label50').innerHTML = narclph.value;
      }
     

      if(radio31.checked){
        document.getElementById('label19').innerHTML = radio31.value;
      }
      if(radio32.checked){
        document.getElementById('label19').innerHTML = radio32.value;
      }
      if(radio33.checked){
        document.getElementById('label20').innerHTML = radio33.value;
        wtnstry.removeAttribute("class", "hide");
      }
      if(radio34.checked){
        document.getElementById('label20').innerHTML = radio34.value;
        wtnstry.setAttribute("class", "hide");
      }
      if(nar7.checked){
        document.getElementById('label20').innerHTML = nar7.value;
      }
      if(radio35.checked){
        document.getElementById('label21').innerHTML = radio35.value;
      }
      if(radio36.checked){
        document.getElementById('label21').innerHTML = radio36.value;
      }
      if(nar8.checked){
        document.getElementById('label21').innerHTML = nar8.value;
      }
      if(radio37.checked){
        document.getElementById('label22').innerHTML = radio37.value;
      }
      if(radio38.checked){
        document.getElementById('label22').innerHTML = radio38.value;
      }
     /* if(nar9.checked){
        document.getElementById('label22').innerHTML = nar9.value;
      }*/
      if(radio39.checked){
        document.getElementById('label23').innerHTML = radio39.value;
      }
      if(radio40.checked){
        document.getElementById('label23').innerHTML = radio40.value;
      }
      if(nar10.checked){
        document.getElementById('label23').innerHTML = nar10.value;
      }
      if(radio41.checked){
        document.getElementById('label24').innerHTML = radio41.value;
      }
      if(radio42.checked){
        document.getElementById('label24').innerHTML = radio42.value;
      }
      if(nar11.checked){
        document.getElementById('label24').innerHTML = nar11.value;
      }
      if(radio43.checked){
        document.getElementById('label27').innerHTML = radio43.value;
      }
      if(radio44.checked){
        document.getElementById('label27').innerHTML = radio44.value;
      }
      if(nar12.checked){
        document.getElementById('label27').innerHTML = nar12.value;
      }
      if(radio45.checked){
				document.getElementById('label28').innerHTML = radio45.value;
        divmetim.removeAttribute("class", "hide");
			}
      if(radio46.checked){
        document.getElementById('label29').innerHTML = radio46.value;
        divmetim.setAttribute("class", "hide");
        document.getElementById('nar35').innerHTML = ' ';
      }
      if(nar13.checked){
        document.getElementById('label29').innerHTML = nar13.value;
        divmetim.setAttribute("class", "hide");
        document.getElementById('nar35').innerHTML = ' ';
      }
      /*if(radio47.checked){
        document.getElementById('label31').innerHTML = radio47.value;
      }
      if(radio48.checked){
        document.getElementById('label31').innerHTML = radio48.value;
      }
      if(nar14.checked){
        document.getElementById('label31').innerHTML = nar14.value;
      }
      if(radio49.checked){
        document.getElementById('label35').innerHTML = radio49.value;
      }
      if(radio50.checked){
        document.getElementById('label35').innerHTML = radio50.value;
      }
      if(nar16.checked){
        document.getElementById('label35').innerHTML = nar16.value;
      }*/
      if(radio51.checked){
        document.getElementById('label36').innerHTML = radio51.value;
      }
      if(radio52.checked){
        document.getElementById('label36').innerHTML = radio52.value;
      }
      if(nar17.checked){
        document.getElementById('label36').innerHTML = nar17.value;
      }
      if(radio53.checked){
        document.getElementById('label37').innerHTML = radio53.value;
      }
      if(radio54.checked){
        document.getElementById('label37').innerHTML = radio54.value;
      }
      if(nar18.checked){
        document.getElementById('label37').innerHTML = nar18.value;
      }
      if(radio55.checked){
        document.getElementById('label38').innerHTML = radio55.value;
        hiifacc.removeAttribute("class", "hide");
      }
      if(radio57.checked){
        document.getElementById('label38').innerHTML = radio57.value;
        hiifacc.setAttribute("class", "hide");
        document.getElementById('label18').innerHTML = '';
      }

      if(nar19.checked){
        document.getElementById('label38').innerHTML = nar19.value;
        hiifacc.setAttribute("class", "hide");
      }
      if(radio58.checked){
        document.getElementById('label41').innerHTML = radio58.value;
      }
      if(radio59.checked){
        document.getElementById('label41').innerHTML = radio59.value;
      
      }
      if(radio60.checked){
        document.getElementById('label42').innerHTML = radio60.value;
        divpthasene.removeAttribute("class", "hide");
      
      }
      if(radio61.checked){
        document.getElementById('label42').innerHTML = radio61.value;
        divpthasene.setAttribute("class", "hide");
      }
      if(radio62.checked){
        document.getElementById('label43').innerHTML = radio62.value;
      
      }
      if(radio63.checked){
        document.getElementById('label43').innerHTML = radio63.value;
      
      }
      if(radio64.checked){
        document.getElementById('label43').innerHTML = radio64.value;
      
      }
      if(radio65.checked){
        document.getElementById('label44').innerHTML = radio65.value;
      
      }
      if(radio66.checked){
        document.getElementById('label44').innerHTML = radio66.value;
      
      }
      if(radio67.checked){
        document.getElementById('label45').innerHTML = radio67.value;
      
      }
      if(radio68.checked){
        document.getElementById('label45').innerHTML = radio68.value;
      
      }
      if(radio69.checked){
        document.getElementById('label46').innerHTML = radio69.value;
      
      }
      if(radio70.checked){
        document.getElementById('label46').innerHTML = radio70.value;
      
      }
      if(ptneeds1.checked){

        divspd.removeAttribute("class", "hide");
        //document.getElementById('label53').innerHTML = " ";
    
      }
      if(ptneeds2.checked){
    
        divspd.setAttribute("class", "hide");
        document.getElementById('label53').innerHTML = ptneeds2.value;
    
      }
      if(ptneeds3.checked){
        document.getElementById('label57').innerHTML = ptneeds3.value;
        nextq1.setAttribute("class", "hide");
        
      }
      if(ptneeds4.checked){

        nextq1.removeAttribute("class", "hide");
        document.getElementById('label57').innerHTML = ptneeds4.value;
      }
      if(ptneeds5.checked){

        nextq2.setAttribute("class", "hide");
        document.getElementById('label58').innerHTML = ptneeds5.value;
      }
      if(ptneeds6.checked){

        nextq2.removeAttribute("class", "hide");
        document.getElementById('label58').innerHTML = ptneeds6.value;
      }
      if(ptneeds7.checked){

        document.getElementById('label59').innerHTML = ptneeds7.value;
        boxhow.removeAttribute("class", "hide");
      }
      if(ptneeds8.checked){
        document.getElementById('label59').innerHTML = ptneeds8.value;
        boxhow.setAttribute("class", "hide");
      }
      
    });
  }

  function loop(){
    var r1 = document.getElementById('r1');
    var nar2 = document.getElementById('nar2');
    var r2 = document.getElementById('r2');
    var nar3 = document.getElementById('nar3');
    var r3 = document.getElementById('r3');
    var nar4 = document.getElementById('nar4');
    var r5 = document.getElementById('r5');
    var nar6 = document.getElementById('nar6');
    var r7 = document.getElementById('r7');
    var nar8 = document.getElementById('nar8');
    var r9 = document.getElementById('r9');
    var nar10 = document.getElementById('nar10');
  
    if(r1.checked){
      document.getElementById('loop').innerHTML = 'PT HAS LOOP RECORDER AND THE DOCTOR IS ABLE TO TURN IT OFF';
      divpthas.setAttribute("class", "hide");
    }
    if(nar2.checked){
      document.getElementById('loop').innerHTML = ' ';
      divpthas.setAttribute("class", "hide");
    }
    if(r2.checked){
      document.getElementById('loop').innerHTML = 'PT HAS BLADDER STIMULATOR AND THE DOCTOR IS ABLE TO TURN IT OFF';
      divpthas.setAttribute("class", "hide");
    }
    if(nar3.checked){
      document.getElementById('loop').innerHTML = ' ';
      divpthas.setAttribute("class", "hide");
    }
    if(r3.checked){
      document.getElementById('loop').innerHTML = 'PT HAS NEURO SPINAL STIMULATOR AND THE PATIENT HAS THE INFORMATION AND THE CONTROL OF THE STIMULATOR';
      divpthas.setAttribute("class", "hide");
    }
    if(nar4.checked){
      document.getElementById('loop').innerHTML = ' ';
      divpthas.setAttribute("class", "hide");
    }
    if(r5.checked){
      document.getElementById('loop').innerHTML = 'THE INSURANCE GIVES THE PATIENTS A MONTHLY INSULIN PUMP. THE PATIENTS SHOULD SCHEDULE THEIR MRI APPOINTMENT WHEN THE DOCTOR REMOVES THE INSULIN PUMP FOR EXCHANGE BEFORE PLACING THE NEW INSULIN PUMP';
      divpthas.setAttribute("class", "hide");
      
    }
    if(nar6.checked){
      document.getElementById('loop').innerHTML = ' ';
      divpthas.setAttribute("class", "hide");
    }
    if(r7.checked){
      document.getElementById('loop').innerHTML = 'IF THE PT HAS HAIR EXTENSIONS IT IS POSSIBLE TO DO THE MRI, IF THE PATIENT REMOVE THE EXTENSIONS ';
      divpthas.setAttribute("class", "hide");
    }
    /*if(nar8.checked){
      document.getElementById('loop').innerHTML='';

    }*/

    if(r9.checked){
      document.getElementById('loop').innerHTML = 'PT HAS STENT WITHOUT ID IT IS POSSIBLE TO DO THE MRI, IF THE PATIENT HAS THE SURGEON CONTACT';
      divpthas.removeAttribute("class", "hide");
    }
    if(nar10.checked){
      document.getElementById('loop').innerHTML = ' ';


  }
}



function allergicct(){
  var r1 = document.getElementById('r1');
  var nar2 = document.getElementById('nar2');
  var r2 = document.getElementById('r2');
  var nar3 = document.getElementById('nar3');
  var r3 = document.getElementById('r3');
  var nar4 = document.getElementById('nar4');
 

  if(r1.checked){
    document.getElementById('allergicct').innerHTML = 'PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTORS OFFICE TO REQUEST AN ALLERGY PROTOCOL OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI ';
    divpthas.setAttribute("class", "hide");
  }
  if(nar2.checked){
    document.getElementById('allergicct').innerHTML = ' ';
    divpthas.setAttribute("class", "hide");
  }
  if(r2.checked){
    document.getElementById('allergicct').innerHTML = 'PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTORS OFFICE TO REQUEST AN ALLERGY PROTOCOL OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI';
    divpthas.setAttribute("class", "hide");
  }
  if(nar3.checked){
    document.getElementById('allergicct').innerHTML = ' ';
    divpthas.setAttribute("class", "hide");
  }
  if(r3.checked){
    document.getElementById('allergicct').innerHTML = 'PLEASE PASS THE ACCOUNT TO ADMINISTRATION, WHO WILL CALL THE DOCTORS OFFICE TO REQUEST AN ALLERGY PROTOCOL OR JUST TO CHANGE THE PRESCRIPTION FOR AN MRI';
    divpthas.setAttribute("class", "hide");
  }
  if(nar4.checked){
    document.getElementById('allergicct').innerHTML = ' ';
    divpthas.setAttribute("class", "hide");
  }
  
}





function alertncapp(){
  var r26 = document.getElementById('r26');
  var nar1 = document.getElementById('nar1');
  var r27 = document.getElementById('r27');
  var nar2 = document.getElementById('nar28');
  var r28 = document.getElementById('r28');
  var nar3 = document.getElementById('nar3');
  var r29 = document.getElementById('r29');
  var nar4 = document.getElementById('nar4');
  var r30 = document.getElementById('r30');
  var nar5 = document.getElementById('nar5');
  

  if(r26.checked){
    document.getElementById('alertnconap').innerHTML = 'DO NOT CONTINUE WITH APPOINTMENT BUT CONTINUE WITH THE DEMOGRAFIC AND GIVE THE ACCOUNT TO ADMINISTRATION';
  }
  if(nar1.checked){
    document.getElementById('alertnconap').innerHTML = ' ';
  }
  if(r27.checked){
    document.getElementById('alertnconap').innerHTML = 'DO NOT CONTINUE WITH APPOINTMENT BUT CONTINUE WITH THE DEMOGRAFIC AND GIVE THE ACCOUNT TO ADMINISTRATION';
  }
  if(nar2.checked){
    document.getElementById('alertnconap').innerHTML = ' ';
  }
  if(r28.checked){
    document.getElementById('alertnconap').innerHTML = 'DO NOT CONTINUE WITH APPOINTMENT BUT CONTINUE WITH THE DEMOGRAFIC AND GIVE THE ACCOUNT TO ADMINISTRATION';
  }
  if(nar3.checked){
    document.getElementById('alertnconap').innerHTML = ' ';
  }
  if(r29.checked){
    document.getElementById('alertnconap').innerHTML = 'DO NOT CONTINUE WITH APPOINTMENT BUT CONTINUE WITH THE DEMOGRAFIC AND GIVE THE ACCOUNT TO ADMINISTRATION';
  }
  if(nar4.checked){
    document.getElementById('alertnconap').innerHTML = ' ';
  }
  if(r30.checked){
    document.getElementById('alertnconap').innerHTML = 'DO NOT CONTINUE WITH APPOINTMENT BUT CONTINUE WITH THE DEMOGRAFIC AND GIVE THE ACCOUNT TO ADMINISTRATION';
  }
  if(nar5.checked){
    document.getElementById('alertnconap').innerHTML = ' ';
  }
 
}

function addInputText1MRI(){
  var inpdropMRI =  document.getElementById('inpdropMRI');
	document.addEventListener('change',
		function(){
			var labsfree = document.getElementById('labsfreeMRI').value;
			var complefr = 'LABS FOR FREE BY';

			document.getElementById('label48').innerHTML = complefr +'\t'+ labsfree.toUpperCase() + ', ';
      //document.getElementById('em2').innerHTML = ' ';
      if(inpdropMRI.checked){
        document.getElementById('label48').innerHTML = " ";
      }
		});
}

function addInputText2MRI(){
  var inpdrop2MRI = document.getElementById('inpdrop2MRI');
	document.addEventListener('change',
		function(){
			var inpptelMRI = document.getElementById('inpptelMRI').value;
			var complelad = 'PT HAS RECENT LABS';

			document.getElementById('label47').innerHTML = complelad +'\t'+ inpptelMRI.toUpperCase() + ', ';
      document.getElementById('em2MRI').innerHTML = 'PLESE SEND THE LABS TO OUR E-MAIL: SCHEDULING@VITALIMG.COM';
      if(inpdrop2MRI.checked){
        document.getElementById('label47').innerHTML = ' ';
        document.getElementById('em2MRI').innerHTML = ' ';
      }
    });
}
function addInputText3MRI(){
  var inpdrop1MRI = document.getElementById('inpdrop1MRI');
	document.addEventListener('change',
		function(){
			var sedfaxMRI = document.getElementById('sedfaxMRI').value;
			var complewl = 'FROM DR OFFICE WILL FAX LABS, ';

			document.getElementById('label49').innerHTML = sedfaxMRI.toUpperCase() +'\t'+ complewl;
      document.getElementById('em2').innerHTML = ' ';
      if(inpdrop1MRI.checked){
        document.getElementById('label49').innerHTML = ' ';
      }
		});
}
function addInputText4MRI(){
  var inpdrop3MRI = document.getElementById('inpdrop3MRI');
	document.addEventListener('change',
		function(){
			var dochaslabsMRI = document.getElementById('dochaslabsMRI').value;
			var compledoch = 'DOCTORS OFFICE HAS LABS ON';

			document.getElementById('label51').innerHTML = compledoch +'\t'+ dochaslabsMRI.toUpperCase() + ', ';
      document.getElementById('em2').innerHTML = ' ';
      if(inpdrop3MRI.checked){
        document.getElementById('label51').innerHTML = ' ';
        //document.getElementById('ladoct').innerHTML = ' ';
      }
    });
}
function addInputText5MRI(){
  var ptneeds2 = document.getElementById('ptneeds2');
  var ptneeds1 = document.getElementById('ptneeds1');
  var ptneeds7 = document.getElementById('ptneeds7');
  var ptneeds8 = document.getElementById('ptneeds8');
	document.addEventListener('change',
		function(){
			var inpspn = document.getElementById('inpspn').value;
      var inpspnm = document.getElementById('inpspnm').value;
      var spe ='SPECIAL NEED: ';
			//var compleinsp = 'DOCTORS OFFICE HAS LABS ON';
			document.getElementById('label40').innerHTML = spe + inpspn.toUpperCase() + ', ';
      document.getElementById('label60').innerHTML =  inpspnm.toUpperCase() + ', ';
      if(ptneeds1.checked) {
        document.getElementById('label53').innerHTML = specilneedno.value;
        document.getElementById('label40').innerHTML = ' ';
      }
      if(ptneeds2.checked) {
        document.getElementById('label40').innerHTML = ' ';
        document.getElementById('label53').innerHTML = ' ';
      }
      if(ptneeds7.checked) {    
        document.getElementById('label59').innerHTML =  ' ';
        document.getElementById('label60').innerHTML =  ptneeds7.value;
      }
      if(ptneeds8.checked) {
        document.getElementById('label60').innerHTML =  ' ';
        document.getElementById('label59').innerHTML =  ' ';
      }
		});
}
/*function addInputText5MRI(){
  var inpdrop5MRI = document.getElementById('inpdrop5MRI');
  var specilneedno = document.getElementById('specilneedno');
	document.addEventListener('change',
		function(){
			var inpspn = document.getElementById('inpspn').value;
      var spe ='SPECIAL NEED: ';
			//var compleinsp = 'DOCTORS OFFICE HAS LABS ON';
			document.getElementById('label40').innerHTML = spe + inpspn.toUpperCase() + ', ';
      if(specilneedno.checked) {
        document.getElementById('label53').innerHTML = specilneedno.value;
        document.getElementById('label40').innerHTML = ' ';
      }
      if(inpdrop5MRI.checked) {
        document.getElementById('label40').innerHTML = ' ';
        document.getElementById('label53').innerHTML = ' ';
      }
		});
}*/
function addInputText6(){
  document.addEventListener('change',
		function(){
			var suphne = document.getElementById('suphne').value;
      var spnst = document.getElementById('spnst');
			var cspn = 'SURGEON PH NUMBER ';
			document.getElementById('label26').innerHTML = cspn + suphne + ', ';
      if(spnst.checked) {
        document.getElementById('label26').innerHTML = ' ';
      }
		});
}
function addInputText8(){
  document.addEventListener('change',
    function(){
      var inpwli = document.getElementById('inpwli').value;
      var radwl = document.getElementById('radwl');
      document.getElementById('label25').innerHTML = inpwli.toUpperCase() + ' POUNDS, ';
      if(radwl.checked){
        document.getElementById('label25').innerHTML = ' ';
      }
    });
}



function addInputText12(){
  document.addEventListener('change',
    function(){
      var inpwlit = document.getElementById('inpwlit').value;
      var radw = document.getElementById('radw');
      document.getElementById('label20').innerHTML = inpwlit.toUpperCase() + ' POUNDS, ';
      if(radw.checked){
        document.getElementById('label20').innerHTML = ' ';
      }
    });
}
function addInputText7(){
  document.addEventListener('change',
		function(){
			var suphn = document.getElementById('suphn').value;
      var spnmt = document.getElementById('spnmt');
			var cspn = 'SURGEON PH NUMBER ';
			document.getElementById('label32').innerHTML = cspn + suphn + ', ';
      if(spnmt.checked) {
        document.getElementById('label32').innerHTML = ' ';
      }
		});
}
function addInputText9(){
  document.addEventListener('change',
    function(){
      var fgtr = document.getElementById('inwmetd').value;
      var nar35 = document.getElementById('nar35');
      document.getElementById('label30').innerHTML = fgtr.toUpperCase() + ', ';
      if(nar35.checked){
        document.getElementById('label30').innerHTML = ' ';
      }
    });
}
function addInputText10(){
  document.addEventListener('change',
		function(){
			var sunam = document.getElementById('sunam').value;
      var snst = document.getElementById('snst');
			var cspnt = 'SURGEON NAME ';
			document.getElementById('label52').innerHTML = cspnt + sunam.toUpperCase() + ', ';
      if(snst.checked) {
        document.getElementById('label52').innerHTML = ' ';
      }
		});
}
function addInputText11(){
  document.addEventListener('change',
		function(){
			var sunamm = document.getElementById('sunamm').value;
      var snstm = document.getElementById('snstm');
			var cspnte = 'SURGEON NAME ';
			document.getElementById('label33').innerHTML = cspnte + sunamm.toUpperCase() + ', ';
      if(snstm.checked) {
        document.getElementById('label33').innerHTML = ' ';
      }
		});
}
function addInputTextTransAppMRI(){
  document.addEventListener('change',
    function(){
      var inputapprt = document.getElementById('inputapprt').value;
      var r56 = document.getElementById('r56');
      var compllastt = 'APPROVED BY:';
      document.getElementById('label39').innerHTML = compllastt + inputapprt.toUpperCase()+',';
      if(r56.checked){
        document.getElementById('label39').innerHTML = r56.value;
      }
    });
}

/************** MRI FINAL ***************/
/********NM */


function validdosarrayNM(){
  document.addEventListener('change',
    function(){

      var exaptNM = document.getElementById('autocomplete-input-nm').value;
      //var ecvad = document.getElementById('ecvad');
    
 
        
          if(exaptNM == 'NM STRESS TEST'){
              
            document.getElementById('ecvad').innerHTML= "PLEASE SCHEDULED THE 2ND DAY IN THE SAME DAY";

              }else{
                document.getElementById('ecvad').innerHTML= " ";
              }

      });
}    



/************** US **************/
function addtextUS(){
  document.addEventListener('click',
    function(){

      var radio70 = document.getElementById('r70');
      var radio71 = document.getElementById('r71');
      var radio72 = document.getElementById('r72');
      var radio73 = document.getElementById('r73');
      var radio75 = document.getElementById('r75');
      var radio76 = document.getElementById('r76');
      var radio77 = document.getElementById('r77');
      var radio78 = document.getElementById('r78');
      var radio79 = document.getElementById('r79');
      var radio80 = document.getElementById('r80');
      var radio81 = document.getElementById('r81');




      if(radio70.checked){
        document.getElementById('label1').innerHTML = radio70.value;
      }
      if(radio71.checked){
        document.getElementById('label1').innerHTML = radio71.value;
      }
      if(radio72.checked){
        document.getElementById('label1').innerHTML = radio72.value;
      }
      if(radio73.checked){
        document.getElementById('label2').innerHTML = radio73.value;
        hiifaccUS.removeAttribute("class", "hide");
      }
      if(radio75.checked){
        document.getElementById('label2').innerHTML = radio75.value;
        hiifaccUS.setAttribute("class", "hide");
        document.getElementById('label3').innerHTML ='';
      }
      if(radio76.checked){
        document.getElementById('label5').innerHTML = radio76.value;
      }
      if(radio77.checked){
        document.getElementById('label5').innerHTML = radio77.value;
      }
      if(radio78.checked){
        document.getElementById('label6').innerHTML = radio78.value;
        divpthas.removeAttribute('class', 'hide');
      }
      if(radio79.checked){
        document.getElementById('label6').innerHTML = radio79.value;
        divpthas.setAttribute('class', 'hide');
      }
      if(radio80.checked){
        document.getElementById('label7').innerHTML = radio79.value;
      }
      if(radio81.checked){
        document.getElementById('label8').innerHTML = radio79.value;
      }
      
      
      

    });
  }

  function addInputText5US(){
    
    document.addEventListener('change',
      function(){
        var inpspnUS = document.getElementById('inpspnUS').value;
        var inpdrop5US = document.getElementById('inpdrop5US');
        var specilneedno = document.getElementById('specilneedno');
        //var compleinsp = 'DOCTORS OFFICE HAS LABS ON';
        var us='SPECIAL NEED: '
        document.getElementById('label4').innerHTML = us + inpspnUS.toUpperCase()  + ', ';
        if(specilneedno.checked) {
          document.getElementById('label9').innerHTML = specilneedno.value;
          document.getElementById('label4').innerHTML = ' ';
        }
        if(inpdrop5US.checked) {
          document.getElementById('label9').innerHTML = ' ';
          document.getElementById('label4').innerHTML = ' ';
        }
      });
  }


  function addInputTextTransAppUS(){
    document.addEventListener('change',
      function(){
        var inputapprtUS = document.getElementById('inputapprtUS').value;
        var r74 = document.getElementById('r74')
        var compllastt = 'APPROVED BY:';
        document.getElementById('label3').innerHTML = compllastt +inputapprtUS.toUpperCase() + ',';
        if(r74.checked){
          document.getElementById('label3').innerHTML = r74.value;
        }
      });

  }


/**************US FINAL ********/
    function gene(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;// 
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;

    
      document.getElementById('textarea1').innerHTML = p11 + p1 + p43 + p7 + p42 +  p54 + p55 + p23 + p24 + p26 + p52 +  p27 + p15 + p6 +  p12 + p13 + p14  + p16 + p17 + p38 + p18
                                                      + p19 + p25 + p9  + p20 + p21 +  p22 + p10 + p2 + p3 + p5 + p4   + p28 + p29 + p30 + p31 
                                                      + p32 + p33 + p34 + p35 + p50 + p36 + p37 
                                                      + p39 + p40 + p41 + p44 + p45 + p46 + p47 + p48 + p49  
                                                      + p51 + p53 + p56 +p57+p58+p59+p60;

    }


    function geneSP(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
    
      document.getElementById('textarea1').innerHTML = p11 + p1 + p43 + p42 +  p54 + p55 + p23 + p24 + p26 + p52 +  p27 + p15 + p6 +  p12 + p13 + p14  + p16 + p17 + p38 + p18
                                                      + p19 + p25 + p9  + p20 + p21 +  p22 + p10 + p2 + p3 + p5 + p4   + p28 + p29 + p30 + p31 
                                                      + p32 + p33 + p34 + p35 + p50 + p36 + p37 
                                                      + p39 + p40 + p41 + p44 + p45 + p46 + p47 + p48 + p49  
                                                      + p51 + p53 ;
    

    }


    function geneNM(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
    
      document.getElementById('textarea1').innerHTML = p11 + p1 + p43 + p42 +  p54 + p55 + p23 + p24 + p26 + p52 +  p27 + p15 + p6 +  p12 + p13 + p14  + p16 + p17 + p38 + p18
                                                      + p19 + p25 + p9  + p20 + p21 +  p22 + p10 + p2 + p3 + p5 + p4   + p28 + p29 + p30 + p31 
                                                      + p32 + p33 + p34 + p35 + p50 + p36 + p37 
                                                      + p39 + p40 + p41 + p44 + p45 + p46 + p47 + p48 + p49  
                                                      + p51 + p53 + p56 +p57+p58+p59+p60;
    

    }



    function geneUS(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
    
      document.getElementById('textarea1').innerHTML = p1 + p2 + p4 + p5+ p6 + p7 + p8+p9 + p16  ;
    

    }

    
    function geneXRAY(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
    
      document.getElementById('textarea1').innerHTML = p11 + p1 + p43 + p42 +  p54 + p55 + p23 + p24 + p26 + p52 +  p27 + p15 + p6 +  p12 + p13 + p14  + p16 + p17 + p38 + p18
                                                      + p19 + p25 + p9  + p20 + p21 +  p22 + p10 + p2 + p3 + p5 + p4   + p28 + p29 + p30 + p31 + p32 + p33 + p34 + p35 + p50 + p36 + p37 
                                                      + p39 + p40 + p41 + p44 + p45 + p46 + p47 + p48 + p49 + p51 + p53 ;
    

    }



    function geneCT(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML;
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
      document.getElementById('textarea1').innerHTML =  p8 + p16 + p12 + p7 + p54 + p55+p9+p10+ p18 + p4 + p20 + p1 + p5 + p6 + p11 + p17 + p2 + p3 + p19 + p13 + p14 +p15;
    

    }
    function geneMMO(){
      var p1 = document.getElementById('label1').innerHTML;
      var p2 = document.getElementById('label2').innerHTML;
      var p3 = document.getElementById('label3').innerHTML
      var p4 = document.getElementById('label4').innerHTML;
      var p5 = document.getElementById('label5').innerHTML;//
      var p6 = document.getElementById('label6').innerHTML;//
      var p7 = document.getElementById('label7').innerHTML;//
      var p8 = document.getElementById('label8').innerHTML;
      var p9 = document.getElementById('label9').innerHTML;
      var p10 = document.getElementById('label10').innerHTML;
      var p11 = document.getElementById('label11').innerHTML;//
      var p12 = document.getElementById('label12').innerHTML;//
      var p13 = document.getElementById('label13').innerHTML;//
      var p14 = document.getElementById('label14').innerHTML;//
      var p15 = document.getElementById('label15').innerHTML;
      var p16 = document.getElementById('label16').innerHTML;
      var p17 = document.getElementById('label17').innerHTML;
      var p18 = document.getElementById('label18').innerHTML;
      var p19 = document.getElementById('label19').innerHTML;
      var p20 = document.getElementById('label20').innerHTML;
      var p21 = document.getElementById('label21').innerHTML;
      var p22 = document.getElementById('label22').innerHTML;
      var p23 = document.getElementById('label23').innerHTML;
      var p24 = document.getElementById('label24').innerHTML;
      var p25 = document.getElementById('label25').innerHTML;
      var p26 = document.getElementById('label26').innerHTML;
      var p27 = document.getElementById('label27').innerHTML;
      var p28 = document.getElementById('label28').innerHTML;
      var p29 = document.getElementById('label29').innerHTML;
      var p30 = document.getElementById('label30').innerHTML;
      var p31 = document.getElementById('label31').innerHTML;
      var p32 = document.getElementById('label32').innerHTML;
      var p33 = document.getElementById('label33').innerHTML;
      var p34 = document.getElementById('label34').innerHTML;
      var p35 = document.getElementById('label35').innerHTML;
      var p36 = document.getElementById('label36').innerHTML;
      var p37 = document.getElementById('label37').innerHTML;
      var p38 = document.getElementById('label38').innerHTML;
      var p39 = document.getElementById('label39').innerHTML;
      var p40 = document.getElementById('label40').innerHTML;
      var p41 = document.getElementById('label41').innerHTML;
      var p42 = document.getElementById('label42').innerHTML;
      var p43 = document.getElementById('label43').innerHTML;
      var p44 = document.getElementById('label44').innerHTML;
      var p45 = document.getElementById('label45').innerHTML;
      var p46 = document.getElementById('label46').innerHTML;
      var p47 = document.getElementById('label47').innerHTML;
      var p48 = document.getElementById('label48').innerHTML;
      var p49 = document.getElementById('label49').innerHTML;
      var p50 = document.getElementById('label50').innerHTML;
      var p51 = document.getElementById('label51').innerHTML;
      var p52 = document.getElementById('label52').innerHTML;
      var p53 = document.getElementById('label53').innerHTML;
      var p54 = document.getElementById('label54').innerHTML;
      var p55 = document.getElementById('label55').innerHTML;
      var p56 = document.getElementById('label56').innerHTML;
      var p57 = document.getElementById('label57').innerHTML; 
      var p58 = document.getElementById('label58').innerHTML;
      var p59 = document.getElementById('label59').innerHTML;
      var p60 = document.getElementById('label60').innerHTML;
    
      document.getElementById('textarea1').innerHTML =  p11 + p2 + p19 + p1 + p3 + p9 + p8 + p13 + p22 + p24 +  p16 + p23 + p7 + p25 +p26 +p27;

     

    }

    function copyNote(){

      var copyText = document.getElementById('textarea1');
      copyText.select()
      document.execCommand('copy');
      //alert('Copied the text: ' + copyText.value);
    }

    function copyPhone(){

      var copyText1 = document.getElementById('boxtel');
      copyText1.select()
      document.execCommand('copy');
      //alert('Copied the text: ' + copyText.value);
    }
 
    
    // An on keydown event handler to copy to clipboard when [ctrl]+[C] is pressed
    // Exclusively for the "date" inputs.
    $(document).on('keydown', 'input[type="date"]', function(e){
    
      if( e.which == 67 && e.ctrlKey ){
          var copiedDate = $(this).val();
          //console.log( copiedDate );
    
          // First, get the value and fix the date format from YYYY-MM-DD to MM/DD/YYYY
    
          var tempDate = copiedDate.split("-");
          var year = tempDate.shift();
          //console.log( year );
          tempDate.push(year);
          var fixedDate = tempDate.join("/");
          console.log( fixedDate );
    
          // Then temporarly change the input type from "date" to "text"
    
          $(this).attr("type","text").val(fixedDate);
    
    
          // Use the copy to clipboard function
          $(this).select();
          copyToClipboard($(this));
    
          // Set the input type back to "date" a small delay later
          var that=$(this);
          setTimeout(function(){
              that.attr("type","date").val(copiedDate);  // And restore original value
          },20)
      }
    });



    function edad(){
      var Q4A = "PT IS ";
      var Q5A = " YEARS OLD "
      var text1 = "LABS NEEDED";
      var text2 = " ";
      document.addEventListener('change',
        function(){
           var Bdate = document.getElementById('dob').value;
           //var contrast = document.getElementById('contrast').value
              var Bday = +new Date(Bdate);
              var op = ~~((Date.now() - Bday) / (31557600000));
        document.getElementById('edadpt').innerHTML = Q4A + op + Q5A;
        //document.getElementById('edadpt2').innerHTML= Q4A + op + Q5A;
                /*if((contrast == 'WITH CONTRAST' || contrast == 'WITH AND WITHOUT CONTRAST') && op >= 60){
                  //alert('LABS NEEDED');
                  document.getElementById('edadptLB').innerHTML = text1;
                }else{
                  document.getElementById('edadptLB').innerHTML = text2;
                }*/
                if(op >= 40){
                  document.getElementById('mmott').innerHTML = 'SCHEDULE SCREENING RUTINE';
                }
                if(op >= 35 && op <=39){
                  document.getElementById('mmott').innerHTML = 'WITH FAMILY CANCER HISTORY SCREENING RUTINE';
                }
                if(op < 35){
                  document.getElementById('mmott').innerHTML = 'WITH PERSONAL CANCER HISTORY SCREENING RUTINE';
                }
        });



    }

    function addInputText2(){
      var inpdrop2 = document.getElementById('inpdrop2');
      document.addEventListener('change',
        function(){
          var inpptel = document.getElementById('inpptel').value;
          var complelad = 'PT HAS RECENT LABS';
    
          document.getElementById('label2').innerHTML = complelad +'\t'+ inpptel.toUpperCase() + ', ';
          document.getElementById('em2').innerHTML = 'PLESE SEND THE LABS TO OUR E-MAIL: SCHEDULING@VITALIMG.COM';
          if(inpdrop2.checked){
            document.getElementById('label2').innerHTML = ' ';
            document.getElementById('em2').innerHTML = ' ';
          }
        });
    }
    function addInputText1(){
      var inpdrop =  document.getElementById('inpdrop');
      document.addEventListener('change',
        function(){
          var labsfree = document.getElementById('labsfree').value;
          var complefr = 'LABS FOR FREE BY';
    
          document.getElementById('label13').innerHTML = complefr +'\t'+ labsfree.toUpperCase() + ', ';
          document.getElementById('em2').innerHTML = ' ';
          if(inpdrop.checked){
            document.getElementById('label13').innerHTML = " ";
          }
        });
    }
    function addInputText3(){
      var inpdrop1 = document.getElementById('inpdrop1');
      document.addEventListener('change',
        function(){
          var sedfax = document.getElementById('sedfax').value;
          var complewl = 'FROM DR OFFICE WILL FAX LABS, ';
    
          document.getElementById('label14').innerHTML = sedfax.toUpperCase() +'\t'+ complewl;
          document.getElementById('em2').innerHTML = ' ';
          if(inpdrop1.checked){
            document.getElementById('label14').innerHTML = ' ';
          }
        });
    }
    function addInputText4(){
      var inpdrop3 = document.getElementById('inpdrop3');
      document.addEventListener('change',
        function(){
          var dochaslabs = document.getElementById('dochaslabs').value;
          var compledoch = 'DOCTORS OFFICE HAS LABS ON';
    
          document.getElementById('label15').innerHTML = compledoch +'\t'+ dochaslabs.toUpperCase() + ', ';
          document.getElementById('em2').innerHTML = ' ';
          //document.getElementById('ladoct').innerHTML = 'PLESE SEND THE LABS TO OUR E-MAIL: SCHEDULING@VITALIMG.COM OR BY SMS 833/204-5444';
          if(inpdrop3.checked){
            document.getElementById('label15').innerHTML = ' ';
            //document.getElementById('ladoct').innerHTML = ' ';
          }
        });
    }
    function addInputText(){
      var inpdrop4 = document.getElementById('inpdrop4');
      document.addEventListener('change',
        function(){
          var nameref = document.getElementById('inputdoc').value;
          var complanmeref = 'FROM DOCTOR OFFICE WILL FAX PRESCRIPTION, ';
          document.getElementById('label16').innerHTML = nameref.toUpperCase() +'\t'+ complanmeref; 
          if(inpdrop4.checked){
            document.getElementById('label16').innerHTML = ' ';
          }
        });
    }

    function addInputText5(){
      document.addEventListener('change',
        function(){
          var inpspn = document.getElementById('inpspn').value;
          var specilneedno = document.getElementById('specilneedno'); 
          var inpdrop5 = document.getElementById('inpdrop5');
          var spe = "SPECIAL NEED : "
          //var compleinsp = 'DOCTORS OFFICE HAS LABS ON';
          document.getElementById('label17').innerHTML = spe + inpspn.toUpperCase() + ', ';
          if(specilneedno.checked){
            document.getElementById('label19').innerHTML= specilneedno.value + ", ";
            document.getElementById('label17').innerHTML= ' ';
          }
          if(inpdrop5.checked) {
            document.getElementById('label19').innerHTML= ' ';
            document.getElementById('label17').innerHTML = ' ';
          }
        });
    }
    function addInputTextTransApp(){
      document.addEventListener('change',
        function(){
          var inputapprt = document.getElementById('inputapprt').value;
          var r20 = document.getElementById('r20');
          var compllastt = 'APPROVED BY:';
          document.getElementById('label18').innerHTML = compllastt + inputapprt.toUpperCase() + ", ";
          if(r20.checked){
            document.getElementById('label18').innerHTML = '';
          }
        });
    
    }
    function centersUS(){
      document.addEventListener('click',
          function(){
            var r80 = document.getElementById('r80');
            var r81 = document.getElementById('r81');
            var r82 = document.getElementById('r82');
            var r83 = document.getElementById('r83');
            var r84 = document.getElementById('r84');
            var r85 = document.getElementById('r85');
  
              if(r80.checked){
                document.getElementById('centerprUS').innerHTML='7101 S.W 99TH AV SUITE 106 MIAMI, FL 33173' ;
                
                
              }
              if(r81.checked){
                document.getElementById('centerprUS').innerHTML='610 WASHINGTON AV HOMESTEAD, FL 33030';
              }
              if(r82.checked){
                document.getElementById('centerprUS').innerHTML='3150 SW 22 STREET CORAL WAY MIAMI, FL 33146';
              }
              if(r83.checked){
                document.getElementById('centerprUS').innerHTML='3320 PALM AV HIALEAH, FL 33012 - WOMEN CENTER 3333 PALM AV HIALEAH, FL 33012';
              }
              if(r84.checked){
                document.getElementById('centerprUS').innerHTML='3155 NW 82ND AV SUITE 201 DORAL, FL 33122 ';
              }
              if(r85.checked){
                document.getElementById('centerprUS').innerHTML='1100 NE 125 STREET NORTH MIAMI, FL 33161 ';
              }
          });
  }
  
  
  $(function() {
    $('#autoinsu').bind("change", function(){
      //var divotherdoc = document.getElementById('divotherdoc');
      var $input = $(this);
  
        if($input.val() == 'AETNA UNITED AIRLINES PLAN' || $input.val() == 'POSITIVE HEALTH CARE' ||
           $input.val() == 'AVMED JACKSON FIRST(GROUP)' || $input.val() == 'AETNA ID W UNIVERSITY OF MIAMI**HIGHS**' || 
           $input.val() == 'UNIVERSITY OF MIAMI' || $input.val() == 'BCBS OF PENNSYLVANIA' || 
           $input.val() == 'UHC FLONEX' || $input.val() =='UHC SPECTERA VISION' || $input.val() == 'AMERIHEALTH CARITAS OF FLORIDA NEXT' || 
           $input.val() == 'MEDICARE HPMP / FLORIDA COMPLETE CARE' || $input.val() =='MEDICAID LIMITED TO FAMILY PLANNING SERVICES'|| 
           $input.val() =='MEDICAID LIMITED TO OUTPATIENT, INPATIENT, ER, ETC SERVICES' || $input.val() =='CHILDRENS MEDICAID PLAN FOR HIGHS' || $input.val() =='COMMUNITY CARE WITH MEDICAID' || 
           $input.val() ==  'FIRST HEALTH NETWORK' || $input.val() =='ALLIANCE (ONLY)' || $input.val() == 'GLOBAL EXCELL (ONLY)' || $input.val() == 'GERBER INSURANCE' ||  
           $input.val() =='INDEPENDENCE NETWORK' || $input.val() == 'POSITIVE HEALTHCARE'|| $input.val() =='PREVENTIVE MEDICAL PROGRAM' || $input.val() =='MASS HEALTH' || 
           $input.val() =='EMBLEM HEALTH' || $input.val() =='UNIVISTA'  || $input.val() =='HUSKY' || $input.val() =='FREEDOM'  ){
  
          document.getElementById('npfi').innerHTML = "NOT PROVIDERS FOR INSURANCE";
          //othq.setAttribute("class", "hide");
          //flhso.setAttribute("class", "hide");
        }
  
        else if($input.val() == 'OTHER INSURANCE'){
  
          document.getElementById('npfi').innerHTML = " ";
          //othq.removeAttribute("class", "hide");
          //flhso.setAttribute("class", "hide");

        }


        
  
        else if($input.val() == 'FLORIDA HS'){
  
          document.getElementById('npfi').innerHTML = "SCHEDULE FROM 8 - 5:30 PM  PM SAT 9 - 1 PM " + "<br>" + " FROM DESK CALL FHS AT THE APPT TIME" + "<br>" +"TO GET AUTH AND COPAY"+ "<br>" +"IF FHS CALLING TO SCHED GET COPAY"+ "<br>" +"IF PT CALLING CHECK PRICE LIST"+"<br>"+"TO GIVE THEM AN IDEA OF THE COPAY";
          //othq.setAttribute("class", "hide");
          //flhso.removeAttribute("class", "hide");
  
        }

        else {
          document.getElementById('npfi').innerHTML = " ";
        }
  
  
     });
  });

  $(function() {
    $('#vitwork').bind("change", function(){
      //var divotherdoc = document.getElementById('divotherdoc');
      var $input = $(this);
  
        if($input.val() == 'DAVID CLAVIJO 3321' || $input.val() == 'EDISON MARTINEZ 3378' ||
           $input.val() == 'JUAN DAVID LOSADA 3264 /SCANNING' || $input.val() == 'SOFIA ENRIQUEZ 3313/ VERIF' || 
           $input.val() == 'UNIVERSITY OF MIAMI' || $input.val() == 'BCBS OF PENNSYLVANIA' || 
           $input.val() == 'UHC FLONEX' || $input.val() =='UHC SPECTERA VISION' || $input.val() == 'AMERIHEALTH CARITAS OF FLORIDA NEXT' || 
           $input.val() == 'MEDICARE HPMP / FLORIDA COMPLETE CARE' || $input.val() =='MEDICAID LIMITED TO FAMILY PLANNING SERVICES'|| 
           $input.val() =='MEDICAID LIMITED TO OUTPATIENT, INPATIENT, ER, ETC SERVICES' || $input.val() =='CHILDRENS MEDICAID PLAN FOR HIGHS' || $input.val() =='COMMUNITY CARE WITH MEDICAID' || 
           $input.val() ==  'FIRST HEALTH NETWORK' || $input.val() =='ALLIANCE (ONLY)' || $input.val() == 'GLOBAL EXCELL (ONLY)' || $input.val() == 'GERBER INSURANCE' ||  
           $input.val() =='INDEPENDENCE NETWORK' || $input.val() == 'POSITIVE HEALTHCARE'|| $input.val() =='PREVENTIVE MEDICAL PROGRAM' || $input.val() =='MASS HEALTH' || 
           $input.val() =='EMBLEM HEALTH' || $input.val() =='UNIVISTA'  || $input.val() =='HUSKY' || $input.val() =='FREEDOM'  ){
  
          document.getElementById('npfi').innerHTML = "NOT PROVIDERS FOR INSURANCE";
          //othq.setAttribute("class", "hide");
          //flhso.setAttribute("class", "hide");
        }
  
        else if($input.val() == 'OTHER INSURANCE'){
  
          document.getElementById('npfi').innerHTML = " ";
          //othq.removeAttribute("class", "hide");
          //flhso.setAttribute("class", "hide");

        }


        
  
        else if($input.val() == 'FLORIDA HS'){
  
          document.getElementById('npfi').innerHTML = "SCHEDULE FROM 8 - 5:30 PM  PM SAT 9 - 1 PM " + "<br>" + " FROM DESK CALL FHS AT THE APPT TIME" + "<br>" +"TO GET AUTH AND COPAY"+ "<br>" +"IF FHS CALLING TO SCHED GET COPAY"+ "<br>" +"IF PT CALLING CHECK PRICE LIST"+"<br>"+"TO GIVE THEM AN IDEA OF THE COPAY";
          //othq.setAttribute("class", "hide");
          //flhso.removeAttribute("class", "hide");
  
        }

        else {
          document.getElementById('npfi').innerHTML = " ";
        }
  
  
     });
  });



/*****************MMO**********************/
  function addtextMMO(){
    document.addEventListener('click',
      function(){
        var radio1 = document.getElementById('r1');
        var radio2 = document.getElementById('r2');
        var nar1 = document.getElementById('nar1');
        var radio3 = document.getElementById('r3');
        var radio4 = document.getElementById('r4');
        var nar2 = document.getElementById('nar2');
        var radio5 = document.getElementById('r5');
        var radio6 = document.getElementById('r6');
        var nar3 = document.getElementById('nar3');
        var radio7 = document.getElementById('r7');
        var hiifac = document.getElementById('hiifac');
        var radio8 = document.getElementById('r8');
        var nar4 = document.getElementById('nar4');
        var radio9 = document.getElementById('r9');
        var radio10 = document.getElementById('r10');
        var radio11 = document.getElementById('r11');
        var nar5 = document.getElementById('nar5');
        var radio12 = document.getElementById('r12');
       // var radio13 = document.getElementById('r13');
        var nar6 = document.getElementById('nar6');
       // var radio14 = document.getElementById('r14');
        var radio15 = document.getElementById('r15');
        var nar7 = document.getElementById('nar7');
        var radio16 = document.getElementById('r16');
        var nar8 = document.getElementById('nar8');
        var radio17 = document.getElementById('r17');
        var nar9 = document.getElementById('nar9');
        var radio18 = document.getElementById('r18');
        var nar10 = document.getElementById('nar10');
        var radio19 = document.getElementById('r19');
        var radio20 = document.getElementById('r20');
        var nar11 = document.getElementById('nar11');
        var radio21 = document.getElementById('r21');
        var hiifacc = document.getElementById('hiifacc');
        var radio22 = document.getElementById('r22');
        var nar12 = document.getElementById('nar12');
        var radio23 = document.getElementById('r23');
        var nar13 = document.getElementById('nar13');
        var radio24 = document.getElementById('r24');
        var radio25 = document.getElementById('r25');
        var radio30 = document.getElementById('r30');
        var nar15 = document.getElementById('nar15');
        var radio31 = document.getElementById('r31');
        var nar16 = document.getElementById('nar16');
        var exaptMMO = document.getElementById('autocomplete-input-mmo').value;
        var noprap = document.getElementById('noprap');
        var radio33 = document.getElementById('r33');
        var radio34 = document.getElementById('r34');
        var nar17 = document.getElementById('nar17');
        var radio35 = document.getElementById('r35');
        var radio36 = document.getElementById('r36');
        var nar18 = document.getElementById('nar18');
        var radio37 = document.getElementById('r37');
        var radio38 = document.getElementById('r38');
        var nar19 = document.getElementById('nar19');
       
  
        if(radio7.checked){
          document.getElementById('label7').innerHTML = radio7.value;
          lastmmowh.setAttribute("class", "hide");
          lastmmowhyes.removeAttribute("class", "hide"); 
          
        }
        if(radio8.checked){
          document.getElementById('label7').innerHTML = radio8.value;
          lastmmowh.removeAttribute("class", "hide");
          lastmmowhyes.setAttribute("class", "hide");
        }
        
        
        if(radio9.checked){
          document.getElementById('label8').innerHTML = radio9.value;
        }
        if(radio10.checked){
          document.getElementById('label8').innerHTML = radio10.value;
          noprap.innerHTML = ' ';
        }
         if(radio11.checked){
          document.getElementById('label9').innerHTML = radio11.value;
        }
        if(exaptMMO == "MMO DIAGNOSTIC" && radio30.checked && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO DIAGNOSTIC" && nar15.checked && radio11.checked){
          noprap.innerHTML = ' ';
        }
        if(exaptMMO == "MMO DIAGNOSTIC" && radio31.checked && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO SPOT" && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO DIAGNOSTIC 3D TOMOSYNTHESIS"  && radio30.checked  && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO DIAGNOSTIC 3D TOMOSYNTHESIS"  && nar16.checked && radio11.checked){
          noprap.innerHTML = ' ';
        }
        if(exaptMMO == "MMO DIAGNOSTIC 3D TOMOSYNTHESIS"  && radio31.checked && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO SPOT 3D TOMOSYNTHESIS"  && radio11.checked){
          noprap.innerHTML = 'DO NOT SCHEDULE EXAM';
        }
        if(exaptMMO == "MMO SCREENING" && radio11.checked){
          noprap.innerHTML = ' ';
        }
        if(exaptMMO == "MMO SCREENING 3D TOMOSYNTHESIS" && radio11.checked){
          noprap.innerHTML = ' ';
        }
        
        if(radio12.checked){
          document.getElementById('label9').innerHTML = radio12.value;
        }
        /*if(radio13.checked){
          document.getElementById('label10').innerHTML = radio13.value;
        }
        
        if(radio14.checked){
          document.getElementById('label10').innerHTML = radio14.value;
        }*/
        if(radio15.checked){
          document.getElementById('label11').innerHTML = radio15.value;
        }
       
         if(radio16.checked){
          document.getElementById('label11').innerHTML = radio16.value;
          document.getElementById('em1').innerHTML = ' ';
        }
       
        if(radio17.checked){
          document.getElementById('label11').innerHTML = radio17.value;
          //document.getElementById('em1').innerHTML = 'PLESE SEND THE RX TO OUR E-MAIL: SCHEDULING@VITALIMG.COM OR SMS:833/204-5444';
        }
        
        if(radio18.checked){
          document.getElementById('label13').innerHTML = radio18.value;
          hiifacc.removeAttribute('class', 'hide');
          //document.getElementById('em2').innerHTML = '';
        }
       
        if(radio19.checked){
          document.getElementById('label13').innerHTML = radio19.value;
        }
        if(radio20.checked){
          document.getElementById('label13').innerHTML = radio20.value;
          hiifacc.setAttribute('class', 'hide');
        }
       
        if(radio22.checked){
          document.getElementById('label16').innerHTML = radio22.value;
        }
        
        if(radio23.checked){
          document.getElementById('label16').innerHTML = radio23.value;
        }
       
        if(radio24.checked){
          document.getElementById('label19').innerHTML = radio24.value;
        }
        if(radio25.checked){
          document.getElementById('label19').innerHTML = radio25.value;
        }
        
        if(radio30.checked){
          document.getElementById('label20').innerHTML = radio30.value;
          document.getElementById('labeldiags').innerHTML = 'PT MUST BRING PRIORS';
        }
        if(nar15.checked){
          document.getElementById('label20').innerHTML = nar15.value;
          document.getElementById('labeldiags').innerHTML = '';
        }
        
        if(radio31.checked){
          document.getElementById('label21').innerHTML = radio31.value;
          document.getElementById('labeldiags1').innerHTML = 'PT MUST BRING PRIORS';
        }
        if(nar16.checked){
          document.getElementById('label21').innerHTML = nar16.value;
          document.getElementById('labeldiags1').innerHTML = '';
        }
       
      });
  }

  function mmowhen(){
    document.addEventListener('change',
    function(){
      var comlt = "LAST MMO: ";
      var lastwhen = document.getElementById('lastwhen').value;
      var lastwhere = document.getElementById('lastwhere').value;
      var lastwhen2 = document.getElementById('lastwhen2').value;
      var radio8 = document.getElementById('r8');
      
      document.getElementById('label27').innerHTML = lastwhen2.toUpperCase();

      if(radio8.checked){
        document.getElementById('label25').innerHTML = comlt + lastwhere.toUpperCase() + " ";
        document.getElementById('label26').innerHTML = lastwhen.toUpperCase();
      }

    });
  }

  function mmo(){
    document.addEventListener('change',
        function(){
          var exaptMMO = document.getElementById('autocomplete-input-mmo').value;
          //var insura = document.getElementById('insura').value;
          var divdiagspo = document.getElementById('divdiagspo');
          var radio1 = document.getElementById('r1');
          var radio2 = document.getElementById('r2');
          var nar1 = document.getElementById('nar1');
          var radio3 = document.getElementById('r3');
          var radio4 = document.getElementById('r4');
          var nar2 = document.getElementById('nar2');
          var radio5 = document.getElementById('r5');
          var radio6 = document.getElementById('r6');
          var radio7 = document.getElementById('r7');
          var radio8 = document.getElementById('r8');
          var nar3 = document.getElementById('nar3');

              if(radio1.checked){
                document.getElementById('label1').innerHTML = radio1.value;
              }
              if(radio2.checked){
                document.getElementById('label1').innerHTML = radio2.value;
              }
              /*if(nar1.checked){
                document.getElementById('label1').innerHTML = nar1.value;
              }*/
              if(radio3.checked){
                document.getElementById('label2').innerHTML = radio3.value;
              }
              if(radio4.checked){
                document.getElementById('label2').innerHTML = radio4.value;
              }
              /*if(nar2.checked){
                document.getElementById('label2').innerHTML = nar2.value;
              }*/
              if(radio5.checked){
                document.getElementById('label3').innerHTML = radio5.value;
              }
              if(radio6.checked){
                document.getElementById('label3').innerHTML = radio6.value;
              }
              /*if(radio7.checked){
                document.getElementById('label26').innerHTML = lastwhen.toUpperCase();
                
              }*/
              /*if(radio8.checked){
                document.getElementById('label25').innerHTML =  comlt + lastwhere.toUpperCase();
                document.getElementById('label27').innerHTML = lastwhen2.toUpperCase();
              }*/
              /*if(nar3.checked){
                document.getElementById('label3').innerHTML = nar3.value;
              }*/
              if(exaptMMO == 'MMO SCREENING'){
                divdiagspo.setAttribute('class', 'hide');
                document.getElementById('laex').innerHTML = ' ';
                document.getElementById('laexx').innerHTML = 'MMO SCREENING FROM MONDAY TO SATURDAY';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS'){
               divdiagspo.setAttribute('class', 'hide');
               document.getElementById('laex').innerHTML = ' ';
               document.getElementById('laexx').innerHTML = 'MMO SCREENING 3D TOMOSYNTHESIS FROM MONDAY TO SATURDAY';
              }
              if(exaptMMO == 'MMO SCREENING' && radio1.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO SCREENING' && radio2.checked){
                document.getElementById('alerdxmmo').innerHTML = ' ';
              }
              if(exaptMMO == 'MMO SCREENING' && radio3.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO SCREENING' && radio4.checked){
                document.getElementById('alerdxmmo').innerHTML = ' ';
              }
              if(exaptMMO == 'MMO SCREENING' && radio5.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO SCREENING' && radio6.checked){
                document.getElementById('alerdxmmo').innerHTML = ' ';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS' && radio1.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS' && radio2.checked){
                document.getElementById('alerdxmmo').innerHTML = ' ';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS' && radio3.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS' && radio4.checked){
                document.getElementById('alerdxmmo').innerHTML = ' ';
              }
              if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS' && radio5.checked){
                document.getElementById('alerdxmmo').innerHTML = 'DO NOT CONTINUE WITH THE APPOITMENT. FILL UP THE DEMOGRAPHIC AND CHANGE THE RX FOR DIAGNOSTIC';
              }
              if(exaptMMO == 'MMO DIAGNOSTIC'){
                divdiagspo.removeAttribute('class', 'hide');
                document.getElementById('laex').innerHTML = ' ';
                document.getElementById('laexx').innerHTML = 'MMO DIAGNOSTIC FROM MONDAY TO FRIDAY';
              }
              if(exaptMMO == 'MMO DIAGNOSTIC 3D TOMOSYNTHESIS'){
                divdiagspo.removeAttribute('class', 'hide');
                document.getElementById('laex').innerHTML = ' ';
                document.getElementById('laexx').innerHTML = ' MMO DIAGNOSTIC 3D TOMOSYNTHESIS FROM MONDAY TO FRIDAY';
              }
              if(exaptMMO == 'MMO SPOT'){
                divdiagspo.setAttribute('class', 'hide');
                document.getElementById('laex').innerHTML = 'IT IS NOT TO DO WITHOUT PRIORS';
                document.getElementById('laexx').innerHTML = 'MMO SPOT FROM MONDAY TO FRIDAY';
              }
              if(exaptMMO == 'MMO SPOT 3D TOMOSYNTHESIS'){
                divdiagspo.setAttribute('class', 'hide');
                document.getElementById('laex').innerHTML = 'IT IS NOT TO DO WITHOUT PRIORS';
                document.getElementById('laexx').innerHTML = 'MMO SPOT 3D TOMOSYNTHESIS FROM MONDAY TO FRIDAY';
              }
        
        });
}

function addInputTextTransAppMMO(){
  document.addEventListener('change',
    function(){
      var inputapprt = document.getElementById('inputapprtMMO').value;
      var r19 = document.getElementById('r19')
      var compllastt = 'APPROVED BY:';
      document.getElementById('label22').innerHTML = compllastt + inputapprt.toUpperCase() + ", ";
      if(r19.checked){
        document.getElementById('label22').innerHTML = r19.value;
      }
    });

}
function addInputText5MMO(){
  
  
	document.addEventListener('change',
		function(){
			var inpspn = document.getElementById('inpspn').value;
      var inpdrop5MMO = document.getElementById('inpspnMMO');
      var specilneedno = document.getElementById('specilneedno');

      var spe = 'SPECIAL NEED: '
			//var compleinsp = 'DOCTORS OFFICE HAS LABS ON';
			document.getElementById('label23').innerHTML = spe + inpspn.toUpperCase()+ ", " ;
      if(specilneedno.checked) {
        document.getElementById('label24').innerHTML = specilneedno.value + ", ";
        document.getElementById('label23').innerHTML = ' ';
             
      }
      if(inpdrop5MMO.checked) {
        document.getElementById('label23').innerHTML = ' ';
        document.getElementById('label24').innerHTML = ' ';
      }
		});
}
/***********FINAL MMO **********/
function arrayUS(){
  document.addEventListener('change',
      function(){
        var exaptUS = document.getElementById('autocomplete-input-us').value;
        var divprep1 = document.getElementById('divprep1');
        var divprep2 = document.getElementById('divprep2');
        var divprep3 = document.getElementById('divprep3');
        var divprep4 = document.getElementById('divprep4');
        var divprep5 = document.getElementById('divprep5');
        var divprep6 = document.getElementById('divprep6');
        var divprep7 = document.getElementById('divprep7');
        var divprep8 = document.getElementById('divprep8');

        if(exaptUS == 'US ABDOMEN COMPLETE'){
          divprep1.removeAttribute('class', 'hide');
          divprep2.setAttribute('class', 'hide'); 
          divprep3.setAttribute('class', 'hide');
          divprep4.setAttribute('class', 'hide');
          divprep5.setAttribute('class', 'hide');
          divprep6.setAttribute('class', 'hide');
          divprep7.setAttribute('class', 'hide');
          divprep8.setAttribute('class', 'hide');
          document.getElementById('alert').innerHTML = '';
          document.getElementById('alert1').innerHTML = ' ';
          document.getElementById('alert2').innerHTML = ' RX : US ABDOMEN : DX: HERNIA, SCHEDULE  ABDOMINAL WALL NO PREPARATION' + '\n' + 'SCHEDULED ONLY IN THE MORNING';
          document.getElementById('alert3').innerHTML = ' ';
          document.getElementById('alert4').innerHTML = 'NEED FASTING ';
          document.getElementById('alert5').innerHTML = ' ';
        }
          else if(exaptUS == 'US ABDOMEN AORTA W/DOPPLER'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = 'THE SAME US AAA'+ '\n'+'NEED FASTING';
          }
          else if(exaptUS == 'US ABDOMEN W/DOPPLER'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US GALLBLADDER'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US GALLBLADDER/LIVER'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US LIVER'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US LLQ'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US LUQ'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US RLQ'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US RUQ'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US PANCREAS'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US SPLEEN'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US UPPER ABDOMINAL'){
            divprep1.removeAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US ABDOMINAL WALL'){
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = 'SCHEDULE IN THE MORNING';
            document.getElementById('alert5').innerHTML = ' ';

          }
          else if(exaptUS == 'US PELVIS'){
            divprep1.setAttribute('class', 'hide');
            divprep2.removeAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
          }
          else if(exaptUS == 'US PELVIC/TRANSVAGINAL'){
            divprep2.removeAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
            document.getElementById('alert2').innerHTML = 'SHCEDULE COMBO (US PELVIC/TRANSVAGINAL) - DONT HAVE THE MESTRUAL CYCLE';
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';

          }
          else if(exaptUS == 'US TRANSVAGINAL/PELVIC'){
            document.getElementById('alert3').innerHTML = 'SCHEDULE ONLY TRANSVAGINAL - NO MESTRUAL CYCLE';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US ELASTOGRAPHY'){
            document.getElementById('alert1').innerHTML = 'US ELASTOGRAPHY: SCHEDULED US LIVER + US ELASTOGRAPHY : FOR THESE TWO EXAMS WE HAVE TO HAVE TWO SEPARATE PRESCRIPTIONS ONE FOR ELASTOGRAPHY AND ONE FOR LIVER WITH DIFFERENT DATES.  SO THAT THE INSURANCE PAY THESE EXAMS. '+'<br>'+ '<br>' +'SCHEDULED ONLY IN THE MORNING'+ '<br>' +'' + '<br>' + 'IF THE PT HAS HAD AN US ABD COMPLETE, US LIVER, US RUQ OR UPPER ABDOMEN, DURING THE SIX MONTHSs BEFORE THE EXAM, SCHEDULED JUST US ELASTOGRAPHY';
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep3.removeAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          } 
          else if(exaptUS == 'US PROSTATE(PELVIS)'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep4.removeAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US PROSTATE(TRANSRECTAL)'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' SCHEDULE IN THE MORNING' + '\n'+ 'NEED FASTING' + ' \n'+ 'NEED 2 ENEMAS' ;
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep5.removeAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }


          else if(exaptUS == 'US TRANSRECTAL'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' SCHEDULE IN THE MORNING' + '\n'+ 'NEED FASTING' + ' \n'+ 'NEED 2 ENEMAS' ;
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep5.removeAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US RENAL ARTERY DOPPLER'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' SCHEDULE IN THE MORNING' + '\n'+ 'NEED FASTING' + ' \n'+ 'NEED 2 ENEMAS';
            document.getElementById('alert2').innerHTML = '  ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep6.removeAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US CAROTID DOPPLER'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep7.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US ARTERIAL PVR UPPER EXT' || exaptUS == 'US ARTERIAL PVR LOWER EXT'){
            document.getElementById('alert').innerHTML = 'SCHEDULE ONLY MIAMI';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');
          }
          else if(exaptUS == 'US ARTERIAL UPPER/LOWER EXT W/ABI INDEX'){
            document.getElementById('alert').innerHTML = 'SCHEDULE ONLY KENDALL';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');

          }
          else if(exaptUS == 'US BLADDER'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.removeAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');

          }
          else if(exaptUS == 'US OB'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' OB DEALS WITH PREGNANCY(WE ONLY DO 1ST TRIMESTRE)';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.removeAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');

          }
          else if(exaptUS == 'US CAROTID ARTERY DOPPLER'){
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = 'WE DO EXTRACRANIAL, WE DONT DO TRASNCRANIAL';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            divprep1.setAttribute('class', 'hide');
            divprep2.setAttribute('class', 'hide');
            divprep3.setAttribute('class', 'hide');
            divprep4.setAttribute('class', 'hide');
            divprep5.setAttribute('class', 'hide');
            divprep6.setAttribute('class', 'hide');
            divprep7.setAttribute('class', 'hide');
            divprep8.setAttribute('class', 'hide');

          }
        else{
          document.getElementById('alert4').innerHTML = ' ';
          document.getElementById('alert').innerHTML = ' ';
          document.getElementById('alert1').innerHTML = ' ';
          document.getElementById('alert2').innerHTML = ' ';
          document.getElementById('alert3').innerHTML = ' ';
          document.getElementById('alert5').innerHTML = ' ';
          divprep1.setAttribute('class', 'hide');
          divprep2.setAttribute('class', 'hide');
          divprep3.setAttribute('class', 'hide');
          divprep4.setAttribute('class', 'hide');
          divprep5.setAttribute('class', 'hide');
          divprep6.setAttribute('class', 'hide');
          divprep7.setAttribute('class', 'hide');
          divprep8.setAttribute('class', 'hide');

        }
    });

  }
  function arrayMMO(){
    document.addEventListener('change',
        function(){
          var exaptMMO = document.getElementById('autocomplete-input-mmo').value;
          
          if(exaptMMO == 'MMO SCREENING'){
            
            document.getElementById('alert').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM : DEODORANT - BRAST POWDER - SPECIAL OILS - LOTION - COLOGNE';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
          }
            else if(exaptMMO == 'MMO SCREENING 3D TOMOSYNTHESIS'){
              
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM : DEODORANT - BRAST POWDER - SPECIAL OILS - LOTION - COLOGNE';
              document.getElementById('alert5').innerHTML = '';
            }
            else if(exaptMMO == 'MMO DIAGNOSTIC'){
              
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING:  DEODORANT - BREAST POWDER - SPECIAL OILS - LOTION - COLOGNE ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM.';
              document.getElementById('alert5').innerHTML = ' ';
            }
            else if(exaptMMO == 'MMO DIAGNOSTIC 3D TOMOSYNTHESIS'){
              
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING:  DEODORANT - BREAST POWDER - SPECIAL OILS - LOTION - COLOGNE ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM.';
              document.getElementById('alert5').innerHTML = ' ';
            }
            else if(exaptMMO == 'MMO SPOT'){
             
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING:  DEODORANT - BREAST POWDER - SPECIAL OILS - LOTION - COLOGNE ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM.';
              document.getElementById('alert5').innerHTML = ' ';
            }
            else if(exaptMMO == 'MMO SPOT 3D TOMOSYNTHESIS'){
             
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = 'DO NOT APPLY ANY THE FOLLOWING:  DEODORANT - BREAST POWDER - SPECIAL OILS - LOTION - COLOGNE ON BREAST AREAS AND UNDER ARM ON DAY OF THE EXAM.';
              document.getElementById('alert5').innerHTML = ' ';
            }
            
          else{
            document.getElementById('alert4').innerHTML = ' ';
            document.getElementById('alert').innerHTML = ' ';
            document.getElementById('alert1').innerHTML = ' ';
            document.getElementById('alert2').innerHTML = ' ';
            document.getElementById('alert3').innerHTML = ' ';
            document.getElementById('alert5').innerHTML = ' ';
            
  
          }
      });
  
    }


    function arrayXRAY(){
      document.addEventListener('change',
          function(){
            var exaptXRAY = document.getElementById('autocomplete-input-xray').value;
            
            if(exaptXRAY == 'XRAY IVP'){
              
              document.getElementById('alert').innerHTML = ' 8 OZ CLEAR LIQUIDS AT 2:00 PM, 3:00 PM 10 OZ MAGNESIUM CITRATE AT 4:00PM (AT ANY PHARMACY, OVER THE COUNTER THEN ONLY CLEAR LIQUIDS NO CAFFEINE DON’T EAT OR DRINK ANYTHING AFTER MID NIGHT OR IN THE MORNING BEFORE EXAM. '
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert4').innerHTML = ' ';
              document.getElementById('alert5').innerHTML = ' ';
            }
                         
            else{
              document.getElementById('alert4').innerHTML = ' ';
              document.getElementById('alert').innerHTML = ' ';
              document.getElementById('alert1').innerHTML = ' ';
              document.getElementById('alert2').innerHTML = ' ';
              document.getElementById('alert3').innerHTML = ' ';
              document.getElementById('alert5').innerHTML = ' ';
              
    
            }
        });
    
      }



      function arrayPET(){
        document.addEventListener('change',
            function(){
              var exaptPET = document.getElementById('autocomplete-input-nm').value;
              console.log(exaptPET);
              
              if(exaptPET == 'PET CT BRAIN'){

                document.getElementById('kklk').innerHTML='No Sugars 24 hours prior to study • Bakery Sweets (cake) • Candy • Juices • Fruits • Anything with sugar.  No Carbohydrates 24 Hours prior to study • Rice • Pasta • Bread • Some Vegetables • And much more  No Exercise day before exam • No insulin injection on day of exam.';
                document.getElementById('kklk2').innerHTML = ' '
               
              }

              if(exaptPET == 'PET CT SKULL BASE TO MID THIGH'){

               
                document.getElementById('kklk').innerHTML = 'No Sugars 24 hours prior to study • Bakery Sweets (cake) • Candy • Juices • Fruits • Anything with sugar.  No Carbohydrates 24 Hours prior to study • Rice • Pasta • Bread • Some Vegetables • And much more  No Exercise day before exam • No insulin injection on day of exam.';
                document.getElementById('kklk2').innerHTML = ' '
                
              }

              if(exaptPET == 'PET CT WHOLE BODY'){

                
                document.getElementById('kklk').innerHTML = 'No Sugars 24 hours prior to study • Bakery Sweets (cake) • Candy • Juices • Fruits • Anything with sugar.  No Carbohydrates 24 Hours prior to study • Rice • Pasta • Bread • Some Vegetables • And much more  No Exercise day before exam • No insulin injection on day of exam.';
                document.getElementById('kklk2').innerHTML = ' '
                
              }

              if(exaptPET == 'NM THYROID UPTAKE & SCAN (DAY 1)'){
                
               
                document.getElementById('kklk2').innerHTML = 'DAY 1 (THYROID UPTAKE SCAN 1ST DAY) EL PT VA A RECIBIR EL MEDICAMENTO (A PILL) VA A IRSE PARA SU CASA O SU TRABAJO Y DEBE REGRESAR 24H DESPUES (THYROD UPTAKE SCAN 2ND DAY) PARA RECIBIR OTRO MEDICAMENTO (INJECTED) Y REALIZARSE EL SCAN. SI EL PT TOMA MEDICAMENTO PARA LA TIROIDE DEBE CONFIRMAR CON SU DOCTOR CUANTOS DIAS ANTES DEBE SUSPENDER EL MEDICAMENTO.';
                document.getElementById('kklk').innerHTML = ' '
              
              }

              if(exaptPET == 'NM THYROID UPTAKE & SCAN (DAY 2)'){

                
                document.getElementById('kklk2').innerHTML = 'DAY 2 (THYROID UPTAKE SCAN 2ND DAY)';
                document.getElementById('kklk').innerHTML = ' '
                
              }
                           
            
          });
      
        }



        

          function arraySP(){
            document.addEventListener('change',
                function(){
                  var exaptSP = document.getElementById('autocomplete-input-slp').value;
                  
                  if(exaptSP == 'SLEEP STUDY (BASELINE)'){
                    
                    document.getElementById('alertsp').innerHTML = 'BRING PIJAMAS: FOR WOMEN ESPECIALLY TWO-PIECE - PERSONAL HYGIENE UTENSILS - BRING MEDICINE FOR THE NIGHT AND THE FOLLOWING MORNING - WE OFFER COFFEE AND COOKIES IN THE MORNING. - DO NOT DRINK COFFEE BEFORE THE EXAM - DO NOT USE HAIR GEL ';
                    document.getElementById('alertsp3').innerHTML = ' MIAMI ====3 BEDS== OVERBOOK 2 CONFIRMED 3 APPOINTMENTS -- HOMESTEAD 3 BEDS OVERBOOK 2 PT CONFIRMED 3 APPOINTMENTS. DORAL ===6 BEDS ====OVERBOOKING 3 PT ==== 6 APPOINTMENTS CONFIRMED - 7 DAYS A WEEK FROM 9:00PM TO 5:00 AM - PRIVATE ROOMS WITH DOUBLE BEDS - ALL CENTERS HAVE RIMAX SEATING WHICH IS NOT COMFORTABLE FOR COMPANIONS - TRANSPORTATION ALL WEEK - WIFI ONLY MIAMI - YOU CAN CHOOSE THE SEX OF THE TECHNICIAN.';
                    d
                  }
                  if(exaptSP == 'BIPAP'){
                    
                    document.getElementById('alertsp').innerHTML = 'BRING PIJAMAS: FOR WOMEN ESPECIALLY TWO-PIECE - PERSONAL HYGIENE UTENSILS - BRING MEDICINE FOR THE NIGHT AND THE FOLLOWING MORNING - WE OFFER COFFEE AND COOKIES IN THE MORNING. - DO NOT DRINK COFFEE BEFORE THE EXAM - DO NOT USE HAIR GEL ';
                    document.getElementById('alertsp3').innerHTML = ' MIAMI ====3 BEDS== OVERBOOK 2 CONFIRMED 3 APPOINTMENTS -- HOMESTEAD 3 BEDS OVERBOOK 2 PT CONFIRMED 3 APPOINTMENTS. DORAL ===6 BEDS ====OVERBOOKING 3 PT ==== 6 APPOINTMENTS CONFIRMED - 7 DAYS A WEEK FROM 9:00PM TO 5:00 AM - PRIVATE ROOMS WITH DOUBLE BEDS - ALL CENTERS HAVE RIMAX SEATING WHICH IS NOT COMFORTABLE FOR COMPANIONS - TRANSPORTATION ALL WEEK - WIFI ONLY MIAMI - YOU CAN CHOOSE THE SEX OF THE TECHNICIAN.';
                  }

                  if(exaptSP == 'CPAP'){
                     
                    document.getElementById('alertsp').innerHTML = 'BRING PIJAMAS: FOR WOMEN ESPECIALLY TWO-PIECE - PERSONAL HYGIENE UTENSILS - BRING MEDICINE FOR THE NIGHT AND THE FOLLOWING MORNING - WE OFFER COFFEE AND COOKIES IN THE MORNING. - DO NOT DRINK COFFEE BEFORE THE EXAM - DO NOT USE HAIR GEL  ';
                    document.getElementById('alertsp3').innerHTML = ' MIAMI ====3 BEDS== OVERBOOK 2 CONFIRMED 3 APPOINTMENTS -- HOMESTEAD 3 BEDS OVERBOOK 2 PT CONFIRMED 3 APPOINTMENTS. DORAL ===6 BEDS ====OVERBOOKING 3 PT ==== 6 APPOINTMENTS CONFIRMED - 7 DAYS A WEEK FROM 9:00PM TO 5:00 AM - PRIVATE ROOMS WITH DOUBLE BEDS - ALL CENTERS HAVE RIMAX SEATING WHICH IS NOT COMFORTABLE FOR COMPANIONS - TRANSPORTATION ALL WEEK - WIFI ONLY MIAMI - YOU CAN CHOOSE THE SEX OF THE TECHNICIAN.';
                  }
    
                               
                  
              });
          
            }




            function aop(){

              document.addEventListener('click',
                function(){

                  var renema1 = document.getElementById('ene1');
                  var renema2 = document.getElementById('ene2');
                  var rfasting1 = document.getElementById('fasting1');
                  var rfasting2 = document.getElementById('fasting2');
                  // console.log("holaaaaaa");
      
                
                  if(renema1.checked){
                    document.getElementById('label7').innerHTML = renema1.value;
                  
                  
                  }
                  if(renema2.checked){
                    document.getElementById('label7').innerHTML = renema2.value;
                  
                  }
                  if(rfasting1.checked){
                    document.getElementById('label8').innerHTML = rfasting1.value;
                    
                  }
                  if(rfasting2.checked){
                    document.getElementById('label8').innerHTML = rfasting2.value;
                
                  }

            });
               
          }
          function aopMRI(){

            document.addEventListener('click',
              function(){

                var renema1 = document.getElementById('ene1');
                var renema2 = document.getElementById('ene2');
                var rfasting1 = document.getElementById('fasting1');
                var rfasting2 = document.getElementById('fasting2');
                // console.log("holaaaaaa");
    
              
                if(renema1.checked){
                  document.getElementById('label54').innerHTML = renema1.value;
                
                
                }
                if(renema2.checked){
                  document.getElementById('label54').innerHTML = renema2.value;
                
                }
                if(rfasting1.checked){
                  document.getElementById('label55').innerHTML = rfasting1.value;
                  
                }
                if(rfasting2.checked){
                  document.getElementById('label55').innerHTML = rfasting2.value;
              
                }

          });
             
        }



        function aopCT(){

          document.addEventListener('click',
            function(){

              var renema1 = document.getElementById('ene1');
              var renema2 = document.getElementById('ene2');
              var rfasting1 = document.getElementById('fasting1');
              var rfasting2 = document.getElementById('fasting2');
              // console.log("holaaaaaa");
  
            
              if(renema1.checked){
                document.getElementById('label54').innerHTML = renema1.value;
              
              
              }
              if(renema2.checked){
                document.getElementById('label54').innerHTML = renema2.value;
              
              }
              if(rfasting1.checked){
                document.getElementById('label55').innerHTML = rfasting1.value;
                
              }
              if(rfasting2.checked){
                document.getElementById('label55').innerHTML = rfasting2.value;
            
              }

        });
           
      }
  
  function ClearContent(){
    location.reload();
  }
