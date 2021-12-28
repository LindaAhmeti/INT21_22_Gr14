function ndryshoNgjyren(ngjyra)
{
    document.body.style.backgroundColor = ngjyra;
}

function validateform(){  
    var name=document.regjistrimi.email.value;  
    var password=document.regjistrimi.password.value;  
      
    if (name==null || name==""){  
      alert("Emri nuk duhet te jete i zbrazet.");  
      return false;  
    }else if(password.length<6){  
      alert("Passwordi  duhet te jete i gjate se paku 6 karaktere.");  
      return false;  
      }  
    }  


    
    function validate() {
        let x = document.forms["forma"]["name"].value;
        if (x == "") {
          alert("Kjo fushe duhet plotesuar!");
          return false;
        }
      }