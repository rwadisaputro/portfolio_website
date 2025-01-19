import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('rw.adisaputro@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Get random data for arc globe viz
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], 
        ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid_1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Richard</p>
              <p className="grid-subtext">
                Having fun researching and solving problems via quantitative methods, esp. through machine learning - statistics or otherwise. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid_2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Primary tech stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, libraries and tools that allow me to build robust and scalable
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[{ 
                //     lat: 40, lng: -100, text: 'Placeholder', 
                //     color: 'white', size: 15 }]}
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
            <div>
              <p className="grid-headtext">Solutions to real-world problems</p>
              <p className="grid-subtext">All of my projects are supported by extensive research so as to attain as high of a rigor as possible.</p>
              <a href="#projects" className="w-fit">
                <Button name="Check out all of my projects" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My passion for data analytics and engineering</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Data isn&apos;t just my
                profession - it's my passion. I enjoy exploring new technologies, learning new advancements and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">rw.adisaputro@gmail.com</p>
              </div>
              {/* <div>
                <Button name="Click here for more detailed contact info" isBeam containerClass="w-full mt-10" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;