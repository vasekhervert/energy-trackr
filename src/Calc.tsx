import React from "react";

export default function Calc() {
  const prevUsageInVT = 13127;
  const prevUsageInNT = 76905;

  const currentUsageInVT = 13563;
  const currentUsageInNT = 79315;

  const usageDiffInVT = (currentUsageInVT - prevUsageInVT) / 1000;
  const usageDiffInNT = (currentUsageInNT - prevUsageInNT) / 1000;

  const dodaneMnozstviVT = usageDiffInVT * 4074;
  const dodaneMnozstviNT = usageDiffInNT * 3101;
  //   const dodaneMnozstviVT = usageDiffInVT * 6050;
  //   const dodaneMnozstviNT = usageDiffInNT * 6050;
  const danElektriny = (usageDiffInVT + usageDiffInNT) * 28.3;
  //   const stalyPlat = 79;
  const stalyPlat = 120;

  const distribMnozstviVT = usageDiffInVT * 238.57;
  const distribMnozstviNT = usageDiffInNT * 189.26;
  const cenaZaPrikon = 320;
  const cenaZaSystemoveSluzby = (usageDiffInVT + usageDiffInNT) * 113.53;
  const cenaZaCinnostiOperatora = 4.2;
  const slozkaNaPodporu = (usageDiffInVT + usageDiffInNT) * 495;

  function calculateServices(a: any, b: any, c: any, d: any, e: any, f: any) {
    const arr = arguments;

    return a + b + c + d + e + f;
  }

  function calculateElectricity(a: any, b: any, c: any, d: any) {
    const arr = arguments;

    return a + b + c + d;
  }

  return (
    <div>
      <p>spotřeba ve vysokém tarifu: {usageDiffInVT} mWh</p>
      <p>spotřeba v nízkém tarifu: {usageDiffInNT} mWh</p>
      <p>
        Celkem za související služby:{" "}
        {calculateServices(
          distribMnozstviVT,
          distribMnozstviNT,
          cenaZaPrikon,
          cenaZaSystemoveSluzby,
          cenaZaCinnostiOperatora,
          slozkaNaPodporu
        ).toFixed(2)}{" "}
        Kč
      </p>
      <p>
        Celkem za dodané množství energie:{" "}
        {calculateElectricity(
          dodaneMnozstviVT,
          dodaneMnozstviNT,
          danElektriny,
          stalyPlat
        ).toFixed(2)}{" "}
        Kč
      </p>

      <p>
        Celkem za dodávku elektřiny a související služby v elektroenergetice v
        Kč s DPH:{" "}
        {(
          (calculateServices(
            distribMnozstviVT,
            distribMnozstviNT,
            cenaZaPrikon,
            cenaZaSystemoveSluzby,
            cenaZaCinnostiOperatora,
            slozkaNaPodporu
          ) +
            calculateElectricity(
              dodaneMnozstviVT,
              dodaneMnozstviNT,
              danElektriny,
              stalyPlat
            )) *
          1.21
        ).toFixed(2)}{" "}
        Kč
      </p>
    </div>
  );
}
