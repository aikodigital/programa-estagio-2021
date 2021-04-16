import stopJson from "../data/paradaLinha.json";
 
export default function paradaJson(){
    let posData = {};
    let arrData = {
        data: []
    };

    stopJson.map(line => (

      posData = {
        id : line.cp,
        number : null,
        origem : line.np,
        destino : line.ed,
        lat: line.py,
        lng: line.px,
        cod: line.cp
      // eslint-disable-next-line no-sequences
      },
      
      arrData.data.push(posData) 
    ));
      
      console.log("aqui 2");
      console.log(arrData);
  
      return arrData;
}