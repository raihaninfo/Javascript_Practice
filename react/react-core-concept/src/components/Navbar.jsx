import React from "react";

const Navbar = (props) => {

  console.log(props)
  const { name, productBy, seller } = props.products;



  return (
    <div className="container">
      <div>
        <h2>
          <p
            className="h2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a"
            aria-expanded="false"
            aria-controls="a"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
          </p>
        </h2>

        <div className="collapse" id="a">
          <div className="card card-body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, debitis placeat rem ipsam ea id veritatis similique dolore perferendis alias, pariatur earum quibusdam. Iure labore dolorem ex quis quidem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
