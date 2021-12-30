import React from 'react';

import MenuItem from '../menu-item/menu-item.component';


import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'BOOSTER SETS',
                imageUrl: 'https://assets.pokemon.com/assets/cms2/img/trading-card-game/series/incrementals/swsh01-build-battle-box/tcg-swsh01-build-battle-box-169-en.jpg',
                id: 1,
                linkUrl: 'boosters'
            },
            {
                title: 'INDIVIDUAL CARDS',
                imageUrl: 'https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/strategy/swsh08/top-cards/swsh08-top-cards-169-en.jpg',
                id: 2,
                linkUrl: '/individual'
            },
            {
                title: 'WEEKLY FEATURED',
                imageUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/06/header-2.jpg',
                id: 3,
                linkUrl: '/weekly'
            },
            {
                title: 'COLLECTIBLES',
                imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D08F/production/_117619335_21f28cd1-f1fa-4ff2-9d4f-3cf2b1a8a0f8.jpg',
                size: 'large',
                id: 4,
                linkUrl: '/collectibles'
            },
            {
                title: 'STARTER DECKS',
                imageUrl: 'https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/strategy/swsh04/charizard/charizard-strategy-169-en.png',
                size: 'large',
                id: 5,
                linkUrl: '/starters'
            }
        ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;