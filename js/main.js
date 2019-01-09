window.onload = function() {
  //20190109修改为MVVM模型

  //knockout.js
  //viewmodel 类
  function AppViewModel() {
    this.cat = ko.observableArray([{
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

    this.catName = ko.observable(this.cat()[0].catName);
    this.imgSrc = ko.observable(this.cat()[0].imgSrc);
    this.clickCount = ko.observable(this.cat()[0].clickCount);
    this.level = ko.observable(this.cat()[0].level);

    //图片点击监听
    this.registerClick = function() {
      this.clickCount(this.clickCount() + 1);
    };

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

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
};
