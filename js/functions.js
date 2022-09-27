var validName = () => {
    let name = document.form.name.value;
    if (name.length == 0){
        (document.querySelector('#alert1')).innerHTML = 'Name is necessary.';
        (document.querySelector('#alert1')).style.color = 'red';
        return false;
    }
    return true;

};

var validAge = () => {
    let age = document.form.age.value;
    if (age == 0){
        (document.querySelector('#alert3')).innerHTML ='Age is necessary.';
        (document.querySelector('#alert3')).style.color ='red';
        return false;
    }
    return true;
}

var validPhoneNumber = () => {
    let phoneNumber = document.form.phoneNumber.value;
    if (phoneNumber == ''){
        (document.querySelector('#alert5')).innerHTML ='Phone number is necessary.';
        (document.querySelector('#alert5')).style.color ='red';
        return false;
    }
    return true;
}

var validEmail = () => {
    let email = document.form.email.value;
    if (emaiL =''){
        (document.querySelector('#alert6')).innerHTML ='Email is necessary.';
        (document.querySelector('#alert6')).style.color ='red';
        return false;
    }
    return true;
}

var validCourse = () => {
    let checkboxNum = document.form.course.length;
    let checkedNum = 0;
    for (let i = 0; i < checkboxNum; i++){
        if (document.form.course[i].checked == true){
            checkedNum++;
        }
    }
    if (checkedNum == 0){
        (document.querySelector('#alert2')).innerHTML ='Course is necessary.';
        (document.querySelector('#alert2')).style.color ='red';
        return false;
    }
    return true;
}

var validGender = () => {
    let radioNum = document.form.gender.length;
    let checkedNum = 0;
    for (let i = 0; i < radioNum; i++){
        if (document.form.gender[i].checked == true){
            checkedNum++;
        }
    }
    if (checkedNum == 0){
        (document.querySelector('#alert6')).innerHTML ='Gender is necessary.';
        (document.querySelector('#alert6')).style.color ='red';
        return false;
    }
    return true;
}

var validateMyForm = () => {
    if (validAge()&&validCourse()&&validEmail()&&validGender()&&validName()&&validPhoneNumber()){
        (document.querySelector('#alert1')).innerHTML ='';
        (document.querySelector('#alert2')).innerHTML ='';
        (document.querySelector('#alert3')).innerHTML ='';
        (document.querySelector('#alert4')).innerHTML ='';
        (document.querySelector('#alert5')).innerHTML ='';
        (document.querySelector('#alert6')).innerHTML ='';
        return true;
    }
    return false;
}