let bbb = document.getElementById("bcount");
let celll = count / 2.5;;
let mass = [];
let field2 = document.querySelector(".fff");
let v;
let n;
let lv;
let pr;
let prv;
let prn;
let lfv;
let lfn;
let i;
let lose = document.querySelector(".lose")
for (i = 0; i < count; i++) {
    mass[i] = i;
    console.log(i);
};
console.log(mass);
for (i = mass.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = mass[i];
    mass[i] = mass[j];
    mass[j] = temp;
}
console.log(mass);
let bombbs = Math.ceil(bombb * count);
for (i = 0; i < count; i++) {}
for (i = 0; i < bombbs; i++) {
    lv = mass[i] - 1;
    // console.log(lv + " lv " + i);
    if (lv >= 0 && lv < count && lv % Math.sqrt(count) != Math.sqrt(count) - 1 || lv % Math.sqrt(count) == 0) {
        cell[lv].textContent += "1";
    };
    pr = mass[i] + 1;
    // console.log(pr + " pr " + i);
    if (pr >= 0 && pr < count && pr % Math.sqrt(count) != 0) {
        cell[pr].textContent += "1";
    };

    v = Math.round((((mass[i] / (Math.sqrt(count)))) - 1) * Math.sqrt(count));
    // console.log(v + " v " + i);
    if (0 <= v && v < count) {
        cell[v].textContent += "1";
    };
    n = Math.round((((mass[i] / (Math.sqrt(count)))) + 1) * Math.sqrt(count));
    // console.log(n + " n " + i);
    if (0 < n && n < count) {
        cell[n].textContent += "1";
    };
    prv = v + 1;
    if (prv > 0 && prv < count && prv % Math.sqrt(count) != 0) {
        cell[prv].textContent += "1";
    };
    prn = n + 1;
    if (prn > 0 && prn < count && prn % Math.sqrt(count) != 0) {
        cell[prn].textContent += "1";
    }
    lfv = v - 1;
    // console.log(lfv + "  ggddvbb bb bb b b");
    if (lfv >= 0 && lfv < count && lfv % Math.sqrt(count) != Math.sqrt(count) - 1) {
        cell[lfv].textContent += "1";
    }
    lfn = n - 1;
    // console.log(lfn + "  ggddvbb bb bb b b");
    if (lfn >= 0 && lfn < count && lfn % Math.sqrt(count) != Math.sqrt(count) - 1) {
        cell[lfn].textContent += "1";
    }
    // console.log("complete");
};
for (i = 0; i < count; i++) {
    if (cell[i].textContent.length != 0) {
        cell[i].textContent = cell[i].textContent.length;
    };
}
for (i = 0; i < bombbs; i++) {
    cell[mass[i]].textContent = "B";
}
for (i = 0; i < count; i++) {
    let t = parseInt([i], 10)
    cell[t].onclick = function() {
        cell[t].style.backgroundColor = "grey";
    }
}
for (i = 0; i < bombbs; i++) {
    let g = parseInt(mass[i], 10);
    console.log(g);
    cell[g].onclick = function() {
        for (i = 0; i < bombbs; i++) {
            cell[mass[i]].style.backgroundColor = "red";
        };
        lose.style.display = "block";
    }
}
bbb.textContent = bombbs;
field2.textContent = Math.sqrt(count) + "*" + Math.sqrt(count);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}