const btn=document.getElementById('btn');
console.log(btn);

btn.addEventListener('click',()=>{
    console.log('ボタンがクリックされました');
    const text=document.getElementById('text');
    text.innerText='ボタンがクリックされました';
});