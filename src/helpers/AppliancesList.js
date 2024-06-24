// APPLIANCES IMAGES
import Appliances1 from '../assets/appliances/fridge.jpg'
import Appliances2 from '../assets/appliances/milk-shaker2.jpg'
import Appliances3 from '../assets/appliances/modern-tap.jpg'
import Appliances4 from '../assets/appliances/portable-fan.jpg'
import Appliances5 from '../assets/appliances/milk-shaker3.jpg'
import Appliances6 from '../assets/appliances/juice-blender.jpg'

const AppliancesList = () => {
    return (
        [
            {
                id: 1,
                name: "T-SHIRT",
                price: "29.99",
                url: Appliances1,
            },
            {
                id: 2,
                name: "BLACK SHIRT",
                price: "78",
                url: Appliances2,
            },
            {
                id: 3,
                name: "COAT",
                price: "67",
                url: Appliances3,
            },
            {
                id: 4,
                name: "GRAY PANT",
                price: "19",
                url: Appliances4,
            },
            {
                id: 5,
                name: "DRESS PANT",
                price: "54.89",
                url: Appliances5,
            },
            {
                id: 6,
                name: "BLUE JEANS",
                price: "31.76",
                url: Appliances6,
            },
        ]
    )
}

export default AppliancesList;
