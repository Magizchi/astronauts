import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/atoms/button";
import Input from "../components/atoms/inputs";
import Select from "../components/atoms/select";
import useArrayHook from "../hooks/useArray";

const AstronautBuilder = { name: "", planet: { id: 0, name: "", image: "" }, id: 0 };
type AstroForm = { name: string; planet: { id: number; name: string; image: string }; id: number };
const App = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [astronautForm, setAstronautForm] = useState<AstroForm>(AstronautBuilder);
  const { array: astronauts, save, remove } = useArrayHook<any>([]);

  const GetPlanets = async () => {
    const { data } = await axios.get("http://localhost:4000/api/planets");
    const planetesOptions = data.map((item: { id: number; name: string }) => ({ value: item.id, label: item.name }));
    setOptions(planetesOptions);
  };

  const GetAstronaut = async () => {
    const { data } = await axios.get("http://localhost:4000/api/astronautes");
    save(data);
  };

  useEffect(() => {
    GetPlanets();
    GetAstronaut();
  }, []);

  const onSubmit = async () => {
    const { status } = await axios.post("http://localhost:4000/api/astronautes/create", { ...astronautForm });

    if (status) {
      setAstronautForm(AstronautBuilder);
      return GetAstronaut();
    }
  };

  const removeAstronaut = async (astronauts: any) => {
    const { status } = await axios.delete("http://localhost:4000/api/astronautes/" + astronauts.id);
    if (status) remove(astronauts.id);
  };

  const updateAstronaut = async (astronauts: any) => setAstronautForm(astronauts);

  return (
    <section className="bg-red-500 h-screen w-screen flex">
      <form className="flex flex-col justify-center w-96 border-2 h-96 bg-bleu-600 p-5">
        <Input
          title="Astronaut"
          placeholder="Name"
          value={astronautForm.name}
          name="name"
          onChange={({ target }) => setAstronautForm((curr) => ({ ...curr, name: target.value }))}
        />
        <Select
          label="Planete"
          options={options}
          value={astronautForm?.planet?.id}
          onChange={({ target }) =>
            setAstronautForm((curr) => ({ ...curr, planet: { ...curr.planet, id: +target.value } }))
          }
        />
        <Button type="button" onClick={() => onSubmit()}>
          {astronautForm.id ? "Modifier" : "Sauvegarder"}
        </Button>
      </form>
      <div>
        {astronauts.map((astronaut) => (
          <div key={astronaut.id} className="relative border m-1 p-1 flex items-center">
            <Button
              onClick={() => removeAstronaut(astronaut)}
              className="p-0 m-0 leading-none absolute top-0 right-0 rounded-full bg-green-700 w-5 h-5 text-sm flex justify-center items-center"
            >
              x
            </Button>
            <Button
              onClick={() => updateAstronaut(astronaut)}
              className="p-0 m-0 leading-none absolute bottom-0 right-0 rounded-full bg-blue-600 w-5 h-5 text-sm flex justify-center items-center"
            >
              U
            </Button>
            <img className="w-14" src={astronaut.planet.image} />
            <span>{astronaut.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
