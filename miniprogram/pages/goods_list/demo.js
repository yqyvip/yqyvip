// pages/goods_list/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      goods:[]

    },
    onLoad: function (options) {
        this.getGoodsList(options.id); 
        console.log(options.id)

    }, 
    getGoodsList(id){
        wx.request({
          url: 'http://127.0.0.1:8080/goodslist?pid='+id,
          success: (result) => {
            console.log(result);
            const goods=result.data.goods
            this.setData({
                goods
            })

          },
        })

    }
})