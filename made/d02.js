window.onDouyinServer = function() {
    new Barrage({ join: true })
}
console.log(`[${new Date().toLocaleTimeString()}]`, '正在载入JS,请稍后..')
var scriptElement = document.createElement('script')
scriptElement.src = 'https://1343223259.github.io/project/index.js?t=' + Math.random()
document.body.appendChild(scriptElement)