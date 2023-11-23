const Blogs = () => {
  return (
    <section className="toy-container">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              Access tokens are short-lived tokens that are used to access
              protected resources. They are typically issued for a limited
              period of time, such as 30 minutes or an hour. Refresh tokens are
              long-lived tokens that can be used to obtain new access tokens.
              They are typically issued for a period of weeks or months. Refresh
              tokens are typically stored in the browser local storage or a
              secure database.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases
          </div>
          <div className="collapse-content">
            <p>
              SQL and NoSQL are two different types of databases. SQL databases
              are relational databases, while NoSQL databases are non-relational
              databases. SQL databases are based on the relational model, which
              organizes data into tables. Each table has a set of columns and
              rows. NoSQL databases do not have a fixed schema.NoSQL databases
              are often use for storing large amounts of unstructured data.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content">
            <p>
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for building
              dynamic web applications. Nest.js is a framework built on top of
              Express.js that provides a more opinionated and structured
              approach to building web applications.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              MongoDB aggregate is a feature that allows you to perform complex
              operations on your data. It is a powerful tool that can be used to
              filter, group, sort, and transform your data in a variety of ways.
              To use MongoDB aggregate, you need to create an aggregation
              pipeline. An aggregation pipeline is a sequence of stages that are
              applied to your data in order to produce the desired results. Each
              stage performs a specific operation on the data, such as
              filtering, grouping, or sorting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
