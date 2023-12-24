function formResults(form){
    let name = form.name.value
    let num = form.num.value
    let txt
    if (isNaN(num) || name=="" || num>32 || num<1){
        txt = '输入错误，请重新输入'
        document.getElementById('error').innerHTML = txt
    }else{
        txt = `用户: ${name}，学号: ${num}号`
        document.getElementById('uname').innerHTML = txt
    }
}