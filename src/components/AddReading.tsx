import { FormEvent, useState } from "react";

type FormType = {
  stavNt?: number;
  stavVt?: number;
  stavDate: Date | number;
};

export default function AddReading() {
  const [formState, setFormState] = useState<FormType>({
    stavNt: undefined,
    stavVt: undefined,
    stavDate: Date.now(),
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(formState);
  };

  const makeDate = (input: any) => {
    if (typeof input === "number") {
      const date = new Date(input).toLocaleDateString();
      return date;
    } else return input;
  };

  return (
    <form>
      <div>
        <label htmlFor="stavNt">Stav v NT</label>
        <input
          type="number"
          id="stavNt"
          name="stavNt"
          value={formState.stavNt}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="stavV">Stav v VT</label>
        <input
          type="number"
          id="stavVt"
          name="stavVt"
          value={formState.stavVt}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Datum odečtu</label>
        <input
          type="date"
          id="stavDate"
          name="stavDate"
          value={makeDate(formState.stavDate)}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Přidat odečet
      </button>
    </form>
  );
}
