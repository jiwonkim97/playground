const Viniciussiega = () => {
  const HEIGHT = 2000;
  const TOP_OFFSET = 50;
  const LEFT_OFFSET = 100;
  return (
    <div style={{ height: '100vh', overflow: 'auto' }} onScrollCapture={e => console.log(e)}>
      <div style={{ position: 'relative', height: HEIGHT }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', backgroundColor: 'black', height: HEIGHT, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 154, display: 'flex', position: 'sticky', top: TOP_OFFSET, left: LEFT_OFFSET, color: '#fff' }}>Triptico</span>
            <div style={{ position: 'absolute', width: '100%' }}>
              <div style={{ display: 'flex', zIndex: 5, position: 'relative', width: '100%' }}>
                <Content />
                <Content />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', backgroundColor: 'black', height: HEIGHT, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 154, display: 'flex', position: 'sticky', top: TOP_OFFSET, left: LEFT_OFFSET, color: '#fff' }}>B-Sides</span>
            <div style={{ position: 'absolute', width: '100%' }}>
              <div style={{ display: 'flex', zIndex: 5, position: 'relative', width: '100%' }}>
                <Content />
                <Content />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', backgroundColor: 'black', height: HEIGHT, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 154, display: 'flex', position: 'sticky', top: TOP_OFFSET, left: LEFT_OFFSET, color: '#fff' }}>Memento</span>
            <div style={{ position: 'absolute', width: '100%' }}>
              <div style={{ display: 'flex', zIndex: 5, position: 'relative', width: '100%' }}>
                <Content />
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viniciussiega;

const Content = () => {
  const MAX_CONTENTS_WIDTH = 1000;
  const MAX_CONTENTS_HEIGHT = 1000;
  return (
    <div
      style={{
        position: 'absolute',
        width: Math.random() * MAX_CONTENTS_WIDTH,
        height: Math.random() * MAX_CONTENTS_HEIGHT,
        backgroundColor: '#fff',
        top: Math.random() * 1080,
        left: Math.random() * 1080,
      }}
    />
  );
};
