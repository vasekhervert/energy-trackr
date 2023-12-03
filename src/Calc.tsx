import AddReading from "./components/AddReading";

export default function Calc() {
  // const prevUsageInVT = 13127;
  // const prevUsageInNT = 76905;

  // const currentUsageInVT = 13563;
  // const currentUsageInNT = 79315;

  // const prevUsageInVT = 14527;
  // const prevUsageInNT = 84179;

  // const prevUsageInVT = 14784;
  // const prevUsageInNT = 85306;

  // const prevUsageInVT = 14966;
  // const prevUsageInNT = 85939;

  // const currentUsageInVT = 15217;
  // const currentUsageInNT = 86833;

  const prevUsageInVT = 15420;
  const prevUsageInNT = 87543;

  const currentUsageInVT = 15604;
  const currentUsageInNT = 88227;

  const usageDiffInVT = (currentUsageInVT - prevUsageInVT) / 1000;
  const usageDiffInNT = (currentUsageInNT - prevUsageInNT) / 1000;

  // const dodaneMnozstviVT = usageDiffInVT * 4074;
  // const dodaneMnozstviNT = usageDiffInNT * 3101;
  // const dodaneMnozstviVT = usageDiffInVT * 4855;
  // const dodaneMnozstviNT = usageDiffInNT * 4599;
  const dodaneMnozstviVT = usageDiffInVT * 4161;
  const dodaneMnozstviNT = usageDiffInNT * 3942;
  const danElektriny = (usageDiffInVT + usageDiffInNT) * 28.3;
  //   const stalyPlat = 79;
  // const stalyPlat = 130;
  const stalyPlat = 120;

  const distribMnozstviVT = usageDiffInVT * 238.57;
  const distribMnozstviNT = usageDiffInNT * 189.26;
  const cenaZaPrikon = 321;
  const cenaZaSystemoveSluzby = (usageDiffInVT + usageDiffInNT) * 113.53;
  const cenaZaCinnostiOperatora = 3.43;
  const slozkaNaPodporu = (usageDiffInVT + usageDiffInNT) * 0;

  function calculateServices(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ) {
    const arr = arguments;

    return a + b + c + d + e + f;
  }

  function calculateElectricity(a: number, b: number, c: number, d: number) {
    const arr = arguments;

    return a + b + c + d;
  }

  return (
    <>
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
      <AddReading />
    </>
  );
}
