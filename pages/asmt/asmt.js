// example/asmt/asmt.js


  Page({
  data: {
    path:''
  },
    upload:function() {
      var that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          var tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths)
          wx.uploadFile({
            url: 'http://example.weixin.qq.com/upload',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res) {
              var data = res.data
              wx.showModal({
                title: '上传文件返回状态',
                content: '成功',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }
                }
              })                          //do something
            },
            fail: function (res) {
              console.log(res)
            }
          })
          that.setData({
            path: tempFilePaths
          })
        }
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },




    listenerButtonDownLoadFile: function () {
      var that = this;
      wx.downloadFile({
        url: 'https://t2.27270.com/uploads/tu/201609/240/1mb2dybkw2x.jpg',
        type: 'image',
        success: function (res) {
          console.log(res.tempFilePath);
          that.setData({
            resource: res.tempFilePath,
          })
        },
        fail: function (err) {
          console.log(err)
        },
        complete: function (e) {
          console.log(e)
        }
      })
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
      url: "../mainpage/mainpage"
    })
  },

  menu_tap: function () {
    wx.navigateTo({
      url: "../mainpage/mainpage"
    })
  },

  asmtreturn: function () {
    wx.navigateTo({
      url: "../navbar/navbar"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})