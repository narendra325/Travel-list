function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>Add Atleast one item to get started</em>
      </div>
    );
  }
  const itemsSelected = items.length;
  const itemsMarked = items.filter((items) => items.packed).length;
  const itemPercentage = (itemsMarked / itemsSelected) * 100;
  return (
    <div className="stats">
      <em>
        {itemPercentage === 100
          ? `🌴You are ready to go ✈️`
          : `You have ${itemsSelected} items in the list and you have marked ${itemsMarked}( ${itemPercentage}%)`}
      </em>
    </div>
  );
}

export default Stats;
