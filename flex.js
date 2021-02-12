function stampa() {
        var x = document.getElementById("skusku");
        var flex="";
        for (var i = 0; i < 10; i++) {
            flex = flex+("blablabla: " + i + "<br>");
        }
        x.innerHTML=flex;
    }
