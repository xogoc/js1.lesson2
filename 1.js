var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 т.к. ++a возвращает новое значение 2; после этого a==2
d = b++; alert(d); // 1 т.к. b++ возвращает старое значение 1; после этого b==2
c = (2+ ++a); alert(c); // 5 т.к. ++a возвращает новое значение 3; после этого a==3
d = (2+ b++); alert(d); // 4 т.к. b++ возвращает старое значение 2; после этого b==3
alert(a); // 3
alert(b); // 3