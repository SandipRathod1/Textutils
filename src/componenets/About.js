
export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
  let myStyle = {
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'rgb(36 74  104)':'white'
  }

  return (
    <div className="container">
      <h2 className="my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze the text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a very good website for your daily usage. Where you can perform so many tasks as you can convert the text
              to uppercase and as well as to lowercase and you can perform thing like remove extra spaces from the paragraph abd copy the paragraph
              so that you can paste any where you want.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={myStyle}
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us. Textutils is very compatible website so that you can work with this in a very tittle of your
            internet.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={myStyle}
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a very good website for your daily usage. Where you can perform so many tasks as you can convert the text
              to uppercase and as well as to lowercase and you can perform thing like remove extra spaces from the paragraph and copy the paragraph
              so that you can paste any where you want.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
