$(function(){
    // 点击awb
    $('#my-purse-content1-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-awb-id').addClass('model-show').removeClass('model-hidden');
    });
    // 关闭awb
    $('#my-purse-awb-close-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-awb-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击积分
    $('#my-purse-content2-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-number-id').addClass('model-show').removeClass('model-hidden');
    });
    // 关闭积分
    $('#my-purse-number-close-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-number-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击玩家
    $('#my-purse-content3-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-player-id').addClass('model-show').removeClass('model-hidden');
    });
    // 关闭玩家
    $('#my-purse-player-close-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-player-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击提现，余额不足
   /* $('#my-purse-withdraw-cashes-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-red-pack-id').addClass('model-show').removeClass('model-hidden');
    });*/
    // 关闭提现，余额不足
    /*$('.my-purse-red-pack-close-btn').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-red-pack-id').addClass('model-hidden').removeClass('model-show');
    });*/
    // 点击提现，推广不足
    $('#my-purse-withdraw-cashes-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-tui-id').addClass('model-show').removeClass('model-hidden');
    });
    // 关闭提现，推广不足
    $('.my-purse-red-pack-close-btn').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-tui-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击去推广，分享
    $('#my-purse-tui-share-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-tui-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-share-id').addClass('model-show').removeClass('model-hidden');
    });
    // 点击分享关闭
    $('#my-purse-share-id').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-tui-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-share-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击遮罩，关闭弹框
    $('#my-purse-modal-mark').on('click', function(){
        console.log(11);
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        // 关闭所有弹框
        $('#my-purse-share-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-tui-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-red-pack-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-player-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-number-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-awb-id').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-red-pack-list-id').addClass('model-hidden').removeClass('model-show');
    });
    // 点击红包记录
    $('#my-purse-red-pack-list-btn').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-show').removeClass('model-hidden');
        $('#my-purse-red-pack-list-id').addClass('model-show').removeClass('model-hidden');
    });
    // 关闭红包记录
    $('.my-purse-red-pack-close-btn').on('click', function(){
        $('#my-purse-modal-mark').addClass('model-hidden').removeClass('model-show');
        $('#my-purse-red-pack-list-id').addClass('model-hidden').removeClass('model-show');
    });
})