window.onload = function() {
  //20190109修改为MVVM模型

  // model.levelCalculate = ko.computed(function() {
  //   let level = '新生';
  //   switch (this.countArr[0]) {
  //     case '5':
  //       level = '幼年';
  //       break;
  //     case '10':
  //       level = '青年';
  //       break;
  //     case '15':
  //       level = '中年';
  //       break;
  //     default:
  //       break;
  //   }
  //
  //   console.log(this.couhtntArr);
  //   return this.countTemple([0] + this.countTemple[1]);
  // }, model);

  //knockout.js
  //viewmodel 类
  function AppViewModel() {
    this.cat = {
      catName: 'cat1',
      imgSrc: 'images/cat1.jpg',
      level: '幼年体',
      clickCount: 0
    };
    this.nowClickIndex = 0;

    this.catName = ko.observable(this.cat.catName);
    this.imgSrc = ko.observable(this.cat.imgSrc);
    this.clickCount = ko.observable(this.cat.clickCount);
    this.level = ko.observable(this.cat.level);

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
