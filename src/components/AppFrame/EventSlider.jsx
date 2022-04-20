import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function EventSlider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnaX0kjrvb261OLsDsJJRjk7JpXDNJL-rKg&usqp=CAU"
                        width={100} 
                        height={500}
                        alt="First slide first slide"
                    />
                    <Carousel.Caption>
                        <h3>University Event 1</h3>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam temporibus nostrum suscipit, sequi veritatis culpa earum maxime quisquam quas laborum esse veniam, voluptas atque asperiores sit quae architecto reprehenderit quam magni rem aperiam deleniti! Enim aut vitae repellendus id est commodi laboriosam doloremque, a consequatur molestias eos voluptas harum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnaX0kjrvb261OLsDsJJRjk7JpXDNJL-rKg&usqp=CAU"
                        width={100} 
                        height={500}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>University Event 2</h3>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam temporibus nostrum suscipit, sequi veritatis culpa earum maxime quisquam quas laborum esse veniam, voluptas atque asperiores sit quae architecto reprehenderit quam magni rem aperiam deleniti! Enim aut vitae repellendus id est commodi laboriosam doloremque, a consequatur molestias eos voluptas harum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnaX0kjrvb261OLsDsJJRjk7JpXDNJL-rKg&usqp=CAU"
                        width={100} 
                        height={500}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>University Event 3</h3>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam temporibus nostrum suscipit, sequi veritatis culpa earum maxime quisquam quas laborum esse veniam, voluptas atque asperiores sit quae architecto reprehenderit quam magni rem aperiam deleniti! Enim aut vitae repellendus id est commodi laboriosam doloremque, a consequatur molestias eos voluptas harum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
