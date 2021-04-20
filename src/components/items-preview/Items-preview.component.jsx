import { React, Component } from "react";
import DATA_ASSETS from "../../data/page-2-assets.json";

import Item from "../../components/item/Item.component";

class ItemPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: DATA_ASSETS,
    };
  }

  render() {
    const { assets } = this.state;

    return (
      <div className="items-preview">
        {assets.map((element, index) => {
          const percentage = (element.quantity * 100) / 50;
          return (
            <Item key={index} percentage={percentage} name={element.name} id={element.id} />
          );
        })}
      </div>
    );
  }
}

export default ItemPreview;
