// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperlist: [
            {
                "id": 1,
                "src": "../../icon/cate_o.png"
            },
            {
                "id": 2,
                "src": "../../秒杀/cate_o.png"
            },
            {
                "id": 3,
                "src": "../../超市购物/cate_o.png"
            },
            {
                "id": 4,
                "src": "../../奶瓶/cate_o.png"
            },
        ],
        list:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var reqTask = wx.request({
          url: 'http://127.0.0.1:8080/swip',

          success: (result) => {
            console.log(result);
           const list= result.data;
           this.setData({
               list:result.data
           })
           

          },
        });


    },

})