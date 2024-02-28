import React from"react";

// importing data
import { housesData } from"../data";

// importing use params
import { useParams } from"react-router-dom";

// import icomns
import { BiBath, BiBed, BiArea } from"react-icons/bi";

// import link
import { Link } from"react-router-dom";

const PropertyDetails= () => {
  const { id } =useParams();
  console.log(id);

// get the house based on the id
const house = housesData.find((house) => {
  return house.id ===parseInt(id);
});
console.log(house);

return (
  <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{house.name}</h2>
          <h3 className="text-lg mb-4">{house.address}</h3>
        </div>

        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-green-500 text-white px-3 rounded-full">{house.type}</div>
          <div className="bg-violet-500 text-white px-3 rounded-full">{house.country}</div>
        </div>

        <div>
            <div className="text-3xl font-semibold text-violet-600">$ {house.price}</div>
          </div>
        </div>	

        <div className="flex flex-col items-start gap-8 lg:flex-row ">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg}alt={house.type} />
            </div>

            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>

              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>	

            <div>{house.description}</div>
          </div>

          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8 ">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image}alt="" />
              </div>

              <div className="font-bold text-lg">
                <div>{house.agent.name}</div>
                <Link to=''className="text-violet-700 text-sm">View Listings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PropertyDetails;
