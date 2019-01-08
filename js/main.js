window.onload = function() {
  //20190107修改为MVO(model view octopus)模型

  //模型层
  let model = {
    catArr: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
    imgArr: ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg'],
    countArr: [0, 0, 0, 0, 0, 0],
    nowClickIndex: 0
  }

  //视图层
  let catListView = {
    init: function() {
      //生成猫名列表
      let _listHtml = '';
      //通过octopus模型取得猫列表
      let catArr = octopus.getCatArr();
      let countArr = octopus.getCountArr();
      for (cat of catArr) {
        _listHtml += `<li>${cat}</li>`;
      }
      document.getElementById('catList').innerHTML = _listHtml;

      this.listClickListener();
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
            document.getElementById('catPic').src = octopus.getImgArr()[i];
            document.getElementById('clickedCount').innerText = octopus.getCountArr()[i];
            octopus.setNowClickIndex(i);
          };
        })(catName));
      }
    },

    updateView: function() {
      //更新列表区域数据
      this.init();
    }
  };

  let catView = {
    init: function() {
      //添加第一张猫图，添加默认点击数和猫名
      let _picHtml = '';
      _picHtml += '<img class="catPhotoStyle" id="catPic" src="images/cat1.jpg">';
      document.getElementById('imgPart').innerHTML = _picHtml;
      document.getElementById('catName').innerText = octopus.getCatArr()[0];
      document.getElementById('clickedCount').innerText = octopus.getCountArr()[0];

      this.imageClickListener();
    },

    imageClickListener: function() {
      //图片点击监听
      let catPicElement = document.getElementById('catPic');
      catPicElement.addEventListener('click', function() {
        octopus.setCountArr();
        document.getElementById('clickedCount').innerText = octopus.getCountArr()[octopus.getNowClickIndex()];
      });
    },

    updateView: function(name, url, count) {
      //更新catView区域数据
      document.getElementById('catName').innerText = name;
      document.getElementById('catPic').src = url;
      document.getElementById('clickedCount').innerText = count;
    }
  };

  let adminView = {
    init: function() {
      this.showAdminArea();
      this.hideAdminArea();
      this.saveAdminData();
    },

    showAdminArea: function() {
      //显示管理员区域
      let adminButton = document.getElementById('adminBtn');
      let that = this;
      adminButton.addEventListener('click', function() {
        document.getElementById('adminArea').style.display = 'inline';
        that.initDataToAdmin();
      });
    },

    hideAdminArea: function() {
      //隐藏管理员区域
      let cancelButton = document.getElementById('cancelBtn');
      cancelButton.addEventListener('click', function() {
        document.getElementById('adminArea').style.display = 'none';
      });
    },

    initDataToAdmin: function() {
      //填充数据到管理员区域
      let nameIpt = document.getElementById('nameIpt');
      let imgUrlIpt = document.getElementById('imgUrlIpt');
      let clickCountIpt = document.getElementById('clickCountIpt');

      nameIpt.value = document.getElementById('catName').innerText;
      imgUrlIpt.value = document.getElementById('catPic').src;
      clickCountIpt.value = document.getElementById('clickedCount').innerText;
    },
    saveAdminData: function() {
      //保存输入数据
      let saveButton = document.getElementById('saveBtn');
      let that = this;
      saveBtn.addEventListener('click', function() {
        //取得输入数据
        let catName = document.getElementById('nameIpt').value;
        let imgUrl = document.getElementById('imgUrlIpt').value;
        let clickCount = document.getElementById('clickCountIpt').value;
        //通知章鱼层更新模型层数据
        octopus.updateModel(catName, imgUrl, clickCount);
        //隐藏管理员区域
        document.getElementById('adminArea').style.display = 'none';
      });
    },
  };

  //章鱼连接层
  let octopus = {
    init: function() {
      catListView.init();
      catView.init();
      adminView.init();
    },
    getCatArr: function() {
      return model.catArr;
    },

    getImgArr: function() {
      return model.imgArr;
    },

    getCountArr: function() {
      return model.countArr;
    },

    setCountArr: function() {
      model.countArr[model.nowClickIndex]++;
    },

    getNowClickIndex: function() {
      return model.nowClickIndex;
    },

    setNowClickIndex: function(index) {
      model.nowClickIndex = index;
    },

    updateModel: function(name, url, count) {
      let nowClickIndex = model.nowClickIndex;
      //给模型层设置新数据
      model.catArr[nowClickIndex] = name;
      model.countArr[nowClickIndex] = count;
      model.imgArr[nowClickIndex]=url;
      console.log(model.catArr);
      console.log(model.countArr);
      //更新catListView
      catListView.updateView();
      //更新catView
      catView.updateView(name, url, count);
    }
  };

  octopus.init();

};
