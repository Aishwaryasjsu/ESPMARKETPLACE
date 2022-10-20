import React, { useState } from "react";
import { Card, Col, Row, Label } from "reactstrap";
import buyerImg from "../public/images/Buyer.png";
import sellerImg from "../public/images/Seller.png";

export default function Profile(props) {
  const [isActive, setIsActive] = useState({
    buyer: false,
    seller: false,
  });
  const profileStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  function setProfile(id) {
    if (id == "buyer") {
      setIsActive({
        buyer: true,
        seller: false,
      });
    } else if (id == "seller") {
      setIsActive({
        buyer: false,
        seller: true,
      });
    }
  }

  return (
    <div>
      <Row>
        <Col
          id="buyer"
          style={profileStyle}
          onClick={() => {
            props.selectProfile("buyer");
            setProfile("buyer");
          }}
        >
          <Card
            className="buyer-profile"
            style={{
              boxShadow: isActive.buyer ? "inset 0 0 0 4px #DAEAF4" : "",
            }}
          >
            <img
              width="150px"
              src={buyerImg}
              style={{ margin: "10px" }}
              alt=""
            />
            Buyer
          </Card>
        </Col>
        <Col
          id="seller"
          style={profileStyle}
          onClick={() => {
            props.selectProfile("seller");
            setProfile("seller");
          }}
        >
          <Card
            className="seller-profile"
            style={{
              boxShadow: isActive.seller ? "inset 0 0 0 4px #DAEAF4" : "",
            }}
          >
            <img
              width="150px"
              src={sellerImg}
              style={{ margin: "10px" }}
              alt=""
            />
            Seller
          </Card>
        </Col>
      </Row>
    </div>
  );
}
