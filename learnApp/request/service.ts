import set_get from "../utils/set_get"
let  requestDomain= 'https://api.xmyjy.net.cn/api/v1/'
var service = {
   
    _send: function (t?:any) {
        // uni.showLoading({
        //     title: 'loading'+t.url,
        // })
        var n = t.data,
            o = t.method || 'POST',
            a = {
                'app-type': 'ios',
				"access-user-token": '',
				"token": ''
            };	
        if (!t.login) {
            let token:string | null = set_get.getToken()
            console.log(6666, token)
            a = {
                "access-user-token": token,
                "app-type": 'ios',
                "token": token
            }
        }
        return new Promise((r, i) => {
            uni.request({
                method: o,
                url: requestDomain + t.url,
                data: n,
                header: a,
                success: (res:any) => {
                    if (res.data.status != 200) {
                        if (res.data.status == 203) {
						  uni.clearStorage()
                          console.log('登陆过期')
						  uni.navigateTo({
						  	url:'/pages/index/index'
						  })
                        } else {
                            uni.showToast({
                                title: res.data.message || '系统错误',
                                mask: true,
                                icon: 'none'
                            })
                        }
                        i(res)
                    } else {
                        r(res)
                    }
                },
                fail: err => {
                    uni.hideLoading()
                    i(err)
                }
            })
        })
    }
}
export default service
