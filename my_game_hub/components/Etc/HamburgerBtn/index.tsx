const Type1 = () => {
  const onClick = () => {
    if (document) {
      document.getElementById('nav-icon1')?.classList.toggle('open');
    }
  };
  return (
    <div id='nav-icon1' onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
const Type2 = () => {
  const onClick = () => {
    if (document) {
      document.getElementById('nav-icon2')?.classList.toggle('open');
    }
  };
  return (
    <div id='nav-icon2' onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
const Type3 = () => {
  const onClick = () => {
    if (document) {
      document.getElementById('nav-icon3')?.classList.toggle('open');
    }
  };
  return (
    <div id='nav-icon3' onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
const Type4 = () => {
  const onClick = () => {
    if (document) {
      document.getElementById('nav-icon4')?.classList.toggle('open');
    }
  };
  return (
    <div id='nav-icon4' onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default { Type1, Type2, Type3, Type4 };
