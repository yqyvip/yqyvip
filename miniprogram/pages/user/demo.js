// pages/user/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    login: function (option) {
        console.log(option)
        var reqTask = wx.request({
            url: 'http://127.0.0.1:8080/wxlogin',
            data: {
                id: option.detail.value.id,
                name: option.detail.value.name
            },
            success: (result) => {
                console.log(result)
                if ("ok" == result.data) {
                    wx:wx.showToast({
                        title: '登录成功',
                    });
                } else {
                    wx.showToast({
                        title: '登录失败',
                    });
                }
            },
            fail: () => {
            },
            complete: () => {
            }
        });

    },
    onLoad: function (options) {

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