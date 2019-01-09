window.onload = function() {
  //20190109修改为MVVM模型

  //cat类
  var Cat = function() {
    this.catList = ko.observableArray([{
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
    }]);
    this.nowClickIndex = 0;
    this.catName = ko.observable(this.catList()[0].catName);
    this.imgSrc = ko.observable(this.catList()[0].imgSrc);
    this.clickCount = ko.observable(this.catList()[0].clickCount);

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
    //接收Cat对象
    this.currentCat = ko.observable(new Cat());

    let self=this;

    //图片点击监听
    this.registerClick = function() {
      //console.log(this);
      //self.currentCat().clickCount(self.currentCat().clickCount() + 1);
      this.clickCount(this.clickCount()+1);
    };
  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
};
