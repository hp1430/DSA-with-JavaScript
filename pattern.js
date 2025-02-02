function printPattern(n) {
    for(let i=1; i<=n; i++) {
        str = '';
        for(let j=1; j<i; j++) str += ' ';
        for(let j=i; j<=n; j++) str += j+' ';
        console.log(str);
    }
    for(let i=n-1; i>=1; i--) {
        str = '';
        for(let j=1; j<i; j++) str += ' ';
        for(let j=i; j<=n; j++) str += j+' ';
        console.log(str);
    }
}

printPattern(7);