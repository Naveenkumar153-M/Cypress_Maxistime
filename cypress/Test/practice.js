let arrayA=["A",'B','C'];
let arrayB=["B",'C','A'];




let expectedPlanOption=[ "Art Approval","Download .PNG","Download .CDR","Download .AI"];
        let actualPlanOptionLength=document.querySelectorAll('gf-stock-art-menu-actions > button').length;
        let actualPlanOption=[];
        // for (let i = 0; i < actualPlanOptionLength; i++) {
        //     let value=document.querySelectorAll('gf-stock-art-menu-actions > button')[i].innerText;
        //     actualPlanOption.push(value);
        // }
        console.log("Actual_Starter_Plan_Option >>> " +actualPlanOption);
        for (let i = 0; i < actualPlanOption.length; i++) {

            if (expectedPlanOption.includes(actualPlanOption[i])) {
                console.log(actualPlanOption[i]+ " = Value present in the Array ");
            }else{
                console.log(actualPlanOption[i]+ " = Value not present in the Array ");
                return false;
            }
        }

// console.log(arrayA.length);

function compare_arrays(arr1, arr2) {


    // return arr1===arr2
    // return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

let arr1 = [1,2,3,4,5];
let arr2 = [3,1,4,2,6];

// arr1.forEach(function(value){
//     console.log(value);
//     if (arr2.includes(value)) {
//         console.log(value+ " = Value present in the Array ");
//     }else{
//         console.log(value+ " = Value not present in the Array ");
//     }
// });





// console.log(compare_arrays(arr1, arr2));  // Output: true

