Page({
    data: {
        url:null
    },
    onLoad: function (options) {
        let {url} = options
        this.setData({
            url: url
        })
    }
});