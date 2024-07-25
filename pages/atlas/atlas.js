import SystemInfo from '../../utils/getSystemInfo'
Page({
    data: {
        imgData:12,
        SystemInfo
    },
    onLoad: function (options) {
    },
    onBack(){
        wx.navigateBack({
            delta: 1
        })
    }
});