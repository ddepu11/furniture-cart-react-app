import { FaPlus, FaMinus } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const Items = () => {
  return (
    <aside className="items">
      <div className="item">
        <img src="" alt="" />
        <h6>Eames Daw</h6>
        <div className="buttons-div">
          <FaPlus className="plus" />
          <span>24</span>
          <FaMinus className="minus" />
        </div>
        <ImBin className="bin" />
      </div>
    </aside>
  );
};

export default Items;
