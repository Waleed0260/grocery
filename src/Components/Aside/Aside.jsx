import React, { useState } from "react";
import "./Aside.css";
import { CiApple } from "react-icons/ci";
import { FaFish, FaCat } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { MdCleaningServices } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Shop from "../Shop/Shop";
const Aside = () => {
  const [expand, setExpand] = useState(false);
  const [click, setClick] = useState(false);
  const [btn, setBtn] = useState(false);
  const [clc, setClc] = useState(false);
  const [down, setDown] = useState(false);
  const [lide, setLide] = useState(false);
  const [boom, setBoom] = useState(false);
  const [low, setLow] = useState(false);
  const [ride, setRide] = useState(false);
  const [end, setEnd] = useState(false);

  const handleClick = () => {
    setClick(false);
    setExpand(true);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
    setEnd(false);
  };

  const handlechan = () => {
    setClick(true);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
    setEnd(false);
  };

  const btnClick = () => {
    setClick(false);
    setExpand(false);
    setBtn(true);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
  };
  const change = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(true);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
  };
  const lose = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(true);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
  };
  const life = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(true);
    setBoom(false);
    setLow(false);
    setRide(false);
  };
  const handleChange = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(true);
    setLow(false);
    setRide(false);
  };
  const handlelow = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(true);
    setRide(false);
  };
  const handleRide = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(true);
    setEnd(false);
  };
  const handleEnd = () => {
    setClick(false);
    setExpand(false);
    setBtn(false);
    setClc(false);
    setDown(false);
    setLide(false);
    setBoom(false);
    setLow(false);
    setRide(false);
    setEnd(true);
  };
  return (
    <div className="points">
    <div className="aside">
      <aside>
        <ul>
          <li style={{marginTop: "30px"}}>
            <div onClick={handleClick}>
              <CiApple /> <b><Link to="/shop/fruits&vegetables" style={{textDecoration: "none", color: "rgb(75, 74, 72)", cursor: "pointer"}}>Fruits & vegetables</Link></b>{" "}
            </div>
          </li>
          {expand ? (
            <>
              <li><Link to="/shop/fruits" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Fruits</Link></li>
              <li><Link to="/shop/vegetables" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Vegetables</Link></li>
            </>
          ) : (
            ""
          )}
          <li>
            <div onClick={handlechan}>
              {" "}
              <FaFish /> <b><Link to="/shop/meat&fish" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Meat & fish</Link></b>
            </div>
          </li>
          {click ? (
            <>
              <li><Link to="/shop/meat" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Fresh Fish</Link></li>
              <li><Link to="/shop/fish" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Meat</Link></li>
            </>
          ) : (
            ""
          )}
          <li>
            <div onClick={btnClick}>
              {" "}
              <TbSoup /> <b><Link to="/shop/snacks" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Snacks</Link></b>
            </div>
          </li>
          {btn ? (
            <>
              <li><Link to="/shop/biscuit" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Nuts & biscuit</Link></li>
              <li><Link to="/shop/chocolate" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Chocolate</Link></li>
              <li><Link to="/shop/pasta" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Crisps</Link></li> <li>Noodles & pasts</li>
              <li><Link to="/shop/soup" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>soup</Link></li>{" "}
            </>
          ) : (
            ""
          )}
          <li>
            <div onClick={change}>
              {" "}
              <FaCat /> <b><Link to="/shop/pets" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Pet care</Link></b>
            </div>
          </li>
          {clc ? (
            <>
              <li><Link to="/shop/cat" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Cat food</Link></li>
              <li><Link to="/shop/dog" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Dog food</Link></li> <li>accessories</li>
            </>
          ) : (
            ""
          )}
          <li>
            <div onClick={lose}>
              {" "}
              <MdCleaningServices /> <b><Link to="/shop/home&cleaning" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Home & cleaning</Link></b>
            </div>
          </li>
          {down ? (
            <>
              <li><Link to="/shop/home&cleaning" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Air fresher</Link></li>
              <li><Link to="/shop/home&cleaning" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>cleaning products</Link></li>
              <li><Link to="/shop/home&cleaning" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>kitchen accessories</Link></li>
              <li><Link to="/shop/home&cleaning" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Laundry</Link></li>
            </>
          ) : (
            ""
          )}
          <li>
            <div onClick={life}>
              <TbSoup /> <b><Link to="/shop/dairy" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Dairy</Link></b>
            </div>
          </li>
          {lide ? (
            <>
              <li><Link to="/shop/milk" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Milk</Link></li>
              <li><Link to="/shop/butter" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Butter</Link></li>
              <li><Link to="/shop/egg" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Egg</Link></li>
              <li><Link to="/shop/yougurt" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Yougurt</Link></li>
            </>
          ) : (
            ""
          )}

          <li>
            <div onClick={handleChange}>
              <TbSoup /> <b><Link to="/shop/cooking" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Cooking</Link></b>
            </div>
          </li>
          {boom ? (
            <>
              <li><Link to="/shop/oil" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Oil</Link></li>
              <li><Link to="/shop/rice" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Rice</Link></li>
              <li><Link to="/shop/salt&sugar" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Salt & sugar</Link></li>
              <li><Link to="/shop/spices" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Spices</Link></li>
            </>
          ) : (
            ""
          )}

          <li>
            <div onClick={handlelow}>
              <TbSoup /> <b><Link to="/shop/breakfast" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Breakfast</Link></b>
            </div>
          </li>
          {low ? (
            <>
              <li><Link to="/shop/bread" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Bread</Link></li>
              <li><Link to="/shop/cereal" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Cereal</Link></li>
              <li><Link to="/shop/jam" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Jam</Link></li>
            </>
          ) : (
            ""
          )}

          <li>
            <div onClick={handleRide}>
              <TbSoup /> <b><Link to="/shop/beverage" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Beverage</Link></b>
            </div>
          </li>
          {ride ? (
            <>
              <li><Link to="/shop/coffee" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Coffee</Link></li>
              <li><Link to="/shop/coffee" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Energy drinks</Link></li>
              <li><Link to="/shop/juice" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>juice</Link></li>
              <li><Link to="/shop/drinks" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Fizzy Drinks</Link></li>
              <li><Link to="/shop/tea" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Tea</Link></li>
            </>
          ) : (
            ""
          )}

          <li style={{marginBottom: "10px"}}>
            <div onClick={handleEnd}>
              <TbSoup /> <b><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Heath & beauty</Link></b>{" "}
            </div>
          </li>
          {end ? (
            <>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Bath</Link></li>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Cream</Link></li>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Deudarant</Link></li>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Face Care</Link></li>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Oral Care</Link></li>
              <li><Link to="/shop/health&beauty" style={{textDecoration: "none", color: "rgb(75, 74, 72)"}}>Shaving Needs</Link></li>
            </>
          ) : (
            ""
          )}
        </ul>
      </aside>
    </div>

    </div>
  );
};

export default Aside;
