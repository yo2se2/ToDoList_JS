const btn = document.body.querySelector('.btn')


function addItem(){
    //テキストボックスから値を取得
    let dotext = document.body.querySelector("#dotext");
    let todo = document.body.querySelector(".todoli");
    let error = document.body.querySelector("#error");
    //テキストボックスが空だった時処理を終了
    if (dotext.value == '') {
        //普通に，createElementでもいいかも
        error.classList.add('errormessage');
        return
    };
   
    //イベントが起こると・・・
    error.classList.remove('errormessage')
    console.log(dotext.value);
    let a = dotext.value
    //ul直下にliノードの追加
    //liタグの要素を生成,textノードの作成
    let li = document.createElement('li');
    let text = document.createTextNode(dotext.value);
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox')
    
    //checkboxをliの子要素として追加
    li.appendChild(checkbox)

    //liタグの要素に，todoテキストを代入
    li.appendChild(text);

    //クラスがtodoliのulタグにliを追加
    todo.appendChild(li);
    //textboxのクリア
    dotext.value = '';   
}

btn.addEventListener('click',addItem)