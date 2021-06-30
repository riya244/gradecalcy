const calcy = () =>{
    let wd= document.getElementById('wd').value;
    let maths= document.getElementById('maths').value;
    let comp= document.getElementById('comp').value;
    let phy= document.getElementById('phy').value;
    let grades='';

    let totalGrades= parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    // alert(totalGrades);

    let totalPercentage =(totalGrades/400)*100;
    // alert(totalPercentage);
    
    if(totalPercentage <= 100  && totalPercentage >= 80){
        grades = 'A';
      }else if(totalPercentage <= 79  && totalPercentage >= 60){
         grades = 'B';
      }else if(totalPercentage <= 59  && totalPercentage >= 40){
         grades = 'C';
      }else{
         grades = 'F';
      }

    //   alert(grades);

    if(totalPercentage >= 39.5){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${totalPercentage}%. <br> Your grade is ${grades}. You are Pass. `
      }
      else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${totalPercentage}%. <br> Your grade is ${grades}. You are Fail. `
      }
    
}