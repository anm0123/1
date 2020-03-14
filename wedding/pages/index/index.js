Page({
  bgm:null,
  music_url:'https://7465-test-5n8dk-1300407061.tcb.qcloud.la/%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.mp3?sign=d5f610c1f172e2f3878139278278d870&t=1576118497',
  music_coverImgUrl:'',
  data:{
    isPlayingMusic:false
  },
  play:function(){
    if(this.data.isPlayingMusic){
      this.bgm.pause()
    }else{
      this.bgm.play()
    }
    this.setData({isPlayingMusic:!this.data.isPlayingMusic})
  },
  onReady:function(){
    this.bgm=wx.getBackgroundAudioManager()
    this.bgm.title='marry you'
    this.bgm.epname ='Doo-Wops & Hooligans'
    this.bgm.singer ='Bruno Mars'
    this.bgm.coverImgUrl=this.music_coverImgUrl
    this.bgm.onCanplay(()=>{
      this.bgm.pause()
    })
    this.bgm.src=this.music_url
  },
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '13700000000',
    })
  },
  callBride:function(){
    wx.makePhoneCall({
      phoneNumber: '15600000000',
    })
  }
})