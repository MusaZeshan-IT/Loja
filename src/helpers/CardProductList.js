// CLOTHES IMAGES
import Clothes1 from '../assets/clothes/clothes1.jpg'
import Clothes2 from '../assets/clothes/clothes2.jpg'
import Clothes3 from '../assets/clothes/clothes3.jpg'

// ACCESSORIES IMAGES
import Accessories1 from '../assets/accessories/accessories1.jpg'
import Accessories2 from '../assets/accessories/accessories2.jpg'
import Accessories3 from '../assets/accessories/accessories3.jpg'

// APPLIANCES IMAGES
import Appliances1 from '../assets/appliances/appliances1.jpg'
import Appliances2 from '../assets/appliances/appliances2.jpg'
import Appliances3 from '../assets/appliances/appliances3.jpg'

const CardProductList = () => {
    return (
        [
            // CLOTHES
            {
                id: 1,
                url: Clothes1,
                category: 'clothing'
            },
            {
                id: 2,
                url: Clothes2,
                category: 'clothing'
            },
            {
                id: 3,
                url: Clothes3,
                category: 'clothing'
            },

            // ACCESSORIES
            {
                id: 4,
                url: Accessories1,
                category: 'accessories'
            },
            {
                id: 5,
                url: Accessories2,
                category: 'accessories'
            },
            {
                id: 6,
                url: Accessories3,
                category: 'accessories'
            },

            // APPLIANCES
            {
                id: 7,
                url: Appliances1,
                category: 'appliances'
            },
            {
                id: 8,
                url: Appliances2,
                category: 'appliances'
            },
            {
                id: 9,
                url: Appliances3,
                category: 'appliances'
            },
        ]
    )
}

export default CardProductList;
