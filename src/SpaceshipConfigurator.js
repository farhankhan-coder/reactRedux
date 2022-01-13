import react, { useEffect, useState } from 'react'
import './App.css';

function SpaceshipConfigurator() {
  const [Color, setColor] = useState(0)
  const [Power, setPower] = useState(0)
  const [Wrap, setWrap] = useState(0)
  const [Package, setPackage] = useState(0)
  const [Count, setCount] = useState(0)
  const BasePrice = 1000

  const handleColor = (e) => {
    setColor(e.target.value)
  }
  const handlePower = (e) => {
    setPower(e.target.value)
  }
  const handleWrap = (e) => {
    setWrap(e.target.value)
  }
  const handlePackage = (e) => {
    setPackage(e.target.value)
  }
useEffect(()=>{
  console.log();
  debugger;
  setCount( BasePrice + parseInt(Color)  + parseInt(Power) + parseInt(Wrap) + parseInt(Package))
  },[handleColor,handlePower,handleWrap,handlePackage])
  

  return (
    <>
      Base price : {BasePrice}∈
      <br />
      Color: +{Color}∈
      <br />
      Power: +{Power}∈
      <br />
      Wrap drive: +{Wrap}∈
      <br />
      Option package:+{Package}∈
      <br />
      Total :  {Count}∈


      <h1>Spaceship Configurator</h1>
      Select Color
      <table>
        <tbody>
          <tr >
            <td>
              <button onClick={handleColor} value='0' >white<br />+0∈<br />snow</button>
            </td>
            <td>
              <button onClick={handleColor} value='100' >orange<br />+100∈<br />Volcano</button>
            </td>
            <td>
              <button onClick={handleColor} value='100' >sky<br />+100∈<br />Sky</button>
            </td>
          </tr>
        </tbody>
      </table>

      Select Power
      <table><tbody>
        <tr>
          <td>
            <button onClick={handlePower} value='0'>100MW<br />+0∈</button>
          </td>
          <td>
            <button onClick={handlePower} value='200'>150MW<br />+200∈</button>
          </td>
          <td>
            <button onClick={handlePower} value='500'>200MW<br />+500∈</button>
          </td>
        </tr>
      </tbody>
      </table>

      Wrap drive
      <table><tbody>
        <tr>
          <td>
            <button onClick={handleWrap} value='0'>NO<br />+0∈</button>
          </td>
          <td>
            <button onClick={handleWrap} value='1000'>yes<br />+1000∈</button>
          </td>
        </tr>
      </tbody>
      </table>

      Select Option Package
      <table><tbody>
        <tr>
          <td>
            <button onClick={handlePackage} value='1000'>Basic<br />+1000∈<br /><br />Air conditionint<br />Cloth Seats<br />Fm radio</button>
          </td>
          <td>
            <button onClick={handlePackage} value='100'>Sport<br />+100∈<br /><br />Air conditionint<br />Cloth Seats<br />Fm radio<br />Parsonal Tech support</button>
          </td>
          <td><button onClick={handlePackage} value='500'>Lux<br />+500∈<br /><br />Air conditionint<br />Luxury Seats<br />Fm radio<br />chrome weels<br />Window tint<br />Subwoofer</button>
          </td>
        </tr>
      </tbody>
      </table>
    </>
  );
}

export default SpaceshipConfigurator;
