//DOMが読み込んだときの処理（Mainインスタンスを作成)
document.addEventListener('DOMContentLoaded' ,function(){

  
    const titleanimation = new TextAnimation('.animate-title');
    titleanimation.animate();
    const logoanimation = new LogoAnimation('ToDo-logo');
    logoanimation.logoanimate();
    const todolist = new Todolist();
   
});



class Todolist {
    constructor() {
        //必要なDOMを格納するためのオブジェクトを作成
        this.DOM = {};
        
        this.DOM.subcontainer = document.querySelector('.sub-container');
        this.DOM.editcontainer = document.querySelector('.edit-container')
        this.DOM.btn = document.querySelector('.slide-bg');
        this.DOM.dotext = document.querySelector("#dotext");
        this.DOM.error = document.querySelector("#error");
        this.DOM.tbody = document.querySelector(".tbody");
        console.log(this.DOM);
        //ボタンクリックに対してイベントを付与
        this.DOM.btn.addEventListener('click',this.__addtodo.bind(this));
        // //表の行数の取得
        const row_num = this.DOM.tbody.rows.length;
     
    }

    __addeventbtn(){
        //表の行数を取得
        let n = this.DOM.tbody.rows.length;
        console.log(n);
        const span = document.createElement('span');
        span.setAttribute('class', 'edit-delete-btn');
        const editbtn = document.createElement('button');
        editbtn.setAttribute('class', 'editbtn' + n);
        editbtn.appendChild(document.createTextNode('編集'));
        editbtn.addEventListener('click',this.__edit.bind(this));
       

        const deletebtn = document.createElement('button');
        deletebtn.setAttribute('class', 'deletebtn'+ n);      
        deletebtn.appendChild(document.createTextNode('削除'));

        deletebtn.addEventListener('click',this.__delete);
   
        span.appendChild(editbtn);
        span.appendChild(deletebtn);
        return  span;   
    }

    __addlist(){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        let text = document.createTextNode(this.DOM.dotext.value);

        //checkboxをtdの子要素として追加
        td.appendChild(checkbox)
        //liタグの要素に，todoテキストを代入
        td.appendChild(text);
      
        return tr.appendChild(td);
    }

    __addtodo(){
        //テキストボックスが空の時の処理
        if (this.DOM.dotext.value == '') {
            //普通に，createElementでもいいかも
            this.DOM.error.classList.add('errormessage');
            return
        };
        const tr = document.createElement('tr');
        //todosのテキストフォームをtodolistの行に入れる。
        let addlist = this.__addlist();
        //delete-edit-btnの作成
        let addeventbtn  = this.__addeventbtn();
        addlist.appendChild(addeventbtn);
        tr.appendChild(addlist);

        //tbodyに出来上がったtrを子要素として追加
        this.DOM.tbody.appendChild(tr);

        //textboxのクリア
        this.DOM.dotext.value = '';

        //errormessageを非表示にする。
        if (this.DOM.error.classList.contains('errormessage') == true){
        this.DOM.error.classList.remove('errormessage');   
        }

    }

   __con(el){
        console.log(el.target);
        console.log(el.target.parentNode.parentNode.parentNode)
        console.log(this.DOM.subcontainer)
    }

    
    __delete(el) { 
        //イベントを発生させたオブジェクトへの参照 
        el.target
        //<button class="deletebtn1">削除</button>
        const deletetr = el.target.parentNode.parentNode.parentNode;
        deletetr.parentNode.deleteRow(deletetr.sectionRowIndex);
    } 
    __edit(){
        this.DOM.subcontainer.classList.add("up");
        this.DOM.editcontainer.classList.add("up");
        // this.DOM.subcontainer.classList.add("up");
    }
}

class EditMode{
    constructor(){
        
    }
}





//初期画面では，deletebtnがないためクラスでやろうとするとエラーでる。
//後から追加された要素に対してイベントを設定したい時






// class DeleteBtn{
//     constructor() {
//         //必要なDOMを格納するためのオブジェクトを作成
//         // const row_num = this.DOM.tbody.rows.length;
//         this.DOM = {};
    
//         this.DOM.deletebtn = document.querySelector('.deletebtn');
//         this.DOM.tbody = document.querySelector(".tbody");
//      }

//      //ボタンクリックに対してイベントを付与
//      this.DOM.deletebtn.addEventListener('click',this.__deleterow.bind(this));
//      __deleterow(){
//         tr = this.DOM.deletebtn.parentNode.parentNode.parentNode;
//         tr.parentNode.deleteRow(tr.sectionRowIndex);

   
//      }

// }

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
//ロゴのアニメーションのために，クラスを付与
class LogoAnimation{
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(".ToDo-logo");
    }

    logoanimate(){
        this.DOM.el.classList.add('move');

    }

}

