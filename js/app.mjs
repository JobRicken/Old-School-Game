

function test (){
    let str ='netflix'; //
    let x = str.split('');
    console.log(x);
    for (let z = 0; z < x.length;z++ ){
        console.log(z);
        if ( document.getElementById('input').value === x[z]){
            console.log('goed')
        }
        else {
            console.log('fout')
        }
    }
}

export {test}