import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Collection = () => {
  return (
    <section className="toy-container hidden lg:block">
      <h1 className="text-center font-extrabold  text-white text-4xl bg-[#7743DB] p-5 rounded-lg mb-8 ">
        Toy Collections
      </h1>

      <Tabs>
        <TabList>
          <Tab>Teddy Bear</Tab>
          <Tab>Rabbit</Tab>
          <Tab>Unicorn</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/85QQyRg/teddy-1.jpg"
                  alt="Teddy Bear 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Teddy 1</h2>
                <h2 className=" text-primary">Sub-Category: Teddy Bear</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/6t6T75F/teddy-7.jpg"
                  alt="Teddy Bear 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Teddy 2</h2>
                <h2 className=" text-primary">Sub-Category: Teddy Bear</h2>
                <h2 className=" text-primary">Price: $16</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/mq4ktBj/teddy-2.jpg"
                  alt="Teddy Bear 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Teddy 3</h2>
                <h2 className=" text-primary">Sub-Category: Teddy Bear</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/bWxVZHX/bunny-1.jpg"
                  alt="Bunny"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Bunny 1</h2>
                <h2 className=" text-primary">Sub-Category: Rabbit</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/jMs4jS5/bunny-3.jpg"
                  alt="Teddy Bear 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Bunny 2</h2>
                <h2 className=" text-primary">Sub-Category: Rabbit</h2>
                <h2 className=" text-primary">Price: $16</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/6b5wQqx/bunny-2.jpg"
                  alt="Bunny 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Bunny 3</h2>
                <h2 className=" text-primary">Sub-Category: Rabbit</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/TbZYXfG/horse-2.jpg"
                  alt="Bunny"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Unicorn 1</h2>
                <h2 className=" text-primary">Sub-Category: Unicorn</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/rcZRJ0v/horse-1.jpg"
                  alt="Teddy Bear 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Unicorn 2</h2>
                <h2 className=" text-primary">Sub-Category: Unicorn</h2>
                <h2 className=" text-primary">Price: $16</h2>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-[400px] h-[400px]"
                  src="https://i.ibb.co/hMZZYSs/horse-3.jpg"
                  alt="Bunny 1"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Unicorn 3</h2>
                <h2 className=" text-primary">Sub-Category: Unicorn</h2>
                <h2 className=" text-primary">Price: $50</h2>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Collection;
