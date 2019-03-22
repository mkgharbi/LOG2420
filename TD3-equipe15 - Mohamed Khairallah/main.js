function refresh(node) {
    var times = 3000; //ms

    (function startRefresh() {
        var address;
        if (node.src.indexOf('?') > -1)
            address = node.src.split('?')[0];
        else
            address = node.src;
        node.src = address + "?time=" + new Date().getTime();

        setTimeout(startRefresh, times);
    })();

}

window.onload = function() {
    var node = document.getElementById('users');
    refresh(node);
}