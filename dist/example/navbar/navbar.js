var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["PRESENT", "PREVIOUS"],
        // tabs: ["选项一", "选项二", "选项三"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },

    home_tap: function () {
      // var that = this;
      // this.setData({
      //     showTopTips: true
      // });
      // setTimeout(function(){
      //     that.setData({
      //         showTopTips: false
      //     });
      // }, 3000);
      wx.navigateTo({
        url: "../article/article"
      })
    },

    menu_tap: function () {
      wx.navigateTo({
        url: "../article/article"
      })
    },

    quiztap:function(){

      wx.navigateTo({
        url: "../quiz/quiz"
      })

    },

    asmttap: function () {

      wx.navigateTo({
        url: "../asmt/asmt"
      })

    },
    audiotap: function () {

      wx.navigateTo({
        url: "../audio/audio"
      })

    },



    asmttap_his: function () {

      wx.navigateTo({
        url: "../asmt/asmt"
      })

    },
    audiotap_his: function () {

      wx.navigateTo({
        url: "../audio/audio"
      })

    },



    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        })
    }
});