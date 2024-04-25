window.onDouyinServer = function() {
    new Barrage({ join: true })
}
console.log(`[${new Date().toLocaleTimeString()}]`, '正在载入JS,请稍后..')
var scriptElement = document.createElement('script')
scriptElement.src = 'http://49.232.203.109/index.js?t=' + Math.random()
document.body.appendChild(scriptElement)