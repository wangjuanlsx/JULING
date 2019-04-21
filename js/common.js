// 点击去推广，分享，一键邀请
$('.common-share-btn').on('click', function(){
    $('.common-model-mark-wrap').addClass('model-show').removeClass('model-hidden');
    $('.common-share-wrap').addClass('model-show').removeClass('model-hidden');
});
// 点击遮罩，关闭弹框
$('.common-model-mark-wrap').on('click', function(){
    $('.common-model-mark-wrap').addClass('model-hidden').removeClass('model-show');
    // 关闭弹框
    $('.common-share-wrap').addClass('model-hidden').removeClass('model-show');
});
// 点击分享关闭
$('.common-share-wrap').on('click', function(){
    $('.common-model-mark-wrap').addClass('model-hidden').removeClass('model-show');
    $('.common-share-wrap').addClass('model-hidden').removeClass('model-show');
});