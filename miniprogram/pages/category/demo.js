// pages/category/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        left:[],
        right:[],
        cindex:[],
        currentIndex:0,
        scrollTop:0

    },
    cate:[],
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const cate=wx.getStorageSync('cates');
        if(!cate){
            this.getCate(); 
        }else{
            if(Date.now()-cate.time>1000*10){
                this.getCate; 
            }else{
                console.log("使用缓存")
                this.cate=cate.data
                let left=this.cate.map(v=>v.name)
                let right=this.cate[0].two;
                this.setData({
                   left:left,
                    right:right
                })

            }
        }
  
    }, 
    handtap(e){
        const {index}=e.currentTarget.dataset;
        let right=this.cate[index].two;
        this.setData({
            cindex:index,
            right:right,
            scrollTop:0
        })
    },
    getCate(){
        wx.request({
          url: 'http://127.0.0.1:8080/itemcategory',
          success: (result) => {
            this.cate=result.data;
            //利用缓存
            wx.setStorageSync('cate', {time:Date.now(),data:this.cate})
            let left=this.cate.map(v=>v.name)
            let right=this.cate[0].two;
            this.setData({
               left:left,
                right:right
            })

          },
        })
    }
   


})