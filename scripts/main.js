//DOMが読み込んだときの処理（Mainインスタンスを作成)
document.addEventListener('DOMContentLoaded' ,function(){

    const todolist = new Todolist();
    const titleanimation = new TextAnimation('.animate-title');
    titleanimation.animate()
});


//Todolist関連の処理を行うクラス作成
class Todolist {
    constructor() {
        //必要なDOMを格納するためのオブジェクトを作成
        this.DOM = {};
    
        this.DOM.btn = document.querySelector('.btn');
        this.DOM.dotext = document.querySelector("#dotext");
        this.DOM.todoli = document.querySelector(".todoli");
        this.DOM.error = document.body.querySelector("#error");
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
        this.DOM.todoli.appendChild(li);

        //              todolistのDOM作成箇所 end          //
        
        //textboxのクリア
        this.DOM.dotext.value = '';
        //errormessageを非表示にする。
        this.DOM.error.classList.remove('errormessage');   
    }
}

class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}