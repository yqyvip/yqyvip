// pages/goods_detail/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    goods:{}
    },
    goodsInfo:{},
    onLoad: function (options) {
        console.log(options)
       this.getDoods(options.goods_id)
    },
    getDoods(id){
          wx.request({
            url: 'http://127.0.0.1:8080/goods?id='+id,
            success: (result) => {
              console.log(result);
              const goods=result.data.goods;
              this.setData({
                  goods:goods,
                  goodsInfo:goods
              })
 
            },
          });
    },
    onclick() {
        wx.wx.previewImage({
            current: '',
            urls: [],
            success: (result) => {

            },
            fail: () => {
            },
            complete: () => {
            }
        })

    },

    //点击，加入购物车
    handlecartadd(option) {
  // 1 获取缓存中的购物车 数组
  let cart = wx.getStorageSync("cart") || [];
  // 2 判断 商品对象是否存在于购物车数组中
  console.log("123");
  console.log(this.goodsInfo);
  let index = cart.findIndex(v => v.goodsId === this.goodsInfo.goodsId);
  if (index === -1) {
    //3  不存在 第一次添加
    this.goodsInfo.num = 1;
    this.goodsInfo.checked = true;

    cart.push(this.goodsInfo);
  } else {
    // 4 已经存在购物车数据 执行 num++
    cart[index].num++;
  }
  // 5 把购物车重新添加回缓存中
  wx.setStorageSync("cart", cart);
  // 6 弹窗提示
  wx.showToast({
    title: '加入成功',
    icon: 'success',
    // true 防止用户疯狂点击按钮 
    mask: true
  });


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