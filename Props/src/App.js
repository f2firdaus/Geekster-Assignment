import Card from "./component/Card";


function App() {
  return (
    <>
    <div className="div1">  
    <Card colorCode="#FF6663" title="#FF6663" name="PINK"/>
     <Card colorCode="#333333" title="#333333" name="GREY"/>
     <Card colorCode="#000000" title="#000000" name="BLACK"/>
     <Card colorCode="#38BB14" title="#38BB14" name="GREEN"/>
      <Card colorCode="#C90B0B" title="#C90B0B" name="RED" /></div>
      <div className="div3">
     <Card colorCode="#FF8000" title="#FF8000" name="ORANGE"/>
     <Card colorCode="#FFF500" title="FFF500" name="YELLOW"/>
     <Card colorCode="#CCCCCC" title="#CCCCCC" name="LIGHT GREY"/>
     <Card colorCode="#7E41A2" title="#7E41A2" name="PURPLE"/>
     <Card colorCode="#C14911" title="#C14911" name="BROWN"/>
     </div>
     </>
  );
}

export default App;
