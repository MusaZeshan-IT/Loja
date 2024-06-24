// ACCESSORIES IMAGES
import Accessories1 from '../assets/accessories/headphones.jpeg'
import Accessories2 from '../assets/accessories/headphones2.jpeg'
import Accessories3 from '../assets/accessories/fitbit-versa2.jpeg'
import Accessories4 from '../assets/accessories/airpods.jpeg'
import Accessories5 from '../assets/accessories/smart-watch.jpeg'
import Accessories6 from '../assets/accessories/wireless-bluetooth-earphones.jpeg'

const AccessoriesList = () => {
    return (
        [
            {
                id: 1,
                name: "T-SHIRT",
                price: "29.99",
                url: Accessories1,
            },
            {
                id: 2,
                name: "BLACK SHIRT",
                price: "78",
                url: Accessories2,
            },
            {
                id: 3,
                name: "COAT",
                price: "67",
                url: Accessories3,
            },
            {
                id: 4,
                name: "GRAY PANT",
                price: "19",
                url: Accessories4,
            },
            {
                id: 5,
                name: "DRESS PANT",
                price: "54.89",
                url: Accessories5,
            },
            {
                id: 6,
                name: "BLUE JEANS",
                price: "31.76",
                url: Accessories6,
            },
        ]
    )
}

export default AccessoriesList;
