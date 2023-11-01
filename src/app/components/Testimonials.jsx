/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Daniella Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Mall owner
                </p>
              </div>
            </div>
            <p className="mt-8">
              As a mall owner, I was searching for a sustainable solution to
              enhance our property's offerings. Implementing 'GreenShop' not
              only attracted environmentally conscious tenants but also created
              a vibrant marketplace for local farmers. Our mall is now a hub for
              both shoppers and growers, fostering a sense of community and
              ecological responsibility.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://grist.org/wp-content/uploads/2014/07/female-farmer.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jane doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Farmer
                </p>
              </div>
            </div>
            <p className="mt-8">
              As a farmer on GreenShop, I've not only found a wider market for
              my organic produce but also connected with like-minded sustainable
              farming enthusiasts. This platform has transformed the way I do
              business and share my passion for eco-friendly agriculture.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://thumbs.dreamstime.com/b/farmer-3866512.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanick Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Farmer
                </p>
              </div>
            </div>
            <p className="mt-8">
              GreenShop has revolutionized how I sell my crops. The real-time
              auctions and access to a wide market have significantly increased
              my income.
              <br />
              <br />
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://c.stocksy.com/a/3j6000/z9/25857.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Jana Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Bakery Owner
                </p>
              </div>
            </div>
            <p className="mt-8">
              As a bakery owner, 'GreenShop' has been a game-changer, allowing
              me to source fresh, locally grown ingredients with ease, ensuring
              the quality and sustainability my customers appreciate.
              <br />
              <br />
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://www.sineinsurance.com/wp-content/uploads/2018/01/management-tips-restaurant-owners-min.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Andy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  food company owner
                </p>
              </div>
            </div>
            <p className="mt-8">
              As a food company owner, 'GreenShop' has revolutionized the way we
              source fresh produce. It empowers us to support local farmers,
              ensuring that our customers enjoy the best quality ingredients
              while promoting sustainable agriculture.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://www.foodhygienecompany.co.uk/CPC/proxy/wp-content/uploads/sites/4/2021/06/food-business-owner.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                  Yanndy Doe
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  food company owner
                </p>
              </div>
            </div>
            <p className="mt-8">
              Thanks to 'GreenShop,' we've established a direct and reliable
              supply chain, reducing costs and enhancing the quality of our
              products. It's a game-changer for food businesses committed to
              sustainability.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Testimonials;
