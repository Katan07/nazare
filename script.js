let v1 = document.getElementById('valor1')
let v2 = document.getElementById('valor2')
let opera = document.getElementsByName('ação')
let res = document.getElementById('res')
let final = ''

function verificar(){
    if(v1.value.length == 0 || v2.value.length == 0 ){
        window.alert('verifique os dados')
    }else{
        if(opera[0].checked){
            final = (v1.value)*(v2.value)
        }
        else if(opera[1].checked){
           final = (v1.value)/(v2.value)
        }
        else if(opera[2].checked){
            final = Number(v1.value) + Number(v2.value)
        }
        else{
            final = Number(v1.value) - Number(v2.value)
        }
        res.innerHTML = `O resultado da operação é ${final}`
        v1.value = ''
        v2.value = ''
        v1.focus()
        
    }
    
}
