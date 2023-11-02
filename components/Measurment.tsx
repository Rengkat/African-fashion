"use client";
import appwriteServices from "@/lib/appwrite";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import { usePaystackPayment } from "react-paystack";
// import { useRouter } from "next/navigation";
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
interface Config {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
}
interface Reference {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}
const Measurements = () => {
  const { user, checkoutDetails } = useSelector((store: any) => store.shop);
  // const router = useRouter();
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
  const [imgId, setImgId] = useState("");
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const [err, setErr] = useState(false);
  const completeDate = `${year}-${month}-${day + 14}`;

  // function to upload image
  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!image || waist === "") {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 2000);
    } else {
      setLoading(true);
      try {
        const img = await appwriteServices.createImg({ imgFile: image });
        if (img && img.$id) {
          setImgId(img.$id);
        } else {
          console.error("Image data is missing or invalid.");
        }
      } catch (error) {
        console.error("Image upload error:", error);
      } finally {
        setLoading(false);
      }
      setErr(false);
    }
  };
  // Calculation of amount + shipping
  const totalAmountPayStack = () => {
    return (
      ((((checkoutDetails?.minPrice + checkoutDetails?.maxPrice) / 2 + 500) * 60) / 100 + 1500) *
      100
    );
  };
  const totalAmountPaid = () => {
    return (((checkoutDetails?.minPrice + checkoutDetails?.maxPrice) / 2 + 500) * 60) / 100;
  };
  const productPrice = () => {
    return (checkoutDetails?.minPrice + checkoutDetails?.maxPrice) / 2 + 500;
  };
  const balance = () => {
    return (((checkoutDetails?.minPrice + checkoutDetails?.maxPrice) / 2 + 500) * 60) / 100 + 1500;
  };

  const createOrder = async () => {
    try {
      const orderData = {
        balance: balance(),
        amounPaid: totalAmountPaid(),
        price: productPrice(),

        sampleImageId: imgId && imgId,
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
        bustOrChest,
        userId: user?.$id,
        productName: checkoutDetails?.name,
        maxPrice: checkoutDetails?.maxPrice,
        minPrice: checkoutDetails?.minPrice,
        imageURL: checkoutDetails?.image.asset._ref,
        stylist: "",
        productId: checkoutDetails?._id,
        quantity: 1,
        deliveryDate: completeDate,
        status: "pending",
      };

      // Make the API call to create the order using await
      await appwriteServices.createOrders(orderData);
      // console.log(orderData);
    } catch (error) {
      // Handle errors if the API call fails.
      console.error("Error creating the order:", error);
      // Additional error handling code.
    }
    resetAllField();
  };
  const config = {
    reference: new Date().getTime().toString(),
    email: checkoutDetails && user?.email,
    amount: checkoutDetails && totalAmountPayStack(),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  };

  // you can call this function anything
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.

    createOrder();
    // router.replace("/account/orders");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // router.replace("/products");
  };
  const initializePayment = usePaystackPayment(config);
  const resetAllField = () => {
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
      {err && (
        <>
          <p className="text-red-500 text-center p-3 bg-red-300 rounded">
            Please upload sample style and other information!
          </p>
        </>
      )}
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
      <div className="w-full flex items-center justify-between">
        <div className="my-4 relative w-[60%] y-2 px-3 border-2 border-black h-[7vh]">
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
          <button className="bg-[#000] w-full absolute inset-0 text-white y-2 px-3">
            Select image of material sample
          </button>
        </div>
        <button
          onClick={handleUpload}
          className="h-[7vh] w-[35%] px-3 border-2 bg-black text-white outline-none flex items-center justify-between">
          Click to upload mage
        </button>
      </div>
      <button
        onClick={() => {
          if (!image || waist === "") {
            setErr(true);
            setTimeout(() => {
              setErr(false);
            }, 2000);
          } else {
            initializePayment(onSuccess, onClose);
            setErr(false);
          }
        }}
        disabled={loading}
        type="submit"
        className=" uppercase w-full bg-black text-white py-4 px-3 font-semibold my-2">
        {loading ? "Uploading..." : "Pay"}
      </button>
      <p>
        Prefer to connect with the stylist: <Link href={""}>CHINEX FASHION</Link>
      </p>
    </>
  );
};

export default Measurements;
