window.onload=function() {
  var count=0;
  var countShow=document.getElementById('clickedCount');
  var picElement=document.getElementById('catPic');
  picElement.addEventListener('click',function() {
    count++;
    countShow.innerText=count;
  },false);
};
