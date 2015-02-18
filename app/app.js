(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.controller('AppCtrl', function ()
    {
        var ctrl = this;

        ctrl.possibleValues1 = [
            '#D80000', { color: '#0772B9'}, '#1FBB00', { color: '#000000'}, { color: '#FFFFFF'}
        ];

        ctrl.possibleValues2 = [
            'Red', { name: 'Ligh blue'}, 'Green', { name: 'Black'}, { name: 'White'}
        ];

        ctrl.possibleValues3 = [
            'XS', { name: 'S'}, 'M', { name: 'Large'}, { name: 'Small'}
        ];

        ctrl.title = 'Title';

        ctrl.search = false;

        ctrl.selectedList = 5;

        ctrl.possibleValues = [
            { name: 'Accent Pieces' },
            { name: 'After-Shave' },
            { name: 'Backpacks' },
            { name: 'Bags' },
            { name: 'Base Layer' },
            { name: 'Bath & Body Sets' },
            { name: 'Bath Oil' },
            { name: 'Belts' },
            { name: 'Card Cases' },
            { name: 'Carry On Bags' },
            { name: 'Casual Button-Down Shirts' },
            { name: 'Cellulite Treatments/Firmers' },
            { name: 'Chargers' },
            { name: 'Dental Care' },
            { name: 'Deodorants' },
            { name: 'Dress Shirts' },
            { name: 'Exfoliators' },
            { name: 'Eye Care' },
            { name: 'Fitness Equipment' },
            { name: 'Foot Care' },
            { name: 'Foot Cream' },
            { name: 'Fragrance' },
            { name: 'Gloves' },
            { name: 'Goggles' },
            { name: 'Grooming Gifts & Sets' },
            { name: 'Hair & Scalp Treatments' },
            { name: 'Hair Brushes' },
            { name: 'Hair Care Tools & Brushes' },
            { name: 'Hair Removal' },
            { name: 'Headphones' },
            { name: 'Helmets' },
            { name: 'Insoles' },
            { name: 'Jackets' },
            { name: 'Jeans' },
            { name: 'Keychains' },
            { name: 'Loungewear' },
            { name: 'Lingerie Accessories' },
            { name: 'Lip Balm' },
            { name: 'Loafers' },
            { name: 'Luggage' },
            { name: 'Makeup Tools' },
            { name: 'Masks' },
            { name: 'Moccasins' },
            { name: 'Moisturizers' },
            { name: 'Money Clips' },
            { name: 'Mules & Clogs' },
            { name: 'Music' },
            { name: 'Necklaces' },
            { name: 'Night Treatments' },
            { name: 'Oxfords' },
            { name: 'Pants' },
            { name: 'Pins & Brooches' },
            { name: 'Pocket Squares' },
            { name: 'Polo Shirts' },
            { name: 'Pre-Shave' },
            { name: 'Pure Perfume' },
            { name: 'Razors and Shave Tools' },
            { name: 'Refillable' },
            { name: 'Rings' },
            { name: 'Robes' },
            { name: 'Sandals' },
            { name: 'Scarves' },
            { name: 'Serums' },
            { name: 'Shampoo' },
            { name: 'Shaving Cream' },
            { name: 'Shoe Care' },
            { name: 'Shoe Covers' },
            { name: 'Skincare Sets' },
            { name: 'Skincare Tools' },
            { name: 'Sleepwear Sets' },
            { name: 'Sleepwear Tops' },
            { name: 'Slippers' },
            { name: 'Sneakers' },
            { name: 'Socks' },
            { name: 'Styling & Finishing' },
            { name: 'Suits' },
            { name: 'Suncare' },
            { name: 'Sunglasses' },
            { name: 'Sunscreen' },
            { name: 'Sweaters' },
            { name: 'Sweatshirts & Hoodies' },
            { name: 'Swimwear' },
            { name: 'T-Shirts' },
            { name: 'Tanks' },
            { name: 'Tech & Phone Cases' },
            { name: 'Teeth Whitening' },
            { name: 'Tie Clips' },
            { name: 'Ties' },
            { name: 'Toners' },
            { name: 'Travel Size' },
            { name: 'Tuxedos' },
            { name: 'Umbrellas' },
            { name: 'Undershirts' },
            { name: 'Underwear' },
            { name: 'Vests' },
            { name: 'Wallets' },
            { name: 'Watches' },
            { name: 'Water Bottle' },
            { name: 'Waterproof Sunscreen' },
            { name: 'Whiteners & Brighteners' }
        ];

        ctrl.title2 = 'Add custom text';

        ctrl.selectedItems = [];

        ctrl.customText = '';

    });

})();
