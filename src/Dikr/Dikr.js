import React, { useEffect, useState } from "react";
import { Button } from "react-scroll";
import { Card } from "./Card";
import { DisplayCard } from "./DisplayCard";

export const Dikr = () => {
  const subhanallahText = "سبحان الله";
  const alhamdulillahText = "الحمدلله";
  const allahuakbarText = "الله أكبر";
  const setCount = (indCount, name) => {
    setDikrUnit((prev) => {
      return {
        ...prev,
        [name]: indCount,
      };
    });
  };
  const [dikr, setDikr] = useState(1);
  const [countNumber, setCountNumber] = useState(0);
  const arr = [3, 7, 11, 33];

  const [dikrUnit, setDikrUnit] = useState({
    subhanallah: 0,
    alhamdulillah: 0,
    allahuakbar: 0,
    isthigfar: 0,
    dua: 0,
    ayathulQursi: 0,
  });
  const possibleVal = {
    subhanallah: arr,
    alhamdulillah: arr,
    allahuakbar: arr,
    isthigfar: [3, 6, 9],
    dua: [1],
    ayathulQursi: [1],
  };

  const dikrMap = {
    subhanallah: {
      id: 4,
      name: "subhanallah",
      text: subhanallahText,
      active: dikr === 4,
      count: dikrUnit.subhanallah,
      displayCount: arr[dikrUnit.subhanallah],
      setCount: setCount,
      possibleVal: arr,
    },
    alhamdulillah: {
      id: 5,
      name: "alhamdulillah",
      text: alhamdulillahText,
      active: dikr === 5,
      count: dikrUnit.alhamdulillah,
      displayCount: arr[dikrUnit.alhamdulillah],
      setCount: setCount,
      possibleVal: arr,
    },
    allahuakbar: {
      id: 6,
      name: "allahuakbar",
      text: allahuakbarText,
      active: dikr === 6,
      count: dikrUnit.allahuakbar,
      displayCount: arr[dikrUnit.allahuakbar],
      setCount: setCount,
      possibleVal: arr,
    },
    isthighfar: {
      id: 1,
      name: "isthighfar",
      text: "الستغفر الله",
      active: dikr === 1,
      count: dikrUnit.isthigfar,
      displayCount: arr[dikrUnit.isthigfar],
      setCount: setCount,
      possibleVal: [3, 6],
    },
    dua: {
      id: 2,
      name: "dua",
      text: "...اللهم",
      active: dikr === 2,
      count: dikrUnit.dua,
      displayCount: arr[dikrUnit.dua],
      setCount: setCount,
      possibleVal: [1],
    },
    ayathulQursi: {
      id: 3,
      name: "ayathulQursi",
      text: "...الله لا إله ",
      active: dikr === 3,
      count: dikrUnit.ayathulQursi,
      displayCount: possibleVal.ayathulQursi[dikrUnit.ayathulQursi],
      setCount: setCount,
      possibleVal: [1],
    },
  };

  const [dikrButton, setDikrButton] = useState(dikrMap.isthighfar);

  const findElementById = (obj, id) => {
    return Object.values(obj).find((item) => item.id === id);
  };
  useEffect(() => {
    setDikrButton(findElementById(dikrMap, dikr));
  }, [dikr]);

  const clickHandle = () => {
    setCountNumber((prev) => {
      if (prev >= dikrButton.displayCount) {
        if (dikr === 6) {
          setDikr(1);
          alert("Resume Dua");
          return 0;
        } else {
          setDikr((prev) => {
            return prev + 1;
          });
          return 0;
        }
      }
      return prev + 1;
    });
  };

  return (
    <div className="dikr-main">
      <h1 className="main-h1">Dikr</h1>

      <div className="grid-container">
        <div className="grid-item">
          <Card {...dikrMap.isthighfar} /> {/*isthighfar*/}
        </div>
        <div className="grid-item">
          <Card {...dikrMap.dua} /> {/*dua*/}
        </div>
        <div className="grid-item">
          <Card {...dikrMap.ayathulQursi} /> {/*ayathul qursi*/}
        </div>
        <div className="grid-item">
          <Card {...dikrMap.subhanallah} /> {/*subhanallah*/}
        </div>
        <div className="grid-item">
          <Card {...dikrMap.alhamdulillah} /> {/*alhamdulilla*/}
        </div>
        <div className="grid-item">
          <Card {...dikrMap.allahuakbar} /> {/*allahu akbar*/}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DisplayCard text={countNumber} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button className="dikr-button" onClick={clickHandle}>
          {dikrButton.text}
        </Button>
      </div>
    </div>
  );
};
