function getEle(id){
   return document.querySelector(id);
} 
    
    
// kiem tra rong
    function kiemtraRong (...inputs){
    let kq = true;
    for( let input of inputs ){
      const parent = input.parentElement.parentElement
        if(!(input.value)){
          parent.querySelector('#thongBao').innerHTML = 'Vui lòng nhập thông tin'
                // return false
            kq = false;
        }
        else{
          parent.querySelector('#thongBao').innerHTML = '';
            // return true;
        }  
    }
    return kq ;  
}




const kiemTraEmail = (id) =>{
    
    var inputEmail = getEle(id).value;
    var kiemTraEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if(!(inputEmail.match(kiemTraEmail))){
      getEle('#thongBao.thongBaoEmail').innerHTML = 'Email không hợp lệ'
      return false;
    }else{
        getEle('#thongBao.thongBaoEmail').innerHTML  = '';
      return true;
    }
    
  }
// kiemTraCheck

const kiemTraCheckRadio = () => {
   const checkMale = getEle('#male').checked;
   const checkFemale = getEle('#female').checked;

   if(checkMale || checkFemale){
    getEle('#thongBao.thongBaoCheck').innerHTML = '';
    return true
   }
        getEle('#thongBao.thongBaoCheck').innerHTML = 'Vui lòng chọn giới tính'
        return false
}

// kiem tra do dai

const kiemTraDoDai = (id, min, max) => {
  const passwordLength = getEle(id).value;
  if(passwordLength.length >= min && passwordLength.length <= max){
    getEle('#thongBao.thongBaoPassword ').innerHTML = '';
    return true
  }
      getEle('#thongBao.thongBaoPassword ').innerHTML = `Độ dài phải từ ${min} - ${max} kí tự`
      return false
}


// xác nhận mật khẩu

const confirmPassword = () => {
   const password = document.querySelector('#password').value;
   const passwordConfirm = document.querySelector('#passwordConfirm').value;
   if(password === passwordConfirm && password !== '' ){
      getEle('.thongBaoPasswordConfirm').innerHTML = '';
      return true;
   }
        getEle('.thongBaoPasswordConfirm').innerHTML  = 'Nhập lại mật khẩu không chính xác';
    
        return false;
}


function validation(){
    // const inputs = document.querySelectorAll('.row input');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const name = getEle('#name');
    const phone = getEle('#phone');
    


    
    // let checkEmpty = kiemtraRong(inputs)
    let checkEmpty = kiemtraRong(email, name, password, phone, passwordConfirm)
    let checkRadio = kiemTraCheckRadio()
    let checkEmptyPassword = kiemtraRong(password)
    let checkEmptyEmail = kiemtraRong(email)

    if(checkEmptyEmail){

        var checkEmail = kiemTraEmail('#email')
    }
    if(checkEmptyPassword){
      var CheckLength = kiemTraDoDai('#password', 4, 10)
        if(checkEmptyPassword && CheckLength){

          var checkConfirm = confirmPassword()
        }
    }
    // if(kiemtraRong(password,passwordConfirm)){

    // }
    let valid = true;
    valid = checkEmpty && checkRadio && checkEmail && CheckLength && checkConfirm ;


    if(valid){
        return true
    }
      return false
    
}