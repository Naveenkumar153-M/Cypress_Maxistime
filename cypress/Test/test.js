// const arr=[];


// function sample(){
//     var approvalList = ["Larson, Treutel and Will","Schiller, Haag and Upton","Era","Untitled Art Approval","Michael","GF-1483","Deondre","Hortense","Rice - Quitzon","Brionna","Maximo","Troy","Monty","Kris and Sons","Zemlak, Bartell and Reichert","Untitled Art Approval","Untitled Art Approval","Untitled Art Approval","Morissette - Gusikowski","White and Sons"];
//     let approvalNameIndex = 'Rice - Quitzon';
//     var artApprovalPosition = approvalList.indexOf(approvalNameIndex);
//     console.log("Test12");
//     console.log("Test123");

//     return artApprovalPosition;

// }
// // sample();
// console.log(sample());



function test(){
   
    // let checkboxStatus = document.querySelector('#clipArtCheckbox-input').getAttribute('aria-checked');
    // console.log(checkboxStatus);
    // if (checkboxStatus==='false'){
    //     document.querySelector('#clipArtCheckbox-input').click();
    //     console.log('clipArtCheckbox Checkbox is clicked  -> ');
    // }else{
    //     console.log('clipArtCheckbox Checkbox is already clicked -> ');
    // }


    

    // let value=false;
    // if(!value){
    //     console.log('value is false')
    // }else{
    //     console.log('else portion')
    // }

    

  }
  test();

  function enableDesignIdeas(){
    document.querySelectorAll('mat-expansion-panel mat-expansion-panel-header')[0].click();

    let checkboxStatus = document.querySelector('#designIdeasCheckbox-input').getAttribute('aria-checked');
    console.log(checkboxStatus);
    if (checkboxStatus==='false'){
        document.querySelector('#designIdeasCheckbox-input').click();
        console.log('designIdeasCheckbox Checkbox is clicked  -> ');
    }else{
        console.log('designIdeasCheckbox Checkbox is already clicked -> ');
    }


  }

  function verifyPlanDetails() {
    
  }
  