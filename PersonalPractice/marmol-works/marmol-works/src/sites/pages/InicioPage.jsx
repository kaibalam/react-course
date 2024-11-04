import { Carousel } from "react-bootstrap"
import { ExampleCarouselImage } from "../components/ExampleCarouselImage"
import { useState } from "react"

export const InicioPage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    const picturesData = [
        {name: 'primera', img: '../src/assets/hero.jpg', paragraph: 'asfdsfdsfdsafdsafdsafdsa'},
        {name: 'segunda', img: '', paragraph: ''},
        {name: 'tercera', img: '', paragraph: ''},
    ]


    return (

        <div>
            <h1>Inicio Page</h1>
            <hr />
            
            <Carousel activeIndex={index} onSelect={handleSelect} className="dark">
                {
                    picturesData.map((item,idx) => 
                    <Carousel.Item key={idx}>
                        <ExampleCarouselImage text={item.img} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.paragraph}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}
