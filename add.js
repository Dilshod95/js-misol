var misol = 8
    +prompt('6 + 2 = ?')

while (isNaN(misol) || misol > 8 || misol < 8) {
    misol = +prompt('siz notogri javob kiritdingiz 6 + 2 = ?')
}

if(misol === 8) {
    alert("sizning javob tog'ri " + misol)
}
