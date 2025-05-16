$(function() {
    // jQueryを記述
    $("a").hover(function() {
        $(this).css("color", "#ff0000");
    }, function() {
        // $(this).css("color", "#0000ff");
        $(this).css("fontSize", "24px");
        $(this).css("backgroundColor", "#00ff00");
    });
});

// cssの場合
// a {
//     font-size: 24px;
//     background-color: red;
// }