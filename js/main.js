window.onload = function() {
  //20190107修改为MVO(model view octopus)模型

  //模型层
  let model = {
    catArr: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
    countArr: [0, 0, 0, 0, 0, 0],
    nowClickIndex: 0
  }

  //视图层
  //index.html

  //连接层
  let octopus = {
    init: function() {
      //生成猫名列表
      let _listHtml = '';
      for (cat of model.catArr) {
        _listHtml += `<li>${cat}</li>`;
      }
      document.getElementById('catList').innerHTML = _listHtml;

      //添加第一张猫图，添加默认点击数和猫名
      let _picHtml = '';
      _picHtml += '<img class="catPhotoStyle" id="catPic" src="images/cat1.jpg">';
      document.getElementById('imgPart').innerHTML = _picHtml;
      document.getElementById('catName').innerText = model.catArr[0];
      document.getElementById('clickedCount').innerText = model.countArr[0];
    },

    listClickListener: function() {
      //列表点击监听
      let list = document.getElementsByTagName('li');
      for (let i = 0; i < list.length; i++) {
        let catName = list[i].innerText;
        //监听列表点击
        list[i].addEventListener('click', (function(catNameCopy) {
          return function() {
            //替换猫图，猫名，点击数
            document.getElementById('catName').innerText = catNameCopy;
            document.getElementById('catPic').src = `images/${catNameCopy}.jpg`;
            document.getElementById('clickedCount').innerText = model.countArr[i];
            model.nowClickIndex = i;
          };
        })(catName));
      }
    },

    imageClickListener: function() {
      //图片点击监听
      let catPicElement = document.getElementById('catPic');
      catPicElement.addEventListener('click', function() {
        model.countArr[model.nowClickIndex]++;
        document.getElementById('clickedCount').innerText = model.countArr[model.nowClickIndex];
      });
    }
  };

  octopus.init();
  octopus.listClickListener();
  octopus.imageClickListener();

};
