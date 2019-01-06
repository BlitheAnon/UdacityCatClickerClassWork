const catArr=['cat1','cat2','cat3','cat4','cat5','cat6'];
let countArr=[0,0,0,0,0,0];
let nowClickIndex=0;

window.onload=function() {

  let _listHtml='';

  for (cat of catArr) {
    _listHtml+=`<li>${cat}</li>`;
  }

  document.getElementById('catList').innerHTML=_listHtml;

  //列表对象
  let list=document.getElementsByTagName('li');
  for(let i=0;i<list.length;i++){
    let catName=list[i].innerText;
    //监听列表点击
    list[i].addEventListener('click',(function(catNameCopy) {
      return function() {
        console.log(countArr);
        //替换猫图，猫名，点击数
        document.getElementById('catName').innerText=catNameCopy;
        document.getElementById('catPic').src=`images/${catNameCopy}.jpg`;
        document.getElementById('clickedCount').innerText=countArr[i];
        nowClickIndex=i;
      };
    })(catName));
  };

  //监听图片点击
  let catPicElement=document.getElementById('catPic');
  catPicElement.addEventListener('click',function() {
    countArr[nowClickIndex]++;
    console.log(countArr);
    document.getElementById('clickedCount').innerText=countArr[nowClickIndex];
  });
};
