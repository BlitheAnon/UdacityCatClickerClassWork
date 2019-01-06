window.onload=function() {
  var count1=0;
  var countShow1=document.getElementById('clickedCount1');
  var picElement1=document.getElementById('catPic1');
  picElement1.addEventListener('click',function() {
    count1++;
    countShow1.innerText=count1;
  },false);


  var count2=0;
  var countShow2=document.getElementById('clickedCount2');
  var picElement2=document.getElementById('catPic2');
  picElement2.addEventListener('click',function() {
    count2++;
    countShow2.innerText=count2;
  },false);
};
