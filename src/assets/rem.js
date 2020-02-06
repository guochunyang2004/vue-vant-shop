// 自适应代码
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 640) { // 最大宽度
            width = 640;
        }
        var rem = width / 6.4;
        docEl.style.fontSize = rem + 'px';
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    refreshRem();
})(window);