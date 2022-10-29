import x from './css'
const string=x;
const pause='■';
const play='►';
let n=1;
let m=50;
const demo=document.querySelector('#demo')
const demo2=document.querySelector('#demo2')
const btnPlay=document.querySelector('#btnPlay')
demo.innerText=string.substr(0,n);
demo2.innerHTML=string.substr(0,n);
const run=()=>{
    n=n+1;
    if(n>string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText=string.substr(0,n);
    demo2.innerHTML=string.substr(0,n);
    demo.scrollTop=demo.scrollHeight;
}
let id=setInterval(run,m)
const repeat=()=>{
    if(btnPlay.innerText===pause){
        btnPlay.onclick=()=>{
            window.clearInterval(id)
            btnPlay.innerHTML=play
            if(btnPlay.innerText===play){
                btnPlay.onclick=()=>{
                    id=setInterval(()=>{
                        run()
                        btnPlay.innerHTML=pause;
                        repeat()
                    },m)
                }
            }
        }
    }
}
repeat()
document.querySelector('#btnSlow').onclick=()=>{
    clearInterval(id)
    id=setInterval(run,change('-'))
}
document.querySelector('#btnQuick').onclick=()=>{
    clearInterval(id)
    id=setInterval(run,change('+'))
}
const change=(string)=>{
    m=string==='+'?m-10:m+10
    m=m>=100?100:m<=0?0:m
    return m;
}

