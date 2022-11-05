import Card from "./component/Card";
import image1 from './image1.jpg'

function App() {
  return (
    <div >
      <Card background={image1} title="Black Adam" date="2022" review="Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world." actor="Dwayne Johnson" />
      <Card background="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg" title="Fast and Furious" date="2021" review="Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother." actor="Vin Diesel" />
      
    </div>
  );
}

export default App;
