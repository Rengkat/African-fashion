"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
interface Product {
  _id: string;
  name: string;
  slug: { current: string; _type: string };
  image: { _type: string; asset: { _ref: string } };
  maxPrice: number;
  minPrice: number;
}
interface Props {
  product: Product;
}
const Measurements = ({ product }: Props) => {
  const { authStatus, user } = useSelector((store: any) => store.shop);

  const [bustOrChest, setBustOrChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [upperBust, setUpperBust] = useState("");
  const [upperHip, setUpperHip] = useState("");
  const [neck, setNeck] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [tight, setTight] = useState("");
  const [arm, setArm] = useState("");
  const [wrist, setWrist] = useState("");
  const [frontBodice, setFrontBodice] = useState("");
  const [hipToKnee, setHipToKnee] = useState("");
  const [insideLegOrInseam, setInsideLegOrInseam] = useState("");
  const [hipToAnkle, setHipToAnkle] = useState("");
  const [biceps, setBiceps] = useState("");
  const [calf, setCalf] = useState("");
  const [image, setImage] = useState<File | null>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(
      image,
      calf,
      biceps,
      hipToAnkle,
      insideLegOrInseam,
      hipToKnee,
      frontBodice,
      wrist,
      arm,
      tight,
      shoulder,
      neck,
      upperHip,
      upperBust,
      hips,
      waist,
      bustOrChest
    );
    setImage(null);
    setCalf("");
    setBiceps("");
    setHipToAnkle("");
    setFrontBodice("");
    setWrist("");
    setArm("");
    setTight("");
    setShoulder("");
    setNeck("");
    setUpperHip("");
    setUpperBust("");
    setHips("");
    setWaist("");
    setBustOrChest("");
    setHipToKnee("");
    setInsideLegOrInseam("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold py-5 text-center">Body Measurement Form</h1>
        <div className="flex gap-3">
          <div className="w-1/2">
            <label>Bust or chest</label>
            <input
              onChange={(e) => setBustOrChest(e.target.value)}
              value={bustOrChest}
              className="inputs-measure"
              type="number"
              name="bust"
            />
            <label>waist</label>
            <input
              onChange={(e) => setWaist(e.target.value)}
              value={waist}
              className="inputs-measure"
              type="number"
              name="waist"
            />
            <label>hip</label>
            <input
              onChange={(e) => setHips(e.target.value)}
              value={hips}
              className="inputs-measure"
              type="number"
              name="hip"
            />
            <label>upper bust</label>
            <input
              onChange={(e) => setUpperBust(e.target.value)}
              value={upperBust}
              className="inputs-measure"
              type="number"
              name="upper-bust"
            />
            <label>upper hip</label>
            <input
              onChange={(e) => setUpperHip(e.target.value)}
              value={upperHip}
              className="inputs-measure"
              type="number"
              name="upper-hip"
            />
            <label>neck</label>
            <input
              onChange={(e) => setNeck(e.target.value)}
              value={neck}
              className="inputs-measure"
              type="number"
              name="neck"
            />
            <label>shoulder</label>
            <input
              onChange={(e) => setShoulder(e.target.value)}
              value={shoulder}
              className="inputs-measure"
              type="number"
              name="shoulder"
            />
            <label>tight</label>
            <input
              onChange={(e) => setTight(e.target.value)}
              value={tight}
              className="inputs-measure"
              type="number"
              name="tight"
            />
          </div>
          <div className="w-1/2">
            <label>arm</label>
            <input
              onChange={(e) => setArm(e.target.value)}
              value={arm}
              className="inputs-measure"
              type="number"
              name="arm"
            />
            <label>wrist</label>
            <input
              onChange={(e) => setWrist(e.target.value)}
              value={wrist}
              className="inputs-measure"
              type="number"
              name="wrist"
            />
            <label>front Bodice</label>
            <input
              onChange={(e) => setFrontBodice(e.target.value)}
              value={frontBodice}
              className="inputs-measure"
              type="number"
              name="front-bodice"
            />
            <label>hip to knee</label>
            <input
              onChange={(e) => setHipToKnee(e.target.value)}
              value={hipToKnee}
              className="inputs-measure"
              type="number"
              name="hip-to-knee"
            />
            <label>inside leg / inseam</label>
            <input
              onChange={(e) => setInsideLegOrInseam(e.target.value)}
              value={insideLegOrInseam}
              className="inputs-measure"
              type="number"
              name="inside-leg"
            />
            <label>hip to ankle</label>
            <input
              onChange={(e) => setHipToAnkle(e.target.value)}
              value={hipToAnkle}
              className="inputs-measure"
              type="number"
              name="hip-to-ankle"
            />
            <label>biceps</label>
            <input
              onChange={(e) => setBiceps(e.target.value)}
              value={biceps}
              className="inputs-measure"
              type="number"
              name="biceps"
            />
            <label>calf</label>
            <input
              onChange={(e) => setCalf(e.target.value)}
              value={calf}
              className="inputs-measure"
              type="number"
              name="calf"
            />
          </div>
        </div>
        <p className="my-3 font-semibold"> Prefer different material for same style?</p>
        <div className="my-4 relative w-full py-2 px-3 border-2 border-black h-[7vh]">
          <input
            onChange={(e) => {
              const selectedFile = e.target.files && e.target.files[0];
              if (selectedFile) {
                setImage(selectedFile);
              }
            }}
            type="file"
            name="file"
            id=""
            className=" absolute inset-0 z-[2] opacity-0"
          />
          <button className="bg-[#000] w-full absolute inset-0 text-white">
            Upload image of material sample
          </button>
        </div>
        <button
          type="submit"
          className=" uppercase w-full bg-black text-white py-4 px-3 font-semibold my-2">
          Submit
        </button>
        <p>
          Prefer to connect with the stylist: <Link href={""}>CHINEX FASHION</Link>{" "}
        </p>
      </form>
    </>
  );
};

export default Measurements;
