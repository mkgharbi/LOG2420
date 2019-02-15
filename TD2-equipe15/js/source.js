function clearform() {
    document.myform.REACT1.value = "";
    document.myform.REACT2.value = "";
    document.myform.REACT3.value = "";
    document.myform.REACT4.value = "";
    document.myform.react1n.value = "";
    document.myform.react2n.value = "";
    document.myform.react3n.value = "";
    document.myform.react4n.value = "";
}

function fillform() {
    if (location.search.length > 0) {
        arrayofstrings = location.search.split('=');
        var pertab = location.search.substring(8, 9);
        if (pertab == 1) {
            var r1 = arrayofstrings[2].split('&')[0];
            var r2 = arrayofstrings[3].split('&')[0];
            var r3 = arrayofstrings[4].split('&')[0];
            var r3 = arrayofstrings[5].split('&')[0];
            //fill the form
            document.myform.REACT1.value = r1;
            document.myform.REACT2.value = r2;
            document.myform.REACT3.value = r3;
            document.myform.REACT4.value = r4;
            document.myform.react1n.value = "";
            document.myform.react2n.value = "";
            document.myform.react3n.value = "";
            document.myform.react4n.value = "";
        }
    }
}

function example(num) {
    if (num == 1) {
        document.myform.REACT1.value = "H2O";
        document.myform.REACT2.value = "";
        document.myform.REACT3.value = "";
        document.myform.REACT4.value = "";
        document.myform.react1n.value = "";
        document.myform.react2n.value = "";
        document.myform.react3n.value = "";
        document.myform.react4n.value = "";
    } else if (num == 0) {
        document.myform.REACT1.value = "Si";
        document.myform.REACT2.value = "O2";
        document.myform.REACT3.value = "";
        document.myform.REACT4.value = "";
        document.myform.react1n.value = "";
        document.myform.react2n.value = "1.5";
        document.myform.react3n.value = "";
        document.myform.react4n.value = "";
    } else if (num == 2) {
        document.myform.REACT1.value = "H2";
        document.myform.REACT2.value = "H2S";
        document.myform.REACT3.value = "SO2";
        document.myform.REACT4.value = "";
        document.myform.react1n.value = "";
        document.myform.react2n.value = "2";
        document.myform.react3n.value = "<1.0e-10>";
        document.myform.react4n.value = "";
    } else if (num == 3) {
        document.myform.REACT1.value = "CaO";
        document.myform.REACT2.value = "Al2O3";
        document.myform.REACT3.value = "SiO2";
        document.myform.REACT4.value = "";
        document.myform.react1n.value = "3.5";
        document.myform.react2n.value = "2";
        document.myform.react3n.value = "";
        document.myform.react4n.value = "";
    } else if (num == 4) {
        document.myform.REACT1.value = "CH4";
        document.myform.REACT2.value = "O2";
        document.myform.REACT3.value = "N2";
        document.myform.REACT4.value = "";
        document.myform.react1n.value = "";
        document.myform.react2n.value = "0.21";
        document.myform.react3n.value = "0.71";
        document.myform.react4n.value = "";
    } else if (num == 5) {
        document.myform.REACT1.value = "CH4";
        document.myform.REACT2.value = "O2";
        document.myform.REACT3.value = "N2";
        document.myform.REACT4.value = "H2O";
        document.myform.react1n.value = "";
        document.myform.react2n.value = "0.21";
        document.myform.react3n.value = "0.71";
        document.myform.react4n.value = "0.01";
    }
}

function default_values() {
    document.myform.TMIN.value = "1000";
    document.myform.T_units.selectedIndex = 0;
    document.myform.MASS.selectedIndex = 0;
    document.myform.P_value.value = "1";
    document.myform.PRESSURE.selectedIndex = 0;
    document.myform.CUT.selectedIndex = 0;
    document.myform.format.selectedIndex = 1;
    document.myform.DIST.selectedIndex = 0;
    document.myform.REACT1.value = "Si";
    document.myform.REACT2.value = "O2";
    document.myform.REACT3.value = "";
    document.myform.react1n.value = "";
    document.myform.react2n.value = "1.5";
    document.myform.react3n.value = "";
}

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0,
        x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2];
        }
}