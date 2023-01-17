import React from "react";

function Trial() {
  return (
    <div>
      <div>
        <label> Select Box </label>
        {/* <h1>Hello</h1> */}
        <select id="dropdown">
          <option> Select</option>
          <option value="box1">Box 1</option>
          <option value="box2">Box 2</option>
          <option value="box3">Box 3</option>
          <option value="box4">Box 4</option>
        </select>
        <br />
      </div>
      <div>
        <input type="checkbox" id="item1" name="item" value="item1" />
        <label for="item1"> Item 1</label>
        <br />
        <input type="checkbox" id="item2" name="item" value="item2" />
        <label for="item2"> Item 2</label>
        <br />
        <input type="checkbox" id="item3" name="item" value="item3" />
        <label for="item3"> Item 3</label>
        <br />
      </div>
    </div>
  );
}

export default Trial;
