function calculate(a){
    if (a === '+'){
        return function (b){return function (c){return b+c;}}}
    else if (a === '*'){
        return function (b){return function (c){return b*c;}}}
    else{return 'operator should be + or *'}
}