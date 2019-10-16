const getUser = function(data = 'admin') {
   return window.sessionStorage.getItem(data)
}
const setUser = function(name, data) {
    if(data instanceof Object) {
        window.sessionStorage.setItem(name, JSON.stringify(data))
    } else {
        alert('不支持的存储类型，仅支持对象格式')
    }
}
export {getUser, setUser}