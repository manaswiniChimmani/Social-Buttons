const Button = (props) => {
  //  Write your code here.
  const { btnText, className } = props;
  return <button className={`button ${className}`}>{btnText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 class="h1">Social Buttons</h1>
    </div>
    <div className="buttons-container">
      <Button btnText="Like" className="btn1" />
      <Button btnText="Comment" className="btn2" />
      <Button btnText="Share" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
