$(function(){
    // 计算ul的宽度
    function calculateULWidth() {
        var ULWidth = $("#frequently-question-header-id li").length * 77;
        $("#frequently-question-header-id ul").css('width',ULWidth);
    }
    calculateULWidth();
    /*点击列表出弹框*/
    $('.frequently-question-content-item').on('click','.frequently-question-content-item li',function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-wa-kuang-id').addClass('model-show').removeClass('model-hidden');
    });
    $('.my-purse-withdraw-cashes-modal-close').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-wa-kuang-id').addClass('model-hidden').removeClass('model-show');
    });
    /*点击标签切换内容*/
    $('#frequently-question-header-id').on('click','#frequently-question-header-id li',function(){
        var index = $(this).index();
        // 切换内容
        $('.frequently-question-content-wrap').eq(index).addClass('model-show').removeClass('model-hidden');
        $('.frequently-question-content-wrap').eq(index).siblings().addClass('model-hidden').removeClass('model-show');
        // 图标高亮
        $('#frequently-question-header-id li').eq(index).addClass('active').siblings().removeClass('active');
        // 横向滚动条变化
        $("#frequently-question-header-id").scrollLeft(index*77);
    });

})