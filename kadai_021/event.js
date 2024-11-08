 const btn=document.getElementById('btn');
 const text=document.getElementById('text');

btn.addEventListener('click',()=>{
    setTimeout(()=>{
    text.innerText='ボタンがクリックされました';
    console.log('ボタンがクリックされました');
},2000);
});