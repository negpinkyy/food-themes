import  Carousel from "react-bootstrap/Carousel";


function SliderImages() {
    return (

         <div varient={false}  className="slider1" style={{ 
            backgroundImage: `url("./image/bg-4.jpg")`,  backgroundSize:'cover', backgroundRepeat:'no-repeat', position:'relative' }}>

            <Carousel fade variant='light' indicators={false}>
                <Carousel.Item >
                    <img
                        className="d-block w-25 images"
                        src="./image/bg-3.jpg" fluid
                        alt="First slide"
                        
                     
                    />
                    <Carousel.Caption style={{position:'relative', marginTop: '-200px', marginLeft: '-200px'}}>
                        <h3 style={{position:'relative', color:'#fff'}}>Order Your favourite Breakfast </h3>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >

                    <img
                        className="d-block w-25 images1"
                        src="./image/bg-6.jpg" fluid
                        alt="Second slide"
                        
                       
                    />

                    <Carousel.Caption style={{position:'absolute', marginBottom: '50px', marginLeft: '200px'}}>
                    <h3 style={{position:'relative', color:'#fff'}}>Order Your favourite Lunch </h3>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-25 images2"
                        src="./image/bg-1.jpg" fluid
                        alt="Third slide"
                      
                       
                    />

                    <Carousel.Caption style={{position:'relative', marginTop: '-370px', marginLeft: '-150px'}}>
                    <h3 style={{position:'relative', color:'#fff'}}>Order Your favourite Dinner </h3>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                        <p style={{position:'relative', color:'#fff'}}> Good braekfast is good for your health </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default SliderImages;
