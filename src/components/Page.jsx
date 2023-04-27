import React from "react";
import Chaima from "../image/chaima.png";
import Chaima2 from "../image/chama2.png";
import Chaima3 from "../image/chaima3.png";
import Image from "next/image";
import Servo from "../image/servo.png";
import Flesh from "../image/flesh.png";
import Cle from "../image/cle.png";
import Wil from "../image/wilwod.png";
import Apps from "../image/appel.png";
import Iii from "../image/III.png";
import Group from "../image/group.png";
import Haed from "../image/hard.png";
import Faire from "../image/faire.png";

const Page = () => {
  return (
    <div className=" overflow-hidden ">
      <section className="ms-70 w-[85vw] py-20 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-10 ms-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-5">
              Find true power in your data with Ensome
            </h2>
            <p className="text-gray-400 text-2xl mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex flex-wrap justify-start">
              <button className="rounded-lg bg-blue-600 text-white text-xl py-4 px-6 mb-4 md:mr-4">
                Learn more
              </button>
              <button className="rounded-lg text-black md:ms-4">
                <span className="rounded-full border-2 px-1.5 py-0.5 me-5 border-black">
                  ▷
                </span>
                Watch the demo
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={Chaima} />
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap justify-around">
          <Image src={Wil} className="mb-4 md:mr-6" />
          <Image src={Apps} className="mb-4 md:mr-6" />
          <Image src={Iii} className="mb-4 md:mr-6" />
          <Image src={Group} className="mb-4 md:mr-6" />
          <Image src={Haed} className="mb-4 md:mr-6" />
          <Image src={Faire} className="mb-4 md:mr-6" />
        </div>
      </section>
      <hr />
      <section className="bg-blue-100 px-4 py-10 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mx-auto mb-5 w-full max-w-[400px]">
            Why our clients choose Ensome?
          </h2>
          <p className="text-gray-400 mx-auto mb-5 text-center text-lg md:text-2xl w-full max-w-[550px]">
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-auto text-gray-400 w-full max-w-[70vw] mt-10">
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Servo} />
            </div>
            <h2 className="my-3 font-bold  text-black text-center md:text-left">
              Machine Learning
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1 mt-5 md:mt-0">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Flesh} />
            </div>
            <h2 className="my-3 font-bold text-black text-center md:text-left">
              Data Analytics
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1 mt-5 md:mt-0">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Cle} />
            </div>
            <h2 className="my-3 font-bold text-black text-center md:text-left">
              Data Visualization
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 md:px-0 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col justify-center md:pr-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The newest business analytics platform
            </h2>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-start md:justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-4 text-xl">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-full md:w-4/5 lg:w-3/4"
              src={Chaima2}
              alt="Ensome demo"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-full md:w-4/5 lg:w-3/4"
              alt="Ensome demo"
              src={Chaima3}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-5 font-bold text-center md:text-left">
              Radically new data solutions
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl mb-5 text-center md:text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;
