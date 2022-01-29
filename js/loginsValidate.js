const form = document.getElementById('form');
const userMobileNum = document.getElementById('userMobileNum');
const mobnumclass = document.querySelector('.mobnum');

function validate(){
  const mobileVal = userMobileNum.value.trim();

  if (mobileVal === ''){
    setErrorFor(userMobileNum);
    return false;
  } else {
    setSuccessFor(userMobileNum);
    return true;
  }
}

function setErrorFor(input){
  const mobNumm = input.parentElement;
  mobNumm.className = 'mobnum error'

}

function setSuccessFor(input){
  const mobNumm = input.parentElement;
  mobNumm.className = 'mobnum error'
}
