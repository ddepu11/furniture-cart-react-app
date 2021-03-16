import { FaPlus, FaMinus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import ch from "../ch.jpg";

const Items = () => {
  return (
    <aside className="items">
      <div className="item flex">
        <img src={ch} alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div flex">
          <FaMinus className="minus pointer" />
          <span>24</span>
          <FaPlus className="plus pointer" />
        </div>
        <span>$24.3</span>
        <ImBin className="bin pointer" />
      </div>
      <div className="item flex">
        <img src={ch} alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div flex">
          <FaMinus className="minus pointer" />
          <span>24</span>
          <FaPlus className="plus pointer" />
        </div>
        <span>$24.3</span>
        <ImBin className="bin pointer" />
      </div>
      <div className="item flex">
        <img src={ch} alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div flex">
          <FaMinus className="minus pointer" />
          <span>24</span>
          <FaPlus className="plus pointer" />
        </div>
        <span>$24.3</span>
        <ImBin className="bin pointer" />
      </div>
      <div className="item flex">
        <img src={ch} alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div flex">
          <FaMinus className="minus pointer" />
          <span>24</span>
          <FaPlus className="plus pointer" />
        </div>
        <span>$24.3</span>
        <ImBin className="bin pointer" />
      </div>
      <div className="item flex">
        <img src={ch} alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div flex">
          <FaMinus className="minus pointer" />
          <span>24</span>
          <FaPlus className="plus pointer" />
        </div>
        <span>$24.3</span>
        <ImBin className="bin pointer" />
      </div>
    </aside>
  );
};

export default Items;
