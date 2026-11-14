BlockEvents.modification(event => {
    const blocksToFix = [
        'simulated:swivel_bearing', 'create_connected:item_silo', 'dndesires:bore_block', 'createdeco:white_shipping_container',
        'dndesires:pink_bore_block', 'dndesires:white_bore_block', 'dndesires:orange_bore_block', 'dndesires:magenta_bore_block',
        'dndesires:light_blue_bore_block', 'dndesires:lime_bore_block', 'dndesires:yellow_bore_block', 'dndesires:gray_bore_block',
        'dndesires:black_bore_block', 'dndesires:cyan_bore_block', 'dndesires:light_gray_bore_block', 'dndesires:blue_bore_block',
        'dndesires:purple_bore_block', 'dndesires:green_bore_block', 'dndesires:brown_bore_block', 'dndesires:red_bore_block',
        'createdeco:orange_shipping_container', 'createdeco:cyan_shipping_container', 'createdeco:light_blue_shipping_container', 
        'createdeco:magenta_shipping_container', 'createdeco:yellow_shipping_container', 'createdeco:lime_shipping_container',
        'createdeco:pink_shipping_container', 'createdeco:gray_shipping_container', 'createdeco:light_gray_shipping_container',
        'createdeco:purple_shipping_container', 'createdeco:blue_shipping_container', 'createdeco:brown_shipping_container',
        'createdeco:green_shipping_container', 'createdeco:red_shipping_container', 'createdeco:black_shipping_container'
    ];

    blocksToFix.forEach(blockId => {
        event.modify(blockId, block => {
            block.explosionResistance = 6.0;
            block.destroySpeed = 5.0;
        });
    });
});
