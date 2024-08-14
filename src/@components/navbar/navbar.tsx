import Property from './property';

const Navbar = () => {
  return (
    <div className="flex-col">
      <div>특성</div>
      <div className="flex"></div>
      <Property a={'a'}>Background</Property>
      <Property a={'a'}>Types</Property>
    </div>
  );
};

export default Navbar;
