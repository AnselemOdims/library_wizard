
const Progress = () => {
  return (
      <div className="step__container">
        <div>
          <div><span>1</span></div>
          <h4>Genre</h4>
        </div>
        <div className="step__line"></div>
        <div>
          <div><span>2</span></div>
          <h4>Subgenre</h4>
        </div>
        <div className="step__line"></div>
        <div>
          <div><span>3</span></div>
          <h4>Add new subgenre</h4>
        </div>
        <div className="step__line"></div>
        <div>
          <div><span>4</span></div>
          <h4>Information</h4>
        </div>
      </div>
  );
};

export default Progress;