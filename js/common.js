let drawer_button = document.querySelector(".drawer");

drawer_button.addEventListener("click", drawer_click);

function drawer_click(){
    let drawer_menu = document.querySelector(".drawer_menu");
    drawer_menu.classList.toggle("open");
    drawer_button.classList.toggle("active");
}




// 上のコードをさらに簡略化すると、

// let drawer_button = document.querySelector(".drawer");

// drawer_button.addEventListener("click", () => {
//   document.querySelector(".drawer_menu").classList.toggle("open");
//   drawer_button.classList.toggle("active");
// });

// これでも同じ結果になります。ただ、アロー関数を使ったり、変数を使わずにquerySelectorの処理を行なっているので、
// 体系的に学ぶ観点から、こちらよりも少し煩雑なコードを採用しています。



// さらに、上のコードをjQueryを使って記述する場合は、

// let drawer_button = $(".drawer");

// drawer_button.on("click", drawer_click);

// function drawer_click(){
//     let drawer_menu = $(".drawer_menu");
//     drawer_menu.toggleClass("open");
//     drawer_button.toggleClass("active");
// }

// このようになります。document.querySelectorやtoggleの書き方、クラスの指定方法が違うだけで、
// コード量はそんなに変わりません。単純なJavascriptの場合、jQueryを使うメリットは少ないです。