import React from "react";

const Measurements = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold py-5 text-center">
        Body Measurement Form
      </h1>
      <div className="flex gap-3">
        <div className="w-1/2">
          <label>Bust or chest</label>
          <input className="inputs-measure" type="number" name="bust" />
          <label>waist</label>
          <input className="inputs-measure" type="number" name="waist" />
          <label>hip</label>
          <input className="inputs-measure" type="number" name="hip" />
          <label>upper bust</label>
          <input className="inputs-measure" type="number" name="upper-bust" />
          <label>upper hip</label>
          <input className="inputs-measure" type="number" name="upper-hip" />
          <label>neck</label>
          <input className="inputs-measure" type="number" name="neck" />
          <label>shoulder</label>
          <input className="inputs-measure" type="number" name="shoulder" />
          <label>tight</label>
          <input className="inputs-measure" type="number" name="tight" />
        </div>
        <div className="w-1/2">
          <label>arm</label>
          <input className="inputs-measure" type="number" name="arm" />
          <label>wrist</label>
          <input className="inputs-measure" type="number" name="wrist" />
          <label>front Bodice</label>
          <input className="inputs-measure" type="number" name="front-bodice" />
          <label>hip to knee</label>
          <input className="inputs-measure" type="number" name="hip-to-knee" />
          <label>inside leg / inseam</label>
          <input className="inputs-measure" type="number" name="inside-leg" />
          <label>hip to ankle</label>
          <input className="inputs-measure" type="number" name="hip-to-ankle" />
          <label>biceps</label>
          <input className="inputs-measure" type="number" name="biceps" />
          <label>calf</label>
          <input className="inputs-measure" type="number" name="calf" />
        </div>
      </div>
    </>
  );
};

export default Measurements;
