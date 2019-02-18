window.onload = function() {
  //20190109修改为MVVM模型
  var catData = [{
    catName: 'cat1',
    imgSrc: 'images/cat1.jpg',
    level: '幼年体',
    clickCount: 0
  }, {
    catName: 'cat2',
    imgSrc: 'images/cat2.jpg',
    level: '幼年体',
    clickCount: 0
  }, {
    catName: 'cat3',
    imgSrc: 'images/cat3.jpg',
    level: '幼年体',
    clickCount: 0
  }, {
    catName: 'cat4',
    imgSrc: 'images/cat4.jpg',
    level: '幼年体',
    clickCount: 0
  }, {
    catName: 'cat5',
    imgSrc: 'images/cat5.jpg',
    level: '幼年体',
    clickCount: 0
  }];

  //cat类
  var Cat = function(data) {
    // this.catList = ko.observableArray(data);
    //添加观察属性
    this.catName = ko.observable(data.catName);
    this.imgSrc = ko.observable(data.imgSrc);
    this.clickCount = ko.observable(data.clickCount);

    this.level = ko.pureComputed(function() {
      let level = '新生';
      if (this.clickCount() < 5) {

      } else if (this.clickCount() >= 5 && this.clickCount() < 10) {
        level = "幼年";
      } else if (this.clickCount() >= 10 && this.clickCount() < 15) {
        level = "中年";
      } else {
        level = "老年";
      }

      return level;
    }, this);
  }

  //knockout.js
  //viewmodel 类
  function AppViewModel() {
    let self = this;

// 初始化一个空数组,catList为观察者
    this.catList = ko.observableArray([]);
    //遍历所有猫，并添加到catList数组，给单个猫各类属性添加计算监控对象
    catData.forEach(function(item) {
        //向catList观察者数组内添加对象
      self.catList.push(new Cat(item));
    });

//设置当前显示的图片
//在视图层with内使用同级对象$parent.registerClick
    this.currentCat = ko.observable(this.catList()[0]);

    //列表点击监听
    this.catItemClick = function(clickedCat) {
      //console.log('click');
      //重新赋值，当前点击对象作为参数传递在内部
      self.currentCat(clickedCat);
    };

    //图片点击监听
    this.registerClick = function() {
      //self.currentCat().clickCount(self.currentCat().clickCount() + 1);
      //包含在with:currentCat内部，this指代currentCat
      this.clickCount(this.clickCount() + 1);
    };
  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
};
