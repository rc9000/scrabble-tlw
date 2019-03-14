function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function loadDict() {
    var dict = window.dict;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    dict.forEach(w => {
        var letters = w.word.split('');
        var letterpoints = letters.map(function(a,b){ return window.scores[a]});
        var sum = letterpoints.reduce(reducer);
        console.log(w.word, letters, letterpoints, sum);
        w.score = sum;
        w.scoreF = pad(sum, 2, '0')
    });

    return dict;
}