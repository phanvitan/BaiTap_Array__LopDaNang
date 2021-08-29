

/**
 * Bài tập mảng
 */

var numArray = [];

function addElement(){
    var num = parseInt(document.querySelector("#inputNumber").value);
    numArray.push(num);
    console.log(numArray);
    document.getElementById("txtResult").innerHTML =numArray;
}

document.getElementById("btnSubmit").onclick =  addElement;


/// Bài 1 : tính tổng///////

function sum(){
    var sum = 0;
    for(var i = 0;i < numArray.length;i++){
        if(numArray[i] > 0){
            sum +=numArray[i];
        }
    }
    console.log(sum);
    document.getElementById("txtResultSum").innerHTML = sum;
}
document.getElementById("btnSum").onclick = sum;

/// Bài 2 : đếm các số dương///////

function countSoDuong(){
    var count = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] >0){
            count++
        }
    }
    console.log(count);
    document.getElementById("txtResultSoDuong").innerHTML = count;
}
document.getElementById("btnCountSoDuong").onclick = countSoDuong;

/// Bài 3 : tìm số nhỏ nhất ///////

function timMin(){
    var viTri = 0;
    var min = numArray[viTri];
    for(var i = 1; i < numArray.length ; i++){
        if(numArray[i] <= min){
            viTri = i;
            min = numArray[viTri];
        }

    }
    console.log(min);
    document.getElementById("txtResultTimMin").innerHTML = min;
}
document.getElementById("btnTimMin").onclick = timMin;

/// Bài 4 : tìm số dương nhỏ nhất ///////

function LocSoDuong(){
    var num2 = [];
    var numArray2 = [];
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] >0){
            num2 = numArray[i];
            console.log(num2);
            numArray2.push(num2);
            console.log(numArray2);


            var viTri2 = 0;
            var min2 = numArray2[viTri2];
            for(var x = 1; x < numArray2.length ; x++){
                if(numArray2[x] <= min2){
                    viTri2 = x;
                    min2 = numArray2[viTri2];
                }

            }
            console.log(min2);
            document.getElementById("txtResultLocSoDuong").innerHTML = min2;

        }
    }
    
}
document.getElementById("btnLocSoDuong").onclick = LocSoDuong;



/// Bài 5 : tìm số chẵn cuối cùng trong mảng ///////
var numSD = 0;
function TimSoChanCC(){
    
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 == 0){
            numSD = numArray[i];
            document.getElementById("txtResultTimSoChanCC").innerHTML = numSD;  
        }else{
            document.getElementById("txtResultTimSoChanCC").innerHTML = "-1"; 
        }
          
    }
    
}

document.getElementById("btnTimSoChanCC").onclick = TimSoChanCC;




///  Bài 7 : Sắp xếp thứ tự  ///////

function swap(j){
    var temp = numArray[j];
    numArray[j] = numArray[j + 1];
    numArray[j + 1] = temp;
}

function swap(index1, index2){
    var temp = numArray[index1];
    numArray[index1] = numArray[index2];
    numArray[index2] = temp;
}
function sapXepTang(){
    
    for(var i = 0; i < numArray.length; i++){
        
        for(var j =0 ; j < numArray.length - 1; j++){
            if(numArray[j] > numArray[j + 1]){
                swap(j,j+1);
            }
        }
    }
    console.log(numArray);
    document.getElementById("txtSapXepTang").innerHTML = numArray;
}
document.getElementById("btnSapXepTang").onclick = sapXepTang;



/// Bài 10 : so sánh SL số dương & số âm ///////

function countSoDuongSA(){
    var count = 0;
    var count2 = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] >0){
            count++
        }else if (numArray[i] <0){
            count2++
        }
    }
    console.log(count);
    console.log(count2);
    if(count2 == count){
        document.getElementById("txtResultSoDuongSA").innerHTML = "SL số dương và âm bằng nhau";
    }else if(count2 > count){
        document.getElementById("txtResultSoDuongSA").innerHTML = "SL số âm nhiều hơn số dương";
    }else{
        document.getElementById("txtResultSoDuongSA").innerHTML = "SL số âm ít hơn số dương";
    }

    // document.getElementById("txtResultSoDuongSA").innerHTML = count;
    // document.getElementById("txtResultSoDuongSA").innerHTML = count2;
}
document.getElementById("btnCountSoDuongSA").onclick = countSoDuongSA;

