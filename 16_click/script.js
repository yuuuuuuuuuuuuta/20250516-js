$(function() {
    // jQueryを記述
    $("a").click(function() {
        $(this).css("color", "#ff0000");
        return false; // リンクのデフォルト動作をキャンセル
    });
});