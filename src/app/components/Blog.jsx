import Container from "./Container";
const Blog = () => {
  return (
    <div id="blog">
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          The Latest Articles page on GreenShop showcases up-to-date, informative articles on sustainable agriculture, farming practices, and industry trends.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2022/01/20103648/agricultural-manager.jpg"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              The Future of Sustainable Agriculture
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Explore the latest advancements in sustainable farming, from precision agriculture to vertical farming, and how they are reshaping the landscape of eco-friendly crop production.
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://i.ytimg.com/vi/JuxQS-5NkRY/maxresdefault.jpg"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Growing Your Own Food: A Comprehensive Guide
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Discover a step-by-step guide to cultivating your own crops at home, from choosing the right plants to maintaining soil health, ensuring fresh, homegrown produce.
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.huffingtonpost.com/2014-06-20-droughtstrickenricefieldIndiacreditManojDekaCorbisccr230.jpeg"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Navigating Climate Challenges in Agriculture
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              Learn how farmers are adapting to climate change with innovative practices, resilient crop varieties, and water-saving techniques, ensuring food security in a changing world
              </p>
              <a className="inline-block" href="#">
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
