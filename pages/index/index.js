import SystemInfo from '../../utils/getSystemInfo'
Page({
    data: {
        SystemInfo,
        showBtn:false,
        searchRes:'输入“姓名”查询试试'
    },
    onLoad(options) {
    },
    onSearch(e){
        switch (e.detail.value){
            case 'seven':{
                this.setData({
                    showBtn:true
                })
            }break
            case '姓名':{
                this.setData({
                    searchRes:'赛文，英文名“seven”为数字“7”，而根据原案设定，是第1话结尾处桐山队长为其起之名，由于奥特警备队原有6名队员，意为第7名成员，但并不是本人的真实姓名。'
                })
            }break
            case '外貌特征':{
                this.setData({
                    searchRes:'赛文奥特曼是第三位出场的奥特曼，是奥特兄弟中除了艾斯以外掌握光线技能最多的奥特战士之一，念力操纵也在所有奥特战士中首屈一指。例如头镖意念，使用得非常娴熟。人间体时可使用奥特念力，变为赛文之后使用会更为强大。'
                })
            }break
            default:{
                this.setData({
                    searchRes:'暂未查询到相关信息'
                })
            }
        }
    },
    onAbout(){
        wx.navigateTo({
            url: '/pages/about/about',
        })
    },
    onAtlas(){
        wx.navigateTo({
            url: '/pages/atlas/atlas',
        })
    }
})
