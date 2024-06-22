// CLOTHES IMAGES
import Clothes1 from '../assets/clothes/women/green-pink-shalwar.jpg';
import Clothes2 from '../assets/clothes/women/orange-blue-shalwar.jpg';
import Clothes3 from '../assets/clothes/men/brown-kameez.jpeg';
import Clothes4 from '../assets/clothes/men/dark-gray-kameez.jpeg';
import Clothes5 from '../assets/clothes/men/white-kameez.jpeg';
import Clothes6 from '../assets/clothes/women/yellow-shalwar.jpg';

const ClothesList = () => {
    return (
        [
            {
                id: 1,
                name: "T-SHIRT",
                price: "29.99",
                url: Clothes1,
            },
            {
                id: 2,
                name: "BLACK SHIRT",
                price: "78",
                url: Clothes2,
            },
            {
                id: 3,
                name: "COAT",
                price: "67",
                url: Clothes3,
            },
            {
                id: 4,
                name: "GRAY PANT",
                price: "19",
                url: Clothes4,
            },
            {
                id: 5,
                name: "DRESS PANT",
                price: "54.89",
                url: Clothes5,
            },
            {
                id: 6,
                name: "BLUE JEANS",
                price: "31.76",
                url: Clothes6,
            },
        ]
    )
}

export default ClothesList;
