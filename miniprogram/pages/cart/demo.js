// pages/cart/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {}

    },
    handleChooseAddress() {
        wx.chooseAddress({
            success: (result) => {
                console.log(result)
                this.setData({
                    address: result
                })
            },
        });


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },


})