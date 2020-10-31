class Todolist {
    constructor() {
        //必要なDOMを格納するためのオブジェクトを作成
        this.DOM = {};
    
        this.DOM.btn = document.querySelector('.btn');
        this.DOM.dotext = document.querySelector("#dotext");
        this.DOM.error = document.body.querySelector("#error");
        this.DOM.table = document.querySelector(".table");
        //ボタンクリックに対してイベントを付与
        this.DOM.btn.addEventListener('click',this.__addtodolist.bind(this));
    }
    //テキストボックスが空の時の処理
    __addtodolist(){
        if (this.DOM.dotext.value == '') {
            //普通に，createElementでもいいかも
            this.DOM.error.classList.add('errormessage');
            return
        };

        //              todolistのDOM作成箇所           //
        //ul直下にliノードの追加
        //trタグ,tdタグを生成,textノードの作成
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        let text = document.createTextNode(this.DOM.dotext.value);
       
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox')
        
        
        //checkboxをliの子要素として追加
        td.appendChild(checkbox)
    
        //liタグの要素に，todoテキストを代入
        td.appendChild(text);

        tr.appendChild(td)
    
        //クラスがtodoliのulタグにliを追加
        this.DOM.table.appendChild(tr);

        //              todolistのDOM作成箇所 end          //
        
        //textboxのクリア
        this.DOM.dotext.value = '';
        //errormessageを非表示にする。
        this.DOM.error.classList.remove('errormessage');   
    }
}
