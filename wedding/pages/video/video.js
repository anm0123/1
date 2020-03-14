Page({
  data:{
    src:'https://7465-test-5n8dk-1300407061.tcb.qcloud.la/%E4%BB%8A%E5%A4%A9%E4%BD%A0%E8%A6%81%E5%AB%81%E7%BB%99%E6%88%91MV%20-%20%E9%99%B6%E5%96%86%20%26%20%E8%94%A1%E4%BE%9D%E6%9E%97.mp4?sign=c7f16b2e8ba292a7dfab3aaad85e2b52&t=1576119586',
    danmuList:[
      {
        text:'第1s出现弹幕',color:'#ff0000',time:1
      },
      {
        text: '第3s出现弹幕', color: '#ff00ff', time: 3
      }
    ],
    movieList:[{
      creat_time:'2018-7-25 19:55:54',title:'海边随拍',
      src:'https://7465-test-5n8dk-1300407061.tcb.qcloud.la/%E6%81%8B%E7%88%B1%E8%BE%BE%E4%BA%BA%20-%20%E7%BD%97%E5%BF%97%E7%A5%A5%20%26%20%E5%B0%8FS.mp4?sign=e2a2a245ef5fb7a49b53334dfb4bd4b5&t=1576122394'
    }]
  },
  videoContext:null,
  inputValue:'',
  onReady:function(){
    this.videoContext = wx.createVideoContext('myVideo')
    const TxvContext = requirePlugin('tencentvideo')
    var txvContext = TxvContext.getTxvContext('txv1')
    console.log(txvContext)
    txvContext.play()
    //txvContext.pause()
  },
  bindInputBlur:function(e){
    // 保存用户输入的弹幕
    this.inputValue = e.detail.value
  },
  // 调用方法，发送弹幕
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      carema:'back',
      success:res => ({
        src:res.tempFilePath
      })
    })
  }
})