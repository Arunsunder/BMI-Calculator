function calculate(){
    var bmi,category;

    var weight=parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").innerText= weight + " kg";  

    var height=parseInt(document.getElementById("height").value);
    document.getElementById("height-val").innerText= height + " cm";

    bmi=(weight/(Math.pow((height/100),2))).toFixed(1);

    document.getElementById("result").innerText=bmi;

    if(bmi < 18.5){
        category="Under Weight";
        result.style.color="red";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        category="Normal Weight";
        result.style.color="green";
    }
    else if(bmi>=25 && bmi<=29.9){
        category="Over Weight";
        result.style.color="orange";
    }
    else{
        category="Obese";
        result.style.color="dark-yellow";
    }
    document.getElementById("category").innerText=category;
}
